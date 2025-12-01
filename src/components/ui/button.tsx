import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline: "border-2 border-treasure-gold bg-transparent text-treasure-gold hover:bg-treasure-gold hover:text-midnight-shadow shadow-md hover:shadow-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
        ghost: "hover:bg-treasure-gold/20 text-eucalyptus-mist hover:text-treasure-gold backdrop-blur-sm",
        link: "text-treasure-gold underline-offset-4 hover:underline hover:text-mystic-green",
        hero: "bg-gradient-to-r from-treasure-gold to-mystic-green text-midnight-shadow shadow-xl hover:shadow-2xl transform hover:scale-105 hover:from-mystic-green hover:to-treasure-gold border border-treasure-gold/30",
        gaming: "bg-gradient-to-r from-jungle-green to-eucalyptus-mist text-white shadow-xl hover:shadow-2xl transform hover:scale-105 relative",
        premium: "bg-gradient-to-r from-treasure-gold to-jungle-green text-white shadow-xl hover:shadow-2xl transform hover:scale-105 border border-treasure-gold/30",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-12 w-12",
        xl: "h-16 rounded-2xl px-12 text-lg",
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
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
