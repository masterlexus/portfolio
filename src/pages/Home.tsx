import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Timeline from '../components/sections/Timeline';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </main>
  );
}
