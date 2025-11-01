"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroAnimation() {
  const [moveToNavbar, setMoveToNavbar] = useState(false);
  const [expandVideo, setExpandVideo] = useState(false);

  useEffect(() => {
    // Always scroll to top on page load
    window.scrollTo(0, 0);

    // 🔒 Lock scroll completely (for animation)
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalPosition = document.body.style.position;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    const timer = setTimeout(() => {
      setMoveToNavbar(true);
      setExpandVideo(true);

      // 🔓 Re-enable scrolling after animation completes
      setTimeout(() => {
        document.body.style.overflow = originalStyle;
        document.body.style.position = originalPosition;
        document.body.style.width = "";
        window.scrollTo(0, 0); // keep at top
      }, 2500); // matches animation duration
    }, 3000); // start after 3s

    // cleanup
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalStyle;
      document.body.style.position = originalPosition;
      document.body.style.width = "";
    };
  }, []);

  const letters = "VIDHATA".split("");

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
      {/* ====== VIDHATA TEXT SECTION ====== */}
      <motion.div
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={{
          scale: moveToNavbar ? 0 : 1,
          x: moveToNavbar ? "-45%" : 0,
          y: moveToNavbar ? "-40%" : 0,
        }}
        transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
        className="h-[280px] flex justify-center items-center relative z-20 max-sm:h-[180px]"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ x: -200, opacity: 0, color: "#ff0000" }}
            animate={{ x: 0, opacity: 1, color: "#ffffff" }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="text-[14rem] font-bold tracking-widest max-sm:text-[4rem] max-sm:tracking-[0.3rem]"
            style={{ fontFamily: "Bruno Ace, sans-serif" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* ====== VIDEO SECTION ====== */}
      <motion.video
        src="/images/video1.mp4"
        autoPlay
        muted
        loop
        className="absolute bottom-0 w-full object-cover max-sm:h-[calc(100vh-180px)]"
        initial={{
          height: "calc(100vh - 280px)",
          y: 0,
          opacity: 1,
        }}
        animate={{
          height: expandVideo ? "100vh" : "calc(100vh - 280px)",
          y: expandVideo ? "10px" : 0,
          opacity: expandVideo ? 1 : 0.9,
        }}
        transition={{
          duration: 2.2,
          ease: [0.25, 1, 0.5, 1],
        }}
      />

      {/* ====== Soft Fade Overlay ====== */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: moveToNavbar ? 0.2 : 0 }}
        transition={{ duration: 1.2 }}
      />
    </div>
  );
}
