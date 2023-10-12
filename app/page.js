import { Navbar } from '@/components';
import {
  Access,
  Features,
  Footer,
  Hero,
  Location,
  Pricing,
  Testimonial,
} from '@/sections';

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Location />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Access />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
