import {
  Product,
  Service,
  CaseStudy,
  ContactFormData,
  AnalyticsEvent,
} from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Products
  async getProducts() {
    return this.request('/api/v1/products/');
  }

  async getProduct(id: string) {
    return this.request(`/api/v1/products/${id}/`);
  }

  // Services
  async getServices() {
    return this.request('/api/v1/services/');
  }

  async getService(id: string) {
    return this.request(`/api/v1/services/${id}/`);
  }

  // Case Studies
  async getCaseStudies() {
    return this.request('/api/v1/case-studies/');
  }

  async getCaseStudy(id: string) {
    return this.request(`/api/v1/case-studies/${id}/`);
  }

  // Pricing
  async getPricing() {
    return this.request('/api/v1/pricing/');
  }

  // Lead Generation
  async submitContactForm(data: ContactFormData) {
    return this.request('/api/v1/leads/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async requestDemo(data: ContactFormData) {
    return this.request('/api/v1/leads/', {
      method: 'POST',
      body: JSON.stringify({ ...data, leadType: 'demo' }),
    });
  }

  async requestQuote(data: ContactFormData) {
    return this.request('/api/v1/leads/', {
      method: 'POST',
      body: JSON.stringify({ ...data, leadType: 'quote' }),
    });
  }

  // Newsletter
  async subscribeNewsletter(email: string) {
    return this.request('/api/v1/newsletter/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Chat (Future AI Integration)
  async sendChatMessage(sessionId: string, message: string) {
    return this.request('/api/v1/chat/', {
      method: 'POST',
      body: JSON.stringify({ session_id: sessionId, message }),
    });
  }

  async createChatSession() {
    return this.request('/api/v1/chat/session/', {
      method: 'POST',
    });
  }

  // Analytics
  async trackEvent(event: string, data: AnalyticsEvent['data']) {
    return this.request('/api/v1/analytics/track/', {
      method: 'POST',
      body: JSON.stringify({ event, data }),
    });
  }
}

export const apiClient = new APIClient(API_BASE_URL);

// Helper functions for common API calls
export async function fetchProducts() {
  try {
    return await apiClient.getProducts();
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

export async function fetchServices() {
  try {
    return await apiClient.getServices();
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return [];
  }
}

export async function fetchCaseStudies() {
  try {
    return await apiClient.getCaseStudies();
  } catch (error) {
    console.error('Failed to fetch case studies:', error);
    return [];
  }
}
