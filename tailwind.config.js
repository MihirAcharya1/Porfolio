/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14171C',
        'ink-soft': '#1B1F27',
        'ink-card': '#1F2430',
        paper: '#F3EFE6',
        copper: '#C97A3D',
        'copper-light': '#E2A268',
        moss: '#5B8C7B',
        slate: {
          custom: '#8B93A3',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, rgba(243,239,230,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(243,239,230,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 34s linear infinite',
      },
    },
  },
  plugins: [],
};
