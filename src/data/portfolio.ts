import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  FileBadge,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const links = {
  email: "mailto:mohamed1392003@gmail.com",
  phone: "tel:+201157070004",
  linkedin: "https://www.linkedin.com/in/mohamed-abdallah-140ba6283/",
  github: "https://github.com/MohamedAbdallah999?tab=repositories",
};

export const person = {
  name: "Mohamed Abdallah Mohamed",
  location: "New Cairo, Egypt",
  email: "mohamed1392003@gmail.com",
  phone: "+20 115 707 0004",
  titles: [
    "Software Engineering Graduate",
    "Back-End Developer",
    "Full-Stack Developer",
    "AI and Agentic Systems Developer",
  ],
  summary:
    "Software Engineering graduate from The British University in Egypt / London South Bank University, graduating with Distinction (Honors) and a GPA of 3.7. Based in New Cairo, Egypt. Experienced across the software delivery lifecycle, from Spring and React development to QA, DevOps, AI-powered applications, RAG systems, prompt engineering, and MCP servers.",
};

export const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Education", "education"],
  ["Experience", "experience"],
  ["Courses", "courses"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Certificates", "certificates"],
  ["Documents", "documents"],
  ["GitHub", "github"],
  ["Contact", "contact"],
] as const;

export const documents = [
  {
    title: "Curriculum Vitae",
    label: "PDF",
    description: "Recruiter-ready CV with education, internships, projects, skills, and contact details.",
    href: "/documents/Mohamed_Abdallah_CV.pdf",
    action: "Download CV",
    icon: FileText,
  },
  {
    title: "Cover Letter",
    label: "DOCX",
    description: "Professional application letter focused on back-end, full-stack, and software engineering roles.",
    href: "/documents/Mohamed_Abdallah_Cover_Letter.docx",
    action: "Download Cover Letter",
    icon: Mail,
  },
  {
    title: "Full Certificates Package",
    label: "PDF",
    description: "Complete certificate document for internships, courses, and professional learning evidence.",
    href: "/documents/Mohamed_234552.pdf",
    action: "Download Full Certificates PDF",
    icon: FileBadge,
  },
];

export const certificateGroups = [
  {
    title: "CDS Internship Certificate",
    href: "/certificates/CDS_internship.png",
    action: "Download CDS Internship Certificate",
  },
  {
    title: "ITI React Certificate",
    href: "/certificates/iti_REACT_Course.png",
    action: "Download ITI React Certificate",
  },
  {
    title: "Mazaya Certificates",
    href: "/certificates/Mazaya_internship(1).png",
    action: "Download Mazaya Certificates",
  },
  {
    title: "CIB Certificates",
    href: "/certificates/CIB_internship(1).png",
    action: "Download CIB Certificates",
  },
];

export const certificates = [
  {
    file: "CDS_internship.png",
    title: "CDS Certificate of Internship",
    description:
      "Essential Skills Program covering Java, OOP, Data Structures, Spring Boot, Spring Data JPA, Spring Security, and Microservices.",
    date: "15/07/2025 to 15/09/2025",
  },
  {
    file: "iti_REACT_Course.png",
    title: "ITI Web Development using React.js",
    description:
      "120-hour React.js course covering Client Side Technologies, ES.Next, HTML5, Bootstrap, and React.js.",
    date: "21 July 2025 to 14 August 2025",
  },
  {
    file: "Mazaya_internship(1).png",
    title: "Mazaya Internship Completion Letter",
    description: "Completed internship at Mazaya in the E-Commerce Department.",
    date: "01/09/2023 to 21/09/2023",
  },
  {
    file: "Mazaya_intership(2).png",
    title: "Mazaya Achievement Award",
    description: "Outstanding Performance during the internship program at Mazaya E-Commerce Department.",
    date: "1 September 2023 to 21 September 2023",
  },
  {
    file: "CIB_internship(1).png",
    title: "CIB Financial Literacy & Entrepreneurial Skills",
    description: "Certificate of attendance from CIB Summer Bootcamp with LinkedIn.",
    date: "July 2024",
  },
  {
    file: "CIB_internship(2).png",
    title: "CIB Digital Transformation and Data Literacy",
    description: "Certificate of attendance from CIB Summer Bootcamp with SAS.",
    date: "July 2024",
  },
  {
    file: "CIB_internship(4).png",
    title: "CIB Emerging Talent for the Future Workplace",
    description: "Certificate of attendance as part of the CIB Summer Internship Program.",
    date: "July 2024",
  },
  {
    file: "CIB_intership(3).png",
    title: "CIB Human-Centric Interpersonal Skills",
    description: "Certificate of attendance from CIB Summer Bootcamp with Frankfurt School.",
    date: "July 2024",
  },
].map((item) => ({ ...item, src: `/certificates/${item.file}` }));

