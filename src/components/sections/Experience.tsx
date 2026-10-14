import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { profile } from '../../data/profile';
import { hasProjectPage } from '../../data/projects';
import type { ExperienceEntry } from '../../types';
import { useExperienceFocus } from '../../hooks/useExperienceFocus';
import { formatRange, toMonthIndex } from '../../lib/dates';
import { prefersReducedMotion } from '../ui/animations';
import Section from '../layout/Section';

const entries = [...profile.experience].sort(
  (a, b) => toMonthIndex(b.start) - toMonthIndex(a.start),
);

function Row({ entry }: { entry: ExperienceEntry }) {
  const { hoveredId, openIds, setHovered, toggleOpen } = useExperienceFocus();
  const isOpen = openIds.includes(entry.id);
  const highlighted = hoveredId === entry.id;
  const panelId = `exp-panel-${entry.id}`;
  const projects = (entry.projectIds ?? [])
    .map((id) => profile.projects.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  return (
    <li
      id={`exp-${entry.id}`}
      className="scroll-mt-24 border-b border-border"
      onMouseEnter={() => setHovered(entry.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => toggleOpen(entry.id)}
        onFocus={(e) => e.currentTarget.matches(':focus-visible') && setHovered(entry.id)}
        onBlur={() => setHovered(null)}
        className={`-mx-3 grid w-[calc(100%+1.5rem)] grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 rounded-lg px-3 py-4 text-left transition-colors md:grid-cols-[150px_minmax(0,1.2fr)_minmax(0,1fr)_170px_16px] md:items-baseline ${
          highlighted ? 'bg-surface' : ''
        }`}
      >
        <span className="order-1 col-span-2 font-mono text-xs text-textMuted md:order-none md:col-span-1">
          {formatRange(entry.start, entry.end)}
        </span>
        <span className="order-2 text-[15px] font-medium text-textPrimary md:order-none">
          {entry.title}
        </span>
        <span className="order-4 col-span-2 text-sm text-textMuted md:order-none md:col-span-1">
          {entry.organization}
          {entry.grade && (
            <span className="ml-2 font-mono text-xs">{entry.grade}</span>
          )}
        </span>
        <span className="order-5 col-span-2 text-sm text-textMuted md:order-none md:col-span-1">
          {entry.location}
        </span>
        <FiChevronDown
          size={16}
          aria-hidden="true"
          className={`order-3 self-center text-textMuted transition-transform duration-200 md:order-none ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-1 md:ml-[166px] md:max-w-[680px]">
              {entry.bullets.length > 0 && (
                <ul className="space-y-1.5 text-[15px] leading-relaxed text-textSecondary">
                  {entry.bullets.map((b) => (
                    <li key={b} className="relative pl-4">
                      <span
                        className="absolute left-0 top-[0.7em] h-px w-2 bg-textMuted"
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {entry.technologies && entry.technologies.length > 0 && (
                <p className="mt-4 font-mono text-xs leading-relaxed text-textMuted">
                  {entry.technologies.join(' / ')}
                </p>
              )}

              {entry.coursework && entry.coursework.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs text-textMuted">Selected coursework</p>
                  <p className="mt-1 text-sm text-textSecondary">
                    {entry.coursework.join(', ')}
                  </p>
                </div>
              )}

              {projects.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs text-textMuted">Projects</p>
                  <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
                    {projects.map((p) =>
                      hasProjectPage(p.id) ? (
                        <li key={p.id}>
                          <Link
                            to={`/project/${p.id}`}
                            className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                          >
                            {p.title}
                            <FiArrowRight size={12} aria-hidden="true" />
                          </Link>
                        </li>
                      ) : (
                        <li key={p.id} className="text-sm text-textSecondary">
                          {p.title}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="border-t border-border">
        {entries.map((entry) => (
          <Row key={entry.id} entry={entry} />
        ))}
      </ul>
    </Section>
  );
}
