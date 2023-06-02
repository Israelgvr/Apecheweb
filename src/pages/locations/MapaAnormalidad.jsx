import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import * as d3 from 'd3-voronoi';
import { rgb } from 'd3-color';
import axios from 'axios';
import { range } from 'd3-array';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useParams } from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1IjoiYzgyMjktNSIsImEiOiJjbGc4anA2MjQwMGFpM2dwN21qZHdjenBtIn0.c3Gs4ot1QAdZf9Ngl8e5dw';

const App = () => {
  const mapContainer = useRef(null);
  const { userId } = useParams();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-66.1476983, -17.383778],
      zoom: 9,
      attributionControl: false
    });

    // Add map controls
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());

    axios
      .get(`https://condor.onrender.com/api/anormalidades/${userId}`)
      .then(response => {
        const data = response.data;
        console.log('Response data:', data);

        // Check if data and its properties are defined
        if (data && Array.isArray(data) && data.length > 0) {
          const locations = data[0]?.locations; // Use optional chaining to handle undefined locations
          if (Array.isArray(locations) && locations.length > 0) {
            const points = locations.map(location => [location.latitude, location.longitude]);
            console.log('Points:', points);

            // Check if the points array contains valid coordinates
            if (points.some(point => !isNaN(point[0]) && !isNaN(point[1]))) {
              const point = range(100).map(() => {
                return [
                  -66.1476983 + (Math.random() - 0.5) * 0.2 * 2,
                  -17.383778 + (Math.random() - 0.5) * 0.2 * 2,
                ];
              });
              console.log('points', points);

              // Calculate Voronoi polygons
              const voronoi = d3.voronoi().extent([[-100, -20], [100, 20]]);
              const polygons = voronoi.polygons(point);
              console.log('Voronoi:', voronoi);
              console.log('Polygons:', polygons);

              // Create a GeoJSON feature collection from the polygons, with random colors for each polygon
              const features = polygons.map((polygon, i) => {
                const color = rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                return {
                  type: 'Feature',
                  geometry: {
                    type: 'Polygon',
                    coordinates: [polygon],
                  },
                  properties: {
                    fill: color.toString(),
                  },
                  id: i,
                };
              });
              const featureCollection = {
                type: 'FeatureCollection',
                features,
              };

              // Add the Voronoi polygons to the map
              map.on('load', () => {
                map.addSource('voronoi', {
                  type: 'geojson',
                  data: featureCollection,
                });
                map.addLayer({
                  id: 'voronoi-layer',
                  type: 'fill',
                  source: 'voronoi',
                  paint: {
                  'fill-color': ['get', 'fill'],
                  'fill-opacity': 0.4,
                  },
                  });

                  //Add markers to the map
            points.forEach(point => {
              new mapboxgl.Marker({ color: 'red' }) // Set the color to red
                .setLngLat(point)
                .addTo(map);
            });

            // Generate lines between all points
            const lineFeatures = [];
            for (let i = 0; i < points.length - 1; i++) {
              const startPoint = points[i];
              const endPoint = points[i + 1];
              const line = {
                type: 'Feature',
                geometry: {
                  type: 'LineString',
                  coordinates: [startPoint, endPoint],
                },
                properties: {},
              };
              lineFeatures.push(line);
            }
            const lineFeatureCollection = {
              type: 'FeatureCollection',
              features: lineFeatures,
            };

            map.addSource('lines', {
              type: 'geojson',
              data: lineFeatureCollection,
            });

            map.addLayer({
              id: 'lines-layer',
              type: 'line',
              source: 'lines',
              paint: {
                'line-color': '#3887be',
                'line-width': 5,
              },
            });

            // Add the 'routearrows' layer
            map.addLayer(
              {
                id: 'routearrows',
                type: 'symbol',
                source: 'lines',
                layout: {
                  'symbol-placement': 'line',
                  'text-field': '▶',
                  'text-size': ['interpolate', ['linear'], ['zoom'], 12, 24, 22, 60],
                  'symbol-spacing': ['interpolate', ['linear'], ['zoom'], 12, 30, 22, 160],
                  'text-keep-upright': false,
                },
                paint: {
                  'text-color': '#3887be',
                  'text-halo-color': 'hsl(55, 11%, 96%)',
                  'text-halo-width': 4,
                },
              },
              'waterway-label'
            );
          });
        } else {
          console.error('Invalid coordinates in the points array.');
        }
      } else {
        console.error('Invalid locations data structure.');
      }
    } else {
      console.error('Invalid response data structure.');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

}, [userId]);

return <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />;
};

export default App;
