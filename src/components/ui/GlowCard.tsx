import type { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-bgSecondary p-6 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_0_20px_var(--accent-glow)] ${className}`}
    >
      {children}
    </div>
  );
}
