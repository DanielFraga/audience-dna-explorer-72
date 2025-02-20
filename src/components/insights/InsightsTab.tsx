
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type InsightReference = {
  id: number;
  text: string;
};

type Insight = {
  headline: string;
  explanation: string;
  references: InsightReference[];
};

const insights: Insight[] = [
  {
    headline: "Brand Trust Dominates Decisions",
    explanation: "Clear indication that brand reputation¹ significantly influences purchase behavior. Trust metrics² show strong correlation with conversion rates³.",
    references: [
      { id: 1, text: "87% cite brand reputation as 'very important' in decision making" },
      { id: 2, text: "Trust scores directly correlate with purchase likelihood (r=0.82)" },
      { id: 3, text: "Trusted brands see 2.4x higher conversion rates" }
    ]
  },
  {
    headline: "Digital-First Preference",
    explanation: "Strong bias towards digital channels¹ with high mobile engagement². Tech adoption rates³ suggest advanced digital literacy.",
    references: [
      { id: 1, text: "92% prefer digital touchpoints over traditional channels" },
      { id: 2, text: "Mobile interaction rate 3.1x higher than desktop" },
      { id: 3, text: "Tech adoption score 65% above market average" }
    ]
  },
  {
    headline: "Value-Quality Balance",
    explanation: "Notable price sensitivity¹ balanced against strong quality focus². Premium segment³ shows distinct behavioral patterns.",
    references: [
      { id: 1, text: "75% actively compare prices before purchase" },
      { id: 2, text: "82% willing to pay more for guaranteed quality" },
      { id: 3, text: "Premium segment represents 28% of total audience" }
    ]
  },
  {
    headline: "Community-Driven Choices",
    explanation: "Heavy reliance on peer recommendations¹ and social validation². Community engagement³ strongly influences decisions.",
    references: [
      { id: 1, text: "91% check reviews before significant purchases" },
      { id: 2, text: "Social proof elements increase conversion by 2.8x" },
      { id: 3, text: "Active community members show 3.2x higher loyalty" }
    ]
  },
  {
    headline: "Sustainability Focus",
    explanation: "Environmental impact¹ is a key decision factor. Strong preference for eco-friendly options² with willingness to pay premiums³.",
    references: [
      { id: 1, text: "84% consider environmental impact in purchases" },
      { id: 2, text: "Eco-friendly alternatives preferred 2.5x more" },
      { id: 3, text: "Average 18% premium accepted for sustainable options" }
    ]
  },
  {
    headline: "Innovation Receptivity",
    explanation: "High openness to new features¹ and experimental products². Early adopter characteristics³ prominent in key segments.",
    references: [
      { id: 1, text: "73% express interest in trying new features" },
      { id: 2, text: "Beta feature adoption rate 2.1x above average" },
      { id: 3, text: "Early adopter segment comprises 42% of audience" }
    ]
  }
];

export function InsightsTab() {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="bg-gray-900 rounded-lg border border-gray-800 p-4 hover:border-gray-700 transition-colors"
          >
            <h3 className="text-sm font-medium text-white mb-2">
              {insight.headline}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {insight.explanation.split(/(\d+)/).map((part, i) => {
                if (/^\d+$/.test(part)) {
                  const reference = insight.references.find(ref => ref.id === parseInt(part));
                  return (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <sup className="inline-block cursor-help px-1.5 py-0.5 text-[10px] font-medium bg-blue-500/20 text-blue-400 rounded-full hover:bg-blue-500/30 transition-colors">
                          {part}
                        </sup>
                      </TooltipTrigger>
                      <TooltipContent 
                        side="top"
                        align="center"
                        className="bg-gray-800 border border-gray-700 text-[11px] p-2 text-white rounded"
                      >
                        {reference?.text}
                      </TooltipContent>
                    </Tooltip>
                  );
                }
                return part;
              })}
            </p>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
}
