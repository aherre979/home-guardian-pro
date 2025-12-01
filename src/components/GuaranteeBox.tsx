import { cn } from "@/lib/utils";

interface GuaranteeBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const GuaranteeBox = ({ children, className }: GuaranteeBoxProps) => {
  return (
    <div className={cn("guarantee-box p-6 md:p-8 rounded-lg my-8", className)}>
      {children}
    </div>
  );
};
