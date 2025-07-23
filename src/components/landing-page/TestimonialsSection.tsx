import React from 'react';

interface TestimonialCardProps {
  text: string;
  name: string;
  label: string;
  profileColor?: string;
  href?: string;
}

function TestimonialCard({ text, name, label, profileColor = '#222', href }: TestimonialCardProps) {
  const cardContent = (
    <div className={`bg-card border rounded-xl p-6 flex flex-col justify-between min-h-[160px] transition-colors duration-200 select-none ${href ? 'cursor-pointer hover:bg-accent' : ''}`}>
      <div className="text-foreground mb-6">{text}</div>
      <div className="flex items-center gap-3 mt-auto">
        {/* Profile picture */}
        <div className="w-10 h-10 min-w-10 min-h-10 rounded-full overflow-hidden flex items-center justify-center">
          <div
            className="w-full h-full bg-muted flex items-center justify-center"
            style={{ background: profileColor }}
          >
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground text-sm">{name}</span>
          <span className="text-muted-foreground/50 text-xs">{label}</span>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export const TestimonialsSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-48 px-8">
      <h2 className="text-6xl leading-[1.1] font-light mb-16 max-w-4xl text-left">
        Tens of thousands of <br />builders love Onlook
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Column 1 */}
        <div className="flex flex-col gap-8 flex-1">
          <TestimonialCard
            text="What is this, something like Figma and v0 fused into a devilish combo? There's something called 'onlook' trending on GitHub, and it's so insanely cool it's scary."
            name="Koder@海外Tech速報"
            label=""
            profileColor="#4F46E5"
            href="https://x.com/koder_dev/status/1884179672847847522" 
          />
          <TestimonialCard
            text="From an era where web designers were synonymous with Photoshop and XD, we've moved into the Figma era. And now, a new tool powered by AI has emerged! Its name is 'Onlook'."
            name="Ryutaro"
            label="Studio Nika"
            profileColor="#059669"
            href="https://x.com/ryutar02ka/status/1884542011706912900" 
          />
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-8 flex-1 mt-0 md:mt-12">
          <TestimonialCard
            text="lookin' rad!"
            name="Adam Argyle"
            label="Chrome CSS Developer Advocate at Google"
            profileColor="#DC2626"
          />
          <TestimonialCard
            text="Promising new tool for designers – gives you a Figma-like front end to visually edit your React app."
            name="Aaron Epstein"
            label="Cofounder of Creative Market"
            profileColor="#7C3AED"
            href="https://x.com/aaron_epstein/status/1851299967752945967" 
          />
        </div>
        {/* Column 3 */}
        <div className="flex flex-col gap-8 flex-1 mt-0 md:mt-24">
          <TestimonialCard
            text="this is getting pretty ergonomically close to the synthesis of generative code & design. great product @onlookdev 🐣"
            name="Tina He"
            label="Product Lead, Developer Tools at Coinbase"
            profileColor="#0891B2"
            href="https://x.com/fkpxls/status/1887319067884716109" 
          />
          <TestimonialCard
            text="V nice!"
            name="John Maeda"
            label="Head of Computational Design / AI Platform at Microsoft"
            profileColor="#EA580C"
            href="https://x.com/johnmaeda/status/1855091938828968112" 
          />
        </div>
      </div>
    </div>
  );
};