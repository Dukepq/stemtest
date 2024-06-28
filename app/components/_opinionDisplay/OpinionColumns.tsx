"use client";
import { cn } from "../../lib/utils";
import { AnswerSpecifics, Opinion, Statement } from "@/types";
import { extractOpinions } from "@/app/lib/extractOpinion";
import { OpinionColumn } from "./OpinionColumn";
import useAnimationWindow from "@/app/hooks/useAnimationWindow";

type OpinionColumnsProps = {
  partyAnswers: AnswerSpecifics[];
  allowToggle?: boolean;
  open?: boolean;
  hideParties?: boolean;
  showUserOpinion?: boolean;
  statementId?: string;
  children: React.ReactNode;
};

export function OpinionColumns({
  children,
  partyAnswers,
  open,
  allowToggle = false,
  hideParties = false,
  statementId,
  showUserOpinion = false,
}: OpinionColumnsProps) {
  const { abstentions, agreements, disagreements } =
    extractOpinions(partyAnswers);

  const showing = (typeof open === "boolean" && open) || !allowToggle;
  const [delayedShowing, animate] = useAnimationWindow(showing, 500, true);

  return (
    <div className="py-1">
      {children}
      <div
        className={cn(
          "grid overflow-hidden grid-rows-0-fr transition-[grid-template-rows] duration-500 ease-out",
          delayedShowing && !animate && "grid-rows-1-fr"
        )}
      >
        {delayedShowing && (
          <div className="row-span-2">
            <div className="pb-3 grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-3 rounded-md">
              <OpinionColumn
                statementId={statementId}
                showUserOpinion={showUserOpinion}
                hideParties={hideParties}
                type="agree"
                answers={agreements}
              />
              <OpinionColumn
                statementId={statementId}
                showUserOpinion={showUserOpinion}
                hideParties={hideParties}
                type="disagree"
                answers={disagreements}
              />
              {abstentions.length > 0 && (
                <OpinionColumn
                  statementId={statementId}
                  showUserOpinion={showUserOpinion}
                  className="md:col-span-2"
                  type="abstain"
                  answers={abstentions}
                  hideParties={hideParties}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
