import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  FileBadge,
  FileText,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Network,
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
    "Business Analyst",
    "Full-Stack and AI Application Developer",
  ],
  summary:
    "I am a Software Engineering graduate from The British University in Egypt and London South Bank University, where I graduated with Distinction (Honors) and a GPA of 3.7. I translate business requirements into secure back-end services, full-stack products, and AI-enabled applications.",
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
    description: "My updated CV covering my education, professional experience, projects, skills, and contact details.",
    href: "/documents/Mohamed_Abdallah_CV.pdf",
    action: "Download CV",
    icon: FileText,
  },
  {
    title: "Cover Letter",
    label: "DOCX",
    description: "My application letter for back-end development, business analysis, and software engineering roles.",
    href: "/documents/Mohamed_Abdallah_Cover_Letter.docx",
    action: "Download Cover Letter",
    icon: Mail,
  },
  {
    title: "Full Certificates Package",
    label: "PDF",
    description: "My complete supporting package for internships, courses, and professional learning.",
    href: "/documents/Mohamed_234552.pdf",
    action: "Download Full Certificates PDF",
    icon: FileBadge,
  },
];

export const certificateGroups = [
  { title: "CDS Internship Certificate", href: "/certificates/CDS_internship.png", action: "Download CDS Internship Certificate" },
  { title: "ITI React Certificate", href: "/certificates/iti_REACT_Course.png", action: "Download ITI React Certificate" },
  { title: "Mazaya Certificates", href: "/certificates/Mazaya_internship(1).png", action: "Download Mazaya Certificates" },
  { title: "CIB Certificates", href: "/certificates/CIB_internship(1).png", action: "Download CIB Certificates" },
];

export const certificates = [
  {
    file: "CDS_internship.png",
    title: "CDS Certificate of Internship",
    description: "I completed the Essential Skills Program covering Java, OOP, data structures, Spring Boot, Spring Data JPA, Spring Security, and microservices.",
    date: "15/07/2025 to 15/09/2025",
  },
  {
    file: "iti_REACT_Course.png",
    title: "ITI Web Development using React.js",
    description: "I completed a 120-hour React.js course covering client-side technologies, ES.Next, HTML5, Bootstrap, and React.js.",
    date: "21 July 2025 to 14 August 2025",
  },
  {
    file: "Mazaya_internship(1).png",
    title: "Mazaya Internship Completion Letter",
    description: "I completed an internship in Mazaya's E-Commerce Department.",
    date: "01/09/2023 to 21/09/2023",
  },
  {
    file: "Mazaya_intership(2).png",
    title: "Mazaya Achievement Award",
    description: "I received this award for outstanding performance during the Mazaya internship program.",
    date: "1 September 2023 to 21 September 2023",
  },
  {
    file: "CIB_internship(1).png",
    title: "CIB Financial Literacy and Entrepreneurial Skills",
    description: "I completed this CIB Summer Bootcamp program delivered with LinkedIn.",
    date: "July 2024",
  },
  {
    file: "CIB_internship(2).png",
    title: "CIB Digital Transformation and Data Literacy",
    description: "I completed this CIB Summer Bootcamp program delivered with SAS.",
    date: "July 2024",
  },
  {
    file: "CIB_internship(4).png",
    title: "CIB Emerging Talent for the Future Workplace",
    description: "I completed this program as part of the CIB Summer Internship Program.",
    date: "July 2024",
  },
  {
    file: "CIB_intership(3).png",
    title: "CIB Human-Centric Interpersonal Skills",
    description: "I completed this CIB Summer Bootcamp program delivered with Frankfurt School.",
    date: "July 2024",
  },
].map((item) => ({ ...item, src: `/certificates/${item.file}` }));

