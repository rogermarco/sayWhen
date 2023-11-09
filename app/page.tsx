// import Nav from './ui/nav';
import Button from './ui/button';
import EventForm from './ui/event-form';

import Image from 'next/image';
import logoBig from '../public/logo-big.png'


export default function Home() {
  return (
    <main>
      <div className='pt-48 h-screen'>
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
          <Button label='Log in'/>
          <Button label='Continue without account'/>
        </div>
      </div>
      <div className='h-screen align-bottom'>
        <EventForm />
      </div>
    </main>
  )
}