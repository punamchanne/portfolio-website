# Punam Kishor Channe — Developer Portfolio 🚀

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, modern, and recruiter-focused portfolio website for **Punam Kishor Channe** — AI & Software Developer specializing in Python, Machine Learning, Full-Stack Development, and Intelligent Automation.

---

## 🌟 Highlights & Key Features

- 💼 **Recruiter-First UX**: Clean, distraction-free aesthetic with high readability, precise metrics, and clear skill categorization.
- 📄 **Interactive Resume Hub**: Embedded ATS-friendly PDF viewer with instant one-click download (`/resume.pdf`), new-tab preview, and formatted web summary.
- 🛠️ **Deep-Dive Project Case Studies**: Detailed modal views for engineering projects covering architecture flowcharts, business problems, technical solutions, and challenges.
- 🧠 **Categorized Technical Matrix**: High-value competencies grouped into AI/ML, Backend & APIs, Frontend & Full-Stack, and Data Systems.
- ⚡ **Blazing Fast Performance**: Built with Vite + React + Tailwind CSS with zero bloat and optimized bundle sizes.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile screens with accessible navigation.

---

## 💻 Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build & Tooling** | [Vite](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/) + Custom Dark Architecture |
| **Icons & Visuals** | [React Icons](https://react-icons.github.io/react-icons/) (Feather, Simple Icons) |
| **Code Quality** | ESLint / Oxlint + TypeScript Strict Checking |

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── photo.jpg                     # Profile photograph
│   ├── resume.pdf                    # Verified Curriculum Vitae (PDF)
│   ├── punam k. channe resume.pdf    # Source PDF
│   └── favicon.svg                   # Custom brand favicon
├── src/
│   ├── assets/                       # Static media and brand assets
│   ├── components/
│   │   ├── Navbar.tsx                # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx                  # Recruiter-focused hero & profile card
│   │   ├── About.tsx                 # Background, trajectory & narrative
│   │   ├── Skills.tsx                # Categorized 4-quadrant tech matrix
│   │   ├── Projects.tsx              # Featured project grid with filter tabs
│   │   ├── ProjectModal.tsx          # Comprehensive project deep-dive modal
│   │   ├── Experience.tsx            # Internship timeline (Road2Tech, Edunet, iBase)
│   │   ├── Education.tsx             # B.Tech AI & Diploma records
│   │   ├── Certifications.tsx        # Industry verified credentials
│   │   ├── ResumeCTA.tsx             # Resume call-to-action banner
│   │   ├── ResumeModal.tsx           # Dual-mode PDF & Web resume viewer
│   │   ├── Contact.tsx               # Direct contact form & channel links
│   │   └── Footer.tsx                # Copyright, quick links & back-to-top
│   ├── data/
│   │   └── portfolioData.ts          # Central typed source of truth for all content
│   ├── App.tsx                       # Root layout & modal state management
│   ├── main.tsx                      # Vite React mounting entry
│   └── index.css                     # Tailwind directives & core design tokens
├── package.json                      # Dependencies and scripts
├── tailwind.config.js                # Custom Tailwind theme tokens
└── vite.config.ts                    # Vite build configuration
```

---

## 🚀 Featured Engineering Projects

1. **[Meeting Follow-up Automation Agent](https://github.com/punamchanne/AI-Meeting-Follow-up-Agent)**
   - *Stack:* Google Gemini Multimodal API, FastAPI, Python 3.11, React, FFmpeg
   - Automated multimodal video analysis pipeline extracting executive summaries, decisions, action items, and follow-up emails.

2. **[Pharmaceutical Customer Complaint Management](https://github.com/punamchanne/AI-Powered-Pharmaceutical-Customer-Complaint-Management-)**
   - *Stack:* LangGraph, FastAPI, Python, React, Redux, cGMP / FDA 21 CFR
   - Enterprise QMS regulatory triage system classifying complaints into Critical/Major/Minor tiers with audit trails.

3. **[FarmCare – Smart Agriculture System](https://github.com/punamchanne/FarmCareAi)**
   - *Stack:* Python, Scikit-learn, TensorFlow CNN, React, TypeScript, PostgreSQL, Supabase
   - Agricultural decision support platform combining soil-based crop recommendation and plant leaf disease diagnosis.

4. **[Property Dealing & Real Estate Portal](https://github.com/punamchanne/Property_Dealing)**
   - *Stack:* React, Next.js, Node.js, Express, MongoDB, JWT Auth, Cloudinary
   - Full-stack property management portal with image upload pipelines and agent appointment scheduling.

5. **[Job Portal Web Application](https://github.com/punamchanne/job-portal-)**
   - *Stack:* React, Next.js, Node.js, Express, MongoDB, JWT Auth, REST APIs
   - Recruitment portal with candidate and employer authentication, vacancy postings, and resume parsing.

6. **[Blockchain Forensic Evidence Management](https://github.com/punamchanne/Blockchain-Forensic-Evidence-Management)**
   - *Stack:* Python, Flask, Cryptography / SHA-256, React, PostgreSQL
   - Cryptographic digital evidence management system ensuring immutable chain-of-custody logging.

---

## 🛠️ Getting Started Locally

### Prerequisites

- **Node.js** (v18.0 or higher recommended)
- **npm** or **yarn** / **pnpm**
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/punamchanne/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Connect

- **Name:** Punam Kishor Channe
- **LinkedIn:** [linkedin.com/in/punamchanne51](https://www.linkedin.com/in/punamchanne51/)
- **GitHub:** [github.com/punamchanne](https://github.com/punamchanne)
- **Email:** [punamchanne@gmail.com](mailto:punamchanne@gmail.com)

---

<div align="center">
  <sub>Designed & Developed by Punam Kishor Channe • Built with React & Tailwind CSS</sub>
</div>
