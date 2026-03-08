import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import BlogPost from '../components/blog/BlogPost';
import Tag from '../components/ui/Tag';
import { fadeInUp, staggerContainer } from '../components/ui/animations';
import { profile } from '../data/profile';
import { getRawProject } from '../data/projects';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = profile.projects.find((p) => p.id === id);
  const raw = id ? getRawProject(id) : undefined;

  if (!project || !raw) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-[700px] px-4 py-24 text-center sm:px-6">
          <h1 className="mb-4 font-mono text-2xl font-bold text-textPrimary">
            Project not found
          </h1>
          <p className="mb-8 text-textSecondary">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            to="/#projects"
            className="font-mono text-sm text-accent transition-colors hover:underline"
          >
            &larr; Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const words = raw.trim().split(/\s+/).length;
  const readingTime = `${Math.ceil(words / 200)} min read`;

  return (
    <>
      <title>{project.title} | Alex Orri Ingvarsson</title>
      <meta property="og:title" content={project.title} />
      <meta property="og:description" content={project.description} />
      <meta property="og:type" content="article" />

      <main className="min-h-screen">
        <motion.article
          className="mx-auto max-w-[700px] px-4 py-16 sm:px-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <Link
              to="/#projects"
              className="mb-8 inline-block font-mono text-sm text-accent transition-colors hover:underline"
            >
              &larr; Back to projects
            </Link>
          </motion.div>

          <motion.header className="mb-10" variants={fadeInUp}>
            <h1 className="mb-2 font-mono text-3xl font-bold leading-tight text-textPrimary md:text-4xl">
              {project.title}
            </h1>

            <p className="mb-4 font-mono text-sm text-textMuted">
              {project.subtitle}
            </p>

            <div className="mb-4 flex items-center gap-3 font-mono text-sm text-textMuted">
              <span>{readingTime}</span>
              {project.link && (
                <>
                  <span>&middot;</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent transition-colors hover:underline"
                  >
                    View project <FiExternalLink size={14} />
                  </a>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </motion.header>

          <motion.div variants={fadeInUp}>
            <BlogPost content={raw} />
          </motion.div>
        </motion.article>
      </main>
    </>
  );
}
