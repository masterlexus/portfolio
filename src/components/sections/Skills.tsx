import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Tag from '../ui/Tag';
import { fadeInUp, staggerContainer } from '../ui/animations';
import { profile } from '../../data/profile';

export default function Skills() {
  return (
    <Section id="skills" title="skills">
      <motion.div
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {profile.skillCategories.map((category) => (
          <motion.div
            key={category.name}
            className="flex flex-col gap-3 md:flex-row md:items-baseline"
            variants={fadeInUp}
          >
            <span className="font-mono text-sm font-medium text-accent md:w-48 md:shrink-0 md:text-right">
              {category.name}
            </span>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
