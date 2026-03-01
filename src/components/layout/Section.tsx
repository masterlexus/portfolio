import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="mb-12 font-mono text-2xl font-bold tracking-tight md:text-3xl">
          <span className="text-accent">$ </span>
          <span className="text-textPrimary">{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
}
