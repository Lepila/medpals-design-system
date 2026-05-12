import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`
        w-full px-4 py-3 rounded-2xl min-h-[44px]
        bg-input-background text-foreground
        border-2 border-border
        hover:border-primary/30
        focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
        placeholder:text-muted-foreground
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    />
  );
}
