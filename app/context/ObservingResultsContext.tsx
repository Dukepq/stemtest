"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const ObservingResultsContext = createContext<{
  observing: boolean;
  setObserving: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const ObservingResultsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [observing, setObserving] = useState<boolean>(true);

  return (
    <ObservingResultsContext.Provider value={{ observing, setObserving }}>
      {children}
    </ObservingResultsContext.Provider>
  );
};

export const useObservingResultsContext = () => {
  const ctx = useContext(ObservingResultsContext);
  if (!ctx) {
    throw new Error("Error: context can only be used inside of a provider");
  }
  return ctx;
};
