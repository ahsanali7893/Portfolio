import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='w-full z-50 top-0 py-3 sm:py-5  absolute'>
        <div className='container flex items-center justify-between'>
            <div>
                <Link href={'/'}>
                    <h1 className='font-mono w-24 lg:w-48 text-2xl font-extrabold mx-12 text-pink-600'>Ahsan.</h1>
                </Link>
            </div>
            <div className="hidden lg:block">
                <div className="flex items-center">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar