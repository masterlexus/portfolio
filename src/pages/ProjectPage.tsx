import type { ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import BlogPost from '../components/blog/BlogPost';
import { fadeInUp, staggerContainer } from '../components/ui/animations';
import { profile } from '../data/profile';
import { getRawProject } from '../data/projects';

function BackLink() {
  return (
    <Link
      to="/#work"
      className="inline-flex items-center gap-1.5 text-sm text-textMuted transition-colors hover:text-accent"
    >
      <FiArrowLeft size={14} aria-hidden="true" /> Back to work
    </Link>
  );
}

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <dt className="text-xs text-textMuted">{label}</dt>
      <dd className="mt-1 text-sm text-textPrimary">{children}</dd>
    </div>
  );
}

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = profile.projects.find((p) => p.id === id);
  const raw = id ? getRawProject(id) : undefined;

  if (!project || !raw) {
    return (
      <main className="mx-auto max-w-content px-5 py-24 sm:px-6">
        <title>Project not found | Alex Orri Ingvarsson</title>
        <h1 className="text-h2 text-textPrimary">Project not found</h1>
        <p className="mb-8 mt-3 text-textMuted">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <BackLink />
      </main>
    );
  }

  const year = project.yearEnd
    ? `${project.year} - ${project.yearEnd}`
    : `${project.year}`;

  return (
    <>
      <title>{`${project.title} | Alex Orri Ingvarsson`}</title>
      <meta property="og:title" content={project.title} />
      <meta property="og:description" content={project.description} />
      <meta property="og:type" content="article" />

      <main>
        <motion.article
          className="mx-auto max-w-content px-5 pb-24 pt-10 sm:px-6 md:pt-14"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <BackLink />
          </motion.div>

          <motion.header variants={fadeInUp} className="mt-10">
            <h1 className="max-w-[820px] text-[34px] font-medium leading-[1.1] tracking-[-0.02em] text-textPrimary md:text-h1">
              {project.title}
            </h1>
            <p className="mt-3 max-w-prose text-lg text-textMuted">
              {project.description}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border py-5 md:grid-cols-[repeat(4,minmax(0,auto))_minmax(0,1fr)] md:gap-x-10">
              <Meta label="Context">{project.contextLabel}</Meta>
              <Meta label="Year">
                <span className="font-mono text-[13px]">{year}</span>
              </Meta>
              {project.role && <Meta label="Role">{project.role}</Meta>}
              {project.codeUrl && (
                <Meta label="Code">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    Source <FiArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </Meta>
              )}
              <div className="col-span-2 min-w-0 md:col-span-1">
                <Meta label="Stack">
                  <span className="font-mono text-xs leading-relaxed text-textSecondary">
                    {project.technologies.join(' / ')}
                  </span>
                </Meta>
              </div>
            </dl>
          </motion.header>

          <motion.div variants={fadeInUp} className="mt-12">
            <BlogPost content={raw} />
          </motion.div>
        </motion.article>
      </main>
    </>
  );
}
