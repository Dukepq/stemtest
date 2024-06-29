import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import { cn } from "@/app/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";

type QuestionnaireNavigationProps = {
  idx: number;
  questionnaireLength: number;
  disableMoveRight?: boolean;
};
export default function QuestionnaireNavigation({
  idx,
  questionnaireLength,
  disableMoveRight = false,
}: QuestionnaireNavigationProps) {
  const { answers, setCurrent } = useAnswerContext();
  const allowMoveLeft = idx >= 1;
  const allowMoveRight =
    !disableMoveRight &&
    idx < questionnaireLength - 1 &&
    idx < Object.keys(answers).length;

  return (
    <div className="flex gap-2 items-center py-1 sm:py-3">
      <button
        disabled={!allowMoveLeft}
        className={cn(
          "cursor-pointer text-text/80 hover:text-text/100 transition-colors",
          !allowMoveLeft && "opacity-25 cursor-default"
        )}
        onClick={() => {
          if (!allowMoveLeft) return;
          setCurrent((prev) => (allowMoveLeft ? prev - 1 : prev));
        }}
      >
        <MoveLeft />
      </button>

      <span className="text-sm w-16 text-center select-none">{`${
        idx + 1
      } / ${questionnaireLength}`}</span>
      <button
        disabled={!allowMoveRight}
        className={cn(
          "cursor-pointer text-text/80 hover:text-text/100 transition-colors",
          !allowMoveRight && "opacity-25 cursor-default"
        )}
        onClick={() => {
          setCurrent((prev) => (allowMoveRight ? prev + 1 : prev));
        }}
      >
        <MoveRight />
      </button>
    </div>
  );
}
