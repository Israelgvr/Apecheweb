import { useParams } from "react-router-dom";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import React, { useState, useEffect } from 'react';
import './Info.css';
function User (){
    const { userId } = useParams();
    console.log(useParams())
    const [primerDato, setPrimerDato] = useState(null);

    useEffect(() => {
      fetch(`https://condor.onrender.com/api/userDivice/${userId}`)
        .then(response => response.json())
        .then(data => {
          setUsers(data);
          if (data.length > 0) {
            setPrimerDato(data[0]);
          }
        })
        .catch(error => console.log(error));
    }, []);
  
    const [location, setlocation] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:3200/api/locations/${userId}`)
        .then(response => response.json())
        .then(data => setlocation(data))
        .catch(error => console.log(error));
    }, []);
  
    const [Imagen, setImegen] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:3200/api/imagen/${userId}`)
        .then(response => response.json())
        .then(data => setImegen(data))
        .catch(error => console.log(error));
    }, []);
  
    const imageCount = Imagen.length;
  
    const handlePrint = () => {
      window.print();
    };
  

return (
    <DashboardLayout>
        <DashboardNavbar />
    <div>
    <p>Datos generales del dispositivo   ID.</p>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Fabricacion</th>
          <th>Modelo</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.userId}</td>
            <td>{user.fabricate}</td>
            <td>{user.modelo}</td>
            <td>{user.version}</td>
          </tr>
        ))}
      </tbody>
    </table> 
     <h5>registro de información de geolocalización  del dispositivo  identificado por el ID, La longitud y latitud.</h5>
    <table>
      <thead>
        <tr>
          <th>ID Dispositivo</th>
          <th>Longitud</th>
          <th>Latitud</th>
          
        </tr>
      </thead>
      <tbody>
        {location.map(location => (
          <tr key={location.id}>
            <td>{location.userId}</td>
            <td>{location.longitude}</td>
            <td>{location.latitude}</td>
            
          </tr>
        ))}
      </tbody>
    </table>

    <p>Registro de información de archivos  del dispositivo  identificado por el ID.</p>
    <table>
      <thead>
        <tr>
          <th>ID Dispositivo</th>
          <th>Tipo</th>
          <th>Fecha</th>
          <th>Hora</th>
          
        </tr>
      </thead>
      <tbody>
        {Imagen.map(imagens => (
          <tr key={imagens.id}>
            <td>{imagens.userId}</td>
            <td>imagen.png</td>
            <td>{imagens.date}</td>
            <td>{imagens.time}</td>
            
          </tr>
        ))}
      </tbody>
      <p>TOTAL DE ARCHIVOS: {imageCount}</p>
    </table>
    <button onClick={handlePrint}>Imprimir</button>
    </div>
    </DashboardLayout>
  );
}

export default User;

