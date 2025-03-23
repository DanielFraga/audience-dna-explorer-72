
import React from 'react';

const DemographicsMap = () => {
  return (
    <div className="h-[460px] relative rounded-lg overflow-hidden">
      {/* Mock World Map */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Create a stylized world map effect */}
        <div className="absolute inset-0 opacity-40">
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            {/* Basic world map shape */}
            <path 
              d="M200,180 Q300,120 400,160 Q500,200 600,180 Q700,160 800,200 Q900,240 1000,200 L1000,400 Q900,380 800,420 Q700,460 600,420 Q500,380 400,420 Q300,460 200,400 Z" 
              fill="none" 
              stroke="#4299e1" 
              strokeWidth="2" 
              className="animate-pulse" 
            />
            {/* Continental shapes */}
            <path 
              d="M300,250 Q400,230 450,280 Q500,330 580,300 Q620,280 660,300 L650,380 Q600,400 550,370 Q480,330 400,350 Q350,370 310,340 Z" 
              fill="#334155" 
              stroke="#64748b" 
              strokeWidth="1" 
            />
            <path 
              d="M700,270 Q750,240 800,260 Q850,280 900,250 L930,320 Q880,340 820,320 Q760,300 720,320 Z" 
              fill="#334155" 
              stroke="#64748b" 
              strokeWidth="1" 
            />
            {/* Grid lines */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line 
                key={`horizontal-${i}`} 
                x1="0" 
                y1={100 + i * 60} 
                x2="1200" 
                y2={100 + i * 60} 
                stroke="#1e293b" 
                strokeWidth="1" 
                strokeDasharray="5,15" 
              />
            ))}
            {Array.from({ length: 15 }).map((_, i) => (
              <line 
                key={`vertical-${i}`} 
                x1={80 * i} 
                y1="0" 
                x2={80 * i} 
                y2="800" 
                stroke="#1e293b" 
                strokeWidth="1" 
                strokeDasharray="5,15" 
              />
            ))}
          </svg>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70" />
      
      {/* Location Markers */}
      <div className="absolute inset-0">
        {/* Copenhagen */}
        <div className="absolute top-[35%] left-[51%]">
          <div className="relative">
            <div className="w-3 h-3 bg-gradient-glow rounded-full animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-gradient-glow rounded-full animate-ping opacity-30" />
          </div>
          <div className="mt-1.5 px-2.5 py-1 bg-gray-900/80 backdrop-blur-sm rounded-md text-xs text-white whitespace-nowrap border border-gray-800 shadow-lg">
            Copenhagen (42%)
          </div>
        </div>
        
        {/* London */}
        <div className="absolute top-[38%] left-[47%]">
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-gradient-glow rounded-full animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-4.5 h-4.5 bg-gradient-glow rounded-full animate-ping opacity-30" />
          </div>
          <div className="mt-1.5 px-2.5 py-1 bg-gray-900/80 backdrop-blur-sm rounded-md text-xs text-white whitespace-nowrap border border-gray-800 shadow-lg">
            London (35%)
          </div>
        </div>
        
        {/* New York */}
        <div className="absolute top-[40%] left-[28%]">
          <div className="relative">
            <div className="w-2 h-2 bg-gradient-glow rounded-full animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-glow rounded-full animate-ping opacity-30" />
          </div>
          <div className="mt-1.5 px-2.5 py-1 bg-gray-900/80 backdrop-blur-sm rounded-md text-xs text-white whitespace-nowrap border border-gray-800 shadow-lg">
            New York (15%)
          </div>
        </div>

        {/* Small random dots representing minor cities */}
        <div className="absolute top-[45%] left-[36%]">
          <div className="w-1 h-1 bg-blue-400 rounded-full opacity-60" />
        </div>
        <div className="absolute top-[50%] left-[60%]">
          <div className="w-1 h-1 bg-blue-400 rounded-full opacity-60" />
        </div>
        <div className="absolute top-[30%] left-[70%]">
          <div className="w-1 h-1 bg-blue-400 rounded-full opacity-60" />
        </div>
        <div className="absolute top-[52%] left-[32%]">
          <div className="w-1 h-1 bg-blue-400 rounded-full opacity-60" />
        </div>
        <div className="absolute top-[25%] left-[42%]">
          <div className="w-1 h-1 bg-blue-400 rounded-full opacity-60" />
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-md border border-gray-800 shadow-lg">
        <div className="text-xs text-white font-medium mb-1.5">Population Density</div>
        <div className="flex items-center gap-1.5">
          <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-blue-500/30 via-blue-500/70 to-blue-500"></div>
          <span className="text-[10px] text-gray-300">Low</span>
          <span className="text-[10px] text-gray-300 ml-auto">High</span>
        </div>
      </div>
    </div>
  );
};

export default DemographicsMap;
