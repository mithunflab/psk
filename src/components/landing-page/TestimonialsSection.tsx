import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Onlook has revolutionized how I prototype and iterate on designs. The ability to see changes in real-time while generating clean code is game-changing.",
      author: "Sarah Chen",
      role: "Product Designer",
      avatar: "👩‍💻"
    },
    {
      quote: "Finally, a tool that understands both design and development. Onlook helps our team move from concept to production faster than ever.",
      author: "Miguel Rodriguez",
      role: "Frontend Developer", 
      avatar: "👨‍💻"
    },
    {
      quote: "The integration with our existing React codebase was seamless. Onlook feels like having a design system that writes code for you.",
      author: "Alex Kim",
      role: "Tech Lead",
      avatar: "🧑‍💻"
    }
  ];

  return (
    <section className="w-full py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by designers and developers
          </h2>
          <p className="text-lg text-foreground-secondary">
            See what our users are saying about Onlook
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border shadow-sm">
              <div className="mb-6">
                <p className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};