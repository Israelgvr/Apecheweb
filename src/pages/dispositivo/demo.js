import React, { useEffect, useState, useRef } from 'react';
import jsPDF from 'jspdf';
import { CSVLink } from 'react-csv';
import 'jspdf-autotable';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';
import { useParams, Link  } from "react-router-dom";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import { FaArrowLeft } from 'react-icons/fa';
import Datos from "../locations/datosDispo"
const columns = [
  { field: 'id', hide: true },
  { field: 'placeName', headerName: 'Lugar', width: 150 },
  { field: 'country', headerName: 'Pais', width: 150 },
  { field: 'municipality', headerName: 'Municipio', width: 150 },
  { field: 'street', headerName: 'Calle', width: 150 },
  { field: 'longitude', headerName: 'Longitud', width: 150 },
  { field: 'latitude', headerName: 'Lactitud', width: 150 },
   { field: 'fecha', headerName: 'Fecha', width: 150 },
];

const ExampleMap = () => {
  const {userId} = useParams();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`https://condor.onrender.com/api/locations/${userId}`)
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error(error));
  }, []);

  const transformData = async () => {
    const transformedLocations = [];
    for (let i = 0; i < locations.length; i++) {
      const location = locations[i];
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${location.latitude},${location.longitude}.json?access_token=pk.eyJ1IjoiYzgyMjktNSIsImEiOiJjbGc4anA2MjQwMGFpM2dwN21qZHdjenBtIn0.c3Gs4ot1QAdZf9Ngl8e5dw`
        );
        const features = response.data.features;
        if (features.length > 0) {
          const placeName = features[0].place_name;
          const country = features[0].context.find(c => c.id.includes('country')).text;
          const municipality = features[0].context.find(c => c.id.includes('place')).text;
          const street = features[0].text;
          transformedLocations.push({
            id: i,
            placeName,
            country,
            municipality,
            street,
            longitude: location.longitude,
            latitude: location.latitude,
             fecha: location.createdAt 
           
          });
        } else {
          transformedLocations.push({
            id: i,
            placeName: '',
            country: '',
            municipality: '',
            street: '',
            longitude: location.longitude,
            latitude: location.latitude,
            fecha: location.createdAt 
          });
        }
      } catch (error) {
        console.error(`Location ${location.latitude},${location.longitude}:`, error);
        transformedLocations.push({
          id: i,
          placeName: '',
          country: '',
          municipality: '',
          street: '',
          longitude: location.longitude,
          latitude: location.latitude,
         fecha: location.createdAt          
        });
      }
    }
    return transformedLocations;
  };

  const [transformedLocations, setTransformedLocations] = useState([]);

  useEffect(() => {
    transformData().then(setTransformedLocations);
  }, [locations]);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [columns.map(col => col.headerName)],
      body: transformedLocations.map(row => Object.values(row)),
    });
    doc.save('Reporte.pdf');
  };

  const rows = transformedLocations;

  const mapContainerRef = useRef(null);

  return (
    <DashboardLayout>
    <DashboardNavbar />
    <div> 
        <button onClick={() => window.history.back()} style={{ color: 'blue' }}>
          <FaArrowLeft /> Volver atrás
        </button>
      </div>
      <Datos/>
    <div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
      <Button variant="contained" color="primary">
        <CSVLink data={rows} filename={"Reporte.csv"} style={{ color: "#fff" }}>
          Export CSV
        </CSVLink>
      </Button>
      <Button onClick={exportPDF}>
        Export PDF
      </Button>
    </div>

    </DashboardLayout>
  );
};

export default ExampleMap;