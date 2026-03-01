import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { profile } from '../../data/profile';
import { fadeInUp } from '../ui/animations';
import Cursor from '../ui/Cursor';
import Button from '../ui/Button';

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <motion.div
        className="mx-auto max-w-[1100px] px-6"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-4 font-mono text-accent flex gap-1 items-center"
        >
          {'> hello world'} <Cursor />
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mb-4 font-mono text-[2.5rem] font-bold leading-tight md:text-[3.5rem]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mb-2 text-xl text-textSecondary"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mb-8 text-textMuted"
        >
          Currently on exchange at Imperial College London, studying Computer
          Science at EPFL.
        </motion.p>

        <motion.div variants={fadeInUp} className="mb-8 flex flex-wrap gap-4">
          <Button
            variant="primary"
            href="#projects"
            icon={<FiArrowDown className="h-4 w-4" />}
          >
            View my work
          </Button>
          <Button
            variant="secondary"
            href="/alex-cv.pdf"
            download
            icon={<FiDownload className="h-4 w-4" />}
          >
            Download CV
          </Button>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-textSecondary transition-all hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent-glow)]"
          >
            <FiGithub className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-textSecondary transition-all hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent-glow)]"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-textSecondary transition-all hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent-glow)]"
          >
            <FiMail className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
