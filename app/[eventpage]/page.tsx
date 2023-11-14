import { headers } from 'next/headers';
import dayjs from 'dayjs';
import { API_KEY } from '@/secrets/apiKey';
import { getEventById, parsePlaceId } from '../lib/helpers';
import ShareButton from '../ui/share-button';

export default async function EventPage () {
  // pull _id entry from event in database, match with url provided by headers object
  const _headers = headers();
  const urlToShare = _headers.get('x-url')!;
  const currentUrl = _headers.get('x-url')!.replace('http://localhost:3000/', '');
  const { event } = await getEventById(currentUrl);

  // parse placeId from maps api (as event.location)
  const parsedId = await parsePlaceId(event.location);

  return ( 
    <div className='flex flex-col justify-center items-center mt-20'>
      <div className='flex border-b-4 border-logo-blue'>
        <h1 className='font-semibold tracking-tighter text-5xl pt-10 pb-8'>{event.title}</h1>
        <ShareButton url={urlToShare}/>
      </div>

      <p className='font-semibold tracking-tighter text-4xl p-5'>When?</p>
      <div className='flex flex-col items-center border-b-4 border-logo-blue'>
        <h2 className='text-lg tracking-tighter'>{dayjs(event.date).format('dddd D MMMM YYYY')}</h2>
        <h2 className='pb-5 text-lg tracking-tighter'>{dayjs(event.date).format('HH:mm')}</h2>
      </div>
      
      <p className='font-semibold tracking-tighter text-4xl p-5'>Where?</p>
      <p className='font-semibold text-lg tracking-tighter'>{parsedId.result.name}</p>
      <p className='text-lg tracking-tighter'>{parsedId.result.formatted_address}</p>
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
