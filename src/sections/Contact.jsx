import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiMail, HiPhone, HiLocationMarker,
  HiArrowRight, HiCheckCircle, HiExclamationCircle,
} from 'react-icons/hi';
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import SectionHeader from '../components/SectionHeader';

const ContactInfo = () => (
  <motion.div variants={fadeInLeft} className="flex flex-col gap-5">
    <div className="glass-card rounded-2xl p-6 border border-surface-border">
      <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-5">Direct contact</p>
      <div className="space-y-4">
        {[
          { icon: HiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
          { icon: HiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
          { icon: HiLocationMarker, label: 'Location', value: personalInfo.location, href: null },
        ].map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-lg bg-surface-border/60 flex items-center justify-center flex-shrink-0">
              <Icon className="text-text-secondary" size={16} />
            </div>
            <div>
              <p className="text-text-muted text-xs mb-0.5">{label}</p>
              {href ? (
                <a
                  href={href}
                  className="text-text-primary text-sm font-medium hover:text-accent-blue transition-colors duration-200"
                >
                  {value}
                </a>
              ) : (
                <p className="text-text-primary text-sm font-medium">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="glass-card rounded-2xl p-6 border border-surface-border">
      <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">Find me online</p>
      <div className="space-y-3">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-surface-border/30 hover:bg-surface-border/60 transition-all duration-200 group"
        >
          <SiGithub className="text-text-secondary group-hover:text-text-primary transition-colors" size={18} />
          <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">
            {personalInfo.github.replace('https://', '')}
          </span>
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-surface-border/30 hover:bg-accent-blue/10 transition-all duration-200 group"
        >
          <FaLinkedinIn className="text-text-secondary group-hover:text-accent-blue transition-colors" size={18} />
          <span className="text-text-secondary text-sm group-hover:text-accent-blue transition-colors">
            {personalInfo.linkedin.replace('https://', '')}
          </span>
        </a>
      </div>
    </div>

    <div className="glass-card rounded-2xl p-5 border border-accent-blue/20 bg-accent-blue/5">
      <p className="text-accent-blue text-xs font-mono font-medium mb-1">Currently available</p>
      <p className="text-text-secondary text-sm">
        Open to full-time roles starting <span className="text-text-primary font-medium">June 2026</span>. Java Developer · Backend Engineer · Software Engineer
      </p>
    </div>
  </motion.div>
);

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate sending (no backend — open mailto as fallback)
    await new Promise((res) => setTimeout(res, 1000));
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`Hi Bharath,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const inputClass =
    'w-full bg-bg-card border border-surface-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-blue/50 focus:bg-bg-hover transition-all duration-200';

  return (
    <motion.form
      variants={fadeInRight}
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl border border-surface-border p-6 md:p-8 flex flex-col gap-4"
    >
      <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2">Send a message</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-text-muted text-xs mb-1.5 block">Your Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-text-muted text-xs mb-1.5 block">Your Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="text-text-muted text-xs mb-1.5 block">Subject</label>
        <input
          type="text"
          name="subject"
          required
          placeholder="Java Developer Opportunity at Acme Corp"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="text-text-muted text-xs mb-1.5 block">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Hi Bharath, I came across your portfolio and would like to discuss..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
          status === 'success'
            ? 'bg-green-500/15 border border-green-500/30 text-green-400 cursor-default'
            : status === 'loading'
            ? 'bg-accent-blue/50 text-white cursor-wait'
            : 'bg-gradient-to-r from-accent-blue to-accent-violet text-white hover:shadow-glow-blue hover:scale-[1.01] active:scale-[0.99]'
        }`}
      >
        {status === 'success' ? (
          <>
            <HiCheckCircle size={16} />
            Message sent — opening your mail client
          </>
        ) : status === 'loading' ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <HiArrowRight size={16} />
          </>
        )}
      </button>
    </motion.form>
  );
};

const Contact = () => {
  const { ref, inView } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-bg-secondary/40">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something together."
            subtitle="Whether you have a role to fill, a project to discuss, or just want to connect — my inbox is open."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
