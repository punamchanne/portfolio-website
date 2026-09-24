import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { FiCpu, FiServer, FiLayout, FiDatabase, FiCheck } from 'react-icons/fi';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':
        return <FiCpu className="w-5 h-5 text-indigo-400" />;
      case 'backend':
        return <FiServer className="w-5 h-5 text-indigo-400" />;
      case 'frontend':
        return <FiLayout className="w-5 h-5 text-indigo-400" />;
      case 'data-tools':
        return <FiDatabase className="w-5 h-5 text-indigo-400" />;
      default:
        return <FiCpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Core Expertise
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Curated, high-value competencies across artificial intelligence, backend systems, full-stack development, and data architecture.
          </p>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white font-medium shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === category.id
                  ? 'bg-indigo-600 text-white font-medium shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 4 Clean Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#111827] border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-950/60 border border-indigo-900/50 flex items-center justify-center">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="font-semibold text-slate-100 text-base">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-200 hover:border-slate-700 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-[10px] font-mono">· {skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <FiCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Production & project validated</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Focus Summary Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-indigo-400">Primary Core Stack:</span>
            <span>Python, FastAPI/Flask, React.js, LangGraph & Machine Learning</span>
          </div>
          <span className="text-slate-500 text-[11px]">Clean Architecture • ATS Compliant</span>
        </div>

      </div>
    </section>
  );
};
