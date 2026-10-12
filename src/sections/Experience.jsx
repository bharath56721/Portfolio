import { motion } from 'framer-motion';
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi';
import { experience } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SectionHeader from '../components/SectionHeader';

const ExperienceCard = ({ item }) => (
  <motion.div
    variants={fadeInUp}
    className="glass-card rounded-2xl border border-accent-blue/25 bg-accent-blue/5 overflow-hidden"
  >
    <div className="h-1.5 w-full bg-gradient-to-r from-accent-blue to-accent-violet" />
    <div className="p-6 md:p-8">
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center flex-shrink-0">
            <HiBriefcase className="text-accent-blue" size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">{item.role}</h3>
            <p className="text-text-secondary text-sm">
              {item.company} · {item.location}
            </p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-blue/15 text-accent-blue border border-accent-blue/25">
          {item.period}
        </span>
      </div>

      <ul className="space-y-3 mb-6">
        {item.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
            <HiCheckCircle className="text-accent-blue mt-0.5 flex-shrink-0" size={15} />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const { ref, inView } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="Experience"
            title="Where I've worked."
            subtitle="Hands-on internship building secured, production-style full-stack applications."
          />
          <div className="flex flex-col gap-6">
            {experience.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
