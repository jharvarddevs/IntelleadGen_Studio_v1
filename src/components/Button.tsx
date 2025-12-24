import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  shimmer?: boolean;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  fullWidth = false,
  disabled = false,
  type = 'button',
  shimmer = false,
  target,
  rel,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95';

  const variantClasses = {
    primary: 'bg-black text-white hover:bg-primary-800 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] focus:ring-black hover:-translate-y-0.5',
    secondary: 'bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] focus:ring-black hover:-translate-y-0.5',
    outline: 'border-2 border-white text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:bg-white hover:text-black focus:ring-white hover:-translate-y-0.5',
    'outline-light': 'border-2 border-black text-black hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white focus:ring-black hover:-translate-y-0.5',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const shimmerClass = shimmer ? 'shimmer-button' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${shimmerClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
