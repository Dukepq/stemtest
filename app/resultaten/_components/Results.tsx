"use client";

import HoverCard from "@/app/components/ui/HoverCard";
import ProgressBar from "@/app/components/ui/ProgressBar";
import { type PartyAlignmentResult } from "@/types";
import { Party } from "@/drizzle";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import calculateAlignment, {
  alignmentsToArray,
} from "@/app/lib/calculateAlignment";
import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import Spinner from "@/app/components/ui/Spinner";
import { useStatementContext } from "@/app/context/StatementContext";

type ResultsProps = {
  parties: Party[];
  displayMax?: number;
};
export default function Results({ parties, displayMax }: ResultsProps) {
  const { answers, isLoading } = useAnswerContext();
  const [containerRef] = useAutoAnimate<HTMLDivElement>();
  const statements = useStatementContext();

  const alignments: {
    party: string;
    alignment: number;
    alignmentFraction: string;
  }[] = alignmentsToArray(
    calculateAlignment(answers, statements),
    statements.length
  );

  if (isLoading) {
    return (
      <div className="grid place-content-center h-[480px]">
        <Spinner />
      </div>
    );
  }

  if (alignments.length === 0) {
    return (
      <div className="grid place-content-center h-[480px]">
        <p className="opacity-50 text-nowrap">
          Je hebt nog geen vragen beantwoord met{" "}
          <span className="italic">eens</span> of{" "}
          <span className="italic">oneens</span>.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-minAutoMin items-center gap-y-6 gap-x-3"
    >
      {alignments
        .sort((a, b) => {
          return b.alignment - a.alignment;
        })
        .map((partyAlignment, index) => {
          const {
            alignment,
            party: partyName,
            alignmentFraction,
          } = partyAlignment;
          const partyInfo = parties.find((p) => p.name === partyName);
          if (!partyInfo) return;
          if (displayMax && index >= displayMax) return;
          const { partyColor, partyLogo } = partyInfo;
          const alignmentPercentage = Math.round(alignment * 10000) / 10000;
          return (
            <Result
              key={partyName}
              alignment={alignmentPercentage}
              alternateText={alignmentFraction}
              party={partyName}
              partyColor={partyColor}
              partyLogo={partyLogo}
            />
          );
        })}
    </div>
  );
}

type ResultProps = PartyAlignmentResult & { alternateText: string };
export function Result({
  alignment,
  party,
  partyColor,
  partyLogo,
  alternateText,
}: ResultProps) {
  return (
    <>
      <HoverCard
        trigger={<img src={partyLogo} className="max-w-20 h-8" alt={party} />}
      >
        <span>{party}</span>
      </HoverCard>
      <ProgressBar percentage={alignment} color={partyColor} />
      <span>{alternateText || alignment}</span>
    </>
  );
}
