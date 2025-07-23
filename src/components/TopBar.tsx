
import React from 'react';
import { Link } from 'react-router-dom';

export const TopBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-full">
        <Link 
          to="/" 
          className="text-xl font-bold text-foreground hover:text-foreground-secondary transition-colors"
        >
          Onlook
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/projects" 
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link 
            to="/login" 
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};
