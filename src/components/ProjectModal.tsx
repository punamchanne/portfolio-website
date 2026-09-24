import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Window */}
      <div
        className="relative w-full max-w-3xl max-h-[88vh] bg-[#111827] border border-slate-800 rounded-xl shadow-xl overflow-hidden flex flex-col z-10 my-auto text-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-800 bg-[#0c1220] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-indigo-300 border border-slate-700">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">Project Case Study</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-7 space-y-6">
          
          {/* Title & Links */}
          <div>
            <h2 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs font-mono text-indigo-400 mt-1">
              {project.subtitle}
            </p>
            
            <div className="flex items-center gap-2.5 mt-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-850 border border-slate-700 text-xs font-medium text-white transition-colors"
              >
                <FiGithub className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-xs font-medium text-white transition-colors"
                >
                  <FiExternalLink className="w-3.5 h-3.5" />
                  <span>Live Deployment</span>
                </a>
              )}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
              Overview
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-xs font-mono text-slate-300 font-semibold mb-1">
                Problem Statement
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-xs font-mono text-indigo-300 font-semibold mb-1">
                Engineering Solution
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Key Features
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">›</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Architecture */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              System Architecture Flow
            </h3>
            <div className="p-3 rounded-lg bg-[#080d18] border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre leading-relaxed">
              {project.architecture}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {Object.values(project.techStack).flat().filter(Boolean).map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Learnings */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Engineering Challenges & Learnings
            </h3>
            <ul className="space-y-1 text-xs text-slate-400">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-slate-500 font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#0c1220] flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <span>Source: github.com/punamchanne</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
