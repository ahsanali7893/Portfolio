import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='fixed w-full h-24 shadow-xl' style={{ backgroundColor: 'rgba(0, 128, 128, 0.6)' }}>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href='/'>
          <h1 className='text-xl font-extrabold'>AHSAN.</h1>
        </Link>
        <div>
          <ul className='hidden sm:flex'>
            <li className='ml-10 font-bold uppercase hover:border-b text-sm cursor-pointer'>
              <Link href='/about'className='ml-10 font-bold uppercase hover:border-b text-sm cursor-pointer'>About</Link>
            </li>
            <li className='ml-10 font-bold uppercase hover:border-b text-sm cursor-pointer'>
              <Link href='/service'>Service</Link>
            </li>
            <li className='ml-10 font-bold uppercase hover:border-b text-sm cursor-pointer'>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            <li className='ml-10 font-bold uppercase hover:border-b text-sm cursor-pointer'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
