"use client";

import { OpinionColumns } from "../_opinionDisplay/OpinionColumns";
import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import QuestionnaireBody from "./QuestionnaireBody";
import { useStatementContext } from "@/app/context/StatementContext";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { setInStorage } from "@/app/lib/localStorage";
import Spinner from "../ui/Spinner";

export default function Questionnaire() {
  const { current, isLoading } = useAnswerContext();
  const statements = useStatementContext();

  if (isLoading) {
    return (
      <div className="grid place-content-center w-full h-72">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <QuestionnaireBody
        statement={statements[current]}
        questionnaireLength={statements.length}
      />
      <div className="flex justify-center md:justify-end">
        <Link
          onClick={() => {
            setInStorage("completed", true);
          }}
          href="/resultaten"
          className="opacity-35 text-sm"
        >
          <span>overslaan en naar overzicht</span>
          <MoveRight strokeWidth={1} size={20} className="inline ml-2" />
        </Link>
      </div>
      <div className="mt-3">
        <OpinionColumns
          allowToggle={false}
          hideParties={true}
          partyAnswers={statements[current].answers}
        >
          <h3 className="text-lg mb-1 font-semibold">
            Wat zeggen de partijen?
          </h3>
        </OpinionColumns>
      </div>
    </>
  );
}
