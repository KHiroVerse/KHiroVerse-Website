import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <div className="font-bold text-slate-400">
          © {new Date().getFullYear()} KHiroVerse
        </div>
          <div className="flex gap-8">
            <a href="https://github.com/KHiroVerse" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">GitHub</a>
            <a href="https://youtube.com/@KHiroVerse" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors">YouTube</a>
          </div>
        <div className="text-slate-600">
          Made with ❤️ and React
        </div>
      </div>
    </footer>
  )
}

export default Footer