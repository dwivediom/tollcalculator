import { Icon } from 'leaflet';
import mylocationIcongif from "../Assets/Icons/mylocation.gif"
import locationPinIcongif from "../Assets/Icons/location-pin.gif"
import tollIconpng  from "../Assets/Icons/toll.png"
export const mylocationIcon = new Icon({
  iconUrl: mylocationIcongif,
  iconSize: [32, 32], // width and height of the icon
  iconAnchor: [16, 32], // position of the icon anchor relative to its center
  popupAnchor: [0, -32], // position of the popup anchor relative to the icon's center
});

export const locationPinIcon = new Icon({
    iconUrl:locationPinIcongif,
    iconSize: [32, 32],
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32], 
  });
  export const tollIcon = new Icon({
    iconUrl:tollIconpng,
    iconSize: [36, 36],
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32], 
  });
  
