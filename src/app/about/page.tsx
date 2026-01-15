
// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import Navbar from '../component/Navbar';
// import { motion, useScroll, useTransform } from "framer-motion";

// const timelineData = [
//   {
//     year: 2010,
//     title: 'One Truck.\nOne Dream.',
//     description:
//       "LogiNord was founded in a small Rotterdam warehouse with just one vehicle and a clear mission: to offer reliable transport for local businesses with the kind of service larger firms couldn't match.",
//     image: '/images/ab1.jpg',
//   },
//   {
//     year: 2013,
//     title: 'Growing Beyond Borders.',
//     description:
//       'After earning the trust of local partners, we expanded to cover all of the Benelux region. Our early success was driven by flexibility, transparent pricing, and on-time delivery.',
//     image: '/images/ab2.webp',
//   },
//   {
//     year: 2017,
//     title: 'Hello, North America and US.',
//     description:
//       'With an increasing number of international clients, we opened our first overseas branch in Houston, TX — strategically connecting European and US logistics operations under one roof.',
//     image: '/images/ab3.jpg',
//   },
//   {
//     year: 2021,
//     title: 'Smart Logistics, Greener Moves.',
//     description:
//       'We invested in smart fleet management, route optimization, and sustainable transport — including refrigerated and low-emissions vehicles — reducing delivery time and carbon impact.',
//     image: '/images/ab4.jpg',
//   },
//   {
//     year: 2025,
//     title: 'You Can Trust Vidhata Company',
//     description:
//       'Now serving hundreds of clients across multiple industries, Loginord remains independent, agile, and focused on delivering real results. Our next chapter? Scaling up without losing our personal touch.',
//     image: '/images/ab5.webp',
//   },
// ];

// export default function Page() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   // const sectionRef = useRef(null);
//   const sectionRef = useRef<HTMLElement | null>(null); 

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const section = sectionRef.current;
//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const progress = Math.min(
//         Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
//         1
//       );

//       const index = Math.floor(progress * timelineData.length);
//       setActiveIndex(Math.max(0, Math.min(index, timelineData.length - 1)));
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div className='bg-[#171717] w-full mt-14'>
//         <div className="flex justify-between items-center p-10">
//           <h1 className='text-white text-5xl'>Driven by Purpose.</h1>

//           <div className="flex cursor-pointer">
//             <div className="w-5 h-5 bg-[#e85154] m-1 rounded-full">
//               <div className="w-3 h-3 bg-[#171717] m-1 rounded-full"></div>
//             </div>
//             <p className='text-[#e85154] text-xl'>About Us</p>
//           </div>
//         </div>

//         <video
//           src="/images/video2.mp4"
//           className='w-[95%] object-cover h-120 mx-[3%] rounded-2xl mb-12'
//           autoPlay
//           muted
//           loop
//         ></video>

//         <div className="p-10 pb-20 bg-black">
//           <h1 className='text-white text-6xl'>Our History</h1>
//         </div>
//       </div>

//       {/* TIMELINE SECTION */}
//       <div ref={sectionRef} className="relative min-h-[600vh] bg-black text-white">
//         <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//           <div className="w-full px-8 md:px-16 lg:px-24">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

//               {/* LEFT SIDE */}
//               <div className="space-y-10">
//                 <div className="flex items-center gap-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-3 h-3 rounded-full border-2 border-[#e85154]" />
//                     <span className="text-sm font-semibold tracking-wider text-gray-400">YEAR</span>
//                   </div>
//                   <div className="flex-1 h-1 bg-gray-600" />
//                   <div className="text-6xl md:text-7xl font-bold text-[#e85154]">
//                     {timelineData[activeIndex].year}
//                   </div>
//                 </div>

