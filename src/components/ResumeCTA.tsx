import React from 'react';
import { FiDownload, FiEye } from 'react-icons/fi';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  return (
    <section className="py-16 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111827] border border-slate-800 rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
              Want to know more about my experience?
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Inspect my background, academic coursework, verified internships, and technical competencies in an ATS-friendly format.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <FiEye className="w-4 h-4" />
              <span>View Resume</span>
            </button>

            <a
              href="/punam k. channe resume.pdf"
              download="Punam_Kishor_Channe_Resume.pdf"
              className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <FiDownload className="w-4 h-4 text-indigo-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
