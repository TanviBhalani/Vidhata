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
      category: "ELECTROMECHANICAL THERMOSTATS",
      products: [
        {
          code: "TF1",
          title: "BIMETAL THERMOSTAT SPST FASTON EARTH RETURN",
          subtitle: "",
          image: "/images/TF1.jpg",
        },
        {
          code: "TF2",
          title: "FIXED SETTING PRESSURE SWITCH SPST",
          subtitle: "",
          image: "/images/TF2.jpg",
        },
        {
          code: "TF3",
          title: "BIMETAL THERMOSTAT WIRED  SPST",
          subtitle: "",
          image: "/images/TF3.jpg",
        },
        {
          code: "TF4",
          title: "BIMETAL THERMOSTAT SPST DIN CONNECTOR",
          subtitle: "",
          image: "/images/TF4.jpg",
        },
        {
          code: "TF5",
          title: "BIMETAL THERMOSTAT SPST INTEGRATED CONNECTOR",
          subtitle: "",
          image: "/images/TF5.jpg",
        },

      ],
    },

    {
      category: "ELECTRONIC THERMOSTATS",
      products: [
        {
          code: "TF6",
          title: "SOFT STARTER ELECTRONIC THERMOSTAT",
          subtitle: "",
          image: "/images/TF6.jpg",
        },
        {
          code: "TF7",
          title: "FAN DRIVE TEMPERATURE SENSOR (PROPORTIONAL CONTROL)",
          subtitle: "",
          image: "/images/TF7.jpg",
        },
        {
          code: "TF8",
          title: "SOFT STARTER ELECTRONIC THERMOSTAT",
          subtitle: "MAGNETIC DRIVE",
          image: "/images/TF8.jpg",
        },
        {
          code: "TF9",
          title: "FAN DRIVE TEMPERATURE SENSOR",
          subtitle: "MAGNETIC DRIVE",
          image: "/images/TF9.jpg",
        },
        {
          code: "TF10",
          title: "ELECTROMECHANICAL THERMOSTAT SPST",
          subtitle: "MAGNETIC DRIVE",
          image: "/images/TF10.jpg",
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
      <Navbar />


      <section className="bg-[#e6e6e3] py-20">
        <div className="w-full mx-auto  bg-[#e6e6e3]">

          {/* TITLE BAR */}
          <div className=" px-8 py-1">
            <h1 className="text-[64px] font-normal tracking-wide max-sm:text-[32px]">
              TEMPERATURE SWITCHES
            </h1>
          </div>

          {/* PARALLAX IMAGE CONTAINER */}

          <div className="relative h-147.5 w-[95%] mx-[2.5%] overflow-hidden border-b border-gray-400">
            <div
              ref={imageRef}
              className="absolute inset-0 will-change-transform transition-transform duration-75"
            >
              <img
                src="/images/TEMPERATURE.jpg"
                alt="Pressure Switches"
                className="w-full h-[140%] object-cover"
              />
            </div>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="grid grid-cols-2 gap-10 px-8 py-8 max-sm:flex-col max-sm:flex max-sm:pb-0">
            <h2 className="text-[28px] font-normal">
              TEMPERATURE SWITCHES
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
                  basePath="/products/temperature-switches"
                />

              ))}
            </div>
          ))}

        </div>
      </section>


      <Download />

      <Catalogue />

      <Footer />



    </>
  )
}
