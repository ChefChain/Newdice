import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  onIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, onIconClick, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center", className)}>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pr-10 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <span
            className={cn(
              "absolute right-3 select-none",
              onIconClick && "cursor-pointer",
            )}
            onClick={(e) => {
              e.stopPropagation();
              onIconClick?.();
            }}
          >
            {icon}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
