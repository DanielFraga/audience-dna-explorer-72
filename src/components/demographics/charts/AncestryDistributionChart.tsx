import { FC } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// This is mock data for the ancestry distribution
const ancestryData = [{
  name: 'Western Europe',
  value: 45
}, {
  name: 'Eastern Europe',
  value: 23
}, {
  name: 'Northern Europe',
  value: 18
}, {
  name: 'Southern Europe',
  value: 12
}, {
  name: 'Sub-Saharan Africa',
  value: 8
}, {
  name: 'East Asia',
  value: 6
}, {
  name: 'South Asia',
  value: 5
}, {
  name: 'Middle East',
  value: 4
}, {
  name: 'Native American',
  value: 2
}, {
  name: 'Pacific Islander',
  value: 1
}];
interface AncestryDistributionChartProps {}
export const AncestryDistributionChart: FC<AncestryDistributionChartProps> = () => {
  return;
};
export default AncestryDistributionChart;