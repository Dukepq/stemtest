"use client";

import { Opinion, QuestionnaireAnswer } from "@/types";
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

type Answers = { [id: string]: Opinion };
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
  const [answers, setAnswers] = useState<Answers>({});
  const [current, setCurrent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAnswersFromStorage = useCallback(() => {
    const storedAnswers = getFromStorage<Answers>("answers");
    const storedIndex = getFromStorage<number>("last_answered_index");
    if (
      !storedAnswers ||
      Object.keys(storedAnswers).length === 0 ||
      typeof storedIndex !== "number"
    )
      return;
    setAnswers(storedAnswers);
    setCurrent(storedIndex);
    setIsLoading(false);
  }, []);

  const setAnswersInStorage = useCallback(() => {
    setInStorage("answers", answers);
    setInStorage("last_answered_index", current);
    setIsLoading(false);
  }, [answers, current]);

  useEffect(() => {
    getAnswersFromStorage();
  }, [getAnswersFromStorage]);

  useEffect(() => {
    setAnswersInStorage();
  }, [setAnswersInStorage, answers, current]);

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
