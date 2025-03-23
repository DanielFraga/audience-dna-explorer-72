
import { ShieldCheck, Info, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import MainSidebar from "@/components/MainSidebar";
import IconTabs from "@/components/IconTabs";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [showCertDialog, setShowCertDialog] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen md:h-screen bg-gray-950 font-grotesk text-[13px] md:overflow-hidden">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 p-3 md:p-4 animate-fade-in h-[100vh] overflow-auto md:overflow-hidden">
        <div className="flex flex-col items-center mb-6">
          <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700 pr-2">
            <span className="mr-1">450 out of 10000 respondents</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-5 w-5 p-0 ml-1 hover:bg-gray-700 rounded-full"
              onClick={() => navigate('/saved-audiences')}
            >
              <X className="h-3 w-3 text-gray-400" />
            </Button>
          </Badge>
          
          <IconTabs currentTab="responses" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-2xl font-display font-semibold text-gray-100">About Us</h1>
          
          <Badge 
            variant="outline"
            className="hover:bg-green-950/50 cursor-pointer inline-flex items-center gap-2 border-green-400/20 hover:border-green-400/40 transition-colors"
            onClick={() => setShowCertDialog(true)}
          >
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span>How we ensure Surveys generate truthful data</span>
          </Badge>
        </div>
        
        <div className="mt-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="space-y-6 text-gray-200">
                <h2 className="text-xl font-semibold text-blue-400">Our Methodology</h2>
                
                <p className="leading-relaxed">
                  Our platform combines advanced statistical analysis with behavioral science to deliver 
                  unprecedented insights into audience demographics, psychographics, and digital behaviors. 
                  We use a multi-dimensional approach to data collection, pulling from over 10,000 verified 
                  respondents across diverse focus areas. By applying proprietary algorithms and AI-driven 
                  pattern recognition, we transform raw survey data into actionable audience insights that 
                  help businesses make better decisions. Our rigorous quality control measures and bias 
                  mitigation techniques ensure that you receive the most accurate representation of your 
                  target audience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-400 mb-2">Respondent Verification</h3>
                    <p className="text-sm text-gray-300">
                      Every survey participant undergoes a rigorous verification process to ensure authentic 
                      responses and prevent fraudulent data collection.
                    </p>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-400 mb-2">Bias Elimination</h3>
                    <p className="text-sm text-gray-300">
                      Our proprietary algorithms identify and correct for sampling bias, response bias, 
                      and other common issues that can distort survey results.
                    </p>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-400 mb-2">Continuous Improvement</h3>
                    <p className="text-sm text-gray-300">
                      We constantly refine our methodologies based on the latest research in behavioral 
                      science and data analysis to provide the most accurate insights possible.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certification Dialog */}
        <Dialog open={showCertDialog} onOpenChange={setShowCertDialog}>
          <DialogContent className="sm:max-w-[600px] bg-gray-800 border-gray-700">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-gray-100">Survey Data Protection</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 p-0 hover:bg-gray-700/50"
                  onClick={() => setShowCertDialog(false)}
                >
                  <X className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            </DialogHeader>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4 text-gray-200">
                <h3 className="text-xl font-semibold text-blue-400">Let's Protect Your Survey Data from Noise (Bias)!</h3>
                
                <p>Collecting survey data seems simple. You ask a set of questions, get responses, and analyze the results. But anyone who has worked with survey data knows it is rarely that straightforward. Hidden within most datasets is noise-irrelevant or misleading information that distorts findings and makes it difficult to draw accurate conclusions. If left unchecked, noise leads to poor decisions, wasted resources, and unreliable insights. Many researchers do not realize how much noise creeps into their surveys until they are already acting on bad data. This is why understanding where noise comes from and how to reduce it is crucial before making conclusions based on survey responses.</p>
                
                <p>One of the biggest sources of noise is response bias, where people provide answers that make them look good rather than being truthful. This is especially common in topics like health, work productivity, or ethical behavior. Someone may report exercising five times a week when they actually work out once or claim they never waste time at work when in reality, they do. Another major issue is sampling bias, where survey participants do not represent the larger population. If a survey about workplace stress is sent only to senior employees, the results will overlook the struggles of lower-level workers. Survey fatigue is another hidden problem that can heavily distort results. When surveys are too long, respondents get bored and start clicking through without paying attention, leading to straight-lining, where they select the same response for every question just to finish quickly. Even the way questions are structured can introduce order effects, where responses are influenced by the order in which the questions appear.</p>
                
                <p>The good news is that these problems can be minimized with careful survey design and data cleaning. Diversifying your sample helps ensure the data reflects a broader audience rather than just an easily accessible subset. Using attention checks can filter out participants who are not paying attention. A simple question like "Select option three if you are reading this" can identify careless responses. Keeping surveys short and engaging reduces fatigue, increasing the chances of thoughtful answers. Randomizing the order of questions and answer choices minimizes bias caused by how information is presented. Pre-testing your survey on a small group can help catch unclear wording or patterns that might introduce bias. After data collection, filtering out unreliable responses, such as those completed in an unrealistically short time, ensures that only meaningful data is analyzed.</p>
                
                <p>At the end of the day, survey data is only as valuable as its accuracy. If noise goes unchecked, even the best statistical analysis will not fix misleading insights.</p>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AboutUs;
