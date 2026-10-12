import { motion } from 'framer-motion';
import {
  SiJavascript, SiHtml5, SiCss, SiReact,
  SiMysql, SiPostgresql, SiDocker, SiGit,
  SiGithub, SiPostman, SiSpringboot,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { HiBeaker, HiCode, HiCog, HiDesktopComputer } from 'react-icons/hi';
import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SectionHeader from '../components/SectionHeader';

// Map icon keys to components
const iconMap = {
  java: FaJava,
  spring: SiSpringboot,
  mysql: SiMysql,
  postgres: SiPostgresql,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  js: SiJavascript,
  html: SiHtml5,
  react: SiReact,
  api: HiCode,
  dsa: HiCode,
  patterns: HiCog,
  arch: HiCog,
  thread: HiCog,
  sdlc: HiBeaker,
  test: HiBeaker,
  actions: SiGithub,
  swagger: HiCode,
  default: FaDatabase,
};

const SkillBar = ({ skill, inView, index }) => {
  const Icon = iconMap[skill.icon] || iconMap.default;

  return (
    <motion.div
      variants={fadeInUp}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="text-accent-blue" size={14} />
          <span className="text-sm font-medium text-text-primary">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-surface-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, icon: Icon, color, skills: categorySkills, inView }) => (
  <motion.div
    variants={fadeInUp}
    className="glass-card gradient-border rounded-2xl p-6 border border-surface-border flex flex-col gap-5"
  >
    <div className="flex items-center gap-3">
      <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center`}>
        <Icon size={18} />
      </div>
      <h3 className="font-semibold text-text-primary">{title}</h3>
    </div>
    <div className="flex flex-col gap-4">
      {categorySkills.map((skill, i) => (
        <SkillBar key={skill.name} skill={skill} inView={inView} index={i} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { ref, inView } = useScrollReveal({ threshold: 0.1 });

  const categories = [
    {
      title: 'Backend & Frameworks',
      icon: SiSpringboot,
      color: 'bg-green-500/15 text-green-400',
      skills: skills.backend,
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      color: 'bg-blue-500/15 text-blue-400',
      skills: skills.database,
    },
    {
      title: 'CS Fundamentals',
      icon: HiCode,
      color: 'bg-violet-500/15 text-violet-400',
      skills: skills.fundamentals,
    },
    {
      title: 'Dev Tools & Testing',
      icon: HiCog,
      color: 'bg-orange-500/15 text-orange-400',
      skills: skills.tools,
    },
    {
      title: 'Web Technologies',
      icon: HiDesktopComputer,
      color: 'bg-cyan-500/15 text-cyan-400',
      skills: skills.frontend,
    },
    {
      title: 'Productivity Tools',
      icon: HiBeaker,
      color: 'bg-pink-500/15 text-pink-400',
      skills: skills.productivity,
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-bg-secondary/40">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="Technical skills"
            title="Tools I build with."
            subtitle="Grounded in Java and Spring Boot, with a deliberate focus on backend systems, data integrity, and test-driven development."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <SkillCategory key={cat.title} {...cat} inView={inView} />
            ))}

            {/* Languages card — accent */}
            <motion.div
              variants={fadeInUp}
              className="glass-card rounded-2xl p-6 border border-surface-border md:col-span-2 lg:col-span-1"
            >
              <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">Languages</p>
              <div className="space-y-3">
                {[
                  { name: 'Java', note: 'Primary · Production projects', accent: 'text-orange-400' },
                  { name: 'SQL', note: 'MySQL · PostgreSQL · JDBC', accent: 'text-blue-400' },
                  { name: 'JavaScript', note: 'React.js · ES6', accent: 'text-yellow-400' },
                ].map(({ name, note, accent }) => (
                  <div
                    key={name}
                    className="flex items-center justify-between py-2 border-b border-surface-border/60 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`font-mono font-semibold text-sm ${accent}`}>{name}</span>
                    </div>
                    <span className="text-text-muted text-xs">{note}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
