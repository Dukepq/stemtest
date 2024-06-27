"use client";

import { OpinionColumns } from "../_opinionDisplay/OpinionColumns";
import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import QuestionnaireBody from "./QuestionnaireBody";
import { useStatementContext } from "@/app/context/StatementContext";

export default function Questionnaire() {
  const { current, isLoading } = useAnswerContext();
  const statements = useStatementContext();
  return (
    <>
      <div className="flex justify-center">
        <QuestionnaireBody
          statement={statements[current]}
          questionnaireLength={statements.length}
        />
      </div>
      <div className="w-full max-w-256 mx-auto mt-12">
        {!isLoading && (
          <OpinionColumns
            allowToggle={false}
            hideParties={true}
            partyAnswers={statements[current].answers}
          >
            <h3 className="text-lg mb-1 font-semibold">
              Wat zeggen de partijen?
            </h3>
          </OpinionColumns>
        )}
      </div>
    </>
  );
}
