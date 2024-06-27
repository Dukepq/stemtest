import Questionnaire from "./components/_questionnaire/Questionnaire";
import InfoWidget from "./components/ui/InfoWidget";
import ResetTest from "./components/ResetTest";

export default async function Page() {
  return (
    <main className="max-w-screen-xl mx-auto my-6 px-3">
      <ResetTest />
      <InfoWidget className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-secondary motion-safe:animate-slideUpAndFadeAbsoluteEl" />
      <Questionnaire />
    </main>
  );
}
