import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const enhancedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg hover:shadow-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg hover:shadow-xl button-glow",
        gradient: "bg-gradient-to-r from-primary to-primary-hover text-primary-foreground hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        float: "animate-float",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
);

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  ripple?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    animation,
    asChild = false, 
    loading = false,
    success = false,
    error = false,
    loadingText,
    successText,
    errorText,
    icon,
    iconPosition = "left",
    ripple = true,
    children,
    onClick,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([]);

    const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && !loading) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        
        setRipples(prev => [...prev, { id, x, y }]);
        
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== id));
        }, 600);
      }
      
      onClick?.(e);
    }, [ripple, loading, onClick]);

    const getButtonContent = () => {
      if (loading) {
        return (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {loadingText || children}
          </>
        );
      }
      
      if (success) {
        return (
          <>
            <Check className="w-4 h-4" />
            {successText || children}
          </>
        );
      }
      
      if (error) {
        return (
          <>
            <X className="w-4 h-4" />
            {errorText || children}
          </>
        );
      }

      const iconElement = icon && (
        <span className={cn(
          "transition-transform duration-300",
          iconPosition === "right" && "order-last"
        )}>
          {icon}
        </span>
      );

      return (
        <>
          {iconPosition === "left" && iconElement}
          {children}
          {iconPosition === "right" && iconElement}
        </>
      );
    };

    return (
      <div className="relative overflow-hidden">
        <Comp
          className={cn(
            enhancedButtonVariants({ variant, size, animation, className }),
            loading && "cursor-not-allowed",
            success && "bg-green-500 hover:bg-green-600",
            error && "bg-red-500 hover:bg-red-600"
          )}
          ref={ref}
          onClick={handleClick}
          disabled={loading}
          {...props}
        >
          {getButtonContent()}
        </Comp>
        
        {/* Ripple effects */}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}
      </div>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton, enhancedButtonVariants };
