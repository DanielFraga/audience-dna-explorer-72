
import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, LabelList } from 'recharts';
import { ChartTooltip } from "@/components/ui/chart";
import { ChartBar } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import { Info } from 'lucide-react';

// Age Distribution Data
const ageData = [
  { name: '16-29', value: 28 },
  { name: '30-45', value: 35 },
  { name: '45-60', value: 22 },
  { name: '60+', value: 15 },
];

// Color ranges for charts
const ageColors = ['#93C5FD', '#60A5FA', '#3B82F6', '#2563EB'];

export const AgeDistributionChart: FC = () => {
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';
  const { isMobile, width } = useIsMobile();
  
  // Calculate responsive dimensions
  const getFontSize = () => width < 375 ? 8 : width < 450 ? 9 : 11;
  const getLabelFontSize = () => width < 375 ? 8 : width < 450 ? 10 : 12;
  const getAxisTitleSize = () => width < 375 ? 7 : 8;
  const getChartHeight = () => width < 375 ? 180 : 220;
  
  // Return a properly typed radius value for Bar components
  const getBarRadius = (): [number, number, number, number] => [4, 4, 0, 0];

  return (
    <div className="p-2 sm:p-3 bg-gray-900 rounded-lg border border-gray-800 relative">
      <InteractiveTooltip 
        content={`Age distribution shows that ${searchTerm} is most popular among 30-45 year olds, who represent 35% of the audience.`}
        searchTerm={searchTerm}
      >
        <button className="absolute top-2 right-2">
          <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
        </button>
      </InteractiveTooltip>
      <div className="flex items-center gap-1.5 mb-1">
        <ChartBar className="w-3.5 h-3.5 text-gray-400" />
        <h3 className="text-xs font-bold text-white">Age Distribution</h3>
      </div>
      <div style={{ height: `${getChartHeight()}px` }} className="w-full">
        <BarChart 
          data={ageData}
          margin={{ top: 15, right: isMobile ? 5 : 10, left: isMobile ? 0 : 5, bottom: 25 }}
          barCategoryGap={0}
          width={width || 300}
          height={getChartHeight()}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
          <XAxis 
            dataKey="name"
            axisLine={false} 
            tickLine={false}
            tick={{ fontSize: getFontSize(), fill: '#D1D5DB' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
            domain={[0, 40]}
            tick={{ fontSize: getFontSize(), fill: '#9CA3AF' }}
            width={isMobile ? 25 : 30}
          />
          <ChartTooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-gray-800 px-2 py-1 border border-gray-700 rounded text-[10px]">
                    <p className="text-white font-medium">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="value" 
            radius={getBarRadius()}
            barSize={isMobile ? width / (ageData.length * 3) : 40}
          >
            {ageData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={ageColors[index]} />
            ))}
            <LabelList 
              dataKey="value" 
              position="top" 
              formatter={(value: number) => `${value}%`}
              style={{ fill: 'white', fontSize: getLabelFontSize(), fontWeight: 600 }}
              offset={2}
            />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};
