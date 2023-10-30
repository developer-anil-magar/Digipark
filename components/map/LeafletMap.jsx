'use client';

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';

import { MarkerIcon } from '@/public';
import { useEffect } from 'react';

const Recenter = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
};

const LeafletMap = ({ location }) => {
  const customIcon = new Icon({
    iconUrl: MarkerIcon.src,
    iconSize: [70, 70],
  });
  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={25}
      scrollWheelZoom={true}
      className="w-full h-[50vh] md:h-[70vh] rounded-63 border-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Recenter lat={location.lat} lng={location.lng} />
      <Marker position={[location.lat, location.lng]} icon={customIcon}>
        <Popup>
          <h1 className="semibold-20">City: {location.name}</h1>
          <h2 className="normal-18">Parking Status: {location.parking}</h2>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
