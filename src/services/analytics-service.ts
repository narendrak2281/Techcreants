import {
  AnalyticsEvent,
  PageView,
  UserInteraction,
  ConversionEvent,
} from '@/types';

/**
 * Analytics service for tracking user behavior
 */
class AnalyticsService {
  private isEnabled: boolean;
  private sessionId: string;

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'production';
    this.sessionId = this.generateSessionId();
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  /**
   * Track page view
   */
  trackPageView(pageView: Omit<PageView, 'timestamp'>) {
    if (!this.isEnabled) return;

    const event: PageView = {
      ...pageView,
      timestamp: new Date(),
    };

    this.sendEvent('page_view', event);
  }

  /**
   * Track user interaction
   */
  trackInteraction(interaction: Omit<UserInteraction, 'timestamp'>) {
    if (!this.isEnabled) return;

    const event: UserInteraction = {
      ...interaction,
      timestamp: new Date(),
    };

    this.sendEvent('user_interaction', event);
  }

  /**
   * Track conversion event
   */
  trackConversion(conversion: Omit<ConversionEvent, 'timestamp'>) {
    if (!this.isEnabled) return;

    const event: ConversionEvent = {
      ...conversion,
      timestamp: new Date(),
    };

    this.sendEvent('conversion', event);
  }

  /**
   * Track custom event
   */
  trackCustomEvent(eventName: string, data: Record<string, unknown>) {
    if (!this.isEnabled) return;

    const event: AnalyticsEvent = {
      event: eventName,
      data,
      timestamp: new Date(),
      sessionId: this.sessionId,
    };

    this.sendEvent('custom_event', event);
  }

  /**
   * Send event to analytics service
   */
  private async sendEvent(type: string, data: unknown) {
    try {
      // Send to your analytics service (Google Analytics, Mixpanel, etc.)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', type, data);
      }

      // Send to your backend analytics
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, data }),
      });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
    }
  }
}

export const analyticsService = new AnalyticsService();

// Global gtag declaration for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
