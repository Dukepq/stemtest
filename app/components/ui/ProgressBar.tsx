"use client";
import { cn } from "@/app/lib/utils";
import { useEffect, useState } from "react";

type ProgressBarProps = {
  percentage: number;
  color?: string;
} & React.AllHTMLAttributes<HTMLDivElement>;
export default function ProgressBar({
  percentage,
  color,
  className,
  ...props
}: ProgressBarProps) {
  /*
  Maybe add some animation state to force the animation whenever the progress amount changes?
  Not sure what looks better...
  */
  return (
    <div
      {...props}
      className={cn(
        "w-full h-3 bg-text/15 overflow-hidden rounded-full relative",
        className
      )}
    >
      <span
        style={{
          width: `calc(100% * ${percentage})`,
          backgroundColor: color,
          transformOrigin: "center left",
        }}
        className={cn(
          "motion-safe:animate-progressBarFill absolute top-0 left-0 inline-block w-full h-full bg-primary rounded-full motion-safe:transition-all duration-1000"
        )}
      ></span>
    </div>
  );
}
