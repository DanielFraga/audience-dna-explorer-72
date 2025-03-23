
import { FC, useState, useEffect } from 'react';
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { X } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";

const wordsetData = [
  {
    title: "Sentiment",
    subheader: "Emotional Responses",
    positiveWords: [
      { text: "Happy", score: 85 },
      { text: "Excited", score: 92 },
      { text: "Satisfied", score: 67 },
      { text: "Impressed", score: 78 },
      { text: "Delighted", score: 95 },
      { text: "Confident", score: 73 }
    ],
    negativeWords: [
      { text: "Frustrated", score: -65 },
      { text: "Disappointed", score: -72 },
      { text: "Concerned", score: -45 },
      { text: "Confused", score: -58 },
      { text: "Annoyed", score: -80 },
      { text: "Anxious", score: -89 }
    ],
    positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
    negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
    allPositiveWords: [
      { text: "Happy", score: 85 },
      { text: "Excited", score: 92 },
      { text: "Satisfied", score: 67 },
      { text: "Impressed", score: 78 },
      { text: "Delighted", score: 95 },
      { text: "Confident", score: 73 },
      { text: "Pleased", score: 70 },
      { text: "Enthusiastic", score: 88 },
      { text: "Optimistic", score: 82 },
      { text: "Proud", score: 75 },
      { text: "Grateful", score: 87 },
      { text: "Relaxed", score: 62 },
      { text: "Inspired", score: 80 },
      { text: "Hopeful", score: 72 },
      { text: "Joyful", score: 90 },
      { text: "Thrilled", score: 93 },
      { text: "Content", score: 65 },
      { text: "Cheerful", score: 83 }
    ],
    allNegativeWords: [
      { text: "Frustrated", score: -65 },
      { text: "Disappointed", score: -72 },
      { text: "Concerned", score: -45 },
      { text: "Confused", score: -58 },
      { text: "Annoyed", score: -80 },
      { text: "Anxious", score: -89 },
      { text: "Angry", score: -85 },
      { text: "Sad", score: -75 },
      { text: "Stressed", score: -82 },
      { text: "Worried", score: -68 },
      { text: "Overwhelmed", score: -78 },
      { text: "Unsatisfied", score: -71 },
      { text: "Discouraged", score: -63 },
      { text: "Hesitant", score: -50 },
      { text: "Doubtful", score: -55 },
      { text: "Uncomfortable", score: -60 },
      { text: "Unhappy", score: -77 },
      { text: "Skeptical", score: -42 }
    ]
  },
  {
    title: "Cultural Milieu",
    subheader: "Holidays & Cultural References",
    positiveWords: [
      { text: "Christmas", score: 78 },
      { text: "Halloween", score: 82 },
      { text: "Super Bowl", score: 75 },
      { text: "Black Friday", score: 65 }
    ],
    negativeWords: [
      { text: "Black Friday Rush", score: -45 },
      { text: "Holiday Stress", score: -62 },
      { text: "Commercialization", score: -58 },
      { text: "FOMO", score: -70 }
    ],
    positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
    negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
    allPositiveWords: [
      { text: "Christmas", score: 78 },
      { text: "Halloween", score: 82 },
      { text: "Super Bowl", score: 75 },
      { text: "Black Friday", score: 65 },
      { text: "Thanksgiving", score: 88 },
      { text: "New Year's Eve", score: 85 },
      { text: "Valentine's Day", score: 72 },
      { text: "Pride Month", score: 77 },
      { text: "Fourth of July", score: 80 }
    ],
    allNegativeWords: [
      { text: "Black Friday Rush", score: -45 },
      { text: "Holiday Stress", score: -62 },
      { text: "Commercialization", score: -58 },
      { text: "FOMO", score: -70 },
      { text: "Holiday Traffic", score: -65 },
      { text: "Overcrowding", score: -55 },
      { text: "Gift Pressure", score: -48 },
      { text: "Season Depression", score: -75 }
    ]
  },
  {
    title: "Media Sources",
    subheader: "Content Consumption Channels",
    positiveWords: [
      { text: "TikTok", score: 88 },
      { text: "Netflix", score: 92 },
      { text: "YouTube", score: 85 },
      { text: "Instagram", score: 78 }
    ],
    negativeWords: [
      { text: "Cable TV", score: -45 },
      { text: "Pop-up Ads", score: -82 },
      { text: "Spam Email", score: -75 },
      { text: "Clickbait", score: -68 }
    ],
    positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
    negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
    allPositiveWords: [
      { text: "TikTok", score: 88 },
      { text: "Netflix", score: 92 },
      { text: "YouTube", score: 85 },
      { text: "Instagram", score: 78 },
      { text: "Spotify", score: 90 },
      { text: "Disney+", score: 82 },
      { text: "Twitch", score: 76 },
      { text: "HBO Max", score: 80 },
      { text: "Podcasts", score: 87 }
    ],
    allNegativeWords: [
      { text: "Cable TV", score: -45 },
      { text: "Pop-up Ads", score: -82 },
      { text: "Spam Email", score: -75 },
      { text: "Clickbait", score: -68 },
      { text: "Intrusive Ads", score: -72 },
      { text: "Fake News", score: -88 },
      { text: "Paywalls", score: -65 },
      { text: "Buffering", score: -58 }
    ]
  }
];

