
import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, LabelList } from 'recharts';
import { ChartTooltip } from "@/components/ui/chart";
import { MapPin } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import { Info } from 'lucide-react';

// Location Distribution Data
const locationData = [
  { name: 'Copenhagen, DK', value: 42 },
  { name: 'London, UK', value: 35 },
  { name: 'New York, US', value: 15 },
  { name: 'Other', value: 8 },
];

// Color ranges for charts
const locationColors = ['#34D399', '#10B981', '#059669', '#047857'];

export const LocationDistributionChart: FC = () => {
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';
  const { isMobile, width } = useIsMobile();
  
  // Calculate responsive dimensions
  const getFontSize = () => width < 375 ? 8 : width < 450 ? 9 : 11;
  const getLabelFontSize = () => width < 375 ? 8 : width < 450 ? 10 : 12;
  const getBarGap = () => isMobile ? 1 : 4;
  const getChartHeight = () => width < 375 ? 180 : 220;
  
  // Return a properly typed radius value for Bar components
  const getBarRadius = (): [number, number, number, number] => [4, 4, 0, 0];

  return (
    <div className="p-2 sm:p-3 bg-gray-900 rounded-lg border border-gray-800 relative">
      <InteractiveTooltip 
        content={`Geographic data suggests ${searchTerm} is most popular in Copenhagen (42%), followed by London (35%).`}
        searchTerm={searchTerm}
      >
        <button className="absolute top-2 right-2">
          <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
        </button>
      </InteractiveTooltip>
      <div className="flex items-center gap-1.5 mb-1">
        <MapPin className="w-3.5 h-3.5 text-gray-400" />
        <h3 className="text-xs font-bold text-white">Location Distribution</h3>
      </div>
      <div style={{ height: `${getChartHeight()}px` }} className="w-full">
        <BarChart 
          data={locationData}
          margin={{ top: 15, right: isMobile ? 5 : 10, left: isMobile ? 0 : 5, bottom: 25 }}
          barGap={getBarGap()}
          width={width || 300}
          height={getChartHeight()}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
          <XAxis 
            dataKey="name"
            axisLine={false} 
            tickLine={false}
            tick={{ fontSize: getFontSize(), fill: '#D1D5DB' }}
            angle={isMobile ? -25 : 0}
            textAnchor={isMobile ? "end" : "middle"}
            height={isMobile ? 50 : 30}
            interval={0}
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
            barSize={isMobile ? width / (locationData.length * 3) : 40}
          >
            {locationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={locationColors[index]} />
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
