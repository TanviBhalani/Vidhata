// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Products() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const cards = [
//     { id: 1, title: "PRESSURE SWITCHES", image: "/images/pic1.jpeg", color: "bg-gray-300" },
//     { id: 2, title: "VACUUM SWITCHES", image: "/images/pic1.jpeg", color: "bg-gray-400" },
//     { id: 3, title: "DIFFERENTIAL SWITCHES", image: "/images/pic1.jpeg", color: "bg-gray-500" },
//     { id: 4, title: "HYDRAULIC SWITCHES", image: "/images/pic1.jpeg", color: "bg-gray-600" },
//     { id: 5, title: "ELECTROMECHANICAL SWITCHES", image: "/images/pic1.jpeg", color: "bg-gray-700" },
//   ];

//   return (
//     <div className="w-full bg-black py-15">
//       {/* --- Header Section --- */}
//       <div className="flex justify-between px-5">
//         <h1 className="text-5xl tracking-widest text-white flex items-center px-5">Products</h1>
//         <p className="text-xl text-white w-125">
//           OUR MISSION IS TO FIND CUSTOMIZED SOLUTIONS FOR THE MOST DEMANDING CUSTOMERS, DEVELOPING
//           INNOVATIVE IDEAS AND PAYING PARTICULAR ATTENTION TO THE ENVIRONMENTAL IMPACTS OF
//           INDUSTRIAL PRODUCTION.
//         </p>
//       </div>

