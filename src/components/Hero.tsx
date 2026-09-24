import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FiArrowDown, FiEye, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPos = elPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Links */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Simple Clean Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 mb-6 font-mono">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>Open to Opportunities</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">Entry-Level</span>
            </div>

            {/* Main Headings */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-2">
              Hi, I'm Punam Channe.
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-6">
              AI & Software Developer
            </h2>

            <p className="text-base text-slate-300 max-w-xl leading-relaxed mb-6">
              B.Tech graduate in Artificial Intelligence focused on Python, AI/ML, full-stack development, and data-driven applications. Experienced in developing solutions across multimodal AI, regulatory triage, and fintech systems.
            </p>

            {/* Target Role Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {PERSONAL_INFO.targetRoles.slice(0, 5).map((role) => (
                <span
                  key={role}
                  className="px-2.5 py-1 text-xs rounded bg-slate-900 text-slate-300 border border-slate-800 font-mono"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>View Projects</span>
                <FiArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2"
              >
                <FiEye className="w-4 h-4 text-indigo-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Secondary Links */}
            <div className="flex items-center gap-5 text-sm text-slate-400 font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-600">/</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-600">/</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Photo Frame Card */}
              <div className="bg-[#111827] border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
                <div className="relative aspect-[4/4.5] sm:aspect-[4/4.2] rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900">
                  <img
                    src="/photo.jpg"
                    alt="Punam Kishor Channe"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Status caption under photo */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-300 font-medium">Open to Full-Time Roles</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <FiMapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
