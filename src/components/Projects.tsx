import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { FiGithub, FiExternalLink, FiFileText, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'GenAI' | 'Full Stack' | 'Blockchain'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories = ['All', 'AI/ML', 'GenAI', 'Full Stack', 'Blockchain'] as const;

  const filteredProjects = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section id="projects" className="py-20 border-b divider relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 dark:text-indigo-400 font-semibold block mb-1 text-indigo-600-light">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-heading tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl">
            Selected engineering projects built with verified architectures and real source code.
          </p>
        </motion.div>

        {/* Filter Bar & Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setIsExpanded(false);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  filter === cat
                    ? 'bg-indigo-600 text-white font-medium shadow-md shadow-indigo-600/20'
                    : 'filter-btn-inactive'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-muted">
            Showing <span className="text-heading font-semibold">{displayedProjects.length}</span> of {filteredProjects.length} Projects
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="glass-card rounded-xl p-5 sm:p-6 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Category & Live badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-indigo-400 dark:text-indigo-400 font-semibold">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        Live Demo
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-heading text-lg mb-2 group-hover:text-indigo-400 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-body leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill px-2 py-0.5 rounded text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  className="pt-4 border-t divider flex items-center justify-between text-xs gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-muted hover:text-heading transition-colors p-1"
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
                        className="flex items-center gap-1 text-indigo-400 hover:underline p-1"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <FiFileText className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore More & GitHub link */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          {hasMoreProjects && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2.5 rounded-xl glass-card text-heading font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-sm hover:-translate-y-0.5"
            >
              <span>{isExpanded ? 'Show less' : 'Explore more projects'}</span>
              {isExpanded ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
            </button>
          )}

          <a
            href="https://github.com/punamchanne"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-indigo-400 transition-colors pt-2"
          >
            <FiGithub className="w-3.5 h-3.5" />
            <span>See all on GitHub (50+ repositories) →</span>
          </a>
        </div>

        {/* Project Modal */}
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
