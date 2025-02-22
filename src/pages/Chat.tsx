
import { useState } from "react";
import { SendHorizontal, User2, Info } from "lucide-react";
import MainSidebar from "../components/MainSidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const PRESET_QUESTIONS = [
  "Top three insights on this audience",
  "Quick overview",
  "Explain their psychography"
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [questionCount, setQuestionCount] = useState(0);

  const handleSendMessage = (content: string = inputValue) => {
    if (!content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: content,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Increment question count
    const newQuestionCount = questionCount + 1;
    setQuestionCount(newQuestionCount);

    // Simulate assistant response based on question number
    setTimeout(() => {
      const assistantResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: newQuestionCount === 1 
          ? 'Respondents who mentioned terms related to "holiday" tend to have a high score in Openness (80 out of 100) . People with high trait Openness tend to be more willing to engage in new experiences and new perspectives'
          : 'Communicating with words on wordset A¹ may target the high-openness trait of these folk, possibly exciting them with the potential of new experiences',
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantResponse]);
    }, 1000);
  };

  const renderMessage = (message: Message) => {
    if (message.sender === "assistant") {
      if (message.content.includes("(80 out of 100)")) {
        const parts = message.content.split("(80 out of 100)");
        return (
          <>
            {parts[0]}
            <span>(80 out of 100</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <sup className="text-blue-400 cursor-help">
                    <Info className="w-3 h-3 inline" />
                  </sup>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border-gray-700 text-white p-3 max-w-xs">
                  <p>Openness reflects a person's willingness to try new experiences, engage with abstract concepts, and explore novel ideas. High scorers tend to be creative, curious, and appreciative of art and nature.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span>)</span>
            {parts[1]}
          </>
        );
      } else if (message.content.includes("wordset A¹")) {
        const parts = message.content.split("wordset A¹");
        return (
          <>
            {parts[0]}
            wordset A
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <sup className="text-blue-400 cursor-help">1</sup>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border-gray-700 text-white p-3 max-w-xs">
                  <p>Words in this set include: adventure, discover, explore, journey, wanderlust, excitement, novel, unique, exotic, experience</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {parts[1]}
          </>
        );
      }
    }
    return message.content;
  };

  return (
    <div className="h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 h-full flex flex-col">
        {/* Chat Messages */}
        <ScrollArea className={`flex-1 ${messages.length === 0 ? 'hidden' : ''}`}>
          <div className="space-y-3 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="h-7 w-7">
                    {message.sender === "user" ? (
                      <User2 className="h-4 w-4 text-gray-400" />
                    ) : (
                      <AvatarImage src="/placeholder.svg" />
                    )}
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div
                    className={`rounded-lg p-2 text-sm text-left ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-100"
                    }`}
                  >
                    {renderMessage(message)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area with Preset Questions */}
        <div className={`border-t border-gray-800 p-4 ${messages.length === 0 ? 'flex-1' : ''} flex items-center justify-center`}>
          <div className="max-w-2xl w-full mx-auto space-y-4">
            {/* Text Input */}
            <div className="relative">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask about your audience..."
                className="bg-gray-900 text-white rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[120px] resize-none pr-24"
              />
              <Button
                onClick={() => handleSendMessage()}
                className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <SendHorizontal className="h-4 w-4 mr-2" />
                <span>Send</span>
              </Button>
            </div>

            {/* Preset Questions */}
            <div className="flex flex-wrap gap-2 justify-center">
              {PRESET_QUESTIONS.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => handleSendMessage(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
