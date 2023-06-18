import React from 'react'

type Props = {}

const Skill = (props: Props) => {
  return (
    <div>
    <section id='skill'>
    <div className="container py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-[#66b3b3] text-primary sm:text-5xl lg:text-6xl">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded-full px-8 py-12">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hover:translate-x-2 duration-500">
                <img src="./html.png" alt="html" className="cursor-pointer " />
                <p className='font-bold hover:text-orange-500 duration-500 cursor-pointer'>HTML</p>
              </div>
            </div>
          </div>
          <div className="group rounded  px-8 py-12">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hover:translate-x-[-8px] duration-500">
                <img src="./css.png" alt="html" className="cursor-pointer " />
              <p className='font-bold hover:text-blue-600 duration-500 cursor-pointer'>CSS</p>
              </div>
            </div>
          </div>
          <div className="group rounded px-8 py-12">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hover:translate-x-[-8px] duration-500">
                <img src="./tailwind.png" alt="html" className="cursor-pointer " />
                <p className='font-bold hover:text-blue-700 duration-500 cursor-pointer'>Tailwind</p>
              </div>
            </div>
          </div>
          <div className="group rounded px-8 py-12">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hover:translate-x-2 duration-500">
                <img src="./js.png" alt="html" className="cursor-pointer " />
                <p className='font-bold hover:text-yellow-500 duration-500 cursor-pointer'>JavaScript</p>
              </div>
            </div>
          </div>
          <div className="group rounded px-8 py-12">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hover:translate-x-[-8px] duration-500">
                <img src="./react.png" alt="html" className="cursor-pointer " />
                <p className='font-bold hover:text-sky-500 duration-500 cursor-pointer'>React JS</p>
              </div>
            </div>
          </div>
          <div className="group rounded px-8 py-12">
            <div className="mx-auto  h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hover:translate-x-[-8px] duration-500">
                <img src="./next.png" alt="html" className="cursor-pointer" />
                <p className='font-bold cursor-pointer'>NEXT JS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Skill