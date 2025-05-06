
import { FC } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// This is mock data for the ancestry distribution
const ancestryData = [
  { name: 'Western Europe', value: 45 },
  { name: 'Eastern Europe', value: 23 },
  { name: 'Northern Europe', value: 18 },
  { name: 'Southern Europe', value: 12 },
  { name: 'Sub-Saharan Africa', value: 8 },
  { name: 'East Asia', value: 6 },
  { name: 'South Asia', value: 5 },
  { name: 'Middle East', value: 4 },
  { name: 'Native American', value: 2 },
  { name: 'Pacific Islander', value: 1 },
];

interface AncestryDistributionChartProps {}

export const AncestryDistributionChart: FC<AncestryDistributionChartProps> = () => {
  return (
    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-4">Ancestry Distribution</h3>
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ancestryData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="name"
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              tickLine={{ stroke: '#4B5563' }}
              axisLine={{ stroke: '#4B5563' }}
            />
            <YAxis
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              tickLine={{ stroke: '#4B5563' }}
              axisLine={{ stroke: '#4B5563' }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F9FAFB' }}
              cursor={{ fill: '#374151', opacity: 0.3 }}
            />
            <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AncestryDistributionChart;
