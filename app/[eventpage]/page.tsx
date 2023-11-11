'use client'

import { useSearchParams } from "next/navigation";

function EventPage () {
  const searchParams = useSearchParams()
  const eventDetails = {
    title: searchParams.get('title'),
    date: searchParams.get('date'),
    location: searchParams.get('location')
  }

  return ( 
    <div>
      {/* IF DETAILS EXIST IN QUERY */}
      {eventDetails.title &&
      <>
        <p>{eventDetails.title}</p>
        <p>{eventDetails.date}</p>
        <p>{eventDetails.location}</p>
      </>
        ||
        <p>invalid link</p>
      }
    </div>
   );
  }
  
export default EventPage;