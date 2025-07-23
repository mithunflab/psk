import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-8 text-lg text-center relative">
      <div className="flex flex-col gap-3 items-center relative z-20 pt-4 pb-2">
        <h1 className="text-6xl font-light leading-tight text-center leading-[0.9]">
          Make your<br />
          <span className="font-light">designs </span>
          <span className="italic font-normal text-7xl ml-1 leading-[1.0]">real</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl text-center mt-2">
          Onlook is a next-generation visual code editor<br />
          that lets designers and product managers craft<br />
          web experiences with AI
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center relative z-20">
        <div className="bg-card border rounded-xl p-6 w-[600px] shadow-sm">
          <div className="text-start text-lg mb-4">Let's design a...</div>
          <div className="flex flex-col gap-3 rounded p-4 bg-secondary/50">
            <textarea
              className="min-h-[60px] w-full border-0 bg-transparent resize-none focus:outline-none placeholder-muted-foreground"
              placeholder="Paste a link, imagery, or more as inspiration"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="w-9 h-9 flex items-center justify-center rounded hover:bg-accent">
                  📷
                </button>
              </div>
              <button className="w-9 h-9 bg-primary text-primary-foreground rounded flex items-center justify-center hover:bg-primary/90">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-2 opacity-80">
          No Credit Card Required • Get a Site in Seconds
        </div>
      </div>
    </div>
  );
};