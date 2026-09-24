import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Education
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Academic Background
          </h2>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#111827] border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>{edu.id === 'btech' ? 'Undergraduate Degree' : 'Diploma'}</span>
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-semibold text-white text-lg mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm text-indigo-400 mb-1">
                  {edu.institution}
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 mb-4 font-mono">
                  <FiMapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
