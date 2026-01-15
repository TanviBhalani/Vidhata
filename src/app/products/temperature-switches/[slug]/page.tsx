
"use client";

import Catalogue from "@/app/component/Catalouge";
import Choose from "@/app/component/Choose";
import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
import React from "react";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}



const pressureSwitchSections = [
  {
    category: "ELECTROMECHANICAL THERMOSTATS",
    products: [
      {
        code: "TF1",
        title: "BIMETAL THERMOSTAT SPST FASTON EARTH RETURN",
        subtitle: "",
        image: "/images/TF1.jpg",
        svg: "/images/tf1.svg",
        pdf: "/pdfs/TF1-EN.pdf"
      },
      {
        code: "TF2",
        title: "FIXED SETTING PRESSURE SWITCH SPST",
        subtitle: "",
        image: "/images/TF2.jpg",
        svg: "/images/tf2.svg",
        pdf: "/pdfs/TF2-EN.pdf"
      },
      {
        code: "TF3",
        title: "BIMETAL THERMOSTAT WIRED  SPST",
        subtitle: "",
        image: "/images/TF3.jpg",
        svg: "/images/tf3.svg",
        pdf: "/pdfs/TF3-EN.pdf"
      },
      {
        code: "TF4",
        title: "BIMETAL THERMOSTAT SPST DIN CONNECTOR",
        subtitle: "",
        image: "/images/TF4.jpg",
        svg: "/images/tf4.svg",
        pdf: "/pdfs/TF4-EN.pdf"
      },
      {
        code: "TF5",
        title: "BIMETAL THERMOSTAT SPST INTEGRATED CONNECTOR",
        subtitle: "",
        image: "/images/TF5.jpg",
        svg: "/images/tf5.svg",
        pdf: "/pdfs/TF5-EN.pdf"
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
        svg: "/images/tf6.svg",
        pdf: "/pdfs/TF6-EN.pdf"
      },
      {
        code: "TF7",
        title: "FAN DRIVE TEMPERATURE SENSOR (PROPORTIONAL CONTROL)",
        subtitle: "",
        image: "/images/TF7.jpg",
        svg: "/images/tf7.svg",
        pdf: "/pdfs/TF7-EN.pdf"
      },
      {
        code: "TF8",
        title: "SOFT STARTER ELECTRONIC THERMOSTAT",
        subtitle: "MAGNETIC DRIVE",
        image: "/images/TF8.jpg",
        svg: "/images/tf8.svg",
        pdf: "/pdfs/TF8-EN.pdf"
      },
      {
        code: "TF9",
        title: "FAN DRIVE TEMPERATURE SENSOR",
        subtitle: "MAGNETIC DRIVE",
        image: "/images/TF9.jpg",
        svg: "/images/tf9.svg",
        pdf: "/pdfs/TF9-EN.pdf"
      },
      {
        code: "TF10",
        title: "ELECTROMECHANICAL THERMOSTAT SPST",
        subtitle: "MAGNETIC DRIVE",
        image: "/images/TF10.jpg",
        svg: "/images/tf10.svg",
        pdf: "/pdfs/TF10-EN.pdf"
      },
    ],
  },


];


export default function Page({ params }: ProductPageProps) {
  const { slug } = React.use(params);


  const allProducts = pressureSwitchSections.flatMap(
    (section) => section.products
  );

  const product = allProducts.find(
    (p) => p.code.toLowerCase() === slug.toLowerCase()
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <>

      <Navbar />

      <section className="bg-[#e6e6e3] min-h-screen py-20">
        <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT : BIG IMAGE */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.code}
              className="w-full max-w-xl object-contain"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between">

            {/* TEXT */}
            <div>
              <h1 className="text-[48px] font-normal uppercase mb-4">
                {product.code}
              </h1>

              <p className="text-xl">{product.title}</p>
              <p className="text-md text-gray-600 mt-1">
                {product.subtitle}
              </p>

              <Link
                href="/products/temperature-switches"
                className="inline-block mt-6 underline text-sm"
              >
                ← Back to Temperature Switches
              </Link>
            </div>
            {/* RIGHT BOTTOM : SVG + DATASHEET */}
            {product.svg && (
              <div className="bg-[#f1f1ef] p-2 w-[280px] h-[280px] flex items-center justify-center">
                <img
                  src={product.svg}
                  alt={`${product.code} technical drawing`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {product.pdf && (
              <a
                href={product.pdf}
                target="_blank"
                className="mt-4 w-[280px] bg-black text-white text-center py-4 text-sm uppercase tracking-wide"
              >
                Data Sheet
              </a>
            )}



          </div>

        </div>
      </section>

      <Choose />

      <Catalogue />

      <Footer />

    </>
  );
}

