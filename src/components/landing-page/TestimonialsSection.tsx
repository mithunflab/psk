
import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      content: "Onlook has completely transformed how I build React applications. The visual editing is incredible.",
      avatar: "👩‍💻"
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Designer",
      content: "Finally, a tool that bridges the gap between design and development. Love the live preview feature.",
      avatar: "👨‍🎨"
    },
    {
      name: "Emily Johnson",
      role: "Full Stack Engineer",
      content: "The code generation is top-notch. It creates clean, maintainable React code that I'm happy to work with.",
      avatar: "👩‍💼"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            See what developers are saying about Onlook.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg space-y-4">
              <p className="text-foreground-secondary italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground-secondary">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
