export interface AnalyticsEvent {
  event: string;
  data: Record<string, unknown>;
  timestamp?: Date;
  userId?: string;
  sessionId?: string;
}

export interface PageView {
  page: string;
  title: string;
  referrer?: string;
  timestamp: Date;
}

export interface UserInteraction {
  type: 'click' | 'scroll' | 'form_submit' | 'download';
  element: string;
  value?: string;
  timestamp: Date;
}

export interface ConversionEvent {
  type: 'lead' | 'contact' | 'demo_request' | 'quote_request';
  value?: number;
  metadata?: Record<string, unknown>;
  timestamp: Date;
}
