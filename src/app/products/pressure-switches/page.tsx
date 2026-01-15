"use client";

import Catalogue from '@/app/component/Catalouge';
import Download from '@/app/component/Download';
import Footer from '@/app/component/Footer';
import Navbar from '@/app/component/Navbar';
import ProductCard from '@/app/component/ProductCard';
import React, { useEffect, useRef } from 'react'

export default function page() {


const pressureSwitchSections = [
  {
    category: "ELECTROMECHANICAL PRESSURE SWITCHES",
    products: [
      {
        code: "PR1",
        title: "MINIATURIZED PRESSURE SWITCH SPST",
        subtitle: "NO ≤ 48 V",
        image: "/images/PR1g.jpg",
      },
      {
        code: "PR3E",
        title: "FIXED SETTING PRESSURE SWITCH SPST",
        subtitle: "EARTH RETURN CONTACT ≤ 48 V",
        image: "/images/PR2g.jpg",
      },
      {
        code: "PR3I",
        title: "FIXED SETTING PRESSURE SWITCH SPST",
        subtitle: "≤ 48 V",
        image: "/images/PR3g.jpg",
      },
      {
        code: "PR4",
        title: "COMPACT PRESSURE SWITCH SPST",
        subtitle: "NO ≤ 48 V",
        image: "/images/PR4g.jpg",
      },
      {
        code: "PR5",
        title: "PRESSURE SWITCH SPST",
        subtitle: "FASTON ≤ 48 V",
        image: "/images/PR5g.jpg",
      },
      {
        code: "PR6",
        title: "PRESSURE SWITCH SPST",
        subtitle: "CLAMPS ≤ 48 V",
        image: "/images/PR6g.jpg",
      },
      {
        code: "PR7",
        title: "PRESSURE SWITCH SPDT",
        subtitle: "GROUND TERMINAL ≤ 250 V",
        image: "/images/PR7g.jpg",
      },
      {
        code: "PR8",
        title: "COMPACT PRESSURE SWITCH",
        subtitle: "SPDT ≤ 250 V",
        image: "/images/PR8g.jpg",
      },
      {
        code: "PR9",
        title: "PRESSURE SWITCH SPST",
        subtitle: "INTEGRATED CONNECTOR ≤ 250 V",
        image: "/images/PR9g.jpg",
      },
      {
        code: "P27",
        title: "PRESSURE SWITCH SPDT",
        subtitle: "DIN CONNECTOR ≤ 250 V",
        image: "/images/PR10g.jpg",
      },
      {
        code: "PC3",
        title: "PRESSURE SWITCH SPDT",
        subtitle: "DIN CONNECTOR ≤ 250 V",
        image: "/images/PR11g.jpg",
      },
    ],
  },

  {
    category: "DIFFERENTIAL PRESSURE SWITCHES",
    products: [
      {
        code: "PE3",
        title: "ELECTRICAL DIFFERENTIAL PRESSURE INDICATOR",
        subtitle: "MAGNETIC DRIVE - SPST",
        image: "/images/PR12g.jpg",
      },
      {
        code: "PE5",
        title: "ELECTRICAL DIFFERENTIAL PRESSURE INDICATOR",
        subtitle: "MAGNETIC DRIVE - SPDT",
        image: "/images/PR13g.jpg",
      },
      {
        code: "PV1",
        title: "OPTICAL DIFFERENTIAL PRESSURE INDICATOR",
        subtitle: "MAGNETIC DRIVE",
        image: "/images/PR14g.jpg",
      },
    ],
  },

  {
    category: "VACUUM SWITCHES",
    products: [
      {
        code: "VR5",
        title: "VACUUM SWITCH SPST",
        subtitle: "FASTON ≤ 48 V",
        image: "/images/PR15g.jpg",
      },
      {
        code: "VR8",
        title: "COMPACT VACUUM SWITCH",
        subtitle: "SPDT ≤ 250 V",
        image: "/images/PR16g.jpg",
      },
      {
        code: "VR9",
        title: "VACUUM SWITCH",
        subtitle: "INTEGRATED CONNECTOR ≤ 250 V",
        image: "/images/PR17g.jpg",
      },
      {
        code: "V27",
        title: "VACUUM SWITCH SPDT",
        subtitle: "DIN CONNECTOR ≤ 250 V",
        image: "/images/PR18g.jpg",
      },
    ],
  },
];


     const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top * 0.25; // parallax speed
      imageRef.current.style.transform = `translateY(${scrollProgress}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar/>

     
 <section className="bg-[#e6e6e3] py-20">
      <div className="w-full mx-auto  bg-[#e6e6e3]">

        {/* TITLE BAR */}
        <div className=" px-8 py-1">
          <h1 className="text-[64px] font-normal tracking-wide max-sm:text-[32px]">
            PRESSURE SWITCHES
          </h1>
        </div>

        {/* PARALLAX IMAGE CONTAINER */}
        <div className="relative h-[590px] w-[95%] mx-[2.5%] overflow-hidden border-b border-gray-400">
          <div
            ref={imageRef}
            className="absolute inset-0 will-change-transform transition-transform duration-75"
          >
            <img
              src="/images/sensorbg.jpg"
              alt="Pressure Switches"
              className="w-full h-[140%] object-cover"
            />
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="grid grid-cols-2 gap-10 px-8 py-8 max-sm:flex-col max-sm:flex max-sm:pb-0">
          <h2 className="text-[28px] font-normal">
            PRESSURE SWITCHES
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed max-sm:text-[12px]">
            THE RANGE OF VIDHATA PRESSURE SENSORS IS OFTEN USED IN INDUSTRIAL
            APPLICATIONS, EARTHMOVING MACHINERY, AGRICULTURAL MACHINERY AND
            MATERIAL HANDLING WHICH ARE DESIGNED TO TRANSFORM A PRESSURE VALUE
            INTO AN ELECTRICAL SIGNAL. THERE ARE VARIOUS TYPES OF PRESSURE
            SENSORS SUCH AS ELECTROMECHANICAL PRESSURE SWITCHES, ELECTRICAL /
            VISUAL DIFFERENTIAL PRESSURE SWITCHES AND VACUUM SWITCHES.
          </p>
        </div>

      </div>
    </section>


<section className="bg-[#e6e6e3] py-20">
      <div className="max-w-8xl mx-auto px-6 space-y-16">

        {pressureSwitchSections.map((section, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* CATEGORY BLOCK */}
            <div className="bg-[#d4d4d2] p-10 flex items-center">
              <h2 className="text-[28px] font-normal leading-snug uppercase">
                {section.category}
              </h2>
            </div>

            {/* PRODUCTS */}
            {section.products.map((product) => (
              <ProductCard
  key={product.code}
  code={product.code}
  title={product.title}
  subtitle={product.subtitle}
  image={product.image}
  basePath="/products/pressure-switches"
/>

            ))}
          </div>
        ))}

      </div>
    </section>


    <Download/>

    <Catalogue/>

    <Footer/>



    </>
  )
}
