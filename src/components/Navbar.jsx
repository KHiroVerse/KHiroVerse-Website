import React from 'react'
import SmoothScrollLink from './SmoothScrollLink'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan to-pink bg-clip-text text-transparent">
          KHiroVerse
        </h1>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <SmoothScrollLink 
                to="/" 
                className={({ isActive }) => isActive ? 'text-cyan' : 'hover:text-cyan transition-colors'}
              >
                Home
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="/#about" className="hover:text-cyan transition-colors">
                About
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink 
                to="/projects" 
                className={({ isActive }) => isActive ? 'text-orange' : 'hover:text-cyan transition-colors'}
              >
                Projects
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="/#skills" className="hover:text-pink transition-colors">
                Skills
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink 
                to="/contact" 
                className={({ isActive }) => isActive ? 'text-cyan' : 'hover:text-cyan transition-colors'}
              >
                Contact
              </SmoothScrollLink>
            </li>
          </ul>
        <button className="md:hidden text-cyan">
          Menu
        </button>
      </nav>
    </header>
  )
}

export default Navbar
