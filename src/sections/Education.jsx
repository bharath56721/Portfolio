import { motion } from 'framer-motion';
import { HiAcademicCap, HiCheckCircle, HiStar } from 'react-icons/hi';
import { education, certifications } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import SectionHeader from '../components/SectionHeader';

const EducationCard = ({ item, index }) => {
  const isFeatured = index === 0;

  return (
    <motion.div
      variants={fadeInUp}
      className={`relative flex gap-6 ${index < education.length - 1 ? 'pb-10' : ''}`}
    >
      {/* Timeline line */}
      {index < education.length - 1 && (
        <div className="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-surface-muted to-transparent" />
      )}

      {/* Timeline dot */}
      <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border ${
        isFeatured
          ? 'bg-accent-blue/15 border-accent-blue/40 text-accent-blue shadow-glow-blue'
          : 'bg-surface-border border-surface-muted text-text-muted'
      }`}>
        <HiAcademicCap size={18} />
      </div>

      {/* Content */}
      <div className={`flex-1 glass-card rounded-2xl p-5 border transition-all duration-300 ${
        isFeatured ? 'border-accent-blue/25 bg-accent-blue/5' : 'border-surface-border'
      }`}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className={`font-semibold ${isFeatured ? 'text-text-primary' : 'text-text-secondary'}`}>
              {item.degree}
            </h3>
            <p className="text-text-muted text-sm">{item.field}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className={`font-mono font-bold text-sm ${isFeatured ? 'text-accent-blue' : 'text-text-secondary'}`}>
              {item.score}
            </span>
            <p className="text-text-muted text-xs">{item.scoreLabel}</p>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-1">{item.institution}</p>
        <div className="flex items-center justify-between">
          <p className="text-text-muted text-xs font-mono">{item.location}</p>
          <div className="flex items-center gap-2">
            {isFeatured && (
              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-accent-blue/15 text-accent-blue border border-accent-blue/25">
                {item.status}
              </span>
            )}
            <span className="text-text-muted text-xs font-mono">{item.period}</span>
          </div>
        </div>

        {item.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                <HiCheckCircle className="text-accent-blue mt-0.5 flex-shrink-0" size={13} />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const CertCard = ({ cert }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -3 }}
    transition={{ duration: 0.25 }}
    className="glass-card gradient-border rounded-xl p-4 border border-surface-border flex items-start gap-3"
  >
    <div className="w-9 h-9 rounded-lg bg-accent-violet/15 border border-accent-violet/25 flex items-center justify-center flex-shrink-0">
      <HiStar className="text-accent-violet" size={16} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-medium text-text-primary text-sm leading-tight mb-1">{cert.title}</p>
      <div className="flex items-center justify-between">
        <span className="text-text-muted text-xs font-mono">{cert.issuer}</span>
        <span className="text-accent-blue text-xs font-mono">{cert.year}</span>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const { ref, inView } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="education" className="py-24 md:py-32 relative bg-bg-secondary/40">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="Education"
            title="Academic background."
            subtitle="A strong academic foundation underpins every engineering decision I make."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <motion.div variants={fadeInLeft}>
              <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-6">Degrees</p>
              <div>
                {education.map((item, i) => (
                  <EducationCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeInRight}>
              <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-6">Certifications</p>
              <div className="flex flex-col gap-3 mb-8">
                {certifications.map((cert) => (
                  <CertCard key={cert.id} cert={cert} />
                ))}
              </div>

              {/* Learning philosophy note */}
              <div className="glass-card rounded-2xl p-5 border border-accent-cyan/20 bg-accent-cyan/5">
                <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2">Philosophy</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  I pair every certification with a real project. NPTEL's DSA course → applied in Spring Boot service-layer logic. SQL Bootcamp → production MySQL queries in the Inventory System. Learning without building is noise.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
