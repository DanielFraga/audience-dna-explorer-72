
type SurveyItem = {
  question: string;
  response: string;
  confidence: number;
};

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
    response: "Finding meaningful holiday gifts that reflect