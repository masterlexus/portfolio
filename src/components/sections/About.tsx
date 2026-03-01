import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { fadeInUp, staggerContainer } from '../ui/animations';
import GlowCard from '../ui/GlowCard';
import Section from '../layout/Section';

const facts = [
  { label: 'Location', value: profile.location },
  { label: 'Education', value: 'EPFL / Imperial College London' },
  { label: 'Languages', value: 'Icelandic 🇮🇸 · English 🇬🇧 · French 🇫🇷' },
  { label: 'Interests', value: 'Tennis, Reading, Cooking' },
];

export default function About() {
  return (
    <Section id="about" title="about">
      <motion.div
        className="grid gap-10 md:grid-cols-[1fr_auto]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={fadeInUp} className="space-y-4">
          {profile.about.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-textSecondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlowCard className="md:w-72">
            <dl className="space-y-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-textMuted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-textPrimary">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </GlowCard>
        </motion.div>
      </motion.div>
    </Section>
  );
}
