import React from 'react'

type ButtonProps = {
  variant?: 'outlined' | 'contained',
  color?: 'primary' | 'secondary' | 'white',
  children: React.ReactNode,
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  children,
}) => {

  return (
    <button className={`button button--${variant} button--${color}`}>{children}</button>
  )
}

export default Button