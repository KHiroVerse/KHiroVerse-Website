import React, { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const SmoothScrollLink = ({ to, children, className, ...props }) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Check if the target is a hash link (e.g., "#about" or "/#about")
  const isHashLink = to.startsWith('#') || to.startsWith('/#')
  const targetPath = isHashLink ? '/' : to

  const handleClick = (e) => {
    if (to === '/') {
      if (location.pathname === '/') {
        e.preventDefault()
        // Try multiple ways to ensure scroll works across different browsers/environments
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
        document.body.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
    }

    if (isHashLink) {
      e.preventDefault()
      navigate(to)
    }
  }

  if (isHashLink) {
    const href = to.startsWith('/') ? to : `/${to}`
    return (
      <a href={href} onClick={handleClick} className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <NavLink to={to} className={className} {...props}>
      {children}
    </NavLink>
  )
}

export default SmoothScrollLink