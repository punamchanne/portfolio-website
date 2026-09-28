import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FiArrowDown, FiEye, FiGithub, FiLinkedin, FiMail, FiMapPin, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 border-b divider overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-transparent blur-[110px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono backdrop-blur-sm mb-6"
              style={{
                backgroundColor: 'var(--btn-secondary-bg)',
                border: '1px solid var(--border-base)',
                color: 'var(--text-body)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Open to Opportunities</span>
              <span style={{ color: 'var(--text-subtle)' }}>·</span>
              <span style={{ color: 'var(--text-muted)' }}>Full-Time / Entry-Level</span>
            </div>

            {/* Headings */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-2"
              style={{ color: 'var(--text-heading)' }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
                Punam Channe
              </span>.
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-6 flex items-center gap-2">
              <span>AI &amp; Software Developer</span>
              <FiZap className="w-5 h-5 text-indigo-400 animate-pulse hidden sm:inline" />
            </h2>

            <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
              B.Tech graduate in Artificial Intelligence specialized in Python, AI/ML engineering, REST APIs, and full-stack software development. Passionate about building robust intelligent systems.
            </p>

            {/* Target Role Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {PERSONAL_INFO.targetRoles.slice(0, 5).map((role) => (
                <span key={role} className="tag-pill">
                  {role}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <FiArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="btn-secondary w-full sm:w-auto"
              >
                <FiEye className="w-4 h-4 text-indigo-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-5 text-sm font-mono pt-4 border-t w-full divider"
              style={{ color: 'var(--text-muted)' }}
            >
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-indigo-400" aria-label="GitHub Profile">
                <FiGithub className="w-4 h-4" /><span>GitHub</span>
              </a>
              <span style={{ color: 'var(--border-base)' }}>/</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-indigo-400" aria-label="LinkedIn Profile">
                <FiLinkedin className="w-4 h-4" /><span>LinkedIn</span>
              </a>
              <span style={{ color: 'var(--border-base)' }}>/</span>
              <a href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-indigo-400" aria-label="Email">
                <FiMail className="w-4 h-4" /><span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/30 to-purple-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div
                className="relative glass-card rounded-2xl p-4 sm:p-5 shadow-2xl transition-all duration-300 group-hover:-translate-y-1"
              >
                <div
                  className="relative aspect-[4/4.5] sm:aspect-[4/4.2] rounded-xl overflow-hidden shadow-inner"
                  style={{ border: '1px solid var(--border-base)', backgroundColor: 'var(--bg-surface)' }}
                >
                  <img
                    src="/photo.jpg"
                    alt="Punam Kishor Channe"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Caption */}
                <div
                  className="mt-4 pt-3 border-t flex items-center justify-between text-xs font-mono divider"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-medium" style={{ color: 'var(--text-body)' }}>Available for Hiring</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
