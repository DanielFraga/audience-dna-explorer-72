
import { FC } from 'react';
import { Info, ChartBar, Users, MapPin, DollarSign, User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import DemographicsMap from "../DemographicsMap";
import { 
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, 
  PieChart, Pie, Legend, 
  CartesianGrid, LabelList 
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const DemographicsTab: FC = () => {
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';

  // Age Distribution Data
  const ageData = [
    { name: '16-29', value: 28 },
    { name: '30-45', value: 35 },
    { name: '45-60', value: 22 },
    { name: '60+', value: 15 },
  ];

  // Gender Distribution Data
  const genderData = [
    { name: 'Male', value: 48, fill: '#4F46E5' },
    { name: 'Female', value: 51, fill: '#9B87F5' },
    { name: 'Other', value: 1, fill: '#6B7280' },
  ];

  // Location Distribution Data
  const locationData = [
    { name: 'Copenhagen, DK', value: 42 },
    { name: 'London, UK', value: 35 },
    { name: 'New York, US', value: 15 },
    { name: 'Other', value: 8 },
  ];

  // Income Distribution Data
  const incomeData = [
    { name: '<30k', value: 18 },
    { name: '30k-75k', value: 45 },
    { name: '75k-120k', value: 25 },
    { name: '>120k', value: 12 },
  ];

  // Color ranges for charts
  const ageColors = ['#93C5FD', '#60A5FA', '#3B82F6', '#2563EB'];
  const locationColors = ['#34D399', '#10B981', '#059669', '#047857'];
  const incomeColors = ['#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED'];

  return (
    <div className="space-y-6 animate-slide-up pt-4">
      {/* Age Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 relative">
        <InteractiveTooltip 
          content={`Age distribution shows that ${searchTerm} is most popular among 30-45 year olds, who represent 35% of the audience.`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <ChartBar className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Age Distribution</h3>
        </div>
        <div className="h-[120px] w-full">
          <ChartContainer 
            config={{
              ageBar: { theme: { light: '#3B82F6', dark: '#3B82F6' } },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={ageData} 
                layout="vertical"
                margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis 
                  type="number" 
                  axisLine={false} 
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                  tickCount={6}
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#D1D5DB' }}
                  width={40}
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
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {ageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={ageColors[index]} />
                  ))}
                  <LabelList 
                    dataKey="value" 
                    position="right" 
                    formatter={(value: number) => `${value}%`}
                    style={{ fill: 'white', fontSize: 10, fontWeight: 500 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      {/* Gender Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 relative">
        <InteractiveTooltip 
          content={`Gender analysis reveals that ${searchTerm} slightly appeals more to females (51%) than males (48%).`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <Users className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Gender Distribution</h3>
        </div>
        <div className="h-[130px] w-full">
          <ChartContainer 
            config={{
              genderPie: { theme: { light: '#9B87F5', dark: '#9B87F5' } },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                  label={({ name, value, cx, x, y }) => {
                    // Don't render label for very small segments (like "Other: 1%")
                    if (value < 5) return null;
                    
                    return (
                      <text 
                        x={x} 
                        y={y} 
                        fill="white" 
                        textAnchor={x > cx ? 'start' : 'end'} 
                        dominantBaseline="central"
                        fontSize={10}
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
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      {/* Location Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 relative">
        <InteractiveTooltip 
          content={`Geographic data suggests ${searchTerm} is most popular in Copenhagen (42%), followed by London (35%).`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Location Distribution</h3>
        </div>
        <div className="h-[130px] w-full">
          <ChartContainer 
            config={{
              locationBar: { theme: { light: '#10B981', dark: '#10B981' } },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={locationData} 
                layout="vertical"
                margin={{ top: 5, right: 30, left: 65, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis 
                  type="number" 
                  axisLine={false} 
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                  tickCount={6}
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#D1D5DB' }}
                  width={65}
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
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {locationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={locationColors[index]} />
                  ))}
                  <LabelList 
                    dataKey="value" 
                    position="right" 
                    formatter={(value: number) => `${value}%`}
                    style={{ fill: 'white', fontSize: 10, fontWeight: 500 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      {/* Income Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 relative">
        <InteractiveTooltip 
          content={`Income analysis shows ${searchTerm} resonates most with middle-income groups (30k-75k), comprising 45% of respondents.`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <DollarSign className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Income Distribution</h3>
        </div>
        <div className="h-[130px] w-full">
          <ChartContainer 
            config={{
              incomeBar: { theme: { light: '#8B5CF6', dark: '#8B5CF6' } },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={incomeData}
                margin={{ top: 15, right: 5, left: 5, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#D1D5DB' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 50]}
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
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
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {incomeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={incomeColors[index]} />
                  ))}
                  <LabelList 
                    dataKey="value" 
                    position="top" 
                    formatter={(value: number) => `${value}%`}
                    style={{ fill: 'white', fontSize: 10, fontWeight: 500 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      {/* Ancestry Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
        <InteractiveTooltip 
          content={`Ancestry data shows ${searchTerm} is most popular among Europeans (32%) and Asians (28%).`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <User className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Ancestry Distribution</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">32%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">European</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">28%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">Asian</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">22%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">African</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">18%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
          </div>
        </div>
      </div>
      
      {/* Map Card */}
      <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
        <InteractiveTooltip 
          content={`Geographic heatmap visualizes where ${searchTerm} has the most engagement, with hotspots in Europe and North America.`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2 z-10">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-4">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Geographic Distribution</h3>
        </div>
        <DemographicsMap />
      </div>
    </div>
  );
};
