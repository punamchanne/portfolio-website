import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 dark:text-indigo-400 light:text-indigo-600 font-semibold block mb-1">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Academic Background
          </h2>
        </motion.div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mb-2">
                  <span className="font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
                    {edu.id === 'btech' ? 'Undergraduate Degree' : 'Diploma'}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-bold text-white dark:text-white light:text-slate-900 text-lg mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-medium text-indigo-400 dark:text-indigo-400 light:text-indigo-600 mb-1">
                  {edu.institution}
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mb-4 font-mono">
                  <FiMapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{edu.location}</span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 pl-4 list-disc">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
