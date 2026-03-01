import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import Section from '../layout/Section';
import GlowCard from '../ui/GlowCard';
import Tag from '../ui/Tag';
import { fadeInUp, staggerContainer } from '../ui/animations';
import { profile } from '../../data/profile';

export default function Projects() {
  return (
    <Section id="projects" title="projects">
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {profile.projects.map((project) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <GlowCard className="flex h-full flex-col">
              <div className="mb-1 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-textPrimary">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0 text-textMuted transition-all hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent-glow)]"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className="mb-2 font-mono text-xs text-textMuted">
                {project.subtitle}
              </p>

              <p className="mb-3 text-sm text-textSecondary">
                {project.description}
              </p>

              <ul className="mb-4 space-y-1 text-sm text-textSecondary">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