//       {/* --- Scroll Section --- */}
//       <div ref={containerRef} className="relative h-[700vh] bg-black mt-20">
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           {cards.map((card, index) => (
//             <StackCard
//               key={card.id}
//               index={index}
//               total={cards.length}
//               scrollYProgress={scrollYProgress}
//               {...card}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function StackCard({
//   index,
//   total,
//   scrollYProgress,
//   title,
//   image,
//   color,
// }: {
//   index: number;
//   total: number;
//   scrollYProgress: any;
//   title: string;
//   image: string;
//   color: string;
// }) {
//   const step = 1 / (total - 1);
//   const start = (index - 1) * step;
//   const mid = start + step / 2;
//   const end = index * step;

//   const y =
//     index === 0
//       ? "0%"
//       : useTransform(scrollYProgress, [start, mid, end], ["120%", "50%", "0%"]);

//   const opacity = 1;

//   const scale =
//     index === 0
//       ? 1
//       : useTransform(scrollYProgress, [start, mid, end], [0.98, 1, 1]);

//   const zIndex = 10 + index;

//   return (
//     <motion.div
//       style={{
//         y,
//         scale,
//         opacity,
//         zIndex,
//         transformOrigin: "center center",
//         transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
//       }}
//       className={`absolute w-[90%] h-[85%] ${color} rounded-3xl shadow-2xl overflow-hidden flex`}
//     >
//       {/* Left Image */}
//       <div
//         className="w-[50%] h-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${image})` }}
//       ></div>

//       {/* Right Content */}
//       <div className="w-[50%] p-10 flex flex-col justify-center">
//         <h1 className="text-4xl font-bold pb-7 text-gray-800">{title}</h1>
//         <p className="text-gray-700 leading-relaxed">
//           The range of Vibor pressure sensors is often used in industrial applications,
//           earthmoving machinery, agricultural machinery and material handling which are designed to
//           transform a pressure value into an electrical signal.
//         </p>

//         <div className="flex justify-between border-b text-lg mt-10">
//           <p className="pb-3">Pressure Switch SPST</p>
//           <p>Faston ≤ 48 V</p>
//         </div>
//         <div className="flex justify-between border-b text-lg mt-5">
//           <p className="pb-3">Fixed Setting Pressure Switch SPST</p>
//           <p>CLAMPS ≤ 48 V</p>
//         </div>
//         <div className="flex justify-between border-b text-lg mt-5">
//           <p className="pb-3">Compact Pressure Switch SPST</p>
//           <p>SDPT ≤ 250 V</p>
//         </div>

//         <div className="flex mt-10">
//           <button className="bg-gray-700 text-white px-7 py-2 rounded-lg cursor-pointer">
//             View
//           </button>
//           <p className="underline m-2 ml-4 cursor-pointer text-gray-700">Learn More</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }







"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Products() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cards = [
    { id: 1, title: "PRESSURE SWITCHES", image: "/images/pic1.jpeg", color: "bg-gray-300" },
    { id: 2, title: "VACUUM SWITCHES", image: "/images/pic2.jpeg", color: "bg-gray-400" },
    { id: 3, title: "DIFFERENTIAL SWITCHES", image: "/images/pic3.jpeg", color: "bg-gray-500" },
  ];

  return (
    <div className="w-full bg-black py-15">
      {/* --- Header Section --- */}
      <div className="flex justify-between px-5 max-sm:flex-col max-sm:items-center max-sm:text-center">
        <h1 className="text-5xl tracking-widest text-white flex items-center px-5 max-sm:text-3xl max-sm:px-0">
          Products
        </h1>
        <p className="text-xl text-white w-125 max-sm:w-[90%] max-sm:text-sm max-sm:mt-4">
          OUR MISSION IS TO FIND CUSTOMIZED SOLUTIONS FOR THE MOST DEMANDING CUSTOMERS, DEVELOPING
          INNOVATIVE IDEAS AND PAYING PARTICULAR ATTENTION TO THE ENVIRONMENTAL IMPACTS OF
          INDUSTRIAL PRODUCTION.
        </p>
      </div>

      {/* --- Scroll Section --- */}
      <div ref={containerRef} className="relative h-[700vh] bg-black mt-20 max-sm:h-[500vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {cards.map((card, index) => (
            <StackCard
              key={card.id}
              index={index}
              total={cards.length}
              scrollYProgress={scrollYProgress}
              {...card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StackCard({
  index,
  total,
  scrollYProgress,
  title,
  image,
  color,
}: {
  index: number;
  total: number;
  scrollYProgress: any;
  title: string;
  image: string;
  color: string;
}) {
  const step = 1 / (total - 1);
  const start = (index - 1) * step;
  const mid = start + step / 2;
  const end = index * step;

  const y =
    index === 0
      ? "0%"
      : useTransform(scrollYProgress, [start, mid, end], ["120%", "50%", "0%"]);

  const opacity = 1;

  // Slightly more dramatic scaling for better effect
  const scale =
    index === 0
      ? 1
      : useTransform(scrollYProgress, [start, mid, end], [0.9, 1.02, 1]);

  const zIndex = 10 + index;

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex,
        transformOrigin: "center center",
        transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className={`absolute w-[90%] h-[85%] ${color} rounded-3xl shadow-2xl overflow-hidden flex 
        max-sm:flex-col max-sm:h-[101%] max-sm:w-[80%]`}
    >
      {/* Left Image */}
      <div
        className="w-[50%] h-full bg-cover bg-center 
                   max-sm:w-full max-sm:h-[45%]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Right Content */}
      <div
        className="w-[50%] p-10 flex flex-col justify-center 
                    max-sm:w-full max-sm:p-4 max-sm:h-[45%] max-sm:justify-start"
      >
        <h1 className="text-4xl font-bold pb-7 text-gray-800 
                       max-sm:text-2xl max-sm:pb-3">
          {title}
        </h1>
        <p className="text-gray-700 leading-relaxed 
                      max-sm:text-sm max-sm:leading-snug">
          The range of Vibor pressure sensors is often used in industrial applications,
          earthmoving machinery, agricultural machinery and material handling which are designed to
          transform a pressure value into an electrical signal.
        </p>

        <div className="flex justify-between border-b text-lg mt-10 
                        max-sm:text-xs max-sm:mt-4">
          <p className="pb-3 max-sm:pb-1">Pressure Switch SPST</p>
          <p>Faston ≤ 48 V</p>
        </div>
        <div className="flex justify-between border-b text-lg mt-5 
                        max-sm:text-xs max-sm:mt-3">
          <p className="pb-3 max-sm:pb-1">Fixed Setting Pressure Switch SPST</p>
          <p>CLAMPS ≤ 48 V</p>
        </div>
        <div className="flex justify-between border-b text-lg mt-5 
                        max-sm:text-xs max-sm:mt-3">
          <p className="pb-3 max-sm:pb-1">Compact Pressure Switch SPST</p>
          <p>SDPT ≤ 250 V</p>
        </div>

        <div className="flex mt-10 max-sm:mt-4">
          <button className="bg-gray-700 text-white px-7 py-2 rounded-lg cursor-pointer 
                             max-sm:px-4 max-sm:py-1 max-sm:text-sm">
            View
          </button>
          <p className="underline m-2 ml-4 cursor-pointer text-gray-700 
                        max-sm:m-1 max-sm:ml-2 max-sm:text-xs">
            Learn More
          </p>
        </div>
      </div>
    </motion.div>
  );
}
