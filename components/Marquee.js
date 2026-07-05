import { techStack } from '@/lib/data';
import { techIcon } from '@/lib/techIcons';
import { Code2 } from 'lucide-react';

function Chip({ name }) {
  const Icon = techIcon[name] || Code2;
  return (
    <span className="inline-flex items-center gap-2.5 shrink-0 px-5 py-2.5 mx-2 rounded-full border border-paper/10 bg-ink-soft font-mono text-sm text-paper/90">
      <Icon size={16} className="text-copper" />
      {name}
    </span>
  );
}

function Row({ direction = 'left', items }) {
  return (
    <div className="flex w-max">
      <div
        className={`flex items-center py-2 ${
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
        } hover:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((name, i) => (
          <Chip key={`${name}-${i}`} name={name} />
        ))}
      </div>
      <div
        aria-hidden="true"
        className={`flex items-center py-2 ${
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
        } hover:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((name, i) => (
          <Chip key={`dup-${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const half = Math.ceil(techStack.length / 2);
  const rowOne = techStack.slice(0, half);
  const rowTwo = techStack.slice(half);

  return (
    <div className="relative border-y border-paper/10 bg-ink-soft py-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-ink-soft to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-ink-soft to-transparent z-10" />

      <div className="space-y-4">
        <Row direction="left" items={rowOne} />
        <Row direction="right" items={rowTwo} />
      </div>
    </div>
  );
}
