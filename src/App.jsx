import {
  ArrowDown, ArrowUpRight, Mail, Github, Linkedin, MapPin, ExternalLink,
  RadioTower, Award, BriefcaseBusiness, Code2, Sparkles, Send, CheckCircle2
} from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";
import { profile, projects, certifications, experiences, skills, highlights } from "./data.js";

function SocialLink({ href, icon: Icon, label }) {
  const disabled = !href || href.includes("your-github-username") || href.includes("your.email");
  return (
    <a className={`social-link ${disabled ? "is-placeholder" : ""}`} href={disabled ? undefined : href}
      target="_blank" rel="noreferrer" aria-label={label} title={disabled ? "Update this link in src/data.js" : label}>
      <Icon size={19} />
    </a>
  );
}

export default function App() {
  const skillGroups = [...new Set(skills.map(skill => skill.group))];

  return (
    <>
      <Navbar />
      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="pulse-dot" /> OPEN TO LEARNING & INTERNSHIP OPPORTUNITIES</div>
              <p className="hero-kicker">HELLO, I’M</p>
              <h1>{profile.name}<span className="hero-period">.</span></h1>
              <h2>{profile.role}<span className="hero-accent"> / </span><span>Aerospace Enthusiast</span></h2>
              <p className="hero-description">{profile.tagline} I’m interested in turning engineering concepts into practical, working systems.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
                <a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17} /></a>
              </div>
              <div className="hero-socials">
                <SocialLink href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
                <SocialLink href={profile.github} icon={Github} label="GitHub" />
                <SocialLink href={`mailto:${profile.email}`} icon={Mail} label="Email" />
                <span className="hero-location"><MapPin size={14} /> {profile.location}</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="orbit orbit-a" /><div className="orbit orbit-b" />
              <div className="photo-frame">
                <img src={profile.photo} alt={`${profile.name} portrait`} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.classList.add("photo-fallback"); }} />
                <div className="photo-placeholder"><span>KS</span><small>ADD YOUR PHOTO</small></div>
              </div>
              <div className="floating-card float-top"><span className="float-icon"><RadioTower size={17} /></span><span><b>Hardware</b><small>Build · Test · Learn</small></span></div>
              <div className="floating-card float-bottom"><span className="float-icon purple"><Sparkles size={17} /></span><span><b>Curious mind</b><small>Space & avionics</small></span></div>
              <div className="visual-caption">Curiosity is my starting point <span>✳</span></div>
            </div>
          </div>
          <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><div className="scroll-line" /><span>01 — 06</span></div>
        </section>

        <section className="section section-about" id="about">
          <div className="container about-grid">
            <div><SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious by nature.<br /><span className="text-gradient">Engineer in progress.</span></>} /></div>
            <div className="about-content">
              <p className="about-lead">{profile.about}</p>
              <p className="about-note">I’m especially drawn to projects where electronics, software, and aerospace meet. My goal is to keep strengthening my fundamentals while contributing to meaningful engineering work.</p>
              <div className="highlight-grid">
                {highlights.map(item => <div className="highlight" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-projects" id="projects">
          <div className="container">
            <SectionHeading eyebrow="SELECTED WORK" title={<>Projects & <span className="text-gradient">experiments.</span></>} description="A snapshot of what I’m building, exploring, and learning. I’ll keep adding projects as they develop." />
            <div className="projects-grid">
              {projects.map(project => <ProjectCard key={project.number} project={project} />)}
            </div>
            <p className="section-footnote"><span className="footnote-star">✳</span> Some projects are in progress. Details and links will be updated as the work develops.</p>
          </div>
        </section>

        <section className="section section-certifications" id="certifications">
          <div className="container">
            <SectionHeading eyebrow="LEARNING LOG" title={<>Certifications & <span className="text-gradient">learning.</span></>} description="Courses and learning milestones that support my engineering journey." />
            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <article className="cert-card" key={`${cert.name}-${i}`}>
                  <div className="cert-icon"><Award size={22} /></div>
                  <div className="cert-content">
                    <span className="cert-date">{cert.date}</span>
                    <h3>{cert.name}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p>{cert.description}</p>
                    {cert.credentialUrl ? <a className="text-link" href={cert.credentialUrl} target="_blank" rel="noreferrer">View credential <ExternalLink size={15} /></a> : <span className="cert-no-link">Add credential link in src/data.js</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-internship" id="internship">
          <div className="container internship-grid">
            <div><SectionHeading eyebrow="NEXT CHAPTER" title={<>Internship & <span className="text-gradient">experience.</span></>} description="Looking for opportunities to learn from engineers, contribute to real projects, and grow through hands-on work." />
              <a className="button button-primary" href="#contact">Discuss an opportunity <ArrowUpRight size={17} /></a>
            </div>
            <div className="experience-list">
              {experiences.map((exp, i) => (
                <article className="experience-card" key={`${exp.organisation}-${i}`}>
                  <div className="experience-icon"><BriefcaseBusiness size={20} /></div>
                  <div className="experience-main">
                    <div className="experience-meta"><span>{exp.type}</span><span>{exp.period}</span></div>
                    <h3>{exp.organisation}</h3>
                    <p>{exp.description}</p>
                    <ul>{exp.points.map(point => <li key={point}><CheckCircle2 size={15} />{point}</li>)}</ul>
                  </div>
                </article>
              ))}
              <p className="edit-hint">When you gain an internship or experience, update this section in <code>src/data.js</code> with the organisation, role, dates, and contributions.</p>
            </div>
          </div>
        </section>

        <section className="section section-skills" id="skills">
          <div className="container">
            <SectionHeading eyebrow="MY TOOLKIT" title={<>Skills I’m <span className="text-gradient">developing.</span></>} description="A growing toolkit across electronics, programming, design, and collaboration." />
            <div className="skills-grid">
              {skillGroups.map((group, i) => (
                <div className="skill-group" key={group}>
                  <div className="skill-group-title"><span className="skill-group-number">0{i + 1}</span><h3>{group}</h3></div>
                  <div className="skill-pills">{skills.filter(skill => skill.group === group).map(skill => <span className="skill-pill" key={skill.name}><Code2 size={14} />{skill.name}</span>)}</div>
                </div>
              ))}
            </div>
            <p className="section-footnote">Tip: keep this list honest and update it as you gain practical experience.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-wrap">
            <div className="contact-orb"><Send size={26} /></div>
            <span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
            <h2>Let’s build something<br /><span className="text-gradient">that takes off.</span></h2>
            <p>I’m happy to connect about aerospace, avionics, embedded systems, research, and student projects.</p>
            <a className="button button-primary contact-button" href={`mailto:${profile.email}?subject=Portfolio%20contact`}>Say hello <Mail size={17} /></a>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
              <a href={`mailto:${profile.email}`}><Mail size={17} /> Email <ArrowUpRight size={14} /></a>
            </div>
            <p className="contact-edit-note">Update your email and GitHub URL in <code>src/data.js</code> before publishing.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}