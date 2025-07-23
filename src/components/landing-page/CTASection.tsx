
import React from 'react';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your React development?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of developers who are already building faster with Onlook.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/projects"
            className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-8 py-3 text-sm font-medium shadow-sm hover:bg-gray-100 transition-colors"
          >
            Get Started Free
          </Link>
          <a 
            href="https://github.com/onlook-dev/onlook" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-8 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
