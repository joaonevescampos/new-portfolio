import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-purple-color01 dark:bg-purple-color04 w-52 text-primary-foreground dark:text-white hover:bg-purple-color02",
        destructive:
          "bg-destructive w-52 text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 w-52 border-purple-color01 dark:border-purple-color03 text-purple-color01 dark:text-purple-color03 font-bold bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary w-52 text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent w-52 hover:text-accent-foreground",
        link: "text-primary w-52 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
