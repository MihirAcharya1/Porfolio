'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, MapPin } from 'lucide-react';
import Avatar from './Avatar';
import { profile } from '@/lib/data';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 board-texture [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div
          initial={shouldReduceMotion ? undefined : 'hidden'}
          animate={shouldReduceMotion ? undefined : 'visible'}
          variants={container}
        >
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.3em] text-copper-light mb-6"
          >
            $ whoami
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-balance text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-semibold text-paper"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display italic text-2xl sm:text-3xl text-slate-custom"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base sm:text-lg text-slate-custom leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-2 text-sm text-slate-custom"
          >
            <MapPin size={16} className="text-copper" />
            {profile.location}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-copper text-ink font-medium px-6 py-3 rounded-full hover:bg-copper-light transition-colors focus-ring"
            >
              See the work
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 border border-paper/20 text-paper font-medium px-6 py-3 rounded-full hover:border-paper/50 transition-colors focus-ring"
            >
              Say hello
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Avatar className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
