import React from 'react'



const Navbar = () => {
  return (
    <nav className='fixed w-full h-24 shadow-xl' style={{ backgroundColor: 'rgba(0, 128, 128, 0.6)' }}>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
      <h1 className='cursor-pointer font-extrabold'>AHSAN.</h1>
      <div>Right Side</div>
      </div>
    </nav>
  )
}
export default Navbar