import React, { useState, useEffect } from 'react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* Changed 'fixed' to 'absolute' to merge it with the body flow */
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-8 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Colorful Logo - Medium Weight */}
        <a href="#home" className="text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-white">Sameer</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-semibold">.dev</span>
        </a>

        {/* Desktop Navigation - Large and Clear */}
        <div className="hidden md:flex items-center space-x-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2.5 text-base font-medium text-neutral-400 hover:text-cyan-400 transition-colors rounded-full hover:bg-neutral-900/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 py-10 flex flex-col items-center space-y-8 shadow-2xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium text-neutral-400 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}