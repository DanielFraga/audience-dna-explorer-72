import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

interface ChannelData {
  channel: string;
  score: number;
  platform: 'Meta' | 'Google' | 'DV360';
}

const channelData: ChannelData[] = [
  { channel: 'Meta Feed', score: 92, platform: 'Meta' as const },
  { channel: 'YouTube In-Stream', score: 89, platform: 'Google' as const },
  { channel: 'Meta Audience Network', score: 78, platform: 'Meta' as const },
  { channel: 'Esports Streams', score: 65, platform: 'DV360' as const },
].sort((a, b) => b.score - a.score);

const getBarColor = (platform: string) => {
  switch (platform) {
    case 'Meta': return '#3B82F6';
    case 'Google': return '#22C55E';
    case 'DV360': return '#A855F7';
    default: return '#6b7280';
  }
};

const CustomBar = ({ payload, x, y, width, height }: any) => {
  const barColor = getBarColor(payload.platform);
  const score = payload.score;
  
  // Position label inside bar if >= 40, outside if < 40
  const labelX = score >= 40 ? x + width - 8 : x + width + 8;
  const labelAnchor = score >= 40 ? 'end' : 'start';
  
  return (
    <g>
      <rect 
        x={x} 
        y={y} 
        width={width} 
        height={height} 
        fill={barColor}
        rx={2}
      />
      <text
        x={labelX}
        y={y + height / 2}
        textAnchor={labelAnchor}
        dominantBaseline="middle"
        className="font-bold"
        style={{ 
          fontSize: '13px', 
          fill: score >= 40 ? '#ffffff' : '#f3f4f6'
        }}
      >
        {score}%
      </text>
    </g>
  );
};

const ChannelsPerformanceChart: FC = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Legend - compact inline row above chart */}
      <div className="flex-none mb-3 px-4">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#3B82F6' }}></div>
            <span className="text-white/90">Meta</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#22C55E' }}></div>
            <span className="text-white/90">Google</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#A855F7' }}></div>
            <span className="text-white/90">DV360</span>
          </div>
        </div>
      </div>
      
      {/* Chart Section - 55% of card height */}
      <div className="flex-none px-4" style={{ height: '55%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={channelData}
            layout="horizontal"
            margin={{ top: 8, right: 60, left: 8, bottom: 8 }}
            barCategoryGap={14}
          >
            <CartesianGrid 
              strokeDasharray="2 2" 
              stroke="#4b5563" 
              horizontal={false}
            />
            <XAxis 
              type="number" 
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              tickFormatter={(value) => `${value}`}
              ticks={[0, 25, 50, 75, 100]}
            />
            <YAxis 
              type="category" 
              dataKey="channel"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: '#f3f4f6' }}
              width={140}
              interval={0}
            />
            <Bar 
              dataKey="score" 
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Text Section - 45% of card height with 16px gap */}
      <div className="flex-1 mt-4 px-4">
        <div className="space-y-3 text-left">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}></div>
            <div className="text-white/90" style={{ fontSize: '14px' }}>
              <span className="font-semibold" style={{ color: '#3B82F6' }}>Meta:</span> Facebook Feed, Reels, Audience Network (Rewarded Video)
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#22C55E' }}></div>
            <div className="text-white/90" style={{ fontSize: '14px' }}>
              <span className="font-semibold" style={{ color: '#22C55E' }}>Google:</span> YouTube In-Stream, Display Network – sports & betting affinity audiences
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#A855F7' }}></div>
            <div className="text-white/90" style={{ fontSize: '14px' }}>
              <span className="font-semibold" style={{ color: '#A855F7' }}>Programmatic/DV360:</span> Sports news, betting forums, esports streams
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsPerformanceChart;