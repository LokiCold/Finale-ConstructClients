import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TestimonialsSection = () => {
  const headerRef = useScrollReveal(0.1);

  return (
    <section className="py-20 bg-[#2a0517]/95">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 reveal-element">
          <div className="animate-float relative mb-6">
            <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-50"></div>
            <div className="relative z-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-4">
                <span className="bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] bg-clip-text text-transparent">Testimonials</span>
              </h2>
            </div>
          </div>
          <p className="text-white max-w-2xl mx-auto">
            Here's what renovation company owners say about our services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Stephen Herrera Testimonial */}
          <div className="testimonial-card p-6 rounded-xl">
            <div className="flex items-center mb-4 text-[#ec9611]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-[#38071e]">
              <img 
                src="/Testimonial pic 1.png" 
                alt="Stephen Herrera Results" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/fallback-image.png';
                }}
              />
            </div>
            <p className="text-white font-medium mb-2">
              $3.1k in ad spend to $36k in commissions collected
            </p>
            <div className="flex items-center mt-4">
              <div>
                <p className="text-white font-medium">Stephen Herrera</p>
                <p className="text-gray-400 text-sm">Renovation Company Owner</p>
              </div>
            </div>
          </div>

          {/* Henry Kurk Testimonial */}
          <div className="testimonial-card p-6 rounded-xl">
            <div className="flex items-center mb-4 text-[#ec9611]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-[#38071e]">
              <img 
                src="/Testimonial Pic 2.png" 
                alt="Henry Kurk Results" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white font-medium mb-2">
              $75k in commissions collected
            </p>
            <div className="flex items-center mt-4">
              <div>
                <p className="text-white font-medium">Henry Kurk</p>
                <p className="text-gray-400 text-sm">High-End Roofing Company Owner</p>
              </div>
            </div>
          </div>

          {/* Text Testimonial - Sarah Chen */}
          <div className="testimonial-card p-6 rounded-xl">
            <div className="flex items-center mb-4 text-[#ec9611]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <blockquote className="text-white mb-6">
              "The automated system has saved us countless hours and helped us focus on what we do best - creating beautiful spaces."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="text-white font-medium">Sarah Chen</p>
                <p className="text-gray-400 text-sm">Director, Modern Spaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 