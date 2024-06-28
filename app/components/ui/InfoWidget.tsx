"use client";
import useAnimationWindow from "@/app/hooks/useAnimationWindow";
import { getFromStorage, setInStorage } from "@/app/lib/localStorage";
import { cn } from "@/app/lib/utils";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function InfoWidget({
  className,
  ...props
}: React.AllHTMLAttributes<HTMLDivElement>) {
  const [dismissed, setDismissed] = useState<boolean>(true);

  useEffect(() => {
    const stored = getFromStorage<boolean>("notification_dismissed");
    if (!stored) setDismissed(false);
  }, []);

  const [delayedDismissed, animate] = useAnimationWindow(dismissed, 250);

  if (dismissed) return undefined;
  return (
    <div
      {...props}
      className={cn(
        "relative flex w-full max-w-[calc(100%-12px)] md:max-w-128 py-2 px-6 bg-text/15 rounded-md transition-all",
        className
      )}
    >
      <p className="pr-6">
        Uw antwoorden zijn volledig anoniem en worden met niemand gedeeld.
      </p>
      <X
        className="cursor-pointer text-primary absolute top-1 right-1 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => {
          setDismissed(true);
          setInStorage("notification_dismissed", true);
        }}
      />
    </div>
  );
}
