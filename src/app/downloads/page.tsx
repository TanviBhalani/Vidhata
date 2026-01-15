
"use client";

import React from "react";
import Navbar from "../component/Navbar";
import { motion } from "framer-motion";
import Footer from "../component/Footer";

// PRESSURE SWITCHES (PR series)
const pressureProducts = [
  { title: "PR1", subtitle: "MINIATURIZED PRESSURE SWITCH SPST NO ≤ 48 V", img: "/images/pr1.svg", pdf: "/pdfs/PR1-EN.pdf", },
  { title: "PR3E", subtitle: "FIXED SETTING PRESSURE SWITCH SPST EARTH RETURN CONTACT ≤ 48 V", img: "/images/pr2.svg", pdf: "/pdfs/PR2-EN.pdf" },
  { title: "PR3I", subtitle: "FIXED SETTING PRESSURE SWITCH SPST ≤ 48 V", img: "/images/pr3.svg" },
  { title: "PR4", subtitle: "COMPACT PRESSURE SWITCH SPST NO ≤ 48 V", img: "/images/pr4.svg", pdf: "/pdfs/PR4-EN.pdf" },
  { title: "PR5", subtitle: "PRESSURE SWITCH SPST FASTON ≤ 48 V", img: "/images/pr5.svg", pdf: "/pdfs/PR5-EN.pdf" },
  { title: "PR6", subtitle: "PRESSURE SWITCH SPST CLAMPS ≤ 48 V", img: "/images/pr6.svg", pdf: "/pdfs/PR6-EN.pdf" },
  { title: "PR7", subtitle: "PRESSURE SWITCH SPDT GROUND TERMINAL ≤ 250 V", img: "/images/pr7.svg", pdf: "/pdfs/PR7-EN.pdf" },
  { title: "PR8", subtitle: "COMPACT PRESSURE SWITCH SPDT ≤ 250 V", img: "/images/pr8.svg", pdf: "/pdfs/PR8-EN.pdf" },
  { title: "PR1", subtitle: "MINIATURIZED PRESSURE SWITCH SPST NO ≤ 48 V", img: "/images/pr9.svg", pdf: "/pdfs/PR9-EN.pdf" },
  { title: "PR3E", subtitle: "FIXED SETTING PRESSURE SWITCH SPST EARTH RETURN CONTACT ≤ 48 V", img: "/images/pr10.svg", pdf: "/pdfs/PR10-EN.pdf" },
  { title: "PR3I", subtitle: "FIXED SETTING PRESSURE SWITCH SPST ≤ 48 V", img: "/images/pr11.svg", pdf: "/pdfs/PR11-EN.pdf" },
  { title: "PR4", subtitle: "COMPACT PRESSURE SWITCH SPST NO ≤ 48 V", img: "/images/pr12.svg", pdf: "/pdfs/PR12-EN.pdf" },
  { title: "PR5", subtitle: "PRESSURE SWITCH SPST FASTON ≤ 48 V", img: "/images/pr13.svg", pdf: "/pdfs/PR13-EN.pdf" },
  { title: "PR6", subtitle: "PRESSURE SWITCH SPST CLAMPS ≤ 48 V", img: "/images/pr14.svg", pdf: "/pdfs/PR14-EN.pdf" },
  { title: "PR7", subtitle: "PRESSURE SWITCH SPDT GROUND TERMINAL ≤ 250 V", img: "/images/pr15.svg", pdf: "/pdfs/PR15-EN.pdf" },
  { title: "PR8", subtitle: "COMPACT PRESSURE SWITCH SPDT ≤ 250 V", img: "/images/pr16.svg", pdf: "/pdfs/PR16-EN.pdf" },
  { title: "PR8", subtitle: "COMPACT PRESSURE SWITCH SPDT ≤ 250 V", img: "/images/pr17.svg", pdf: "/pdfs/PR17-EN.pdf" },
  { title: "PR8", subtitle: "COMPACT PRESSURE SWITCH SPDT ≤ 250 V", img: "/images/pr18.svg", pdf: "/pdfs/PR18-EN.pdf" },
];


