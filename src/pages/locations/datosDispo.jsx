import React, { useEffect, useRef, useState } from 'react';

import { useParams } from "react-router-dom";
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
   <div>
      <h5>Dispositivo </h5>
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
      
      </div>
      
   
  );
}

export default Dashboard;
