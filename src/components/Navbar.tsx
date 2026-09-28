import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiFileText, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 dark:bg-slate-950/85 light:bg-white/85 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded p-1 group"
            aria-label="Punam Channe Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              PC
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm sm:text-base tracking-tight">
                Punam Channe
              </span>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                AI & Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-white bg-indigo-600 shadow-sm'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-200'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Side Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/70 dark:hover:bg-slate-800/70 light:hover:bg-slate-200/70 transition-colors"
              aria-label="Toggle light/dark theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <FiSun className="w-4 h-4 text-amber-400" />
              ) : (
                <FiMoon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/70 dark:hover:bg-slate-800/70 light:hover:bg-slate-200/70 transition-colors"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/70 dark:hover:bg-slate-800/70 light:hover:bg-slate-200/70 transition-colors"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-sm shadow-indigo-600/20 hover:shadow-indigo-600/40"
            >
              <FiFileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-600 text-white sm:hidden"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-2 pb-4 border-t border-slate-800 bg-[#111827]/95 dark:bg-[#111827]/95 light:bg-white/95 backdrop-blur-md rounded-xl px-4 shadow-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === link.id
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-around">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white py-1"
                >
                  <FiGithub className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white py-1"
                >
                  <FiLinkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
