'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-paper/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm text-paper focus-ring rounded"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-copper text-copper-light text-xs">
            ♞
          </span>
          <span className="tracking-tight">mihir<span className="text-copper">.</span>dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-slate-custom">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-paper transition-colors focus-ring rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="font-mono text-xs uppercase tracking-widest border border-copper/60 text-copper-light px-4 py-2 rounded-full hover:bg-copper hover:text-ink hover:border-copper transition-colors focus-ring"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
