import "leaflet/dist/leaflet";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import { PinLocationDefault, PinLocationUser } from "../PinLocation";

import { useEffect, useState } from "react";

const MapUser = () => {
  const positionDefault = [-17.3845075, -66.135261];
  const [positionsUser, setPositionsUser] = useState([]);
  const positionUser = [
    {
      nameUser: "Admin",
      id: 1,
      position: [-17.403071, -66.041558],
    },
    {
      nameUser: "YoguiApp",
      id: 2,
      position: [-17.378905, -66.14208],
    },
    {
      nameUser: "Oscar Ra",
      id: 3,
      position: [-17.38415, -66.156481],
    },
  ];

  const baseMap = [
    {
      name: "Openstreetmap",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      checked: true,
    },
    {
      name: "Rutas",
      url: "https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png",
      checked: false,
    },
    {
      name: "Satelite",
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      checked: false,
    },
  ];

  useEffect(() => {
    setPositionsUser(positionUser);
  }, []);

  return (
    <MapContainer
      center={positionDefault}
      zoom={15}
      scrollWheelZoom={true}
      style={{ minHeight: "100%", borderRadius: "10px" }}
    >
      
      <LayersControl position="topright">
        {baseMap.map(({name, url, checked}) => {
          return (
            <LayersControl.BaseLayer checked={checked} name={name} key={name}>
              <TileLayer url={url} />
            </LayersControl.BaseLayer>
          );
        })}
      </LayersControl>

      {positionsUser.map(({ nameUser, position, id}) => {
        return (
          <Marker position={position} icon={PinLocationUser} value="1" key={id}>
            <Popup>
              {nameUser}
              <br />
              {position}
            </Popup>
          </Marker>
        );
      })}

      <Marker position={positionDefault} icon={PinLocationDefault} value="1">
        <Popup>
          Monumento Cristo de la Concordia - Cochabamba
          <br />
          -17.383797, -66.135261
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapUser;
