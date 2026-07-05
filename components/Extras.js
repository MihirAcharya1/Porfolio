import { Award, Languages, Sparkles } from 'lucide-react';
import { RevealGroup, RevealItem } from './Reveal';
import { accomplishments, languages, hobbies } from '@/lib/data';

export default function Extras() {
  return (
    <section className="bg-ink-soft border-y border-paper/10">
      <RevealGroup
        className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 grid sm:grid-cols-3 gap-10"
        stagger={0.15}
      >
        <RevealItem>
          <Award size={22} className="text-copper mb-4" />
          <h3 className="font-display text-lg text-paper mb-4">Accomplishments</h3>
          <ul className="space-y-3">
            {accomplishments.map((item) => (
              <li key={item} className="text-slate-custom text-sm leading-relaxed flex gap-2">
                <span className="text-copper shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </RevealItem>

        <RevealItem>
          <Languages size={22} className="text-copper mb-4" />
          <h3 className="font-display text-lg text-paper mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="font-mono text-xs text-paper/90 bg-paper/5 border border-paper/10 rounded-full px-3 py-1.5"
              >
                {lang}
              </span>
            ))}
          </div>
        </RevealItem>

        <RevealItem>
          <Sparkles size={22} className="text-copper mb-4" />
          <h3 className="font-display text-lg text-paper mb-4">Hobbies &amp; Interests</h3>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="font-mono text-xs text-paper/90 bg-paper/5 border border-paper/10 rounded-full px-3 py-1.5"
              >
                {hobby}
              </span>
            ))}
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
