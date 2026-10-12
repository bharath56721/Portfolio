import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink, HiCheckCircle, HiCode } from 'react-icons/hi';
import { projects, personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SectionHeader from '../components/SectionHeader';

const StatusBadge = ({ status }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-green-500/10 text-green-400 border border-green-500/20">
    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
    {status}
  </span>
);

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card gradient-border rounded-2xl border border-surface-border overflow-hidden group"
    >
      {/* Card header */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${isEven ? 'from-accent-blue to-accent-violet' : 'from-accent-violet to-accent-cyan'}`} />

      <div className="p-6 md:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <StatusBadge status={project.status} />
              <span className="text-text-muted text-xs font-mono">{project.year}</span>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-accent-blue transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-surface-border text-text-muted hover:text-text-primary hover:border-surface-muted hover:bg-surface-border/40 transition-all duration-200"
              >
                <SiGithub size={16} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} Live`}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-surface-border text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
              >
                <HiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Highlights */}
        <div className="mb-6">
          <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-3">Key highlights</p>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <HiCheckCircle className="text-accent-blue mt-0.5 flex-shrink-0" size={15} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div>
          <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-3">Tech stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { ref, inView } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="Projects"
            title="Things I've shipped."
            subtitle="Production-ready backend systems built with Java, Spring Boot, and TDD. Designed for scalability, security, and maintainability."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex justify-center"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-muted hover:bg-surface-border/30 font-medium text-sm transition-all duration-200"
            >
              <SiGithub size={16} />
              View all repositories on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
