import { cn } from "@/app/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement>;
export function BlobCheck({ className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      className={cn("size-10", className)}
      role="img"
      viewBox="0 0 52 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52 27C52 41.3594 42.5 51 26 53C3 52 0 41.3594 0 27C1.5 13 11.6536 0.389496 26 0.999989C49.5 2 52 12.6406 52 27Z"
        fill="#5C1D96"
      />
      <path
        d="M12 26.5833L21.5833 36.1667L40.75 17"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SquareRoundedCheck({ className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      className={cn("size-10", className)}
      role="img"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M4 5C4 2.23858 6.23858 0 9 0H52C54.7614 0 57 2.23858 57 5V48C57 50.7614 54.7614 53 52 53H9C6.23858 53 4 50.7614 4 48V5Z"
          fill="#5C1D96"
        />
        <path
          d="M17 25.5833L26.5833 35.1667L45.75 16"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
