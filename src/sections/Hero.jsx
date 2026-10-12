import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  SiGithub,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Floating ambient shape
const FloatingOrb = ({ className, delay = 0, size = 300, style = {} }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    style={{ width: size, height: size, ...style }}
    animate={{
      y: [0, -30, 0],
      scale: [1, 1.05, 1],
      opacity: [0.15, 0.25, 0.15],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

const Hero = () => {
  const handleContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Ambient background orbs */}
      <FloatingOrb
        className="bg-accent-blue"
        style={{ top: '10%', left: '15%' }}
        size={420}
        delay={0}
      />
      <FloatingOrb
        className="bg-accent-violet"
        style={{ top: '30%', right: '10%' }}
        size={320}
        delay={2}
      />
      <FloatingOrb
        className="bg-accent-cyan"
        style={{ bottom: '15%', left: '40%' }}
        size={260}
        delay={4}
      />

      {/* Top gradient */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />

      <div className="section-container relative z-10 pt-24 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
              {personalInfo.availability} · Open to Work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-text-primary leading-none tracking-tight mb-4"
          >
            {personalInfo.name.split(' ')[0]}{' '}
            <span className="gradient-text">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          {/* Role typing animation */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-text-secondary text-lg md:text-xl font-medium">I build</span>
            <span className="text-lg md:text-xl font-semibold text-accent-cyan font-mono">
              <TypeAnimation
                sequence={[
                  'scalable REST APIs.',
                  2000,
                  'Spring Boot backends.',
                  2000,
                  'clean Java systems.',
                  2000,
                  'TDD-driven services.',
                  2000,
                  'containerized apps.',
                  2000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          >
            Final-year ISE student specializing in{' '}
            <span className="text-text-primary font-medium">Java · Spring Boot · React.js · MySQL</span>
            {' '}with a focus on clean architecture, TDD, and production-ready systems.
            Graduating June 2026 — ready to ship real software on day one.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <button
              onClick={handleContact}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet text-white font-semibold text-sm hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in Touch
              <HiArrowRight size={16} />
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-muted bg-bg-card hover:bg-surface-border/30 font-semibold text-sm transition-all duration-200"
            >
              <HiDownload size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-1">
            <p className="text-text-muted text-xs font-mono mr-3">Find me on</p>
            {[
              { icon: SiGithub, href: personalInfo.github, label: 'GitHub' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-surface-border text-text-muted hover:text-text-primary hover:border-surface-muted hover:bg-surface-border/40 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating code snippet — decorative */}
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hidden lg:block glass-card rounded-2xl p-5 w-full shadow-card"
          >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-text-muted text-xs font-mono">Main.java</span>
          </div>
          <pre className="font-mono text-xs leading-relaxed text-text-secondary">
            <code>
              <span className="text-accent-violet">@RestController</span>{'\n'}
              <span className="text-accent-blue">public class</span>{' '}
              <span className="text-accent-cyan">Bharath</span> {'{'}{'\n'}
              {'  '}<span className="text-accent-violet">@GetMapping</span>
              <span className="text-text-muted">("/me")</span>{'\n'}
              {'  '}<span className="text-accent-blue">public</span>{' '}
              <span className="text-accent-cyan">Dev</span>{' '}getInfo() {'{'}{'\n'}
              {'    '}<span className="text-accent-blue">return new</span>{' '}
              <span className="text-accent-cyan">Dev</span>(){'\n'}
              {'      '}.role(<span className="text-green-400">"Full-Stack Java"</span>){'\n'}
              {'      '}.cgpa(<span className="text-yellow-400">7.75</span>){'\n'}
              {'      '}.status(<span className="text-green-400">"Open to Work"</span>);{'\n'}
              {'  }'}{'\n'}
              {'}'}
            </code>
          </pre>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-text-muted to-transparent"
        />
        <span className="text-text-muted text-[10px] font-mono tracking-widest uppercase">scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
