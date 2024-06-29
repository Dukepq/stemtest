"use client";

import { OpinionColumns } from "../_opinionDisplay/OpinionColumns";
import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import QuestionnaireBody from "./QuestionnaireBody";
import { useStatementContext } from "@/app/context/StatementContext";
import Link from "next/link";
import { MoveRight } from "lucide-react";

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
      {!isLoading && (
        <div className="max-w-256 mx-auto flex items-center justify-center md:justify-end sm:mt-0.5 mt-3">
          <Link href="/resultaten" className="opacity-35 text-sm">
            <span>overslaan en naar overzicht</span>
            <MoveRight strokeWidth={1} size={20} className="inline ml-2" />
          </Link>
        </div>
      )}

      <div className="w-full max-w-256 mx-auto mt-6">
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
