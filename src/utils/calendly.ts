export const openCalendlyPopup = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/nate-constructclients/30min?hide_gdpr_banner=1&text_color=9e0505&primary_color=ff9115'
    });
  } else {
    console.error('Calendly widget not loaded');
    // Fallback to direct Calendly URL
    window.open('https://calendly.com/nate-constructclients/30min?hide_gdpr_banner=1&text_color=9e0505&primary_color=ff9115', '_blank');
  }
};

// Add this to make TypeScript happy
declare global {
  interface Window {
    Calendly: any;
  }
} 