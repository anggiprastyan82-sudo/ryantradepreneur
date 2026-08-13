export interface SkillCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface ClientValueCard {
  title: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  type: 'current' | 'past' | 'certification' | 'achievement';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  preferredTime?: string;
}
