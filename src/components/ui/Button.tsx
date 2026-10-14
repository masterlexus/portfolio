import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  href: string;
  icon?: ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  children,
  href,
  icon,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150';
  const variants = {
    primary: 'border border-transparent bg-btn text-btnText hover:opacity-85',
    secondary: 'border border-border text-textPrimary hover:border-textMuted',
  };
  const isExternal = href.startsWith('http');
  const isFile = href.endsWith('.pdf');

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...((isExternal || isFile) && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      {icon}
      {children}
    </a>
  );
}
