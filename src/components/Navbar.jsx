import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SmoothScrollLink from './SmoothScrollLink'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

    const navLinks = [
      { to: '/', label: 'Home', activeClass: 'text-cyan' },
      { to: '/#about', label: 'About', activeClass: 'text-cyan' },
      { to: '/projects', label: 'Projects', activeClass: 'text-orange' },
      { to: '/#skills', label: 'Skills', activeClass: 'text-pink' },
      { to: '/contact', label: 'Contact', activeClass: 'text-cyan' },
    ]

    const socialLinks = [
      { href: 'https://github.com/KHiroVerse', label: 'GitHub', color: 'hover:text-orange' },
      { href: 'https://youtube.com/@KHiroVerse', label: 'YouTube', color: 'hover:text-pink' },
    ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className={`text-2xl font-bold bg-gradient-to-r from-cyan to-pink bg-clip-text text-transparent ${isOpen ? 'hidden md:block' : 'block'}`}>
          KHiroVerse
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <SmoothScrollLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? link.activeClass : 'hover:text-cyan transition-colors'
                }
              >
                {link.label}
              </SmoothScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cyan focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 pt-6 pb-2">
              <SmoothScrollLink to="/" onClick={closeMenu} className="text-2xl font-bold bg-gradient-to-r from-cyan to-pink bg-clip-text text-transparent">
                KHiroVerse
              </SmoothScrollLink>
            </div>
            <ul className="flex flex-col gap-4 px-6 py-4 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <SmoothScrollLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? link.activeClass : 'hover:text-cyan transition-colors'
                    }
                  >
                    {link.label}
                  </SmoothScrollLink>
                </li>
              ))}
            </ul>

            <div className="px-6 pt-4 pb-6 flex gap-6 text-slate-400">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors ${social.color}`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
