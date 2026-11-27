import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Industries from '@/components/Industries';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <a href="#features" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black">
        Перейти к содержимому
      </a>
      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <Features />
        <Demo />
        <Industries />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
