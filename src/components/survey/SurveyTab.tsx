
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const SurveyTab = () => {
  const wordsetA = ["adventure", "discover", "explore", "journey", "wanderlust", "excitement", "novel", "unique", "exotic", "experience"];
  const wordsetB = ["limited", "exclusive", "urgent", "hurry", "missing out", "worry", "stress", "pressure", "uncertainty", "doubt"];
  const wordsetC = ["terrible", "awful", "hopeless", "never", "disaster", "failure", "worst", "impossible", "ruined", "doomed"];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wordset A Card */}
        <Card className="border-green-100/20 bg-[#F2FCE2]/5">
          <CardHeader>
            <CardTitle className="text-green-100">Wordset A</CardTitle>
            <CardDescription className="text-green-200/80">Interest</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {wordsetA.map((word) => (
                <span
                  key={word}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-200 border border-green-500/30"
                >
                  {word}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Wordset B Card */}
        <Card className="border-purple-100/20 bg-[#8B5CF6]/5">
          <CardHeader>
            <CardTitle className="text-purple-100">Wordset B</CardTitle>
            <CardDescription className="text-purple-200/80">FOMO + Anxiety</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {wordsetB.map((word) => (
                <span
                  key={word}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-500/30"
                >
                  {word}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Wordset C Card */}
        <Card className="border-red-100/20 bg-[#1A1F2C]">
          <CardHeader>
            <CardTitle className="text-red-100">Wordset C</CardTitle>
            <CardDescription className="text-red-200/80">Anger + Pessimism</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {wordsetC.map((word) => (
                <span
                  key={word}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-200 border border-red-500/30"
                >
                  {word}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
