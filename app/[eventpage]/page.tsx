'use client'

import { useSearchParams } from "next/navigation";

function EventPage () {
  const searchParams = useSearchParams()
  
  return ( 
    <div>
      <p>{searchParams.get('title')}</p>
      <p>{searchParams.get('date')}</p>
      <p>{searchParams.get('location')}</p>
    </div>
   );
  }
  
export default EventPage;