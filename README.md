# Mihir Acharya — Portfolio

A single-page portfolio built with Next.js (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Adding your real photo

There's no uploaded photo yet, so `components/Avatar.js` renders a dummy
SVG portrait (initials + a small chess-knight mark, since chess is listed
as a hobby). To swap in a real photo:

1. Add your image to `public/`, e.g. `public/profile.jpg`.
2. In `components/Hero.js`, replace the `<Avatar ... />` usage with:

   ```jsx
   import Image from 'next/image';

   <Image
     src="/profile.jpg"
     alt="Mihir Acharya"
     width={400}
     height={400}
     className="w-full h-auto rounded-full object-cover"
   />
   ```

## Animation & smooth scroll

- **Smooth scroll** is powered by [Lenis](https://lenis.darkroom.engineering/)
  via `components/SmoothScroll.js`, wrapped around the whole app in
  `app/layout.js`. It also intercepts the nav's `#anchor` links so they
  scroll smoothly with an offset for the fixed header.
- **Scroll-reveal animations** use [Framer Motion](https://www.framer.com/motion/)
  through `components/Reveal.js`, which exports:
  - `Reveal` — fades/slides a single block in as it enters the viewport
  - `RevealGroup` + `RevealItem` — staggers a list of children in one after
    another (used for skill chips, timeline entries, project cards, etc.)
- The Hero has its own load-in stagger (independent of scroll) plus a
  gentle floating animation on the avatar.
- Everything respects `prefers-reduced-motion`: animations and the marquee
  are skipped/frozen for users who've asked for reduced motion at the OS
  level.

## Tech marquee

`components/Marquee.js` renders two infinite, opposite-direction scrolling
rows of your tech stack (a small nod to alternating chessboard squares).
Hover pauses whichever row you're pointing at. Edit the `techStack` array
in `lib/data.js` to change what shows up, and `lib/techIcons.js` to map a
technology name to a `lucide-react` icon.

## Adding your certifications

There's a **Certifications** section wired up (`components/Certifications.js`),
each card linking out to a Coursera credential. The three links you gave me
are already in `lib/data.js`, but Coursera blocks automated access to
individual share links, so the title/issuer are placeholders you need to
fill in yourself — open each link in a browser and copy them over:

```js
export const certifications = [
  {
    title: 'REPLACE_WITH_COURSE_TITLE', // e.g. "Meta Front-End Developer"
    issuer: 'REPLACE_WITH_ISSUER',      // e.g. "Meta", "Google", "IBM"
    url: 'https://coursera.org/share/9b1c273c4c2a4748003b25a72a5a1df7',
  },
  // ...
];
```

## Editing content

All resume content (experience, projects, skills, education, etc.) lives
in one place: `lib/data.js`. Update that file and every section updates
automatically.

## Structure

- `app/layout.js` — fonts (Fraunces, Inter, JetBrains Mono) and metadata
- `app/page.js` — assembles all sections
- `components/` — one component per section (Hero, About, Skills,
  Experience, Projects, Education, Extras, Contact, Footer)
- `lib/data.js` — your resume content
- `tailwind.config.js` — color palette and font tokens

## Build for production

```bash
npm run build
npm run start
```
