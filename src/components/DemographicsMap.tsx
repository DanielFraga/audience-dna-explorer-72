
import React from 'react';

const DemographicsMap = () => {
  return (
    <div className="h-[460px] relative rounded-lg overflow-hidden">
      {/* Simplified Map Background */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Simple dark background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70" />
      
      {/* Only the three main city locations */}
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
