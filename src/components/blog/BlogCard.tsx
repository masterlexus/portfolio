import { Link } from 'react-router-dom';
import GlowCard from '../ui/GlowCard';
import Tag from '../ui/Tag';
import type { BlogPostMeta } from '../../types';

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <GlowCard className="flex h-full flex-col">
        <p className="mb-2 font-mono text-xs text-textMuted">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}{' '}
          &middot; {post.readingTime}
        </p>

        <h3 className="mb-2 text-lg font-semibold text-textPrimary">
          {post.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-textSecondary">
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </GlowCard>
    </Link>
  );
}
