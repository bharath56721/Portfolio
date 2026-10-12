import { motion } from 'framer-motion';
import { HiAcademicCap, HiCode, HiLightningBolt } from 'react-icons/hi';
import { summary, personalInfo, strengths } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import SectionHeader from '../components/SectionHeader';

const StrengthItem = ({ text, index }) => (
  <motion.li
    variants={fadeInUp}
    className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
  >
    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-md bg-accent-blue/15 border border-accent-blue/25 flex items-center justify-center">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
    </span>
    {text}
  </motion.li>
);

const About = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle vertical line divider */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-surface-border to-transparent hidden xl:block" />

      <div className="section-container" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="About me"
            title="Backend engineer. Problem solver. Perpetual learner."
            subtitle="I believe good software starts with good thinking — clean abstractions, deliberate architecture, and tests that actually fail when things break."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — summary + who I am */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="glass-card rounded-2xl p-6 border border-surface-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent-blue/15 flex items-center justify-center">
                    <HiCode className="text-accent-blue" size={18} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Professional Summary</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{summary}</p>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-surface-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent-violet/15 flex items-center justify-center">
                    <HiLightningBolt className="text-accent-violet" size={18} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Career Objective</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Seeking a{' '}
                  <span className="text-text-primary font-medium">
                    Software Engineer / Graduate Engineer Trainee
                  </span>{' '}
                  role where I can apply my Spring Boot and full-stack expertise, strong DSA foundation, and problem-solving skills to build scalable systems from day one.
                </p>
              </div>

              {/* Key facts grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Graduation', value: 'June 2026' },
                  { label: 'CGPA', value: '7.75 / 10.0' },
                  { label: 'Status', value: 'Open to Work' },
                  { label: 'Location', value: 'Shivamogga, KA' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="glass-card rounded-xl p-4 border border-surface-border"
                  >
                    <p className="text-text-muted text-xs font-mono mb-1">{label}</p>
                    <p className="text-text-primary font-semibold text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — strengths */}
            <motion.div variants={fadeInRight} className="space-y-4">
              <div className="glass-card rounded-2xl p-6 border border-surface-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-accent-cyan/15 flex items-center justify-center">
                    <HiAcademicCap className="text-accent-cyan" size={18} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Key Strengths</h3>
                </div>
                <motion.ul
                  variants={staggerContainer}
                  className="space-y-3"
                >
                  {strengths.map((s, i) => (
                    <StrengthItem key={i} text={s} index={i} />
                  ))}
                </motion.ul>
              </div>

              {/* Tech focus tags */}
              <div className="glass-card rounded-2xl p-5 border border-surface-border">
                <p className="text-text-muted text-xs font-mono mb-3 uppercase tracking-widest">Primary focus</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'PostgreSQL', 'JUnit 5', 'Docker', 'DSA', 'GoF Patterns', 'MVC Architecture'].map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
