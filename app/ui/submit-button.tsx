// 'use client'

// import { useFormStatus } from "react-dom";
// import Link from "next/link";
// import { BuilderTypes } from "./event-form";

// interface SubmitButtonProps {
//   eventDetails: BuilderTypes,
//   eventPage: string,
// }

// ///////////////////////
// //FIX LINK GENERATION//
// ///////////////////////

// function SubmitButton ({ eventDetails, eventPage }: SubmitButtonProps) {
//   const { pending } = useFormStatus();

//   return (
//     <Link href={{
//       pathname: `/${eventPage}`,
//       query: {
//         title: eventDetails.title,
//         date: eventDetails.date,
//         location: eventDetails.location
//       },
//     }}
//       >
//       <button 
//       type='submit' 
//       aria-disabled={pending}
//       className='btn-secondary'
//       >
//         Ready to go!
//       </button>
//     </Link>
//    );
// }

// export default SubmitButton;