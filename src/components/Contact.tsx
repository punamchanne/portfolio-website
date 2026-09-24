import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiCopy } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleCategory: 'Software Developer',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    const mailtoSubject = encodeURIComponent(`[Inquiry - ${formData.roleCategory}] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Punam,\n\nName: ${formData.name}\nEmail: ${formData.email}\nRole Category: ${formData.roleCategory}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Contact
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            I'm open to entry-level opportunities in Software Development, Python, AI/ML, Full-Stack Development, Data Analytics and QA/Testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl">

          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-semibold text-white">
              Direct Contact
            </h3>

            {/* Email Card */}
            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-indigo-400" />
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm text-white hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                title="Copy email"
              >
                {copiedEmail ? <FiCheck className="w-4 h-4 text-indigo-400" /> : <FiCopy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] border border-slate-800 rounded-xl p-4 flex items-center justify-between hover:border-slate-700 transition-colors block"
            >
              <div className="flex items-center gap-3">
                <FiLinkedin className="w-4 h-4 text-indigo-400" />
                <div>
                  <div className="text-[11px] font-mono text-slate-400">LinkedIn</div>
                  <div className="text-xs sm:text-sm text-white">
                    linkedin.com/in/punamchanne51
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400">Visit →</span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] border border-slate-800 rounded-xl p-4 flex items-center justify-between hover:border-slate-700 transition-colors block"
            >
              <div className="flex items-center gap-3">
                <FiGithub className="w-4 h-4 text-indigo-400" />
                <div>
                  <div className="text-[11px] font-mono text-slate-400">GitHub</div>
                  <div className="text-xs sm:text-sm text-white">
                    github.com/punamchanne
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400">Visit →</span>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#111827] border border-slate-800 rounded-xl p-6 sm:p-7">
            <h3 className="text-base font-semibold text-white mb-4">
              Send a Message
            </h3>

            {submitted ? (
              <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 text-center space-y-2">
                <div className="text-indigo-400 font-semibold text-sm">Message Prepared</div>
                <p className="text-xs text-slate-300">
                  Your mail client has been opened with your pre-filled inquiry. You can also reach me directly at {PERSONAL_INFO.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-3 py-1.5 rounded bg-slate-800 text-xs text-white hover:bg-slate-700"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded-lg bg-[#0b0f19] border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-[#0b0f19] border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="roleCategory" className="block text-xs font-mono text-slate-400 mb-1">
                    Role Category
                  </label>
                  <select
                    id="roleCategory"
                    value={formData.roleCategory}
                    onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0b0f19] border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  >
                    {PERSONAL_INFO.targetRoles.map((role) => (
                      <option key={role} value={role} className="bg-slate-900 text-white">
                        {role}
                      </option>
                    ))}
                    <option value="General Inquiry" className="bg-slate-900 text-white">
                      General Inquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-400 mb-1">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="Role Opportunity / Discussion"
                    className="w-full px-3 py-2 rounded-lg bg-[#0b0f19] border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Details about the opportunity or inquiry..."
                    className="w-full px-3 py-2 rounded-lg bg-[#0b0f19] border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <FiSend className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
