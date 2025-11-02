"use client";
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#17171a] text-white">
      {/* Top Section */}
      <div className="w-full px-10 py-10  flex justify-between gap-10 max-sm:flex-wrap  max-[300px]:px-4 max-[300px]:text-center">
        {/* Left: Company Info */}
        <div className="w-[35%] max-lg:w-full">
          <h2 className="text-2xl font-bold text-white">
            VIDHATA INDUSTRIES PVT. LTD.
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Manufacturers of High-Quality Fasteners and Precision Components.
          </p>
          <p className="text-gray-400 mt-5 leading-relaxed">
            A commitment to excellence and innovation has driven Vidhata
            Industries to become one of the leading manufacturers of fasteners.
            Our focus on precision, sustainability, and quality has made us a
            trusted name across industries worldwide.
          </p>
          <button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            READ MORE
          </button>
        </div>

        {/* Middle: Quick Links */}
        <div className="w-[15%] max-lg:w-[45%] max-sm:w-full">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Certifications / Awards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Dealers Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Career @ VIDHATA
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Map */}
        <div className="w-[34%] max-lg:w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7900521919775!2d72.86805957496113!3d19.0733125520759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ad2ef7a3db%3A0x4b9400b6c9f8a3b5!2sVidhata%20Industries!5e0!3m2!1sen!2sin!4v1696866932174!5m2!1sen!2sin"
            width="550"
            height="300"
            className="rounded-md border border-gray-700"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="fixed right-4 max-sm:bottom-5 bottom-10 flex flex-col gap-2 z-50">
        <a
          href="tel:+91 8141452353"
          className="bg-gray-700 hover:bg-gray-800 p-3 rounded-md"
        >
          <FaPhoneAlt className="text-white text-xl" />
        </a>
        <a
          href="https://wa.me/91 8141452353"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-md"
        >
          <FaWhatsapp className="text-white text-xl" />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center py-3 text-sm">
        © 2025 <span className="font-semibold">VIDHATA</span> All rights
        reserved
      </div>

      {/* Back to Top Button
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-5 bottom-5 bg-gray-800 hover:bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center z-50 shadow-md"
      >
        ↑
      </button> */}
    </footer>
  );
}
