import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'GenAI' | 'Full Stack' | 'Data'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI/ML', 'GenAI', 'Full Stack', 'Data'] as const;

  const filteredProjects = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Selected engineering projects built with verified architectures and real source code.
          </p>
        </div>

        {/* Filter Bar & Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                  filter === cat
                    ? 'bg-indigo-600 text-white font-medium'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-slate-400">
            Showing <span className="text-white font-semibold">{filteredProjects.length}</span> of {PROJECTS_DATA.length} Projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111827] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-indigo-400 font-medium">
                    {project.category}
                  </span>
                  {project.liveUrl && (
                    <span className="text-[11px] font-mono text-slate-400 border border-slate-700 px-2 py-0.5 rounded">
                      Live Deployed
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-white text-lg mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 px-2.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5"
                    title="GitHub Repository"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 px-2.5 rounded bg-slate-900 hover:bg-slate-800 text-indigo-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5"
                      title="View Live App"
                    >
                      <FiExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-2.5 py-1.5 rounded bg-indigo-600/10 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/20 transition-colors font-medium flex items-center gap-1.5"
                >
                  <FiFileText className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
