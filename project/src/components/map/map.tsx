import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
//import useMap from '../../hooks/useMap';
import { offersMocks } from '../../types/offers';
import useMap from '../../hooks/useMap';

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

type MapProps = {
  offers: offersMocks[] | undefined;
};

/*const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});*/
export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  name: string;
}

export const CITY: City = {
  location: {
    latitude: 40.835292,
    longitude: -73.916236,
    zoom: 10,
  },
  name: 'Нью-Йорк',
};

export const IconSize = {
  first: 40,
  second: 40,
};

export const IconAnchor = {
  first: 20,
  second: 40,
};

function Map(props:MapProps): JSX.Element {
  const {offers} = props;
  // eslint-disable-next-line no-console
  console.log(offers);
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [IconSize.first, IconSize.second],
    iconAnchor: [IconAnchor.first, IconAnchor.second],
  });

  useEffect(() => {
    if (map && map !== null) {
      offers?.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [defaultCustomIcon, map, offers]);

  return <div style={{height: '100%', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1144px'}} ref={mapRef}/>;
}
export default Map;
