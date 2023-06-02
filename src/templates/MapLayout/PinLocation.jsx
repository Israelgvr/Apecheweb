import Pin from '../../assets/images/icons/pin.png';
import PinUSer from '../../assets/images/icons/pin_user_orange.png';
import PinDefault from '../../assets/images/icons/pin_user_blue.png';
import L from "leaflet";

export const PinLocation = L.icon({
  iconUrl: Pin,
  iconRetinaUrl: Pin,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export const PinLocationDefault = L.icon({
  iconUrl: PinDefault,
  iconRetinaUrl: PinDefault,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [40, 40],
  className: "leaflet-venue-icon",
});

export const PinLocationUser = L.icon({
  iconUrl: PinUSer,
  iconRetinaUrl: PinUSer,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [40, 40],
  className: "leaflet-venue-icon",
});

export default PinLocation;