export const education = [
  {
    institution: "The British University in Egypt / London South Bank University",
    degree: "Dual Bachelor's Degree in Information and Computer Science, Software Engineering",
    location: "Cairo, Egypt",
    date: "2022 - 2026",
    details: "GPA: 3.7 | Distinction (Honors)",
  },
  {
    institution: "Al Farouk Islamic Language School",
    degree: "Egyptian Diploma",
    location: "Cairo, Egypt",
    date: "2009 - 2022",
    details: "Academic foundation with fluent English communication and disciplined study habits.",
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Celfocus",
    location: "Cairo, Egypt",
    type: "Hybrid",
    date: "July 2026 - August 2026",
    highlights: [
      "Rotated across front-end, back-end, QA and system testing, agentic AI, and DevOps on live company projects, gaining hands-on exposure to the full software delivery lifecycle.",
      "Built and tested features using Spring and React, strengthening full-stack development, testing, and deployment skills.",
      "Built and used Model Context Protocol (MCP) servers, applied prompt engineering techniques, and developed agentic AI workflows.",
    ],
  },
  {
    role: "Back-End Developer Intern",
    company: "Connect Digital Solutions (CDS)",
    location: "Cairo, Egypt",
    type: "Hybrid",
    date: "July 2025 - September 2025",
    highlights: [
      "Gained practical back-end development experience with Java, OOP, data structures, Spring Boot, Spring Data JPA, Spring Security, and microservices.",
    ],
  },
  {
    role: "CIB Online Internship",
    company: "CIB",
    location: "Cairo, Egypt",
    type: "Online",
    date: "July 2024 - August 2024",
    highlights: [
      "Completed cybersecurity training covering common cyber threats, protection strategies, and digital awareness.",
      "Earned certificates in future workplace skills, human-centric interpersonal skills, financial literacy and entrepreneurship, digital transformation, and data literacy.",
    ],
  },
  {
    role: "E-commerce Intern",
    company: "Mazaya Group",
    location: "Cairo, Egypt",
    type: "On-site, Marketing Committee",
    date: "August 2023 - September 2023",
    highlights: [
      "Supported website-related and marketing activities while building practical experience in Excel, Word, data entry, and data analysis.",
    ],
  },
];

export const courses = [
  {
    title: "Web Development using React.js",
    provider: "Information Technology Institute (ITI)",
    hours: "120 hours",
    date: "August 2025",
    topics: ["Client Side Technologies", "ES.Next", "HTML5", "Bootstrap", "React.js"],
  },
  {
    title: "Introduction to Programming in Python",
    provider: "Harvard CS50 Online",
    date: "June 2023 - July 2023",
    topics: ["Programming fundamentals", "Problem solving", "OOP", "Data structures", "File handling"],
  },
  {
    title: "CIB Summer Bootcamp Certificates",
    provider: "CIB, LinkedIn, SAS, Frankfurt School",
    date: "July 2024",
    topics: [
      "Financial Literacy",
      "Entrepreneurial Skills",
      "Digital Transformation",
      "Data Literacy",
      "Future Workplace Skills",
      "Human-Centric Interpersonal Skills",
    ],
  },
];

