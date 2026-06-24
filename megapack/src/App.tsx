import React from 'react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { PainSection } from './components/PainSection';
import { ProductReveal } from './components/ProductReveal';
import { Bonuses } from './components/Bonuses';
import { UrgencyCountdown } from './components/UrgencyCountdown';
import { Pricing } from './components/Pricing';
import { MasterComparison } from './components/MasterComparison';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { CostOfInaction } from './components/CostOfInaction';
import { FinalUrgency } from './components/FinalUrgency';
import { Footer } from './components/Footer';
import { MetaPixel } from './components/MetaPixel';
export function App() {
  return <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-green selection:text-black">
      <MetaPixel />
      <main>
        <Hero />
        <SocialProof />
        <PainSection />
        <ProductReveal />
        <Bonuses />
        <UrgencyCountdown />
        <Pricing />
        <MasterComparison />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <CostOfInaction />
        <FinalUrgency />
      </main>
      <Footer />
    </div>;
}