
import { Radar as RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, RadarChart as RechartsRadarChart } from 'recharts';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface PsychographicPoint {
  subject: string;
  A: number;
  fullName: string;
}

interface PsychographicRadarProps {
  data: PsychographicPoint[];
}

const PsychographicRadar = ({ data }: PsychographicRadarProps) => {
  return (
    <div className="w-full h-[460px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data}>
          <defs>
            <linearGradient id="psychographicGradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.7} />
              <stop offset="40%" stopColor="#3b82f6" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'transparent', fontSize: 10 }}
          />
          <RadarChart
            name="Psychographic Profile"
            dataKey="A"
            stroke="#3B82F6"
            fill="url(#psychographicGradient)"
            fillOpacity={1}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>

      {/* Positioned Radar vertex chips */}
      {data.map((point, index) => {
        const angle = (index * 360) / data.length;
        const radius = 160;
        const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

        const colorMap = {
          'Op': 'bg-[#9b87f5] text-white',
          'Co': 'bg-[#7E69AB] text-white',
          'Ex': 'bg-[#6E59A5] text-white',
          'Ag': 'bg-[#0EA5E9] text-white',
          'Ne': 'bg-[#33C3F0] text-white',
          'RT': 'bg-[#1EAEDB] text-white',
          'In': 'bg-[#F97316] text-white',
          'PS': 'bg-[#FEC6A1] text-gray-700',
          'BL': 'bg-[#FEF7CD] text-gray-700',
          'SI': 'bg-[#D6BCFA] text-gray-700',
          'TA': 'bg-[#E5DEFF] text-gray-700',
          'QF': 'bg-[#9b87f5] text-white',
          'Su': 'bg-[#7E69AB] text-white',
          'SS': 'bg-[#6E59A5] text-white',
          'Im': 'bg-[#0EA5E9] text-white',
          'Tr': 'bg-[#33C3F0] text-white',
        };

        return (
          <Tooltip key={point.subject}>
            <TooltipTrigger asChild>
              <span
                className={`px-2 py-0.5 text-[10px] rounded-full cursor-help absolute transform -translate-x-1/2 -translate-y-1/2 ${colorMap[point.subject as keyof typeof colorMap]}`}
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {point.subject}
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
              {point.fullName}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default PsychographicRadar;
