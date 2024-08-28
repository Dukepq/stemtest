"use client";

import { Button, buttonOptions } from "@/app/components/ui/Button";
import { getFromStorage, setInStorage } from "@/app/lib/localStorage";
import { cn } from "@/app/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NoAnswersAlert() {
  const [hasCompleted, setHasCompleted] = useState<boolean>(true);
  useEffect(() => {
    const completed = getFromStorage("completed");
    if (!completed) {
      setHasCompleted(false);
      return;
    }
  });

  const handleClick = () => {
    setHasCompleted(true);
    setInStorage("completed", true);
  };

  if (hasCompleted) return;
  if (!hasCompleted) {
    return (
      <div className="fixed w-full h-full top-0 left-0 bg-black/25 backdrop-blur-sm z-[100] grid place-content-center">
        <div className="relative rounded-md p-3.5 bg-secondary w-192">
          <button className="absolute top-0 right-0" onClick={handleClick}>
            <X />
          </button>

          <p className="text-lg font-semibold mb-3">
            Je hebt nog een aantal vragen niet beantwoord, ben je zeker dat je
            al naar het overzicht wil?
          </p>
          <div className="flex gap-3">
            <Link className={cn(buttonOptions(), "text-base")} href={"/"}>
              naar vragen
            </Link>
            <Button
              variant={"outline"}
              className="text-base"
              onClick={handleClick}
            >
              naar overzicht
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
