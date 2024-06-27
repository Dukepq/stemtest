import { cn } from "@/app/lib/utils";
import { OpinionWidget } from "./OpinionWidget";
import { AgreeOrDisagree } from "./AgreeOrDisagree";
import { AnswerSpecifics } from "@/types";
import UserOpinionIndicator from "./UserOpinionIndicator";

type OpinionColumn = {
  answers: Omit<AnswerSpecifics, "inFavor">[];
  type: "agree" | "disagree" | "abstain";
  hideParties?: boolean;
  showUserOpinion?: boolean;
  statementId?: string;
} & React.AllHTMLAttributes<HTMLDivElement>;
export function OpinionColumn({
  answers,
  type,
  hideParties,
  showUserOpinion,
  statementId,
  className,
  ...props
}: OpinionColumn) {
  const bgColor = type === "agree" ? "bg-green/10" : "bg-red/10";
  return (
    <div {...props} className={cn("p-3 rounded-md", bgColor, className)}>
      <div className="flex justify-between">
        <AgreeOrDisagree hideParties={hideParties} type={type} />
        {showUserOpinion && statementId && (
          <UserOpinionIndicator columnType={type} statementId={statementId} />
        )}
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {answers.map((answer) => {
          return (
            <OpinionWidget
              className={cn(type === "abstain" && "opacity-75")}
              key={answer.name}
              name={answer.name}
              partyLogo={answer.partyLogo}
              reason={answer.reason}
              hideParties={hideParties}
            />
          );
        })}
      </div>
    </div>
  );
}
