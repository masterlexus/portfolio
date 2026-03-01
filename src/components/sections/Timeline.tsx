import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import type { Variants } from 'framer-motion';
import Section from '../layout/Section';
import Tag from '../ui/Tag';
import { profile } from '../../data/profile';
import { fadeInUp, prefersReducedMotion } from '../ui/animations';

const cardLeft: Variants = {
  hidden: prefersReducedMotion ? {} : { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: 'easeOut' },
  },
};

const cardRight: Variants = {
  hidden: prefersReducedMotion ? {} : { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: 'easeOut' },
  },
};

const typeBadgeStyles: Record<string, string> = {
  work: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  education: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  project: 'bg-violet-500/10 text-violet-500 border-violet-500/20',
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const spineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const entries = profile.timeline;

  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <Section id="timeline" title="timeline">
      <div ref={containerRef} className="relative">
        {/* Desktop spine */}
        <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
          <div className="h-full w-0.5 bg-bgTertiary" />
          <motion.div
            className="absolute left-0 top-0 w-0.5 bg-accent"
            style={{
              height: spineHeight,
              boxShadow: '0 0 8px var(--accent-glow)',
            }}
          />
        </div>

        {/* Mobile spine */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-accent md:hidden" />

        <div className="relative">
          {entries.map((entry, i) => {
            const showYear =
              i === 0 || entries[i - 1].year !== entry.year;
            const isLeft = i % 2 === 0;

            return (
              <div key={entry.id}>
                {/* Year marker */}
                {showYear && (
                  <div className="relative mb-6 mt-2 first:mt-0">
                    {/* Desktop year marker */}
                    <div className="hidden md:flex md:justify-center">
                      <span className="relative z-10 bg-bgPrimary px-4 font-mono text-lg font-bold text-accent">
                        {entry.year}
                      </span>
                    </div>
                    {/* Mobile year marker */}
                    <div className="pl-6 md:hidden">
                      <span className="relative z-10 -ml-[calc(0.75rem+1px)] bg-bgPrimary pr-3 font-mono text-lg font-bold text-accent">
                        {entry.year}
                      </span>
                    </div>
                  </div>
                )}

                {/* Timeline entry */}
                <div className="relative mb-10 last:mb-0">
                  {/* Desktop connector dot */}
                  <div className="absolute left-1/2 top-6 z-10 hidden -translate-x-1/2 md:block">
                    <div
                      className="h-3 w-3 rounded-full bg-accent"
                      style={{ boxShadow: '0 0 8px var(--accent-glow)' }}
                    />
                  </div>

                  {/* Mobile connector dot */}
                  <div className="absolute -left-[5px] top-6 z-10 md:hidden">
                    <div
                      className="h-3 w-3 rounded-full bg-accent"
                      style={{ boxShadow: '0 0 8px var(--accent-glow)' }}
                    />
                  </div>

                  {/* Desktop grid layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_3rem_1fr]">
                    {isLeft ? (
                      <>
                        <motion.div
                          className="pr-8"
                          variants={cardLeft}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: '-50px' }}
                        >
                          <TimelineCard
                            entry={entry}
                            expanded={expanded.has(entry.id)}
                            onToggle={() => toggleExpand(entry.id)}
                            align="right"
                          />
                        </motion.div>
                        <div />
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div />
                        <motion.div
                          className="pl-8"
                          variants={cardRight}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: '-50px' }}
                        >
                          <TimelineCard
                            entry={entry}
                            expanded={expanded.has(entry.id)}
                            onToggle={() => toggleExpand(entry.id)}
                            align="left"
                          />
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <motion.div
                    className="pl-6 md:hidden"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                  >
                    <TimelineCard
                      entry={entry}
                      expanded={expanded.has(entry.id)}
                      onToggle={() => toggleExpand(entry.id)}
                      align="left"
                    />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

interface TimelineCardProps {
  entry: (typeof profile.timeline)[number];
  expanded: boolean;
  onToggle: () => void;
  align: 'left' | 'right';
}

function TimelineCard({ entry, expanded, onToggle, align }: TimelineCardProps) {
  const visibleBullets = entry.bullets.slice(0, 3);
  const hiddenBullets = entry.bullets.slice(3);
  const hasMore = hiddenBullets.length > 0;

  return (
    <div
      className={`rounded-lg border border-border bg-bgSecondary mb-5 p-5 ${align === 'right' ? 'text-right' : 'text-left'}`}
    >
      <div
        className={`mb-2 flex items-center gap-2 ${align === 'right' ? 'flex-row-reverse' : ''}`}
      >
        <span className="font-mono text-xs text-textMuted">
          {entry.startDate} — {entry.endDate}
        </span>
        <span
          className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${typeBadgeStyles[entry.type]}`}
        >
          {entry.type}
        </span>
      </div>

      <h3 className="font-semibold text-textPrimary">{entry.title}</h3>
      <p className="text-accent">{entry.organization}</p>
      <p className="mb-3 text-xs text-textMuted">{entry.location}</p>

      <p className="mb-3 text-sm text-textSecondary">{entry.description}</p>

      <ul
        className={`mb-3 space-y-1 text-sm text-textSecondary ${align === 'right' ? 'text-right' : 'text-left'}`}
      >
        {visibleBullets.map((b, j) => (
          <li key={j} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {hasMore && expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-3 space-y-1 overflow-hidden text-sm text-textSecondary"
          >
            {hiddenBullets.map((b, j) => (
              <li key={j} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{b}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {hasMore && (
        <button
          onClick={onToggle}
          className="mb-3 font-mono text-xs text-accent transition-colors hover:text-accent/80"
        >
          {expanded
            ? '− show less'
            : `+ ${hiddenBullets.length} more`}
        </button>
      )}

      {entry.technologies && entry.technologies.length > 0 && (
        <div
          className={`flex flex-wrap gap-1.5 ${align === 'right' ? 'justify-end' : ''}`}
        >
          {entry.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      )}
    </div>
  );
}
