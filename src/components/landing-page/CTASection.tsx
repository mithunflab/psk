import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10 rounded-3xl blur-2xl" />
          
          <div className="relative bg-card/50 backdrop-blur border border-border rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to build your next{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                masterpiece?
              </span>
            </h2>
            
            <p className="text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of designers and developers who are already building 
              faster with Onlook's visual development platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/login')}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors text-lg"
              >
                Start Building for Free
              </button>
              <button className="px-8 py-4 border border-border text-foreground rounded-xl font-medium hover:bg-accent transition-colors text-lg">
                View Documentation
              </button>
            </div>
            
            <div className="mt-8 text-sm text-foreground-secondary">
              <p>✨ No credit card required • 🚀 Deploy instantly • 💎 Premium support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};