const surveyData = [
  {
    question: "What factors influence your holiday purchase decisions?",
    response: "I typically plan my holiday shopping months in advance to find the best deals and ensure availability.",
    confidence: 0.87
  },
  {
    question: "How do you prefer to spend your holiday budget?",
    response: "Most of my holiday spending goes towards gifts for family, with some reserved for holiday decorations.",
    confidence: 0.92
  },
  {
    question: "What's your preferred holiday shopping channel?",
    response: "I prefer online shopping during the holiday season to avoid crowded stores and save time.",
    confidence: 0.78
  },
  {
    question: "How important are holiday promotions to you?",
    response: "I actively seek out holiday deals and special offers, especially during major shopping events.",
    confidence: 0.85
  },
  {
    question: "What challenges do you face during holiday shopping?",
    response: "Finding unique holiday gifts within budget and managing delivery times are my main concerns.",
    confidence: 0.95
  },
  {
    question: "How far in advance do you plan holiday purchases?",
    response: "I start my holiday planning at least 2-3 months before to avoid last-minute stress.",
    confidence: 0.83
  },
  {
    question: "What influences your holiday gift choices?",
    response: "Personal preferences and holiday wish lists from family members guide my gift selections.",
    confidence: 0.89
  },
  {
    question: "How do you manage holiday season stress?",
    response: "I create detailed holiday shopping lists and stick to a predetermined budget.",
    confidence: 0.91
  },
  {
    question: "What's your holiday shopping strategy?",
    response: "I combine online and in-store holiday shopping to get the best of both experiences.",
    confidence: 0.88
  },
  {
    question: "How has your holiday shopping changed recently?",
    response: "I've shifted more towards online holiday shopping and started planning earlier than before.",
    confidence: 0.86
  },
  {
    question: "What matters most in holiday gift selection?",
    response: "Finding meaningful holiday gifts that reflect personal connections is my priority.",
    confidence: 0.82
  },
  {
    question: "How do you track holiday expenses?",
    response: "I use a dedicated app to monitor holiday spending and stay within my budget.",
    confidence: 0.84
  }
];

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

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Survey Cards at the top - now using sortedSurveyData */}
      <div className="flex flex-col space-y-3">
        {sortedSurveyData.map((item, index) => (
          <div 
            key={index}
            className="bg-gray-900 rounded-lg border border-gray-800 p-4 relative hover:border-gray-700 transition-colors"
          >
            <div className="absolute top-3 right-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className={`w-full h-full rounded-full border-2 ${
                      Number(item.confidence) >= 0.9 ? 'border-green-500' :
                      Number(item.confidence) >= 0.7 ? 'border-blue-500' :
                      'border-yellow-500'
                    }`}
                  />
                  <span className="absolute text-xs font-medium text-gray-300">
                    {item.confidence}
                  </span>
                </div>
              </div>
            </div>

            <p 
              className="text-sm font-medium text-white mb-3 pr-12 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: item.response.replace(/holiday/gi, (match) => (
                  `<span class="text-blue-400">${match}</span>`
                ))
              }}
            />

            <h3 
              className="text-xs text-gray-400 opacity-75"
              dangerouslySetInnerHTML={{
                __html: `Q${index + 1}: ${item.question.replace(/holiday/gi, (match) => (
                  `<span class="text-blue-400">${match}</span>`
                ))}`
              }}
            />
          </div>
        ))}
      </div>

      {/* Wordset Cards in Carousel at the bottom */}
      <div className="mt-8 bg-gray-900/50 rounded-lg p-4 border border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-4">Key Insights</h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {wordsetData.map((wordset, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 h-full hover:border-gray-700 transition-colors flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {wordset.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {wordset.subheader}
                  </p>
                  <div className="flex flex-wrap gap-2 flex-grow">
                    {wordset.positiveWords?.map((word, wordIndex) => (
                      <Badge
                        key={`positive-${wordIndex}`}
                        variant="outline"
                        className={`text-xs ${wordset.positiveChipColor} flex items-center gap-1`}
                      >
                        {word.text}
                        <span className="text-[10px] font-semibold">{word.score > 0 ? "+" : ""}{word.score}%</span>
                      </Badge>
                    ))}
                    {wordset.negativeWords?.map((word, wordIndex) => (
                      <Badge
                        key={`negative-${wordIndex}`}
                        variant="outline"
                        className={`text-xs ${wordset.negativeChipColor} flex items-center gap-1`}
                      >
                        {word.text}
                        <span className="text-[10px] font-semibold">{word.score}%</span>
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs text-gray-400 hover:text-white"
                      onClick={() => handleOpenDialog(index)}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative -left-0 bg-gray-800 hover:bg-gray-700 border-gray-700" />
            <CarouselNext className="relative -right-0 bg-gray-800 hover:bg-gray-700 border-gray-700" />
          </div>
        </Carousel>
      </div>

      {/* Dialogs for "See more" - keep them unchanged */}
      {wordsetData.map((wordset, index) => (
        <Dialog key={index} open={openDialog === index} onOpenChange={handleCloseDialog}>
          <DialogContent className="bg-gray-900 border border-gray-800 max-w-lg">
            <DialogHeader className="relative">
              <DialogTitle className="text-lg font-semibold text-white">
                {wordset.title}
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 text-gray-400 hover:text-white"
                onClick={handleCloseDialog}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            <ScrollArea className="h-72 rounded-md">
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-green-400 mb-2">Positive Responses</h4>
                    <div className="flex flex-wrap gap-2">
                      {wordset.allPositiveWords?.map((word, wordIndex) => (
                        <Badge
                          key={`positive-all-${wordIndex}`}
                          variant="outline"
                          className={`text-xs ${wordset.positiveChipColor} flex items-center gap-1`}
                        >
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
                        <Badge
                          key={`negative-all-${wordIndex}`}
                          variant="outline"
                          className={`text-xs ${wordset.negativeChipColor} flex items-center gap-1`}
                        >
                          {word.text}
                          <span className="text-[10px] font-semibold">{word.score}%</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
