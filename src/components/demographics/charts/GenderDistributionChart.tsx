
import { FC } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { ChartTooltip } from "@/components/ui/chart";
import { Users } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import { Info } from 'lucide-react';

// Gender Distribution Data
const genderData = [
  { name: 'Male', value: 48, fill: '#4F46E5' },
  { name: 'Female', value: 51, fill: '#9B87F5' },
  { name: 'Other', value: 1, fill: '#6B7280' },
];

export const GenderDistributionChart: FC = () => {
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';
  const { isMobile, width } = useIsMobile();

  return (
    <div className="p-2 sm:p-3 bg-gray-900 rounded-lg border border-gray-800 relative">
      <InteractiveTooltip 
        content={`Gender analysis reveals that ${searchTerm} slightly appeals more to females (51%) than males (48%).`}
        searchTerm={searchTerm}
      >
        <button className="absolute top-2 right-2">
          <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
        </button>
      </InteractiveTooltip>
      <div className="flex items-center gap-1.5 mb-1">
        <Users className="w-3.5 h-3.5 text-gray-400" />
        <h3 className="text-xs font-semibold text-white">Gender Distribution</h3>
      </div>
      <div className="h-[120px] w-full">
        <PieChart width={width || 300} height={120}>
          <Pie
            data={genderData}
            cx="50%"
            cy="50%"
            innerRadius={isMobile ? 25 : 30}
            outerRadius={isMobile ? 40 : 50}
            paddingAngle={2}
            dataKey="value"
            labelLine={false}
            label={({ name, value, cx, x, y }) => {
              if (value < 5) return null;
              return (
                <text 
                  x={x} 
                  y={y} 
                  fill="white" 
                  textAnchor={x > cx ? 'start' : 'end'} 
                  dominantBaseline="central"
                  fontSize={9}
                >
                  {`${name}: ${value}%`}
                </text>
              );
            }}
          >
            {genderData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <ChartTooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-gray-800 px-2 py-1 border border-gray-700 rounded text-[10px]">
                    <p className="text-white font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
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
