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
  "inline-flex items-center justify-center font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-yellow hover:bg-yellow/90 text-white shadow-[0px_15px_35px_0px_#F1A50126]",
        secondary:
          "text-text-dark border border-gray-300 bg-white hover:bg-gray-50",
        outline:
          "border-orange text-orange hover:bg-orange border hover:text-white",
        ghost: "text-text hover:bg-gray-100",
        link: "text-orange underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-[30px] rounded-md px-2 md:h-[40px] md:rounded-lg md:px-4",
        md: "h-[50px] rounded-lg px-4 py-2 md:h-[60px] md:rounded-[12px] md:px-[26px]",
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
