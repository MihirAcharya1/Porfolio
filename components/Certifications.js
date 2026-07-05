import { BadgeCheck, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal, { RevealGroup, RevealItem } from './Reveal';
import { certifications } from '@/lib/data';

export default function Certifications() {
  return (
    <section id="certifications" className="bg-ink-soft border-y border-paper/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="// certifications" title="Courses I've put the time into." />
        </Reveal>

        <RevealGroup className="mt-12 grid sm:grid-cols-3 gap-6" stagger={0.15}>
          {certifications.map((cert) => (
            <RevealItem key={cert.url}>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="group h-full rounded-2xl border border-paper/10 bg-ink p-6 flex flex-col gap-4 hover:border-copper/40 hover:-translate-y-1 transition-all duration-300 focus-ring"
              >
                <div className="flex items-center justify-between">
                  <BadgeCheck size={20} className="text-copper" />
                  <ArrowUpRight
                    size={16}
                    className="text-slate-custom group-hover:text-copper-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-slate-custom mb-1">
                    {cert.issuer}
                  </p>
                  <h3 className="font-display text-lg text-paper leading-snug">{cert.title}</h3>
                </div>
                <span className="mt-auto font-mono text-xs text-copper-light">
                  View credential →
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
