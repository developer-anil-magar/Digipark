import { Navbar } from '@/components';
import { Access, Features, Hero, Pricing, Testimonial } from '@/sections';

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
        <Testimonial />
      </section>
      <section>
        <Access />
      </section>
    </main>
  );
}