export const education = [
  {
    institution: "The British University in Egypt / London South Bank University",
    degree: "Dual Bachelor's Degree in Information and Computer Science, Software Engineering",
    location: "Cairo, Egypt",
    date: "2022 - 2026",
    details: "I graduated with Distinction (Honors) and a GPA of 3.7.",
  },
  {
    institution: "Al Farouk Islamic Language School",
    degree: "Egyptian Diploma",
    location: "Cairo, Egypt",
    date: "2009 - 2022",
    details: "I completed my Egyptian Diploma before beginning university.",
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Celfocus",
    location: "Cairo, Egypt",
    type: "Hybrid",
    date: "July 2026 - September 2026",
    highlights: [
      "I rotated across back-end, front-end, QA and system testing, DevOps, and AI while contributing to live company projects.",
      "I used Java, Spring Boot, React, REST APIs, Git, and Docker to implement and test features across the delivery lifecycle.",
      "I worked with requirements and technical issues across cross-functional teams, which strengthened my business analysis and delivery skills.",
      "I built and used Model Context Protocol servers, applied prompt engineering, and developed agentic AI workflows.",
    ],
  },
  {
    role: "Freelance Software Engineer - Konooz Studio",
    company: "Konooz Studio",
    location: "Freelance Project",
    type: "Back-End Development and Product Delivery",
    date: "June 2026",
    highlights: [
      "I translated retail workflows into a production inventory and point-of-sale system for models, colours, packs, sales, deposits, refunds, and receipts.",
      "I built the TypeScript, Express, Prisma, and PostgreSQL back end with JWT authentication, Zod validation, serializable transactions, stale-write protection, and immutable sale snapshots.",
      "I prepared Docker, Neon, Cloudflare Workers and Pages, GitHub Actions, migrations, rollback procedures, and Vitest, Supertest, and Playwright coverage for production delivery.",
    ],
  },
  {
    role: "Back-End Developer Intern",
    company: "Connect Digital Solutions (CDS)",
    location: "Cairo, Egypt",
    type: "Hybrid",
    date: "July 2025 - September 2025",
    highlights: [
      "I developed back-end services with Java, Spring Boot, Spring Data JPA, Spring Security, and REST APIs.",
      "I worked with microservices, databases, API design, requirements, debugging, and testing in a practical engineering environment.",
    ],
  },
  {
    role: "CIB Online Internship",
    company: "Commercial International Bank (CIB)",
    location: "Cairo, Egypt",
    type: "Online",
    date: "July 2024 - August 2024",
    highlights: [
      "I completed cybersecurity training covering common threats, protection strategies, and digital awareness.",
      "I earned four certificates in workplace readiness, interpersonal skills, financial literacy and entrepreneurship, digital transformation, and data literacy.",
    ],
  },
];

export const courses = [
  {
    title: "Web Development using React.js",
    provider: "Information Technology Institute (ITI)",
    hours: "120 hours",
    date: "August 2025",
    topics: ["Client-Side Technologies", "ES.Next", "HTML5", "Bootstrap", "React.js"],
  },
  {
    title: "Introduction to Programming in Python",
    provider: "Harvard CS50 Online",
    date: "June 2023 - July 2023",
    topics: ["Programming Fundamentals", "Problem Solving", "OOP", "Data Structures", "File Handling"],
  },
];

