import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-block rounded-full border border-transparent bg-bgTertiary px-3 py-1 font-mono text-xs text-textSecondary transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </span>
  );
}
