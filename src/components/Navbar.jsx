import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-surface-border'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center text-white font-mono font-bold text-sm transition-all duration-300 group-hover:shadow-glow-blue">
                BG
              </div>
              <span className="hidden sm:block font-semibold text-text-primary text-sm">
                Bharath<span className="text-accent-blue">.</span>
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`relative px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-accent-blue'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 bg-accent-blue/10 rounded-lg border border-accent-blue/20"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                download
                className="px-4 py-1.5 text-sm font-medium rounded-lg border border-accent-blue/40 text-accent-blue hover:bg-accent-blue/10 hover:border-accent-blue transition-all duration-200"
              >
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-border/50 transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 inset-x-0 z-40 bg-bg-secondary/95 backdrop-blur-xl border-b border-surface-border md:hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-border/40 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download
                className="mt-2 text-center px-4 py-3 text-sm font-medium rounded-lg bg-accent-blue/10 border border-accent-blue/30 text-accent-blue"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
