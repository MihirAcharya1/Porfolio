import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-paper/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-slate-custom">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-slate-custom">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
