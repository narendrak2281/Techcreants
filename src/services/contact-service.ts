import BaseApiClient from './api-client';
import { ContactFormData, NewsletterFormData, QuoteFormData } from '@/types';

/**
 * Contact and communication service
 */
class ContactService extends BaseApiClient {
  /**
   * Submit contact form
   */
  async submitContactForm(data: ContactFormData) {
    return this.post('/contact', data);
  }

  /**
   * Submit newsletter subscription
   */
  async subscribeNewsletter(data: NewsletterFormData) {
    return this.post('/newsletter/subscribe', data);
  }

  /**
   * Submit quote request
   */
  async submitQuoteRequest(data: QuoteFormData) {
    return this.post('/quotes', data);
  }

  /**
   * Schedule a demo
   */
  async scheduleDemo(data: {
    name: string;
    email: string;
    company?: string;
    preferredTime?: string;
  }) {
    return this.post('/demo/schedule', data);
  }

  /**
   * Get contact information
   */
  async getContactInfo() {
    return this.get('/contact/info');
  }
}

export const contactService = new ContactService();
