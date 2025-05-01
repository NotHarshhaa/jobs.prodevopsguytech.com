"use client"

import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { forwardRef } from "react"

const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <select
        ref={ref}
        className={cn(
          "peer h-10 w-full appearance-none rounded-md border border-input bg-background px-3 pr-10 text-sm text-foreground ring-offset-background transition-colors duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-opacity duration-200"
        aria-hidden="true"
      />
    </div>
  )
})

Select.displayName = "Select"

export { Select }
