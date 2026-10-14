import type { Variants } from 'framer-motion';

export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Subtle fade + 8px rise. Collapses to an instant state change under reduced motion. */
export const fadeInUp: Variants = {
  hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: prefersReducedMotion ? 0 : 0.06 },
  },
};
