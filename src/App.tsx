import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Sun,
  X,
} from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import {
  certificateGroups,
  certificates,
  courses,
  documents,
  education,
  experience,
  highlights,
  links,
  navItems,
  person,
  projects,
  repoCards,
  skillCategories,
} from "./data/portfolio";

type Certificate = (typeof certificates)[number];

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function TechObject({ position, color }: { position: [number, number, number]; color: string }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.elapsedTime * 0.35;
    mesh.current.rotation.y = clock.elapsedTime * 0.45;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.65} floatIntensity={1.4}>
      <group position={position}>
        <mesh ref={mesh}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color={color} metalness={0.65} roughness={0.22} />
        </mesh>
      </group>
    </Float>
  );
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.8, 8], fov: 48 }} dpr={[1, 1.75]} aria-label="Animated 3D software engineering scene">
      <ambientLight intensity={0.72} />
      <pointLight position={[4, 4, 6]} intensity={1.6} color="#9ee7ff" />
      <pointLight position={[-4, -2, 4]} intensity={1.2} color="#bca7ff" />
      <Stars radius={80} depth={40} count={900} factor={4} saturation={0} fade speed={0.35} />
      <TechObject position={[-3.2, 1.4, 0]} color="#2dd4bf" />
      <TechObject position={[3.1, 1.1, -0.6]} color="#60a5fa" />
      <TechObject position={[-2.1, -1.6, 0.6]} color="#c4b5fd" />
      <TechObject position={[2.2, -1.45, 0.5]} color="#f8fafc" />
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[0, 0, -0.4]}>
          <torusKnotGeometry args={[1.25, 0.28, 160, 18]} />
          <meshStandardMaterial color="#38bdf8" metalness={0.7} roughness={0.18} wireframe />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
    </Canvas>
  );
}

type SplashPoint = [number, number, number];

const splashCubes: Array<{
  color: string;
  emissive: string;
  path: SplashPoint[];
  delay: number;
  spin: SplashPoint;
}> = [
  {
    color: "#2dd4bf",
    emissive: "#0f766e",
    path: [[-12, 7, -8], [-0.7, 0.5, 2.5], [2.8, -1.4, 1], [-4.4, 2.4, -0.6]],
    delay: 0,
    spin: [7.5, 10, 5],
  },
  {
    color: "#60a5fa",
    emissive: "#1d4ed8",
    path: [[12, -7, -10], [0.8, -0.6, 2.8], [-3, 1.6, 1.2], [4.6, -2.5, -0.2]],
    delay: 0.08,
    spin: [9, -8, 6],
  },
  {
    color: "#c4b5fd",
    emissive: "#7c3aed",
    path: [[-11, -9, -14], [0.5, 0.8, 3.4], [3.4, 2.2, 0.8], [-3.8, -3.1, -1.2]],
    delay: 0.16,
    spin: [-8, 9, -7],
  },
  {
    color: "#f8fafc",
    emissive: "#64748b",
    path: [[13, 9, -16], [-0.5, -0.7, 3], [-3.1, -2, 1], [4.1, 3.2, -1.4]],
    delay: 0.24,
    spin: [-10, -7, 8],
  },
];

function SplashCube({
  color,
  emissive,
  path,
  delay,
  spin,
  reducedMotion,
}: (typeof splashCubes)[number] & { reducedMotion: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(path.map((point) => new THREE.Vector3(...point)), false, "catmullrom", 0.22),
    [path],
  );

  useFrame(({ clock }, delta) => {
    if (!mesh.current) return;

    if (reducedMotion) {
      mesh.current.position.set(...path[path.length - 1]);
      mesh.current.rotation.set(0.45, 0.65, 0.2);
      mesh.current.scale.setScalar(0.78);
      return;
    }

    const elapsed = Math.max(0, clock.elapsedTime - delay);
    const progress = THREE.MathUtils.clamp(elapsed / 2.35, 0, 1);
    const flight = 1 - Math.pow(1 - progress, 3);
    const point = curve.getPointAt(flight);
    const collisionPulse = Math.exp(-Math.pow((progress - 0.44) / 0.09, 2));
    const entrance = THREE.MathUtils.smoothstep(progress, 0, 0.13);

    mesh.current.position.copy(point);
    mesh.current.rotation.x += delta * spin[0];
    mesh.current.rotation.y += delta * spin[1];
    mesh.current.rotation.z += delta * spin[2];
    mesh.current.scale.setScalar(0.18 + entrance * 0.62 + collisionPulse * 0.62);
  });

  return (
    <mesh ref={mesh} position={path[0]}>
      <boxGeometry args={[1.15, 1.15, 1.15]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.24}
        metalness={0.82}
        roughness={0.16}
      />
    </mesh>
  );
}

