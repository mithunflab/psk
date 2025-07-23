
import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6">
            Build beautiful websites
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-2xl mx-auto">
            Create stunning, responsive websites with our powerful visual editor. 
            No coding required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground border border-border rounded-lg hover:bg-accent transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Visual Design</h3>
              <p className="text-foreground-secondary">
                Design beautiful interfaces with our intuitive visual editor
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fast & Efficient</h3>
              <p className="text-foreground-secondary">
                Build websites faster than ever with our optimized workflow
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Responsive</h3>
              <p className="text-foreground-secondary">
                All designs are fully responsive and mobile-friendly
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
