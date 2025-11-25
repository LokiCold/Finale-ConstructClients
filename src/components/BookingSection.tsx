import { useEffect, useRef } from 'react';

// Declare Calendly type
declare global {
  interface Window {
    Calendly: any;
  }
}

const BookingSection = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to load Calendly script
    const loadCalendlyScript = () => {
      return new Promise<void>((resolve) => {
        // Check if Calendly is already loaded
        if (window.Calendly) {
          resolve();
          return;
        }

        // Check if script already exists
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          // Wait for script to load
          existingScript.addEventListener('load', () => resolve());
          return;
        }

        // Load the script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.type = 'text/javascript';
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    // Load script and ensure widget initializes
    loadCalendlyScript().then(() => {
      // Give Calendly a moment to initialize widgets
      setTimeout(() => {
        if (window.Calendly && calendlyRef.current) {
          // Calendly should auto-initialize, but we can force it if needed
          const widget = calendlyRef.current;
          if (widget && !widget.querySelector('iframe')) {
            // Widget hasn't initialized, try to trigger it
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/nate-constructclients/30min?hide_gdpr_banner=1&text_color=670000&primary_color=ff9d00',
              parentElement: widget
            });
          }
        }
      }, 100);
    });
  }, []);

  return (
    <section id="booking" className="py-20 bg-[#2a0517]/90 scroll-mt-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header content */}
          <div className="mb-12">
            <div className="animate-float relative mb-8">
              <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-50"></div>
              <div className="relative z-0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-6">
                  Ready to <span className="bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] bg-clip-text text-transparent">Scale Your Luxury Renovation Business</span>?
                </h2>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-8 mb-12">
              <div className="relative">
                <span className="absolute inset-0 blur-sm bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] opacity-20 animate-pulse"></span>
                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] text-transparent bg-clip-text animate-float relative text-glow">
                  We guarantee results—or we work for FREE until we deliver.
                </p>
              </div>
            </div>
          </div>

          {/* Calendly Inline Widget */}
          <div 
            ref={calendlyRef}
            className="calendly-inline-widget w-full" 
            data-url="https://calendly.com/nate-constructclients/30min?hide_gdpr_banner=1&text_color=670000&primary_color=ff9d00" 
            style={{minWidth: '100%', width: '100%', height: '800px'}}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection; 