import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#090d18] dark:bg-[#090d18] light:bg-slate-100 py-10 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          
          {/* Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-indigo-600/20">
              PC
            </div>
            <div>
              <span className="font-semibold text-white dark:text-white light:text-slate-900">
                Punam Channe
              </span>
              <span className="text-slate-500 ml-2 font-mono">
                AI & Software Developer
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 flex-wrap justify-center font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-200 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-200 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-200 transition-colors ml-1"
              title="Back to top"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-500 light:text-slate-500 gap-2 text-center sm:text-left">
          <div>
            © 2026 Punam Channe. All rights reserved.
          </div>
          <div>
            Built with React, TypeScript, Vite & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};
