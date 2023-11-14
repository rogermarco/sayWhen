import Image from "next/image";
import logoBig from '../../public/logo-big.png';
import Link from "next/link";

function Nav () {
  return ( 
    <>
    <main className="px-5 py-2 flex items-center space-x-4 fixed top-0 w-full border-b border-black text-logo-orange bg-gradient-to-r from-logo-orange to-40% to-logo-blue">
      <div className="flex-grow">
        <Image
          src={logoBig}
          height={65}
          width={190}
          alt='Logo'
        />
      </div>

      <div className="mode-buttons w-28 text-black"><p className="text-center w-full">Login</p></div>

      <Link href='/'>
        <div className="mode-buttons w-28 text-black"><p className="text-center w-full">Home</p></div>
      </Link>
    </main>
    </>
  );
}

export default Nav;