//                 <div className="space-y-6 pl-7">
//                   {timelineData.map((item, index) => (
//                     <div
//                       key={item.year}
//                       className={`text-6xl md:text-7xl font-bold transition-all duration-700 ease-in-out ${index === activeIndex
//                         ? 'text-[#e85154] opacity-100 scale-100'
//                         : 'text-gray-600 opacity-50 scale-95'
//                         }`}
//                     >
//                       {item.year}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* RIGHT SIDE */}
//               <div className="lg:pl-16 space-y-8 transition-all duration-700 ease-out">
//                 <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white whitespace-pre-line leading-tight">
//                   {timelineData[activeIndex].title}
//                 </h2>
//                 <p className="text-lg md:text-lg text-gray-400 leading-relaxed mb-8">
//                   {timelineData[activeIndex].description}
//                 </p>
//                 <div className="relative w-full h-64 md:h-80 lg:h-86 bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg border border-gray-800">
//                   <img
//                     src={timelineData[activeIndex].image}
//                     alt={timelineData[activeIndex].title}
//                     className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out"
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MISSION, VISION, VALUES SECTION */}
//       <div className="bg-[#171717] px-10 py-24 text-lg text-gray-400 overflow-hidden">
//         <div className="flex flex-col lg:flex-row">
//           <div className="lg:w-1/3 sticky top-20 self-start p-6">
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-[#e85154] text-lg mb-4"
//             >
//               Our Mission, Vision & Values
//             </motion.p>
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="text-white text-5xl font-bold leading-tight"
//             >
//               What Drives Us
//             </motion.h1>
//           </div>

//           <div className="lg:w-2/3 h-[500px] overflow-y-scroll ml-0 lg:ml-20 pr-6 custom-scroll">
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="flex items-start gap-6 mb-16"
//             >
//               <img src="/images/arrow.svg" alt="arrow" className="w-10 h-10 mt-2" />
//               <div>
//                 <p className="text-[#e85154] text-2xl font-semibold mb-3">Mission</p>
//                 <p className="text-gray-300 text-xl leading-relaxed">
//                   To deliver seamless, efficient, and honest logistics solutions for growing businesses.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="flex items-start gap-6 mb-16"
//             >
//               <img src="/images/arrow.svg" alt="arrow" className="w-10 h-10 mt-2" />
//               <div>
//                 <p className="text-[#e85154] text-2xl font-semibold mb-3">Vision</p>
//                 <p className="text-gray-300 text-xl leading-relaxed">
//                   To redefine logistics with technology, sustainability, and trust-driven relationships.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="flex items-start gap-6 mb-16"
//             >
//               <img src="/images/arrow.svg" alt="arrow" className="w-10 h-10 mt-2" />
//               <div>
//                 <p className="text-[#e85154] text-2xl font-semibold mb-3">Values</p>
//                 <p className="text-gray-300 text-xl leading-relaxed">
//                   Integrity, commitment, and innovation form the core of every journey we make.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         <style jsx>{`
//           .custom-scroll::-webkit-scrollbar {
//             width: 0;
//             height: 0;
//           }
//           .custom-scroll {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//             scroll-behavior: smooth;
//           }
//         `}</style>
//       </div>

//       {/* 🌍 YODEZEEN SCROLL EFFECT SECTION */}
//       <YodezeenScrollEffect />

//       {/* 👥 TEAM SECTION */}
//       <TeamScrollSection />
//     </>
//   );
// }

// /* --- Scroll Effect Section --- */
// function YodezeenScrollEffect() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const imageX = useTransform(scrollYProgress, [0, 0.6], ["-100%", "0%"]);
//   const imageScale = useTransform(scrollYProgress, [0.4, 1], [1, 1.1]);
//   const imageWidth = useTransform(scrollYProgress, [0, 1], ["-90%", "225%"]);
//   const textY = useTransform(scrollYProgress, [0.3, 0.8], ["250%", "10%"]);

//   return (
//     <section
//       ref={ref}
//       className="relative h-[140vh] bg-[#ebe5df] overflow-hidden flex items-center justify-center"
//     >
//       <div className="absolute inset-0 bg-[#ebe5df] z-0"></div>

//       <motion.div
//         style={{
//           x: imageX,
//           scale: imageScale,
//           width: imageWidth,
//         }}
//         className="absolute top-0 left-0 h-full z-10 overflow-hidden"
//       >
//         <img
//           src="/images/map.svg"
//           alt="Yodezeen Studio"
//           className="w-full h-full"
//         />
//       </motion.div>

//       <motion.div
//         style={{
//           y: textY,
//         }}
//         className="absolute right-100 top-0 w-[38%] h-80 rounded-xl bg-white flex flex-col justify-center px-10 md:px-10 z-20 text-gray-800"
//       >
//         <div className="flex">
//           <img src="/images/ab5.webp" className="w-40 h-25 rounded-xl" alt="" />
//           <div className="ml-5">
//             <h2 className="text-lg md:text-2xl font-semibold mb-2 leading-tight">
//               Rotterdam, Netherlands
//             </h2>
//             <h2 className="text-lg md:text-xl mb-6 leading-tight">
//               European Headquarters & Warehouse
//             </h2>
//           </div>
//         </div>

//         <p className="text-lg md:text-lg mt-5 leading-relaxed mb-2">
//           Located in the heart of Europe’s logistics corridor, our Rotterdam HQ oversees ground freight, regional distribution, and B2B partnerships across France, Germany, Benelux, and Spain.
//         </p>
//       </motion.div>
//     </section>
//   );
// }

// /* --- Team Scroll Section --- */
// function TeamScrollSection() {
//   const { useScroll, useTransform, motion } = require("framer-motion");
//   const { useRef } = require("react");

//   const team = [
//     {
//       name: "Anders Smithson",
//       title: "Founder & CEO",
//       img: "/images/p1.webp",
//     },
//     {
//       name: "Sophie Van Dijk",
//       title: "Commercial Director",
//       img: "/images/p2.avif",
//     },
//     {
//       name: "Michael Reyes",
//       title: "Head of Operations",
//       img: "/images/p3.avif",
//     },
//     {
//       name: "Claire Fontaine",
//       title: "Quality & Compliance Lead",
//       img: "/images/p4.avif",
//     },
//   ];

//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

//   return (
//     <section
//       ref={ref}
//       className="min-h-[200vh] bg-black flex items-center justify-center text-white"
//     >
//       <div className="flex w-[90%] mx-auto gap-16">
//         {/* LEFT SIDE - Sticky Text */}
//         <div className="sticky top-32 h-fit w-1/3">
//           <p className="text-lg uppercase tracking-wider text-gray-400 mb-3">
//             The Team
//           </p>
//           <h2 className="text-5xl font-semibold leading-tight mb-4">
//             People You <br /> Can Rely On.
//           </h2>
//           <p className="text-gray-400 text-lg leading-relaxed">
//             Our strength lies in our people — from dispatch operators to
//             cross-border drivers. Meet the management team behind every
//             successful delivery.
//           </p>
//         </div>

//         {/* RIGHT SIDE - Grid of 2x2 Cards */}
//         <motion.div style={{ y }} className="grid grid-cols-2 gap-10 w-2/3">
//           {team.map((member, index) => (
//             <div key={index} className="flex flex-col items-start">
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="rounded-2xl w-full h-[260px] object-cover shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500"
//               />
//               <h3 className="font-medium text-xl text-white mt-4">
//                 {member.name}
//               </h3>
//               <p className="text-lg text-gray-300">{member.title}</p>
//               <a
//                 href="#"
//                 className="text-sm text-gray-400 mt-2 inline-block hover:text-white transition"
//               >
//                 LinkedIn ↗
//               </a>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




'use client';

import { useEffect, useState, useRef } from 'react';
import Navbar from '../component/Navbar';
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from '../component/Footer';

/* --- Timeline Data --- */
const timelineData = [
  {
    year: 2010,
    title: 'One Truck.\nOne Dream.',
    description:
      "LogiNord was founded in a small Rotterdam warehouse with just one vehicle and a clear mission: to offer reliable transport for local businesses with the kind of service larger firms couldn't match.",
    image: '/images/ab1.jpg',
  },
  {
    year: 2013,
    title: 'Growing Beyond Borders.',
    description:
      'After earning the trust of local partners, we expanded to cover all of the Benelux region. Our early success was driven by flexibility, transparent pricing, and on-time delivery.',
    image: '/images/ab2.webp',
  },
  {
    year: 2017,
    title: 'Hello, North America and US.',
    description:
      'With an increasing number of international clients, we opened our first overseas branch in Houston, TX — strategically connecting European and US logistics operations under one roof.',
    image: '/images/ab3.jpg',
  },
  {
    year: 2021,
    title: 'Smart Logistics, Greener Moves.',
    description:
      'We invested in smart fleet management, route optimization, and sustainable transport — including refrigerated and low-emissions vehicles — reducing delivery time and carbon impact.',
    image: '/images/ab4.jpg',
  },
  {
    year: 2025,
    title: 'You Can Trust Vidhata Company',
    description:
      'Now serving hundreds of clients across multiple industries, Loginord remains independent, agile, and focused on delivering real results. Our next chapter? Scaling up without losing our personal touch.',
    image: '/images/ab5.webp',
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null); // ✅ Correct ref typing

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );

      const index = Math.floor(progress * timelineData.length);
      setActiveIndex(Math.max(0, Math.min(index, timelineData.length - 1)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
  
<div className="bg-[#171717] w-full mt-14">

  <div className="flex flex-col md:flex-row md:justify-between md:items-center p-6 md:p-10 gap-6">
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl">
      Driven by Purpose.
    </h1>

    <div className="flex cursor-pointer items-center">
      <div className="w-5 h-5 bg-[#e85154] m-1 rounded-full">
        <div className="w-3 h-3 bg-[#171717] m-1 rounded-full"></div>
      </div>
      <p className="text-[#e85154] text-base sm:text-lg md:text-xl">
        About Us
      </p>
    </div>
  </div>

  <video
    src="/images/video2.mp4"
    className="w-[95%] object-cover h-60 sm:h-80 md:h-120 mx-[3%] rounded-xl md:rounded-2xl mb-12"
    autoPlay
    muted
    loop
  ></video>

  <div className="p-6 md:p-10 pb-12 md:pb-20 bg-black">
    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl">
      Our History
    </h1>
  </div>

</div>


      {/* Timeline Section */}

      <div
  ref={sectionRef}
  className="relative min-h-[320vh] md:min-h-[600vh] bg-black text-white"
>
  <div className="sticky top-0 h-screen flex items-center overflow-hidden">
    <div className="w-full px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-32 items-center">

        {/* LEFT — YEARS */}
        <div className="space-y-6 md:space-y-10">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-3 h-3 rounded-full border-2 border-[#e85154]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-400">
                YEAR
              </span>
            </div>
            <div className="flex-1 h-px md:h-1 bg-gray-600" />
            <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#e85154]">
              {timelineData[activeIndex].year}
            </div>
          </div>

         <div className="flex md:block gap-6 md:gap-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0 ">

            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`shrink-0 md:shrink 
                  text-xl sm:text-3xl md:text-7xl mb-5 font-bold transition-all duration-700
                  ${
                    index === activeIndex
                      ? "text-[#e85154] scale-110"
                      : "text-gray-600 opacity-50"
                  }
                `}
              >
                {item.year}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="space-y-5 md:space-y-8 lg:pl-16 transition-all duration-700 ease-out">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white whitespace-pre-line leading-tight">
            {timelineData[activeIndex].title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            {timelineData[activeIndex].description}
          </p>

          <div className="relative w-full h-[200px] sm:h-64 md:h-80 lg:h-86 bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg border border-gray-800">
            <img
              src={timelineData[activeIndex].image}
              alt={timelineData[activeIndex].title}
              className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


      {/* Mission Section */}
      <MissionVisionSection />

      {/* Scroll Animation Section */}
      <YodezeenScrollEffect />

      {/* Team Section */}
      <TeamScrollSection />

      <Footer/>
    </>
  );
}

/* --- Mission, Vision, Values Section --- */
function MissionVisionSection() {
  return (

    <div className="bg-[#171717] px-6 md:px-10 py-16 md:py-24 text-base md:text-lg text-gray-400 overflow-hidden">
  <div className="flex flex-col lg:flex-row">

    {/* LEFT */}
    <div className="lg:w-1/3 lg:sticky lg:top-20 self-start p-4 md:p-6 mb-12 lg:mb-0">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[#e85154] text-sm md:text-lg mb-4"
      >
        Our Mission, Vision & Values
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
      >
        What Drives Us
      </motion.h1>
    </div>

    {/* RIGHT */}
    <div className="lg:w-2/3 md:h-[500px] md:overflow-y-scroll ml-0 lg:ml-20 pr-0 md:pr-6 custom-scroll">
      {[
        {
          title: "Mission",
          text: "To deliver seamless, efficient, and honest logistics solutions for growing businesses.",
        },
        {
          title: "Vision",
          text: "To redefine logistics with technology, sustainability, and trust-driven relationships.",
        },
        {
          title: "Values",
          text: "Integrity, commitment, and innovation form the core of every journey we make.",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="flex items-start gap-4 md:gap-6 mb-10 md:mb-16"
        >
          <img src="/images/arrow.svg" alt="arrow" className="w-8 h-8 md:w-10 md:h-10 mt-1 md:mt-2" />
          <div>
            <p className="text-[#e85154] text-lg md:text-2xl font-semibold mb-2 md:mb-3">
              {item.title}
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-xl leading-relaxed">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

  </div>

  <style jsx>{`
    .custom-scroll::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    .custom-scroll {
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-behavior: smooth;
    }
  `}</style>
</div>

  );
}

/* --- Scroll Effect Section --- */
function YodezeenScrollEffect() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 0.6], ["-100%", "0%"]);
  const imageScale = useTransform(scrollYProgress, [0.4, 1], [1, 1.1]);
  const imageWidth = useTransform(scrollYProgress, [0, 1], ["-90%", "225%"]);
  const textY = useTransform(scrollYProgress, [0.3, 0.8], ["250%", "10%"]);

  return (
    <section ref={ref} className="relative h-[140vh] bg-[#ebe5df] overflow-hidden flex items-center justify-center max-sm:hidden">
      <motion.div
        style={{ x: imageX, scale: imageScale, width: imageWidth }}
        className="absolute top-0 left-0 h-full z-10 overflow-hidden"
      >
        <img src="/images/map.svg" alt="map" className="w-full h-full" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="absolute right-100 top-0 w-[38%] h-80 rounded-xl bg-white flex flex-col justify-center px-10 md:px-10 z-20 text-gray-800"
      >
        <div className="flex">
          <img src="/images/ab5.webp" className="w-40 h-25 rounded-xl" alt="" />
          <div className="ml-5">
            <h2 className="text-lg md:text-2xl font-semibold mb-2 leading-tight">
              Rotterdam, Netherlands
            </h2>
            <h2 className="text-lg md:text-xl mb-6 leading-tight">
              European Headquarters & Warehouse
            </h2>
          </div>
        </div>

        <p className="text-lg md:text-lg mt-5 leading-relaxed mb-2">
          Located in the heart of Europe’s logistics corridor, our Rotterdam HQ oversees ground freight,
          regional distribution, and B2B partnerships across France, Germany, Benelux, and Spain.
        </p>
      </motion.div>
    </section>
  );
}

/* --- Team Scroll Section --- */
function TeamScrollSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const team = [
    {
      name: "Anders Smithson",
      title: "Founder & CEO",
      img: "/images/p1.webp",
    },
    {
      name: "Sophie Van Dijk",
      title: "Commercial Director",
      img: "/images/p2.avif",
    },
    {
      name: "Michael Reyes",
      title: "Head of Operations",
      img: "/images/p3.avif",
    },
    {
      name: "Claire Fontaine",
      title: "Quality & Compliance Lead",
      img: "/images/p4.avif",
    },
  ];

  return (
    // <section ref={ref} className="min-h-[200vh] bg-black flex items-center justify-center text-white">
    //   <div className="flex w-[90%] mx-auto gap-16">
    //     <div className="sticky top-32 h-fit w-1/3">
    //       <p className="text-lg uppercase tracking-wider text-gray-400 mb-3">
    //         The Team
    //       </p>
    //       <h2 className="text-5xl font-semibold leading-tight mb-4">
    //         People You <br /> Can Rely On.
    //       </h2>
    //       <p className="text-gray-400 text-lg leading-relaxed">
    //         Our strength lies in our people — from dispatch operators to cross-border drivers. Meet the
    //         management team behind every successful delivery.
    //       </p>
    //     </div>

    //     <motion.div style={{ y }} className="grid grid-cols-2 gap-10 w-2/3">
    //       {team.map((member, index) => (
    //         <div key={index} className="flex flex-col items-start">
    //           <img
    //             src={member.img}
    //             alt={member.name}
    //             className="rounded-2xl w-full h-[260px] object-cover shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500"
    //           />
    //           <h3 className="font-medium text-xl text-white mt-4">
    //             {member.name}
    //           </h3>
    //           <p className="text-lg text-gray-300">{member.title}</p>
    //           <a
    //             href="#"
    //             className="text-sm text-gray-400 mt-2 inline-block hover:text-white transition"
    //           >
    //             LinkedIn ↗
    //           </a>
    //         </div>
    //       ))}
    //     </motion.div>
    //   </div>
    // </section>
    <section
  ref={ref}
  className="min-h-[200vh] bg-black flex items-start md:items-center justify-center text-white px-4 md:px-0 max-sm:pb-10"
>
  <div className="flex flex-col md:flex-row w-full md:w-[90%] mx-auto gap-10 md:gap-16">

    {/* LEFT — STICKY TEXT */}
    <div className="relative md:sticky top-6 md:top-32 h-fit w-full md:w-1/3 text-center md:text-left">
      <p className="text-sm md:text-lg uppercase tracking-wider text-gray-400 mb-3">
        The Team
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
        People You <br className="hidden md:block" /> Can Rely On.
      </h2>

      <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
        Our strength lies in our people — from dispatch operators to cross-border drivers. Meet the
        management team behind every successful delivery.
      </p>
    </div>

    {/* RIGHT — TEAM GRID */}
    <motion.div
      style={{ y }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full md:w-2/3"
    >
      {team.map((member, index) => (
        <div key={index} className="flex flex-col items-start text-center sm:text-left">

          <img
            src={member.img}
            alt={member.name}
            className="rounded-2xl w-full h-[220px] sm:h-[260px] object-cover shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500"
          />

          <h3 className="font-medium text-lg md:text-xl text-white mt-4">
            {member.name}
          </h3>

          <p className="text-base md:text-lg text-gray-300">
            {member.title}
          </p>

          <a
            href="#"
            className="text-sm text-gray-400 mt-2 inline-block hover:text-white transition"
          >
            LinkedIn ↗
          </a>

        </div>
      ))}
    </motion.div>

  </div>
</section>


  );
}
