
import MainSidebar from "@/components/MainSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin, Calendar, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface AudienceEntry {
  id: number;
  size: string;
  location: string;
  ageRange: string;
}

const SavedAudiences = () => {
  const navigate = useNavigate();
  
  const audiences: AudienceEntry[] = [
    {
      id: 1,
      size: "1,500 respondents",
      location: "California, USA",
      ageRange: "25-34",
    },
    {
      id: 2,
      size: "2,000 respondents",
      location: "New York, USA",
      ageRange: "18-24",
    },
    {
      id: 3,
      size: "1,000 respondents",
      location: "Texas, USA",
      ageRange: "35-44",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="main-container transition-all duration-300 md:ml-[208px] md:collapsed:ml-16">
        <div className="flex flex-col h-full">
          <h1 className="text-2xl font-display font-semibold text-gray-100 mb-4">Saved Audiences</h1>
          
          <Card className="bg-gray-800/50 border-gray-700 flex-1">
            <CardHeader className="p-3">
              <CardTitle className="text-lg font-display text-gray-100">
                Saved Audiences
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <div className="divide-y divide-gray-700">
                {audiences.map((audience) => (
                  <div 
                    key={audience.id}
                    className="py-3 first:pt-0 last:pb-0 hover:bg-gray-700/20 transition-colors rounded-lg px-2"
                  >
                    <div className="grid grid-cols-5 gap-3">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="w-4 h-4 text-blue-400" />
                        {audience.size}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        {audience.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        Ages {audience.ageRange}
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-300 hover:text-blue-400"
                          onClick={() => navigate(`/survey-audience?id=${audience.id}`)}
                        >
                          <Search className="w-4 h-4 mr-1" />
                          Explore
                        </Button>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-300 hover:text-blue-400"
                          onClick={() => navigate(`/chat?id=${audience.id}`)}
                        >
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SavedAudiences;

