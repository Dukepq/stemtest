import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import { Opinion, Statement } from "@/types";
import QuestionnaireNavigation from "./QuestionnaireNavigation";
import DecisionButtons from "./DecisionButtons";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/ui/Spinner";
import { useState } from "react";
import { cn } from "@/app/lib/utils";
import { setInStorage } from "@/app/lib/localStorage";

type QuestionnaireBodyProps = {
  statement: Statement;
  questionnaireLength: number;
};
export default function QuestionnaireBody({
  statement,
  questionnaireLength,
}: QuestionnaireBodyProps) {
  const { answers, current, incrementCurrent, updateAnswers } =
    useAnswerContext();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  const handleClick = (input: Opinion) => {
    updateAnswers(statement.id, input);
    if (current >= questionnaireLength - 1) {
      setInStorage("completed", true);
      setIsNavigating(true);
      router.push("/stemtest/resultaten");
    } else {
      incrementCurrent();
    }
  };

  return (
    <div
      key={current}
      className={cn(
        "relative flex flex-col items-center",
        isNavigating && "pointer-events-none opacity-50"
      )}
    >
      {isNavigating && (
        <div className="grid absolute z-10 w-full h-full place-content-center">
          <Spinner />
        </div>
      )}
      <div className="flex md:min-h-24 min-h-36 max-w-192 justify-center items-center text-center">
        <h2 className="font-bold text-xl sm:text-2xl">{statement.statement}</h2>
      </div>
      <QuestionnaireNavigation
        idx={current}
        questionnaireLength={questionnaireLength}
      />

      <DecisionButtons
        handleClick={handleClick}
        statement={statement}
        questionnaireLength={questionnaireLength}
        userOpinion={answers[statement.id]}
      />
    </div>
  );
}
