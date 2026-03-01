import type { Variants } from 'framer-motion';

export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const fadeInUp: Variants = {
  hidden: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
  },
};

export const scaleIn: Variants = {
  hidden: prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.3 },
  },
};
