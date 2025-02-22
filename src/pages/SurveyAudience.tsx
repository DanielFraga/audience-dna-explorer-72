
import { Plus, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MainSidebar from "@/components/MainSidebar";

const SurveyAudience = () => {
  // Current focus areas
  const currentFocusAreas = [
    { id: 1, name: "Demographic", description: "Basic population characteristics" },
    { id: 2, name: "Digital", description: "Online behavior and preferences" },
    { id: 3, name: "Psychographic", description: "Attitudes and interests" },
    { id: 4, name: "Anthropological", description: "Cultural patterns and values" },
  ];

  // Available new modules
  const availableModules = [
    { id: 1, name: "Aesthetic", description: "Visual and design preferences" },
    { id: 2, name: "Cultural", description: "Cultural influences and traditions" },
    { id: 3, name: "Sexual", description: "Relationship and intimacy factors" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-52 p-4 md:p-6 animate-fade-in">
        <h1 className="text-2xl font-display font-semibold text-gray-100 mb-6">Survey Audience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Target Demographics Card */}
          <Card className="col-span-1 md:col-span-2 bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-display text-gray-100 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                Target Demographics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Focus Areas */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Current Focus Areas</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {currentFocusAreas.map((area) => (
                      <div
                        key={area.id}
                        className="bg-gray-700/50 p-3 rounded-lg border border-gray-600"
                      >
                        <h4 className="text-sm font-medium text-gray-200">{area.name}</h4>
                        <p className="text-xs text-gray-400 mt-1">{area.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Modules */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Add New Modules</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {availableModules.map((module) => (
                      <button
                        key={module.id}
                        className="bg-gray-700/50 p-3 rounded-lg border border-gray-600 text-left hover:bg-gray-600/50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-200">{module.name}</h4>
                            <p className="text-xs text-gray-400 mt-1">{module.description}</p>
                          </div>
                          <Plus className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Survey Range Card */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-display text-gray-100 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Survey Range
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-300">Current respondent range: 1000-2000</p>
                <Button 
                  variant="outline" 
                  className="w-full bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 text-gray-200"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Increase Range
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SurveyAudience;
