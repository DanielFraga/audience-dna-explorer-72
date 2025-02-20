
import { useState } from "react";
import { ChartBar, Info, Radar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ResponsiveContainer, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, Radar as RadarChart } from 'recharts';
import { PsychographicStat } from "./PsychographicStat";
import { psychographicData, psychographicDescriptions, colorMap } from "./data";

export function PsychographicsTab() {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 gap-6 animate-slide-up">
      <div>
        <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative h-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Detailed breakdown of all psychographic variables
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex items-center gap-1.5 mb-4">
            <ChartBar className="w-3.5 h-3.5 text-gray-400" />
            <h3 className="text-xs font-semibold text-white">Stats</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 text-[11px]">
            <div className="space-y-1.5">
              {psychographicData.slice(0, Math.ceil(psychographicData.length / 2)).map((point) => (
                <PsychographicStat
                  key={point.subject}
                  point={point}
                  colorMap={colorMap}
                  descriptions={psychographicDescriptions[point.subject]}
                  isHovered={hoveredPoint === point.subject}
                  onHover={setHoveredPoint}
                />
              ))}
            </div>
            <div className="space-y-1.5">
              {psychographicData.slice(Math.ceil(psychographicData.length / 2)).map((point) => (
                <PsychographicStat
                  key={point.subject}
                  point={point}
                  colorMap={colorMap}
                  descriptions={psychographicDescriptions[point.subject]}
                  isHovered={hoveredPoint === point.subject}
                  onHover={setHoveredPoint}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Visual representation of key psychographic traits and their intensities
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-1.5">
              <Radar className="w-3.5 h-3.5 text-gray-400" />
              <h3 className="text-xs font-semibold text-white">Psychographics</h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { text: "Adventurous", color: "bg-[#0EA5E9] text-white" },
                { text: "Creative", color: "bg-[#ea384c] text-white" },
                { text: "Tech-savvy", color: "bg-[#F2FCE2] text-gray-700" },
                { text: "Early Adopter", color: "bg-[#1EAEDB] text-white" },
                { text: "Quality-focused", color: "bg-[#ea384c] text-white" },
                { text: "Innovation-driven", color: "bg-[#F2FCE2] text-gray-700" }
              ].map((chip) => (
                <span
                  key={chip.text}
                  className={`px-2 py-0.5 text-[10px] rounded-full ${chip.color}`}
                >
                  {chip.text}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mb-4">
            <ResponsiveContainer width="100%" height={460}>
              <RechartsRadarChart data={psychographicData}>
                <defs>
                  <linearGradient id="psychographicGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#33C3F0" stopOpacity={0.6} />
                    <stop offset="50%" stopColor="#1EAEDB" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#0FA0CE" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={({ x, y, payload }) => {
                    const point = psychographicData.find(p => p.subject === payload.value);
                    if (!point) return null;
                    
                    return (
                      <g transform={`translate(${x},${y})`}>
                        <g 
                          className="flex items-center gap-1 cursor-pointer"
                          onMouseEnter={() => setHoveredPoint(point.subject)}
                          onMouseLeave={() => setHoveredPoint(null)}
                        >
                          <circle
                            cx="-12"
                            cy="0"
                            r="3"
                            fill={colorMap[point.subject].split(' ')[0].replace('bg-[', '').replace(']', '')}
                          />
                          <text
                            x="4"
                            y="0"
                            dy="0.35em"
                            className={`text-[10px] ${hoveredPoint === point.subject ? 'fill-white' : 'fill-gray-400'}`}
                          >
                            {point.subject}
                          </text>
                        </g>
                      </g>
                    );
                  }}
                />
                <RadarChart
                  dataKey="A"
                  stroke="url(#psychographicGradient)"
                  fill="url(#psychographicGradient)"
                  fillOpacity={0.3}
                />
              </RechartsRadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
