// "use client"

// interface ProductPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function PressureSwitchProductPage({
//   params,
// }: ProductPageProps) {
//   return (
//     <section className="bg-[#e6e6e3] min-h-screen py-20">
//       <div className="max-w-5xl mx-auto px-6">

//         <h1 className="text-[48px] font-light uppercase mb-6">
//           {params.slug}
//         </h1>

//         <p className="text-gray-700">
//           Details for pressure switch <b>{params.slug}</b>
//         </p>

//         <a
//           href="/products/pressure-switches"
//           className="inline-block mt-10 underline text-sm"
//         >
//           ← Back to Pressure Switches
//         </a>

//       </div>
//     </section>
//   );
// }




"use client";

import Catalogue from "@/app/component/Catalouge";
import Choose from "@/app/component/Choose";
import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
import React from "react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const pressureSwitchSections = [
  {
    category: "ELECTROMECHANICAL PRESSURE SWITCHES",
    products: [
      { code: "PR1", title: "MINIATURIZED PRESSURE SWITCH SPST", subtitle: "NO ≤ 48 V", image: "/images/PR1g.jpg", svg: "/images/PR1.svg", pdf: "/pdfs/PR1-EN.pdf", },
      { code: "PR3E", title: "FIXED SETTING PRESSURE SWITCH SPST", subtitle: "EARTH RETURN CONTACT ≤ 48 V", image: "/images/PR2g.jpg" , svg: "/images/PR2.svg", pdf: "/pdfs/PR2-EN.pdf" },
      { code: "PR3I", title: "FIXED SETTING PRESSURE SWITCH SPST", subtitle: "≤ 48 V", image: "/images/PR3g.jpg", svg: "/images/PR3.svg", pdf: "/pdfs/PR3-EN.pdf" },
      { code: "PR4", title: "COMPACT PRESSURE SWITCH SPST", subtitle: "NO ≤ 48 V", image: "/images/PR4g.jpg", svg: "/images/PR4.svg", pdf: "/pdfs/PR4-EN.pdf" },
      { code: "PR5", title: "PRESSURE SWITCH SPST", subtitle: "FASTON ≤ 48 V", image: "/images/PR5g.jpg", svg: "/images/PR5.svg", pdf: "/pdfs/PR5-EN.pdf" },
      { code: "PR6", title: "PRESSURE SWITCH SPST", subtitle: "CLAMPS ≤ 48 V", image: "/images/PR6g.jpg", svg: "/images/PR6.svg", pdf: "/pdfs/PR6-EN.pdf" },
      { code: "PR7", title: "PRESSURE SWITCH SPDT", subtitle: "GROUND TERMINAL ≤ 250 V", image: "/images/PR7g.jpg", svg: "/images/PR7.svg", pdf: "/pdfs/PR7-EN.pdf" },
      { code: "PR8", title: "COMPACT PRESSURE SWITCH", subtitle: "SPDT ≤ 250 V", image: "/images/PR8g.jpg", svg: "/images/PR8.svg", pdf: "/pdfs/PR8-EN.pdf" },
      { code: "PR9", title: "PRESSURE SWITCH SPST", subtitle: "INTEGRATED CONNECTOR ≤ 250 V", image: "/images/PR9g.jpg" , svg: "/images/PR9.svg", pdf: "/pdfs/PR9-EN.pdf"},
      { code: "P27", title: "PRESSURE SWITCH SPDT", subtitle: "DIN CONNECTOR ≤ 250 V", image: "/images/PR10g.jpg", svg: "/images/PR10.svg", pdf: "/pdfs/PR10-EN.pdf" },
      { code: "PC3", title: "PRESSURE SWITCH SPDT", subtitle: "DIN CONNECTOR ≤ 250 V", image: "/images/PR11g.jpg", svg: "/images/PR11.svg", pdf: "/pdfs/PR11-EN.pdf" },
    ],
  },
  {
    category: "DIFFERENTIAL PRESSURE SWITCHES",
    products: [
      { code: "PE3", title: "ELECTRICAL DIFFERENTIAL PRESSURE INDICATOR", subtitle: "MAGNETIC DRIVE - SPST", image: "/images/PR12g.jpg", svg: "/images/PR12.svg", pdf: "/pdfs/PR12-EN.pdf" },
      { code: "PE5", title: "ELECTRICAL DIFFERENTIAL PRESSURE INDICATOR", subtitle: "MAGNETIC DRIVE - SPDT", image: "/images/PR13g.jpg" , svg: "/images/PR13.svg", pdf: "/pdfs/PR13-EN.pdf"},
      { code: "PV1", title: "OPTICAL DIFFERENTIAL PRESSURE INDICATOR", subtitle: "MAGNETIC DRIVE", image: "/images/PR14g.jpg" , svg: "/images/PR14.svg", pdf: "/pdfs/PR14-EN.pdf" },
    ],
  },
  {
    category: "VACUUM SWITCHES",
    products: [
      { code: "VR5", title: "VACUUM SWITCH SPST", subtitle: "FASTON ≤ 48 V", image: "/images/PR15g.jpg", svg: "/images/PR15.svg", pdf: "/pdfs/PR15-EN.pdf" },
      { code: "VR8", title: "COMPACT VACUUM SWITCH", subtitle: "SPDT ≤ 250 V", image: "/images/PR16g.jpg" , svg: "/images/PR16.svg", pdf: "/pdfs/PR16-EN.pdf" },
      { code: "VR9", title: "VACUUM SWITCH", subtitle: "INTEGRATED CONNECTOR ≤ 250 V", image: "/images/PR17g.jpg" , svg: "/images/PR17.svg", pdf: "/pdfs/PR17-EN.pdf" },
      { code: "V27", title: "VACUUM SWITCH SPDT", subtitle: "DIN CONNECTOR ≤ 250 V", image: "/images/PR18g.jpg" , svg: "/images/PR18.svg", pdf: "/pdfs/PR18-EN.pdf" },
    ],
  },
];

export default function PressureSwitchProductPage({ params }: ProductPageProps) {

  // ✅ UNWRAP params correctly
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

        <a
          href="/products/pressure-switches"
          className="inline-block mt-6 underline text-sm"
        >
          ← Back to Pressure Switches
        </a>
      </div>
{/* RIGHT BOTTOM : SVG + DATASHEET */}
<div className="mt-16 flex flex-col items-start">

  {/* SVG DRAWING */}
  <div className="bg-[#f1f1ef] p-2 w-[280px] h-[280px] flex items-center justify-center">
    <img
      src={product.svg}
      alt={`${product.code} technical drawing`}
      className="w-full h-full object-contain"
    />
  </div>

  {/* DATA SHEET BUTTON */}
  <a
    href={product.pdf}
    target="_blank"
    className="mt-4 w-[280px] bg-black text-white text-center py-4 text-sm uppercase tracking-wide"
  >
    Data Sheet
  </a>

</div>


    </div>

  </div>
</section>

<Choose/>

<Catalogue/>

<Footer/>

    </>
  );
}

