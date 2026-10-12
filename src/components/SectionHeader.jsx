import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

/**
 * Consistent section heading used across all major sections.
 * eyebrow: small label above the title (e.g. "03 / Projects")
 * title: main heading
 * subtitle: optional supporting text below
 */
const SectionHeader = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className="font-mono text-xs text-accent-blue tracking-widest uppercase"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-text-primary leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`text-text-secondary leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
