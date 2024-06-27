"use client";
import EditAnswerButtons from "./EditAnswersButtons";
import { useRef, useState } from "react";
import { useStatementContext } from "@/app/context/StatementContext";
import { cn } from "@/app/lib/utils";
import { OpinionColumns } from "@/app/components/_opinionDisplay/OpinionColumns";
import { Statement } from "@/types";
import { ChevronDown } from "lucide-react";

export default function EditAnswers() {
  const statements = useStatementContext();
  const editSectionRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={editSectionRef} className="bg-secondary/100 rounded-sm">
      {statements.map((statement, idx) => {
        return <EditAnswer key={statement.id} {...statement} idx={idx} />;
      })}
    </div>
  );
}

type EditAnswerProps = { idx: number } & Statement;
function EditAnswer({ answers, id, index, statement, idx }: EditAnswerProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "border-x border-b border-accent px-3 relative",
        idx === 0 && "border-t"
      )}
    >
      <OpinionColumns
        statementId={id}
        showUserOpinion={true}
        allowToggle={true}
        open={open}
        partyAnswers={answers}
      >
        <div
          key={id}
          className={cn(
            "min-h-14 flex flex-col items-center text-center md:text-left md:flex-row justify-between"
          )}
        >
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex md:items-center cursor-pointer max-w-screen-lg grow"
          >
            <span className="w-6 mr-2.5">{index + 1}.</span>
            <h3 className="text-lg text-primary font-bold md:text-left">
              {statement}
            </h3>
            <ChevronDown
              className={cn(
                "md:ml-auto hidden md:block text-primary transition-transform ease-button min-w-20",
                open && "rotate-180"
              )}
            />
          </button>
          <EditAnswerButtons className=" my-3 md:my-0" statementId={id} />
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden border border-primary px-2 py-1 rounded-md mb-3 w-full font-semibold"
          >
            {open ? "Antwoorden verbergen" : "Antwoorden bekijken"}
          </button>
        </div>
      </OpinionColumns>
    </div>
  );
}
