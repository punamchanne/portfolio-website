export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'GenAI' | 'Full Stack' | 'Data';
  tags: string[];
  description: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    ai_ml?: string[];
    database?: string[];
    tools?: string[];
  };
  architecture: string;
  challenges: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level: string;
    icon: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeColor: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Punam Kishor Channe",
  shortName: "Punam Channe",
  title: "AI & Software Developer",
  tagline: "Python | AI/ML | Full-Stack Development | Data Analytics",
  location: "Maharashtra, India",
  email: "punamchanne@gmail.com",
  github: "https://github.com/punamchanne",
  linkedin: "https://www.linkedin.com/in/punamchanne51/",
  bioIntro: "B.Tech graduate in Artificial Intelligence with hands-on experience in Python, SQL, Machine Learning, REST APIs, data preprocessing, model evaluation, and full-stack application development.",
  targetRoles: [
    "Software Developer",
    "Python Developer",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Data Analyst",
    "GenAI Engineer",
    "QA/Testing"
  ],
  statsSummary: [
    { label: "Public Repositories", value: "50+" },
    { label: "Hands-on Internships", value: "3" },
    { label: "Core Focus", value: "AI & Full Stack" },
    { label: "Industry Certifications", value: "4" }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-meeting-followup-agent",
    title: "AI Meeting Follow-up Agent",
    subtitle: "Multimodal Video Intelligence & Automated Executive Reporting",
    category: "GenAI",
    tags: ["Google Gemini Multimodal", "FastAPI", "Python", "React", "FFmpeg", "Tailwind CSS"],
    description: "An automated intelligence system that analyzes client and team meeting video recordings directly using Gemini multimodal AI to extract executive summaries, decisions, action items, and draft follow-up emails.",
    githubUrl: "https://github.com/punamchanne/AI-Meeting-Follow-up-Agent",
    featured: true,
    overview: "In modern corporate settings, converting recorded client/team video calls into concrete action items, executive summaries, and follow-up emails requires hours of manual work. This agent analyzes raw video files directly without requiring separate, lossy transcription pipelines.",
    problem: "Manual post-meeting documentation is slow, prone to missing key action items, and creates delays in communicating next steps to clients and team stakeholders.",
    solution: "Built a full-stack AI automation system using Google Gemini's multimodal video understanding. It extracts timestamps, action owners, decisions, and creates structured executive drafts ready for one-click dispatch.",
    keyFeatures: [
      "Direct multimodal video ingestion (.mp4, .mov, .webm) with FFmpeg preprocessing",
      "Automated extraction of meeting objectives, core decisions, and owner-assigned action items",
      "Executive summary generation with customizable tone (formal, concise, client-facing)",
      "Ready-to-send follow-up email drafts with participant address placeholders",
      "Interactive modern React UI with real-time video upload progress and preview"
    ],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "Vite", "Lucide Icons"],
      backend: ["Python 3.11", "FastAPI", "Uvicorn", "Pydantic"],
      ai_ml: ["Google Gemini Multimodal API (gemini-1.5-flash / 2.0)", "Prompt Engineering"],
      tools: ["FFmpeg", "Git", "REST APIs"]
    },
    architecture: `[Video Upload: .mp4/.webm]
         │
         ▼
[FastAPI Backend & Video Chunk Validation]
         │
         ▼
[Google Gemini Multimodal API Engine]
         │
  ┌──────┴────────────────────────┬──────────────────────┐
  ▼                               ▼                      ▼
[Executive Summary]      [Action Item Tracker]   [Follow-up Email Draft]
  └──────┬────────────────────────┴──────────────────────┘
         ▼
[React Interactive Intelligence Dashboard]`,
    challenges: [
      "Handling large video file payloads efficiently with appropriate chunking and timeout management",
      "Prompt orchestration to ensure structured JSON output for action items with assigned owners and deadlines"
    ]
  },
  {
    id: "pharmaceutical-complaint-management",
    title: "AI-Powered Pharmaceutical Complaint Management",
    subtitle: "Enterprise QMS Intake & Regulatory Risk Triage Engine",
    category: "AI/ML",
    tags: ["LangGraph", "FastAPI", "React", "Redux", "LLM", "cGMP / FDA 21 CFR", "Python"],
    description: "Enterprise Quality Management System (QMS) intake engine for Active Pharmaceutical Ingredients (API) & Finished Dosage Form compliance under FDA 21 CFR Part 211, leveraging LangGraph stateful multi-agent workflows.",
    githubUrl: "https://github.com/punamchanne/AI-Powered-Pharmaceutical-Customer-Complaint-Management-",
    featured: true,
    overview: "Customer Complaint Management in pharmaceutical manufacturing is heavily regulated under FDA 21 CFR Part 211 and EU GMP Volume 4. This system automates critical complaint intake, risk classification, and severity triage.",
    problem: "Pharmaceutical QMS teams receive unstructured customer defect complaints from global markets. Delays in identifying Critical vs Minor defects risk regulatory audit penalties and patient safety.",
    solution: "Designed a stateful LangGraph agentic workflow with FastAPI and React/Redux that ingests complaints, validates batch records, computes risk matrices, and classifies complaints into Critical/Major/Minor tiers with audit trails.",
    keyFeatures: [
      "Automated complaint intake with structured extraction of Batch/Lot IDs, formulation, and defect type",
      "Regulatory risk scoring adhering to FDA 21 CFR Part 211 and EU GMP guidelines",
      "LangGraph-orchestrated stateful agent pipeline for multi-step triage and verification",
      "Interactive QA inspector dashboard with Redux state management and audit trails",
      "Automated CAPA (Corrective and Preventive Action) initial recommendation triggers"
    ],
    techStack: {
      frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "Axios"],
      backend: ["FastAPI", "Python", "Pydantic", "Uvicorn"],
      ai_ml: ["LangGraph", "LangChain", "LLM APIs (OpenAI/Anthropic compatible)"],
      tools: ["Git", "RESTful Architecture", "CORS Middleware"]
    },
    architecture: `[Customer Complaint Submission]
         │
         ▼
[FastAPI Gateway & Schema Validation]
         │
         ▼
[LangGraph Stateful Multi-Agent Pipeline]
   ├── Node 1: Defect Entity & Batch Extraction
   ├── Node 2: cGMP Severity Matrix Classifier
   └── Node 3: CAPA Recommendation Generator
         │
         ▼
[React + Redux QMS Quality Triage Portal]`,
    challenges: [
      "Guaranteeing deterministic classification outputs for sensitive pharmaceutical regulatory workflows",
      "Synchronizing multi-agent state with Redux frontend to give QA officers complete transparency into reasoning"
    ]
  },
  {
    id: "farmcare-ai",
    title: "FarmCare AI – Smart Agriculture Platform",
    subtitle: "Intelligent Crop Recommendation & Plant Disease Diagnosis",
    category: "AI/ML",
    tags: ["Python", "Scikit-learn", "TensorFlow", "React", "TypeScript", "PostgreSQL", "Supabase"],
    description: "An AI-powered smart agriculture platform that provides intelligent crop recommendations based on soil parameters and climate conditions, combined with computer vision plant disease detection.",
    githubUrl: "https://github.com/punamchanne/FarmCareAi",
    featured: true,
    overview: "FarmCare AI empowers farmers and agricultural consultants with data-driven decision support. The platform pairs machine learning classification for optimal crop selection with deep learning for plant leaf disease diagnosis.",
    problem: "Farmers frequently face crop failures due to improper crop selection for their specific soil chemistry (N-P-K, pH) or late identification of contagious foliar plant diseases.",
    solution: "Built a full-stack platform pairing Scikit-learn multi-class crop recommendation models and a TensorFlow CNN classifier with a modern React + TypeScript dashboard backed by PostgreSQL/Supabase.",
    keyFeatures: [
      "Soil parameter analysis (Nitrogen, Phosphorus, Potassium, pH) and weather factors for crop recommendation",
      "Deep learning plant disease diagnosis from leaf photograph uploads",
      "Farmer-friendly responsive dashboard built with React and TypeScript",
      "PostgreSQL & Supabase cloud data storage for historical field telemetry and logs",
      "RESTful API endpoints for seamless inference requests"
    ],
    techStack: {
      frontend: ["React.js", "TypeScript", "Tailwind CSS", "Lucide React"],
      backend: ["Python", "FastAPI / Flask", "REST APIs"],
      ai_ml: ["Scikit-learn (RandomForest/XGBoost)", "TensorFlow / Keras CNN", "NumPy", "Pandas"],
      database: ["PostgreSQL", "Supabase"],
      tools: ["Git", "Vite", "Jupyter Notebook"]
    },
    architecture: `[Soil Chemistry (N, P, K, pH) & Weather] ──► [Scikit-learn ML Model] ──┐
                                                                       ├──► [Crop & Treatment Output]
[Plant Leaf Image Upload] ───────────────► [TensorFlow CNN Model] ───┘
                                                       │
                                            [FastAPI Backend Service]
                                                       │
                                            [Supabase / PostgreSQL]
                                                       │
                                        [React + TypeScript UI]`,
    challenges: [
      "Balancing precision and recall across multiple rare plant disease leaf classes",
      "Designing an intuitive, responsive interface accessible for agricultural field workers"
    ]
  },
  {
    id: "property-dealing",
    title: "AI Homes – Real Estate & Property Dealing",
    subtitle: "Full-Stack Real Estate Hub with Virtual Tours & Scheduling",
    category: "Full Stack",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB", "JWT Auth", "Cloudinary"],
    description: "A production-grade, full-stack real estate platform featuring comprehensive property CRUD, virtual property browsing, agent meeting scheduling, image upload pipelines, and bookmarking.",
    githubUrl: "https://github.com/punamchanne/Property_Dealing",
    liveUrl: "https://propertydealingv2.vercel.app",
    featured: true,
    overview: "AI Homes is a deployed full-stack property marketplace connecting property buyers, renters, and agents with a seamless browsing and scheduling workflow.",
    problem: "Traditional real estate portals suffer from clunky navigation, disjointed meeting scheduling, and slow asset delivery for property galleries.",
    solution: "Engineered a modern web platform using React/Next.js, Node.js, Express, and MongoDB Atlas with JWT session security, Cloudinary multi-image uploads, and client-agent appointment scheduling.",
    keyFeatures: [
      "Complete property management: Create, Read, Update, Delete with rich image galleries",
      "Multi-faceted search & filtering by price, location, property type, and amenities",
      "Client-agent appointment and tour scheduling engine",
      "Saved properties / favorites system with persistent user state",
      "JWT-based authentication with protected dashboard routes for buyers and agents"
    ],
    techStack: {
      frontend: ["React.js", "Next.js", "Tailwind CSS", "Lucide Icons"],
      backend: ["Node.js", "Express.js", "JWT Authentication", "REST APIs"],
      database: ["MongoDB Atlas", "Mongoose ORM"],
      tools: ["Cloudinary CDN", "Vercel Deployment", "Postman"]
    },
    architecture: `[React/Next.js Client] ──(HTTPS/REST)──► [Express.js Backend & JWT Middleware]
                                                    │
                                     ┌──────────────┴──────────────┐
                                     ▼                             ▼
                            [MongoDB Atlas Database]       [Cloudinary Media CDN]`,
    challenges: [
      "Optimizing image upload and retrieval latency for high-resolution property photo sets",
      "Implementing robust role-based access control (RBAC) for property owners vs prospective buyers"
    ]
  },
  {
    id: "bank-management-system",
    title: "NeoFin Core Banking Management System",
    subtitle: "Enterprise Banking Operations & Customer Information File Engine",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
    description: "A comprehensive full-stack core banking application featuring Customer Information File (CIF) management, multi-tier account handling, transactional ledger with transfer validation, and loan processing.",
    githubUrl: "https://github.com/punamchanne/bank-management-system",
    featured: true,
    overview: "NeoFin is a full-stack banking operational platform engineered to simulate enterprise core banking workflows with high transaction integrity.",
    problem: "Banking administrative software is often bloated, poorly structured, and lacks unified CIF-to-account relational mapping.",
    solution: "Developed an intuitive neo-fintech banking portal with React, Node.js, Express, and MongoDB featuring automated CIF IDs, multi-account ledgering, and loan application modules.",
    keyFeatures: [
      "CIF (Customer Information File) auto-generation with KYC identity verification tracking",
      "Multi-account management (Savings, Current, Fixed Deposit) mapped to unique CIFs",
      "Double-entry transactional ledger for Deposits, Withdrawals, and Inter-Account Transfers",
      "Loan application management with status lifecycle tracking (Pending, Approved, Disbursed)",
      "Financial analytics dashboard summarizing bank reserves, active branches, and daily volume"
    ],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "Context API", "Lucide React"],
      backend: ["Node.js", "Express.js", "Mongoose"],
      database: ["MongoDB"],
      tools: ["Git", "Postman", "REST APIs"]
    },
    architecture: `[Banking Teller / Admin React Dashboard]
                    │
                    ▼
       [Express.js REST API Layer]
                    │
      ┌─────────────┴─────────────┐
      ▼                           ▼
[CIF & KYC Validator]   [Transaction Ledger Engine]
      └─────────────┬─────────────┘
                    ▼
           [MongoDB Database]`,
    challenges: [
      "Enforcing atomic validation rules to prevent negative balance states during concurrent withdrawal requests",
      "Structuring relational CIF-to-Account document schemas inside MongoDB"
    ]
  },
  {
    id: "emotion-detection",
    title: "Facial Emotion Detection & Recommender",
    subtitle: "Real-Time Computer Vision Sentiment Analysis & Personalization",
    category: "AI/ML",
    tags: ["Python 3.11", "Flask", "React", "OpenCV", "DeepFace / CNN", "MongoDB"],
    description: "An intelligent computer vision platform that captures facial expressions via webcam, determines emotional states in real-time, and recommends personalized actions matching the user's mood.",
    githubUrl: "https://github.com/punamchanne/Emotion_Detection_based_on_facialexpression",
    featured: true,
    overview: "Combining computer vision with human-computer interaction, this application captures user facial expressions through the browser webcam and detects real-time emotional state to deliver personalized recommendations.",
    problem: "Most recommendation engines rely solely on historical clickstream data, missing real-time physical/emotional context like fatigue or stress.",
    solution: "Constructed a real-time web application coupling a React camera capture interface with a Python/Flask computer vision pipeline utilizing OpenCV and deep learning facial emotion recognition.",
    keyFeatures: [
      "Webcam stream capture with instant image frame transmission",
      "Multi-class emotion classification (Happy, Neutral, Stressed, Tired, Energetic)",
      "Personalized recommendation engine matching current mood state",
      "User profile registration and historical emotion trend logging with MongoDB Atlas",
      "Smooth dark-themed UI with instant visual feedback"
    ],
    techStack: {
      frontend: ["React 18", "HTML5 Canvas / WebRTC", "CSS3 / Tailwind"],
      backend: ["Python 3.11", "Flask", "Flask-CORS"],
      ai_ml: ["OpenCV", "DeepFace / CNN Model", "NumPy"],
      database: ["MongoDB Atlas"],
      tools: ["Git", "REST APIs"]
    },
    architecture: `[Browser WebRTC Camera Stream] ──► [React Capture Frame]
                                             │ (Base64 / Multipart)
                                             ▼
                             [Flask Python Vision Gateway]
                                             │
                                   [OpenCV Face Crop]
                                             │
                                  [DeepFace / CNN Model]
                                             │
                        ┌────────────────────┴────────────────────┐
                        ▼                                         ▼
            [Emotion Vector Scores]                      [MongoDB Trend Log]
                        │
                        ▼
           [Personalized Recommendation Return]`,
    challenges: [
      "Achieving low latency inference across varying camera resolutions and lighting conditions",
      "Properly handling base64 image decoding and memory cleanup on the Flask server"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    skills: [
      { name: "Python", level: "Core & Advanced", icon: "SiPython" },
      { name: "Machine Learning", level: "Core Focus", icon: "SiScikitlearn" },
      { name: "Scikit-learn", level: "Proficient", icon: "SiScikitlearn" },
      { name: "Generative AI & LLMs", level: "Applied", icon: "SiOpenai" },
      { name: "LangGraph / LangChain", level: "Applied", icon: "FaRobot" },
      { name: "Computer Vision", level: "Applied", icon: "SiOpencv" },
      { name: "NLP", level: "Hands-on", icon: "FaBrain" }
    ]
  },
  {
    id: "backend",
    name: "Backend & APIs",
    skills: [
      { name: "FastAPI", level: "Proficient", icon: "SiFastapi" },
      { name: "Flask", level: "Proficient", icon: "SiFlask" },
      { name: "Node.js & Express", level: "Hands-on", icon: "SiNodedotjs" },
      { name: "RESTful APIs", level: "Advanced", icon: "FaNetworkWired" },
      { name: "OOP & Clean Architecture", level: "Strong Foundation", icon: "FaCogs" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & Full-Stack",
    skills: [
      { name: "React.js", level: "Proficient", icon: "SiReact" },
      { name: "TypeScript", level: "Hands-on", icon: "SiTypescript" },
      { name: "JavaScript (ES6+)", level: "Proficient", icon: "SiJavascript" },
      { name: "Tailwind CSS", level: "Advanced", icon: "SiTailwindcss" },
      { name: "Responsive UI", level: "Proficient", icon: "SiHtml5" }
    ]
  },
  {
    id: "data-tools",
    name: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", level: "Proficient", icon: "SiPostgresql" },
      { name: "MySQL", level: "Proficient", icon: "SiMysql" },
      { name: "MongoDB", level: "Hands-on", icon: "SiMongodb" },
      { name: "Pandas & NumPy", level: "Proficient", icon: "SiPandas" },
      { name: "Git & GitHub", level: "Proficient", icon: "SiGit" }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "road2tech",
    role: "Machine Learning Intern",
    company: "Road2Tech",
    location: "Pune, Maharashtra",
    period: "December 2025 – July 2026",
    badge: "Current / Recent",
    description: [
      "Developing machine learning models and data preprocessing pipelines for analytical workflows.",
      "Implementing feature engineering, exploratory data analysis (EDA), and baseline model benchmarking.",
      "Evaluating model accuracy using classification matrices, cross-validation, and performance metrics.",
      "Collaborating on integrating machine learning inference scripts with backend application services."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "EDA", "Model Evaluation"]
  },
  {
    id: "edunet",
    role: "AI Intern",
    company: "Edunet Foundation",
    location: "Remote / Hybrid",
    period: "December 2024 – January 2025",
    badge: "Completed",
    description: [
      "Worked on applied artificial intelligence concepts and machine learning algorithm implementations.",
      "Participated in hands-on model training exercises, data cleaning pipelines, and predictive analysis.",
      "Explored cloud AI services, computer vision preprocessing, and foundational GenAI concepts."
    ],
    technologies: ["Python", "Machine Learning", "Data Cleaning", "Cloud AI", "Model Training"]
  },
  {
    id: "ibase",
    role: "Python Developer Intern",
    company: "iBase Electrosoft LLP",
    location: "Nagpur, Maharashtra",
    period: "July 2022 – August 2022",
    badge: "Completed",
    description: [
      "Developed Python scripts for automated data handling, logic processing, and file operations.",
      "Gained hands-on experience in backend program structure, debugging, and database connectivity.",
      "Participated in software development lifecycle routines, code reviews, and testing procedures."
    ],
    technologies: ["Python", "SQL", "OOP", "Scripting", "Debugging", "SDLC"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech. in Artificial Intelligence",
    institution: "G. H. Raisoni College of Engineering (GHRCE)",
    location: "Nagpur, Maharashtra",
    period: "September 2023 – May 2026",
    highlights: [
      "Specialized in Artificial Intelligence, Machine Learning algorithms, and Neural Networks.",
      "Core coursework in Data Structures, Database Management Systems (DBMS), and Software Engineering.",
      "Hands-on academic and capstone engineering projects spanning Computer Vision, NLP, and Full-Stack systems."
    ]
  },
  {
    id: "diploma",
    degree: "Diploma in Computer Technology",
    institution: "Government Polytechnic",
    location: "Bramhpuri, Maharashtra",
    period: "December 2020 – May 2023",
    highlights: [
      "Rigorous grounding in Computer Hardware, Operating Systems, C/C++, and Object-Oriented Programming.",
      "Database design fundamentals, Web Technologies (HTML, CSS, JS), and Network basics.",
      "Graduated with distinction and practical technical project execution."
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "aws-cp",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
    skills: ["Cloud Architecture", "EC2", "S3", "IAM", "Security"]
  },
  {
    id: "oci",
    title: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    badgeColor: "from-red-500/20 to-rose-500/20 text-rose-300 border-rose-500/30",
    skills: ["OCI Core Services", "Cloud Networking", "Compute", "Storage"]
  },
  {
    id: "aws-genai",
    title: "AWS Educate – Introduction to Generative AI",
    issuer: "AWS Educate",
    badgeColor: "from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30",
    skills: ["Foundation Models", "Prompt Engineering", "GenAI Principles", "Ethics"]
  },
  {
    id: "ibm-webdev",
    title: "Web Development Fundamentals",
    issuer: "IBM",
    badgeColor: "from-blue-500/20 to-cyan-500/20 text-cyan-300 border-blue-500/30",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Client-Server"]
  }
];

export const TIMELINE_STAGES = [
  {
    step: "01",
    title: "Academic Foundation",
    subtitle: "Diploma in Computer Technology & B.Tech in AI",
    description: "Built strong foundations in computer systems, algorithms, OOP, database design, and machine learning principles."
  },
  {
    step: "02",
    title: "Practical Internships",
    subtitle: "iBase Electrosoft → Edunet Foundation → Road2Tech",
    description: "Gained real-world engineering experience writing production Python, building ML pipelines, and working in agile teams."
  },
  {
    step: "03",
    title: "Real-World Projects",
    subtitle: "GenAI, Full-Stack & Computer Vision Applications",
    description: "Developed end-to-end applications including AI meeting agents, pharmaceutical QMS, smart agriculture, and core banking."
  },
  {
    step: "04",
    title: "Current Career Goal",
    subtitle: "Ready for High-Impact Software & AI Roles",
    description: "Eager to contribute as a Software Developer, Python Developer, AI/ML Engineer, or Full-Stack Developer."
  }
];
