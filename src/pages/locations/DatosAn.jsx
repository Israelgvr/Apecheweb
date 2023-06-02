import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./AnormalAn.css"
import { useParams, Link  } from "react-router-dom";
const columns = [
  { field: 'id', hide: true },
  { field: 'userId', headerName: 'userID', width: 150 },
  { field: 'length', headerName: 'Tamano', width: 150 },
  { field: 'locations', headerName: 'Localizacion', width: 150 },
  { field: 'createdAt', headerName: 'Fecha ', width: 150 },
];

const ExampleMap = () => {
  const [transformedLocations, setTransformedLocations] = useState([]);
  const {userId} = useParams();

  useEffect(() => {
    fetch(`https://condor.onrender.com/api/anormalidades/${userId}`)
      .then(response => response.json())
      .then(data => setTransformedLocations(data))
      .catch(error => console.error(error));
  }, []);

  const rows = transformedLocations.map((row, index) => ({ 
    ...row,
     id: index + 1,
     locations: row.locations.map(location => `Longitude: ${location.longitude}, Latitude: ${location.latitude}`).join('\n'),
     }));

  const getRowId = row => row.id;

  return (
    <div>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} getRowId={getRowId} />
      </div>
    </div>
  );
};

export default ExampleMap;
