import { openCalendlyPopup } from '../utils/calendly';
import { ArrowRight } from 'lucide-react';

const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-[#2a0517]/90 scroll-mt-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header content */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Scale Your Luxury Renovation Business?
            </h2>
            <div className="flex flex-col items-center justify-center">
              <div className="relative mb-8">
                <span className="absolute inset-0 blur-sm bg-gradient-to-r from-[#ec9611] via-purple-500 to-[#ec9611] opacity-20 animate-pulse"></span>
                <p className="text-xl font-semibold bg-gradient-to-r from-[#ec9611] via-purple-500 to-[#ec9611] text-transparent bg-clip-text animate-float relative">
                  We guarantee results—or we work for FREE until we deliver.
                </p>
              </div>
              
              {/* Animated Glowing Button */}
              <div className="relative inline-block">
                <div className="booking-button-glow animate-gradient-xy"></div>
                <button
                  onClick={openCalendlyPopup}
                  className="booking-button px-12 py-6 rounded-lg font-bold text-xl text-white
                           flex items-center justify-center gap-3 hover:scale-105 shadow-2xl
                           transition-transform duration-300"
                >
                  Book a Free Intro Call
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection; 