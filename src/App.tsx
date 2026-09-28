import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white transition-colors duration-300 relative">
        {/* Ambient background pattern */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

        {/* Sticky Responsive Header */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-grow relative z-10">
          <Hero onOpenResume={() => setResumeModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <ResumeCTA onOpenResume={() => setResumeModalOpen(true)} />
          <Contact />
        </main>

        {/* Recruiter-ready Interactive Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
