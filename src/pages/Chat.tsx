import { useState } from "react";
import { SendHorizontal, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import AppHeader from "@/components/AppHeader";
import IconTabs from "@/components/IconTabs";
interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}
const PRESET_QUESTIONS = ["Find lookalike audiences", "What emotional triggers work best?", "Give me an ad hook for this group", "Top three timing recommendations"];
const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [searchTerm] = useState("holiday"); // Initialize with current audience
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const handleResetSearch = () => {
    navigate('/', {
      state: {
        resetSearch: true
      }
    });
  };
  const handleSendMessage = (content: string = inputValue) => {
    if (!content.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      content: content,
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    const newQuestionCount = questionCount + 1;
    setQuestionCount(newQuestionCount);
    setTimeout(() => {
      const assistantResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: newQuestionCount === 1 ? 'Respondents who mentioned terms related to "holiday" tend to have a high score in Openness (80 out of 100) . People with high trait Openness tend to be more willing to engage in new experiences and new perspectives' : 'Communicating with words on wordset A¹ may target the high-openness trait of these folk, possibly exciting them with the potential of new experiences',
        sender: "assistant",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantResponse]);
    }, 1000);
  };
  const renderMessage = (message: Message) => {
    if (message.sender === "assistant") {
      if (message.content.includes("(80 out of 100)")) {
        const parts = message.content.split("(80 out of 100)");
        return <>
            {parts[0]}
            <InteractiveTooltip content="Openness reflects a person's willingness to try new experiences, engage with abstract concepts, and explore novel ideas. High scorers tend to be creative, curious, and appreciative of art and nature." searchTerm={searchTerm}>
              <span className="text-blue-400 font-medium cursor-help underline decoration-dotted underline-offset-2">
                (80 out of 100)
              </span>
            </InteractiveTooltip>
            {parts[1]}
          </>;
      } else if (message.content.includes("wordset A¹")) {
        const parts = message.content.split("wordset A¹");
        return <>
            {parts[0]}
            <InteractiveTooltip content="Words in this set include: adventure, discover, explore, journey, wanderlust, excitement, novel, unique, exotic, experience" searchTerm={searchTerm}>
              <span className="text-blue-400 font-medium cursor-help underline decoration-dotted underline-offset-2">
                wordset A¹
              </span>
            </InteractiveTooltip>
            {parts[1]}
          </>;
      }
    }
    return message.content;
  };
  return <div className="h-screen gradient-background font-grotesk text-[13px]">
      <div className="h-full flex flex-col">
        <AppHeader searchTerm="holiday" currentTab="chat" onResetSearch={handleResetSearch} />

        {/* Messages area */}
        <ScrollArea className="flex-1 px-1 md:px-2">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center p-4">
              <div className="text-center text-gray-500 max-w-xs">
                <p className="text-sm mb-2">Ask anything about this audience. Our AI will instantly interpret real human data to help you target smarter. </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 p-4 pb-24 max-w-3xl mx-auto">
              {messages.map(message => <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-2 animate-fade-in-up`}>
                  <div className={`flex items-start gap-2 max-w-[90%] md:max-w-[75%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className={`h-7 w-7 shrink-0 ${message.sender === "assistant" ? "bg-blue-600" : "bg-gray-700"}`}>
                      {message.sender === "user" ? <User2 className="h-4 w-4 text-gray-300" /> : <AvatarFallback className="text-white text-xs font-medium">AI</AvatarFallback>}
                    </Avatar>
                    <div className={`rounded-xl p-3 text-sm text-left shadow-sm ${message.sender === "user" ? "bg-blue-600 text-white rounded-br-sm" : "bg-gray-800 text-gray-100 rounded-bl-sm"}`}>
                      {renderMessage(message)}
                    </div>
                  </div>
                </div>)}
            </div>
          )}
        </ScrollArea>

        {/* Input area */}
        <div className="border-t border-gray-800 p-3 md:p-4 bg-gray-950/80 backdrop-blur-sm pb-[76px]">
          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {/* Suggested response buttons in a carousel */}
            <div className="w-full mb-2">
              <Carousel className="w-full" opts={{
              align: 'start',
              dragFree: true
            }}>
                <CarouselContent className="-ml-1">
                  {PRESET_QUESTIONS.map((question, index) => <CarouselItem key={index} className="pl-1 basis-auto">
                      <Button variant="outline" className="bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white text-[11px] md:text-xs py-1.5 h-auto rounded-full px-3 shadow-sm whitespace-nowrap" onClick={() => handleSendMessage(question)}>
                        {question}
                      </Button>
                    </CarouselItem>)}
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Single line input field with integrated send button */}
            <div className="relative flex h-8 rounded-lg overflow-hidden border border-gray-800 shadow-md focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-all duration-200 bg-gray-900">
              <Input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }} placeholder="Ask about your audience..." className="border-0 h-8 bg-transparent focus-visible:ring-0 text-sm flex-grow text-white" />
              <Button onClick={() => handleSendMessage()} className="h-8 rounded-none border-l border-gray-800 bg-transparent hover:bg-gray-800 px-3 text-gray-400 hover:text-white" disabled={!inputValue.trim()} size="sm">
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <IconTabs currentTab="chat" />
      </div>
    </div>;
};
export default Chat;