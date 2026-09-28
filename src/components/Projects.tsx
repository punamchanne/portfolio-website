import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'GenAI' | 'Full Stack' | 'Data'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI/ML', 'GenAI', 'Full Stack', 'Data'] as const;

  const filteredProjects = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl">
            Selected engineering projects built with verified architectures and real source code.
          </p>
        </motion.div>

        {/* Filter Bar & Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  filter === cat
                    ? 'bg-indigo-600 text-white font-medium shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
            Showing <span className="text-white dark:text-white light:text-slate-900 font-semibold">{filteredProjects.length}</span> of {PROJECTS_DATA.length} Projects
          </div>
        </div>

        {/* Projects Grid with Motion */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl p-5 sm:p-6 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-indigo-400 dark:text-indigo-400 light:text-indigo-600 font-semibold">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        Live Demo
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-white dark:text-white light:text-slate-900 text-lg mb-2 group-hover:text-indigo-400 dark:group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-slate-300 dark:text-slate-400 light:text-slate-600 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div 
                  className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between text-xs gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors p-1"
                        aria-label="View GitHub Repository"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 hover:underline p-1"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-xs font-mono text-indigo-400 dark:text-indigo-400 light:text-indigo-600 hover:text-indigo-300 transition-colors"
                  >
                    <FiFileText className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Deep-Dive Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};
