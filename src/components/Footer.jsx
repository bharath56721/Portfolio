import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center">
              <span className="font-mono font-bold text-xs text-white">BG</span>
            </div>
            <p className="text-text-muted text-sm">
              © {year} <span className="text-text-secondary font-medium">Bharath G P</span>. Built with React + Framer Motion.
            </p>
          </div>

          {/* Right — socials */}
          <div className="flex items-center gap-2">
            {[
              { icon: SiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: MdEmail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-border/60 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
