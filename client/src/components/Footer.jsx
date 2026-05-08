import React from 'react';

function Footer() {
  // This automatically gets the current year so you never have to update it manually!
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-500">
      <div className="mx-auto max-w-6xl px-6 flex justify-center items-center">
        <p className="text-neutral-600 dark:text-neutral-400 text-base font-medium transition-colors duration-500">
          Copyright © {currentYear} Sameer. Made with <span className="text-red-500 animate-pulse inline-block">♥</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;