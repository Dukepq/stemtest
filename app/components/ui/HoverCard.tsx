import { cn } from "@/app/lib/utils";
import * as HC from "@radix-ui/react-hover-card";

type HoverCardProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
} & React.AllHTMLAttributes<HTMLDivElement> &
  HC.HoverCardContentProps;
export default function HoverCard({
  children,
  trigger,
  className,
  ...props
}: HoverCardProps) {
  return (
    <HC.Root openDelay={150}>
      <HC.Trigger asChild>{trigger}</HC.Trigger>
      <HC.Portal>
        <HC.Content
          side="top"
          {...props}
          className={cn(
            "bg-accent/25 backdrop-blur-sm py-1 px-3 text-primary font-semibold rounded-sm animate-slideUpAndFade",
            className
          )}
        >
          <HC.Arrow className="fill-accent/25" />
          {children}
        </HC.Content>
      </HC.Portal>
    </HC.Root>
  );
}
