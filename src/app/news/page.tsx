"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, useMotionValue, useAnimationFrame, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const words = [
  "PLUS",
  "EXPERIENCE",
  "CURIOSITY",
  "INQUISITIVE",
  "EMPATHETIC",
  "CREATIVELY",
  "RATIONAL",
  "LONG-LASTING",
  "OPTIMAL",
  "ARTICULATE",
  "CONSISTENCY",
  "INTUITIVE",
];

/** letter animation (unchanged) */
const letterVariant: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: (i: number) => ({
    rotateX: 0,
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

/** button slides in from the right */
const buttonVariant: Variants = {
  hidden: { x: -90, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 1.1,
    },
  },
};

/* ---------- ZigZagWord component (fixed & complete) ---------- */
type ZigZagProps = {
  index: number;
  text: string;
};

function ZigZagWord({ index, text }: ZigZagProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "0.7 0"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -250 : 270, 0]
  );

  const y = useTransform(scrollYProgress, [0, 1], [180, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const color = useTransform(scrollYProgress, [0, 1], ["#4b4b4b", "#ffffff"]);

  return (
    <motion.div
      ref={ref}
      style={{
        top: `${index * 100}px`,
        x,
        y,
        opacity,
        color,
        position: "absolute",
        left: "20%",
        transform: "translateX(50%)",
        whiteSpace: "nowrap",
      }}
      className="text-[50px] md:text-[100px] font-bold tracking-tight"
    >
      {text}
    </motion.div>
  );
}


/* -------- Continuous Rotating Background Image (fixed size) -------- */
const RotatingBG = () => {
  const rotation = useMotionValue(0);

  // infinite smooth rotation (NOT affected by scroll)
  useAnimationFrame((t, delta) => {
    const speed = 0.03;
    rotation.set(rotation.get() + delta * speed);
  });

  return (
    <motion.img
      src="/images/rot.png"
      className="
        absolute 
        left-1/2 top-1/2 
        -translate-x-1/2 -translate-y-1/2
        opacity-20 sm:opacity-30 md:opacity-40
        pointer-events-none select-none
        w-[90%] sm:w-[80%] md:w-[70%]
      "
      style={{
        rotate: rotation,
      }}
    />
  );
};




/* ---------------- Images (your placeholder images) ---------------- */
const placeholderImages = [
  "/images/n1.webp",
  "/images/n2.webp",
  "/images/n3.jpg",
  "/images/n15.avif",
  "/images/n5.jpg",
  "/images/n6.jpg",
  "/images/n7.jpg",
  "/images/n8.jpg",
  "/images/n9.webp",
  "/images/n10.jpg",
  "/images/n11.jpg",
  "/images/n12.jpg",
  "/images/n13.jpg",
  "/images/n14.jpg",
];

/* ---------------- Data (2010 → 2024) ---------------- */
const items = [
  { name: "Hex Head Bolt", category: "Industrial", year: 2010 },
  { name: "Stainless Steel Nut", category: "Marine", year: 2011 },
  { name: "Machine Screw", category: "Machinery", year: 2012 },
  { name: "Socket Cap Screw", category: "Automotive", year: 2013 },
  { name: "Self-Tapping Screw", category: "Construction", year: 2014 },
  { name: "Wood Screw", category: "Carpentry", year: 2015 },
  { name: "Flange Nut", category: "Industrial", year: 2016 },
  { name: "Lock Washer", category: "Fastening", year: 2017 },
  { name: "Flat Washer", category: "Hardware", year: 2018 },
  { name: "Expansion Anchor", category: "Construction", year: 2019 },
  { name: "Threaded Rod", category: "Machinery", year: 2020 },
  { name: "Wing Nut", category: "Consumer", year: 2021 },
  { name: "Eye Bolt", category: "Rigging", year: 2022 },
  { name: "U-Bolt", category: "Automotive", year: 2023 },
  { name: "Heavy Duty Fastener", category: "Infrastructure", year: 2024 },
].map((it, idx) => ({
  ...it,
  image: placeholderImages[idx % placeholderImages.length],
}));

/* ---------------- Active text colors ---------------- */
const activeText = "text-white";
const inactiveText = "text-gray-500";



 







/* -------------------- Main page component -------------------- */
export default function page() {
  const word1 = "BEYOND".split("");
  const word2 = "DESIGN".split("");
  const word3 = "INTO".split("");
  const word4 = "EXPERIENCE".split("");

  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const fullVideoRef = useRef<HTMLVideoElement | null>(null);

  const [showModal, setShowModal] = useState(false);

  const openFullVideo = () => {
    setShowModal(true);
    setTimeout(() => {
      fullVideoRef.current?.play();
    }, 200);
  };

  const closeFullVideo = () => {
    setShowModal(false);
    fullVideoRef.current?.pause();
    if (fullVideoRef.current) fullVideoRef.current.currentTime = 0;
  };

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // This adds extra rotation when user scrolls
  const scrollBoost = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Continuous base rotation
  const baseRotation = useMotionValue(0);

  // Continuous infinite rotation (never resets)
  useAnimationFrame((t, delta) => {
    const speed = 0.03;
    baseRotation.set(baseRotation.get() + delta * speed);
  });

  // Combine continuous + scroll-based rotation
  const finalRotation = useTransform([baseRotation, scrollBoost], ([base, boost]: number[]) => base + boost);

  // SCROLL-BASED MOVEMENT from TOP → BOTTOM
  const moveY = useTransform(scrollYProgress, [0, 1], [-60, 400]);

  // Fade out slowly towards bottom (I kept your original mapping; change if you want 1 -> 0)
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 30]);





  const anchorsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------------- IntersectionObserver ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        let best: IntersectionObserverEntry | null = null;

        for (const entry of entries) {
          if (entry.intersectionRatio > 0.55) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        }

        if (best) {
          const target = best.target as HTMLElement;
          const index = Number(target.getAttribute("data-index"));
          if (!isNaN(index)) setActiveIndex(index);
        }
      },
      { threshold: [0.55] }
    );

    anchorsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setAnchorRef = (el: HTMLDivElement | null, i: number): void => {
    anchorsRef.current[i] = el;
  };

  return (
    <>
      <Navbar />


   <div className="bg-black h-auto md:h-90 p-4 sm:p-6 md:p-8 w-full overflow-hidden">

  {/* WORD 1 */}
  <motion.h1
    className="text-white text-[3.5rem] sm:text-[5rem] md:text-[11rem] uppercase font-bold flex -mt-2 max-sm:mt-16 md:mt-1 leading-none flex-wrap"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.5 }}
  >
    {word1.map((letter, i) => (
      <motion.span key={i} custom={i} variants={letterVariant} className="inline-block">
        {letter}
      </motion.span>
    ))}
  </motion.h1>

  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 mt- md:mt-">

    <motion.h1
      className="text-white text-[3.5rem] sm:text-[5rem] md:text-[11rem] leading-none uppercase font-bold flex flex-wrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {word2.map((letter, i) => (
        <motion.span
          key={i}
          custom={i + word1.length}
          variants={letterVariant}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>

    {/* animated button */}
    <motion.button
      variants={buttonVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      className="border-2 border-white text-white rounded-full px-5 sm:px-6 md:px-7 py-2 text-base sm:text-lg md:text-xl self-start md:self-center"
    >
      2010 - 2025
    </motion.button>

  </div>
</div>


      <div className="bg-black h-auto md:h-120 p-4 sm:p-6 md:p-8 w-full -mt-4 md:-mt-8 overflow-hidden">

  <div className="flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-0">

    <motion.button
      variants={buttonVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      className="border-2 border-white text-white rounded-full 
                 px-4 sm:px-6 md:px-10 
                 py-2 h-12 md:h-15 
                 text-xs sm:text-sm md:text-xl 
                 whitespace-nowrap self-start md:mt-30 max-sm:-mt-20"
    >
      LAST FIFTEEN YEARS OF EXPERIENCE
    </motion.button>

    <motion.h1
      className="text-white 
                 text-[3.2rem] sm:text-[6rem] md:text-[11rem] 
                 uppercase font-bold flex flex-wrap leading-[0.9] max-sm:self-end"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {word3.map((letter, i) => (
        <motion.span
          key={i}
          custom={i + word3.length}
          variants={letterVariant}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>

  </div>

  <motion.h1
    className="text-white 
               text-[3.2rem] sm:text-[6rem] md:text-[12rem] 
               leading-[0.9] uppercase font-bold flex flex-wrap 
               justify-end md:justify-end mt-4 md:mt-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.5 }}
  >
    {word4.map((letter, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariant}
        className="inline-block"
      >
        {letter}
      </motion.span>
    ))}
  </motion.h1>

