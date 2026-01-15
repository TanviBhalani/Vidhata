"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [showProducts, setShowProducts] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fade-in animation
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle delayed close to prevent flicker
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowProducts(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowProducts(false), 200);
  };

  const navLinks = ["About Us", "News", "Downloads", "Contacts"];

  return (
    <div className="w-full fixed top-0 z-50">
      {/* Navbar container */}
      <div
        className={`w-full h-14 flex justify-between items-center px-10 transition-all duration-700 
          ${showProducts ? "bg-white text-black" : "bg-black text-white"}
          max-sm:px-5`}
      >
        {/* Left: Logo */}
        {/* <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="font-bold tracking-widest text-xl"
          style={{ fontFamily: "Bruno Ace sans-serif", fontWeight: 400 }}
        >
          VIDHATA
        </motion.h1> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -20 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" passHref>
            <motion.h1
              whileHover={{ scale: 1.1, color: "#e85154" }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer font-bold tracking-widest text-xl transition-all"
              style={{
                fontFamily: "serif",
                fontWeight: 400,
              }}
            >
              VIDHATA
            </motion.h1>
          </Link>
        </motion.div>

        {/* Right: Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="hidden max-sm:hidden md:flex gap-10 list-none items-center"
        >
          {/* Products dropdown trigger */}
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              e.stopPropagation();
              setShowProducts((prev) => !prev);
            }}
            className="cursor-pointer relative group select-none"
          >
            Products
            <span className="block w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </li>

          {/* {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-gray-400 transition"
            >
              {link}
            </li>
          ))} */}

          {[
            { name: "About Us", href: "/about" },
            { name: "News", href: "/news" },
            { name: "Downloads", href: "/downloads" },
            { name: "Contacts", href: "/contacts" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-gray-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="md:hidden flex items-center"
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="transition-all duration-300"
          >
            {menuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Desktop Dropdown */}
      <div
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute h-70  left-0 w-full bg-white text-black shadow-md overflow-hidden transition-all duration-700 ease-in-out ${showProducts
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-10 pointer-events-none"
          } hidden md:block`}
      >
        <div className="flex justify-between px-16 py-20 gap-20">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left">
            <p className="text-sm font-semibold mb-3 text-gray-500">
              PRODUCT CATEGORIES
            </p>
            <ul className="space-y-2 text-lg list-none">
              {/* {["Pressure Switches", "Temperature Switches", "Level Switches"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-gray-500 transition cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // keep dropdown open
                      console.log(`${item} clicked`);
                    }}
                  >
                    {item}
                  </li>
                )
              )} */}
              {[
                { name: "Pressure Switches", href: "/products/pressure-switches" },
                { name: "Temperature Switches", href: "/products/temperature-switches" },
                { name: "Level Switches", href: "/products/level-switches" },
              ].map((item) => (
                <li key={item.name} onClick={(e) => e.stopPropagation()}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-500 transition cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Right Image */}
          <div className="flex gap-10 items-center">
            <img
              src="/images/nav1.png"
              alt="Product 1"
              className="w-full h-90 -mt-40 hover:scale-105 transition-transform duration-300 cursor-pointer rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-black text-white w-full px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {/* Products Accordion */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowProducts(!showProducts)}
              >
                <span className="text-lg font-medium">Products</span>
                <span className="text-xl">{showProducts ? "−" : "+"}</span>
              </div>

              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 pl-3 border-l border-gray-600"
                  >
                    <ul className="space-y-2 text-sm text-gray-300 list-none">
                      {[
                        { name: "Pressure Switches", href: "/products/pressure-switches" },
                        { name: "Temperature Switches", href: "/products/temperature-switches" },
                        { name: "Level Switches", href: "/products/level-switches" },
                      ].map((item) => (
                        <li key={item.name} onClick={(e) => e.stopPropagation()}>
                          <Link href={item.href} className="hover:text-gray-100">
                            {item.name}
                          </Link>
                        </li>
                      ))}

                    </ul>
                    <img
                      src="/images/nav1.png"
                      alt="Product"
                      className="mt-4 w-full h-40 object-cover rounded-xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            {/* {navLinks.map((link) => (
              <div
                key={link}
                className="text-lg hover:text-gray-400 cursor-pointer"
              >
                {link}
              </div>
            ))} */}
            {[
              { name: "About Us", href: "/about" },
              { name: "News", href: "/news" },
              { name: "Downloads", href: "/downloads" },
              { name: "Contacts", href: "/contacts" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg hover:text-gray-400 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
