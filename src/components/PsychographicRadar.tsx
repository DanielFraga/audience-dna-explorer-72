
import { Radar as RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, RadarChart as RechartsRadarChart } from 'recharts';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import { useEffect, useRef, useState } from 'react';

interface PsychographicPoint {
  subject: string;
  A: number;
  fullName: string;
}

interface PsychographicRadarProps {
  data: PsychographicPoint[];
}

const PsychographicRadar = ({ data }: PsychographicRadarProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  // ResizeObserver for robust chart sizing
  useEffect(() => {
    if (!chartRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Force recharts to recalculate when container resizes
        window.dispatchEvent(new Event('resize'));
      }
    });

    resizeObserver.observe(chartRef.current);
    return () => resizeObserver.disconnect();
  }, []);
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 460, height: 460 });
  
  // ResizeObserver for responsive behavior
  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        // Maintain aspect ratio and prevent stretching
        const size = Math.min(width, height, 500);
        setContainerSize({ width: size, height: size });
      }
    });
    
    resizeObserver.observe(containerRef.current);
    
    return () => resizeObserver.disconnect();
  }, []);
  
  const tooltipContent = {
    'Lf': `Loyalty-first bettors align bets with personal/team identity for ${searchTerm} interests.`,
    'Sm': `Suspicious of mainstream - prefers niche or alternative betting sources related to ${searchTerm}.`,
    'Ed': `Emotion-driven betting decisions influenced by feelings and excitement around ${searchTerm}.`,
    'Sb': `Social bettors influenced by friend groups and social validation in ${searchTerm} contexts.`,
    'Rm': `Risk-maximizers seeking high-risk, high-reward opportunities with ${searchTerm} content.`,
    'Ma': `Methodical analyzers using data and analysis before placing ${searchTerm}-related bets.`,
  };

  return (
    <div ref={containerRef} className="w-full h-[460px] relative overflow-hidden">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart 
          data={data}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        >
          <defs>
            <linearGradient id="psychographicGradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.7} />
              <stop offset="40%" stopColor="#3b82f6" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <PolarGrid stroke="#374151" strokeWidth={1} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'transparent', fontSize: 1 }}
            className="text-transparent"
          />
          <RadarChart
            name="Psychographic Profile"
            dataKey="A"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#psychographicGradient)"
            fillOpacity={1}
            dot={{ fill: '#3B82F6', r: 4 }}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>

      {/* Positioned Radar vertex chips */}
      {data.map((point, index) => {
        const angle = (index * 360) / data.length;
        const radius = Math.min(containerSize.width, containerSize.height) * 0.35;
        const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

        const colorMap = {
          'Lf': 'bg-[#3B82F6] text-white',
          'Sm': 'bg-[#F97316] text-white',
          'Ed': 'bg-[#3B82F6] text-white',
          'Sb': 'bg-[#F97316] text-white',
          'Rm': 'bg-[#10B981] text-white',
          'Ma': 'bg-[#10B981] text-white',
        };

        return (
          <InteractiveTooltip 
            key={point.subject}
            content={tooltipContent[point.subject as keyof typeof tooltipContent] || `${point.fullName} trait for ${searchTerm} audience.`}
            searchTerm={searchTerm}
          >
            <button
              className={`px-2 py-1 text-xs font-medium rounded-full cursor-help absolute transform -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform ${colorMap[point.subject as keyof typeof colorMap] || 'bg-gray-500 text-white'}`}
              style={{
                left: `50%`,
                top: `50%`,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {point.subject}
            </button>
          </InteractiveTooltip>
        );
      })}
    </div>
  );
};

export default PsychographicRadar;
