import type { ReactNode } from 'react';

interface TerminalProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function Terminal({
  children,
  title = 'terminal',
  className = '',
}: TerminalProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-border ${className}`}
    >
      <div className="flex items-center gap-2 bg-bgSecondary px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
        <span className="h-3 w-3 rounded-full bg-[#eab308]" />
        <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
        {title && (
          <span className="ml-2 font-mono text-xs text-textMuted">
            {title}
          </span>
        )}
      </div>
      <div className="bg-bgPrimary p-4 font-mono text-sm">{children}</div>
    </div>
  );
}
