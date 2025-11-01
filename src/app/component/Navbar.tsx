// "use client";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [showProducts, setShowProducts] = useState(false);
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false);
//   const [fadeIn, setFadeIn] = useState(false);

//   // Wait 17 seconds before showing navbar content
//   useEffect(() => {
//     const timer = setTimeout(() => setFadeIn(true), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   // combined hover logic
//   const isOpen = showProducts || isHoveringMenu;

//   return (
//     <div className="w-full z-10 fixed ">
//       {/* Navbar */}
//       <div
//         className={`w-full h-12 flex justify-between px-10 items-center transition-all duration-700  ${
//           isOpen ? "bg-white text-black" : "bg-black text-white"
//         }`}
//       >
//         {/* Left */}
//         <div
//           className={`left transition-opacity duration-1000 ${
//             fadeIn ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <h1
//             className={`font-bold tracking-widest text-xl p-2 transition-all duration-700 ${
//               isOpen ? "text-black" : "text-white"
//             }`}
//             style={{fontFamily: "Bruno Ace sans-serif" , fontWeight: 400}}
//           >
//             VIDHATA
//           </h1>
//         </div>

//         {/* Right */}
//         <div
//           className={`right p-3 w-130 transition-opacity duration-1000 ${
//             fadeIn ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <ul className="flex justify-between gap-8">
//             <li
//               className={`text-[1.1rem] cursor-pointer transition-all duration-700 ${
//                 isOpen ? "text-black" : "text-white"
//               }`}
//               onMouseEnter={() => setShowProducts(true)}
//               onMouseLeave={() => {
//                 setTimeout(() => setShowProducts(false), 100);
//               }}
//             >
//               Products
//             </li>
//             <li
//               className={`text-[1.1rem] cursor-pointer transition-all duration-700 ${
//                 isOpen ? "text-black" : "text-white"
//               }`}
//             >
//               About Us
//             </li>
//             <li
//               className={`text-[1.1rem] cursor-pointer transition-all duration-700 ${
//                 isOpen ? "text-black" : "text-white"
//               }`}
//             >
//               News
//             </li>
//             <li
//               className={`text-[1.1rem] cursor-pointer transition-all duration-700 ${
//                 isOpen ? "text-black" : "text-white"
//               }`}
//             >
//               Downloads
//             </li>
//             <li
//               className={`text-[1.1rem] cursor-pointer transition-all duration-700 ${
//                 isOpen ? "text-black" : "text-white"
//               }`}
//             >
//               Contacts
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Full-width Dropdown */}
//       <div
//         onMouseEnter={() => setIsHoveringMenu(true)}
//         onMouseLeave={() => {
//           setIsHoveringMenu(false);
//           setShowProducts(false);
//         }}
//         className={`absolute left-0 w-full bg-white text-black shadow-md overflow-hidden transition-all duration-700 ease-in-out ${
//           isOpen
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 -translate-y-10 pointer-events-none"
//         }`}
//       >
//         <div className="flex justify-between px-10 gap-20 py-0">
//           <div className="flex flex-col items-start text-left mt-30">
//             <p className="text-sm font-semibold mb-3 text-gray-500">
//               PRODUCT CATEGORIES
//             </p>
//             <ul className="space-y-2 text-lg">
//               <li className="hover:text-gray-500 transition cursor-pointer">
//                 Pressure Switches
//               </li>
//               <li className="hover:text-gray-500 transition cursor-pointer">
//                 Temperature Switches
//               </li>
//               <li className="hover:text-gray-500 transition cursor-pointer">
//                 Level Switches
//               </li>
//             </ul>
//           </div>

//           {/* Product Thumbnails */}
//           <div className="flex gap-10">
//             <img
//               src="/images/nav1.png"
//               alt="Product 1"
//               className="w-205 h-80 bg-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showProducts, setShowProducts] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fade in animation (logo + menu appear together)
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 1500);
    return () => clearTimeout(timer);
  }, []);

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
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className={`font-bold tracking-widest text-xl`}
          style={{ fontFamily: "Bruno Ace sans-serif", fontWeight: 400 }}
        >
          VIDHATA
        </motion.h1>

        {/* Right: Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="hidden max-sm:hidden md:flex gap-10 list-none"
        >
          <li
            onMouseEnter={() => setShowProducts(true)}
            onMouseLeave={() => setShowProducts(false)}
            className="cursor-pointer relative group"
          >
            Products
            <span className="block w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </li>
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-gray-400 transition"
            >
              {link}
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
        onMouseEnter={() => setShowProducts(true)}
        onMouseLeave={() => setShowProducts(false)}
        className={`absolute left-0 w-full bg-white text-black shadow-md overflow-hidden transition-all duration-700 ease-in-out ${
          showProducts
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        } hidden md:block`}
      >
        <div className="flex justify-between px-16 max-sm:py-10  gap-20">
          {/* Left Column */}
          <div className="flex flex-col items-start py-20 text-left">
            <p className="text-sm font-semibold mb-3 text-gray-500">
              PRODUCT CATEGORIES
            </p>
            <ul className="space-y-2 text-lg list-none">
              <li className="hover:text-gray-500 transition cursor-pointer">
                Pressure Switches
              </li>
              <li className="hover:text-gray-500 transition cursor-pointer">
                Temperature Switches
              </li>
              <li className="hover:text-gray-500 transition cursor-pointer">
                Level Switches
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex gap-10 items-center">
            <img
              src="/images/nav1.png"
              alt="Product 1"
              className="max-sm:w-72 w-205 h-70   hover:scale-105 transition-transform duration-300"
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
                      <li className="hover:text-gray-100 cursor-pointer">
                        Pressure Switches
                      </li>
                      <li className="hover:text-gray-100 cursor-pointer">
                        Temperature Switches
                      </li>
                      <li className="hover:text-gray-100 cursor-pointer">
                        Level Switches
                      </li>
                    </ul>
                    <img
                      src="/images/nav1.png"
                      alt="Product"
                      className="mt-4 w-full h-40 object-cover rounded-xl"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            {navLinks.map((link) => (
              <div
                key={link}
                className="text-lg hover:text-gray-400 cursor-pointer"
              >
                {link}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
