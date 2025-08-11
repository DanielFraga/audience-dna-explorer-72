import { FC, useState, useEffect } from 'react';
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { X, ChevronDown } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const wordsetData = [{
  title: "Societal Role",
  roleLabels: ["Single", "Engineer", "Mathematician", "Designer", "Higher Education", "Lone Wolf", "One child"],
  chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  positiveWords: [{
    text: "Happy",
    score: 85
  }, {
    text: "Excited",
    score: 92
  }, {
    text: "Satisfied",
    score: 67
  }, {
    text: "Impressed",
    score: 78
  }, {
    text: "Delighted",
    score: 95
  }, {
    text: "Confident",
    score: 73
  }, {
    text: "Pleased",
    score: 70
  }, {
    text: "Enthusiastic",
    score: 88
  }, {
    text: "Optimistic",
    score: 82
  }, {
    text: "Proud",
    score: 75
  }, {
    text: "Grateful",
    score: 87
  }, {
    text: "Relaxed",
    score: 62
  }, {
    text: "Inspired",
    score: 80
  }, {
    text: "Hopeful",
    score: 72
  }, {
    text: "Joyful",
    score: 90
  }, {
    text: "Thrilled",
    score: 93
  }, {
    text: "Content",
    score: 65
  }, {
    text: "Cheerful",
    score: 83
  }],
  negativeWords: [{
    text: "Frustrated",
    score: -65
  }, {
    text: "Disappointed",
    score: -72
  }, {
    text: "Concerned",
    score: -45
  }, {
    text: "Confused",
    score: -58
  }, {
    text: "Annoyed",
    score: -80
  }, {
    text: "Anxious",
    score: -89
  }],
  positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
  negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
  allPositiveWords: [{
    text: "Happy",
    score: 85
  }, {
    text: "Excited",
    score: 92
  }, {
    text: "Satisfied",
    score: 67
  }, {
    text: "Impressed",
    score: 78
  }, {
    text: "Delighted",
    score: 95
  }, {
    text: "Confident",
    score: 73
  }, {
    text: "Pleased",
    score: 70
  }, {
    text: "Enthusiastic",
    score: 88
  }, {
    text: "Optimistic",
    score: 82
  }, {
    text: "Proud",
    score: 75
  }, {
    text: "Grateful",
    score: 87
  }, {
    text: "Relaxed",
    score: 62
  }, {
    text: "Inspired",
    score: 80
  }, {
    text: "Hopeful",
    score: 72
  }, {
    text: "Joyful",
    score: 90
  }, {
    text: "Thrilled",
    score: 93
  }, {
    text: "Content",
    score: 65
  }, {
    text: "Cheerful",
    score: 83
  }, {
    text: "Pleased",
    score: 70
  }, {
    text: "Enthusiastic",
    score: 88
  }, {
    text: "Optimistic",
    score: 82
  }, {
    text: "Proud",
    score: 75
  }, {
    text: "Grateful",
    score: 87
  }, {
    text: "Relaxed",
    score: 62
  }, {
    text: "Inspired",
    score: 80
  }, {
    text: "Hopeful",
    score: 72
  }, {
    text: "Joyful",
    score: 90
  }, {
    text: "Thrilled",
    score: 93
  }, {
    text: "Content",
    score: 65
  }, {
    text: "Cheerful",
    score: 83
  }],
  allNegativeWords: [{
    text: "Frustrated",
    score: -65
  }, {
    text: "Disappointed",
    score: -72
  }, {
    text: "Concerned",
    score: -45
  }, {
    text: "Confused",
    score: -58
  }, {
    text: "Annoyed",
    score: -80
  }, {
    text: "Anxious",
    score: -89
  }]
}, {
  title: "Best-Performing Channels / Placements",
  roleLabels: ["Meta: Facebook Feed, Reels, Audience Network (Rewarded Video)", "Google: YouTube In-Stream, Display Network – sports & betting affinity audiences", "Programmatic/DV360: Sports news, betting forums, esports streams"],
  chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  positiveWords: [],
  negativeWords: [],
  positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
  negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
  allPositiveWords: [],
  allNegativeWords: [],
  bulletPoints: [{
    label: "Meta:",
    content: "Facebook Feed, Reels, Audience Network (Rewarded Video)"
  }, {
    label: "Google:",
    content: "YouTube In-Stream, Display Network – sports & betting affinity audiences"
  }, {
    label: "Programmatic/DV360:",
    content: "Sports news, betting forums, esports streams"
  }]
}, {
  title: "Influencer / Creator Collaborator Profile",
  roleLabels: [],
  chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  positiveWords: [],
  negativeWords: [],
  positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
  negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
  allPositiveWords: [],
  allNegativeWords: [],
  bulletPoints: [
    { label: "Thoughtful Analysis", content: "Twitch Streamer (Methodical Analyzers)" },
    { label: "Football Memes", content: "Instagram Reel Creators (Emotion-driven bettors)" },
    { label: "Football History", content: "YouTuber (Loyalty-first, Suspicious of mainstream)" },
    { label: "Bro Podcast Sphere", content: "Europe-based (Social bettors & Risk-maximizers)" }
  ]
}, {
  title: "Optimal Timing",
  roleLabels: ["Peak CTR: 1–2 hours before live matches or big events", "Retarget lapsed bettors within 24h of event finish"],
  chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  positiveWords: [],
  negativeWords: [],
  positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
  negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
  allPositiveWords: [],
  allNegativeWords: [],
  bulletPoints: [{
    label: "Peak CTR:",
    content: "1–2 hours before live matches or big events"
  }, {
    label: "Retarget:",
    content: "lapsed bettors within 24h of event finish"
  }]
}, {
  title: "Triggering Moments",
  roleLabels: [],
  chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  positiveWords: [],
  negativeWords: [],
  positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
  negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
  allPositiveWords: [],
  allNegativeWords: [],
  bulletPoints: [
    { label: "Breaking injury updates", content: "lineup changes and team news" },
    { label: "Live odds swings", content: "momentum shifts during games" },
    { label: "Cup finals & rivalries", content: "derby matches and high-stakes games" }
  ]
}, {
  title: "Bidding & Budget Tips",
  roleLabels: ["Start with tCPI < $5 for mobile acquisition, then scale to tROAS campaigns after day 3"],
  chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  positiveWords: [],
  negativeWords: [],
  positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
  negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
  allPositiveWords: [],
  allNegativeWords: [],
  bulletPoints: [{
    label: "Start with tCPI:",
    content: "< $5 for mobile acquisition, then scale to tROAS campaigns after day 3"
  }]
}, {
  title: "Activation Guidance",
  roleLabels: [],
  chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  positiveWords: [],
  negativeWords: [],
  positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
  negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
  allPositiveWords: [],
  allNegativeWords: [],
  bulletPoints: [
    { label: "Sequential messaging", content: "awareness → education → conversion flow" },
    { label: "Geo/time segmentation", content: "around stadiums and match windows" },
    { label: "Coordinate with influencers", content: "align with posting schedules" }
  ]
}];

