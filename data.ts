import { 
  ShieldCheck, 
  Stethoscope, 
  Zap, 
  TrendingUp, 
  Users, 
  Map, 
  Gift, 
  Share2, 
  FileCheck 
} from 'lucide-react';
import { Hack, TimelineItem, SegmentStrategy } from './types';

export const clinicStrategy: SegmentStrategy = {
  title: "ICP A: Longevity Clinics",
  description: "Private healthcare with long-term relationships.",
  icp: [
    "Membership / concierge / annual program models",
    "High-trust patient base",
    "Needs 'between-visit' engagement"
  ],
  valueProp: [
    "Digital clinic extension",
    "Higher retention of premium memberships",
    "More bookings for add-on services"
  ],
  pricing: "Few-hundred € / member / year (Sold as premium add-on)",
  offerTitle: "30-day Branded Preventive Front Door",
  deliverables: [
    "Branded onboarding flow",
    "Clinic-specific CTAs (consults/labs)",
    "Partner dashboard"
  ],
  metrics: [
    "Activation %",
    "Second scan in 7 days %",
    "4-week retention",
    "Bookings influenced"
  ]
};

export const insurerStrategy: SegmentStrategy = {
  title: "ICP B: Insurers (Germany)",
  description: "Innovation & selective access paths (§68a SGB V).",
  icp: [
    "Innovation teams / selective contracts",
    "Goal: Early engagement → fewer late diagnoses",
    "Monetize engagement quickly"
  ],
  valueProp: [
    "Measurable prevention adherence",
    "Engagement without hardware logistics",
    "Pilotable with evaluation design"
  ],
  pricing: "Low single-digit € / member / month (Volume based)",
  offerTitle: "90-day §68a Pilot-in-a-box",
  deliverables: [
    "Cohort definition (age/risk)",
    "Outcomes framework",
    "Privacy/security pack & evaluation plan"
  ],
  metrics: [
    "Enrollment rate",
    "Weekly active screenings",
    "Routing to next step (Telemed/GP)"
  ]
};

export const hacks: Hack[] = [
  {
    id: 1,
    title: "§68a Approval Pack",
    subtitle: "Insurer Deal Unlocker",
    description: "Ready-made kit: 1-page spec, DPIA, evaluation design. Solves bureaucracy upfront.",
    impact: "Reduces time-to-pilot by 50%",
    icon: FileCheck,
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: 2,
    title: "Revenue Loop Dashboard",
    subtitle: "For Clinics",
    description: "Don't just show engagement. Show: X screened → Y flagged → Z bookings generated.",
    impact: "Turns 'nice-to-have' into revenue",
    icon: TrendingUp,
    color: "bg-emerald-100 text-emerald-700"
  },
  {
    id: 3,
    title: "BioAge League",
    subtitle: "Gamification",
    description: "21-day challenge. Weekly check-in + energy comparisons. Winner gets clinic perks.",
    impact: "Community + Upsell Engine",
    icon: Zap,
    color: "bg-amber-100 text-amber-700"
  },
  {
    id: 4,
    title: "Maps Signal Scraping",
    subtitle: "Targeting Edge",
    description: "Scrape G-Maps for keywords: 'concierge', 'biohacking'. Enrich with price/practitioner count.",
    impact: "Proprietary TAM Map",
    icon: Map,
    color: "bg-indigo-100 text-indigo-700"
  },
  {
    id: 5,
    title: "Partner Launch Kit",
    subtitle: "Distribution Multiplier",
    description: "5 emails, 3 SMS, social posts, webinar deck provided to every partner.",
    impact: "Partner does 70% of distribution",
    icon: Share2,
    color: "bg-rose-100 text-rose-700"
  },
  {
    id: 6,
    title: "Consumer Pull-Through",
    subtitle: "Lead Gen",
    description: "Ask users: 'Which clinic should sponsor you?' Aggregate demand → Warm Outbound.",
    impact: "Cold BD becomes Warm BD",
    icon: Users,
    color: "bg-cyan-100 text-cyan-700"
  }
];

export const timeline: TimelineItem[] = [
  {
    period: "30 Days",
    title: "Foundation & First Pilots",
    items: [
      "ICP lists built + scoring live",
      "3 outbound sequences running",
      "Partner dashboard MVP live",
      "2 pilots signed (1 Clinic, 1 Insurer)"
    ]
  },
  {
    period: "60 Days",
    title: "Repeatable Process",
    items: [
      "Repeatable 30-day launch process",
      "First case study (Engagement + Outcomes)",
      "Approval Accelerator used in 2 talks"
    ]
  },
  {
    period: "90 Days",
    title: "Scale & Playbook",
    items: [
      "4–6 active partners in pipeline",
      "Full Playbook documented",
      "Founder-led sales becomes scalable"
    ]
  }
];