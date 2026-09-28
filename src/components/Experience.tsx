import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b divider relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-heading">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl">
            Technical internships across machine learning models, applied artificial intelligence, and Python backend engineering.
          </p>
        </motion.div>

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
                <h3 className="text-lg font-bold text-heading">
                  {exp.role}{' '}
                  <span className="text-indigo-400 font-medium">@ {exp.company}</span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-mono text-muted">
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

              <ul className="space-y-2 text-xs sm:text-sm text-body my-4 pl-4 list-disc">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="leading-relaxed">{bullet}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t divider">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tag-pill">
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
