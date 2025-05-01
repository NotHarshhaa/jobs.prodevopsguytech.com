import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative flex items-center rounded-2xl border border-input bg-background px-3 py-2 shadow-sm transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {icon && <span className="mr-2 text-muted-foreground">{icon}</span>}
        <input
          type={type}
          className={cn(
            "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "pl-0" : "pl-1"
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
