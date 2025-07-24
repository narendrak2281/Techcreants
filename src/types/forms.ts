export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  leadType?: 'contact' | 'demo' | 'quote' | 'partnership';
  budget?: string;
  timeline?: string;
  services?: string[];
}

export interface NewsletterFormData {
  email: string;
  firstName?: string;
  interests?: string[];
}

export interface QuoteFormData extends ContactFormData {
  projectType:
    | 'web_development'
    | 'mobile_app'
    | 'custom_software'
    | 'consulting';
  budget: string;
  timeline: string;
  requirements: string;
  attachments?: File[];
}

export interface FormValidationError {
  field: string;
  message: string;
}

export interface FormState<T> {
  data: T;
  errors: FormValidationError[];
  isSubmitting: boolean;
  isSubmitted: boolean;
}
