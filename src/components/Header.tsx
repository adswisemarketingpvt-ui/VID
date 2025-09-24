// Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "motion/react";
// If you're on framer-motion v10 or earlier, use:
// import { motion } from "framer-motion";

// --- Simple background marquee slider (left -> right, continuous) ---
const MarqueeBG = () => {
  // Add/replace with your images
  const images = [
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
  ];

  // Duplicate the list to create a seamless loop
  const track = [...images, ...images];

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* A very wide lane to slide on */}
      <div className="absolute inset-y-0 left-0 w-[300vw]">
        <motion.div
          className="absolute inset-y-0 flex items-center h-[100px] gap-8 "
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {track.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`bg-${i}`}
              className="h-full w-auto object-cover "
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
                  src="https://i.pinimg.com/736x/96/58/df/9658dfaa54045d39dc53e01c9f60fc8b.jpg"
                  alt="Logo"
                  className="h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollTo("home")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("service")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("project")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo("team")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
            </nav>

            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>+98 222 4444</span>
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
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("service")}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("project")}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo("team")}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
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
                  <span className="text-blue-600">Interior Design</span>
                  Partner for Home or Office
                </h1>
                <p
                  className="text-lg text-gray-600 mb-8 opacity-0 animate-fadeInUp ml-[100px]"
                  style={{
                    animationDelay: "2.2s",
                    animationFillMode: "forwards",
                  }}
                >
                  Please, consider purchasing full version to get all pages,
                  features, assets and permission to remove footer credits.
                </p>
                <a
                  href="https://rebrand.ly/interior-ud"
                  rel="nofollow"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium opacity-0 animate-fadeInUp ml-[100px]"
                  style={{
                    animationDelay: "2.3s",
                    animationFillMode: "forwards",
                  }}
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right-side static background image ABOVE the slider */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center hidden lg:block z-10"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/736x/90/35/58/903558b9f2acdc341bb3c46811261a80.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
