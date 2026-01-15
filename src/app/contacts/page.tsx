// import React from 'react'

// export default function page() {
//   return (
//     <>
//     <div className='bg-black h-screen w-full '>

//     </div>

//     </>
//   )
// }


"use client";

import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from "../component/Navbar";
import { useRef } from "react";
import Footer from "../component/Footer";
import { useState } from "react";
import { sendMessageToFirebase } from "../../../firebase/message";


export default function Page() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      await sendMessageToFirebase(formData);
      alert("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    }
  };

  return (
    <>
      <Navbar />

      {/* ----------------------------- */}
      {/* CONTACT SECTION FIRST         */}
      {/* ----------------------------- */}

      <div className="h-screen w-full bg-black text-white relative max-sm:h-280">

        <div className="max-w-6xl mx-auto px-6 pt-20">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-7xl font-semibold text-white max-sm:text-2xl"
          >
            CONTACT US
          </motion.h1>

          {/* SUB TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-400 max-w-2xl mt-4 mb-30"
          >
            Our team is ready to assist you with industrial solutions and enquiries.
          </motion.p>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-sm:flex max-sm:flex-col">

            {/* LEFT SECTION */}
            {/* LEFT SECTION */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >

              {/* ADDRESS */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
                className="flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-[#db5356] flex items-center justify-center">
                  <MapPin size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-400 mt-1">
                    4671 Sugar Camp Road,<br />
                    Owatonna, Minnesota, 55060
                  </p>
                </div>
              </motion.div>

              {/* PHONE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: false }}
                className="flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-[#db5356] flex items-center justify-center">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-400 mt-1">561-456-2321</p>
                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: false }}
                className="flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-[#db5356] flex items-center justify-center">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-400 mt-1">support@vidhata.com</p>
                </div>
              </motion.div>

            </motion.div>


            {/* RIGHT SIDE FORM */}
            <div className="bg-white rounded-xl shadow-xl p-8 text-black">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

              <div className="space-y-6">


                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 pb-2 focus:outline-none"
                />


                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 pb-2 focus:outline-none"
                />


                <textarea
                  name="message"
                  placeholder="Type your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 pb-2 focus:outline-none resize-none"
                />


                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#db5356] hover:bg-[#c44a4d] text-white py-3 rounded-md mt-3 transition"
                >
                  Send
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CATALOGUE SECTION NOW LAST  */}
      <div className="bg-black relative overflow-hidden min-h-screen flex items-center justify-center">

        {(() => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, margin: "-20% 0px" });

          return (
            <div ref={ref} className="relative flex flex-col items-center justify-center h-full select-none px-4">

              {/* BACKGROUND IMAGE */}
              <img
                src="/images/cataloge.png"
                className="
                       absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-55 h-80
                       sm:w-75 sm:h-105
                       md:w-112.5 md:h-162.5
                       rounded-xl rotate-150 opacity-60
                     "
                alt=""
              />

              {/* 2025 */}
              <motion.h1
                initial={{ rotate: -108, y: 280, opacity: 0 }}
                animate={
                  isInView
                    ? { rotate: 0, y: 0, opacity: 1 }
                    : { rotate: -108, y: 280, opacity: 0 }
                }
                transition={{
                  rotate: { duration: 1.8, ease: "easeOut" },
                  opacity: { duration: 1.8, ease: "easeOut", delay: 0.25 },
                }}
                className="
                       text-white font-medium origin-left z-20
                       text-[60px]
                       sm:text-[90px]
                       md:text-[150px]
                     "
              >
                2025
              </motion.h1>

              {/* GENERAL */}
              <motion.h1
                initial={{ rotate: -48, y: 150, opacity: 0 }}
                animate={
                  isInView
                    ? { rotate: 0, y: 0, opacity: 1 }
                    : { rotate: -48, y: 150, opacity: 0 }
                }
                transition={{
                  rotate: { duration: 1.9, ease: "easeOut", delay: 0.05 },
                  opacity: { duration: 1.9, ease: "easeOut", delay: 0.35 },
                }}
                className="
                       text-white font-medium origin-left z-20
                       text-[60px]
                       sm:text-[100px]
                       md:text-[170px]
                     "
              >
                GENERAL
              </motion.h1>

              {/* CATALOGUE */}
              <motion.h1
                initial={{ rotate: -80, y: 180, opacity: 0 }}
                animate={
                  isInView
                    ? { rotate: 0, y: 0, opacity: 1 }
                    : { rotate: -80, y: 180, opacity: 0 }
                }
                transition={{
                  rotate: { duration: 1.5, ease: "easeOut", delay: 0.1 },
                  opacity: { duration: 1.5, ease: "easeOut", delay: 0.4 },
                }}
                className="
                       text-white font-medium origin-left z-20
                       text-[60px]
                       sm:text-[100px]
                       md:text-[170px]
                     "
              >
                CATALOGUE
              </motion.h1>

              {/* DOWNLOAD BUTTON */}
              <button className="mt-10 sm:mt-16 md:mt-24 z-20">
                <a
                  href="/pdfs/OTHER.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                         bg-[#333] text-white
                         px-8 py-3
                         sm:px-12
                         rounded-sm text-sm sm:text-lg
                         hover:bg-[#db5356]
                         transition-all
                       "
                >
                  DOWNLOAD
                </a>
              </button>

              {/* HELP */}
              <p className="mt-8 sm:mt-14 text-xs sm:text-sm text-gray-400 z-20 pb-20">
                NEED MORE HELP?{" "}
                <a href="#" className="text-red-500 hover:underline">
                  CONTACT US
                </a>
              </p>

            </div>
          );
        })()}
      </div>


      <Footer />

    </>
  );
}




