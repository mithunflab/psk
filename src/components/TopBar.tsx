
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const TopBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-full max-w-6xl mx-auto flex items-center justify-between p-4 h-12 text-small text-foreground-secondary select-none">
      <div className="flex items-center gap-8 mt-0 text-regular text-foreground-secondary">
        <Link 
          to="/" 
          className={`hover:opacity-80 py-4 pr-2 ${
            location.pathname === '/' ? 'text-foreground-primary' : ''
          }`}
        >
          <div className="text-2xl font-bold">Onlook</div>
        </Link>
        <a 
          href="https://docs.onlook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-regular hover:underline"
        >
          Docs
        </a>
        <a 
          href="https://github.com/onlook-dev/onlook" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          GitHub
        </a>
      </div>
      <div className="flex items-center gap-3 mt-0">
        <Link 
          to="/login" 
          className="rounded cursor-pointer bg-secondary text-secondary-foreground px-4 py-2 hover:bg-secondary/80 transition-colors"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};
