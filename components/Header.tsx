
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['About', 'Skills', 'Education', 'Projects', 'Blog', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md dark:shadow-slate-700/[.2]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                {PERSONAL_INFO.name}
              </a>
            </div>
            <nav className="hidden md:flex items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-blue-400 dark:hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <button onClick={toggleTheme} aria-label="Toggle theme" className="ml-4 p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <a
                href="assets/mihir-chakma-cv.pdf" // NOTE: Add your CV to the `public` folder
                download
                className="ml-4 inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm md:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 text-2xl font-semibold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
             <a
                href="assets/mihir-chakma-cv.pdf" // NOTE: Add your CV to the `public` folder
                download
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
              <button onClick={() => { toggleTheme(); setIsMenuOpen(false); }} aria-label="Toggle theme" className="mt-8 p-3 rounded-full text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 transition-colors">
                {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
              </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;