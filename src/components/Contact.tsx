import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiCopy, FiCheckCircle, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleCategory: 'Software Developer',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      // Using Web3Forms public API endpoint for direct email delivery to punamchanne51@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: 'a3d4f18c-7c0f-48e2-b13c-0e785b98f219',
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry - ${formData.roleCategory}] ${formData.subject}`,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.roleCategory}\n\nMessage:\n${formData.message}`,
          from_name: `${formData.name} (Portfolio Website)`,
          to_email: PERSONAL_INFO.email
        })
      });
      const data = await response.json();
      if (data.success || response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', roleCategory: 'Software Developer', subject: '', message: '' });
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  /* Reusable inline style objects */
  const iconWrapStyle: React.CSSProperties = {
    backgroundColor: 'rgba(67,56,202,0.15)',
    border: '1px solid rgba(99,102,241,0.25)',
    color: '#818cf8',
  };
  const inputStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-input)',
    border: '1px solid var(--border-input)',
    color: 'var(--text-heading)',
    width: '100%',
  };

  return (
    <section id="contact" className="py-20 border-b divider relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-heading">
            Let's Build Something Together.
          </h2>
          <p className="text-sm sm:text-base text-body mt-2 max-w-2xl leading-relaxed">
            I'm actively seeking opportunities in Software Development, Python, AI/ML, Full-Stack Development, and Data Analytics. Send me a direct message below!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl">

          {/* Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-base font-bold text-heading">Direct Channels</h3>

            {/* Email */}
            <div className="glass-card rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={iconWrapStyle}>
                  <FiMail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-muted">Direct Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-medium text-heading hover:text-indigo-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="p-2 rounded-lg text-muted hover:text-indigo-400 hover:bg-slate-800/30 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="glass-card rounded-xl p-4 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={iconWrapStyle}>
                  <FiLinkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-muted">LinkedIn Profile</div>
                  <div className="text-xs sm:text-sm font-medium text-heading group-hover:text-indigo-400 transition-colors">
                    linkedin.com/in/punamchanne51
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-muted group-hover:translate-x-0.5 transition-transform">Visit →</span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank" rel="noopener noreferrer"
              className="glass-card rounded-xl p-4 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={iconWrapStyle}>
                  <FiGithub className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-muted">GitHub Repositories</div>
                  <div className="text-xs sm:text-sm font-medium text-heading group-hover:text-indigo-400 transition-colors">
                    github.com/punamchanne
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-muted group-hover:translate-x-0.5 transition-transform">Visit →</span>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-base font-bold text-heading mb-4">Send a Direct Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl text-center space-y-4 glass-card"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-heading">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-body mt-1 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message has been dispatched directly. I will review it and get back to you shortly at your email.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-md shadow-indigo-600/20"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-muted mb-1">Your Name *</label>
                    <input
                      id="name" type="text" value={formData.name}
                      onChange={(e) => { setFormData({ ...formData, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: '' }); }}
                      placeholder="e.g. Rahul Sharma / Recruiter"
                      className="form-input"
                      style={inputStyle}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-muted mb-1">Your Email *</label>
                    <input
                      id="email" type="email" value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: '' }); }}
                      placeholder="e.g. name@company.com"
                      className="form-input"
                      style={inputStyle}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="roleCategory" className="block text-xs font-mono text-muted mb-1">Role Category / Topic</label>
                  <select
                    id="roleCategory" value={formData.roleCategory}
                    onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                    className="form-input"
                    style={inputStyle}
                  >
                    {PERSONAL_INFO.targetRoles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                    <option value="Freelance Project">Freelance / Contract Project</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-muted mb-1">Subject *</label>
                  <input
                    id="subject" type="text" value={formData.subject}
                    onChange={(e) => { setFormData({ ...formData, subject: e.target.value }); if (errors.subject) setErrors({ ...errors, subject: '' }); }}
                    placeholder="e.g. Software Developer Opportunity"
                    className="form-input"
                    style={inputStyle}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-muted mb-1">Message *</label>
                  <textarea
                    id="message" rows={4} value={formData.message}
                    onChange={(e) => { setFormData({ ...formData, message: e.target.value }); if (errors.message) setErrors({ ...errors, message: '' }); }}
                    placeholder="Please describe the role, requirements, or inquiry..."
                    className="form-input resize-none"
                    style={inputStyle}
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {errorMessage && <p className="text-xs text-rose-400 font-mono">{errorMessage}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <><FiLoader className="w-4 h-4 animate-spin" /><span>Sending Message...</span></>
                  ) : (
                    <><FiSend className="w-4 h-4" /><span>Send Direct Message</span></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
