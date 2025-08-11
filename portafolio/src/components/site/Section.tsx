import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="container mx-auto py-5 md:py-20 animate-fade-in">
      <header className="mb-10 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary">{title}</h2>
        {description && (
          <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
        )}
      </header>
      {children}
    </section>
  );
}

export default Section;
