// import Nav from './ui/nav';
import Button from './ui/button';
import EventForm from './ui/event-form';


import Image from 'next/image';
import logoBig from '../public/logo-big.png'


export default function Home() {
  return (
    <main>
      <div className='flex items-center justify-center pt-10'>
        <Image
          src={logoBig}
          alt='Logo'
          className='hidden md:block'
        />
        {/* Smaller logo image here for small screens */}
      </div>
      <h2 className="text-blue-500 text-2xl text-center py-10">Organise your mates. Just say when.</h2>
      <div className='flex space-x-4 justify-center'>
        <Button label='Log in'/>
        <Button label='Continue without account'/>
      </div>
        <EventForm />
    </main>
  )
}