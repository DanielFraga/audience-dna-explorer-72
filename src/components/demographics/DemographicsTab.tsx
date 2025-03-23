
import { FC } from 'react';
import { ChartContainer } from "@/components/ui/chart";
import { 
  AgeDistributionChart, 
  GenderDistributionChart, 
  LocationDistributionChart, 
  IncomeDistributionChart, 
  AncestryDistributionChart,
  GeographicDistributionMap
} from './charts';

export const DemographicsTab: FC = () => {
  return (
    <div className="space-y-4 animate-slide-up pt-2">
      {/* Wrap Age Distribution Chart with styling config */}
      <ChartContainer 
        config={{
          ageBar: { theme: { light: '#3B82F6', dark: '#3B82F6' } },
        }}
      >
        <AgeDistributionChart />
      </ChartContainer>

      {/* Wrap Gender Distribution Chart with styling config */}
      <ChartContainer 
        config={{
          genderPie: { theme: { light: '#9B87F5', dark: '#9B87F5' } },
        }}
      >
        <GenderDistributionChart />
      </ChartContainer>

      {/* Wrap Location Distribution Chart with styling config */}
      <ChartContainer 
        config={{
          locationBar: { theme: { light: '#10B981', dark: '#10B981' } },
        }}
      >
        <LocationDistributionChart />
      </ChartContainer>

      {/* Wrap Income Distribution Chart with styling config */}
      <ChartContainer 
        config={{
          incomeBar: { theme: { light: '#8B5CF6', dark: '#8B5CF6' } },
        }}
      >
        <IncomeDistributionChart />
      </ChartContainer>

      {/* Wrap Ancestry Distribution Chart with styling config */}
      <ChartContainer 
        config={{
          ancestryPie: { theme: { light: '#F97316', dark: '#F97316' } },
        }}
      >
        <AncestryDistributionChart />
      </ChartContainer>

      {/* Geographic Distribution Map doesn't need chart wrapping */}
      <GeographicDistributionMap />
    </div>
  );
};
