import { motion } from 'framer-motion';
import { HiAcademicCap, HiCode, HiBeaker, HiStar } from 'react-icons/hi';
import { achievements, certifications } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SectionHeader from '../components/SectionHeader';

const iconMap = {
  academic: HiAcademicCap,
  api: HiCode,
  test: HiBeaker,
  cert: HiStar,
};

const colorMap = {
  academic: {
    bg: 'bg-accent-blue/15',
    text: 'text-accent-blue',
    border: 'border-accent-blue/25',
    gradient: 'from-accent-blue to-accent-violet',
  },
  api: {
    bg: 'bg-accent-cyan/15',
    text: 'text-accent-cyan',
    border: 'border-accent-cyan/25',
    gradient: 'from-accent-cyan to-accent-blue',
  },
  test: {
    bg: 'bg-green-500/15',
    text: 'text-green-400',
    border: 'border-green-500/25',
    gradient: 'from-green-400 to-accent-cyan',
  },
  cert: {
    bg: 'bg-accent-violet/15',
    text: 'text-accent-violet',
    border: 'border-accent-violet/25',
    gradient: 'from-accent-violet to-accent-blue',
  },
};

const AchievementCard = ({ achievement, index }) => {
  const Icon = iconMap[achievement.icon] || HiStar;
  const colors = colorMap[achievement.icon] || colorMap.cert;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="glass-card rounded-2xl border border-surface-border overflow-hidden group hover:border-surface-muted transition-all duration-300"
    >
      {/* Top accent line */}
      <div className={`h-px w-full bg-gradient-to-r ${colors.gradient}`} />

      <div className="p-6">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
          <Icon className={colors.text} size={20} />
        </div>

        {/* Metric */}
        <div className="mb-1">
          <span className={`text-4xl font-bold font-mono ${colors.text}`}>{achievement.metric}</span>
          {achievement.unit && (
            <span className="text-text-muted text-sm font-mono ml-2">{achievement.unit}</span>
          )}
        </div>

        <h3 className="font-semibold text-text-primary text-sm mb-2">{achievement.label}</h3>
        <p className="text-text-muted text-xs leading-relaxed">{achievement.description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const { ref, inView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="Achievements"
            title="Numbers that matter."
            subtitle="Concrete outcomes from deliberate effort — from academic excellence to production-grade test coverage."
          />

          {/* Metric cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {achievements.map((a, i) => (
              <AchievementCard key={a.id} achievement={a} index={i} />
            ))}
          </div>

          {/* Horizontal cert strip */}
          <motion.div
            variants={fadeInUp}
            className="glass-card rounded-2xl border border-surface-border p-6"
          >
            <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-5">Certifications earned</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-start gap-3 p-3 rounded-xl bg-surface-border/30 border border-surface-border/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-violet/15 border border-accent-violet/25 flex items-center justify-center flex-shrink-0">
                    <HiStar className="text-accent-violet" size={14} />
                  </div>
                  <div>
                    <p className="text-text-primary text-xs font-medium leading-tight mb-0.5">{cert.title}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-text-muted text-xs font-mono">{cert.issuer}</span>
                      <span className="text-accent-blue text-xs font-mono">· {cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
