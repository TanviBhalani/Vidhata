// import React from 'react'

// export default function Download() {
//   return (
//     <div>
//       <div className='bg-black w-full py-10'>
//         <div className="flex justify-between px-5 max-sm:flex-col max-sm:items-center max-sm:text-center">
//           <h1 className="text-5xl tracking-widest text-white flex items-center px-5 max-sm:text-3xl max-sm:px-0">
//             Download
//           </h1>
//           <p className="text-xl text-white w-125 max-sm:w-[90%] max-sm:text-sm max-sm:mt-4">
//             CLICK HERE TO CHECK AND DOWNLOAD OUR FULL RANGE OF PRODUCTS
//           </p>
//         </div>
//         <img src="/images/full.jpeg" className='px-10 py-5 transform translate-x-0 translate-y-0 scale-100 rotate-0 skew-x-0 skew-y-0 transform-style-3d' alt="" />
//       </div>
//     </div>
//   )
// }



"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Download() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Detect scroll progress relative to section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"], // starts earlier, ends later → slower animation
  });

  // Slow zoom-out to zoom-in
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  return (
    <div ref={ref}>
      <div className="bg-black w-full py-10">
        {/* Text Section */}
        <div className="flex justify-between px-5 max-sm:flex-col max-sm:items-center max-sm:text-center">
          <h1 className="text-5xl tracking-widest text-white flex items-center px-5 max-sm:text-3xl max-sm:px-0">
            Download
          </h1>
          <p className="text-xl text-white w-125 max-sm:w-[90%] max-sm:text-sm max-sm:mt-4">
            CLICK HERE TO CHECK AND DOWNLOAD OUR FULL RANGE OF PRODUCTS
          </p>
        </div>

        {/* Animated Image */}
        <div className="flex justify-center">
          <motion.img
            src="/images/full.jpeg"
            alt="Full Product"
            style={{ scale, opacity }}
            transition={{
              duration: 2.5, // slow, smooth motion
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="px-10 py-15 rounded-2xl shadow-2xl transform-style-3d w-[90%] max-sm:w-[94%]"
          />
        </div>
      </div>
    </div>
  );
}
