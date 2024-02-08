import React from 'react';
import {Button} from '@mui/material';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from '../../../bluemark.png';
import iconShadow from '../../../shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
const LocationPickerMap = ({ setPosition, position }) => {

  const DirtyHack = () => {
    const map = useMap();
    setTimeout(() => {
      map.invalidateSize();
      if ((position) && (!loaded)) {
        map.fitBounds(L.latLngBounds([position[0]-0.05,position[1]-0.05], [position[0]+0.05,position[1]+0.05]));
        setLoaded(true);
      }
    }, 0);
  
    return null;
  };

  const [loaded, setLoaded] = React.useState(false);

  function Explorer() {
    const map = useMapEvents({
      drag: () => {
        let coords = map.getCenter();
        setPosition([coords.lat, coords.lng]);
      },
      zoom: () => {
        let coords = map.getCenter();
        setPosition([coords.lat, coords.lng]);
      },
    })
  }

  function Finder() {
    const map = useMap()
    function success(location) {
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      if (position == null) {
        map.setView([latitude, longitude], map.getZoom());
        setPosition([latitude, longitude]);
      }
    }
    
    function error() {
      console.log("Unable to retrieve your location");
    }
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    return null
  }

  return (
    <MapContainer center={[32,32]} zoom={13} scrollWheelZoom={true} gestureHandling = {true} style={{ height: '400px', width: '100%' }}>
      <Finder />
      <Explorer/>
      <DirtyHack/>
      <Button style = {{zIndex:510, position: "absolute", top:0, right: 0, backgroundColor: '#1976D2', color: 'white'}}className='findMe' onClick ={() => {
      setPosition(null);
      }}>Find Me!</Button>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    <img id='mark' alt='x' src ={icon}></img>
    </MapContainer>
  );
};

export default LocationPickerMap;