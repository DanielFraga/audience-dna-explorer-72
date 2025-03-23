
import { FC } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { ChartTooltip } from "@/components/ui/chart";
import { User } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import { Info } from 'lucide-react';

// Updated Ancestry Distribution Data with new categories
const ancestryData = [
  { name: 'European', value: 30, fill: '#F97316' }, // Bright Orange
  { name: 'East Asian', value: 25, fill: '#FEF7CD' }, // Soft Yellow
  { name: 'African', value: 20, fill: '#FB923C' }, // Amber
  { name: 'Hispanic', value: 25, fill: '#FEC6A1' }, // Soft Orange
];

export const AncestryDistributionChart: FC = () => {
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';
  const { isMobile, width } = useIsMobile();
  
  // Calculate responsive dimensions
  const getAxisTitleSize = () => width < 375 ? 7 : 8;

  // RENDERLESS LABEL - for the ancestry chart
  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const textAnchor = x > cx ? 'start' : 'end';
    
    // Only render labels for segments with enough space
    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={textAnchor} 
        dominantBaseline="central"
        fontSize={getAxisTitleSize()}
        fontWeight="500"
      >
        {`${name}: ${value}%`}
      </text>
    );
  };

  return (
    <div className="p-2 sm:p-3 bg-gray-900 rounded-lg border border-gray-800 relative">
      <InteractiveTooltip 
        content={`Ancestry data shows ${searchTerm} has diverse appeal across different ethnic backgrounds, with European ancestry representing the largest group (30%).`}
        searchTerm={searchTerm}
      >
        <button className="absolute top-2 right-2">
          <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
        </button>
      </InteractiveTooltip>
      <div className="flex items-center gap-1.5 mb-1">
        <User className="w-3.5 h-3.5 text-gray-400" />
        <h3 className="text-xs font-bold text-white">Ancestry Distribution</h3>
      </div>
      <div className="h-[180px] w-full">
        <PieChart width={width || 300} height={180}>
          <Pie
            data={ancestryData}
            cx="50%"
            cy="50%"
            innerRadius={isMobile ? 30 : 40}
            outerRadius={isMobile ? 55 : 70}
            paddingAngle={2}
            dataKey="value"
            labelLine={false}
            label={isMobile ? null : renderCustomizedLabel}
          >
            {ancestryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <ChartTooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-gray-800 px-2 py-1 border border-gray-700 rounded text-[10px]">
                    <p className="text-white font-medium">{`${payload[0].name} Ancestry: ${payload[0].value}%`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </div>
    </div>
  );
};
