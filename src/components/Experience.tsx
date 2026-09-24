import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Experience
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Technical internships across machine learning models, applied artificial intelligence, and Python backend engineering.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 max-w-4xl">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#111827] border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role} <span className="text-indigo-400 font-normal">@ {exp.company}</span>
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <FiMapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 my-4 pl-4 list-disc">
                {exp.description.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
