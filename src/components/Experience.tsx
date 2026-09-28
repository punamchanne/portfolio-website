import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
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
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl">
            Technical internships across machine learning models, applied artificial intelligence, and Python backend engineering.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="space-y-6 max-w-4xl">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-6 sm:p-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                    {exp.role} <span className="text-indigo-400 dark:text-indigo-400 light:text-indigo-600 font-medium">@ {exp.company}</span>
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3.5 h-3.5 text-indigo-400" />
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
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 my-4 pl-4 list-disc">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
