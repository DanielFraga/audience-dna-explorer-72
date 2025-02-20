
import { PsychographicPoint, PsychographicDescription, ColorScheme } from "./types";

export const psychographicData: PsychographicPoint[] = [
  { subject: 'Op', A: 80, fullName: 'Openness' },
  { subject: 'Co', A: 65, fullName: 'Conscientiousness' },
  { subject: 'Ex', A: 45, fullName: 'Extraversion' },
  { subject: 'Ag', A: 70, fullName: 'Agreeableness' },
  { subject: 'Ne', A: 30, fullName: 'Neuroticism' },
  { subject: 'RT', A: 85, fullName: 'Risk Tolerance' },
  { subject: 'In', A: 75, fullName: 'Innovation' },
  { subject: 'PS', A: 40, fullName: 'Price Sensitivity' },
  { subject: 'BL', A: 60, fullName: 'Brand Loyalty' },
  { subject: 'SI', A: 72, fullName: 'Social Impact' },
  { subject: 'TA', A: 88, fullName: 'Tech Adoption' },
  { subject: 'QF', A: 78, fullName: 'Quality Focus' },
  { subject: 'Su', A: 65, fullName: 'Sustainability' },
  { subject: 'SS', A: 45, fullName: 'Status Seeking' },
  { subject: 'Im', A: 35, fullName: 'Impulsiveness' },
  { subject: 'Tr', A: 25, fullName: 'Traditionalism' },
];

export const colorMap: ColorScheme = {
  'Op': 'bg-[#0EA5E9] text-white',
  'Co': 'bg-[#1EAEDB] text-white',
  'Ex': 'bg-[#33C3F0] text-white',
  'Ag': 'bg-[#0FA0CE] text-white',
  'Ne': 'bg-[#ea384c] text-white',
  'RT': 'bg-[#F2FCE2] text-gray-700',
  'In': 'bg-[#0EA5E9] text-white',
  'PS': 'bg-[#ea384c] text-white',
  'BL': 'bg-[#F2FCE2] text-gray-700',
  'SI': 'bg-[#0EA5E9] text-white',
  'TA': 'bg-[#1EAEDB] text-white',
  'QF': 'bg-[#F2FCE2] text-gray-700',
  'Su': 'bg-[#33C3F0] text-white',
  'SS': 'bg-[#ea384c] text-white',
  'Im': 'bg-[#0FA0CE] text-white',
  'Tr': 'bg-[#F2FCE2] text-gray-700',
};

export const psychographicDescriptions: PsychographicDescription = {
  Op: [
    "Willingness to embrace new experiences and ideas",
    "Intellectual curiosity and creativity",
    "Appreciation for art, emotion, and unusual ideas",
    "Adventure seeking and variety preference"
  ],
  Co: [
    "Tendency to be organized and dependable",
    "Self-discipline and aim for achievement",
    "Planned rather than spontaneous behavior",
    "Detail-oriented approach to tasks"
  ],
  Ex: [
    "Energy derived from social interactions",
    "Tendency to seek stimulation in others' company",
    "Assertiveness and talkativeness",
    "Enthusiasm in social situations"
  ],
  Ag: [
    "Tendency to be compassionate and cooperative",
    "Concern with others' well-being",
    "Helpful and trusting nature",
    "Preference for social harmony"
  ],
  Ne: [
    "Tendency to experience negative emotions",
    "Sensitivity to stress and emotional triggers",
    "Susceptibility to mood swings",
    "Emotional response intensity"
  ],
  RT: [
    "Comfort level with uncertainty",
    "Willingness to take calculated risks",
    "Decision-making in ambiguous situations",
    "Investment and opportunity approach"
  ],
  In: [
    "Early adoption of new technologies",
    "Creative problem-solving abilities",
    "Drive to improve existing solutions",
    "Forward-thinking mindset"
  ],
  PS: [
    "Importance of price in decision making",
    "Value consciousness in purchases",
    "Deal-seeking behavior",
    "Budget consciousness"
  ],
  BL: [
    "Commitment to preferred brands",
    "Resistance to brand switching",
    "Trust in established relationships",
    "Value of brand reputation"
  ],
  SI: [
    "Concern for environmental impact",
    "Interest in social responsibility",
    "Support for ethical business practices",
    "Community involvement focus"
  ],
  TA: [
    "Speed of technology adoption",
    "Digital tool proficiency",
    "Interest in tech innovations",
    "Smart device integration"
  ],
  QF: [
    "Preference for premium products",
    "Attention to product durability",
    "Value of craftsmanship",
    "Long-term investment mindset"
  ],
  Su: [
    "Environmental consciousness",
    "Eco-friendly product preference",
    "Support for sustainable practices",
    "Interest in renewable resources"
  ],
  SS: [
    "Importance of social recognition",
    "Brand prestige sensitivity",
    "Luxury orientation",
    "Image consciousness"
  ],
  Im: [
    "Spontaneous decision making",
    "Quick purchasing behavior",
    "Emotional buying triggers",
    "Resistance to planning"
  ],
  Tr: [
    "Preference for established methods",
    "Resistance to change",
    "Value of cultural norms",
    "Conservative approach"
  ],
};
