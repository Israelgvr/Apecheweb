//import React ,{useState} from 'react';
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import Datos from "./datosDispo"
import React, {useState,  useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import mapboxgl from 'mapbox-gl';
import { useParams, Link  } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import './location.css';
import { map } from "jquery";

import { FaArrowLeft } from 'react-icons/fa';
function LocationList() {
  const {userId} = useParams();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`https://condor.onrender.com/api/locations/${userId}`)
      .then(response => response.json())
      .then(data => setLocations(data)) 
      .catch(error => console.error(error));

      
  }, []);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYzgyMjktNSIsImEiOiJjbGc4anA2MjQwMGFpM2dwN21qZHdjenBtIn0.c3Gs4ot1QAdZf9Ngl8e5dw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v12',

      center: [-65.84056833333334, -17.535491666666665],
      zoom: 8,
      attributionControl: false
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());

    

    map.on('load', () => {
      

      const coordinates = locations.map(location => [location.latitude,location.longitude]);
      // Add markers to the map
   

      map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': locations.map(location => [
              location.latitude,
              location.longitude,
              
            ])
          }
        }
      });

      const startPoint = coordinates[0];
      const endPoint = coordinates[coordinates.length - 1];
      console.log('INICIO ',startPoint);
      console.log('FINAL ',endPoint);
    
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#007cbf',
          'line-width': 8
        }
      });
      map.addLayer({
        'id': 'start-point',
        'type': 'circle',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': startPoint
                }
              }
            ]
          }
        },
        'paint': {
          'circle-color': 'green',
          'circle-radius': 15,
        }
      });
      map.addLayer({
        'id': 'end-point',
        'type': 'circle',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': endPoint
                }
              }
            ]
          }
        },
        'paint': {
          'circle-color': 'red',
          'circle-radius': 15
        }
      });

      coordinates.forEach(point => {
        new mapboxgl.Marker()
          .setLngLat(point)
          .addTo(map);
      });

    });

    
    


  }, [locations]);

  
  return (
    <DashboardLayout>
    <DashboardNavbar />
    <div> 
        <button onClick={() => window.history.back()} style={{ color: 'blue' }}>
          <FaArrowLeft /> Volver atrás
        </button>
      </div>
    <div>
    
          <Card >
            
            <CardActions>

              <Link to={`/Poligons/${userId} `}>
                <Button size="small" style={{backgroundColor: '#515A5A ', color: 'white'}}>Trazado Poligonos</Button>
              </Link>
              <Link to={`/Anormalidades/${userId}`}>
                <Button size="small" style={{backgroundColor: '#515A5A ', color: 'white'}}>Anormalidades</Button>
              </Link>
              <Link to={`/Datosanormal/${userId}`}>
                <Button size="small" style={{backgroundColor: '#515A5A ', color: 'white'}}>Anormalidades</Button>
              </Link>
            </CardActions>
          </Card>

          <Datos/>
  
      <h2>Historial de localizacion</h2>
      <div id="map" style={{ height: '600px' }} >
      </div>
      
       
    
    </div>
    </DashboardLayout>
  );
}

export default LocationList;

  