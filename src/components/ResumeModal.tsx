import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, PROJECTS_DATA } from '../data/portfolioData';
import { FiX, FiDownload, FiPrinter, FiExternalLink, FiFileText, FiList } from 'react-icons/fi';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'web'>('pdf');
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-[#111827] border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 my-auto text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Action Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-[#0c1220] shrink-0 gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-mono text-slate-200 font-semibold">
              Resume • {PERSONAL_INFO.name}
            </span>
            
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5 text-xs font-mono">
              <button
                onClick={() => setViewMode('pdf')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                  viewMode === 'pdf'
                    ? 'bg-indigo-600 text-white font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FiFileText className="w-3 h-3" />
                <span>PDF View</span>
              </button>
              <button
                onClick={() => setViewMode('web')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                  viewMode === 'web'
                    ? 'bg-indigo-600 text-white font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FiList className="w-3 h-3" />
                <span>Web Sheet</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Open in new tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
              title="Open Original PDF in New Tab"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {viewMode === 'web' && (
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                title="Print or Save PDF"
              >
                <FiPrinter className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>
            )}

            {/* Direct Download Button */}
            <a
              href="/resume.pdf"
              download="Punam_Kishor_Channe_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold text-white transition-colors shadow-sm"
              title="Download original Resume PDF"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 bg-[#090d18] overflow-hidden">
          {viewMode === 'pdf' ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-slate-950">
              <iframe
                src="/resume.pdf#toolbar=1&navpanes=0"
                title="Punam Kishor Channe Resume PDF"
                className="w-full h-full rounded border border-slate-800 bg-white"
              />
            </div>
          ) : (
            <div className="overflow-y-auto h-full p-4 sm:p-8">
              <div
                ref={printRef}
                className="max-w-3xl mx-auto bg-[#0b0f19] text-slate-200 p-6 sm:p-8 rounded-lg border border-slate-800 space-y-6 font-sans text-xs sm:text-sm"
              >
                {/* Header */}
                <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-sm font-medium text-indigo-400 mt-0.5">
                      {PERSONAL_INFO.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      {PERSONAL_INFO.tagline}
                    </p>
                  </div>

                  <div className="space-y-1 text-xs text-slate-400 font-mono">
                    <div>{PERSONAL_INFO.email}</div>
                    <div>{PERSONAL_INFO.location}</div>
                    <div className="text-indigo-400">{PERSONAL_INFO.github.replace('https://', '')}</div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
                    Professional Summary
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {PERSONAL_INFO.bioIntro} Proven track record across multimodal AI agents, regulatory pharmaceutical compliance pipelines, and fintech banking applications.
                  </p>
                </div>

                {/* Internships */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
                    Practical Experience
                  </h2>
                  <div className="space-y-4">
                    {EXPERIENCE_DATA.map((exp) => (
                      <div key={exp.id} className="border-l-2 border-slate-800 pl-3.5 space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                          <span className="font-semibold text-white">{exp.role}</span>
                          <span className="text-slate-400 font-mono text-xs">{exp.period}</span>
                        </div>
                        <div className="text-xs text-indigo-400 font-mono">
                          {exp.company} • {exp.location}
                        </div>
                        <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Projects */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
                    Featured Engineering Projects
                  </h2>
                  <div className="space-y-3">
                    {PROJECTS_DATA.slice(0, 3).map((proj) => (
                      <div key={proj.id} className="bg-slate-900/60 p-3 rounded border border-slate-800/80">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-xs sm:text-sm">{proj.title}</span>
                          <span className="text-[11px] font-mono text-indigo-400">{proj.category}</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {proj.tags.map(t => (
                            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
                    Education
                  </h2>
                  <div className="space-y-2">
                    {EDUCATION_DATA.map((edu) => (
                      <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs">
                        <div>
                          <span className="font-semibold text-white">{edu.degree}</span>
                          <span className="text-slate-400 block">{edu.institution}</span>
                        </div>
                        <div className="text-slate-400 font-mono text-right sm:text-right mt-1 sm:mt-0">
                          <div>{edu.period}</div>
                          <div className="text-indigo-400">{edu.grade}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
                    Certifications
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {CERTIFICATIONS_DATA.map((cert) => (
                      <div key={cert.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="font-medium text-slate-200">{cert.title}</div>
                        <div className="text-slate-400 font-mono text-[11px]">{cert.issuer}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
