import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import { CheckCheck } from "lucide-react";

type UserOpinionIndicator = {
  columnType: "agree" | "disagree" | "abstain";
  statementId: string;
};
export default function UserOpinionIndicator({
  columnType,
  statementId,
}: UserOpinionIndicator) {
  const { answers, setAnswers } = useAnswerContext();
  const userOpinion = answers.find(
    (answer) => answer.id === statementId
  )?.answer;

  if (columnType === userOpinion) {
    return (
      <div className="flex gap-3 text-primary">
        <span className="font-semibold">Uw mening</span>
        <CheckCheck />
      </div>
    );
  }

  return undefined;
}
