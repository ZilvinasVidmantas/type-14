import React from 'react';
import classes from './button.module.scss';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  children: React.ReactNode,
  color?: 'primary' | 'secondary',
  size?: 'normal' | 'large',
  variant?: 'contained' | 'outlined',
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  color = 'primary',
  size = 'normal',
  variant = 'contained',
  className,
  ...props
}) => {
  const buttonClasses = ['button', color, size, variant].map((name) => classes[name]);
  if (className !== undefined) buttonClasses.push(className);

  return (
    <button
      className={buttonClasses.join(' ')}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
