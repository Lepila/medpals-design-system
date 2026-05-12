import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'outline';
}

export function Badge({
  variant = 'default',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all min-h-[28px]';

  const variants = {
    default: 'bg-muted text-muted-foreground',
    primary: 'bg-primary text-primary-foreground shadow-sm',
    secondary: 'bg-secondary text-secondary-foreground shadow-sm',
    accent: 'bg-accent text-accent-foreground shadow-sm',
    outline: 'border-2 border-primary text-primary bg-transparent',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
