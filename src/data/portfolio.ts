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

export const academicTranscript = {
  href: "/documents/Mohamed_Abdallah_BUE_Academic_Transcript.pdf",
  classification: "Distinction with Honours",
  finalAverage: 86,
  yearlyAverages: [
    { year: "Preparatory Year", average: 83 },
    { year: "Degree Year One", average: 88 },
    { year: "Software Engineering / Year Two", average: 86 },
    { year: "Software Engineering / Year Three", average: 87 },
  ],
};

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
    title: "Business Analyst Cover Letter",
    label: "DOCX",
    description: "My application letter tailored to business analysis, requirements, stakeholder collaboration, and software delivery roles.",
    href: "/documents/Mohamed_Abdallah_Cover_Letter_BA.docx",
    action: "Download BA Cover Letter",
    icon: Mail,
  },
  {
    title: "Back-End Developer Cover Letter",
    label: "DOCX",
    description: "My application letter tailored to back-end development, Spring services, secure APIs, and production systems.",
    href: "/documents/Mohamed_Abdallah_Cover_Letter_Back-End.docx",
    action: "Download Back-End Cover Letter",
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
  {
    title: "BUE Academic Transcript",
    label: "PDF",
    description: "My module grades, annual averages, and final degree classification. Personal identifiers are removed from this public copy.",
    href: academicTranscript.href,
    action: "Download Transcript",
    icon: GraduationCap,
  },
];

export const certificates = [
  {
    file: "Celfocus_Internship_Completion.png",
    title: "Celfocus Summer Internship Completion",
    description: "I completed the 2026 Summer Internship Program at the Celfocus Egypt Delivery Center.",
    date: "1 July 2026 to 31 August 2026",
    thumbnailPosition: "center 30%",
  },
  {
    file: "Celfocus_Internship_Experience_Redacted.png",
    title: "Celfocus Internship Experience Certificate",
    description: "Celfocus confirmed my work in its Digital Business unit during the 2026 internship. My national ID number is removed from this public copy.",
    date: "1 July 2026 to 31 August 2026",
    thumbnailPosition: "center 15%",
  },
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
    role: "Freelance Software Engineer - El7a2ny",
    company: "El7a2ny Car Service Platform",
    location: "Team freelance project",
    type: "Full-Stack Development",
    group: "freelance",
    date: "September 2026 - Present",
    highlights: [
      "I am building a car-service platform with my team across customer and business workflows, with a live release in progress.",
      "I contributed role-based authentication, shared web and mobile UI components, customer booking and ordering flows, and the admin dashboard and management pages.",
      "I connected admin views to API modules for businesses, bookings, inventory, orders, services, and service requests, and added verification coverage for these flows.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Celfocus",
    location: "Cairo, Egypt",
    type: "Hybrid",
    group: "internship",
    date: "July 2026 - September 2026",
    highlights: [
      "I rotated across back-end, front-end, QA and system testing, DevOps, and AI while contributing to live company projects.",
      "I used Java, Spring Boot, React, REST APIs, Git, and Docker to implement and test features across the delivery lifecycle.",
      "I worked with requirements and technical issues across cross-functional teams, which strengthened my business analysis and delivery skills.",
      "I built and used Model Context Protocol servers, applied prompt engineering, and developed agentic AI workflows.",
      "On the Crowdly internship project, I built the ticket checkout interface, venue seating map, and reusable navigation and feedback components.",
    ],
  },
  {
    role: "Freelance Software Engineer - Konooz Studio",
    company: "Konooz Studio",
    location: "Freelance Project",
    type: "Full Stack Development and Product Delivery",
    group: "freelance",
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
    group: "internship",
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
    group: "internship",
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
    title: "El7a2ny Car Service Platform",
    type: "Freelance Team Project · In Development",
    category: "Car Services Marketplace and Operations",
    featured: true,
    technologies: ["React", "React Native", "TypeScript", "Express", "Prisma", "PostgreSQL", "Zod", "Turborepo"],
    description: "I am building El7a2ny with a team as a web and mobile platform connecting customers with car-service businesses. The product covers service discovery, vehicles, bookings, parts orders, and business operations; we are working toward a live release.",
    evidence: "Team repository with customer, admin, and super-admin web and mobile workspaces; active development",
    implementation: [
      "The monorepo uses pnpm workspaces and Turborepo to organize six React and React Native applications, shared packages, and a modular Express API.",
      "The backend models customers, businesses, vehicles, services, bookings, service requests, products, inventory, orders, and payments in PostgreSQL through Prisma.",
      "Authentication and authorization separate customer, admin, and super-admin roles, with email verification and additional verification for privileged sign-in.",
    ],
    contributions: [
      "I implemented and refined role-based authentication and registration flows, including verification steps, admin access, and shared validation.",
      "I built reusable web and mobile component libraries and improved customer screens for service discovery, vehicles, bookings, cart, checkout, and orders.",
      "I developed admin sign-in, registration, dashboard, and management pages and connected them to API modules for bookings, inventory, products, services, orders, and business data.",
      "I added backend and end-to-end verification for authentication and admin workflows while preparing the platform for release with my team.",
    ],
    repositoryUrl: "https://github.com/MohamedAbdallah999/El7a2ny-car-service-platform",
    repositoryLabel: "View team repository",
  },
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
    title: "Crowdly Event and Ticketing Platform",
    type: "Celfocus Internship Team Project",
    category: "Event Discovery, Seating and Checkout",
    featured: true,
    technologies: ["Next.js", "React", "TypeScript", "Express", "Prisma", "MongoDB", "Stripe"],
    description: "I contributed to Crowdly during my Celfocus internship. The team built an event platform with event and venue browsing, ticket selection, seating layouts, account flows, orders, and payment integration.",
    evidence: "20 authored commits in the team repository covering checkout, venue flows, and reusable UI",
    implementation: [
      "A Next.js client uses React components and data hooks, while an Express API organizes authentication, events, venues, orders, and payments.",
      "Prisma models users, venues, events, tickets, and orders in MongoDB; the checkout interface integrates Stripe payment components.",
      "Venue stage sections are represented in the data model and aligned with event ticket types and availability for the seating experience.",
    ],
    contributions: [
      "I built a responsive four-step ticket checkout page for ticket selection, account details, payment, and confirmation.",
      "I created the reusable stage and seating-map component, then aligned venue sections and event ticket availability across client types and API services.",
      "I implemented navigation components including the navbar, mobile navigation, breadcrumbs, tabs, pagination, and admin sidebar.",
      "I added feedback components including a toast, progress stepper, progress bar, tooltip, and empty states, then refined responsive layouts.",
    ],
    repositoryUrl: "https://github.com/ElBarBary01/Crowdly",
    repositoryLabel: "View Celfocus team repository",
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
  { label: "Professional Experience", value: "Celfocus, CDS, CIB", icon: BriefcaseBusiness },
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
