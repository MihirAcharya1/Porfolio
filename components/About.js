import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <Reveal>
          <SectionHeading eyebrow="// about" title="Two years in, still debugging happily." />
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-slate-custom text-base sm:text-lg leading-relaxed">
          <p>
            I&apos;m a web developer based in Indore, India, currently building on the product
            team at EasyComm Innovations. Most of my days are spent moving between a Shopify
            Node app, an internal ERP tool, and whatever role-based access rule broke overnight.
          </p>
          <p>
            Before this, I spent a year and a half at ITGeeks Technologies working on Shopify
            apps used by real merchants — including a mobile app builder and a subscription
            platform — and was recognised as a Star Performer for it.
          </p>
          <p>
            Outside of work, I&apos;m usually deep into a chess game, a round of BGMI, or a
            side project that has nothing to do with either. I like systems that are easy to
            reason about, whether that&apos;s a codebase or an opening on the board.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
