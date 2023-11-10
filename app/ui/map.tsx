'use client'

import { useEffect, useRef, useState } from 'react'; 
import { loader } from "../lib/maps-service";
import AutoComplete from 'react-google-autocomplete'
import { API_KEY } from '@/secrets/apiKey';

function Map () {
  // const inputRef = useRef<HTMLInputElement>(null)
  // const mapRef = useRef<HTMLDivElement>(null)
  const [place, setPlace] = useState('')

  return ( 
    <>
    <AutoComplete
      apiKey={API_KEY}
      onPlaceSelected={(place) => {setPlace(place.place_id!)}
      }
      options={
        {
          types: ['bar'],
          componentRestrictions: {country: 'es'}
        }
      }
    />
    {place && 
      <iframe
        width="450"
        height="450"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${place}&zoom=14`}
      >
      </iframe>
    }
    {/* <div id='map' className='w-[500px] h-[500px]' ref={mapRef}></div> */}
    </>
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



  // const createMap = async () => {
    
  //   const { Map } = await loader.importLibrary('maps');
  //   const { Marker } = await loader.importLibrary('marker');
    
  //   const position = {
  //     lat: 50,
  //     lng: 2
  //   }
  //   const mapOptions: google.maps.MapOptions = {
  //     center: position,
  //     zoom: 17,
  //     mapId: 'MAPID'
  //   }
  //   const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
  //   const marker = new Marker({
  //     map: map,
  //     position: position
  //   })
  // }
  
  // const createAutocomplete = async () => {
  //   const { Autocomplete } = await loader.importLibrary('places')
  //   // Specify just the place data fields that you need.
  //   // @ts-ignore
  //   const autocomplete = new Autocomplete(inputRef, {
  //    fields: ["place_id", "geometry", "name", "formatted_address"],
  //  });

  // }

    // const createMap = async () => {
    
  //   const { Map } = await loader.importLibrary('maps');
  //   const { Marker } = await loader.importLibrary('marker');
  //   const { Geocoder } = await loader.importLibrary('geocoding');
    
  //   const geocoder = new Geocoder();
  //   geocoder.geocode({ address }, (results, status) => {
  //       const mapOptions = {
  //         center: results![0].geometry.location,
  //         zoom: 16,
  //       }
  //   const position = {
  //     lat: 50,
  //     lng: 2
  //   }

  //   const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
  //   const marker = new Marker({
  //     map: map,
  //     position: position
  //   })
  //  })
  // }
  
  // useEffect(() => {
  //   createMap();
  // }, )