import React, { useEffect, useRef, useState } from 'react';
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import Line from "../Gerenciales/Line";
import Pie from "../Gerenciales/pie";
import PieChart from "../Gerenciales/Linechart";
import './dash.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';

function Dashboard() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://condor.onrender.com/api/userDivice/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data[0]))
      .catch(error => console.log(error));
  }, []);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div> 
        <button onClick={() => window.history.back()} style={{ color: 'blue' }}>
          <FaArrowLeft /> Volver atrás
        </button>
      </div>
      <h2>Reporte general del dispositivo </h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fabricación</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Versión</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{user.userId}</TableCell>
            <TableCell>{user.fabricate}</TableCell>
            <TableCell>{user.modelo}</TableCell>
            <TableCell>{user.version}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      
      <div className="graph-container"> 
        <h5>Gráficos de barras</h5>    
        <Line/>
      </div>
      
      <div className="graph-container"> 
        <h5>Gráfico Circular</h5>    
        <Pie/>
      </div>
      
      <div className="graph-container"> 
        <h5>Gráficos de líneas</h5>
        <PieChart/>
      </div>
      
      <div className="graph-container"> 
        <h5>Gráficos de líneas</h5>
        <PieChart/>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
