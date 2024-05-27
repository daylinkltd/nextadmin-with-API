// lib/gtag.js
export const GA_TRACKING_ID = 'G-ZVVFK6NSPJ'; // Replace with your Measurement ID

// Initialize GA
export const initGA = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Log page views
export const logPageView = (url) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
