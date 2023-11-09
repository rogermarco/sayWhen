import Nav from './ui/nav';
import Button from './ui/button';

import Image from 'next/image';
import logoBig from '../public/logo-big.png'


export default function Home() {
  return (
    <main>
      <Nav />
      <div className='flex items-center justify-center pt-10'>
        <Image
          src={logoBig}
          alt='Logo'
          className=''
        />
      </div>
      <h2 className="text-blue-500 text-2xl text-center py-10">Organise your mates. Get on with the important stuff.</h2>
      <div className='flex space-x-4 justify-center'>
        <Button label='Log in'/>
        <Button label='Continue without account'/>
      </div>
    </main>
  )
}