const surveyData = [{
  question: "What factors influence your holiday purchase decisions?",
  response: "I typically plan my holiday shopping months in advance to find the best deals and ensure availability.",
  confidence: 0.87
}, {
  question: "How do you prefer to spend your holiday budget?",
  response: "Most of my holiday spending goes towards gifts for family, with some reserved for holiday decorations.",
  confidence: 0.92
}, {
  question: "What's your preferred holiday shopping channel?",
  response: "I prefer online shopping during the holiday season to avoid crowded stores and save time.",
  confidence: 0.78
}, {
  question: "How important are holiday promotions to you?",
  response: "I actively seek out holiday deals and special offers, especially during major shopping events.",
  confidence: 0.85
}, {
  question: "What challenges do you face during holiday shopping?",
  response: "Finding unique holiday gifts within budget and managing delivery times are my main concerns.",
  confidence: 0.95
}, {
  question: "How far in advance do you plan holiday purchases?",
  response: "I start my holiday planning at least 2-3 months before to avoid last-minute stress.",
  confidence: 0.83
}, {
  question: "What influences your holiday gift choices?",
  response: "Personal preferences and holiday wish lists from family members guide my gift selections.",
  confidence: 0.89
}, {
  question: "How do you manage holiday season stress?",
  response: "I create detailed holiday shopping lists and stick to a predetermined budget.",
  confidence: 0.91
}, {
  question: "What's your holiday shopping strategy?",
  response: "I combine online and in-store holiday shopping to get the best of both experiences.",
  confidence: 0.88
}, {
  question: "How has your holiday shopping changed recently?",
  response: "I've shifted more towards online holiday shopping and started planning earlier than before.",
  confidence: 0.86
}, {
  question: "What matters most in holiday gift selection?",
  response: "Finding meaningful holiday gifts that reflect personal connections is my priority.",
  confidence: 0.82
}, {
  question: "How do you track holiday expenses?",
  response: "I use a dedicated app to monitor holiday spending and stay within my budget.",
  confidence: 0.84
}];

