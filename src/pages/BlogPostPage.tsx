import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import BlogPost from '../components/blog/BlogPost';
import { fadeInUp, staggerContainer } from '../components/ui/animations';
import { blogPosts, getRawPost, parseFrontmatter } from '../data/blog';

function BackLink() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-1.5 text-sm text-textMuted transition-colors hover:text-accent"
    >
      <FiArrowLeft size={14} aria-hidden="true" /> Home
    </Link>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const raw = slug ? getRawPost(slug) : undefined;
  const meta = blogPosts.find((p) => p.slug === slug);

  if (!raw || !meta) {
    return (
      <main className="mx-auto max-w-content px-5 py-24 sm:px-6">
        <title>Post not found | Alex Orri Ingvarsson</title>
        <h1 className="text-h2 text-textPrimary">Post not found</h1>
        <p className="mb-8 mt-3 text-textMuted">
          The post you&apos;re looking for doesn&apos;t exist.
        </p>
        <BackLink />
      </main>
    );
  }

  const { content } = parseFrontmatter(raw);

  return (
    <>
      <title>{`${meta.title} | Alex Orri Ingvarsson`}</title>
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.excerpt} />
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

          <motion.header className="mt-10 max-w-prose" variants={fadeInUp}>
            <h1 className="text-[34px] font-medium leading-[1.1] tracking-[-0.02em] text-textPrimary md:text-h1">
              {meta.title}
            </h1>
            <p className="mt-4 font-mono text-xs text-textMuted">
              {new Date(meta.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
              {' / '}
              {meta.readingTime}
              {meta.tags.length > 0 && ` / ${meta.tags.join(', ')}`}
            </p>
          </motion.header>

          <motion.div className="mt-12" variants={fadeInUp}>
            <BlogPost content={content} />
          </motion.div>
        </motion.article>
      </main>
    </>
  );
}
