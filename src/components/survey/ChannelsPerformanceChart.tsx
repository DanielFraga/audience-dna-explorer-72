import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

interface ChannelGroupData {
  channel: string;
  Meta: number;
  Google: number;
  DV360: number;
}

const channelGroupData: ChannelGroupData[] = [
  { channel: 'Meta Feed', Meta: 92, Google: 45, DV360: 38 },
  { channel: 'Meta Audience Network', Meta: 76, Google: 52, DV360: 41 },
  { channel: 'YouTube In-Stream', Meta: 35, Google: 85, DV360: 43 },
  { channel: 'Esports Streams', Meta: 28, Google: 39, DV360: 68 },
];

const CustomBarLabel = ({ payload, x, y, width, height, value }: any) => {
  if (!value || width < 30) return null; // Don't show label if bar is too small
  
  return (
    <text
      x={x + width - 8}
      y={y + height / 2}
      textAnchor="end"
      dominantBaseline="middle"
      className="fill-white text-xs font-bold"
    >
      {value}%
    </text>
  );
};

const ChannelsPerformanceChart: FC = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Legend - horizontal above chart */}
      <div className="flex-none mb-4">
        <div className="flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-white/90" style={{ fontSize: '12px' }}>Meta</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-white/90" style={{ fontSize: '12px' }}>Google</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-white/90" style={{ fontSize: '12px' }}>DV360</span>
          </div>
        </div>
      </div>
      
      {/* Chart Section */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={channelGroupData}
            layout="horizontal"
            margin={{ top: 10, right: 20, left: 120, bottom: 10 }}
            barCategoryGap={8}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#374151" 
              horizontal={false}
              verticalPoints={[0, 0.25, 0.5, 0.75, 1].map(p => p * 100)}
            />
            <XAxis 
              type="number" 
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: '#9ca3af' }}
              tickFormatter={(value) => `${value}%`}
              ticks={[0, 25, 50, 75, 100]}
            />
            <YAxis 
              type="category" 
              dataKey="channel"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#f3f4f6' }}
              width={110}
            />
            <Bar 
              dataKey="Meta" 
              fill="#3b82f6"
              radius={[0, 2, 2, 0]}
              label={<CustomBarLabel />}
            />
            <Bar 
              dataKey="Google" 
              fill="#10b981"
              radius={[0, 2, 2, 0]}
              label={<CustomBarLabel />}
            />
            <Bar 
              dataKey="DV360" 
              fill="#8b5cf6"
              radius={[0, 2, 2, 0]}
              label={<CustomBarLabel />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Text Section - 16px gap from chart */}
      <div className="flex-none mt-4 pt-4 border-t border-gray-700/50">
        <div className="space-y-3 text-sm text-left">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
            <div className="text-white/90">
              <span className="font-semibold text-blue-400">Meta:</span> Facebook Feed, Reels, Audience Network (Rewarded Video)
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
            <div className="text-white/90">
              <span className="font-semibold text-green-400">Google:</span> YouTube In-Stream, Display Network – sports & betting affinity audiences
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
            <div className="text-white/90">
              <span className="font-semibold text-purple-400">Programmatic/DV360:</span> Sports news, betting forums, esports streams
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsPerformanceChart;