import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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
      // If we are already on the home page, let the browser handle the anchor scroll
      if (location.pathname === '/') {
        // Do nothing, standard anchor behavior will work
        return
      } else {
        // If we are on another page, navigate to home with the hash
        e.preventDefault()
        navigate(to)
      }
    }
  }

  if (isHashLink) {
    return (
      <a href={location.pathname === '/' ? to : `/${to}`} onClick={handleClick} className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  )
}

export default SmoothScrollLink