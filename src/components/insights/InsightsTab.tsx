
import { FC } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const insightsData = [
  {
    title: "Unseen Longing for Prestige Brands",
    nugget: "Our purchase analytics reveal a 35% spike in conversion rates for premium brands among aspirational users, indicating an intense subconscious pull toward status products even when budget options exist.",
    interpretation: "According to social identity theory, consumers often use brands as symbolic markers of group membership and status. The heightened conversion rates suggest that these purchases serve not just functional needs but also psychological ones related to belonging and esteem within desired social circles.",
    color: "blue",
    summary: "35% higher conversion for premium brands"
  },
  {
    title: "Fluid Digital Engagement Patterns",
    nugget: "Our cross-platform tracking shows 85% of users navigate seamlessly between our mobile and desktop interfaces, with tech-savvy segments demonstrating 40% higher interaction rates on innovative features.",
    interpretation: "This pattern aligns with the psychological concept of 'optimal stimulation level' - these users have a higher threshold for novelty and stimulation, requiring more varied inputs to maintain engagement. From a cognitive perspective, they've developed stronger mental models for technology interaction, allowing them to adapt quickly across platforms.",
    color: "purple",
    summary: "85% cross-platform usage, 40% higher engagement"
  },
  {
    title: "Torn Between Indulgence and Ethics",
    nugget: "Our sustainability metrics show 60% of eco-conscious users willing to pay premium prices for green products, yet our impulse purchase tracking indicates significant spikes in non-sustainable buying during emotional triggers.",
    interpretation: "This represents classic cognitive dissonance theory in action - consumers hold two contradictory values simultaneously. The tension between immediate gratification (hedonic value) and longer-term ethical considerations (normative value) creates psychological discomfort that they attempt to resolve through various justification strategies.",
    color: "green",
    summary: "60% pay premium for green, still impulse buy non-green"
  },
  {
    title: "Collective Trust in Peer Voices",
    nugget: "Our social validation metrics show peer recommendations influence 70% of purchase decisions among younger demographics on our platform, particularly in experimental or niche market segments.",
    interpretation: "This phenomenon is rooted in informational social influence - when people are uncertain, they look to others for guidance. Evolutionary psychology suggests humans evolved to use social proof as a decision-making shortcut. In digital contexts, this manifests as heightened trust in decentralized opinions over centralized authority.",
    color: "orange",
    summary: "70% of youth purchasing influenced by peers"
  },
  {
    title: "Curious Minds Embracing the New",
    nugget: "Our feature adoption analytics identify segments with high curiosity—often creative professionals on our platform—driving 50% of early adoption rates and showing 30% higher engagement with cutting-edge features.",
    interpretation: "From a Big Five personality perspective, these users score high on 'Openness to Experience' - a trait associated with intellectual curiosity and preference for novelty. Neurologically, this may relate to differences in dopamine response systems that create stronger reward sensations when encountering new stimuli or solving novel problems.",
    color: "pink",
    summary: "Creative pros drive 50% of early adoption"
  },
  {
    title: "Mesmerized by Quality Promises",
    nugget: "Our site analytics show premium audience segments exhibiting 65% increased brand loyalty when our messaging combines luxury and durability themes with rhythmic, reassuring content structures.",
    interpretation: "This behavior reflects the psychological concept of 'implicit association' - these consumers have developed unconscious connections between specific narrative patterns and perceived quality. Luxury cognition research suggests that these audiences process premium quality cues through both rational assessment and emotional/symbolic pathways simultaneously.",
    color: "teal",
    summary: "65% more loyalty with luxury+durability messaging"
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
              <Button 
                className={`w-full text-left justify-start font-normal ${
                  insight.color === "blue" ? "bg-blue-950/50 text-blue-200" :
                  insight.color === "purple" ? "bg-purple-950/50 text-purple-200" :
                  insight.color === "green" ? "bg-green-950/50 text-green-200" :
                  insight.color === "orange" ? "bg-orange-950/50 text-orange-200" :
                  insight.color === "pink" ? "bg-pink-950/50 text-pink-200" :
                  "bg-teal-950/50 text-teal-200"
                }`}
                variant="outline"
              >
                {insight.summary}
              </Button>
              
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
