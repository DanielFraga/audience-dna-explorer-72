
import { FC } from 'react';
import { Info, ChartBar, Users, MapPin, DollarSign, User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import DemographicsMap from "../DemographicsMap";
import { PsychographicRadar } from '../PsychographicRadar';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const DemographicsTab: FC = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          {/* Age Distribution Card */}
          <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Detailed breakdown of age groups across all respondents
              </TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-1.5 mb-2">
              <ChartBar className="w-3.5 h-3.5 text-gray-400" />
              <h3 className="text-xs font-semibold text-white">Age Distribution</h3>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">28%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">16-29</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">35%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">30-45</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">22%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">45-60</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">15%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">60+</span>
              </div>
            </div>
          </div>

          {/* Gender Distribution Card */}
          <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Distribution of gender identities in the respondent pool
              </TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-1.5 mb-2">
              <Users className="w-3.5 h-3.5 text-gray-400" />
              <h3 className="text-xs font-semibold text-white">Gender Distribution</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">48%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">Male</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">51%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">Female</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">1%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
              </div>
            </div>
          </div>

          {/* Location Distribution Card */}
          <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Geographical distribution of respondents by area type
              </TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-1.5 mb-2">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <h3 className="text-xs font-semibold text-white">Location Distribution</h3>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">42%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">Copenhagen, DK</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">35%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">London, UK</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">15%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">New York, US</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">8%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
              </div>
            </div>
          </div>

          {/* Income Distribution Card */}
          <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Income range distribution across all respondents
              </TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-1.5 mb-2">
              <DollarSign className="w-3.5 h-3.5 text-gray-400" />
              <h3 className="text-xs font-semibold text-white">Income Distribution</h3>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">18%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">&lt;30k</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">45%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">30k-75k</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">25%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">75k-120k</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">12%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">&gt;120k</span>
              </div>
            </div>
          </div>

          {/* Ancestry Distribution Card */}
          <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Distribution of ancestral backgrounds among respondents
              </TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-1.5 mb-2">
              <User className="w-3.5 h-3.5 text-gray-400" />
              <h3 className="text-xs font-semibold text-white">Ancestry Distribution</h3>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">32%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">European</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">28%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">Asian</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">22%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">African</span>
              </div>
              <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">18%</span>
                <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Map Card */}
        <div>
          <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2 z-10" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Geographic distribution of respondents across major cities
              </TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-1.5 mb-4">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <h3 className="text-xs font-semibold text-white">Geographic Distribution</h3>
            </div>
            <DemographicsMap />
          </div>
        </div>
      </div>

      {/* Psychographics Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-white mb-4">Psychographics</h2>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Stats Card */}
          <Card className="bg-gray-900 border-gray-800 text-gray-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white">Stats</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <div className="space-y-4">
                {/* Psychographic Group Stats */}
                <div>
                  <h4 className="text-xs font-medium mb-2">Personality Traits</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Extroverted</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-xs">65%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Conscientious</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-xs">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Open to Experience</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                      <span className="text-xs">82%</span>
                    </div>
                  </div>
                </div>
                
                {/* Value Systems */}
                <div>
                  <h4 className="text-xs font-medium mb-2">Value Systems</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Environmental Concerns</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '71%' }}></div>
                      </div>
                      <span className="text-xs">71%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Social Justice</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-xs">65%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Traditional Values</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-xs">45%</span>
                    </div>
                  </div>
                </div>
                
                {/* Digital Behavior */}
                <div>
                  <h4 className="text-xs font-medium mb-2">Digital Behavior</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Social Media Usage</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-xs">85%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Online Shopping</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '77%' }}></div>
                      </div>
                      <span className="text-xs">77%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Content Creation</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '48%' }}></div>
                      </div>
                      <span className="text-xs">48%</span>
                    </div>
                  </div>
                </div>
                
                {/* Lifestyle Choices */}
                <div>
                  <h4 className="text-xs font-medium mb-2">Lifestyle Choices</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Health Conscious</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                      <span className="text-xs">68%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Adventure Seeking</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                      <span className="text-xs">72%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Minimalism</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '55%' }}></div>
                      </div>
                      <span className="text-xs">55%</span>
                    </div>
                  </div>
                </div>
                
                {/* Purchase Motivations */}
                <div>
                  <h4 className="text-xs font-medium mb-2">Purchase Motivations</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Quality-Driven</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-xs">75%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Status-Seeking</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '58%' }}></div>
                      </div>
                      <span className="text-xs">58%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Price-Sensitive</span>
                      <div className="w-32 bg-gray-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                      <span className="text-xs">62%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Psychographic Radar Card */}
          <Card className="bg-gray-900 border-gray-800 text-gray-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white">Psychographics</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {/* Quick Group Selection Cards */}
              <div className="grid grid-cols-5 gap-2 mb-4">
                {[
                  { id: "personality", name: "Personality Traits" },
                  { id: "values", name: "Value Systems" },
                  { id: "digital", name: "Digital Behavior" },
                  { id: "lifestyle", name: "Lifestyle Choices" },
                  { id: "purchase", name: "Purchase Motivations" }
                ].map(group => (
                  <div
                    key={group.id}
                    className={`bg-gray-800 hover:bg-gray-700 p-2 rounded cursor-pointer text-center transition-colors`}
                  >
                    <span className="text-[10px] block leading-tight">{group.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Psychographic Radar Charts */}
              <div className="relative pt-2 grid grid-cols-1 gap-4">
                <div>
                  <h4 className="text-xs font-medium text-center mb-2">Personality Traits</h4>
                  <div className="max-w-full h-[180px]">
                    <PsychographicRadar 
                      data={[
                        { trait: "Extroverted", value: 65 },
                        { trait: "Conscientious", value: 78 },
                        { trait: "Open to Experience", value: 82 },
                        { trait: "Agreeable", value: 71 },
                        { trait: "Emotionally Stable", value: 68 }
                      ]}
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-center mb-2">Value Systems</h4>
                  <div className="max-w-full h-[180px]">
                    <PsychographicRadar 
                      data={[
                        { trait: "Environmental", value: 71 },
                        { trait: "Social Justice", value: 65 },
                        { trait: "Traditional", value: 45 },
                        { trait: "Progressive", value: 73 },
                        { trait: "Community", value: 68 }
                      ]}
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-center mb-2">Digital Behavior</h4>
                  <div className="max-w-full h-[180px]">
                    <PsychographicRadar 
                      data={[
                        { trait: "Social Media", value: 85 },
                        { trait: "Online Shopping", value: 77 },
                        { trait: "Content Creation", value: 48 },
                        { trait: "Gaming", value: 62 },
                        { trait: "Streaming", value: 70 }
                      ]}
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-center mb-2">Lifestyle Choices</h4>
                  <div className="max-w-full h-[180px]">
                    <PsychographicRadar 
                      data={[
                        { trait: "Health Conscious", value: 68 },
                        { trait: "Adventure Seeking", value: 72 },
                        { trait: "Minimalism", value: 55 },
                        { trait: "Work-Life Balance", value: 63 },
                        { trait: "Cultural Events", value: 70 }
                      ]}
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-center mb-2">Purchase Motivations</h4>
                  <div className="max-w-full h-[180px]">
                    <PsychographicRadar 
                      data={[
                        { trait: "Quality-Driven", value: 75 },
                        { trait: "Status-Seeking", value: 58 },
                        { trait: "Price-Sensitive", value: 62 },
                        { trait: "Brand Loyal", value: 68 },
                        { trait: "Convenience", value: 72 }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
