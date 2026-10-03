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
  Menu,
  Minus,
  Moon,
  Phone,
  Plus,
  Send,
  Sun,
  X,
} from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  academicTranscript,
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

function SplashCube({ tone, orbit }: { tone: "teal" | "blue" | "violet" | "silver"; orbit: number }) {
  return (
    <div className={`splash-cube-orbiter splash-cube-${tone} splash-orbit-${orbit}`}>
      <div className="splash-cube">
        <span className="splash-cube-face splash-cube-front" />
        <span className="splash-cube-face splash-cube-back" />
        <span className="splash-cube-face splash-cube-left" />
        <span className="splash-cube-face splash-cube-right" />
        <span className="splash-cube-face splash-cube-top" />
        <span className="splash-cube-face splash-cube-bottom" />
      </div>
    </div>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const reducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), reducedMotion ? 900 : 4600);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

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
        "Sent through the portfolio contact form.",
      ].join("\n"),
    );

    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {!loaded && (
        <div className="preloader" role="status" aria-live="polite">
          <div className="splash-grid" aria-hidden="true" />
          <div className="splash-orbital-system" aria-hidden="true">
            <span className="splash-wire-orbit splash-wire-orbit-wide" />
            <span className="splash-wire-orbit splash-wire-orbit-tall" />
            <SplashCube tone="teal" orbit={1} />
            <SplashCube tone="blue" orbit={2} />
            <SplashCube tone="violet" orbit={3} />
            <SplashCube tone="silver" orbit={4} />
          </div>
          <div className="splash-name-lockup">
            <strong className="splash-name" aria-label="Mohamed Abdallah Mohamed">
              <span>Mohamed</span>
              <span>Abdallah</span>
              <span>Mohamed</span>
            </strong>
            <span className="splash-discipline">Software Engineer</span>
          </div>
          <div className="splash-progress" aria-label="Loading portfolio">
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
        <nav id="primary-navigation" className={mobileMenuOpen ? "mobile-nav-open" : ""} aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((value) => !value)}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
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
              <span className="status-pill">Open to back-end development and business analysis opportunities</span>
              <h1>{person.name}</h1>
              <p className="hero-title">Software Engineering Graduate / Back-End Developer / Business Analyst</p>
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
              <span><BriefcaseBusiness size={16} /> Military status: Exempt</span>
            </div>
          </motion.div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <ArrowDown size={18} />
          </a>
        </section>

        <div className="content-shell">
          <Section id="about" eyebrow="Profile" title="I connect business requirements with reliable software delivery.">
            <div className="about-grid">
              <p>
                I earned a dual Software Engineering degree from The British University in Egypt and London South Bank University,
                graduating with Distinction (Honors) and a GPA of 3.7. I am based in New Cairo, and my military status is exempt.
              </p>
              <p>
                I have applied that foundation through Celfocus and CDS internships and by delivering Konooz Studio's production
                inventory and point-of-sale system. My work spans requirements analysis, Java and Spring microservices, TypeScript
                and React products, Flutter applications, automated testing, deployment, and retrieval-augmented AI.
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

          <Section id="education" eyebrow="Education" title="How I built my academic foundation">
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
            <div className="academic-results">
              <div className="academic-award">
                <span className="academic-label">BUE academic transcript</span>
                <h3>{academicTranscript.classification}</h3>
                <div className="academic-final-mark">
                  <strong>{academicTranscript.finalAverage}</strong>
                  <span>Final award average</span>
                </div>
                <p>The transcript records module grades and annual averages from 2022 to 2026.</p>
                <div className="academic-actions">
                  <a className="ghost-action" href={academicTranscript.href} target="_blank" rel="noreferrer">
                    View transcript <ExternalLink size={17} />
                  </a>
                  <DownloadLink href={academicTranscript.href}>Download PDF</DownloadLink>
                </div>
              </div>
              <div className="academic-years" aria-label="University yearly averages">
                {academicTranscript.yearlyAverages.map((item) => (
                  <div className="academic-year" key={item.year}>
                    <span>{item.year}</span>
                    <strong>{item.average}</strong>
                    <small>Year average</small>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="experience" eyebrow="Experience" title="How I apply software engineering in practice">
            <div className="experience-sections">
              {([
                { id: "internship", title: "Internships" },
                { id: "freelance", title: "Freelance & client work" },
              ] as const).map((group, groupIndex) => {
                const roles = experience.filter((item) => item.group === group.id);
                return (
                  <div className="experience-group" key={group.id}>
                    <div className="experience-group-heading">
                      <div>
                        <span>{String(groupIndex + 1).padStart(2, "0")} / Experience</span>
                        <h3>{group.title}</h3>
                      </div>
                      <small>{roles.length} {roles.length === 1 ? "role" : "roles"}</small>
                    </div>
                    <div className="experience-stack">
                      {roles.map((item, index) => (
                        <article className="glass-card experience-card" key={`${item.company}-${item.role}`}>
                          <div className="experience-rail">
                            <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
                            <span className="experience-date">{item.date}</span>
                            <span className="experience-type">{item.type}</span>
                          </div>
                          <div className="experience-body">
                            <h4>{item.role}</h4>
                            <strong>{item.company}</strong>
                            <ul className="experience-list">
                              {item.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                              ))}
                            </ul>
                            <small><MapPin size={14} /> {item.location}</small>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>

          <Section id="courses" eyebrow="Courses" title="How I continue developing my skills">
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

          <Section id="projects" eyebrow="Projects" title="What I have built">
            <div className="project-sections">
              {([
                { title: "Featured work", description: "Client, internship, and graduation projects", featured: true },
                { title: "More projects", description: "Additional academic and independent builds", featured: false },
              ] as const).map((group) => (
                <div className="project-group" key={group.title}>
                  <div className="project-group-heading">
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <div className={`project-grid ${group.featured ? "project-grid-featured" : "project-grid-more"}`}>
                    {projects.filter((project) => Boolean(project.featured) === group.featured).map((project) => (
                      <motion.article
                        className="project-card"
                        key={project.title}
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      >
                        <div className="project-card-topline">
                          <span>{project.type}</span>
                          <span>{project.category}</span>
                        </div>
                        <h4>{project.title}</h4>
                        <p className="project-description">{project.description}</p>
                        {project.evidence && <p className="project-evidence">{project.evidence}</p>}
                        {(project.implementation || project.contributions) && (
                          <details className="project-details">
                            <summary>
                              <span className="project-details-open-label">View more contribution details</span>
                              <span className="project-details-close-label">View fewer contribution details</span>
                              <Plus className="project-details-plus" size={18} aria-hidden="true" />
                              <Minus className="project-details-minus" size={18} aria-hidden="true" />
                            </summary>
                            {project.implementation && (
                              <div className="project-detail-block">
                                <h5>How it was implemented</h5>
                                <ul>
                                  {project.implementation.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {project.contributions && (
                              <div className="project-detail-block project-contribution-block">
                                <h5>My contributions</h5>
                                <ul>
                                  {project.contributions.map((contribution) => (
                                    <li key={contribution}>{contribution}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </details>
                        )}
                        <div className="tag-row">
                          {project.technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                        <div className="project-links">
                          {project.repositoryUrl && (
                            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                              {project.repositoryLabel ?? "View project repository"} <ExternalLink size={15} />
                            </a>
                          )}
                          {project.contributionUrl && (
                            <a href={project.contributionUrl} target="_blank" rel="noreferrer">
                              View my pull requests <ExternalLink size={15} />
                            </a>
                          )}
                          <a href="#contact">Discuss project</a>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="skills" eyebrow="Skills" title="What I use to deliver software">
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

          <Section id="certificates" eyebrow="Certificates" title="How I document my professional learning">
            <div className="certificate-grid">
              {certificates.map((certificate) => (
                <button className="certificate-card" type="button" key={certificate.file} onClick={() => setSelectedCertificate(certificate)}>
                  <img src={certificate.src} alt={certificate.title} loading="lazy" style={{ objectPosition: "thumbnailPosition" in certificate ? certificate.thumbnailPosition : "top center" }} />
                  <span>{certificate.date}</span>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.description}</p>
                </button>
              ))}
            </div>
          </Section>

          <Section id="documents" eyebrow="Documents" title="My application-ready files">
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

          <Section id="github" eyebrow="GitHub" title="How my repositories support my engineering profile">
            <div className="github-panel">
              <div className="github-intro">
                <div className="github-intro-copy">
                  <Github size={36} />
                  <h3>MohamedAbdallah999</h3>
                  <p>
                    I use GitHub to document production delivery, collaborative internship systems, mobile and AI applications,
                    and academic engineering work. The projects shown above link only to repositories I could verify.
                  </p>
                </div>
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

          <Section id="contact" eyebrow="Contact" title="How to contact me">
            <div className="contact-grid">
              <div className="contact-panel">
                <h3>I am seeking back-end development, business analysis, and software engineering opportunities.</h3>
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
        <span>Software Engineering Graduate | Back-End Developer | Business Analyst</span>
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
            <div className="certificate-modal-info">
              <span className="certificate-modal-date"><Calendar size={16} /> {selectedCertificate.date}</span>
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.description}</p>
              <DownloadLink href={selectedCertificate.src} className="certificate-download">Download certificate</DownloadLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