export const projects = [
  {
    title: "Konooz Studio Inventory and Point-of-Sale System",
    type: "Freelance Client Project",
    category: "Production Back-End and Full-Stack Delivery",
    featured: true,
    technologies: ["React 19", "TypeScript", "Express 5", "PostgreSQL", "Prisma", "Dexie", "Cloudflare Workers", "Neon"],
    description: "I designed and delivered a production inventory and point-of-sale system for a dress shop operating across multiple devices. It manages models, colours, pack configurations, live stock, checkout, deposits, refunds, reporting, and printable or PDF receipts.",
    evidence: "71 authored commits | production deployment and rollback procedures documented",
    implementation: [
      "I built a server-authoritative Express and Prisma API over PostgreSQL with nested model-to-colour-to-pack CRUD, Zod validation, and server-calculated Decimal pricing.",
      "I implemented serializable checkout transactions that reserve stock atomically, reject insufficient inventory, snapshot sale-time catalogue and price data, and restore pack quantities during refunds.",
      "I synchronized devices through versioned API state, repeatable-read snapshots, event-driven refreshes, BroadcastChannel notifications, and a Dexie cache. Timestamp checks reject stale edits instead of overwriting newer stock.",
      "I secured and deployed the system with short-lived JWT access tokens, rotated HttpOnly refresh sessions, login throttling, Helmet and CSP, restricted CORS, Docker, Neon PostgreSQL, Cloudflare Workers, and Cloudflare Pages.",
    ],
    contributions: [
      "I translated the client's retail workflows into inventory, checkout, payment tracking, reporting, receipt, and refund features.",
      "I designed the normalized pack-based inventory model and a guarded migration with backups, explicit mapping approval, validation reports, and rollback steps.",
      "I added unit, API, and browser-flow coverage for authentication, monetary calculations, stock integrity, synchronization, receipts, refunds, and responsive behavior.",
      "I prepared the release workflow, health checks, structured logs, security controls, deployment documentation, and smoke-test procedure.",
    ],
    repositoryUrl: "https://github.com/MohamedAbdallah999/konooz-studio-Website",
    repositoryLabel: "View project repository",
  },
  {
    title: "Quality Management System",
    type: "CDS Internship Team Project",
    category: "Secure Spring Microservices",
    featured: true,
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Spring Security", "Spring Data JPA", "Microsoft SQL Server", "JWT", "MapStruct"],
    description: "I helped build a secure quality-management platform as a family of Spring microservices for evaluation forms, users, roles, permissions, authentication, password recovery, and centralized configuration.",
    evidence: "9 related repositories reviewed across the complete service family",
    implementation: [
      "I worked with an API gateway, Eureka service registry, centralized configuration server, and separate authentication, management, and evaluation-form services.",
      "I worked with Spring Security and JWT verification with role-based authorization for QA and QA Supervisor workflows.",
      "I helped model evaluation forms, categories, factors, answer options, projects, severities, success criteria, users, roles, and permissions behind validated REST APIs.",
      "I used a codebase built with Spring Data JPA, Hibernate, MapStruct, Maven, Microsoft SQL Server, JUnit, and MockMvc for persistence, mapping, builds, and testing.",
    ],
    repositoryUrl: "https://github.com/MohamedAbdallah999/Quality-Management-System",
    repositoryLabel: "View consolidated repository",
  },
  {
    title: "FitBite - Digital Diet and Fitness Assistant",
    type: "Graduation Project - BUE",
    category: "AI Mobile and RAG Application",
    featured: true,
    technologies: ["Flutter", "Dart", "Node.js", "Express", "Firebase", "Qdrant", "LangChain.js", "Hugging Face"],
    description: "I built an AI-powered mobile application that combines health and fitness tracking with personalized diet and workout generation, report analysis, conversational guidance, and exercise-video search.",
    evidence: "24 Flutter tests | 16 back-end tests | RAG comparison and evaluation artifacts",
    implementation: [
      "I structured the Flutter application around models, repositories, view models, and screens, using Provider with Firebase Authentication, Cloud Firestore, Firebase Storage, and email, Google, and Apple sign-in flows.",
      "I exposed Express endpoints for AI chat, medical-report analysis, diet generation, workout generation, exercise-video search, and health checks.",
      "I implemented a LangChain.js retrieval pipeline with Hugging Face MiniLM embeddings, Qdrant vector search, ranked context, DeepSeek generation, structured output normalization, and contraindication-aware safety rules.",
      "I added OCR through a vision model, model fallbacks, automated back-end and Flutter tests, and a 20-case evaluation comparing retrieval-augmented and non-retrieval responses.",
    ],
    repositoryUrl: "https://github.com/MohamedAbdallah999/FitBite-Mobile-App-Graduation-Project",
    repositoryLabel: "View project repository",
  },
  {
    title: "Intern CV Screening Platform",
    type: "Celfocus Internship Team Project",
    category: "Recruitment Operations Dashboard",
    featured: true,
    technologies: ["React 19", "TypeScript", "Vite", "React Router", "Axios", "MSW", "Storybook"],
    description: "I contributed to a production-style single-page application for reviewing internship candidates, inspecting AI-assisted evaluation reports, and configuring internship scoring criteria.",
    evidence: "8 merged pull requests | 36 commits attributed in repository history",
    implementation: [
      "I worked within an Atomic Design system of atoms, molecules, organisms, templates, and pages, supported by Storybook stories for reusable components.",
      "I used protected React Router flows for login, candidate lists, candidate details, and settings inside a reusable sidebar template.",
      "I integrated typed Axios services with bearer-token interceptors for authentication, internships, candidates, and scoring-criteria endpoints.",
      "I contributed to an MSW development API with authentication, filtering, sorting, error cases, and in-memory CRUD so the interface could be developed without a live back end.",
    ],
    contributions: [
      "I authored the reusable InputField atom and score-color utility used by evaluation components.",
      "I built the shared DefaultTemplate layout and implemented the route tree.",
      "I implemented panels for score overview and breakdown, video assessment, strengths, weaknesses, and risk notes.",
      "I contributed URL-backed candidate status filtering and updated the scoring-criteria API contract and TypeScript models.",
    ],
    repositoryUrl: "https://github.com/Ahmad-Helmy/intern-cv-screening",
    repositoryLabel: "View team repository",
    contributionUrl: "https://github.com/Ahmad-Helmy/intern-cv-screening/pulls?q=is%3Apr+author%3AMohamedAbdallah999",
  },
  {
    title: "Agentic AI Learning System",
    type: "Senior Year - BUE",
    category: "Adaptive AI Learning",
    technologies: ["Python", "Tkinter", "OpenCV", "MediaPipe", "FAISS"],
    description: "I built a multi-agent adaptive quiz system with Orchestrator, Perception, Adaptation, Hint, and Quiz Interface agents. I integrated webcam gaze and emotion detection, FAISS hint retrieval, TinyLlama explanations, adaptive repetition, and Excel logging.",
  },
  {
    title: "Hotel Management System",
    type: "Senior Year - BUE",
    category: "Back-End Architecture",
    technologies: ["Java", "MongoDB"],
    description: "I developed an object-oriented hotel management system in Java and MongoDB using a client-server architecture with remote objects.",
  },
  {
    title: "Firebase Mobile Application",
    type: "Senior Year - BUE",
    category: "Mobile Development",
    technologies: ["Flutter", "Firebase", "Cloud Firestore", "Firebase Authentication"],
    description: "I built a Flutter mobile application with Cloud Firestore persistence and Firebase Authentication.",
  },
  {
    title: "Full Stack Cinema Reservation Website",
    type: "Third Year - BUE",
    category: "MERN Stack",
    technologies: ["React 19", "Node.js", "Express 5", "MongoDB", "Mongoose", "JWT", "Tailwind CSS"],
    description: "I helped build a cinema reservation website with account authentication, movie and showtime browsing, seat selection, food ordering, payment records, tickets, user dashboards, feedback, and protected administrator workflows.",
    implementation: [
      "I worked on routed public, protected, and administrator pages with Formik and Yup validation, Axios data access, and Tailwind styling.",
      "I connected the interface to an Express and Mongoose API for users, movies, bookings, food, payments, and feedback, with JWT authentication and administrator authorization middleware.",
    ],
    repositoryUrl: "https://github.com/MohamedAbdallah999/Group10-Cinema",
    repositoryLabel: "View project repository",
  },
  {
    title: "Park Management System",
    type: "Third Year - BUE",
    category: "Software Architecture",
    technologies: ["Java", "PHP", "MVC", "Design Patterns"],
    description: "I built a Java desktop interface with a PHP back end for park data management, applying MVC and design patterns to organize the system architecture.",
  },
  {
    title: "AI Algorithms - Tic-Tac-Toe Game",
    type: "Third Year - BUE",
    category: "Algorithms",
    technologies: ["AI Algorithms", "Recursion", "Decision Making"],
    description: "I applied recursion, algorithmic search, and AI decision-making strategies to a Tic-Tac-Toe game.",
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "C#", "Python", "Java", "SQL", "Dart", "HTML", "CSS", "JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Back-End and APIs",
    icon: Layers3,
    skills: ["Spring Boot", "Spring Data JPA", "Spring Security", "Node.js", "Express.js", "REST APIs", "Microservices", "JWT", "RBAC", "Kafka"],
  },
  {
    title: "Front-End and Mobile",
    icon: Sparkles,
    skills: ["React.js", "Flutter", "Firebase", "Vite", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Data and AI",
    icon: Database,
    skills: ["PostgreSQL", "Microsoft SQL Server", "MongoDB", "Prisma", "Qdrant", "LangChain.js", "RAG", "OpenCV", "MediaPipe", "FAISS", "CNNs", "NLP", "Model Training", "Prompt Engineering", "MCP Servers"],
  },
  {
    title: "Software Engineering and Analysis",
    icon: Network,
    skills: ["Requirements Gathering", "Requirements Analysis", "Process and Workflow Analysis", "SDLC", "OOP", "Data Structures and Algorithms", "Design Patterns", "Database Design", "Software Quality Assurance", "Unit, Integration, and E2E Testing"],
  },
  {
    title: "Cloud, DevOps, and Tools",
    icon: ShieldCheck,
    skills: ["Git", "GitHub", "Docker", "AWS", "Cloudflare Workers and Pages", "Neon", "GitHub Actions", "CI/CD", "Microsoft Office", "Adobe Photoshop", "VS Code", "IntelliJ"],
  },
  {
    title: "Languages",
    icon: MapPin,
    skills: ["Arabic: Native", "English: Fluent"],
  },
];

export const highlights: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Graduation Result", value: "Distinction (Honors)", icon: GraduationCap },
  { label: "Professional Experience", value: "Celfocus, Konooz, CDS", icon: BriefcaseBusiness },
  { label: "Core Stack", value: "Spring, TypeScript, React, Flutter", icon: Database },
  { label: "Career Focus", value: "Back-End and Business Analysis", icon: Award },
];

export const repoCards = [
  {
    title: "Production Back-End Delivery",
    description: "I design secure APIs, transactional data models, authentication flows, migrations, tests, and release procedures for production systems.",
    stack: "Java, Spring, TypeScript, Express, PostgreSQL, Docker",
  },
  {
    title: "Full-Stack and Mobile Products",
    description: "I connect user workflows to maintainable interfaces and services across inventory, recruitment, fitness, and reservation products.",
    stack: "React, Flutter, Firebase, MongoDB, Prisma",
  },
  {
    title: "AI and Retrieval Systems",
    description: "I build RAG pipelines, vector retrieval, agent workflows, prompt-driven features, and adaptive interfaces with evaluation and safety controls.",
    stack: "LangChain.js, Qdrant, FAISS, OpenCV, MediaPipe",
  },
];
