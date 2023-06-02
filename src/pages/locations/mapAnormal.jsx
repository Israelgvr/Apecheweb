import React, { useEffect, useRef } from 'react';
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import mapboxgl from 'mapbox-gl';
import * as d3 from 'd3-voronoi';
import { range } from 'd3-array';
import { rgb } from 'd3-color';
import axios from 'axios';
import { useParams, Link  } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaArrowLeft } from 'react-icons/fa';
import Datos from "./datosDispo"
mapboxgl.accessToken = 'pk.eyJ1IjoiYzgyMjktNSIsImEiOiJjbGc4anA2MjQwMGFpM2dwN21qZHdjenBtIn0.c3Gs4ot1QAdZf9Ngl8e5dw';

const App = () => {
  const mapContainerRef = useRef(null);
  const {userId} = useParams();

  useEffect(() => {
    axios
    .get(`https://condor.onrender.com/api/anormalidades/${userId} `)
      .then(response => {
        const data = response.data;
        console.log("demo", data)

        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [-66.1476983, -17.383778],
          zoom: 9,
          attributionControl: false
        });

        // Add map controls
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.FullscreenControl());

        // Create random points
        const points = range(100).map(() => {
          return [
            -66.1476983 + (Math.random() - 0.5) * 0.2 * 2,
            -17.383778 + (Math.random() - 0.5) * 0.2 * 2,
          ];
        });

        // Calculate Voronoi polygons
        const voronoi = d3.voronoi().extent([[-100, -20], [100, 20]]);
        const polygons = voronoi.polygons(points);
        console.log("voronoi", voronoi)
        console.log("Poligon", polygons)

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

        ////////////////////

        map.on('load', () => {
          const coordinates = data.map(location => [location.latitude, location.longitude]);

          map.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: data.map(location => [
                  location.latitude,
                  location.longitude,
                ])
              }
            }
          });

          const startPoint = coordinates[0];
          const endPoint = coordinates[coordinates.length - 1];
          console.log('INICIO ', startPoint);
          console.log('FINAL ', endPoint);

          // Add the route layer
          map.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#007cbf',
              'line-width': 4
            }
          });
    
          // Add the start-point layer
          map.addLayer({
            id: 'start-point',
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    geometry: {
                      type: 'Point',
                      coordinates: startPoint
                    }
                  }
                ]
              }
            },
            paint: {
              'circle-color': 'green',
              'circle-radius': 15
            }
          });
    
          // Add the end-point layer
          map.addLayer({
            id: 'end-point',
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    geometry: {
                      type: 'Point',
                      coordinates: endPoint
                    }
                  }
                ]
              }
            },
            paint: {
              'circle-color': 'red',
              'circle-radius': 15
            }
          });
    
          // Add the routearrows layer
          map.addLayer(
            {
              id: 'routearrows',
              type: 'symbol',
              source: 'route',
              layout: {
                'symbol-placement': 'line',
                'text-field': '▶',
                'text-size': ['interpolate', ['linear'], ['zoom'], 12, 24, 22, 60],
                'symbol-spacing': ['interpolate', ['linear'], ['zoom'], 12, 30, 22, 160],
                'text-keep-upright': false,
              },
              paint: {
                'text-color': 'blue',
                'text-halo-color': 'hsl(55, 11%, 96%)',
                'text-halo-width': 15,
              },
            },
            'waterway-label'
          );
    
          // Add markers to the map
          coordinates.forEach(point => {
            new mapboxgl.Marker()
              .setLngLat(point)
              .addTo(map);
          });

        });
    
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
        });
      })
    }, [userId]);

    return (
      
    <div
    ref={mapContainerRef}
    style={{ width: '100%', height: '100vh' }}
    />
    
    );
    }
    
    export default App;