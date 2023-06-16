import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='fixed w-full h-24 shadow-xl' style={{ backgroundColor: 'rgba(0, 128, 128, 0.6)' }}>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
      <Link href={'/'}><h1 className='cursor-pointer font-extrabold'>AHSAN.</h1></Link>
      <div>
        <ul className='hidden sm:flex'>
          <Link href={'/about'}>
            <li className='ml-10 uppercase hover:border-b text-xl'>About</li>
          </Link>
          <Link href={'/service'}>
            <li className='ml-10 uppercase hover:border-b text-xl'>Service</li>
          </Link>
          <Link href={'/portfolio'}>
            <li className='ml-10 uppercase hover:border-b text-xl'>Portfolio</li>
          </Link>
          <Link href={'/contact'}>
            <li className='ml-10 uppercase hover:border-b text-xl'>Contact</li>
          </Link>
        </ul>
      </div>
      </div>
    </nav>
  )
}
export default Navbar