import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative flex items-center gap-2 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/30 px-4 py-2 transition-all shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background",
          "backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {icon && (
          <span className="text-gray-500 dark:text-gray-400 text-base">
            {icon}
          </span>
        )}
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            "w-full border-none bg-transparent text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          )}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
