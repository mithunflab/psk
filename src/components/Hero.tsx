
import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 text-center space-y-8">
      <div className="space-y-6">
        <div className="space-y-2 uppercase rounded-full p-1 px-2 w-auto inline-block text-xs border text-blue-400 border-blue-400">
          <p>Beta</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          The open-source
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            visual editor
          </span>
          <br />
          for React
        </h1>
        <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
          Onlook is an open-source visual editor for React apps. Design directly in your live product.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/projects"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
        >
          Get Started
        </Link>
        <a 
          href="https://github.com/onlook-dev/onlook" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};
