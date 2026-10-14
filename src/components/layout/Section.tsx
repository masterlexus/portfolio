import type { ReactNode } from 'react';
import Reveal from '../ui/Reveal';

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, label, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-14 md:py-20 ${className}`}>
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <Reveal>
          <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.08em] text-textMuted md:mb-8">
            {label}
          </h2>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
