import { motion } from 'framer-motion';
import Section from '../layout/Section';
import BlogCard from '../blog/BlogCard';
import { fadeInUp, staggerContainer } from '../ui/animations';
import { blogPosts } from '../../data/blog';

export default function Blog() {
  const latestPosts = blogPosts.slice(0, 3);

  if (latestPosts.length === 0) {
    return (
      <Section id="blog" title="blog">
        <p className="text-textSecondary">
          Coming soon — thoughts on systems, AI, and building things.
        </p>
      </Section>
    );
  }

  return (
    <Section id="blog" title="blog">
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {latestPosts.map((post) => (
          <motion.div key={post.slug} variants={fadeInUp}>
            <BlogCard post={post} />
          </motion.div>
        ))}
      </motion.div>

      {blogPosts.length > 3 && (
        <motion.div
          className="mt-8 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href="/blog"
            className="font-mono text-sm text-accent transition-colors hover:underline"
          >
            View all posts &rarr;
          </a>
        </motion.div>
      )}
    </Section>
  );
}
