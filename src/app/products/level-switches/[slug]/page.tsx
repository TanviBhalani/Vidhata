
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
      category: "ELECTROMAGNETIC LEVEL",
      products: [
        {
          code: "LA1",
          title: "ELECTROMAGNETIC LEVEL SWITCH",
          subtitle: "SPDT",
          image: "/images/LA1.jpg",
          svg: "/images/la1.svg",
        pdf: "/pdfs/LA1-EN.pdf"
        },
        {
          code: "LA2",
          title: "ELECTROMAGNETIC LEVEL SWITCH ",
          subtitle: "SINGLE CONTACT WITH THERMOSTAT",
          image: "/images/LA2.jpg",
          svg: "/images/la2.svg",
        pdf: "/pdfs/LA2-EN.pdf"
        },
        {
          code: "LA3",
          title: "ELECTROMAGNETIC LEVEL SWITCH",
          subtitle: "DOUBLE FLOATER",
          image: "/images/LA3.jpg",
          svg: "/images/la3.svg",
        pdf: "/pdfs/LA3-EN.pdf"
        },
        {
          code: "LA4",
          title: "ELECTROMAGNETIC LEVEL SWITCH: SPDT",
          subtitle: "",
          image: "/images/LA4.jpg",
          svg: "/images/la4.svg",
        pdf: "/pdfs/LA4-EN.pdf"
        },
        

      ],
    },

    {
      category: "VISUAL INDICATOR",
      products: [
        {
          code: "LA5",
          title: "VISUAL INDICATOR WITH THERMOMETER",
          subtitle: "",
          image: "/images/LA5.jpg",
          svg: "/images/la5.svg",
        pdf: "/pdfs/LA5-EN.pdf"
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

    <Navbar/>

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
                href="/products/level-switches"
                className="inline-block mt-6 underline text-sm"
              >
                ← Back to Level Switches
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

<Choose/>

<Catalogue/>

<Footer/>

    </>
  );
}

