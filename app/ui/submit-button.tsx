'use client'

import { useFormStatus } from "react-dom";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid'
import { BuilderTypes } from "./event-form";

interface SubmitButtonProps {
  eventDetails: BuilderTypes
}

///////////////////////
//FIX LINK GENERATION//
///////////////////////

function SubmitButton ({ eventDetails }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  
  const eventPage = uuidv4().slice(0, 5);

  return (
    <Link href={{
      pathname: `/${eventPage}`,
      query: {
        title: eventDetails.title,
        date: eventDetails.date,
        location: eventDetails.location
      },
    }}
      >
      <button 
      type='submit' 
      aria-disabled={pending}
      className='btn-secondary'
      >
        Ready to go!
      </button>
    </Link>
   );
}

export default SubmitButton;