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
    { label: 'Home',           href: '#home',           id: 'home' },
    { label: 'About',          href: '#about',          id: 'about' },
    { label: 'Skills',         href: '#skills',         id: 'skills' },
    { label: 'Projects',       href: '#projects',       id: 'projects' },
    { label: 'Experience',     href: '#experience',     id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact',        href: '#contact',        id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollPosition) { setActiveSection(navLinks[i].id); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  /* Inline style objects reference CSS vars so they always reflect the active theme */
  const navbarScrolled: React.CSSProperties = {
    backgroundColor: 'var(--nav-bg)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--nav-border)',
  };
  const iconBtnStyle: React.CSSProperties = {
    color: 'var(--text-muted)',
  };
  const navPillStyle: React.CSSProperties = {
    backgroundColor: 'var(--nav-pill-bg)',
    border: '1px solid var(--nav-border)',
  };
  const mobileDrawerStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-base)',
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm py-3' : 'bg-transparent py-5'
      }`}
      style={isScrolled ? navbarScrolled : undefined}
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
              <span className="font-semibold text-sm sm:text-base tracking-tight text-heading">
                Punam Channe
              </span>
              <span className="text-[11px] font-mono text-muted">
                AI &amp; Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Pills */}
          <nav
            className="hidden lg:flex items-center gap-1 backdrop-blur-sm px-3 py-1.5 rounded-full"
            style={navPillStyle}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 ${
                  activeSection === link.id
                    ? 'text-white bg-indigo-600 shadow-sm'
                    : 'hover:bg-slate-800/40'
                }`}
                style={activeSection === link.id ? undefined : { color: 'var(--nav-link)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:bg-slate-800/40"
              style={iconBtnStyle}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark'
                ? <FiSun className="w-4 h-4 text-amber-400" />
                : <FiMoon className="w-4 h-4 text-indigo-600" />}
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg transition-colors hover:bg-slate-800/40"
              style={iconBtnStyle}
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg transition-colors hover:bg-slate-800/40"
              style={iconBtnStyle}
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

          {/* Mobile Controls */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              style={iconBtnStyle}
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <FiSun className="w-4 h-4 text-amber-400" />
                : <FiMoon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-600 text-white sm:hidden"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={iconBtnStyle}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden mt-3 pt-2 pb-4 border-t backdrop-blur-md rounded-xl px-4 shadow-xl"
            style={mobileDrawerStyle}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === link.id
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'hover:bg-slate-800/30'
                  }`}
                  style={activeSection === link.id ? undefined : { color: 'var(--text-body)' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t flex items-center justify-around" style={{ borderColor: 'var(--border-base)' }}>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs py-1" style={{ color: 'var(--text-body)' }}>
                  <FiGithub className="w-4 h-4" /> GitHub
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs py-1" style={{ color: 'var(--text-body)' }}>
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
