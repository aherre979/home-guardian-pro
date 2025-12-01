import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
}

export const CTAButton = ({ children, className, size = "lg" }: CTAButtonProps) => {
  const sizeClasses = {
    default: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl",
    xl: "px-12 py-6 text-2xl",
  };

  return (
    <Button
      className={cn(
        "bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Button>
  );
};
