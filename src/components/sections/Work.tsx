import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { profile } from '../../data/profile';
import Section from '../layout/Section';

const featured = profile.projects.filter((p) => p.featured);

export default function Work() {
  return (
    <Section id="work" label="Selected work">
      <ol className="border-t border-border">
        {featured.map((project, i) => (
          <li key={project.id} className="border-b border-border">
            <Link
              to={`/project/${project.id}`}
              className="group -mx-3 grid grid-cols-[28px_minmax(0,1fr)_16px] items-baseline gap-x-3 rounded-lg px-3 py-4 transition-colors hover:bg-surface focus-visible:bg-surface md:grid-cols-[40px_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_16px] md:gap-x-4"
            >
              <span className="font-mono text-xs text-textMuted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0">
                <span className="block text-[17px] font-medium tracking-[-0.01em] text-textPrimary transition-colors group-hover:text-accent group-focus-visible:text-accent">
                  {project.title}
                </span>
                {/* One-line summary: always visible on touch layouts, revealed on hover/focus on desktop */}
                <span className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-200 md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus-visible:grid-rows-[1fr]">
                  <span className="overflow-hidden">
                    <span className="block pt-1 text-sm text-textMuted">
                      {project.summary}
                    </span>
                  </span>
                </span>
                <span className="mt-1 block text-sm text-textMuted md:hidden">
                  {project.contextLabel}
                  <span className="mt-0.5 block font-mono text-xs">
                    {project.technologies.slice(0, 2).join(' / ')}
                  </span>
                </span>
              </span>
              <span className="hidden text-sm text-textMuted md:block">
                {project.contextLabel}
              </span>
              <span className="hidden truncate font-mono text-xs text-textMuted md:block">
                {project.technologies.slice(0, 3).join(' / ')}
              </span>
              <FiArrowUpRight
                size={16}
                aria-hidden="true"
                className="self-center text-textMuted transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
