import SectionHeading from './SectionHeading';
import Reveal, { RevealGroup, RevealItem } from './Reveal';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="bg-ink-soft border-y border-paper/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="// projects" title="A few things I've built for myself." />
        </Reveal>

        <RevealGroup className="mt-12 grid md:grid-cols-3 gap-6" stagger={0.15}>
          {projects.map((project, i) => (
            <RevealItem
              key={project.title}
              className="group rounded-2xl border border-paper/10 bg-ink p-7 flex flex-col hover:border-copper/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              <span className="font-mono text-xs text-slate-custom mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl text-paper font-medium mb-3">
                {project.title}
              </h3>
              <p className="text-slate-custom text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-copper-light bg-copper/10 border border-copper/20 rounded-full px-2.5 py-1"
                  >
                    {tech}
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
