import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star } from 'lucide-react';

const FirstImpressionsSection = () => {
  const headerRef = useScrollReveal(0.1);
  
  return (
    <section className="py-20 bg-[#2a0517]/95">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 reveal-element">
          <h2 className="text-4xl font-bold mb-4">
            First Impressions From Our Clients
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Here's what renovation company owners say after their first month
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => {
            // Create a new ref for each testimonial with increasing threshold
            const testimonialRef = useScrollReveal((index + 1) * 0.15);
            
            return (
              <div
                key={index}
                ref={testimonialRef}
                className="testimonial-card p-6 rounded-xl reveal-element"
              >
                {/* Star Rating */}
                <div className="flex items-center mb-4 text-[#ec9611]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-white mb-6">
                  {/* Your testimonial content */}
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <p className="text-white font-medium">Client Name</p>
                    <p className="text-gray-400 text-sm">Company Name</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FirstImpressionsSection; 