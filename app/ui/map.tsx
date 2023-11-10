'use client'

import { useEffect, useRef } from 'react'; 
import { loader } from "../lib/maps-service";

function Map () {

  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const { Map } = await loader.importLibrary('maps');

      const position = {
        lat: 0,
        lng: 0
      }
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'MAPID'
      }
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    }
    initMap();
  }, [])

  return ( 
    <div id='map' className='w-[500px] h-[500px]' ref={mapRef}></div>
  );
}

export default Map;

/*
const [map, setMap] = useState<any>(null);  

useEffect(() => {
  loader.importLibrary('core').then(() => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const mapOptions = {
          center: results![0].geometry.location,
          zoom: 16,
        };
        const newMap = new window.google.maps.Map(
          document.getElementById('map') as HTMLElement,
          mapOptions
        );
        const marker = new window.google.maps.Marker({
          position: results![0].geometry.location,
          map: newMap,
        });
        setMap(newMap);
      }
    });
  });
}, [address]);
*/