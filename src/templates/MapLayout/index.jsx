import "leaflet/dist/leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  FeatureGroup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import { PinLocation, PinLocationDefault } from "./PinLocation";

import { useEffect, useState } from "react";
const MapLayout = ({ userDeviceInfo }) => {
  const [userLocations, setUserLocations] = useState([]);

  const getLocations = async () => {
    const rawResponse = await fetch(
      "https://backend-alisero-v1.herokuapp.com/api/v1/location/getLocations",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-token": userDeviceInfo.token,
        },
      }
    );

    const response = await rawResponse.json();

    setUserLocations(response.locations);
    // console.log(response.locations);
  };

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
    // console.log(userDeviceInfo);
    getLocations();
  }, []);
  const limeOptions = { color: "blue" };
  // const polygon = [
  //   [-17.38342, -66.157],
  //   [-17.394505, -66.13656999999999],
  //   [-17.411131666666666, -66.12667333333334],
  //   [-17.3977, -66.13575999999999],
  //   [-17.38342, -66.157],
  // ];
  const polygon = [];

  const positionDefault = [-17.3845075, -66.135261];
  return (
    <MapContainer
      center={positionDefault}
      zoom={15}
      scrollWheelZoom={true}
      maxZoom={18}
      style={{ minHeight: "100%", borderRadius: "10px" }}
    >
      <LayersControl position="topright">
        {baseMap.map(({ name, url, checked }) => {
          return (
            <LayersControl.BaseLayer checked={checked} name={name} key={name}>
              <TileLayer url={url} />
            </LayersControl.BaseLayer>
          );
        })}
      </LayersControl>
      {userLocations.map(
        ({ latitude, longitude, id, addressLines, currentTime }) => {
          return (
            <Marker
              position={[latitude, longitude]}
              icon={PinLocation}
              key={id}
            >
              <Popup>
                Address: {addressLines} <br />
                Coordenates: {latitude} , {longitude} <br />
                Date: {currentTime}
              </Popup>
            </Marker>
          );
        }
      )}

      {userLocations.map(
        ({ latitude, longitude, id, addressLines, currentTime }) => {
          polygon.push([latitude, longitude]);
          return <Polyline id pathOptions={limeOptions} positions={polygon} />;
        }
      )}

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
export default MapLayout;
