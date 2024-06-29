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
  const { answers } = useAnswerContext();

  if (columnType === answers[statementId]) {
    return (
      <div className="flex gap-3 text-primary">
        <span className="font-semibold">Uw mening</span>
        <CheckCheck />
      </div>
    );
  }

  return undefined;
}
