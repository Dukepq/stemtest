"use client";

import { QuestionnaireAnswer } from "@/types";
import {
  useState,
  useContext,
  createContext,
  useEffect,
  SetStateAction,
  useCallback,
  Dispatch,
} from "react";
import { getFromStorage, setInStorage } from "../lib/localStorage";

type Answers = QuestionnaireAnswer[];
const AnswersContext = createContext<{
  answers: Answers;
  setAnswers: Dispatch<SetStateAction<Answers>>;
  isLoading: boolean;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
} | null>(null);

export function QuestionnaireAnswersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [answers, setAnswers] = useState<Answers>([]);
  const [current, setCurrent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAnswersFromStorage = useCallback(() => {
    const storedAnswers = getFromStorage<Answers>("answers");
    const storedIndex = getFromStorage<number>("last_answered_index");
    if (
      !storedAnswers ||
      storedAnswers.length === 0 ||
      typeof storedIndex !== "number"
    )
      return;
    setAnswers(storedAnswers);
    setCurrent(storedIndex);
    setIsLoading(false);
  }, [setAnswers, setIsLoading]);

  const setAnswersInStorage = useCallback(() => {
    setInStorage("answers", answers);
    setInStorage("last_answered_index", current);
    setIsLoading(false);
  }, [answers]);

  useEffect(() => {
    getAnswersFromStorage();
  }, []);

  useEffect(() => {
    setAnswersInStorage();
  }, [answers]);

  return (
    <AnswersContext.Provider
      value={{ answers, setAnswers, isLoading, current, setCurrent }}
    >
      {children}
    </AnswersContext.Provider>
  );
}

export function useAnswerContext() {
  const ctx = useContext(AnswersContext);
  if (!ctx) {
    throw new Error("Context should only be used inside of a provider");
  }
  return ctx;
}
