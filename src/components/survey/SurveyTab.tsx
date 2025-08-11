import { FC, useState, useEffect } from 'react';
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { X } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
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
  bulletPoints: [{
    label: "🎮",
    content: "Thoughtful Tactical Analysis Twitch Streamer (Methodical Analyzers)"
  }, {
    label: "😂",
    content: "Funny Football Memes Reel Creators (Instagram) (Emotion-driven bettors)"
  }, {
    label: "📜",
    content: "Football History YouTuber (Loyalty-first, Suspicious of mainstream)"
  }, {
    label: "🎙",
    content: "Europe-based \"Bro\" Podcast Sphere (Social bettors & Risk-maximizers)"
  }]
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
    { label: "🚨", content: "Breaking injury updates and lineup changes" },
    { label: "⚡", content: "Live odds swings and momentum shifts" },
    { label: "🏆", content: "Cup finals, derby matches, and rivalries" },
    { label: "📰", content: "Transfer rumors and major news cycles" }
  ]
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
    { label: "🧭", content: "Sequential messaging: awareness → education → conversion" },
    { label: "📍", content: "Geo/time segmentation around stadiums and match windows" },
    { label: "🤝", content: "Coordinate drops with influencer posting schedules" },
    { label: "🔁", content: "Retarget engaged viewers with boosted offers" }
  ]
}, {
  title: "Future expansion slot",
  roleLabels: [],
  chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  positiveWords: [],
  negativeWords: [],
  positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
  negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
  allPositiveWords: [],
  allNegativeWords: [],
  bulletPoints: []
}, {
  title: "Future expansion slot",
  roleLabels: [],
  chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  positiveWords: [],
  negativeWords: [],
  positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
  negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
  allPositiveWords: [],
  allNegativeWords: [],
  bulletPoints: []
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
  const [page, setPage] = useState(0);
  const pageSize = 9;

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
  return <div className="space-y-8 animate-slide-up">
      {/* Wordset Cards in Carousel at the bottom */}
      <div className="mt-8 bg-gray-900/50 rounded-lg p-3 md:p-4 border border-gray-800">
        <Carousel opts={{
        align: "start",
        loop: true
      }} className="w-full">
          <CarouselContent>
            {wordsetData.map((wordset, index) => {
              // Define card titles and colors
              const getCardConfig = (title: string) => {
                switch(title) {
                  case "Societal Role":
                    return { title: "Audience Segments", color: "text-white" };
                  case "Best-Performing Channels / Placements":
                    return { title: "Best-Performing Channels / Placements", color: "text-white" };
                  case "Influencer / Creator Collaborator Profile":
                    return { title: "🎯 Influencer / Creator Collaborator Profile", color: "text-white" };
                  case "Optimal Timing":
                    return { title: "Optimal Timing", color: "text-white" };
                  case "Bidding & Budget Tips":
                    return { title: "Bidding & Budget Tips", color: "text-white" };
                  default:
                    return { title: "Audience Segments", color: "text-white" };
                }
              };
              
              const cardConfig = getCardConfig(wordset.title);
              
              return <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 hover-scale animate-fade-in">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 h-full">
                    <h3 className={`text-base md:text-lg font-semibold ${cardConfig.color} tracking-tight mb-4 pb-2 border-b border-gray-700/60`}>
                      {cardConfig.title}
                    </h3>
                    {/* Audience Segments card content */}
                    {wordset.title === "Societal Role" ? <div className="space-y-4">
                        <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-700/40">
                          <ul className="space-y-3 text-xs text-gray-300">
                            <li className="flex items-start gap-2">
                              <span className="text-sm mt-0.5">🎯</span>
                              <div>
                                <span className="font-semibold text-gray-200">Bettor Mindsets:</span> Underdog Chaser, Ego-Driven Bettor, Casual Social Bettor
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-sm mt-0.5">👤</span>
                              <div>
                                <span className="font-semibold text-gray-200">Age:</span> <span className="font-bold text-white">25–44</span>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-sm mt-0.5">👤</span>
                              <div>
                                <span className="font-semibold text-gray-200">Gender:</span> <span className="font-bold text-white">Male-skewed (65%)</span>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-sm mt-0.5">📱</span>
                              <div>
                                <span className="font-semibold text-gray-200">Device:</span> <span className="font-bold text-white">Mobile-first (iOS 55%, Android 45%)</span>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-sm mt-0.5">🌍</span>
                              <div>
                                <span className="font-semibold text-gray-200">Geo:</span> Target Tier-1 English-speaking countries + high-LTV regions in LATAM
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div> : <div className="flex flex-wrap gap-2 flex-grow">
                        {/* Display bullet points for targeting cards */}
                        {wordset.title === "Best-Performing Channels / Placements" && <div className="w-full">
                            <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-700/40">
                              <ul className="space-y-3 text-xs text-gray-300">
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">📘</span>
                                  <div>
                                    <span className="font-semibold text-gray-200">Meta:</span> Facebook Feed, Reels, Audience Network (Rewarded Video)
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">▶️</span>
                                  <div>
                                    <span className="font-semibold text-gray-200">Google:</span> YouTube In-Stream, Display Network – sports & betting affinity audiences
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">📰</span>
                                  <div>
                                    <span className="font-semibold text-gray-200">Programmatic/DV360:</span> Sports news, betting forums, esports streams
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>}
                        
                        {wordset.title === "Influencer / Creator Collaborator Profile" && <div className="w-full">
                            <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-700/40">
                              <ul className="space-y-2.5 text-xs text-gray-300">
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">🎮</span>
                                  <div>
                                    Thoughtful Tactical Analysis <span className="font-bold text-white">Twitch</span> Streamer (Methodical Analyzers)
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">😂</span>
                                  <div>
                                    Funny Football Memes Reel Creators (<span className="font-bold text-white">Instagram</span>) (Emotion-driven bettors)
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">📜</span>
                                  <div>
                                    Football History <span className="font-bold text-white">YouTuber</span> (Loyalty-first, Suspicious of mainstream)
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">🎙</span>
                                  <div>
                                    Europe-based "Bro" <span className="font-bold text-white">Podcast</span> Sphere (Social bettors & Risk-maximizers)
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>}
                        
                        {wordset.title === "Optimal Timing" && <div className="w-full">
                            <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-700/40">
                              <ul className="space-y-3 text-xs text-gray-300">
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">⏰</span>
                                  <div>
                                    <span className="font-semibold text-gray-200">Peak CTR:</span> <span className="font-bold text-white">1–2 hours before</span> live matches or big events
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">🔄</span>
                                  <div>
                                    <span className="font-semibold text-gray-200">Retarget:</span> lapsed bettors <span className="font-bold text-white">within 24h</span> of event finish
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>}
                        
                        {wordset.title === "Bidding & Budget Tips" && <div className="w-full">
                            <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-700/40">
                              <ul className="space-y-3 text-xs text-gray-300">
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">💰</span>
                                  <div>
                                    <span className="font-semibold text-gray-200">Start with tCPI:</span> <span className="font-bold text-white">&lt; $5</span> for mobile acquisition
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-sm mt-0.5">📈</span>
                                  <div>
                                    <span className="font-semibold text-gray-200">Scale to tROAS:</span> campaigns after day 3
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>}
                      </div>}
                  </div>
              </CarouselItem>
            })}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative -left-0 bg-gray-800 hover:bg-gray-700 border-gray-700" />
            <CarouselNext className="relative -right-0 bg-gray-800 hover:bg-gray-700 border-gray-700" />
          </div>
        </Carousel>
      </div>

      {/* Survey Cards at the top - now using sortedSurveyData */}
      <div className="flex flex-col space-y-3">
        {sortedSurveyData.map((item, index) => <div key={index} className="bg-gray-900 rounded-lg border border-gray-800 p-4 relative hover:border-gray-700 transition-colors">
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
          </div>)}
      </div>


      {/* Dialogs for "See more" */}
      {wordsetData.map((wordset, index) => <Dialog key={index} open={openDialog === index} onOpenChange={handleCloseDialog}>
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
                {wordset.title === "Media Sources" ? <div>
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Media Sources</h4>
                    <div className="flex flex-wrap gap-2">
                      {wordset.allPositiveWords?.map((word, wordIndex) => <Badge key={`positive-all-${wordIndex}`} variant="outline" className="text-xs text-blue-400 border-blue-400 bg-blue-400/10">
                          {word.text}
                        </Badge>)}
                    </div>
                  </div> : <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-green-400 mb-2">Positive Responses</h4>
                      <div className="flex flex-wrap gap-2">
                        {wordset.allPositiveWords?.map((word, wordIndex) => <Badge key={`positive-all-${wordIndex}`} variant="outline" className={`text-xs ${wordset.positiveChipColor || "text-blue-400 border-blue-400 bg-blue-400/10"} flex items-center gap-1`}>
                            {word.text}
                            <span className="text-[10px] font-semibold">{word.score > 0 ? "+" : ""}{word.score}%</span>
                          </Badge>)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-red-400 mb-2">Negative Responses</h4>
                      <div className="flex flex-wrap gap-2">
                        {wordset.allNegativeWords?.map((word, wordIndex) => <Badge key={`negative-all-${wordIndex}`} variant="outline" className={`text-xs ${wordset.negativeChipColor || "text-red-400 border-red-400 bg-red-400/10"} flex items-center gap-1`}>
                            {word.text}
                            <span className="text-[10px] font-semibold">{word.score}%</span>
                          </Badge>)}
                      </div>
                    </div>
                  </div>}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>)}
    </div>;
};