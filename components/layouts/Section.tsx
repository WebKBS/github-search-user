import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={cn("container mx-auto px-4", className)}>
      {children}
    </section>
  );
};

export default Section;
