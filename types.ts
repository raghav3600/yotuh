import { LucideIcon } from 'lucide-react';

export interface Hack {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  icon: LucideIcon;
  color: string;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  items: string[];
}

export interface SegmentStrategy {
  title: string;
  description: string;
  icp: string[];
  valueProp: string[];
  pricing: string;
  offerTitle: string;
  deliverables: string[];
  metrics: string[];
}