import { headers } from 'next/headers';

const getEventById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/event/${id}`)
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

export default async function EventPage () {
  // pull _id entry from event in database and match with url
  const _headers = headers();
  const currentUrl = _headers.get('x-url')!.replace('http://localhost:3000/', '');
  const { event } = await getEventById(currentUrl);

  return ( 
    <>
      <div>{event.title}</div>
      <div>{event.date}</div>
      <div>{event.location}</div>
    </>
   );
  }
