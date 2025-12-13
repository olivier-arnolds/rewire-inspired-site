/**
 * Tracking utilities for Google Analytics 4 and conversion events
 * This file provides helper functions to track user interactions and conversions
 */

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    lintrk?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a custom event in GA4
 * @param eventName - Name of the event
 * @param eventParams - Additional parameters for the event
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
  
  // Also push to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });
  }
}

/**
 * Track LinkedIn conversion
 * @param conversionId - LinkedIn conversion ID
 */
export function trackLinkedInConversion(conversionId?: number) {
  if (typeof window !== 'undefined' && window.lintrk) {
    if (conversionId) {
      window.lintrk('track', { conversion_id: conversionId });
    } else {
      window.lintrk('track', {});
    }
  }
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmission(formData?: {
  name?: string;
  email?: string;
  company?: string;
}) {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'Contact Form',
    ...formData
  });
  
  // Track LinkedIn conversion
  trackLinkedInConversion();
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaName: string, ctaLocation: string) {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaName,
    cta_location: ctaLocation
  });
}

/**
 * Track case study views
 */
export function trackCaseStudyView(caseStudyName: string) {
  trackEvent('case_study_view', {
    event_category: 'content',
    event_label: caseStudyName
  });
}

/**
 * Track resource downloads
 */
export function trackResourceDownload(resourceName: string, resourceType: string) {
  trackEvent('resource_download', {
    event_category: 'conversion',
    event_label: resourceName,
    resource_type: resourceType
  });
  
  // Track LinkedIn conversion for downloads
  trackLinkedInConversion();
}

/**
 * Track page views (called automatically by GA4, but can be used for custom tracking)
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle
  });
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup(email?: string) {
  trackEvent('newsletter_signup', {
    event_category: 'engagement',
    event_label: 'Newsletter Subscription'
  });
  
  // Track LinkedIn conversion
  trackLinkedInConversion();
}

/**
 * Track consultation request
 */
export function trackConsultationRequest() {
  trackEvent('consultation_request', {
    event_category: 'conversion',
    event_label: 'Consultation Request',
    value: 1
  });
  
  // Track LinkedIn conversion
  trackLinkedInConversion();
}

/**
 * Track service page views
 */
export function trackServiceView(serviceName: string) {
  trackEvent('service_view', {
    event_category: 'content',
    event_label: serviceName
  });
}
