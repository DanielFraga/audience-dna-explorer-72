import { FC, useState } from 'react';
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { X } from "lucide-react";

const wordsetData = [
  {
    title: "Positive/Negative Sentiment",
    subheader: "Emotional Responses",
    positiveWords: ["Happy", "Excited", "Satisfied", "Impressed", "Delighted", "Confident"],
    negativeWords: ["Frustrated", "Disappointed", "Concerned", "Confused", "Annoyed", "Anxious"],
    positiveChipColor: "text-green-400 border-green-400 bg-green-400/10",
    negativeChipColor: "text-red-400 border-red-400 bg-red-400/10",
    allPositiveWords: [
      "Happy", "Excited", "Satisfied", "Impressed", "Delighted", "Confident",
      "Pleased", "Enthusiastic", "Optimistic", "Proud", "Grateful", "Relaxed",
      "Inspired", "Hopeful", "Joyful", "Thrilled", "Content", "Cheerful"
    ],
    allNegativeWords: [
      "Frustrated", "Disappointed", "Concerned", "Confused", "Annoyed", "Anxious",
      "Angry", "Sad", "Stressed", "Worried", "Overwhelmed", "Unsatisfied",
      "Discouraged", "Hesitant", "Doubtful", "Uncomfortable", "Unhappy", "Skeptical"
    ]
  },
  {
    title: "Cultural Milieu",
    subheader: "Holidays & Cultural References",
    words: ["Christmas", "Halloween", "Super Bowl", "Black Friday"],
    chipColor: "text-purple-400 border-purple-400 bg-purple-400/10",
    allWords: [
      "Christmas", "Halloween", "Super Bowl", "Black Friday", 
      "Thanksgiving", "New Year's Eve", "Valentine's Day", "Pride Month",
      "Fourth of July", "Cinco de Mayo", "Lunar New Year", "Mardi Gras",
      "Mother's Day", "Father's Day", "Memorial Day", "Labor Day"
    ]
  },
  {
    title: "Media Sources",
    subheader: "Content Consumption Channels",
    words: ["TikTok", "Netflix", "YouTube", "Instagram"],
    chipColor: "text-blue-400 border-blue-400 bg-blue-400/10",
    allWords: [
      "TikTok", "Netflix", "YouTube", "Instagram", "Facebook", 
      "Twitter/X", "Spotify", "Disney+", "Twitch", "HBO Max",
      "Apple TV+", "Reddit", "New York Times", "CNN", "Hulu",
      "Amazon Prime Video", "Local TV News", "Podcasts", "LinkedIn"
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

  const handleOpenDialog = (index: number) => {
    setOpenDialog(index);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Wordset Cards */}
      <div className="grid grid-cols-3 gap-4">
        {wordsetData.map((wordset, index) => (
          <div 
            key={index}
            className="bg-gray-900 rounded-lg border border-gray-800 p-4 hover:border-gray-700 transition-colors flex flex-col"
          >
            <h3 className="text-lg font-semibold text-white mb-1">
              {wordset.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {wordset.subheader}
            </p>
            <div className="flex flex-wrap gap-2 flex-grow">
              {index === 0 ? (
                <>
                  {/* Positive words */}
                  {wordset.positiveWords?.map((word, wordIndex) => (
                    <Badge
                      key={`positive-${wordIndex}`}
                      variant="outline"
                      className={wordset.positiveChipColor}
                    >
                      {word}
                    </Badge>
                  ))}
                  {/* Negative words */}
                  {wordset.negativeWords?.map((word, wordIndex) => (
                    <Badge
                      key={`negative-${wordIndex}`}
                      variant="outline"
                      className={wordset.negativeChipColor}
                    >
                      {word}
                    </Badge>
                  ))}
                </>
              ) : (
                wordset.words?.map((word, wordIndex) => (
                  <Badge
                    key={wordIndex}
                    variant="outline"
                    className={`text-xs ${wordset.chipColor}`}
                  >
                    {word}
                  </Badge>
                ))
              )}
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

            {/* Dialog for "See more" */}
            <Dialog open={openDialog === index} onOpenChange={handleCloseDialog}>
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
                    {index === 0 ? (
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-green-400 mb-2">Positive Responses</h4>
                          <div className="flex flex-wrap gap-2">
                            {wordset.allPositiveWords?.map((word, wordIndex) => (
                              <Badge
                                key={`positive-all-${wordIndex}`}
                                variant="outline"
                                className={wordset.positiveChipColor}
                              >
                                {word}
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
                                className={wordset.negativeChipColor}
                              >
                                {word}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {wordset.allWords?.map((word, wordIndex) => (
                          <Badge
                            key={`all-${wordIndex}`}
                            variant="outline"
                            className={`text-xs ${wordset.chipColor}`}
                          >
                            {word}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>

      {/* Survey Cards */}
      <div className="grid grid-cols-3 gap-4">
        {surveyData.map((item, index) => (
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

            <h3 
              className="text-sm font-medium text-white mb-2 pr-12"
              dangerouslySetInnerHTML={{
                __html: item.question.replace(/holiday/gi, (match) => (
                  `<span class="text-blue-400">${match}</span>`
                ))
              }}
            />

            <p 
              className="text-xs text-gray-400 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: item.response.replace(/holiday/gi, (match) => (
                  `<span class="text-blue-400">${match}</span>`
                ))
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
