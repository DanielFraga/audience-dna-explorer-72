
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
      center: [30, 15],
      projection: 'globe',
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add points with gradients matching the cobweb chart
    map.current.on('load', () => {
      if (!map.current) return;

      // Add a data source for points
      map.current.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-74, 40.7] }, properties: { name: 'New York' } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-0.1276, 51.5072] }, properties: { name: 'London' } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [139.6917, 35.6895] }, properties: { name: 'Tokyo' } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [151.2093, -33.8688] }, properties: { name: 'Sydney' } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [28.9784, 41.0082] }, properties: { name: 'Istanbul' } },
          ]
        }
      });

      // Add circles layer with gradient color matching cobweb
      map.current.addLayer({
        id: 'points-glow',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-radius': 20,
          'circle-color': '#33C3F0',
          'circle-opacity': 0.4,
          'circle-blur': 1
        }
      });

      // Add smaller inner circles
      map.current.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-radius': 6,
          'circle-color': '#1EAEDB',
          'circle-opacity': 0.8
        }
      });
    });

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
