'use client'

import { useFormStatus } from "react-dom";

function SubmitButton () {
  const { pending } = useFormStatus();

  return ( 
    <button 
    type='submit' 
    aria-disabled={pending}
    className='btn-secondary'
    >
      Ready to go
    </button>
   );
}

export default SubmitButton;