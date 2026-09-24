import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { FiCheckCircle } from 'react-icons/fi';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Credentials
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Verified credentials from recognized technology organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#111827] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>{cert.issuer}</span>
                  <FiCheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                </div>

                <h3 className="font-semibold text-white text-sm mb-3 leading-snug">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
