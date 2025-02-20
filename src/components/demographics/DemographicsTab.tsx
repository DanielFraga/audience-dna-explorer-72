
import { ChartBar, Users, MapPin, DollarSign, User } from "lucide-react";
import { DemographicCard } from "./DemographicCard";
import DemographicsMap from "@/components/DemographicsMap";

export function DemographicsTab() {
  return (
    <div className="grid grid-cols-2 gap-6 animate-slide-up">
      <div className="space-y-3">
        <DemographicCard
          title="Age Distribution"
          icon={<ChartBar className="w-3.5 h-3.5 text-gray-400" />}
          tooltip="Detailed breakdown of age groups across all respondents"
        >
          <div className="grid grid-cols-4 gap-2">
            {[
              { percent: "28%", label: "16-29" },
              { percent: "35%", label: "30-45" },
              { percent: "22%", label: "45-60" },
              { percent: "15%", label: "60+" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </DemographicCard>

        <DemographicCard
          title="Gender Distribution"
          icon={<Users className="w-3.5 h-3.5 text-gray-400" />}
          tooltip="Distribution of gender identities in the respondent pool"
        >
          <div className="grid grid-cols-3 gap-2">
            {[
              { percent: "48%", label: "Male" },
              { percent: "51%", label: "Female" },
              { percent: "1%", label: "Other" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </DemographicCard>

        <DemographicCard
          title="Location Distribution"
          icon={<MapPin className="w-3.5 h-3.5 text-gray-400" />}
          tooltip="Geographical distribution of respondents by area type"
        >
          <div className="grid grid-cols-4 gap-2">
            {[
              { percent: "42%", label: "Copenhagen, DK" },
              { percent: "35%", label: "London, UK" },
              { percent: "15%", label: "New York, US" },
              { percent: "8%", label: "Other" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </DemographicCard>

        <DemographicCard
          title="Income Distribution"
          icon={<DollarSign className="w-3.5 h-3.5 text-gray-400" />}
          tooltip="Income range distribution across all respondents"
        >
          <div className="grid grid-cols-4 gap-2">
            {[
              { percent: "18%", label: "<30k" },
              { percent: "45%", label: "30k-75k" },
              { percent: "25%", label: "75k-120k" },
              { percent: "12%", label: ">120k" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </DemographicCard>

        <DemographicCard
          title="Ancestry Distribution"
          icon={<User className="w-3.5 h-3.5 text-gray-400" />}
          tooltip="Distribution of ancestral backgrounds among respondents"
        >
          <div className="grid grid-cols-4 gap-2">
            {[
              { percent: "32%", label: "European" },
              { percent: "28%", label: "Asian" },
              { percent: "22%", label: "African" },
              { percent: "18%", label: "Other" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </DemographicCard>
      </div>

      <div>
        <DemographicCard
          title="Geographic Distribution"
          icon={<MapPin className="w-3.5 h-3.5 text-gray-400" />}
          tooltip="Geographic distribution of respondents across major cities"
        >
          <DemographicsMap />
        </DemographicCard>
      </div>
    </div>
  );
}
