"use client";
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

  if (dismissed) return undefined;
  return (
    <div
      {...props}
      className={cn(
        "relative flex max-w-128 py-2 px-6 bg-text/15 rounded-md transition-all",
        className
      )}
    >
      <p>Uw antwoorden zijn volledig anoniem en worden met niemand gedeeld.</p>
      <X
        className="cursor-pointer absolute top-1 right-1 opacity-60 hover:opacity-100"
        onClick={() => {
          setDismissed(true);
          setInStorage("notification_dismissed", true);
        }}
      />
    </div>
  );
}
