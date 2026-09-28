import React from 'react';
import { FiDownload, FiEye } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  return (
    <section className="py-16 border-b divider relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-600/10 blur-[80px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-heading">
              Want to know more about my experience?
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-xl">
              Inspect my background, academic coursework, verified internships, and technical competencies in an ATS-friendly format.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <button
              onClick={onOpenResume}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
            >
              <FiEye className="w-4 h-4" />
              <span>View Resume</span>
            </button>

            <a
              href="/resume.pdf"
              download="Punam_Kishor_Channe_Resume.pdf"
              className="btn-secondary flex-1 sm:flex-none"
            >
              <FiDownload className="w-4 h-4 text-indigo-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
