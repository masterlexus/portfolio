import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  className?: string;
  download?: boolean;
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  icon,
  className = '',
  download,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-lg px-6 py-3 font-mono text-sm font-semibold transition-all duration-200';
  const variants = {
    primary:
      'bg-accent text-bgPrimary hover:shadow-[0_0_20px_var(--accent-glow)]',
    secondary:
      'border border-accent text-accent hover:bg-accent/10 hover:shadow-[0_0_20px_var(--accent-glow)]',
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...(download && { download: true })}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
}