</div>


      {/* BACKGROUND SECTION */}
      <div className="relative w-full h-[90vh] bg-black overflow-hidden flex justify-center items-center">
        {/* BACKGROUND VIDEO */}
        <video ref={bgVideoRef} autoPlay muted loop playsInline controls={false} className="w-full h-full object-cover pointer-events-none">
          <source src="/images/video3.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* PLAY BUTTON */}
        <div className="absolute flex justify-center items-center cursor-pointer" onClick={openFullVideo}>
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex justify-center items-center border border-white/20">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* WATCH FULL VIDEO BUTTON */}
        <button
          onClick={openFullVideo}
          className="absolute bottom-10 px-10 py-3 border border-white text-white rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition-all"
        >
          WATCH FULL VIDEO
        </button>
      </div>

      {/* ====== FULL VIDEO MODAL ====== */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center">
          <button onClick={closeFullVideo} className="absolute top-6 right-10 text-white text-3xl">
            ×
          </button>

          <video ref={fullVideoRef} controls autoPlay className="w-[90%] max-w-6xl rounded-lg">
            <source src="/images/video3.mp4" type="video/mp4" />
          </video>
        </div>
      )}


      <div
  ref={sectionRef}
  className="relative w-full h-auto md:h-300 bg-black overflow-hidden flex flex-col justify-center px-4 sm:px-6 md:px-10"