export const projects = [
  {
    title: "CV Screening Platform",
    type: "Celfocus Internship Team Project",
    category: "Recruitment Operations Dashboard",
    featured: true,
    technologies: ["React 19", "TypeScript", "Vite", "React Router", "Axios", "MSW", "Storybook"],
    description:
      "A production-style single-page application for reviewing internship candidates, inspecting AI-assisted evaluation reports, and configuring internship scoring criteria. Built collaboratively during the Celfocus internship and published as a team repository.",
    evidence: "8 merged pull requests • 36 commits attributed in repository history",
    implementation: [
      "Structured the interface as an Atomic Design system—atoms, molecules, organisms, templates, and pages—with Storybook stories for reusable UI components.",
      "Used protected React Router flows for login, candidate lists, candidate details, and settings, all mounted inside a reusable sidebar page template.",
      "Centralized data access in typed Axios services with bearer-token interceptors for authentication, internships, candidates, and scoring-criteria endpoints.",
      "Added a browser-side Mock Service Worker API with realistic authentication, filtering, sorting, error cases, and in-memory CRUD so the front end could be developed without a live back end.",
    ],
    contributions: [
      "Authored the reusable InputField atom and the score-color utility used by evaluation components.",
      "Built the shared DefaultTemplate layout and implemented the application's route tree.",
      "Implemented candidate evaluation panels for score overview and breakdown, video assessment, strengths, weaknesses, and risk notes.",
      "Contributed URL-backed candidate status filtering and updated the scoring-criteria API contract and TypeScript models.",
    ],
    repositoryUrl: "https://github.com/Ahmad-Helmy/intern-cv-screening",
    repositoryLabel: "View team repository",
    contributionUrl:
      "https://github.com/Ahmad-Helmy/intern-cv-screening/pulls?q=is%3Apr+author%3AMohamedAbdallah999",
  },
  {
    title: "Digital Diet and Fitness Assistant",
    type: "Graduation Project - BUE",
    category: "AI Mobile Application",
    technologies: ["Flutter", "Node.js", "Firebase", "Qdrant", "LangChain.js"],
    description:
      "AI-powered mobile application using Flutter and Node.js, based on RAG architecture with Firebase authentication, Qdrant vector database, LangChain.js orchestration, and LLM-based personalized diet and workout generation.",
  },
  {
    title: "Konooz Studio Inventory & Point-of-Sale System",
    type: "Freelance Client Project",
    category: "Real-Time Inventory & POS",
    featured: true,
    technologies: ["React 19", "TypeScript", "Express 5", "PostgreSQL", "Prisma", "Dexie", "Cloudflare"],
    description:
      "A production full-stack system for a dress shop operating across multiple devices. It manages models, colours, pack configurations, live stock, checkout, deposits, refunds, sales reporting, and printable or PDF receipts.",
    evidence: "71 authored commits • production deployment documented",
    implementation: [
      "Built a server-authoritative Express and Prisma API over PostgreSQL, with nested model-to-colour-to-pack CRUD, Zod validation, and Decimal-based pricing calculated exclusively on the server.",
      "Implemented serializable checkout transactions that reserve stock atomically, reject insufficient inventory, snapshot sale-time catalogue and price data, and restore pack quantities during refunds.",
      "Synchronized devices through versioned API state, repeatable-read snapshots, 30-second and event-driven refreshes, BroadcastChannel notifications, and a Dexie IndexedDB cache. Timestamp checks reject stale edits instead of overwriting newer stock.",
      "Secured and deployed the application with short-lived JWT access tokens, rotated HttpOnly refresh sessions, login throttling, Helmet/CSP, locked CORS, Docker, Neon PostgreSQL, Cloudflare Workers, and Cloudflare Pages.",
    ],
    contributions: [
      "Designed and delivered the freelance system end to end, covering inventory operations, checkout, payment tracking, reporting, and receipt generation.",
      "Created the normalized pack-based inventory model and a guarded production migration with backups, explicit mapping approval, validation reports, and rollback procedures.",
      "Added unit, API, and browser-flow coverage for authentication, monetary calculations, stock integrity, synchronization, receipts, refunds, and responsive layout behavior.",
      "Prepared the production release workflow, deployment documentation, health checks, structured logs, security controls, and smoke-test procedure.",
    ],
    repositoryUrl: "https://github.com/MohamedAbdallah999/konooz-studio-Website",
    repositoryLabel: "View project repository",
  },
  {
    title: "Agentic AI",
    type: "Senior Year - BUE",
    category: "Adaptive AI Learning",
    technologies: ["Python", "Tkinter", "OpenCV", "MediaPipe", "FAISS"],
    description:
      "Multi-agent adaptive Python quiz system using Orchestrator, Perception, Adaptation, Hint, and Quiz Interface agents. Integrated webcam gaze and emotion detection, FAISS hint retrieval, TinyLlama explanations, adaptive repetition, and Excel logging.",
  },
  {
    title: "Hotel Management System",
    type: "Senior Year - BUE",
    category: "Back-End Architecture",
    technologies: ["Java", "MongoDB"],
    description:
      "Object-oriented software project using Java and MongoDB, based on a client-server architecture with remote objects.",
  },
  {
    title: "Mobile Application",
    type: "Senior Year - BUE",
    category: "Mobile Development",
    technologies: ["Flutter", "Firebase", "Cloud Firestore", "Firebase Authentication"],
    description: "Mobile application built using Cloud Firestore and Firebase Authentication.",
  },
  {
    title: "Full Stack Website",
    type: "Third Year - BUE",
    category: "MERN Stack",
    technologies: ["Tailwind CSS", "Node.js", "React", "MongoDB"],
    description:
      "MERN-stack website styled with Tailwind CSS, applying RESTful APIs, asynchronous programming, database modeling with Mongoose, and front-end/back-end integration.",
  },
  {
    title: "Park Management System",
    type: "Third Year - BUE",
    category: "Software Architecture",
    technologies: ["Java", "PHP", "MVC", "Design Patterns"],
    description:
      "Desktop application using Java GUI and PHP backend for data management. Applied MVC and design patterns to strengthen software architecture understanding.",
  },
  {
    title: "AI Algorithms - Tic-Tac-Toe Game",
    type: "Third Year - BUE",
    category: "Algorithms",
    technologies: ["AI Algorithms", "Recursion", "Decision Making"],
    description: "Applied algorithmic thinking, recursion, and AI decision-making strategies.",
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "C#", "Python", "Java", "SQL", "Dart", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks and Technologies",
    icon: Layers3,
    skills: [
      "Flutter",
      "Firebase",
      "Node.js",
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Microservices",
      "Qdrant",
      "LangChain.js",
      "OpenCV",
      "MediaPipe",
      "FAISS",
      "Git",
      "Docker",
    ],
  },
  {
    title: "Software Engineering",
    icon: Network,
    skills: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "Design Patterns",
      "Database Design",
      "RESTful APIs",
      "Mobile Development",
      "Web Development",
      "Game Development",
      "Multithreading",
      "Software Quality Assurance",
      "DevOps",
      "Testing",
    ],
  },
  {
    title: "AI",
    icon: Sparkles,
    skills: ["CNNs", "NLP", "Model Training", "RAG", "Prompt Engineering", "MCPs"],
  },
  {
    title: "Tools",
    icon: ShieldCheck,
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Adobe Photoshop", "VS Code", "IntelliJ"],
  },
  {
    title: "Languages",
    icon: MapPin,
    skills: ["Arabic: Native", "English: Fluent"],
  },
];

export const highlights: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Graduation Result", value: "Distinction (Honors)", icon: GraduationCap },
  { label: "Internships", value: "Celfocus, CDS, CIB, Mazaya", icon: BriefcaseBusiness },
  { label: "Core Stack", value: "Spring, React, Flutter, Node.js", icon: Database },
  { label: "Documents", value: "CV, Cover Letter, Certificates", icon: Award },
];

export const repoCards = [
  {
    title: "AI and Agentic Systems",
    description: "Applications using RAG, vector retrieval, agent orchestration, prompt engineering, MCP servers, and adaptive AI interfaces.",
    stack: "Node.js, Python, Qdrant, LangChain.js, FAISS",
  },
  {
    title: "Full-Stack Delivery",
    description: "Software work spanning feature development, API design, database modeling, testing, deployment, and quality assurance.",
    stack: "Java, Spring, React, MongoDB, Docker",
  },
  {
    title: "Academic Engineering Systems",
    description: "Course projects applying OOP, design patterns, client-server design, and algorithmic problem solving.",
    stack: "Java, PHP, Firebase, MongoDB, AI Algorithms",
  },
];
