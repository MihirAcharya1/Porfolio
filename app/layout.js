import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import ThreeBackdrop from '@/components/ThreeBackdrop';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'Mihir Acharya — Web Developer',
  description:
    'Portfolio of Mihir Acharya, a web developer specializing in React.js, Node.js, and Shopify app development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">
        <ThreeBackdrop />
        <div className="relative z-10">
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
