import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ui/ThemeToggle';
import { profile } from '../../data/profile';

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the compact menu on Escape or outside click
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setMenuOpen(false);
      if (isHome) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', `#${id}`);
      } else {
        navigate(`/#${id}`);
      }
    },
    [isHome, navigate],
  );

  const linkClass =
    'rounded-md px-2.5 py-1.5 text-sm text-textMuted transition-colors hover:text-textPrimary';
  const pillClass =
    'rounded-full bg-btn px-3.5 py-1.5 text-sm font-medium text-btnText transition-opacity hover:opacity-85';

  return (
    <header
      ref={menuRef}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors ${
        scrolled || menuOpen ? 'border-border' : 'border-transparent'
      }`}
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg) 82%, transparent)',
      }}
    >
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-5 sm:px-6">
        <Link
          to="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-[15px] font-medium tracking-[-0.01em] text-textPrimary"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={linkClass}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`ml-2 ${pillClass}`}
          >
            Contact
          </a>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-textMuted transition-colors hover:text-textPrimary"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-border px-5 py-3 sm:hidden"
        >
          <ul className="flex flex-col">
            {[...navItems, { label: 'Contact', id: 'contact' }].map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block py-2.5 text-[15px] text-textPrimary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
