import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';
import Reveal, { RevealGroup, RevealItem } from './Reveal';
import { profile } from '@/lib/data';

const links = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'in/mihir-acharya',
    href: profile.linkedin,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 board-texture [mask-image:radial-gradient(ellipse_at_bottom_left,black,transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32 relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper-light mb-4">
            // contact
          </p>
          <h2 className="font-display text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold text-paper max-w-2xl leading-[1.1]">
            Building something? Let&apos;s talk it through.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid sm:grid-cols-3 gap-6" stagger={0.15}>
          {links.map(({ label, value, href, icon: Icon }) => (
            <RevealItem key={label}>
              <a
                href={href}
                target={label === 'LinkedIn' ? '_blank' : undefined}
                rel={label === 'LinkedIn' ? 'noreferrer' : undefined}
                className="group rounded-2xl border border-paper/10 p-6 flex flex-col gap-4 hover:border-copper/40 hover:-translate-y-1 transition-all duration-300 focus-ring"
              >
                <div className="flex items-center justify-between">
                  <Icon size={20} className="text-copper" />
                  <ArrowUpRight
                    size={16}
                    className="text-slate-custom group-hover:text-copper-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-slate-custom mb-1">
                    {label}
                  </p>
                  <p className="text-paper break-words">{value}</p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
