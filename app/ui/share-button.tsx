'use client'

import Image from "next/image";
import copy from '../../public/copy.png'

function ShareButton ({ url }: {url: string}) {

   // copy to clipboard
   const handleClick = (string: string) => {
    navigator.clipboard.writeText(string);
  }

  return ( 
    <div className='flex items-center pl-5 cursor-pointer' onClick={() => handleClick(url)}>
      <Image 
      src={copy}
      alt='Copy to clipboard'
      className='flex items-center'
      />
    </div>
   );
}

export default ShareButton;