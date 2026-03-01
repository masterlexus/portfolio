import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../../data/profile';

const socialLinks = [
  { href: profile.github, icon: FiGithub, label: 'GitHub' },
  { href: profile.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: `mailto:${profile.email}`, icon: FiMail, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-textMuted">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textMuted transition-colors hover:text-accent"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
