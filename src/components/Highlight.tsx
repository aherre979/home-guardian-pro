import { cn } from "@/lib/utils";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export const Highlight = ({ children, className }: HighlightProps) => {
  return (
    <span className={cn("highlight-text font-semibold", className)}>
      {children}
    </span>
  );
};
