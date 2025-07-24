import { BaseEntity } from './common';

export interface Product extends BaseEntity {
  name: string;
  description: string;
  features: string[];
  pricing: ProductPricing;
  status: 'active' | 'coming_soon' | 'deprecated';
  image: string;
  demo_url?: string;
  category: 'saas' | 'tool' | 'platform';
}

export interface ProductPricing {
  type: 'free' | 'freemium' | 'paid';
  plans: PricingPlan[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  popular?: boolean;
}

export interface Service extends BaseEntity {
  name: string;
  target_market: 'startup' | 'sme' | 'enterprise';
  benefits: string[];
  pricing_type: 'fixed' | 'hourly' | 'project';
  starting_price?: number;
  description: string;
  icon?: string;
  category: string;
}

export interface CaseStudy extends BaseEntity {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  testimonial?: Testimonial;
  metrics?: CaseStudyMetric[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Testimonial extends BaseEntity {
  content: string;
  author: {
    name: string;
    position: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
  featured?: boolean;
}
