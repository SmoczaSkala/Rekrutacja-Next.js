import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-medium transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "border border-transparent"
  ],
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-500 text-black hover:bg-yellow-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        inverse: "bg-gray-800 text-white hover:bg-gray-900",
        purple: "bg-purple-500 text-white hover:bg-purple-600",
      },
      size: {
        small: "text-sm px-3 py-1.5",
        medium: "text-base px-4 py-2",
        large: "text-lg px-5 py-2.5",
        xl: "text-xl px-6 py-3",
      },
      roundness: {
        square: "rounded-none",
        small: "rounded-sm",
        base: "rounded",
        medium: "rounded-md",
        large: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        circular: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      roundness: "base",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, roundness, ...props }, ref) => {
    return (
      <button
        className={twMerge(buttonVariants({ variant, size, roundness, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };