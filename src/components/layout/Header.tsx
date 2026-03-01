import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ui/ThemeToggle';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Timeline', id: 'timeline' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isHome = location.pathname === '/';

  // Close mobile menu on desktop breakpoint
  useEffect(() => {
    if (isDesktop) setMobileOpen(false);
  }, [isDesktop]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Scroll detection for header border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy via IntersectionObserver (homepage only)
  useEffect(() => {
    if (!isHome) return;

    const observers: IntersectionObserver[] = [];
    const ids = navItems.map((item) => item.id);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-20% 0px -70% 0px' },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      if (isHome) {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        e.preventDefault();
        navigate(`/#${id}`);
      }
      setMobileOpen(false);
    },
    [isHome, navigate],
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 h-16 backdrop-blur-md transition-[border-color] ${
        scrolled ? 'border-b border-border' : 'border-b border-transparent'
      }`}
      style={{
        backgroundColor:
          'color-mix(in srgb, var(--bg-primary) 80%, transparent)',
      }}
    >
      <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="font-mono text-xl font-bold text-accent">
          A.I.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                activeSection === item.id && isHome
                  ? 'text-accent'
                  : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-textSecondary transition-colors hover:text-accent"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col items-center justify-center gap-6 bg-bgPrimary md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-lg transition-colors ${
                  activeSection === item.id && isHome
                    ? 'text-accent'
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
