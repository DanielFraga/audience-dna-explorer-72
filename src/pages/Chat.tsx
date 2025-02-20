
import { useState } from "react";
import { SendHorizontal, User2 } from "lucide-react";
import MainSidebar from "../components/MainSidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your audience analysis assistant. Ask me anything about your audience data and insights.",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate assistant response
    setTimeout(() => {
      const assistantResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm analyzing your question about the audience data. Here's what I found...",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-52 h-screen flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-800 p-4">
          <h1 className="text-white text-lg font-medium">Chat with Audience</h1>
          <p className="text-gray-400 text-xs mt-1">
            Ask questions about your audience data and get AI-powered insights
          </p>
          
          {/* Search Results Info - similar to Index page */}
          <div className="mt-3 text-[11px] text-gray-400 flex items-center flex-wrap gap-1.5">
            <span>Chatting with</span>
            <span className="px-2 py-0.5 bg-gray-800 rounded-full text-gray-300">450</span>
            <span>respondents relevant to the term</span>
            <span className="text-blue-400">"holiday"</span>
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start gap-3 max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="h-8 w-8">
                    {message.sender === "user" ? (
                      <User2 className="h-5 w-5 text-gray-400" />
                    ) : (
                      <AvatarImage src="/placeholder.svg" />
                    )}
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div
                    className={`rounded-lg p-3 text-sm ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-gray-800 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask about your audience..."
              className="flex-1 bg-gray-900 text-white rounded-lg px-4 py-2 text-sm border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
