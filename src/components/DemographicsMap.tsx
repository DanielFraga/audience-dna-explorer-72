
import React from 'react';

const DemographicsMap = () => {
  return (
    <div className="h-[460px] relative rounded-lg overflow-hidden">
      <img
        src="photo-1501854140801-50d01698950b"
        alt="Geographic Distribution Map"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-900/50" />
      
      {/* Location Markers */}
      <div className="absolute inset-0">
        {/* Copenhagen */}
        <div className="absolute top-[30%] left-[48%]">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="mt-1 px-2 py-0.5 bg-gray-900/80 rounded text-[10px] text-white whitespace-nowrap">
            Copenhagen (42%)
          </div>
        </div>
        
        {/* London */}
        <div className="absolute top-[35%] left-[45%]">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="mt-1 px-2 py-0.5 bg-gray-900/80 rounded text-[10px] text-white whitespace-nowrap">
            London (35%)
          </div>
        </div>
        
        {/* New York */}
        <div className="absolute top-[40%] left-[25%]">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="mt-1 px-2 py-0.5 bg-gray-900/80 rounded text-[10px] text-white whitespace-nowrap">
            New York (15%)
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsMap;

