import { type VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium leading-none transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-yellow hover:bg-yellow/90 text-white shadow-[0px_15px_35px_0px_#F1A50126]",
        secondary:
          "text-text-dark border border-gray-300 bg-white hover:bg-gray-50",
        login:
          "hover:border-yellow text-text-dark hover:bg-yellow border border-transparent hover:text-white",
        signUp:
          "border-text-dark hover:border-orange text-text-dark hover:bg-orange border hover:text-white",
        outline:
          "border-text-dark hover:border-orange text-text-dark hover:bg-orange border hover:text-white",
        store: "bg-black text-white hover:bg-gray-900",
        ghost: "text-text hover:bg-gray-100",
        link: "text-orange underline-offset-4 hover:underline",
      },
      size: {
        none: "px-0 py-0",
        sm: "h-[30px] rounded-sm px-3 md:h-[40px] md:rounded-md md:px-5",
        md: "h-[50px] rounded-lg px-4 py-2 md:h-[60px] md:rounded-[12px] md:px-[26px]",
        lg: "h-[60px] rounded-lg px-6 py-3 md:h-[68px] md:rounded-[12px] md:px-[32px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export default function Button({
  className,
  variant,
  size,
  children,
  href,
  onClick,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
