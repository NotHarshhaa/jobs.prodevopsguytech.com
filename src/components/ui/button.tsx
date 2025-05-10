import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] animate-in fade-in-0 zoom-in-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md hover:from-blue-700 hover:to-blue-900 hover:shadow-lg hover:-translate-y-0.5 dark:from-blue-500 dark:to-blue-700 dark:text-white",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-md hover:from-red-700 hover:to-red-900 hover:shadow-lg hover:-translate-y-0.5 dark:from-red-500 dark:to-red-700 dark:text-white",
        outline:
          "border border-input bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md",
        secondary:
          "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md",
        ghost:
          "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
        link: "text-blue-700 dark:text-blue-300 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 text-base",
        sm: "h-9 rounded-full px-4 text-sm",
        lg: "h-12 rounded-full px-8 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
