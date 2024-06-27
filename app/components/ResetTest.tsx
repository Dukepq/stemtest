"use client";
import { useAnswerContext } from "@/app/context/QuestionnaireContext";
import { ListRestart } from "lucide-react";

export default function ResetTest() {
  const { answers, setAnswers, setCurrent } = useAnswerContext();
  if (answers.length < 1) return;
  return (
    <div
      onClick={() => {
        setAnswers([]);
        setCurrent(0);
      }}
      className="hidden motion-safe:animate-slideUpAndFade md:flex size-8 rounded-sm border border-text fixed right-6 bottom-6 cursor-pointer group lg:hover:w-44 motion-safe:transition-all overflow-hidden backdrop-blur-sm"
    >
      <span className="absolute opacity-0 group-hover:opacity-100 motion-safe:transition-opacity duration-300 text-nowrap ml-10 self-center">
        Test herstarten
      </span>
      <ListRestart className="my-auto mx-1 group-hover:ml-1" />
    </div>
  );
}
