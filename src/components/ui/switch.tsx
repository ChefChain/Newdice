"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full  shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-background border-2 border-transparent text-primary-foreground shadow hover:bg-background/90 data-[state=checked]:bg-background data-[state=unchecked]:bg-input",
        progressive:
          "border-[1px] border-primary-success text-destructive-foreground shadow-sm hover:bg-destructive/90 data-[state=checked]:bg-primary-success data-[state=unchecked]:bg-secondary",
        autobet:
          "border-[1px] border-primary-success shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=checked]:bg-primary-success data-[state=unchecked]:bg-secondary",
      },
      size: {
        default: "h-12 w-22 p-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  asChild?: boolean;
  text?: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, size, checked, text, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ variant, size, className }))}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-7 w-7 rounded-full bg-primary-success shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-10 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-white",
      )}
    />
    <SwitchPrimitives.SwitchThumb
      className={cn(
        "transition-all duration-300 data-[state=checked]:-translate-x-6.5 data-[state=unchecked]:translate-x-1.5 data-[state=checked]:text-white data-[state=unchecked]:text-white",
      )}
    >
      <span className="text-base">{text}</span>
    </SwitchPrimitives.SwitchThumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, switchVariants };