// TEMPERATURE SWITCHES (TF series ONLY)
const temperatureProducts = [
  { title: "TF1", subtitle: "BIMETAL THERMOSTAT SPST FASTON EARTH RETURN", img: "/images/tf1.svg",pdf: "/pdfs/TF1-EN.pdf" },
  { title: "TF2", subtitle: "BIMETAL THERMOSTAT SPST FASTON", img: "/images/tf2.svg",pdf: "/pdfs/TF2-EN.pdf" },
  { title: "TF3", subtitle: "BIMETAL THERMOSTAT WIRED SPST", img: "/images/tf3.svg",pdf: "/pdfs/TF3-EN.pdf" },
  { title: "TF4", subtitle: "BIMETAL THERMOSTAT SPST DIN CONNECTOR", img: "/images/tf4.svg",pdf: "/pdfs/TF4-EN.pdf" },
  { title: "TF5", subtitle: "TEMPERATURE SWITCH SPST FASTON ≤ 48 V", img: "/images/tf5.svg",pdf: "/pdfs/TF5-EN.pdf" },
  { title: "TF6", subtitle: "TEMPERATURE SWITCH SPST CLAMPS ≤ 48 V", img: "/images/tf6.svg",pdf: "/pdfs/TF6-EN.pdf" },
  { title: "TF7", subtitle: "TEMPERATURE SWITCH SPDT ≤ 250 V", img: "/images/tf7.svg",pdf: "/pdfs/TF7-EN.pdf" },
  { title: "TF8", subtitle: "COMPACT TEMPERATURE SWITCH SPDT ≤ 250 V", img: "/images/tf8.svg",pdf: "/pdfs/TF8-EN.pdf" },
  { title: "TF9", subtitle: "TEMPERATURE SWITCH ≤ 250 V", img: "/images/tf9.svg",pdf: "/pdfs/TF9-EN.pdf" },
  { title: "TF10", subtitle: "TEMPERATURE SWITCH ≤ 250 V", img: "/images/tf10.svg",pdf: "/pdfs/TF10-EN.pdf" },
];

// TEMPERATURE SWITCHES (TF series ONLY)
const levelProducts = [
  { title: "LA1", subtitle: "ELECTROMAGNETIC LEVEL SWITCH SPDT", img: "/images/la1.svg",pdf: "/pdfs/LA1-EN.pdf" },
  { title: "LA2", subtitle: "ELECTROMAGNETIC LEVEL SWITCH SINGLE CONTACT WITH THERMOSTAT", img: "/images/la2.svg",pdf: "/pdfs/LA2-EN.pdf" },
  { title: "LA3", subtitle: "ELECTROMAGNETIC LEVEL SWITCH DOUBLE FLOATER", img: "/images/la3.svg",pdf: "/pdfs/LA3-EN.pdf" },
  { title: "LA4", subtitle: "ELECTROMAGNETIC LEVEL SWITCH: SPDT ADJUSTABLE ROD", img: "/images/la4.svg",pdf: "/pdfs/LA4-EN.pdf" },
  { title: "LA5", subtitle: "VISUAL INDICATOR WITH THERMOMETER", img: "/images/la5.svg" ,pdf: "/pdfs/LA5-EN.pdf"},
];


