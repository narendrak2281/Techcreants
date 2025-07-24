import { ReactNode } from 'react';

// API Data types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  leadType?: 'contact' | 'demo' | 'quote';
}

export interface AnalyticsEvent {
  event: string;
  data: Record<string, unknown>;
}

export interface Product {
  id: string;
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

export interface Service {
  id: string;
  name: string;
  target_market: 'startup' | 'sme' | 'enterprise';
  benefits: string[];
  pricing_type: 'fixed' | 'hourly' | 'project';
  starting_price?: number;
  description: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  type: 'product' | 'service';
  client: string;
  title: string;
  description: string;
  metrics: CaseStudyMetric[];
  testimonial: Testimonial;
  image: string;
  tags: string[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  improvement?: string;
}

export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

export interface Lead {
  id: string;
  type: 'contact' | 'demo' | 'quote';
  contact_info: ContactInfo;
  requirements?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  created_at: Date;
  source: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  position?: string;
}

export interface Newsletter {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  subscribed_at: Date;
  source: string;
}

export interface ChatSession {
  id: string;
  session_id: string;
  messages: ChatMessage[];
  user_data?: Record<string, unknown>;
  created_at: Date;
  updated_at: Date;
}

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface APIResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface FormData {
  [key: string]: unknown;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Component Props Types
export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

export interface PricingCard {
  plan: PricingPlan;
  highlighted?: boolean;
  onSelect?: (planId: string) => void;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  type: 'contact' | 'demo' | 'quote';
}

export interface NewsletterFormData {
  email: string;
  source?: string;
}

// Animation Types
export interface AnimationVariants {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

// Theme Types
export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// SEO Types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}
