import SectionHeading from './SectionHeading';
import Reveal, { RevealGroup, RevealItem } from './Reveal';
import { skillGroups } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="bg-ink-soft border-y border-paper/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="// stack" title="What I reach for, in order of habit." />
        </Reveal>

        <RevealGroup className="mt-12 grid sm:grid-cols-3 gap-8" stagger={0.15}>
          {skillGroups.map((group) => (
            <RevealItem key={group.label} className="rounded-2xl border border-paper/10 bg-ink p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-copper-light mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-paper/90 bg-paper/5 border border-paper/10 rounded-full px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
