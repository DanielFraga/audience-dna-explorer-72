
import { FC } from 'react';

const insightsData = [
  {
    title: "Unseen Longing for Prestige Brands",
    text: "Audience segments show an intense, almost subconscious pull toward premium brands, even when budget-friendly options exist. Purchase data reveals they're driven by a need for social acceptance, with trust in brand reputation spiking conversion rates by 35% among aspirational users.",
    color: "blue"
  },
  {
    title: "Fluid Digital Engagement Patterns",
    text: "Users navigate digital channels like nomads, seamlessly shifting between platforms with high mobile engagement (85% of interactions). Their behavior suggests a preference for dynamic, ever-changing content, with tech-savvy segments showing 40% higher interaction rates on innovative features.",
    color: "purple"
  },
  {
    title: "Torn Between Indulgence and Ethics",
    text: "Some users wrestle with conflicting desires: a rush to buy trendy, indulgent products versus a strong pull toward eco-friendly options. Willingness to pay a premium for sustainability hits 60% in eco-conscious segments, but impulse purchases spike during emotional triggers.",
    color: "green"
  },
  {
    title: "Collective Trust in Peer Voices",
    text: "Younger demographics heavily rely on peer recommendations and online communities, with 70% of purchase decisions influenced by social validation. Their behavior hints at a deep, almost instinctive trust in group wisdom, especially in experimental or niche markets.",
    color: "orange"
  },
  {
    title: "Curious Minds Embracing the New",
    text: "Segments with high curiosity and adaptability—often creative professionals or tech enthusiasts—jump at new features and products, driving 50% of early adoption rates. Their openness to disruption suggests targeting them with bold, cutting-edge campaigns could boost engagement by 30%.",
    color: "pink"
  },
  {
    title: "Mesmerized by Quality Promises",
    text: "Premium audiences are captivated by brands promising both luxury and durability, showing a 65% increase in loyalty when messaging feels rhythmic and reassuring. Their behavior indicates a near-hypnotic trust in quality narratives, balancing price sensitivity with a desire for status.",
    color: "teal"
  }
];

export const InsightsTab: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 animate-slide-up">
      {insightsData.map((insight, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-lg border border-gray-800 p-4 hover:border-gray-700 transition-colors"
        >
          <h3 className={`text-lg font-semibold mb-2 ${
            insight.color === "blue" ? "text-blue-400" :
            insight.color === "purple" ? "text-purple-400" :
            insight.color === "green" ? "text-green-400" :
            insight.color === "orange" ? "text-orange-400" :
            insight.color === "pink" ? "text-pink-400" :
            "text-teal-400"
          }`}>
            {insight.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {insight.text}
          </p>
        </div>
      ))}
    </div>
  );
};
