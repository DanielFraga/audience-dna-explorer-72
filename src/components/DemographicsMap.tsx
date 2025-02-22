
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const DemographicsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      zoom: 1.5,
      center: [12.5683, 55.6761], // Copenhagen coordinates
      projection: 'globe',
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Disable scroll zoom for smoother experience
    map.current.scrollZoom.disable();

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(186, 210, 235)',
        'high-color': 'rgb(36, 92, 223)',
        'horizon-blend': 0.02
      });
    });

    // Rotation animation
    const secondsPerRevolution = 240;
    let userInteracting = false;

    function spinGlobe() {
      if (!map.current || userInteracting) return;
      
      const center = map.current.getCenter();
      center.lng -= 360 / secondsPerRevolution;
      map.current.easeTo({ center, duration: 1000, easing: (n) => n });
    }

    // Handle user interaction
    map.current.on('mousedown', () => {
      userInteracting = true;
    });
    
    map.current.on('mouseup', () => {
      userInteracting = false;
      spinGlobe();
    });

    map.current.on('moveend', spinGlobe);

    // Start spinning
    spinGlobe();

    setIsMapInitialized(true);
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
        setIsMapInitialized(false);
      }
    };
  }, []);

  return (
    <div className="h-[460px] relative rounded-lg overflow-hidden">
      {!isMapInitialized && (
        <div className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center p-4">
          <p className="text-gray-400 mb-4 text-center text-sm">
            Please enter your Mapbox public token to view the map. You can find it in your Mapbox account dashboard.
          </p>
          <input
            type="text"
            placeholder="Enter your Mapbox token"
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-800 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-xs mb-2"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <button
            onClick={initializeMap}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition-colors"
          >
            Initialize Map
          </button>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-900/10" />
    </div>
  );
};

export default DemographicsMap;
