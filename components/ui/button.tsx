import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Since I don't have radix-ui installed yet, I'll implement a simpler version first or just install radix-ui/react-slot if I want to be 100% standard shadcn-like.
// The user asked to "Start implementation", usually implies setting up the basics.
// I'll stick to a standard React button for now to avoid over-installing without asking, 
// using the simple 'cn' utility I just made.

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium font-archivo uppercase tracking-widest ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bl-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-bl-cream-200 bg-white text-bl-navy hover:bg-bl-cream-100",
        bronze: "bg-bl-bronze-gradient text-white hover:opacity-90 shadow-md",
        outline: "border border-bl-cream-200 bg-transparent text-bl-navy hover:bg-bl-cream-100",
        ghost: "hover:bg-bl-cream-100 text-bl-navy",
        link: "text-bl-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
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
    const Comp = "button"
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
