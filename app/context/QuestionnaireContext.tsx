"use client";

import { Opinion } from "@/types";
import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { getFromStorage, setInStorage } from "../lib/localStorage";

type Answers = { [id: string]: Opinion };
const AnswersContext = createContext<{
  answers: Answers;
  isLoading: boolean;
  current: number;
  setAnswers: Dispatch<SetStateAction<Answers>>;
  setCurrent: Dispatch<SetStateAction<number>>;
  updateAnswers: (statementId: string, opinion: Opinion) => void;
  incrementCurrent: () => void;
  decrementCurrent: () => void;
} | null>(null);

export function QuestionnaireAnswersProvider({
  children,
  questionnaireLength,
}: {
  children: React.ReactNode;
  questionnaireLength: number;
}) {
  const [answers, setAnswers] = useState<Answers>({});
  const [current, setCurrent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateAnswers = useCallback(
    (statementId: string, opinion: Opinion) => {
      setInStorage("answers", { ...answers, [statementId]: opinion });
      setAnswers((prev) => ({ ...prev, [statementId]: opinion }));
    },
    [answers]
  );

  const incrementCurrent = useCallback(() => {
    setInStorage(
      "last_answered_index",
      Math.min(current + 1, questionnaireLength - 1)
    );
    setCurrent((prev) => prev + 1);
  }, [current]);

  const decrementCurrent = useCallback(() => {
    setInStorage("last_answered_index", Math.max(current - 1, 0));
    setCurrent((prev) => prev - 1);
  }, [current]);

  const getAnswersFromStorage = useCallback(() => {
    let storedAnswers = getFromStorage<Answers>("answers");
    if (!storedAnswers || Object.keys(storedAnswers).length === 0) {
      storedAnswers = {};
    }
    setAnswers(storedAnswers);
  }, []);

  const getCurrentFromStorage = useCallback(() => {
    let storedIndex = getFromStorage<number>("last_answered_index");
    if (typeof storedIndex !== "number") {
      storedIndex = 0;
    }
    if (storedIndex >= questionnaireLength - 1) {
      storedIndex = questionnaireLength - 1;
      setInStorage("last_answered_index", storedIndex);
    } else if (storedIndex <= 0) {
      storedIndex = 0;
      setInStorage("last_answered_index", storedIndex);
    }
    setCurrent(storedIndex);
  }, []);

  useEffect(() => {
    getAnswersFromStorage();
    getCurrentFromStorage();
    setIsLoading(false);
  }, []);

  return (
    <AnswersContext.Provider
      value={{
        answers,
        isLoading,
        current,
        incrementCurrent,
        decrementCurrent,
        updateAnswers,
        setCurrent,
        setAnswers,
      }}
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
