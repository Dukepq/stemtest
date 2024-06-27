"use client";

import Link from "next/link";
import { buttonOptions } from "./components/ui/Button";
import { cn } from "./lib/utils";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-screen grid place-content-center bg-secondary">
      <div>
        <h1 className="text-2xl font-semibold">Er is iets misgegaan.</h1>

        <div>
          <button
            className={cn(
              buttonOptions(),
              "inline-block mt-3 mr-3 border-primary border"
            )}
            onClick={() => reset()}
          >
            Opnieuw proberen
          </button>
          <Link
            href={"/"}
            className={cn(
              buttonOptions({ variant: "outline" }),
              "inline-block mt-3"
            )}
          >
            Terug naar start
          </Link>
        </div>
      </div>
    </div>
  );
}
