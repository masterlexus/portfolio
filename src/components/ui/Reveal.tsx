import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/** Fades content in with a small rise the first time it scrolls into view. */
export default function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
