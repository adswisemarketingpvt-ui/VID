// Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "motion/react"; // if using framer-motion v10 or earlier: import { motion } from "framer-motion";

// --- Simple background marquee slider (left -> right, continuous) ---
const MarqueeBG = () => {
  const images = [
    "https://i.pinimg.com/736x/20/60/1f/20601f8a5950592173a14bd487837bda.jpg",
    "https://i.pinimg.com/736x/96/41/ac/9641ac25cb86cbb09b5fe54988fb1893.jpg",
    "https://i.pinimg.com/1200x/b1/0d/12/b10d12b3053385f4365990dbd067bf92.jpg",
    "https://i.pinimg.com/736x/59/c2/34/59c234549a3e5a73d4752ab30cd4d754.jpg",
    "https://i.pinimg.com/736x/fa/97/2a/fa972ab62e1c8d0faff2af6e086bd66f.jpg",
  ];

  const track = [...images, ...images];

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <div className="absolute inset-y-0 left-0 w-[300vw]">
        <motion.div
          className="absolute inset-y-0 flex items-center h-[100px] gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {track.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`bg-${i}`}
              className="h-full w-auto object-cover"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header id="home" className="relative pt-24 bg-white">
      
      {/* Top Nav */}
      <div
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-gray-800">
                <img
                  src="https://vishwaswamiinteriors.com/logo.png"
                  alt="Logo"
                  className="h-12 w-14 ml-2"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollTo("home")}
                className="text-gray-700  hover:text-[#005561] font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("service")}
                className="text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("project")}
                className="text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo("team")}
                className="text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                Contact
              </button>
            </nav>

            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="tel:+919405435995"
                aria-label="Call +91 9405435995"
                className="bg-[#005561] text-white px-6 py-2 hover:bg-[#004B55] transition-colors flex items-center space-x-2 "
              >
                <Phone className="w-4 h-4" />
                <span>+91 9405435995</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ${
              isMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <nav className="py-4 space-y-4">
              <button
                onClick={() => scrollTo("home")}
                className="block text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="block text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("service")}
                className="block text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("project")}
                className="block text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo("team")}
                className="block text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="block text-gray-700 hover:text-[#005561] font-medium transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="flex items-center min-h-screen relative">
        {/* Background marquee behind everything */}
        <MarqueeBG />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full xl:w-8/12 lg:w-9/12 sm:w-10/12">
              <div className="py-8">
                <h4
                  className="text-lg text-gray-600 mb-4 opacity-0 animate-fadeInUp ml-[100px]"
                  style={{
                    animationDelay: "1s",
                    animationFillMode: "forwards",
                  }}
                >
                  Your trusted
                </h4>
                <h1
                  className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6 ml-[100px] opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: "2s",
                    animationFillMode: "forwards",
                  }}
                >
                  <span className="bg-gradient-to-r from-yellow-300 via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                  Interior Design
                  </span>
                  <br />
                  <span className="text-[#005561]">Partner for Home or Office</span>
                </h1>
                <p
                  className="text-lg text-gray-800 mb-8 opacity-0 animate-fadeInUp ml-[100px]"
                  style={{
                    animationDelay: "2.2s",
                    animationFillMode: "forwards",
                  }}
                >
                  Please, consider purchasing full version to get all pages,
                  features, assets and permission to remove footer credits.
                </p>
                <a
  href="#"
  rel="nofollow"
  className="inline-flex items-center bg-[#005561] hover:bg-[#004B55] text-white px-8 py-4 transition-colors font-medium opacity-0 animate-fadeInUp ml-[100px] group"
  style={{
    animationDelay: "2.3s",
    animationFillMode: "forwards",
  }}
>
  Get a Free Quote
  <span
    className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1"
  >
    →
  </span>
</a>

              </div>
            </div>
          </div>
        </div>

        {/* === Decorative pink rings behind the right image === */}
        {/* Place BEFORE the image block; lower z-index than image, higher than marquee */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none">
          <div
            className="
              absolute right-[32%] top-[88%] -translate-y-1/2
              w-[320px] h-[320px] z-[6]
              rounded-full"
            aria-hidden="true"
          >
            {/* Outer ring */}
            <div
              className="
    absolute inset-0 rounded-full
    bg-[conic-gradient(from_0deg,#fffef2,#fff7c2,#ffe98a,#fffef2)]
    [mask:radial-gradient(farthest-side,transparent_calc(100%-28px),#000_calc(100%-28px))]
  "
            />

            {/* Inner ring */}
          </div>
        </div>

        {/* Right-side static background image ABOVE the rings */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center hidden lg:block z-10"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/736x/2d/06/2a/2d062a8e3aa0d19d2b412fb81cba723e.jpg)",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
