import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';
import { blogPosts } from '../../data/blog';

const linkClass = 'text-textMuted transition-colors hover:text-accent';

export default function Footer() {
  const latestPost = blogPosts[0];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-3 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-textMuted">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
          </li>
          {latestPost && (
            <li>
              <Link to={`/blog/${latestPost.slug}`} className={linkClass}>
                Writing
              </Link>
            </li>
          )}
          <li>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className={linkClass}>
              CV
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
