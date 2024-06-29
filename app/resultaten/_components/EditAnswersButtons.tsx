"use client";

import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import { cn } from "@/app/lib/utils";
import { Opinion } from "@/types";
import { ThumbsDown, ThumbsUp, CircleSlash } from "lucide-react";
import { useCallback } from "react";

type EditAnswerProps = {
  statementId: string;
} & React.AllHTMLAttributes<HTMLDivElement>;

export default function EditAnswerButtons({
  statementId,
  className,
  ...props
}: EditAnswerProps) {
  const { setAnswers, answers } = useAnswerContext();

  const handleClick = useCallback(
    (input: Opinion) => {
      setAnswers((prev) => ({
        ...prev,
        [statementId]: input,
      }));
    },
    [setAnswers, statementId]
  );

  return (
    <div
      {...props}
      className={cn(
        "flex [&>button]:px-2 [&>button]:py-1 [&>button]:transition-colors [&>button]:h-9 [&>button]:w-16 [&>button]:grid [&>button]:place-content-center",
        className
      )}
    >
      <button
        className={cn(
          answers[statementId] === "agree" && "bg-green/5 border-green/60",
          "border rounded-l-lg"
        )}
        onClick={() => {
          handleClick("agree");
        }}
      >
        <ThumbsUp
          className={cn(answers[statementId] === "agree" && "text-green")}
          size={21}
        />
      </button>
      <button
        className={cn(
          answers[statementId] === "disagree" && "bg-red/5 border-red/60",
          "border border-opacity-10"
        )}
        onClick={() => {
          handleClick("disagree");
        }}
      >
        <ThumbsDown
          className={cn(answers[statementId] === "disagree" && "text-red")}
          size={21}
        />
      </button>
      <button
        className={cn(
          answers[statementId] === "no-opinion" && "bg-text/15 border-text/60",
          "border rounded-r-lg"
        )}
        onClick={() => {
          handleClick("no-opinion");
        }}
      >
        <CircleSlash size={21} />
      </button>
    </div>
  );
}
