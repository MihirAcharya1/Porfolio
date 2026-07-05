import SectionHeading from './SectionHeading';
import Reveal, { RevealGroup, RevealItem } from './Reveal';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="// education" title="The paperwork trail." />
      </Reveal>

      <RevealGroup
        className="mt-12 divide-y divide-paper/10 border-y border-paper/10"
        stagger={0.1}
      >
        {education.map((item) => (
          <RevealItem
            key={item.degree}
            className="py-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
          >
            <div>
              <h3 className="font-display text-lg text-paper">{item.school}</h3>
              <p className="text-slate-custom text-sm mt-1">
                {item.degree} · {item.location}
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-slate-custom whitespace-nowrap">
              {item.period}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
