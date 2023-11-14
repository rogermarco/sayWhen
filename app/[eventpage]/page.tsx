import { headers } from 'next/headers';
import dayjs from 'dayjs';
import { API_KEY } from '@/secrets/apiKey';
import { getEventById, parsePlaceId } from '../lib/helpers';

export default async function EventPage () {
  // pull _id entry from event in database, match with url provided by headers object
  const _headers = headers();
  const currentUrl = _headers.get('x-url')!.replace('http://localhost:3000/', '');
  const { event } = await getEventById(currentUrl);

  // parse placeId from maps api (as event.location)
  const parsedId = await parsePlaceId(event.location);

  return ( 
    <div className='flex flex-col justify-center items-center mt-20'>
      <h1 className='font-semibold tracking-tighter text-5xl p-10 border-b-4 border-black'>{event.title}</h1>
      <p className='font-semibold tracking-tighter text-4xl p-5'>When?</p>
      <h2>{dayjs(event.date).format('dddd D MMMM YYYY')}</h2>
      <p className='font-semibold tracking-tighter text-4xl p-5'>Where?</p>
      <p>{parsedId.result.name}</p>
      <p>{parsedId.result.formatted_address}</p>
      <iframe
        width="450"
        height="450"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${event.location}&zoom=14`}
        className='pt-5'
      >
      </iframe>
    </div>
   );
  }
