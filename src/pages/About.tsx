import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainSidebar from "@/components/MainSidebar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
const About = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="main-container transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 p-4 md:p-6">
        <div className="flex flex-col h-full max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-100">About Us</h1>
              <p className="text-gray-400">Learn more about Cubular</p>
            </div>
            <Button variant="ghost" size="icon" onClick={handleGoBack} className="h-8 w-8 rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">At Cubular, we have access to over 300 million people — on just 48 hours' notice.

Our global, multi-panel system is fed with expertly crafted, scientifically grounded questions, capturing the living DNA of your industry in real time. Every day, we ask real people — ethically, voluntarily — to share their meaningful opinions on what’s new, what’s changing, and what’s emerging.

We aren’t running cheap surveys or scraping passive noise.
We are actively listening — probing society itself.

Fresh answers to fresh questions.
Real human voices. Real time.

This is a new philosophy of human centricity for the AI era:
Societal Listening. Audience Probing.
Not survey-monkeying around — but feeding AI with the authentic pulse of the world.

And with Cubular, you have direct access to it.</p>
            
            <h2 className="text-xl font-semibold text-gray-100 mb-4">What We Do</h2>
            <p className="text-gray-300 mb-6">
              We combine advanced analytics with intuitive interfaces to transform complex data into clear, 
              actionable insights. Our platform helps organizations make informed decisions based on real user feedback.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Our Team</h2>
            <p className="text-gray-300">Our team consists of data scientists, UX researchers, and industry experts passionate about helping businesses connect with their audiences in meaningful ways. </p>
          </div>
        </div>
      </div>
    </div>;
};
export default About;