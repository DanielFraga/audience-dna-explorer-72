
import MainSidebar from "@/components/MainSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface AudienceEntry {
  id: number;
  name: string;
  type: "All" | "Keyword";
  keyword?: string;
  size: string;
  percentage: string;
  location: string;
  ageRange: string;
  parentId?: number;
}

const SavedAudiences = () => {
  const navigate = useNavigate();
  
  const audiences: AudienceEntry[] = [
    {
      id: 1,
      name: "A1",
      type: "All",
      size: "450 respondents",
      percentage: "10000/10000",
      location: "Los Angeles, San Francisco, San Diego, Sacramento",
      ageRange: "16-80",
    },
    {
      id: 4,
      name: "A1.1",
      type: "Keyword",
      keyword: "holiday",
      size: "450 respondents",
      percentage: "320/10000",
      location: "San Jose, Oakland, Fresno",
      ageRange: "25-34",
      parentId: 1,
    },
    {
      id: 2,
      name: "B1",
      type: "All",
      size: "450 respondents",
      percentage: "10000/10000",
      location: "New York, Buffalo, Albany, Rochester",
      ageRange: "16-80",
    },
    {
      id: 3,
      name: "C1",
      type: "All",
      size: "450 respondents",
      percentage: "10000/10000",
      location: "Houston, Dallas, Austin, San Antonio",
      ageRange: "16-80",
    },
  ];

  // Function to calculate percentage from fraction string
  const calculatePercentage = (fractionStr: string) => {
    const [numerator, denominator] = fractionStr.split('/').map(Number);
    return `${((numerator / denominator) * 100).toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="main-container transition-all duration-300 md:ml-[208px] md:collapsed:ml-16">
        <div className="flex flex-col h-full">
          <Card className="bg-gray-800/50 border-gray-700 flex-1">
            <CardContent className="p-3">
              <div className="divide-y divide-gray-700">
                <div className="grid grid-cols-5 gap-3 pb-3 text-sm font-medium text-gray-400">
                  <div>Name</div>
                  <div>Percentage</div>
                  <div>Location</div>
                  <div>Actions</div>
                  <div></div>
                </div>
                {audiences.map((audience) => (
                  <div 
                    key={audience.id}
                    className="py-3 hover:bg-gray-700/20 transition-colors rounded-lg px-2"
                  >
                    <div className="grid grid-cols-5 gap-3">
                      <div className="text-gray-300">
                        {audience.parentId && (
                          <span className="ml-4">↳ </span>
                        )}
                        {audience.name}
                        {audience.type === "Keyword" && audience.keyword && (
                          <span className="ml-2 text-gray-400">({audience.keyword})</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="w-4 h-4 text-blue-400" />
                        {calculatePercentage(audience.percentage)}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        {audience.location}
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
