import React from 'react';
interface ButtonBaseProps {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}
type ButtonProps = ButtonBaseProps & (({
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) | ({
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>));
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  children,
  className = '',
  href,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95';
  const variants = {
    primary: 'cta-pulse bg-brand-green text-black hover:bg-brand-green-hover shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]',
    secondary: 'bg-brand-card text-white border-2 border-brand-green hover:bg-brand-card-border'
  };
  const sizes = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl md:text-2xl'
  };
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;
  if (href) {
    return <a href={href} className={classes} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
        {children}
      </a>;
  }
  return <button className={classes} {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>;
};