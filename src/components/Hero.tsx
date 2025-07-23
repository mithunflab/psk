import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      // Redirect to projects page after entering a prompt
      navigate('/projects');
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-6 text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl -z-10" />
      
      <div className="space-y-8">
        {/* Beta badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
          ✨ Beta
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent leading-tight">
          Design websites
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            visually
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
          Edit your React website in real-time and write your changes back to code. 
          The power of Cursor for designers.
        </p>

        {/* Prompt input form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the website you want to build..."
              className="w-full px-6 py-4 text-lg bg-background/50 backdrop-blur border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder-foreground-secondary"
            />
            <button
              type="submit"
              disabled={!prompt.trim()}
              className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Create →
            </button>
          </div>
        </form>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleLoginClick}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started
          </button>
          <button className="px-8 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-accent transition-colors">
            View Examples
          </button>
        </div>

        {/* Trust indicators */}
        <div className="pt-8 text-sm text-foreground-secondary">
          <p>Trusted by designers and developers worldwide</p>
        </div>
      </div>
    </div>
  );
};