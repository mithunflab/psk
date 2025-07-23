import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturesSection } from '../components/landing-page/FeaturesSection';
import { TestimonialsSection } from '../components/landing-page/TestimonialsSection';
import { CTASection } from '../components/landing-page/CTASection';
import { Footer } from '../components/landing-page/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-background">
      <div className="w-screen h-screen flex items-center justify-center" id="hero">
        <Hero />
      </div>
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;