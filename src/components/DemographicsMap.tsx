
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const DemographicsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with temporary token - in production, this should be stored in env variables
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZWFpIiwiYSI6ImNscng4OHBveTB6N2Qya3A3Y3N5ZGNlNm4ifQ.JgLwiFcBvE8U0r48SHp0nQ';
    
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

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="h-[460px] relative rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-900/10" />
    </div>
  );
};

export default DemographicsMap;
