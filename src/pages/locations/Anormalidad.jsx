import React, { useState, useEffect } from 'react';
import axios from 'axios';
import skmeans from 'skmeans';
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import Poli from "./MapaAnormalidad";
import Datos from "./DatosAn"
import './location.css';
import { useParams, Link } from "react-router-dom";


const k = 20;
const thresholdMultiplier = 6;

function AnomalyDetector() {
  const { userId } = useParams();


  const [users, setUsers] = useState([]);
  const [primerDato, setPrimerDato] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3200/api/userDivice/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        if (data.length > 0) {
          setPrimerDato(data[0]);
        }
      })
      .catch(error => console.log(error));
  }, []);


  const [anomalies, setAnomalies] = useState([]);

  async function checkForAnomalies() {
    try {
      const response = await axios.get(`http://localhost:3200/api/locations/${userId}`);
      const data = response.data.map(({ latitude, longitude }) => [longitude, latitude]);
      const results = skmeans(data, k);

      const distances = results.idxs.map((idx, i) => {
        const centroid = results.centroids[idx];
        const point = data[i];
        return Math.sqrt(Math.pow(point[0] - centroid[0], 2) + Math.pow(point[1] - centroid[1], 2));
      });

      const avgDistance = distances.reduce((sum, d) => sum + d, 0) / distances.length;
      const threshold = thresholdMultiplier * avgDistance;

      const anomalies = data.filter((point, i) => distances[i] > threshold);

      setAnomalies(anomalies);

      // Send anomaly data to API endpoint
      const anomalyData = {
        userId: userId,
        length: anomalies.length,
        locations: anomalies.map(([lon, lat]) => ({ longitude: lon, latitude: lat }))
      };

      const primeraUbicacion = anomalyData.locations[0];
      const latitud = primeraUbicacion.latitude;
      const longitud = primeraUbicacion.longitude;
      const user0 = primerDato.userId;      ;
      const user = primerDato.fabricate;
      const user1 = primerDato.modelo;
      const user2 = primerDato.version;
      
      const bot = {
        message: ` ALERTA DE ANORMALIDAD DE RUTA DEL DISPOSITIVO  ID: ${user0},FABRICANTE: ${user}, MODELO:${user1}, VERSION:${user2},  https://www.openstreetmap.org/?mlat=${longitud}&mlon=${latitud}#map=7/${longitud }/${latitud}`
      };

      // Store anomalies data in a POST request
      await axios.post('https://condor.onrender.com/api/anormalidades', anomalyData);
      await axios.post('https://condor.onrender.com/messages', bot);
    } catch (error) {
      console.error(error);
    }
    
  }

  useEffect(() => {
    checkForAnomalies();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
    

      <div className="anomalies-box">
        <h1>Rutas Anomalias:</h1>
        {anomalies.length > 0 ? (
          <ul>
            {anomalies.map((anomaly, i) => (
              <li key={i}>{anomaly[1]}, {anomaly[0]}</li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron anomalías.</p>
        )}
      </div>
   <Datos/>
<Poli/>

    </DashboardLayout>
  );
}

export default AnomalyDetector;
