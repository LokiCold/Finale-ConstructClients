import { useEffect } from 'react';

const CalendlyEmbed = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    // Add script to head instead of body
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full" 
      data-url="https://calendly.com/nathanealseg/30min"
      style={{ 
        minWidth: '320px', 
        height: '700px',
        position: 'relative',
        zIndex: 10 
      }}
    />
  );
};

export default CalendlyEmbed; 