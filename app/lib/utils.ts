import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export function shuffleArray<T>(arr: T[]) {
  const arrayCopy: T[] = JSON.parse(JSON.stringify(arr));

  for (let i = arr.length - 1; i >= 0 - 1; i--) {
    const randomIdx = Math.floor(Math.random() * i);

    const temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[randomIdx];
    arrayCopy[randomIdx] = temp;
  }

  return arrayCopy;
}
