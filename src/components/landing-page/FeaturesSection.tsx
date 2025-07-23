
import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Visual Editing",
      description: "Edit your React components visually, directly in your browser",
      icon: "🎨"
    },
    {
      title: "Live Preview",
      description: "See changes instantly as you edit your components",
      icon: "⚡"
    },
    {
      title: "Code Generation",
      description: "Generate clean, maintainable React code automatically",
      icon: "🔧"
    },
    {
      title: "Open Source",
      description: "Fully open source and free to use for everyone",
      icon: "🔓"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to build faster
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Onlook provides all the tools you need to design and build React applications visually.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-foreground-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
