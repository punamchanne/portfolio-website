import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Home',       href: '#home' },
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact',    href: '#contact' },
  ];

  return (
    <footer
      className="py-10 text-xs transition-colors"
      style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-muted)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b divider"
        >
          {/* Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-indigo-600/20">
              PC
            </div>
            <div>
              <span className="font-semibold" style={{ color: 'var(--text-heading)' }}>
                Punam Channe
              </span>
              <span className="ml-2 font-mono text-subtle">
                AI &amp; Software Developer
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-4 flex-wrap justify-center font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-2">
            {[
              { href: PERSONAL_INFO.github,               label: 'GitHub',   icon: <FiGithub  className="w-4 h-4" />, isLink: true  },
              { href: PERSONAL_INFO.linkedin,             label: 'LinkedIn', icon: <FiLinkedin className="w-4 h-4" />, isLink: true  },
              { href: `mailto:${PERSONAL_INFO.email}`,    label: 'Email',    icon: <FiMail    className="w-4 h-4" />, isLink: true  },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-2 rounded-lg hover:text-indigo-400 hover:bg-slate-800/30 transition-colors"
              >
                {item.icon}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg hover:text-indigo-400 hover:bg-slate-800/30 transition-colors ml-1"
              title="Back to top"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className="mt-6 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] gap-2 text-center sm:text-left"
          style={{ color: 'var(--text-subtle)' }}
        >
          <div>© 2026 Punam Channe. All rights reserved.</div>
          <div>Built with React, TypeScript, Vite &amp; Tailwind CSS.</div>
        </div>
      </div>
    </footer>
  );
};
