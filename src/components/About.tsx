import React from 'react';
import { PERSONAL_INFO, TIMELINE_STAGES } from '../data/portfolioData';
import { FiCheck, FiCpu, FiCode, FiDatabase, FiBriefcase } from 'react-icons/fi';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <FiCpu className="w-4 h-4 text-indigo-400" />,
      title: "B.Tech in Artificial Intelligence",
      description: "G. H. Raisoni College of Engineering, focused on machine learning algorithms, deep learning, and computer vision systems."
    },
    {
      icon: <FiCode className="w-4 h-4 text-indigo-400" />,
      title: "Hands-on Software Development",
      description: "Command of Python, JavaScript, React.js, FastAPI, Flask, and clean object-oriented architecture."
    },
    {
      icon: <FiDatabase className="w-4 h-4 text-indigo-400" />,
      title: "Data Engineering & Analytics",
      description: "Experienced with Pandas, NumPy, SQL (PostgreSQL, MySQL), MongoDB, and data preprocessing pipelines."
    },
    {
      icon: <FiBriefcase className="w-4 h-4 text-indigo-400" />,
      title: "3 Practical Internships",
      description: "Demonstrated execution across machine learning engineering at Road2Tech, AI at Edunet, and Python at iBase."
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Background
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Narrative & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 bg-[#111827] border border-slate-800 rounded-xl p-6 sm:p-7">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
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
            <div className="mt-6 pt-6 border-t border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                Target Roles:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PERSONAL_INFO.targetRoles.map((role) => (
                  <div key={role} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <FiCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Highlights */}
          <div className="lg:col-span-5 space-y-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-[#111827] border border-slate-800 rounded-xl p-4 flex items-start gap-3.5"
              >
                <div className="p-2 rounded bg-slate-900 border border-slate-800 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Milestone Timeline */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Journey Timeline
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Education → Internships → Projects → Current Goal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMELINE_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-indigo-400 font-bold mb-2">
                    Phase {stage.step}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {stage.title}
                  </h4>
                  <div className="text-xs font-mono text-slate-400 mb-2">
                    {stage.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
