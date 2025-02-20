
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
    <div className="mt-6 pt-6 border-t border-gray-800 space-y-6">
      {/* Audience Selection Dropdown */}
      <div>
        <div className="text-[11px] font-medium text-gray-400 mb-2">Audience Selection</div>
        <Select value={selectedAudience} onValueChange={onAudienceChange}>
          <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-[11px] text-gray-300">
            <SelectValue placeholder="Select audience" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            <SelectItem value="holiday" className="text-[11px] text-gray-300">holiday</SelectItem>
            <SelectItem value="all" className="text-[11px] text-gray-300">all</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Traits */}
      <div className="space-y-2">
        <div className="text-[10px] text-gray-500">Key Traits</div>
        <div className="flex flex-wrap gap-1">
          <span className="px-1.5 py-0.5 bg-[#0EA5E9] text-white rounded text-[9px]">Tech-savvy</span>
          <span className="px-1.5 py-0.5 bg-[#ea384c] text-white rounded text-[9px]">Quality-focused</span>
          <span className="px-1.5 py-0.5 bg-[#F2FCE2] text-gray-700 rounded text-[9px]">Early Adopter</span>
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-2">
        <div className="text-[10px] text-gray-500">Interests</div>
        <div className="flex flex-wrap gap-1">
          <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Technology</span>
          <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Innovation</span>
          <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Digital</span>
        </div>
      </div>

      {/* Communication */}
      <div className="space-y-2">
        <div className="text-[10px] text-gray-500">Communication</div>
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="text-[9px] text-green-400">Do</div>
            <div className="text-[9px] text-gray-400">Emphasize digital solutions</div>
          </div>
          <div className="space-y-1">
            <div className="text-[9px] text-red-400">Don't</div>
            <div className="text-[9px] text-gray-400">Focus on traditional only</div>
          </div>
        </div>
      </div>

      {/* Key Terms */}
      <div className="space-y-2">
        <div className="text-[10px] text-gray-500">Key Terms</div>
        <div className="flex flex-wrap gap-1">
          <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Digital-first</span>
          <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Innovation</span>
        </div>
      </div>
    </div>
  );
};
