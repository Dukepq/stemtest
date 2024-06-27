import { cn } from "@/app/lib/utils";

export default function Spinner({
  className,
  ...props
}: React.AllHTMLAttributes<HTMLSpanElement>) {
  return <span {...props} className={cn("spinner", className)}></span>;
}
