// import React from 'react'

// export default function Trusted() {
//   return (
//     <div className='bg-black w-full'>
//       <h1 className='text-lg text-gray-400 text-center pt-50 pb-15   '>Trusted by</h1>
//       <div className="slider flex justify-between">
//         <img src="/images/logo1.png" className='w-50 h-15' alt="" />
//         <img src="/images/logo5.png" className='w-50 h-15' alt="" />
//         <img src="/images/logo7.webp" className='w-50 h-15' alt="" />
//         <img src="/images/logo1.png" className='w-50 h-15' alt="" />
//         <img src="/images/logo5.png" className='w-50 h-15' alt="" />
//         <img src="/images/logo7.webp" className='w-50 h-15' alt="" />
        
//       </div>
//     </div>
//   )
// }


import React from "react";

export default function Trusted() {
  return (
    <div className="bg-black w-full overflow-hidden pb-10 border-t border-gray-500">
      <h1 className="text-lg text-gray-400 text-center pt-20 max-sm:pt-20 pb-10">
        Trusted by
      </h1>

      {/* Slider container */}
      <div className="slider flex items-center whitespace-nowrap">
        <div className="slide-track flex animate-scroll gap-20 max-sm:gap-10">
          {/* Repeat your logos enough times to fill and loop seamlessly */}
          {Array.from({ length: 10 }).map((_, i) => (
            <React.Fragment key={i}>
              <img src="/images/logo1.png" className="w-50 h-15 max-sm:w-30 object-contain" alt="logo1" />
              <img src="/images/logo5.png" className="w-50 h-15 max-sm:w-30 object-contain" alt="logo5" />
              <img src="/images/logo7.webp" className="w-50 h-15 max-sm:w-30 object-contain" alt="logo7" />
            </React.Fragment>
          ))}
        </div>
      </div>
        {/* <p className="text-white text-3xl px-90 py-20 leading-12 text-center  font-medium max-sm:text-xl max-sm:px-15 max-sm:leading-8">The range of Vidhata level switches make it possible to read and control the level of fluids in systems at any time, by means of an electrical signal. There are various types of level sensors such as electromagnetic levels with fixed or adjustable lengths.</p> */}
    </div>
  );
}

