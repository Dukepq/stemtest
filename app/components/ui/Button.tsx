import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

type buttonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonOptions>;

const buttonOptions = cva("rounded-sm text-nowrap", {
  variants: {
    variant: {
      default: "bg-primary font-normal text-background",
      outline: "border border-primary",
      ghost: "bg-accent/0 hover:bg-accent/50",
    },
    size: {
      default: "text-lg py-1 px-5 font-semibold",
      sm: "text-sm py-1.5 px-3",
      xs: "py-0.5 px-1.5 text-xs",
      lg: "py-2 px-8 text-lg font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Button({ children, className, variant, size, ...props }: buttonProps) {
  return (
    <button
      className={cn(buttonOptions({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonOptions };
