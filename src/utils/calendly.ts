export const openCalendlyPopup = () => {
  // @ts-ignore - Calendly is loaded from external script
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/nathanealseg/30min'
    });
  }
}; 