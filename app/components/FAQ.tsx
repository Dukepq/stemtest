import * as Accordion from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { cn } from "../lib/utils";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  entries: { q: string; a: string }[];
};
export default function FAQ({ entries }: AccordionProps) {
  return (
    <Accordion.Root
      defaultValue={entries[0].q}
      type="single"
      className="w-192 mb-20 mt-10"
    >
      <h2 className="text-3xl font-bold mb-1">FAQ:</h2>
      {entries.map(({ q, a }) => {
        return (
          <Accordion.Item key={q} value={q} className="">
            <AccordionTrigger
              type="button"
              className="w-full flex justify-between group font-semibold text-xl py-1"
            >
              <span className="text-start">{q}</span>
              <ChevronDown
                size={18}
                className="text-primary opacity-50 group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100 transition-transform duration-300"
              />
            </AccordionTrigger>

            <AccordionContent>
              <p>{a}</p>
            </AccordionContent>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}

type AccordionContentProps = {
  children: React.ReactNode;
} & React.AllHTMLAttributes<HTMLDivElement>;
const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "text-lg w-11/12 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp h-[6rem] overflow-y-auto hide-scrollbar",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

type AccordionTriggerProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
} & React.AllHTMLAttributes<HTMLButtonElement>;
const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, type, ...props }, forwardedRef) => {
    return (
      <Accordion.Header className="flex">
        <Accordion.Trigger
          type={type}
          className={cn("", className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
        </Accordion.Trigger>
      </Accordion.Header>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";
