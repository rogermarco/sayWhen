'use client'

import AutoComplete from 'react-google-autocomplete'
import { API_KEY } from '@/secrets/apiKey';
import { BuilderTypes } from './event-form';

interface MapProps {
  eventBuilder: BuilderTypes,
  setEventBuilder: Function
}

function Map ( {eventBuilder, setEventBuilder}: MapProps ) {

  return ( 
    <>
    <AutoComplete
      apiKey={API_KEY}
      onPlaceSelected={(place) => {setEventBuilder({...eventBuilder , location: place.place_id!})}
      }
      options={
        {
          // only restricting this for api call count reasons even though i doubt this actually helps
          types: ['bar', 'restaurant', 'cafe'],
          componentRestrictions: {country: 'es'},
        }
      }
      className='w-full form-heading border-b-4 border-black'
    />
    {eventBuilder.location && 
      <iframe
        width="450"
        height="450"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${eventBuilder.location}&zoom=14`}
      >
      </iframe>
    }
    </>
  );
}

export default Map;