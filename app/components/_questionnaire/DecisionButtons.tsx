"use client";

import { Button } from "@/app/components/ui/Button";
import { SquareRoundedCheck } from "@/app/components/ui/Icons";
import { cn } from "@/app/lib/utils";
import { Opinion, Statement } from "@/types";
import { ThumbsDown, ThumbsUp } from "lucide-react";

type DecisionButtonsProps = {
  userOpinion?: "agree" | "disagree" | "no-opinion" | undefined;
  statement: Statement;
  questionnaireLength: number;
  handleClick: (input: Opinion) => void;
};
export default function DecisionButtons({
  userOpinion,
  handleClick,
}: DecisionButtonsProps) {
  return (
    <div className="grid grid-rows-3 w-[90%] sm:w-96 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 mt-6 select-none">
      <Button
        onClick={() => {
          handleClick("agree");
        }}
        variant={"outline"}
        className={cn(
          "relative h-16 flex gap-3 items-center justify-center text-xl rounded-sm border-2 border-green hover:bg-green/100 text-green hover:text-background transition-colors",
          userOpinion &&
            userOpinion !== "agree" &&
            "opacity-50 hover:opacity-100"
        )}
      >
        {userOpinion === "agree" && <SelectedIcon />}
        <span>Eens</span>
        <ThumbsUp />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => handleClick("disagree")}
        className={cn(
          "relative h-16 flex gap-3 items-center justify-center text-xl rounded-sm border-2 border-red hover:bg-red/100 text-red hover:text-background transition-colors",
          userOpinion &&
            userOpinion !== "disagree" &&
            "opacity-50 hover:opacity-100"
        )}
      >
        {userOpinion === "disagree" && <SelectedIcon />}
        <span>Oneens</span>
        <ThumbsDown />
      </Button>
      <Button
        onClick={() => handleClick("no-opinion")}
        className={cn(
          "sm:col-span-2 w-full h-12 transition-colors rounded-sm bg-accent/0",
          userOpinion &&
            userOpinion === "no-opinion" &&
            "bg-accent/50 hover:bg-accent/75 border-primary"
        )}
        variant={"ghost"}
      >
        Geen mening.
      </Button>
    </div>
  );
}

function SelectedIcon({
  className,
}: {
  className?: React.AllHTMLAttributes<HTMLDivElement>["className"];
}) {
  return (
    <SquareRoundedCheck
      className={cn(
        "text-text size-8 absolute -top-2.5 -right-2.5 rounded-sm drop-shadow-md",
        className
      )}
    />
  );
}
