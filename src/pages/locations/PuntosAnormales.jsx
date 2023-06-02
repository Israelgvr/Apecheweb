import React, { useState, useEffect } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
});

const MapComponent = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    async function fetchPoints() {
      try {
        const response = await fetch('https://condor.onrender.com/api/abnormalities/11225888asafeysbndhwj');
        const data = await response.json();
        setPoints(data.locations);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPoints();
  }, []);

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      center={[points[0]?.longitude, points[0]?.latitude]}
      zoom={[12]}
      containerStyle={{
        height: '400px',
        width: '100%',
      }}
    >
      {points.map((point) => (
        <Marker key={point._id} coordinates={[point.longitude, point.latitude]} />
      ))}
    </Map>
  );
};

export default MapComponent;