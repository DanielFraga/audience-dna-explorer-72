
import { FC } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const insightsData = [
  {
    title: "Unseen Longing for Prestige Brands",
    nugget: "Audience segments show an intense, almost subconscious pull toward premium brands, even when budget-friendly options exist. Purchase data reveals they're driven by a need for social acceptance, with trust in brand reputation spiking conversion rates by 35% among aspirational users.",
    interpretation: "According to social identity theory, consumers often use brands as symbolic markers of group membership and status. The heightened conversion rates suggest that these purchases serve not just functional needs but also psychological ones related to belonging and esteem within desired social circles.",
    color: "blue"
  },
  {
    title: "Fluid Digital Engagement Patterns",
    nugget: "Users navigate digital channels like nomads, seamlessly shifting between platforms with high mobile engagement (85% of interactions). Their behavior suggests a preference for dynamic, ever-changing content, with tech-savvy segments showing 40% higher interaction rates on innovative features.",
    interpretation: "This pattern aligns with the psychological concept of 'optimal stimulation level' - these users have a higher threshold for novelty and stimulation, requiring more varied inputs to maintain engagement. From a cognitive perspective, they've developed stronger mental models for technology interaction, allowing them to adapt quickly across platforms.",
    color: "purple"
  },
  {
    title: "Torn Between Indulgence and Ethics",
    nugget: "Some users wrestle with conflicting desires: a rush to buy trendy, indulgent products versus a strong pull toward eco-friendly options. Willingness to pay a premium for sustainability hits 60% in eco-conscious segments, but impulse purchases spike during emotional triggers.",
    interpretation: "This represents classic cognitive dissonance theory in action - consumers hold two contradictory values simultaneously. The tension between immediate gratification (hedonic value) and longer-term ethical considerations (normative value) creates psychological discomfort that they attempt to resolve through various justification strategies.",
    color: "green"
  },
  {
    title: "Collective Trust in Peer Voices",
    nugget: "Younger demographics heavily rely on peer recommendations and online communities, with 70% of purchase decisions influenced by social validation. Their behavior hints at a deep, almost instinctive trust in group wisdom, especially in experimental or niche markets.",
    interpretation: "This phenomenon is rooted in informational social influence - when people are uncertain, they look to others for guidance. Evolutionary psychology suggests humans evolved to use social proof as a decision-making shortcut. In digital contexts, this manifests as heightened trust in decentralized opinions over centralized authority.",
    color: "orange"
  },
  {
    title: "Curious Minds Embracing the New",
    nugget: "Segments with high curiosity and adaptability—often creative professionals or tech enthusiasts—jump at new features and products, driving 50% of early adoption rates. Their openness to disruption suggests targeting them with bold, cutting-edge campaigns could boost engagement by 30%.",
    interpretation: "From a Big Five personality perspective, these users score high on 'Openness to Experience' - a trait associated with intellectual curiosity and preference for novelty. Neurologically, this may relate to differences in dopamine response systems that create stronger reward sensations when encountering new stimuli or solving novel problems.",
    color: "pink"
  },
  {
    title: "Mesmerized by Quality Promises",
    nugget: "Premium audiences are captivated by brands promising both luxury and durability, showing a 65% increase in loyalty when messaging feels rhythmic and reassuring. Their behavior indicates a near-hypnotic trust in quality narratives, balancing price sensitivity with a desire for status.",
    interpretation: "This behavior reflects the psychological concept of 'implicit association' - these consumers have developed unconscious connections between specific narrative patterns and perceived quality. Luxury cognition research suggests that these audiences process premium quality cues through both rational assessment and emotional/symbolic pathways simultaneously.",
    color: "teal"
  }
];

export const InsightsTab: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 animate-slide-up">
      {insightsData.map((insight, index) => (
        <Card
          key={index}
          className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors"
        >
          <CardContent className="p-4">
            <h3 className={`text-lg font-semibold mb-3 ${
              insight.color === "blue" ? "text-blue-400" :
              insight.color === "purple" ? "text-purple-400" :
              insight.color === "green" ? "text-green-400" :
              insight.color === "orange" ? "text-orange-400" :
              insight.color === "pink" ? "text-pink-400" :
              "text-teal-400"
            }`}>
              {insight.title}
            </h3>
            
            <div className="space-y-3">
              <div>
                <div className="mb-1 text-xs font-semibold text-gray-400">NUGGET</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {insight.nugget}
                </p>
              </div>
              
              <div>
                <div className="mb-1 text-xs font-semibold text-gray-400">INTERPRETATION</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {insight.interpretation}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
