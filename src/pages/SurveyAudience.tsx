
import { Plus, Users, Target, Info, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import MainSidebar from "@/components/MainSidebar";

const SurveyAudience = () => {
  // Current focus areas
  const currentFocusAreas = [
    { id: 1, name: "Demographic", description: "Basic population characteristics", tooltip: "Basic demographic information including age, gender, location, and income" },
    { id: 2, name: "Digital", description: "Online behavior and preferences", tooltip: "Digital footprint analysis including device usage, social media presence, and online shopping habits" },
    { id: 3, name: "Psychographic", description: "Attitudes and interests", tooltip: "Psychological attributes including values, interests, lifestyle choices, and personality traits" },
    { id: 4, name: "Anthropological", description: "Cultural patterns and values", tooltip: "Cultural background analysis including traditions, beliefs, and social norms" },
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
        <div className="space-y-3">
          <h1 className="text-2xl font-display font-semibold text-gray-100">Survey Settings</h1>
          
          <Badge 
            variant="outline"
            className="hover:bg-green-950/50 cursor-pointer inline-flex items-center gap-2 border-green-400/20 hover:border-green-400/40 transition-colors"
            onClick={() => console.log("Badge clicked")}
          >
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span>How we ensure Surveys generate truthful data</span>
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Left Card: Current Focus Areas */}
          <Card className="bg-gray-800/50 border-gray-700 h-full">
            <CardHeader className="p-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-display text-gray-100 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Current Focus Areas
                </CardTitle>
                <Button 
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-full border-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 transition-colors"
                >
                  <Plus className="h-4 w-4 text-purple-400" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-3">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="px-2 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                    10000 respondents
                  </div>
                  <div className="px-2 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                    72 questions each
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <TooltipProvider>
                    {currentFocusAreas.map((area) => (
                      <div
                        key={area.id}
                        className="bg-gray-700/50 p-2 rounded-lg border border-gray-600"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-medium text-gray-200">{area.name}</h4>
                            <p className="text-xs text-gray-400 mt-0.5">{area.description}</p>
                          </div>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-1 hover:bg-gray-600/50 rounded-full transition-colors">
                                <Info className="w-3.5 h-3.5 text-gray-400" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 border-gray-700">
                              <p className="text-xs text-gray-200">{area.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    ))}
                  </TooltipProvider>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Card: Available Modules */}
          <Card className="bg-gray-800/50 border-gray-700 h-full">
            <CardHeader className="p-3 pb-12">
              <CardTitle className="text-lg font-display text-gray-100">
                Add New Modules
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
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
                      <div className="w-8 h-8 rounded-full border-2 border-blue-500/50 group-hover:border-blue-500 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                        <Plus className="w-4 h-4 text-blue-400" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SurveyAudience;

