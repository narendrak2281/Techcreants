import BaseApiClient from './api-client';
import { Product, Service, CaseStudy, PaginatedResponse } from '@/types';

/**
 * Business data service for products, services, and case studies
 */
class BusinessService extends BaseApiClient {
  /**
   * Get all products
   */
  async getProducts() {
    return this.get<Product[]>('/products');
  }

  /**
   * Get product by ID
   */
  async getProduct(id: string) {
    return this.get<Product>(`/products/${id}`);
  }

  /**
   * Get all services
   */
  async getServices() {
    return this.get<Service[]>('/services');
  }

  /**
   * Get service by ID
   */
  async getService(id: string) {
    return this.get<Service>(`/services/${id}`);
  }

  /**
   * Get case studies with pagination
   */
  async getCaseStudies(page: number = 1, limit: number = 10) {
    return this.get<PaginatedResponse<CaseStudy>>('/case-studies', {
      page: page.toString(),
      limit: limit.toString(),
    });
  }

  /**
   * Get case study by ID
   */
  async getCaseStudy(id: string) {
    return this.get<CaseStudy>(`/case-studies/${id}`);
  }

  /**
   * Get featured case studies
   */
  async getFeaturedCaseStudies() {
    return this.get<CaseStudy[]>('/case-studies/featured');
  }
}

export const businessService = new BusinessService();
