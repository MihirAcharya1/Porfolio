import SectionHeading from './SectionHeading';
import Reveal, { RevealGroup, RevealItem } from './Reveal';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="// experience" title="Where the work has happened." />
      </Reveal>

      <div className="mt-14 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-paper/10 hidden sm:block" />

        <RevealGroup as="ol" className="space-y-12" stagger={0.2}>
          {experience.map((job) => (
            <RevealItem key={job.company} as="li" className="relative sm:pl-12">
              <span className="hidden sm:block absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-copper ring-4 ring-ink" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h3 className="font-display text-xl sm:text-2xl text-paper font-medium">
                  {job.role} · <span className="text-copper-light">{job.company}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-custom whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-custom leading-relaxed">
                    <span className="text-copper mt-1.5 shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