function SplashTorus({ reducedMotion }: { reducedMotion: boolean }) {
  const torus = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, delta) => {
    if (!torus.current) return;

    if (reducedMotion) {
      torus.current.rotation.set(0.72, 0.42, 0.18);
      torus.current.scale.setScalar(0.92);
      return;
    }

    const progress = THREE.MathUtils.clamp(clock.elapsedTime / 2.65, 0, 1);
    const impact = Math.exp(-Math.pow((progress - 0.46) / 0.12, 2));
    torus.current.rotation.x += delta * (2.5 + impact * 4.5);
    torus.current.rotation.y += delta * (3.4 + impact * 5.5);
    torus.current.rotation.z -= delta * 1.7;
    torus.current.scale.setScalar(0.5 + THREE.MathUtils.smoothstep(progress, 0, 0.28) * 0.48 + impact * 0.22);
  });

  return (
    <mesh ref={torus} position={[0, 0, -2.4]} rotation={[0.6, 0.35, 0]}>
      <torusKnotGeometry args={[2.7, 0.19, 180, 24]} />
      <meshStandardMaterial
        color="#38dff5"
        emissive="#0e7490"
        emissiveIntensity={0.6}
        metalness={0.72}
        roughness={0.2}
        transparent
        opacity={0.42}
        wireframe
      />
    </mesh>
  );
}

function SplashScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 48 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.65} />
      <pointLight position={[3, 5, 7]} intensity={2.2} color="#9ee7ff" />
      <pointLight position={[-4, -3, 5]} intensity={1.8} color="#9d8cff" />
      <Stars radius={55} depth={36} count={620} factor={3.2} saturation={0} fade speed={reducedMotion ? 0 : 1.5} />
      <SplashTorus reducedMotion={reducedMotion} />
      {splashCubes.map((cube) => (
        <SplashCube key={cube.color} {...cube} reducedMotion={reducedMotion} />
      ))}
    </Canvas>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="section"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function DownloadLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={`download-link ${className}`} href={href} download>
      <Download size={17} aria-hidden="true" />
      {children}
    </a>
  );
}

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [lightMode, setLightMode] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const reducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 2800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", lightMode);
  }, [lightMode]);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const senderName = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${senderName}`);
    const body = encodeURIComponent(
      [
        `Hello Mohamed,`,
        "",
        message,
        "",
        "Sender details:",
        `Name: ${senderName}`,
        `Email: ${senderEmail}`,
        "",
        "Sent from Mohamed Abdallah Mohamed's portfolio website.",
      ].join("\n"),
    );

    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {!loaded && (
        <div className="preloader" role="status" aria-live="polite">
          <div className="splash-grid" aria-hidden="true" />
          <div className="splash-streaks" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="splash-scene" aria-hidden="true">
            <SplashScene reducedMotion={reducedMotion} />
          </div>
          <div className="splash-name-lockup">
            <span className="splash-sequence">Orbital collision // portfolio</span>
            <strong className="splash-name" aria-label="Mohamed Abdallah Mohamed">
              <span>Mohamed</span>
              <span>Abdallah</span>
              <span>Mohamed</span>
            </strong>
            <span className="splash-discipline">Software Engineering</span>
          </div>
          <div className="splash-progress" aria-label="Loading portfolio">
            <div className="splash-progress-copy">
              <span>Initializing neural workspace</span>
              <span>02.8s</span>
            </div>
            <div className="splash-progress-rail" aria-hidden="true">
              <span className="splash-progress-fill" />
            </div>
          </div>
          <div className="splash-exit" aria-hidden="true" />
        </div>
      )}
      <motion.div className="progress-bar" style={{ scaleX }} />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home">
          <span>MA</span>
          <strong>Mohamed Abdallah</strong>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <button className="icon-button" type="button" onClick={() => setLightMode((value) => !value)} aria-label="Toggle theme">
          {lightMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-scene" aria-hidden="true">
            {loaded && <HeroScene />}
          </div>
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="status-pill">Available for software engineering opportunities</span>
              <h1>{person.name}</h1>
              <p className="hero-title">Software Engineering Graduate / Back-End Developer / Full-Stack &amp; AI Developer</p>
              <p className="hero-summary">{person.summary}</p>
              <div className="hero-actions">
                <a className="primary-action" href="#projects">
                  View Projects <ArrowRight size={18} />
                </a>
                <DownloadLink href="/documents/Mohamed_Abdallah_CV.pdf">Download CV</DownloadLink>
                <a className="ghost-action" href={links.github} target="_blank" rel="noreferrer">
                  View GitHub <Github size={18} />
                </a>
                <a className="ghost-action" href="#contact">
                  Contact Me <Mail size={18} />
                </a>
              </div>
              <div className="social-row" aria-label="Contact links">
                <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin />
                </a>
                <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github />
                </a>
                <a href={links.email} aria-label="Email">
                  <Mail />
                </a>
                <a href={links.phone} aria-label="Phone">
                  <Phone />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div className="profile-panel" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
            <div className="photo-frame">
              <img src="/assets/Me.jpeg" alt="Mohamed Abdallah Mohamed portrait" />
            </div>
            <div className="profile-meta">
              <span><MapPin size={16} /> {person.location}</span>
              <span><GraduationCap size={16} /> Distinction (Honors) | GPA 3.7</span>
              <span><BriefcaseBusiness size={16} /> Military status: Exempted</span>
            </div>
          </motion.div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <ArrowDown size={18} />
          </a>
        </section>

        <div className="content-shell">
          <Section id="about" eyebrow="Profile" title="Full-stack delivery, software quality, and agentic AI.">
            <div className="about-grid">
              <p>
                Mohamed Abdallah Mohamed is a Software Engineering graduate from The British University in Egypt / London South Bank
                University, graduating with Distinction (Honors) and a GPA of 3.7. Based in New Cairo and exempted from military
                service, he brings practical experience from Celfocus, Connect Digital Solutions, CIB, and Mazaya Group.
              </p>
              <p>
                His Celfocus internship expanded that foundation across Spring and React feature development, QA and system testing,
                DevOps, prompt engineering, MCP servers, and agentic AI workflows. His project work also spans Flutter and Firebase
                applications, RAG systems, vector retrieval, and adaptive educational AI.
              </p>
              <div className="highlight-grid">
                {highlights.map((item) => (
                  <div className="metric-card" key={item.label}>
                    <item.icon size={22} />
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="education" eyebrow="Education" title="Academic foundation">
            <div className="timeline">
              {education.map((item) => (
                <article className="timeline-item" key={item.institution}>
                  <span className="timeline-date">{item.date}</span>
                  <h3>{item.institution}</h3>
                  <p>{item.degree}</p>
                  <small>{item.location} | {item.details}</small>
                </article>
              ))}
            </div>
          </Section>

          <Section id="experience" eyebrow="Experience" title="Internships and professional exposure">
            <div className="experience-grid">
              {experience.map((item) => (
                <article className="glass-card experience-card" key={`${item.company}-${item.role}`}>
                  <div className="card-topline">
                    <span>{item.date}</span>
                    <span>{item.type}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <ul className="experience-list">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <small><MapPin size={14} /> {item.location}</small>
                </article>
              ))}
            </div>
          </Section>

          <Section id="courses" eyebrow="Courses" title="Focused technical learning">
            <div className="course-grid">
              {courses.map((course) => (
                <article className="glass-card" key={course.title}>
                  <div className="card-topline">
                    <span>{course.date}</span>
                    <span>{course.hours ?? "Certificate"}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <strong>{course.provider}</strong>
                  <div className="tag-row">
                    {course.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="projects" eyebrow="Projects" title="Selected software engineering work">
            <div className="project-grid">
              {projects.map((project) => (
                <motion.article
                  className={`project-card ${project.featured ? "featured" : ""}`}
                  key={project.title}
                  whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <div className="card-topline">
                    <span>{project.type}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={links.github} target="_blank" rel="noreferrer">
                      View GitHub Profile <ExternalLink size={15} />
                    </a>
                    <a href="#contact">Discuss project</a>
                  </div>
                </motion.article>
              ))}
            </div>
          </Section>

          <Section id="skills" eyebrow="Skills" title="Technical stack and engineering capabilities">
            <div className="skills-grid">
              {skillCategories.map((category) => (
                <article className="glass-card skill-card" key={category.title}>
                  <div className="skill-heading">
                    <category.icon size={22} />
                    <h3>{category.title}</h3>
                  </div>
                  <div className="tag-row">
                    {category.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="certificates" eyebrow="Certificates" title="Verified learning and internship evidence">
            <div className="certificate-toolbar">
              <DownloadLink href="/documents/Mohamed_234552.pdf">Download Full Certificates PDF</DownloadLink>
              {certificateGroups.map((group) => (
                <DownloadLink key={group.title} href={group.href}>
                  {group.action}
                </DownloadLink>
              ))}
            </div>
            <div className="certificate-grid">
              {certificates.map((certificate) => (
                <button className="certificate-card" type="button" key={certificate.file} onClick={() => setSelectedCertificate(certificate)}>
                  <img src={certificate.src} alt={certificate.title} loading="lazy" />
                  <span>{certificate.date}</span>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.description}</p>
                </button>
              ))}
            </div>
          </Section>

          <Section id="documents" eyebrow="Documents" title="Application-ready files">
            <div className="documents-grid">
              {documents.map((document) => (
                <article className="document-card" key={document.title}>
                  <document.icon size={28} />
                  <span>{document.label}</span>
                  <h3>{document.title}</h3>
                  <p>{document.description}</p>
                  <DownloadLink href={document.href}>{document.action}</DownloadLink>
                </article>
              ))}
            </div>
          </Section>

          <Section id="github" eyebrow="GitHub" title="Repository profile and engineering identity">
            <div className="github-panel">
              <div>
                <Github size={36} />
                <h3>MohamedAbdallah999</h3>
                <p>
                  GitHub is presented as Mohamed's project archive for academic systems, AI applications, mobile work, and
                  full-stack development. The section avoids token-based API calls so the portfolio remains deployment-ready.
                </p>
                <a className="primary-action" href={links.github} target="_blank" rel="noreferrer">
                  View GitHub Repositories <ExternalLink size={18} />
                </a>
              </div>
              <div className="repo-grid">
                {repoCards.map((repo) => (
                  <article className="repo-card" key={repo.title}>
                    <h4>{repo.title}</h4>
                    <p>{repo.description}</p>
                    <span>{repo.stack}</span>
                  </article>
                ))}
              </div>
            </div>
          </Section>

          <Section id="contact" eyebrow="Contact" title="Recruiter-friendly contact">
            <div className="contact-grid">
              <div className="contact-panel">
                <h3>Open to software engineering, back-end, full-stack, QA, DevOps, and AI application opportunities.</h3>
                <a href={links.email}><Mail size={18} /> {person.email}</a>
                <a href={links.phone}><Phone size={18} /> {person.phone}</a>
                <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn profile</a>
                <a href={links.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub repositories</a>
                <span><MapPin size={18} /> {person.location}</span>
              </div>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label>
                  Name
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={5} required />
                </label>
                <button className="primary-action" type="submit">
                  Send Email <Send size={18} />
                </button>
              </form>
            </div>
          </Section>
        </div>
      </main>

      <footer className="footer">
        <strong>{person.name}</strong>
        <span>Software Engineering Graduate | Back-End Developer | Full-Stack &amp; AI Developer</span>
        <div>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.email}>Email</a>
        </div>
      </footer>

      {selectedCertificate && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={selectedCertificate.title}>
          <div className="certificate-modal">
            <button className="modal-close" type="button" onClick={() => setSelectedCertificate(null)} aria-label="Close certificate preview">
              <X size={20} />
            </button>
            <img src={selectedCertificate.src} alt={selectedCertificate.title} />
            <div>
              <span><Calendar size={16} /> {selectedCertificate.date}</span>
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.description}</p>
              <DownloadLink href={selectedCertificate.src}>Download Certificate</DownloadLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
