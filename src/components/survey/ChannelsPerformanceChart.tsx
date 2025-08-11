import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

interface ChannelData {
  channel: string;
  meta: number;
  google: number;
  dv360: number;
  total: number;
}

const channelData: ChannelData[] = [
  { channel: 'Meta Feed', meta: 92, google: 15, dv360: 8, total: 100 },
  { channel: 'YouTube In-Stream', meta: 12, google: 89, dv360: 25, total: 100 },
  { channel: 'Meta Audience Network', meta: 78, google: 20, dv360: 12, total: 100 },
  { channel: 'Esports Streams', meta: 10, google: 30, dv360: 65, total: 100 },
].sort((a, b) => (b.meta + b.google + b.dv360) - (a.meta + a.google + a.dv360));

const platformColors = {
  meta: '#3B82F6',
  google: '#22C55E',
  dv360: '#A855F7'
};

const CustomStackedBar = (props: any) => {
  const { payload, x, y, width, height } = props;
  if (!payload) return null;

  const { meta, google, dv360 } = payload;
  const total = meta + google + dv360;
  
  let currentX = x;
  const segments = [
    { value: meta, color: platformColors.meta, label: 'Meta' },
    { value: google, color: platformColors.google, label: 'Google' },
    { value: dv360, color: platformColors.dv360, label: 'DV360' }
  ];

  return (
    <g>
      {segments.map((segment, index) => {
        if (segment.value === 0) return null;
        
        const segmentWidth = (segment.value / 100) * width;
        const segmentX = currentX;
        
        const result = (
          <g key={index}>
            <rect
              x={segmentX}
              y={y}
              width={segmentWidth}
              height={height}
              fill={segment.color}
              rx={index === 0 ? 2 : 0}
              ry={index === 0 ? 2 : 0}
              style={{
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
              }}
            />
            {segmentWidth > 30 && (
              <text
                x={segmentX + segmentWidth / 2}
                y={y + height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
                style={{
                  fontSize: '11px',
                  fill: '#ffffff'
                }}
              >
                {segment.value}%
              </text>
            )}
          </g>
        );
        
        currentX += segmentWidth;
        return result;
      })}
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
            barCategoryGap={10}
          >
            <CartesianGrid 
              strokeDasharray="2 2" 
              stroke="#4b5563" 
              vertical={true}
              horizontal={false}
            />
            <XAxis 
              type="number" 
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              tickFormatter={(value) => `${value}%`}
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
              dataKey="total"
              shape={<CustomStackedBar />}
              barSize={12}
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