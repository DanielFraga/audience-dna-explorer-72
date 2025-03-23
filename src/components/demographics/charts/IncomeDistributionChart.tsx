
import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, LabelList } from 'recharts';
import { ChartTooltip } from "@/components/ui/chart";
import { DollarSign } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import { Info } from 'lucide-react';

// Income Distribution Data
const incomeData = [
  { name: '<30k', value: 18 },
  { name: '30k-75k', value: 45 },
  { name: '75k-120k', value: 25 },
  { name: '>120k', value: 12 },
];

// Color ranges for charts
const incomeColors = ['#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED'];

export const IncomeDistributionChart: FC = () => {
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';
  const { isMobile, width } = useIsMobile();
  
  // Calculate responsive dimensions
  const getFontSize = () => width < 375 ? 8 : width < 450 ? 9 : 11;
  const getLabelFontSize = () => width < 375 ? 8 : width < 450 ? 10 : 12;
  const getChartHeight = () => width < 375 ? 180 : 220;
  
  // Return a properly typed radius value for Bar components
  const getBarRadius = (): [number, number, number, number] => [4, 4, 0, 0];

  return (
    <div className="p-2 sm:p-3 bg-gray-900 rounded-lg border border-gray-800 relative">
      <InteractiveTooltip 
        content={`Income analysis shows ${searchTerm} resonates most with middle-income groups (30k-75k), comprising 45% of respondents.`}
        searchTerm={searchTerm}
      >
        <button className="absolute top-2 right-2">
          <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
        </button>
      </InteractiveTooltip>
      <div className="flex items-center gap-1.5 mb-1">
        <DollarSign className="w-3.5 h-3.5 text-gray-400" />
        <h3 className="text-xs font-bold text-white">Income Distribution</h3>
      </div>
      <div style={{ height: `${getChartHeight()}px` }} className="w-full">
        <BarChart 
          data={incomeData}
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
            domain={[0, 50]}
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
            barSize={isMobile ? width / (incomeData.length * 3) : 40}
          >
            {incomeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={incomeColors[index]} />
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
