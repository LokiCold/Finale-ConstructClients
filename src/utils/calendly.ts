export const openCalendlyPopup = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/constructclients/45min'
    });
  } else {
    console.error('Calendly widget not loaded');
    // Fallback to direct Calendly URL
    window.open('https://calendly.com/constructclients/45min', '_blank');
  }
};

// Add this to make TypeScript happy
declare global {
  interface Window {
    Calendly: any;
  }
} 