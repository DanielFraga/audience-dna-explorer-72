
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const CITY_DATA = [
  { coordinates: [12.5683, 55.6761], name: 'Copenhagen', percentage: 42 },
  { coordinates: [-0.1276, 51.5072], name: 'London', percentage: 35 },
  { coordinates: [-74, 40.7], name: 'New York', percentage: 15 },
  { coordinates: [139.6917, 35.6895], name: 'Tokyo', percentage: 2 },
  { coordinates: [151.2093, -33.8688], name: 'Sydney', percentage: 3 },
  { coordinates: [28.9784, 41.0082], name: 'Istanbul', percentage: 3 },
];

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

    // Add points with gradients matching the cobweb chart
    map.current.on('load', () => {
      if (!map.current) return;

      // Add a data source for points
      map.current.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: CITY_DATA.map(city => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: city.coordinates
            },
            properties: {
              name: city.name,
              percentage: city.percentage
            }
          }))
        }
      });

      // Add circles layer with gradient color matching cobweb chart and size based on percentage
      map.current.addLayer({
        id: 'points-glow',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['get', 'percentage'],
            2, 10,   // Min percentage -> small radius
            42, 40   // Max percentage -> large radius
          ],
          'circle-color': '#33C3F0',
          'circle-opacity': 0.4,
          'circle-blur': 1
        }
      });

      // Add smaller inner circles with size also based on percentage
      map.current.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['get', 'percentage'],
            2, 4,    // Min percentage -> small radius
            42, 12   // Max percentage -> large radius
          ],
          'circle-color': '#1EAEDB',
          'circle-opacity': 0.8
        }
      });

      // Add labels
      map.current.addLayer({
        id: 'point-labels',
        type: 'symbol',
        source: 'points',
        layout: {
          'text-field': ['format',
            ['get', 'name'], {},
            '\n',
            ['get', 'percentage'], { 'font-scale': 0.8 },
            '%'
          ],
          'text-anchor': 'top',
          'text-offset': [0, 1],
          'text-size': 12
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#000000',
          'text-halo-width': 1
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

