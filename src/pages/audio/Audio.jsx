import React, { Component } from 'react';
import { MapContainer } from 'react-leaflet';

import {TileLayer, Marker, Popup } from 'react-leaflet';
class Audio extends Component {
  render() {
    const position = [51.505, -0.09];
    return (
      <MapContainer center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © <a href=&quot;https://openstreetmap.org&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Audio ;

