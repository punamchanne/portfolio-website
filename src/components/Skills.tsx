import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { FiCpu, FiServer, FiLayout, FiDatabase, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':     return <FiCpu      className="w-5 h-5 text-indigo-400" />;
      case 'backend':   return <FiServer   className="w-5 h-5 text-indigo-400" />;
      case 'frontend':  return <FiLayout   className="w-5 h-5 text-indigo-400" />;
      case 'data-tools':return <FiDatabase className="w-5 h-5 text-indigo-400" />;
      default:          return <FiCpu      className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 border-b divider relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Core Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-heading">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl">
            Curated, high-value competencies across artificial intelligence, backend systems, full-stack development, and data architecture.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white font-medium shadow-md shadow-indigo-600/20'
                : 'filter-btn-inactive'
            }`}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === category.id
                  ? 'bg-indigo-600 text-white font-medium shadow-md shadow-indigo-600/20'
                  : 'filter-btn-inactive'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b divider">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-inner"
                      style={{ backgroundColor: 'rgba(67,56,202,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}
                    >
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="font-bold text-lg text-heading">{category.name}</h3>
                  </div>
                  <span className="text-xs font-mono text-muted">{category.skills.length} skills</span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:border-indigo-500/40 transition-colors shadow-sm tag-pill"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-[10px] font-mono text-subtle">· {skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-5 pt-3 border-t divider flex items-center gap-2 text-[11px] font-mono text-muted">
                <FiCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Production &amp; project validated</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-4 rounded-xl glass-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono shadow-sm"
        >
          <div className="flex items-center gap-2 text-body">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-indigo-400">Primary Core Stack:</span>
            <span>Python, FastAPI/Flask, React.js, LangGraph &amp; Machine Learning</span>
          </div>
          <span className="text-subtle text-[11px]">Clean Architecture • ATS Compliant</span>
        </motion.div>

      </div>
    </section>
  );
};
