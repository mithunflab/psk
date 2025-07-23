import React from 'react';

export const CTASection: React.FC = () => {
  const handleGetStartedClick = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-32 px-8 flex flex-col items-end gap-24">
      <div className="flex-1 flex flex-col items-end justify-center text-right">
        <h2 className="text-6xl leading-[1.05] font-light mb-8 max-w-4xl">
          Craft a website<br />for free today
        </h2>
        <div className="flex flex-row items-center justify-end gap-3 w-full">
          <button 
            onClick={handleGetStartedClick}
            className="px-6 py-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded"
          >
            Get Started
          </button>
          <span className="text-muted-foreground text-left ml-0">
            No credit card required.<br /> Cancel anytime.
          </span>
        </div>
      </div>
    </div>
  );
};