import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Work from '../components/sections/Work';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const title = 'Alex Orri Ingvarsson - Systems Engineer';
const description =
  'Alex Orri Ingvarsson, systems engineer working where software meets silicon. MSc Advanced Computing at Imperial College London, BSc Computer Science at EPFL.';

export default function Home() {
  return (
    <main>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:type" content="website" />
      <Hero />
      <Experience />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
