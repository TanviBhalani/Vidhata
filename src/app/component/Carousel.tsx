"use client";
import { div } from "framer-motion/client";
import React, { useState, useEffect, useRef } from "react";

export default function Carousel() {
  const slides = [
    { id: 1, img: "/images/e1.jpg" },
    { id: 2, img: "/images/e2.webp" },
    { id: 3, img: "/images/e3.jpg" },
    { id: 4, img: "/images/e4.webp" },
    { id: 5, img: "/images/e5.jpg" },
    { id: 6, img: "/images/e6.jpg" },
    { id: 7, img: "/images/e7.jpg" },
  ];

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(4); // number of visible cards
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Determine visible count by viewport width (responsive)
  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      // matches typical Tailwind breakpoints:
      // <768 -> 1, >=768 -> 2, >=1024 -> 3, >=1280 -> 4
      if (w >= 1280) setVisible(4);
      else if (w >= 1024) setVisible(3);
      else if (w >= 768) setVisible(2);
      else setVisible(1);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // keep current within valid range when visible changes
  useEffect(() => {
    const maxIndex = Math.max(0, slides.length - visible);
    if (current > maxIndex) setCurrent(maxIndex);
  }, [visible, slides.length, current]);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const maxIndex = Math.max(0, slides.length - visible);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length, visible]);

  const maxIndex = Math.max(0, slides.length - visible);
  const slideWidthPercent = 100 / visible; // each slide width as percent

  return (
    <div className="bg-black w-full">
      {/* <div className="flex justify-between px-5 max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:pt-10">
        <h1 className="text-5xl tracking-widest text-white flex items-center px-5 max-sm:text-3xl max-sm:px-0 z-1">
          Events & Participation
        </h1>
        <p className="text-xl text-white w-135 max-sm:w-[90%] max-sm:text-sm max-sm:mt-4 my-10 z-1">
          STATE-OF-THE-ART FACILITIES BUILT FOR IMPACTFUL EVENTS AND ACTIVE PARTICIPATION. EXPERIENCE QUALITY, EFFICIENCY, AND SUSTAINABILITY IN EVERY DETAIL.
        </p>
      </div> */}
        <div
      ref={containerRef}
      className="relative w-[80%]  overflow-hidden mx-auto shadow-lg bg-black py-15"
    >
      

      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * slideWidthPercent}%)`,
          width: `${(slides.length * 100) / visible}%`, // total width so children (each) can be slideWidthPercent%
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="shrink-0"
            style={{
              width: `${slideWidthPercent}%`,
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            <div className="w-120 h-84 bg-white border flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={slide.img}
                alt={`slide-${slide.id}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // fallback if image missing
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/placeholder.png";
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? maxIndex : Math.max(0, prev - 1)))
        }
        className="absolute top-90 max-sm:top-65 left-3 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100 z-10"
        aria-label="previous"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev >= maxIndex ? 0 : Math.min(maxIndex, prev + 1)))
        }
        className="absolute top-90 max-sm:top-65 right-3 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100 z-10"
        aria-label="next"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`go-to-${index}`}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
}
