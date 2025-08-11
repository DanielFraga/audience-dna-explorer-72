import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';

interface ChannelData {
  name: string;
  score: number;
  platform: 'Meta' | 'Google' | 'DV360';
  fullName: string;
}

const channelData: ChannelData[] = [
  { name: 'Meta Feed', score: 92, platform: 'Meta' as const, fullName: 'Meta Feed' },
  { name: 'Meta Reels', score: 89, platform: 'Meta' as const, fullName: 'Meta Reels' },
  { name: 'YouTube In-Stream', score: 85, platform: 'Google' as const, fullName: 'YouTube In-Stream' },
  { name: 'DV360 Sports News', score: 78, platform: 'DV360' as const, fullName: 'DV360 Sports News' },
  { name: 'Meta Audience Network', score: 76, platform: 'Meta' as const, fullName: 'Meta Audience Network' },
  { name: 'DV360 Betting Forums', score: 73, platform: 'DV360' as const, fullName: 'DV360 Betting Forums' },
  { name: 'Esports Streams', score: 68, platform: 'DV360' as const, fullName: 'Esports Streams' },
].sort((a, b) => b.score - a.score);

const getBarColor = (platform: string) => {
  switch (platform) {
    case 'Meta': return '#3b82f6'; // blue
    case 'Google': return '#10b981'; // green
    case 'DV360': return '#8b5cf6'; // purple
    default: return '#6b7280'; // gray
  }
};

const CustomBar = (props: any) => {
  const { fill, payload, x, y, width, height } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={getBarColor(payload.platform)} />
      <text
        x={x + width + 12}
        y={y + height / 2}
        textAnchor="start"
        dominantBaseline="middle"
        className="fill-gray-300 text-xs font-medium"
      >
        {payload.score}%
      </text>
    </g>
  );
};

const ChannelsPerformanceChart: FC = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Chart Section - top half (50% height) */}
      <div className="flex-none" style={{ height: '50%' }}>
        <div className="relative h-full">
          {/* Compact Legend */}
          <div className="absolute top-0 left-0 z-10 flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-gray-300">Meta</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-300">Google</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-gray-300">DV360</span>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={channelData}
              layout="horizontal"
              margin={{ top: 32, right: 100, left: 140, bottom: 8 }}
              barCategoryGap={12}
              barGap={6}
            >
              <XAxis 
                type="number" 
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9ca3af' }}
                tickMargin={8}
                tickFormatter={(value) => `${value}%`}
              />
              <YAxis 
                type="category" 
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#e5e7eb' }}
                tickMargin={8}
                width={180}
              />
              <Bar 
                dataKey="score" 
                shape={<CustomBar />}
                radius={[0, 2, 2, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Text Section - 45% height */}
      <div className="flex-1 pt-4">
        <div className="space-y-3 text-sm text-white">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-white">Meta:</span> Facebook Feed, Reels, Audience Network (Rewarded Video)
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-white">Google:</span> YouTube In-Stream, Display Network – sports & betting affinity audiences
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-white">Programmatic/DV360:</span> Sports news, betting forums, esports streams
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsPerformanceChart;