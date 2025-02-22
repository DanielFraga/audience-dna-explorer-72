
import { Plus, Users, Target, Info, ShieldCheck, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import MainSidebar from "@/components/MainSidebar";
import { useState } from "react";

const SurveyAudience = () => {
  const [showCertDialog, setShowCertDialog] = useState(false);
  const [showSampleSizeDialog, setShowSampleSizeDialog] = useState(false);

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

  const handleEmailClick = () => {
    window.location.href = "mailto:support@example.com";
  };

  return (
    <div className="min-h-screen md:h-screen bg-gray-950 font-grotesk text-[13px] md:overflow-hidden">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 p-3 md:p-4 animate-fade-in h-[100vh] overflow-auto md:overflow-hidden">
        <div className="space-y-3">
          <h1 className="text-2xl font-display font-semibold text-gray-100">Survey Settings</h1>
          
          <Badge 
            variant="outline"
            className="hover:bg-green-950/50 cursor-pointer inline-flex items-center gap-2 border-green-400/20 hover:border-green-400/40 transition-colors"
            onClick={() => setShowCertDialog(true)}
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
                  className="w-8 h-8 rounded-full border-2 border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/10 transition-colors"
                  onClick={() => setShowSampleSizeDialog(true)}
                >
                  <Plus className="h-4 w-4 text-blue-400" />
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
                                <Info className="w-3.5 h-3.5 text-blue-400" />
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

        {/* Certification Dialog */}
        <Dialog open={showCertDialog} onOpenChange={setShowCertDialog}>
          <DialogContent className="sm:max-w-[600px] bg-gray-800 border-gray-700">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-gray-100">Survey Data Protection</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 p-0 hover:bg-gray-700/50"
                  onClick={() => setShowCertDialog(false)}
                >
                  <X className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            </DialogHeader>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4 text-gray-200">
                <h3 className="text-xl font-semibold text-blue-400">Let's Protect Your Survey Data from Noise (Bias)!</h3>
                
                <p>Collecting survey data seems simple. You ask a set of questions, get responses, and analyze the results. But anyone who has worked with survey data knows it is rarely that straightforward. Hidden within most datasets is noise-irrelevant or misleading information that distorts findings and makes it difficult to draw accurate conclusions. If left unchecked, noise leads to poor decisions, wasted resources, and unreliable insights. Many researchers do not realize how much noise creeps into their surveys until they are already acting on bad data. This is why understanding where noise comes from and how to reduce it is crucial before making conclusions based on survey responses.</p>
                
                <p>One of the biggest sources of noise is response bias, where people provide answers that make them look good rather than being truthful. This is especially common in topics like health, work productivity, or ethical behavior. Someone may report exercising five times a week when they actually work out once or claim they never waste time at work when in reality, they do. Another major issue is sampling bias, where survey participants do not represent the larger population. If a survey about workplace stress is sent only to senior employees, the results will overlook the struggles of lower-level workers. Survey fatigue is another hidden problem that can heavily distort results. When surveys are too long, respondents get bored and start clicking through without paying attention, leading to straight-lining, where they select the same response for every question just to finish quickly. Even the way questions are structured can introduce order effects, where responses are influenced by the order in which the questions appear.</p>
                
                <p>The good news is that these problems can be minimized with careful survey design and data cleaning. Diversifying your sample helps ensure the data reflects a broader audience rather than just an easily accessible subset. Using attention checks can filter out participants who are not paying attention. A simple question like "Select option three if you are reading this" can identify careless responses. Keeping surveys short and engaging reduces fatigue, increasing the chances of thoughtful answers. Randomizing the order of questions and answer choices minimizes bias caused by how information is presented. Pre-testing your survey on a small group can help catch unclear wording or patterns that might introduce bias. After data collection, filtering out unreliable responses, such as those completed in an unrealistically short time, ensures that only meaningful data is analyzed.</p>
                
                <p>At the end of the day, survey data is only as valuable as its accuracy. If noise goes unchecked, even the best statistical analysis will not fix misleading insights.</p>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>

        {/* Sample Size Dialog */}
        <Dialog open={showSampleSizeDialog} onOpenChange={setShowSampleSizeDialog}>
          <DialogContent className="sm:max-w-[400px] bg-gray-800 border-gray-700">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-gray-100">Increase Current Sample Size</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 p-0 hover:bg-gray-700/50"
                  onClick={() => setShowSampleSizeDialog(false)}
                >
                  <X className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            </DialogHeader>
            <div className="space-y-4 text-gray-200">
              <p className="text-sm">Currently, you have a pool of 10,000 respondents. To increase the sample size, simply get in touch with us using the email below.</p>
              <div className="flex justify-center">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={handleEmailClick}
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SurveyAudience;
