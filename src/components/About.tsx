import React from 'react';
import { PERSONAL_INFO, TIMELINE_STAGES } from '../data/portfolioData';
import { FiCheck, FiCpu, FiCode, FiDatabase, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <FiCpu className="w-4 h-4 text-indigo-400 dark:text-indigo-400 light:text-indigo-600" />,
      title: "B.Tech in Artificial Intelligence",
      description: "G. H. Raisoni College of Engineering, focused on machine learning algorithms, deep learning, and computer vision systems."
    },
    {
      icon: <FiCode className="w-4 h-4 text-indigo-400 dark:text-indigo-400 light:text-indigo-600" />,
      title: "Hands-on Software Development",
      description: "Command of Python, JavaScript, React.js, FastAPI, Flask, and clean object-oriented architecture."
    },
    {
      icon: <FiDatabase className="w-4 h-4 text-indigo-400 dark:text-indigo-400 light:text-indigo-600" />,
      title: "Data Engineering & Analytics",
      description: "Experienced with Pandas, NumPy, SQL (PostgreSQL, MySQL), MongoDB, and data preprocessing pipelines."
    },
    {
      icon: <FiBriefcase className="w-4 h-4 text-indigo-400 dark:text-indigo-400 light:text-indigo-600" />,
      title: "3 Practical Internships",
      description: "Demonstrated execution across machine learning engineering at Road2Tech, AI at Edunet, and Python at iBase."
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 dark:text-indigo-400 light:text-indigo-600 font-semibold block mb-1">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Narrative & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                I am a B.Tech graduate in Artificial Intelligence with a focus on software engineering, intelligent systems, and data-driven applications. My education started with a Diploma in Computer Technology, giving me early grounding in computer systems, C/C++, and core algorithms.
              </p>
              <p>
                Across three internships and over 50 GitHub repositories, I have built real-world software ranging from <strong>multimodal video intelligence agents</strong> using Gemini to <strong>cGMP-compliant pharmaceutical complaint management</strong> with LangGraph, and full-stack platforms backed by React, FastAPI, Node.js, and SQL.
              </p>
              <p>
                I prioritize writing clean, maintainable code, adhering to clean architecture, and understanding the entire development lifecycle.
              </p>
            </div>

            {/* Target Roles Checklist */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 block mb-3 font-semibold">
                Target Roles:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PERSONAL_INFO.targetRoles.map((role) => (
                  <div key={role} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium">
                    <FiCheck className="w-3.5 h-3.5 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Highlights */}
          <div className="lg:col-span-5 space-y-3">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl p-4 flex items-start gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-slate-900/90 dark:bg-slate-900/90 light:bg-indigo-50 border border-slate-800 dark:border-slate-800 light:border-indigo-200 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white dark:text-white light:text-slate-900 text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Milestone Timeline */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
              Journey Timeline
            </h3>
            <p className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
              Education → Internships → Projects → Current Goal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMELINE_STAGES.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-indigo-400 dark:text-indigo-400 light:text-indigo-600 font-bold mb-2">
                    Phase {stage.step}
                  </div>
                  <h4 className="font-semibold text-white dark:text-white light:text-slate-900 text-sm mb-1">
                    {stage.title}
                  </h4>
                  <div className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mb-2">
                    {stage.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
