import { type VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: React.ReactNode;
  className?: string;
}

const containerVariants = cva("container", {
  variants: {
    variant: {
      content: "py-10 md:py-14 lg:py-16",
      header: "",
      footer: "max-w-[1140px] py-6 md:py-10 lg:py-12",
    },
  },
  defaultVariants: {
    variant: "content",
  },
});

export default function Container({
  className,
  variant,
  children,
}: ContainerProps) {
  const classes = cn(containerVariants({ variant, className }));
  return <div className={` ${classes}`}>{children}</div>;
}
