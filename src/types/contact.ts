export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success?: boolean;
  data?: any;
  error?: string;
}

export interface EmailTemplateProps {
  senderName: string;
  messageBody: string;
}