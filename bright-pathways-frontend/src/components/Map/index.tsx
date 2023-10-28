"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression, Map } from "leaflet";

type Markers = {
  markerCoords: LatLngExpression;
  name: string;
  email: string;
  type: string;
  phone: string;
  address: string;
  description: string;
}[];

function MapElement({ markers }: { markers: Markers }) {
  const [position, setPosition] = useState<number[]>();
  const [map, setMap] = useState<Map>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(function (position) {
        setPosition([position.coords.latitude, position.coords.longitude]);
      });
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, []); // Empty dependency array to run the effect once

  useEffect(() => {
    if (map) {
      map.invalidateSize();
    }
  }, [map]);

  return (
    <>
      {position && (
        <MapContainer
          center={position as LatLngExpression}
          zoom={15} // Adjust the zoom level as needed
          scrollWheelZoom={true}
          style={{ height: "600px", width: "100%" }}
          // @ts-expect-error - Leaflet typings are missing the map property
          whenCreated={setMap}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((coords, index) => (
            <Marker key={index} position={coords.markerCoords}>
              <Popup>
                <h1 className="text-3xl font-bold uppercase">{coords.name}</h1>
                <p>
                  <span className="font-bold">Email:</span>
                  {coords.email}
                </p>
                <p>
                  <span className="font-bold">Type:</span>
                  {coords.type}
                </p>
                <p>
                  <span className="font-bold">Phone:</span>
                  {coords.phone}
                </p>
                <p>
                  <span className="font-bold">Address:</span>
                  {coords.address}
                </p>
                <p>
                  <span className="font-bold">Description:</span>
                  {coords.description}
                </p>
              </Popup>
            </Marker>
          ))}
          <Circle center={position as LatLngExpression} radius={1000} />
        </MapContainer>
      )}
    </>
  );
}

export default MapElement;
