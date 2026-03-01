import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogPost from '../components/blog/BlogPost';
import Tag from '../components/ui/Tag';
import { fadeInUp, staggerContainer } from '../components/ui/animations';
import { blogPosts, getRawPost, parseFrontmatter } from '../data/blog';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const raw = slug ? getRawPost(slug) : undefined;
  const meta = blogPosts.find((p) => p.slug === slug);

  if (!raw || !meta) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-[700px] px-4 sm:px-6 py-24 text-center">
          <h1 className="mb-4 font-mono text-2xl font-bold text-textPrimary">
            Post not found
          </h1>
          <p className="mb-8 text-textSecondary">
            The post you're looking for doesn't exist.
          </p>
          <Link
            to="/#blog"
            className="font-mono text-sm text-accent transition-colors hover:underline"
          >
            &larr; Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const { content } = parseFrontmatter(raw);

  return (
    <>
      <title>{meta.title} | Alex Orri Ingvarsson</title>
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.excerpt} />
      <meta property="og:type" content="article" />

      <main className="min-h-screen">
        <motion.article
          className="mx-auto max-w-[700px] px-4 sm:px-6 py-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <Link
              to="/#blog"
              className="mb-8 inline-block font-mono text-sm text-accent transition-colors hover:underline"
            >
              &larr; Back to blog
            </Link>
          </motion.div>

          <motion.header className="mb-10" variants={fadeInUp}>
            <h1 className="mb-4 font-mono text-3xl font-bold leading-tight text-textPrimary md:text-4xl">
              {meta.title}
            </h1>

            <div className="mb-4 flex items-center gap-3 font-mono text-sm text-textMuted">
              <time>
                {new Date(meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>&middot;</span>
              <span>{meta.readingTime}</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {meta.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </motion.header>

          <motion.div variants={fadeInUp}>
            <BlogPost content={content} />
          </motion.div>
        </motion.article>
      </main>
    </>
  );
}
