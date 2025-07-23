import React from 'react';
import { Link } from 'react-router-dom';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full border-b border-border bg-background p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-foreground text-lg font-semibold hover:opacity-80">
          Onlook
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-foreground-secondary hover:text-foreground transition-colors">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};