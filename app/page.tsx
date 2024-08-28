import { buttonOptions } from "./components/ui/Button";
import Link from "next/link";
import { cn } from "./lib/utils";
import PartyDisplay from "./components/PartyDisplay";

export default function Page() {
  return (
    <main className="grid place-content-center min-h-screen px-3 max-w-screen-xl mx-auto">
      <div className="flex items-center flex-col-reverse lg:flex-row">
        <div className="lg:max-w-[65%] text-center lg:text-left text-wrap md:text-balance pr-6">
          <h1 className="font-bold text-xl sm:text-2xl">
            De uitgebreide stemtest
          </h1>
          <p className="[&>span]:font-bold [&>span]:text-primary text-base [&>span]:text-lg text-wrap max-w-screen-md">
            In deze stemtest vergelijk je je antwoorden ook met die van{" "}
            <span>Volt</span> en <span>VoorU</span>!
          </p>
          <Link
            href="/stemtest"
            className={cn(
              buttonOptions({}),
              "block mt-3 py-1.5 w-full sm:w-fit sm:mx-auto lg:mx-0 text-base"
            )}
          >
            Doe de stemtest!
          </Link>
        </div>
        <div className="w-full h-[2px] lg:h-[120%] lg:w-[2px] bg-accent mb-2 mt-4 lg:my-6 rounded-full"></div>
        <div className="grid place-content-center overflow-hidden pl-6">
          <PartyDisplay />
        </div>
      </div>
    </main>
  );
}
