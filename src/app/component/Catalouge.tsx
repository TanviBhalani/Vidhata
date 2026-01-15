// "use clients"

// import React, { useRef } from 'react'
// import { motion, useInView } from "framer-motion";


// export default function Catalogue() {
//   return (
//     <>
//         {/* CATALOGUE SECTION NOW LAST  */}
//       <div className=" bg-black relative overflow-hidden">

//         {/* Observer Reference */}
//         {(() => {
//           const ref = useRef(null);
//           const isInView = useInView(ref, { once: false, margin: "-20% 0px" });

//           return (
//             <div ref={ref} className="relative flex flex-col items-center justify-center h-full select-none">

//               {/* FIXED SLANTED BACKGROUND */}
//               <img
//                 src="/images/cataloge.png"
//                 className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 
//                 w-[450px] h-[650px] rounded-xl rotate-150 opacity-60"
//                 alt=""
//               />

//               {/* 2025 */}
//               <motion.h1
//                 initial={{ rotate: -108, y: 280, opacity: 0 }}
//                 animate={
//                   isInView
//                     ? { rotate: 0, y: 0, opacity: 1 }
//                     : { rotate: -108, y: 280, opacity: 0 }
//                 }
//                 transition={{
//                   rotate: { duration: 1.8, ease: "easeOut" },
//                   opacity: { duration: 1.8, ease: "easeOut", delay: 0.25 },
//                 }}
//                 className="text-white text-[150px] leading-none font-medium origin-left z-20 pt-30"
//               >
//                 2025
//               </motion.h1>

//               {/* GENERAL */}
//               <motion.h1
//                 initial={{ rotate: -48, y: 150, opacity: 0 }}
//                 animate={
//                   isInView
//                     ? { rotate: 0, y: 0, opacity: 1 }
//                     : { rotate: -48, y: 150, opacity: 0 }
//                 }
//                 transition={{
//                   rotate: { duration: 1.9, ease: "easeOut", delay: 0.05 },
//                   opacity: { duration: 1.9, ease: "easeOut", delay: 0.35 },
//                 }}
//                 className="text-white text-[170px] leading-none font-medium origin-left z-20"
//               >
//                 GENERAL
//               </motion.h1>

//               {/* CATALOGUE */}
//               <motion.h1
//                 initial={{ rotate: -80, y: 180, opacity: 0 }}
//                 animate={
//                   isInView
//                     ? { rotate: 0, y: 0, opacity: 1 }
//                     : { rotate: -80, y: 180, opacity: 0 }
//                 }
//                 transition={{
//                   rotate: { duration: 1.5, ease: "easeOut", delay: 0.1 },
//                   opacity: { duration: 1.5, ease: "easeOut", delay: 0.4 },
//                 }}
//                 className="text-white text-[170px] leading-none font-medium origin-left z-20"
//               >
//                 CATALOGUE
//               </motion.h1>

//               {/* DOWNLOAD BUTTON */}
//               <button className="mt-30">
//             <a
//               href="/pdfs/OTHER.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-12 bg-[#333] text-white z-20 px-12 py-3 rounded-sm text-lg hover:bg-[#db5356] cursor-pointer transition-all"
//             >
//               DOWNLOAD
//             </a>
//           </button>

//               {/* HELP LINK */}
//               <p className="mt-16 text-sm text-gray-400 z-20 pb-50">
//                 NEED MORE HELP?{" "}
//                 <a href="#" className="text-red-500 hover:underline">CONTACT US</a>
//               </p>
//             </div>
//           );
//         })()}
//       </div>

//     </>
//   )
// }



"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Catalogue() {
  return (
    <>
      <div className="bg-black relative overflow-hidden min-h-screen flex items-center justify-center">

        {(() => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, margin: "-20% 0px" });

          return (
            <div ref={ref} className="relative flex flex-col items-center justify-center h-full select-none px-4">

              {/* BACKGROUND IMAGE */}
              <img
                src="/images/cataloge.png"
                className="
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[220px] h-80
                  sm:w-[300px] sm:h-[420px]
                  md:w-[450px] md:h-[650px]
                  rounded-xl rotate-150 opacity-60
                "
                alt=""
              />

              {/* 2025 */}
              <motion.h1
                initial={{ rotate: -108, y: 280, opacity: 0 }}
                animate={
                  isInView
                    ? { rotate: 0, y: 0, opacity: 1 }
                    : { rotate: -108, y: 280, opacity: 0 }
                }
                transition={{
                  rotate: { duration: 1.8, ease: "easeOut" },
                  opacity: { duration: 1.8, ease: "easeOut", delay: 0.25 },
                }}
                className="
                  text-white font-medium origin-left z-20
                  text-[60px]
                  sm:text-[90px]
                  md:text-[150px]
                "
              >
                2025
              </motion.h1>

              {/* GENERAL */}
              <motion.h1
                initial={{ rotate: -48, y: 150, opacity: 0 }}
                animate={
                  isInView
                    ? { rotate: 0, y: 0, opacity: 1 }
                    : { rotate: -48, y: 150, opacity: 0 }
                }
                transition={{
                  rotate: { duration: 1.9, ease: "easeOut", delay: 0.05 },
                  opacity: { duration: 1.9, ease: "easeOut", delay: 0.35 },
                }}
                className="
                  text-white font-medium origin-left z-20
                  text-[60px]
                  sm:text-[100px]
                  md:text-[170px]
                "
              >
                GENERAL
              </motion.h1>

              {/* CATALOGUE */}
              <motion.h1
                initial={{ rotate: -80, y: 180, opacity: 0 }}
                animate={
                  isInView
                    ? { rotate: 0, y: 0, opacity: 1 }
                    : { rotate: -80, y: 180, opacity: 0 }
                }
                transition={{
                  rotate: { duration: 1.5, ease: "easeOut", delay: 0.1 },
                  opacity: { duration: 1.5, ease: "easeOut", delay: 0.4 },
                }}
                className="
                  text-white font-medium origin-left z-20
                  text-[60px]
                  sm:text-[100px]
                  md:text-[170px]
                "
              >
                CATALOGUE
              </motion.h1>

              {/* DOWNLOAD BUTTON */}
              <button className="mt-10 sm:mt-16 md:mt-24 z-20">
                <a
                  href="/pdfs/OTHER.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-[#333] text-white
                    px-8 py-3
                    sm:px-12
                    rounded-sm text-sm sm:text-lg
                    hover:bg-[#db5356]
                    transition-all
                  "
                >
                  DOWNLOAD
                </a>
              </button>

              {/* HELP */}
              <p className="mt-8 sm:mt-14 text-xs sm:text-sm text-gray-400 z-20 pb-20">
                NEED MORE HELP?{" "}
                <a href="#" className="text-red-500 hover:underline">
                  CONTACT US
                </a>
              </p>

            </div>
          );
        })()}
      </div>
    </>
  );
}
