import React from 'react'

export default function Work() {
  return (
    <div className='bg-black w-full mt-20 pb-15'>
      <div className="flex justify-between px-5 max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:pt-10">
        <h1 className="text-5xl tracking-widest text-white flex items-center px-5 max-sm:text-3xl max-sm:px-0 z-1">
          How We Work
        </h1>
        <p className="text-xl text-white w-125 max-sm:w-[90%] max-sm:text-sm max-sm:mt-4 my-10 z-1">
            OUR WORK ETHIC FOCUSES ON EXCELLENCE, SPEED, AND SUSTAINABILITY. FROM DESIGN TO DELIVERY, EVERY STEP REFLECTS OUR DEDICATION TO RELIABLE AND RESPONSIBLE PRODUCTION.
        </p>
      </div>
      <div className="bg-[#18181a] w-full  flex justify-between px-10 py-5 items-center mt-10 max-sm:items-start max-sm:flex-col-reverse max-sm:gap-2">
        <h1 className='text-white text-[2rem] max-sm:text-xl'>Discovery</h1>
        <h1 className='text-gray-400 text-[1rem] max-sm:text-sm'>We dive deep into your brand, goals, and audience to craft a tailored marketing strategy.</h1>
        <h1 className='text-white text-[2rem] max-sm:text-xl'> 01</h1>
      </div>
      <div className="bg-[#0e0e0f] w-full  flex justify-between px-10 py-5 items-center max-sm:items-start max-sm:flex-col-reverse max-sm:gap-2">
        <h1 className='text-white text-[2rem] max-sm:text-xl'>Execution</h1>
        <h1 className='text-gray-400 text-[1rem] max-sm:text-sm'>Our team brings ideas to life with compelling visuals, messaging, and data-driven content.</h1>
        <h1 className='text-white text-[2rem] max-sm:text-xl'> 02</h1>
      </div>
      <div className="bg-[#18181a] w-full  flex justify-between px-10 py-5 items-center max-sm:items-start max-sm:flex-col-reverse max-sm:gap-2">
        <h1 className='text-white text-[2rem] max-sm:text-xl'>Optimization</h1>
        <h1 className='text-gray-400 text-[1rem] max-sm:text-sm'>We refine campaigns in real-time, ensuring maximum performance and engagement.</h1>
        <h1 className='text-white text-[2rem] max-sm:text-xl'> 03</h1>
      </div>
      <div className="bg-[#0e0e0f] w-full  flex justify-between px-10 py-5 items-center max-sm:items-start max-sm:flex-col-reverse max-sm:gap-2">
        <h1 className='text-white text-[2rem] max-sm:text-xl'>Growth</h1>
        <h1 className='text-gray-400 text-[1rem] max-sm:text-sm'>With data-driven insights, we scale your success and drive long-term impact.</h1>
        <h1 className='text-white text-[2rem] max-sm:text-xl'> 04</h1>
      </div>
    </div>
  )
}
