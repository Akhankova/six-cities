import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  name: string;
}

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  currentCity: City,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: currentCity.location.latitude,
          lng: currentCity.location.longitude,
        },
        zoom: currentCity.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, currentCity]);

  return map;
}

export default useMap;


/*import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: 10
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;*/

