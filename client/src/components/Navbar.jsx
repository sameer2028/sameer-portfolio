import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-8 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Colorful Logo - Updated for Light/Dark Mode */}
        <a href="#home" className="text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-neutral-900 dark:text-white transition-colors">Sameer</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-semibold">.dev</span>
        </a>

        {/* Right Side Container (Nav Links + Theme Toggle + Mobile Menu Icon) */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-2.5 text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-900/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle - Placed here so it shows on BOTH mobile and desktop */}
          <ThemeToggle />

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden text-neutral-900 dark:text-white p-2 transition-colors" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu - Updated backgrounds and text for Light/Dark Mode */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 py-10 flex flex-col items-center space-y-8 shadow-2xl transition-colors">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}