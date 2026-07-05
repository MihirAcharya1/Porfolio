export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper-light mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper text-balance">
        {title}
      </h2>
    </div>
  );
}
