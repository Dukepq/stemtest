"use client";
import { useObservingResultsContext } from "@/app/context/ObservingResultsContext";
import Results from "./Results";
import { Party } from "@/drizzle";
import { cn } from "@/app/lib/utils";
import { useState } from "react";
import { ChevronsUp, X } from "lucide-react";
import useAnimationWindow from "@/app/hooks/useAnimationWindow";

type HoveringResultsProps = {
  parties: Party[];
};
export default function HoveringResults({ parties }: HoveringResultsProps) {
  const { observing } = useObservingResultsContext();
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [delayedObserving, animateOut] = useAnimationWindow(observing, 300);

  if (delayedObserving) return;
  return (
    <div
      className={cn(
        "fixed top-0 md:top-3 left-1/2 -translate-x-1/2 animate-slideDownAndFadeAbsoluteEl w-full md:w-[min(1024px,calc(100%-28px))] px-9 py-3 md:rounded-sm bg-secondary drop-shadow-md overflow-hidden z-50",
        animateOut && "bounceUpAndAwayAnimation"
      )}
    >
      <button
        className="absolute top-1 right-1 text-primary opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => setDismissed((prev) => !prev)}
      >
        <X
          className={cn(
            "hidden md:inline transition-transform ease-button",
            dismissed && "rotate-45"
          )}
        />
      </button>
      <Results parties={parties} displayMax={dismissed ? 1 : 3} />
      <div
        onClick={() => setDismissed((prev) => !prev)}
        className="md:hidden flex justify-center py-1 opacity-60"
      >
        <ChevronsUp
          className={cn(
            "transition-transform ease-out duration-300",
            dismissed && "rotate-180"
          )}
        />
      </div>
    </div>
  );
}
