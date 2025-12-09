'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  lat: number;
  lng: number;
  displayName: string;
}

export default function MapView({ lat, lng, displayName }: MapViewProps) {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    // Dynamically import Leaflet only in the browser
    (async () => {
      const L = (await import('leaflet')).default;

      if (!isMounted) return;

      // Remove existing map if any
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }

      const container = document.getElementById('map');
      if (!container) return;

      // Clear container
      container.innerHTML = '';
      
      // Remove any Leaflet classes that might cause issues
      container.classList.remove('leaflet-container');

      // Create custom icon (must be done here, not at module level)
      const icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      try {
        // Create new map
        const map = L.map('map').setView([lat, lng], 15);
        mapRef.current = map;

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add marker
        L.marker([lat, lng], { icon })
          .addTo(map)
          .bindPopup(`<strong>${displayName}</strong><br/>Lat: ${lat.toFixed(6)}<br/>Lng: ${lng.toFixed(6)}`)
          .openPopup();
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    })();

    // Cleanup function
    return () => {
      isMounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng, displayName]);

  return (
    <div className="h-full w-full">
      <div id="map" className="h-full w-full rounded-lg"></div>
    </div>
  );
}