>
  {/* BACKGROUND ROTATING + MOVING PNG */}
  <motion.img
    src="/images/rot.png"
    className="absolute left-1/2 -translate-x-1/2 
               w-[80%] sm:w-[60%] md:w-[40%] 
               opacity-20 sm:opacity-30 
               pointer-events-none select-none"
    style={{
      rotate: finalRotation,
      y: moveY,
      opacity: fadeOut,
    }}
  />

  {/* TEXT + BUTTON */}
  <div className="relative z-10 w-full mt-20 md:mt-auto mb-20 md:mb-40 items-center flex flex-col text-center">
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="text-white 
                 text-lg sm:text-xl md:text-4xl lg:text-5xl 
                 font-bold leading-snug 
                 max-w-full sm:max-w-4xl md:max-w-7xl"
    >
      PLUS X CREATIVE® PIONEERED THE INTEGRATION
      OF BRAND EXPERIENCE. WE HAVE BEEN INTRODUCING
      A DESIGN SOLUTION, UNIFIES A FRAGMENTED BRAND
      ELEMENTS ACROSS VARIOUS TOUCH-POINTS.
    </motion.p>

    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 1.2 }}
      className="mt-6 px-5 sm:px-6 py-2 
                 border border-white text-white 
                 rounded-full text-xs sm:text-sm 
                 tracking-wide"
    >
      FROM 2010
    </motion.button>
  </div>
</div>



{/* Zig-zag words section (mapped correctly) */}
<div
  className="
    relative 
    min-h-[180vh] sm:min-h-[200vh] md:min-h-[210vh]
    bg-black 
    overflow-hidden 
    pl-4 sm:pl-10 md:pl-100 max-sm:min-h-[250vh] 
  "
>
  {/* 🔥 Rotating background image */}
  <RotatingBG />

  {/* Zig-zag scrolling words */}
  {words.map((word, i) => (
    <ZigZagWord key={i} index={i} text={word} />
  ))}
</div>





    <div className="w-full min-h-screen bg-black  text-gray-300 max-sm:pt-40 max-sm:-mb-100">
      
      <div className="relative w-full h-full ">
        
        <div className="pt-100" />

        <div className="max-w-375 mx-auto relative">

          <div className="sticky top-1/2 -translate-y-1/2">

            <div className="grid grid-cols-12 gap-6 items-center max-sm:grid-cols-12 max-sm:gap-1">

              <div className="col-span-3 pl-10 max-sm:pl-5">
                <h3 className="text-sm tracking-widest text-gray-400 mb-6 max-sm:text-xs">
                  PRODUCTS
                </h3>

                <div>
                  {items.map((it, i) => (
                    <div key={i} className="h-16 flex items-center">
                      <p
                        className={`text-xl transition-colors duration-300 max-sm:text-sm ${
                          i === activeIndex ? activeText : inactiveText
                        }`}
                      >
                        {it.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-6 flex justify-center">
                <div className="w-full max-w-2xl h-105 relative flex items-center justify-center max-sm:w-[90%] max-sm:h-[70%]">

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      src={items[activeIndex].image}
                      alt={items[activeIndex].name}
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.96 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="rounded-xl object-cover w-full h-full shadow-2xl"
                    />
                  </AnimatePresence>

                </div>
              </div>

              <div className="col-span-2 max-sm:hidden">
                <h3 className="text-sm tracking-widest text-gray-400 mb-6 max-sm:text-xs">
                  CATEGORY
                </h3>

                <div>
                  {items.map((it, i) => (
                    <div key={i} className="h-16 flex items-center">
                      <p
                        className={`text-lg transition-colors duration-300 max-sm:text-xs ${
                          i === activeIndex ? activeText : inactiveText
                        }`}
                      >
                        {it.category}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-1 max-sm:ml-10">
                <h3 className="text-sm tracking-widest text-gray-400 mb-6 max-sm:text-xs">
                  YEAR
                </h3>

                <div>
                  {items.map((it, i) => (
                    <div key={i} className="h-16 flex items-center ">
                      <p
                        className={`text-lg transition-colors duration-300 max-sm:text-sm ${
                          i === activeIndex ? activeText : inactiveText
                        }`}
                      >
                        {it.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="mt-20" style={{ minHeight: "250vh" }}>
            <div className="h-[20vh]" />

            {items.map((_, i) => (
              <div
                key={i}
                data-index={i}
                ref={(el) => setAnchorRef(el, i)}
                style={{ height: "50vh" }}
              />
            ))}

            <div className="h-[40vh]" />
          </div>

        </div>
      </div>
    </div>

    <Footer/>


    </>
  );
}


