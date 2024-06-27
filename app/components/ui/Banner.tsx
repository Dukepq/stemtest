"use client";

import { getFromStorage, setInStorage } from "@/app/lib/localStorage";
import { cn } from "@/app/lib/utils";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type BannerProps = {
  children: React.ReactNode;
  dismissable: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Banner({
  dismissable,
  children,
  className,
  ...props
}: BannerProps) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const hidden = getFromStorage<boolean>("banner_hidden");
    if (!hidden) setHidden(false);
  }, []);

  return (
    <>
      {!hidden && (
        <div
          {...props}
          className={cn(
            "h-10 text-base bg-secondary flex justify-center items-center",
            className
          )}
        >
          {children}
          {dismissable && (
            <button
              className="justify-self-end ml-6"
              onClick={() => {
                setInStorage("banner_hidden", true);
                setHidden(true);
              }}
            >
              <X />
            </button>
          )}
        </div>
      )}
    </>
  );
}
