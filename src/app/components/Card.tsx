import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient' | 'outline';
}

export function Card({
  variant = 'default',
  className = '',
  children,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-200 hover:scale-[1.01]';

  const variants = {
    default: 'bg-card text-card-foreground shadow-md hover:shadow-lg border border-border/50',
    gradient: 'bg-gradient-to-br from-primary to-secondary text-white shadow-xl hover:shadow-2xl',
    outline: 'border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
