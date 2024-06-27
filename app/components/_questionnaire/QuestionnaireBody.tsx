import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import { Opinion, Statement } from "@/types";
import QuestionnaireNavigation from "./QuestionnaireNavigation";
import DecisionButtons from "./DecisionButtons";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/ui/Spinner";
import { useState } from "react";
import { cn } from "@/app/lib/utils";

type QuestionnaireBodyProps = {
  statement: Statement;
  questionnaireLength: number;
};
export default function QuestionnaireBody({
  statement,
  questionnaireLength,
}: QuestionnaireBodyProps) {
  const { answers, current, setAnswers, setCurrent, isLoading } =
    useAnswerContext();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  const handleClick = (input: Opinion) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      const { id: qId, index: qIndex } = statement;
      newAnswers[qIndex] = { id: qId, answer: input };
      return newAnswers;
    });
    setCurrent((prev) =>
      questionnaireLength - 1 >= prev + 1 ? prev + 1 : prev
    );
    if (current >= questionnaireLength - 1) {
      setIsNavigating(true);
      router.push("/resultaten");
    }
  };

  if (isLoading) {
    return (
      <div className="grid place-content-center w-full h-72">
        <Spinner />
      </div>
    );
  }

  return (
    <div
      key={current}
      className={cn(
        "relative flex flex-col items-center overflow-hidden justify-center min-h-72 py-6 bg-secondary w-256 rounded-md border border-accent",
        isNavigating && "pointer-events-none"
      )}
    >
      {isNavigating && (
        <div className="grid absolute z-10 w-full h-full bg-background/60 place-content-center">
          <Spinner />
        </div>
      )}
      <div className="flex min-h-24 max-w-192 justify-center text-center px-6">
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
        userOpinion={
          answers.find((answer) => answer.id === statement.id)?.answer
        }
      />
    </div>
  );
}
