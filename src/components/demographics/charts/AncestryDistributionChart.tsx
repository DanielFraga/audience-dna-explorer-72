import { FC } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { ChartTooltip } from "@/components/ui/chart";
import { User } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import { Info } from 'lucide-react';

// Updated Ancestry Distribution Data with new categories
const ancestryData = [{
  name: 'European',
  value: 30,
  fill: '#F97316'
},
// Bright Orange
{
  name: 'East Asian',
  value: 25,
  fill: '#FEF7CD'
},
// Soft Yellow
{
  name: 'African',
  value: 20,
  fill: '#FB923C'
},
// Amber
{
  name: 'Hispanic',
  value: 25,
  fill: '#FEC6A1'
} // Soft Orange
];
export const AncestryDistributionChart: FC = () => {
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';
  const {
    isMobile,
    width
  } = useIsMobile();

  // Calculate responsive dimensions
  const getAxisTitleSize = () => width < 375 ? 7 : 8;

  // RENDERLESS LABEL - for the ancestry chart
  const renderCustomizedLabel = (props: any) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
      name,
      value
    } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const textAnchor = x > cx ? 'start' : 'end';

    // Only render labels for segments with enough space
    return <text x={x} y={y} fill="white" textAnchor={textAnchor} dominantBaseline="central" fontSize={getAxisTitleSize()} fontWeight="500">
        {`${name}: ${value}%`}
      </text>;
  };
  return;
};