export default function page() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#e6e7e8] min-h-screen px-10 py-12">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}   // starts lower + invisible
          whileInView={{ opacity: 1, y: 0 }} // moves up to normal position
          transition={{
            duration: 0.9,
            ease: "easeOut"
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-[9rem] mb-5 max-sm:text-5xl max-sm:mt-10"
        >
          Downloads
        </motion.h1>
        <h1 className="text-5xl font-medium  tracking-wide mb-12 max-sm:text-xl">
          PRESSURE SWITCHES
        </h1>

        {/* GRID – PRESSURE SWITCHES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {pressureProducts.map((p, index) => (
            <div key={index}>
              <div className="bg-white shadow-sm p-8 pt-6">
                <h2 className="text-3xl font-semibold">{p.title}</h2>
                <p className="text-[15px] mt-3 leading-tight">{p.subtitle}</p>
                <div className="w-full h-56 flex justify-center items-end mt-10">
                  <img src={p.img} alt={p.title} className="w-full object-contain" />
                </div>
              </div>

              <div className="flex justify-center mt-6">
                {/* <button className="px-10 py-3 border border-gray-400 text-gray-800 text-sm tracking-wide hover:bg-gray-400 transition">
          DATA SHEET
        </button> */}
                <div className="flex justify-center mt-6">
                  {p.pdf ? (
                    <a
                      href={p.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-3 border border-gray-400 text-gray-800 text-sm tracking-wide hover:bg-gray-400 transition inline-block"
                    >
                      DATA SHEET
                    </a>
                  ) : (
                    <span className="px-10 py-3 border border-gray-300 text-gray-400 text-sm cursor-not-allowed">
                      COMING SOON
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>




        {/* ================== CATALOGUE SECTION ================== */}
        <div className="w-full bg-[#e6e7e8] py-20 flex flex-col items-center">

          {/* TITLE */}
          <h1 className="text-5xl md:text-5xl font-semibold text-black text-center leading-tight mb-10">
            PRESSURE SWITCHES <br /> CATALOGUE
          </h1>

          {/* CATALOGUE CARD */}
          <div className="bg-white border border-gray-300 p-2 md:p-5 w-100">
            {/* IMAGE */}
            <img
              src="/images/bpr1.jpg"
              alt="Catalogue cover"
              className="w-full h-130 object-contain"
            />
          </div>

          {/* DOWNLOAD BUTTON */}
          <button >
            <a
              href="/pdfs/PREESURE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 px-16 py-4 border border-gray-400 text-gray-800 text-sm tracking-wider hover:bg-gray-300 transition inline-block"
            >
              DOWNLOAD
            </a>
          </button>
        </div>


        <h1 className="text-5xl font-medium  tracking-wide mb-12">
          TEMPERATURE SWITCHES
        </h1>
        {/* GRID – TEMPERATURE SWITCHES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {temperatureProducts.map((p, index) => (
            <div key={index}>
              <div className="bg-white shadow-sm p-8 pt-6">
                <h2 className="text-3xl font-semibold">{p.title}</h2>
                <p className="text-[15px] mt-3 leading-tight">{p.subtitle}</p>
                <div className="w-full h-56 flex justify-center items-end mt-10">
                  <img src={p.img} alt={p.title} className="w-full object-contain" />
                </div>
              </div>

              <div className="flex justify-center mt-6">
                {/* <button className="px-10 py-3 border border-gray-400 text-gray-800 text-sm tracking-wide hover:bg-gray-400 transition">
                  DATA SHEET
                </button> */}
                <div className="flex justify-center mt-6">
                  {p.pdf ? (
                    <a
                      href={p.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-3 border border-gray-400 text-gray-800 text-sm tracking-wide hover:bg-gray-400 transition inline-block"
                    >
                      DATA SHEET
                    </a>
                  ) : (
                    <span className="px-10 py-3 border border-gray-300 text-gray-400 text-sm cursor-not-allowed">
                      COMING SOON
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* ================== CATALOGUE SECTION ================== */}
        <div className="w-full bg-[#e6e7e8] py-20 flex flex-col items-center">

          {/* TITLE */}
          <h1 className="text-5xl md:text-5xl font-semibold text-black text-center leading-tight mb-10">
            TEMPERATURE SWITCHES <br /> CATALOGUE
          </h1>

          {/* CATALOGUE CARD */}
          <div className="bg-white border border-gray-300 p-2 md:p-5 w-100">
            {/* IMAGE */}
            <img
              src="/images/bpr2.jpg"
              alt="Catalogue cover"
              className="w-full h-130 object-contain"
            />
          </div>

          {/* DOWNLOAD BUTTON */}
          <button >
            <a
              href="/pdfs/TEMP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 px-16 py-4 border border-gray-400 text-gray-800 text-sm tracking-wider hover:bg-gray-300 transition inline-block"
            >
              DOWNLOAD
            </a>
          </button>
        </div>



        <h1 className="text-5xl font-medium  tracking-wide mb-12">
          LEVEL SWITCHES
        </h1>
        {/* GRID – TEMPERATURE SWITCHES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {levelProducts.map((p, index) => (
            <div key={index}>
              <div className="bg-white shadow-sm p-8 pt-6">
                <h2 className="text-3xl font-semibold">{p.title}</h2>
                <p className="text-[15px] mt-3 leading-tight">{p.subtitle}</p>
                <div className="w-full h-66 flex justify-center items-end mt-10">
                  <img src={p.img} alt={p.title} className="w-full object-contain" />
                </div>
              </div>

              <div className="flex justify-center mt-6">
                {/* <button className="px-10 py-3 border border-gray-400 text-gray-800 text-sm tracking-wide hover:bg-gray-400 transition">
                  DATA SHEET
                </button> */}
                <div className="flex justify-center mt-6">
                  {p.pdf ? (
                    <a
                      href={p.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-3 border border-gray-400 text-gray-800 text-sm tracking-wide hover:bg-gray-400 transition inline-block"
                    >
                      DATA SHEET
                    </a>
                  ) : (
                    <span className="px-10 py-3 border border-gray-300 text-gray-400 text-sm cursor-not-allowed">
                      COMING SOON
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>


        {/* ================== CATALOGUE SECTION ================== */}
        <div className="w-full bg-[#e6e7e8] py-20 flex flex-col items-center">

          {/* TITLE */}
          <h1 className="text-5xl md:text-5xl font-semibold text-black text-center leading-tight mb-10">
            LEVEL SWITCHES <br /> CATALOGUE
          </h1>

          {/* CATALOGUE CARD */}
          <div className="bg-white border border-gray-300 p-2 md:p-5 w-100">
            {/* IMAGE */}
            <img
              src="/images/bpr3.jpg"
              alt="Catalogue cover"
              className="w-full h-130 object-contain"
            />
          </div>

          {/* DOWNLOAD BUTTON */}
          <button >
            <a
              href="/pdfs/LEVEL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 px-16 py-4 border border-gray-400 text-gray-800 text-sm tracking-wider hover:bg-gray-300 transition inline-block"
            >
              DOWNLOAD
            </a>
          </button>
        </div>







      </div>


      <Footer />

    </>
  );
}

