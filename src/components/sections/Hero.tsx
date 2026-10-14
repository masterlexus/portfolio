import { motion } from 'framer-motion';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import {
  profile,
  HEADSHOT_INITIALS,
  HEADSHOT_SRCSET,
  BANNER_SRCSET,
} from '../../data/profile';
import { fadeInUp, staggerContainer } from '../ui/animations';
import Button from '../ui/Button';
import FallbackImage from '../ui/FallbackImage';

function BannerPlaceholder() {
  return (
    <div className="absolute inset-0 bg-ice" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 2100 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 620 L260 470 L420 540 L640 330 L820 450 L1010 280 L1220 430 L1420 360 L1640 500 L1860 400 L2100 520"
          stroke="var(--ice-line)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 720 L300 610 L520 660 L760 520 L980 600 L1200 500 L1460 580 L1700 540 L2100 640"
          stroke="var(--ice-line)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function HeadshotPlaceholder() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-surface text-xl font-medium tracking-[-0.02em] text-textMuted md:text-2xl"
      aria-hidden="true"
    >
      {HEADSHOT_INITIALS}
    </div>
  );
}

export default function Hero() {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Full-bleed banner: sits outside the content container, directly under the nav. */}
        <motion.div variants={fadeInUp} className="relative">
          <div className="relative h-[clamp(200px,42.86vw,460px)] w-full overflow-hidden">
            <FallbackImage
              src={profile.bannerSrc}
              srcSet={BANNER_SRCSET}
              sizes="100vw"
              width={2400}
              height={1028}
              loading="eager"
              fetchPriority="high"
              alt=""
              className="h-full w-full object-cover object-[50%_58%] dark:brightness-[0.9]"
              placeholder={<BannerPlaceholder />}
            />
          </div>
          {/* Headshot aligned to the content column's left edge, overlapping the banner's bottom. */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-content px-5 sm:px-6">
              {/* Explicit size at every breakpoint: without it the image's intrinsic size stretches the circle. */}
              <div className="relative aspect-square h-[88px] w-[88px] shrink-0 translate-y-1/2 overflow-hidden rounded-full border-2 border-bgPrimary bg-surface md:h-28 md:w-28">
                <FallbackImage
                  src={profile.headshotSrc}
                  srcSet={HEADSHOT_SRCSET}
                  sizes="(min-width: 768px) 112px, 88px"
                  width={256}
                  height={256}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover object-center"
                  placeholder={<HeadshotPlaceholder />}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto max-w-content px-5 sm:px-6">
          <div className="mt-16 md:mt-24">
            <motion.h1
              variants={fadeInUp}
              className="max-w-[820px] text-[34px] font-medium leading-[1.08] tracking-[-0.025em] text-textPrimary sm:text-h1 md:text-display"
            >
              {profile.headline}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-[620px] text-base leading-relaxed text-textMuted md:text-h3 md:leading-[1.5]"
            >
              {profile.subline}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-2"
            >
              <Button
                href={profile.cv}
                icon={<FiDownload size={14} className="order-last" />}
              >
                Download CV
              </Button>
              <Button
                href={profile.linkedin}
                variant="secondary"
                icon={<FiArrowUpRight size={14} className="order-last" />}
              >
                LinkedIn
              </Button>
              <Button
                href={profile.github}
                variant="secondary"
                icon={<FiArrowUpRight size={14} className="order-last" />}
              >
                GitHub
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
