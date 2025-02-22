
import { Plus, Users, Target } from 'lucide-react';
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
    <div className="min-h-screen md:h-screen bg-gray-950 font-grotesk text-[13px] md:overflow-hidden">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 p-3 md:p-4 animate-fade-in h-[100vh] overflow-auto md:overflow-hidden">
        <h1 className="text-2xl font-display font-semibold text-gray-100 mb-4">Survey Audience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Target Demographics Card */}
          <Card className="col-span-1 md:col-span-2 bg-gray-800/50 border-gray-700">
            <CardHeader className="p-3">
              <CardTitle className="text-lg font-display text-gray-100 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                Target Demographics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Current Focus Areas */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-medium text-gray-300">Current Focus Areas</h3>
                    <div className="px-2 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                      10000 respondents
                    </div>
                    <div className="px-2 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                      72 questions each
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {currentFocusAreas.map((area) => (
                      <div
                        key={area.id}
                        className="bg-gray-700/50 p-2 rounded-lg border border-gray-600"
                      >
                        <h4 className="text-sm font-medium text-gray-200">{area.name}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{area.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Modules */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Add New Modules</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {availableModules.map((module) => (
                      <button
                        key={module.id}
                        className="bg-gray-700/50 p-2 rounded-lg border border-gray-600 text-left hover:bg-gray-600/50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-200">{module.name}</h4>
                            <p className="text-xs text-gray-400 mt-0.5">{module.description}</p>
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

          {/* Increase Survey Range Button */}
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 text-gray-200"
          >
            <Plus className="w-5 h-5" />
            Increase Survey Range
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SurveyAudience;
