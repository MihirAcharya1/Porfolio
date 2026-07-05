import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Extras from '@/components/Extras';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <Marquee /> */}
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
