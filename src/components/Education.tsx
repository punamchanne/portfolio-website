import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b divider relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-heading">
            Academic Background
          </h2>
        </motion.div>

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
                <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
                  <span className="font-semibold text-indigo-400">
                    {edu.id === 'btech' ? 'Undergraduate Degree' : 'Diploma'}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-bold text-heading text-lg mb-1">{edu.degree}</h3>
                <div className="text-sm font-medium text-indigo-400 mb-1">{edu.institution}</div>
                <div className="flex items-center gap-1 text-xs text-muted mb-4 font-mono">
                  <FiMapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{edu.location}</span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-body pl-4 list-disc">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="leading-relaxed">{h}</li>
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
