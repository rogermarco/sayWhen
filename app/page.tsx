// import Nav from './ui/nav';
import Button from './ui/button';
import EventForm from './ui/event-form';

import Image from 'next/image';
import logoBig from '../public/logo-big.png'

import { v4 as uuidv4 } from 'uuid'

export default async function Home() { 
  // lets go drilling to fix this href client/server issue
  // generate new event page link on server side
  // send it to client side via eventForm -> submitButton
  const eventPageLink = uuidv4().slice(0, 5);

  return (
    <main>
      <div className='pt-24 h-screen'>
        <div className='flex items-center justify-center pt-10'>
          <Image
            src={logoBig}
            alt='Logo'
            className='hidden md:block'
          />
          {/* Smaller logo image here for small screens */}
        </div>
        <h2 className="text-logo-blue text-3xl text-center font-semibold tracking-tighter py-10">Organise your mates. Just say when.</h2>
        <div className='flex space-x-4 justify-center'>
          <Button label='Register / Log in'/>
          <Button label='Continue without account'/>
        </div>
      </div>
      <div className='h-screen align-bottom' id='form'>
        <EventForm eventPageLink={eventPageLink}/>
      </div>
    </main>
  )
}