export const SurveyTab: FC = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  const [sortedSurveyData, setSortedSurveyData] = useState([...surveyData]);

  // Sort the survey data by confidence score (high to low) on component mount
  useEffect(() => {
    const sorted = [...surveyData].sort((a, b) => b.confidence - a.confidence);
    setSortedSurveyData(sorted);
  }, []);

  const handleOpenDialog = (index: number) => {
    setOpenDialog(index);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  // Organize cards by sections for 2x3 grid (6 cards total)
  const sections = [
    {
      title: "🎯 Target Audience",
      cards: [
        wordsetData.find(w => w.title === "Societal Role"), // Audience Segments (Essentials kept)
        wordsetData.find(w => w.title === "Influencer / Creator Collaborator Profile"),
        wordsetData.find(w => w.title === "Best-Performing Channels / Placements")
      ]
    },
    {
      title: "📍 Placement & Execution", 
      cards: [
        { 
          title: "Optimal Timing", 
          isMerged: true,
          timingBullets: wordsetData.find(w => w.title === "Optimal Timing")?.bulletPoints || [],
          biddingBullets: wordsetData.find(w => w.title === "Bidding & Budget Tips")?.bulletPoints || []
        },
        wordsetData.find(w => w.title === "Triggering Moments"),
        wordsetData.find(w => w.title === "Activation Guidance")
      ]
    }
  ];

  const getCardConfig = (title: string) => {
    switch(title) {
      case "Societal Role":
        return { title: "🎯 Audience Segments", color: "text-white" };
      case "Best-Performing Channels / Placements":
        return { title: "📱 Best-Performing Channels", color: "text-white" };
      case "Influencer / Creator Collaborator Profile":
        return { title: "🤝 Influencer Collaborators", color: "text-white" };
      case "Optimal Timing":
        return { title: "⏰ Timing & Budget", color: "text-white" };
      case "Triggering Moments":
        return { title: "🚨 Triggering Moments", color: "text-white" };
      case "Bidding & Budget Tips":
        return { title: "💰 Bidding & Budget Tips", color: "text-white" };
      case "Activation Guidance":
        return { title: "🧭 Activation Guidance", color: "text-white" };
      case "Reserved Slot":
        return { title: "Reserved slot", color: "text-gray-400" };
      default:
        return { title: title, color: "text-white" };
    }
  };

  const renderCardContent = (wordset: any) => {
    // Handle merged Optimal Timing card
    if (wordset?.isMerged && wordset?.title === "Optimal Timing") {
      return (
        <div className="flex-grow">
          <div className="space-y-6">
            {/* Timing Section */}
            <div>
              <h4 className="text-sm font-medium text-gray-200 mb-3">Timing</h4>
              <ul className="space-y-2 text-[15px] text-gray-300">
                {wordset.timingBullets.map((bullet: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-white">{bullet.label}</span> {bullet.content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Budget Section */}
            <div>
              <h4 className="text-sm font-medium text-gray-200 mb-3">Budget</h4>
              <ul className="space-y-2 text-[15px] text-gray-300">
                {wordset.biddingBullets.map((bullet: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-white">{bullet.label}</span> {bullet.content}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Advanced bullets for Timing & Budget */}
              <div className="my-3">
                <div className="h-px bg-border/40" />
              </div>
              <ul className="space-y-2 text-[15px] text-foreground/90">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />Engagement-level retargeting (3s, 10s, 75% viewers, clickers, ATC, purchasers)</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />Recency decay windows (1-day hot, 7-day warm, 30-day cold)</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />Budget ramp sequencing for each tier</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />Bid strategy notes per channel (tCPA for cold, tROAS for warm, manual bids for hot)</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />Frequency capping & creative fatigue windows per platform</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    if (wordset?.title === "Societal Role") {
      return (
        <div className="space-y-4 flex-grow">
          <ul className="space-y-2 text-[15px] text-gray-300">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
              <div>
                <span className="font-medium text-white">Bettor Mindsets:</span> Underdog Chaser, Ego-Driven Bettor, Casual Social Bettor
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
              <div>
                <span className="font-medium text-white">Demographics:</span> <span className="font-semibold text-blue-400">25–44</span>, male-skewed (65%), mobile-first (iOS 55%, Android 45%), Tier-1 EN + LATAM high-LTV
              </div>
            </li>
          </ul>

          {/* Divider */}
          <div className="my-3">
            <div className="h-px bg-border/40" />
          </div>

          {/* Advanced bullets */}
          <ul className="space-y-2 text-[15px] text-foreground/90">
            <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />Purchase intent signals (recent store visits, engaged with relevant influencers in past 7 days)</li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />Micro-moments (lunchtime scroll, evening relaxation)</li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />Life events (engagement, moving, new job)</li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />Brand affinity, lookalikes, anti-affinity</li>
          </ul>
        </div>
      );
    }

    if (wordset?.bulletPoints) {
      return (
        <div className="flex-grow">
          <ul className="space-y-2 text-sm text-gray-300">
            {wordset.bulletPoints.map((bullet: any, idx: number) => {
              const getColorForCard = (title: string, index: number) => {
                if (title === "Best-Performing Channels / Placements") return ["bg-blue-400", "bg-green-400", "bg-purple-400"][index % 3];
                if (title === "Influencer / Creator Collaborator Profile") return ["bg-pink-400", "bg-yellow-400", "bg-cyan-400", "bg-red-400"][index % 4];
                if (title === "Triggering Moments") return ["bg-red-400", "bg-yellow-400", "bg-green-400"][index % 3];
                if (title === "Activation Guidance") return ["bg-purple-400", "bg-orange-400", "bg-teal-400"][index % 3];
                return "bg-gray-400";
              };
              
              return (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full ${getColorForCard(wordset.title, idx)} mt-1.5 flex-shrink-0`}></div>
                  <div>
                    {/* Handle platform names for Best-Performing Channels */}
                    {wordset.title === "Best-Performing Channels / Placements" ? (
                      <>
                        <span className="font-semibold text-white">{bullet.label}</span> {bullet.content}
                      </>
                    ) : bullet.content.includes("Twitch") || bullet.content.includes("Instagram") || bullet.content.includes("YouTuber") || bullet.content.includes("Podcast") ? (
                      <span dangerouslySetInnerHTML={{
                        __html: `<span class="font-medium text-white">${bullet.label}:</span> ${bullet.content
                          .replace(/Twitch/g, '<span class="font-semibold text-blue-400">Twitch</span>')
                          .replace(/Instagram/g, '<span class="font-semibold text-blue-400">Instagram</span>')
                          .replace(/YouTuber/g, '<span class="font-semibold text-blue-400">YouTuber</span>')
                          .replace(/Podcast/g, '<span class="font-semibold text-blue-400">Podcast</span>')}`
                      }} />
                    ) : (
                      <>
                        <span className="font-medium text-white">{bullet.label}:</span> {bullet.content}
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="space-y-8 animate-slide-up pt-4">
      {/* Targeting & Activation Cards in 3x3 Grid */}
      <div className="p-3 md:p-6">
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              {/* Subtle Section Label */}
              <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                {section.title}
              </h2>
              
              {/* Grid of Cards - 2 rows of 3 cards */}
              <div id="targeting-export-root" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-[320px]:grid-cols-1">
                {section.cards.map((card, cardIndex) => {
                  const cardConfig = getCardConfig(card?.title || "");
                  
                  return (
                    <GlassCard title={cardConfig.title}>
                      {renderCardContent(card)}
                    </GlassCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Angles That Might Resonate Section */}
      <div className="mt-8 p-3 md:p-6">
        <div className="space-y-6">
          {/* Subtle Section Label */}
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
            🎯 Angles That Might Resonate
          </h2>
          
          {/* Angle Tiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-gray-800/25 backdrop-blur-sm backdrop-saturate-180 rounded-lg p-6 border border-white/15 min-h-[160px] flex flex-col justify-center hover-scale animate-fade-in">
              <div className="text-center space-y-3">
                <div className="text-2xl">⚡</div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Underdog Redemption
                </h3>
                <p className="text-sm text-gray-300">
                  Loyalty-first bettors, comeback wins, turning public doubt into pride.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/25 backdrop-blur-sm backdrop-saturate-180 rounded-lg p-6 border border-white/15 min-h-[160px] flex flex-col justify-center hover-scale animate-fade-in">
              <div className="text-center space-y-3">
                <div className="text-2xl">🚀</div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Prove Them Wrong
                </h3>
                <p className="text-sm text-gray-300">
                  Emotion-driven defiance, reversing predictions, reclaiming bragging rights.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/25 backdrop-blur-sm backdrop-saturate-180 rounded-lg p-6 border border-white/15 min-h-[160px] flex flex-col justify-center hover-scale animate-fade-in">
              <div className="text-center space-y-3">
                <div className="text-2xl">🤝</div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Bet With Your Tribe
                </h3>
                <p className="text-sm text-gray-300">
                  Social bettors, group rituals, coordinated wagers for shared glory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Survey Cards at the top - now using sortedSurveyData */}
      <div className="flex flex-col space-y-3">
        {sortedSurveyData.map((item, index) => (
          <div key={index} className="bg-gray-900 rounded-lg border border-gray-800 p-4 relative hover:border-gray-700 transition-colors">
            <div className="absolute top-3 right-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-full h-full rounded-full border-2 ${Number(item.confidence) >= 0.9 ? 'border-green-500' : Number(item.confidence) >= 0.7 ? 'border-blue-500' : 'border-yellow-500'}`} />
                  <span className="absolute text-xs font-medium text-gray-300">
                    {item.confidence}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm font-medium text-white mb-3 pr-12 line-clamp-3">
              {item.response}
            </p>
          </div>
        ))}
      </div>

      {/* Dialogs for "See more" */}
      {wordsetData.map((wordset, index) => (
        <Dialog key={index} open={openDialog === index} onOpenChange={handleCloseDialog}>
          <DialogContent className="bg-gray-900 border border-gray-800 max-w-lg">
            <DialogHeader className="relative">
              <DialogTitle className="text-lg font-semibold text-white">
                {wordset.title}
              </DialogTitle>
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 text-gray-400 hover:text-white" onClick={handleCloseDialog}>
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            <ScrollArea className="h-72 rounded-md">
              <div className="p-4">
                {/* For Media Sources, only show the positive words in blue */}
                {wordset.title === "Media Sources" ? (
                  <div>
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Media Sources</h4>
                    <div className="flex flex-wrap gap-2">
                      {wordset.allPositiveWords?.map((word, wordIndex) => (
                        <Badge key={`positive-all-${wordIndex}`} variant="outline" className="text-xs text-blue-400 border-blue-400 bg-blue-400/10">
                          {word.text}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-green-400 mb-2">Positive Responses</h4>
                      <div className="flex flex-wrap gap-2">
                        {wordset.allPositiveWords?.map((word, wordIndex) => (
                          <Badge key={`positive-all-${wordIndex}`} variant="outline" className={`text-xs ${wordset.positiveChipColor || "text-blue-400 border-blue-400 bg-blue-400/10"} flex items-center gap-1`}>
                            {word.text}
                            <span className="text-[10px] font-semibold">{word.score > 0 ? "+" : ""}{word.score}%</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-red-400 mb-2">Negative Responses</h4>
                      <div className="flex flex-wrap gap-2">
                        {wordset.allNegativeWords?.map((word, wordIndex) => (
                          <Badge key={`negative-all-${wordIndex}`} variant="outline" className={`text-xs ${wordset.negativeChipColor || "text-red-400 border-red-400 bg-red-400/10"} flex items-center gap-1`}>
                            {word.text}
                            <span className="text-[10px] font-semibold">{word.score}%</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};