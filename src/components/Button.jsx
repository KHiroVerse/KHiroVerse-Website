import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 font-bold rounded-xl transition-all duration-300 inline-flex items-center justify-center"
  
  const variants = {
    primary: "bg-cyan text-background hover:bg-cyan-light hover:scale-105 shadow-lg shadow-cyan/20",
    secondary: "bg-orange text-background hover:bg-orange-light hover:scale-105 shadow-lg shadow-orange/20",
    outline: "border border-slate-700 text-foreground hover:bg-slate-800",
    ghost: "text-cyan hover:bg-cyan/10",
    pink: "bg-pink text-background hover:bg-pink-light hover:scale-105 shadow-lg shadow-pink/20",
  }

  const variantStyles = variants[variant] || variants.primary

  const content = (
    <motion.span
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </motion.span>
  )

  if (href) {
    const isInternal = !href.startsWith('http://') && !href.startsWith('https://');
    
    if (isInternal) {
      return (
        <Link to={href} {...props}>
          {content}
        </Link>
      )
    }

    return (
      <a href={href} {...props}>
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} {...props}>
        {content}
      </button>
    )
  }

  return <button {...props}>{content}</button>
}

export default Button