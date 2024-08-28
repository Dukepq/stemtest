"use client";
import Results from "./Results";
import { Party } from "@/drizzle";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";
import { useObservingResultsContext } from "@/app/context/ObservingResultsContext";

type ResultsWrapperProps = {
  parties: Party[];
};
export default function ResultsWrapper({ parties }: ResultsWrapperProps) {
  const resultsRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(resultsRef, {
    initialIntercepting: true,
  });
  const { setObserving } = useObservingResultsContext();

  useEffect(() => {
    setObserving(isIntersecting);
  }, [isIntersecting, setObserving]);

  return (
    <div ref={resultsRef}>
      <Results parties={parties} />
    </div>
  );
}
