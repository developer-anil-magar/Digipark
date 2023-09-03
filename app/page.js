import { Navbar } from '@/components';
import { Hero } from '@/sections';

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <Hero />
      </section>
    </main>
  );
}
