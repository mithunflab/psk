import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Visual Design',
      description: 'Design directly on your website with an intuitive visual interface',
      icon: '🎨',
    },
    {
      title: 'Code Generation',
      description: 'Automatically generates clean, production-ready React code',
      icon: '⚡',
    },
    {
      title: 'Real-time Sync',
      description: 'Changes are instantly reflected in your codebase',
      icon: '🔄',
    },
    {
      title: 'Component Library',
      description: 'Works with your existing component library and design system',
      icon: '🧩',
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to build faster
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Onlook bridges the gap between design and development with powerful tools
            that work with your existing workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};