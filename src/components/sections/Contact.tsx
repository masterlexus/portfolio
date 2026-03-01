import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Terminal from '../ui/Terminal';
import { fadeInUp, staggerContainer } from '../ui/animations';
import { profile } from '../../data/profile';

export default function Contact() {
  return (
    <Section id="contact" title="contact">
      <motion.div
        className="mx-auto max-w-xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div variants={fadeInUp}>
          <Terminal title="contact.ts">
            <p className="text-textMuted">{'{'}</p>
            <ContactLine
              label="email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactLine
              label="linkedin"
              value={profile.linkedin.replace('https://', '')}
              href={profile.linkedin}
              external
            />
            <ContactLine
              label="github"
              value={profile.github.replace('https://', '')}
              href={profile.github}
              external
            />
            <ContactLine label="location" value={profile.location} />
            <p className="text-textMuted">{'}'}</p>
          </Terminal>
        </motion.div>

      </motion.div>
    </Section>
  );
}

interface ContactLineProps {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

function ContactLine({ label, value, href, external }: ContactLineProps) {
  return (
    <p className="pl-6">
      <span className="text-accent">{label}</span>
      <span className="text-textMuted">: </span>
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-textPrimary transition-all hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent-glow)]"
        >
          &quot;{value}&quot;
        </a>
      ) : (
        <span className="text-textPrimary">&quot;{value}&quot;</span>
      )}
    </p>
  );
}
