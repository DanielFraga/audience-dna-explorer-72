
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AudienceSectionProps {
  selectedAudience: string;
  onAudienceChange: (value: string) => void;
}

export const AudienceSection = ({ selectedAudience, onAudienceChange }: AudienceSectionProps) => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-800">
      {/* Audience Selection Dropdown */}
      <div className="mb-3">
        <div className="text-[10px] font-medium text-gray-400 mb-1.5">Audience</div>
        <Select value={selectedAudience} onValueChange={onAudienceChange}>
          <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-[10px] text-gray-300 h-7">
            <SelectValue placeholder="Select audience" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            <SelectItem value="holiday" className="text-[10px] text-gray-300">holiday</SelectItem>
            <SelectItem value="all" className="text-[10px] text-gray-300">all</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Audience Overview Card */}
      <div className="bg-gray-800/50 rounded-lg p-3 space-y-3">
        {/* Key Traits */}
        <div className="space-y-1.5">
          <div className="text-[9px] text-gray-500">Key Traits</div>
          <div className="flex flex-wrap gap-1">
            <span className="px-1.5 py-0.5 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded text-[9px]">Tech-savvy</span>
            <span className="px-1.5 py-0.5 bg-[#ea384c]/10 text-[#ea384c] rounded text-[9px]">Quality-focused</span>
            <span className="px-1.5 py-0.5 bg-[#F2FCE2] text-gray-700 rounded text-[9px]">Early Adopter</span>
          </div>
        </div>

        {/* Interests */}
        <div className="space-y-1.5">
          <div className="text-[9px] text-gray-500">Interests</div>
          <div className="flex flex-wrap gap-1">
            <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Technology</span>
            <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Innovation</span>
            <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Digital</span>
          </div>
        </div>

        {/* Communication */}
        <div className="space-y-1.5">
          <div className="text-[9px] text-gray-500">Communication</div>
          <div className="space-y-1">
            <div className="flex items-center space-x-1.5">
              <span className="text-[9px] text-green-400">Do:</span>
              <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Emphasize digital</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-[9px] text-red-400">Don't:</span>
              <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Focus on traditional</span>
            </div>
          </div>
        </div>

        {/* Key Terms */}
        <div className="space-y-1.5">
          <div className="text-[9px] text-gray-500">Key Terms</div>
          <div className="flex flex-wrap gap-1">
            <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Digital-first</span>
            <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
