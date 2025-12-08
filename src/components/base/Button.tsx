
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: string;
  href?: string;
  download?: boolean;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon,
  href,
  download = false,
}: ButtonProps) => {
  const baseStyles = 'px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 whitespace-nowrap cursor-pointer inline-flex items-center gap-3 justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105',
    secondary: 'bg-white dark:bg-dark-800 text-primary-600 dark:text-cyan-400 hover:shadow-lg hover:scale-105',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-600 hover:scale-105',
  };

  const content = (
    <>
      {children}
      {icon && <i className={icon}></i>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
};
