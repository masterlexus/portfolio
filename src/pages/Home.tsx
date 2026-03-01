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
      <title>Alex Orri Ingvarsson — Computer Scientist &amp; Developer</title>
      <meta
        name="description"
        content="Portfolio of Alex Orri Ingvarsson — computer scientist and developer studying at EPFL and Imperial College London. Projects, blog, and more."
      />
      <meta
        property="og:title"
        content="Alex Orri Ingvarsson — Computer Scientist & Developer"
      />
      <meta
        property="og:description"
        content="Portfolio of Alex Orri Ingvarsson — computer scientist and developer studying at EPFL and Imperial College London."
      />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:type" content="website" />
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
