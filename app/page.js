import { Navbar } from '@/components';
import { Features, Hero, Pricing } from '@/sections';

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
    </main>
  );
}
