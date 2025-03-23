
import { FC } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const insightsData = [
  {
    title: "Unseen Longing for Prestige Brands",
    nugget: "Our purchase analytics reveal a 35% spike in conversion rates for premium brands among aspirational users, indicating an intense subconscious pull toward status products even when budget options exist.",
    interpretation: "35% is a significant increase compared to average conversion rates (typically 2-5%). This suggests a strong preference for premium products in your audience. Consider highlighting premium features or quality aspects in your marketing.",
    color: "blue",
    summary: "35% higher conversion for premium brands"
  },
  {
    title: "Fluid Digital Engagement Patterns",
    nugget: "Our cross-platform tracking shows 85% of users navigate seamlessly between our mobile and desktop interfaces, with tech-savvy segments demonstrating 40% higher interaction rates on innovative features.",
    interpretation: "85% cross-platform usage is well above the industry average of 60%. Your audience is highly device-agnostic. Ensure consistent experiences across all platforms and leverage innovative features to drive engagement.",
    color: "purple",
    summary: "85% cross-platform usage, 40% higher engagement"
  },
  {
    title: "Torn Between Indulgence and Ethics",
    nugget: "Our sustainability metrics show 60% of eco-conscious users willing to pay premium prices for green products, yet our impulse purchase tracking indicates significant spikes in non-sustainable buying during emotional triggers.",
    interpretation: "60% willingness to pay premium for sustainable options exceeds the market average of 45%. This indicates a substantial eco-conscious segment in your audience, though behavior may vary during emotional purchase decisions.",
    color: "green",
    summary: "60% pay premium for green, still impulse buy non-green"
  },
  {
    title: "Collective Trust in Peer Voices",
    nugget: "Our social validation metrics show peer recommendations influence 70% of purchase decisions among younger demographics on our platform, particularly in experimental or niche market segments.",
    interpretation: "70% peer influence rate is higher than the market average of 50%. This metric highlights the importance of social proof and word-of-mouth for your audience. Consider leveraging user testimonials and community engagement.",
    color: "orange",
    summary: "70% of youth purchasing influenced by peers"
  },
  {
    title: "Curious Minds Embracing the New",
    nugget: "Our feature adoption analytics identify segments with high curiosity—often creative professionals on our platform—driving 50% of early adoption rates and showing 30% higher engagement with cutting-edge features.",
    interpretation: "50% of early adoption is higher than the typical 30-35%. Your audience contains many early adopters who are willing to try new features. This suggests opportunities for innovation and introducing new offerings.",
    color: "pink",
    summary: "Creative pros drive 50% of early adoption"
  },
  {
    title: "Mesmerized by Quality Promises",
    nugget: "Our site analytics show premium audience segments exhibiting 65% increased brand loyalty when our messaging combines luxury and durability themes with rhythmic, reassuring content structures.",
    interpretation: "65% increased loyalty is substantially above average response rates. This indicates your audience strongly responds to quality-focused messaging. Emphasize durability and premium aspects in your communications.",
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
                disableHoverEffect={true}
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
