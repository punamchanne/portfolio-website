import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
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
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl">
            Verified credentials from recognized technology organizations.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                  <span className="font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600">{cert.issuer}</span>
                  <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>

                <h3 className="font-bold text-white dark:text-white light:text-slate-900 text-sm mb-3 leading-snug">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-slate-300 dark:text-slate-400 light:text-slate-600 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
