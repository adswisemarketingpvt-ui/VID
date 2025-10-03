import React from "react";

/**
 * About section that uses a single uploaded image twice to mimic
 * the stacked/overlapping UI. Pass your image path via `uploadedSrc`.
 *
 * Example:
 * <About uploadedSrc="/mnt/data/1.png" />
 * or (recommended in real apps) <About uploadedSrc="/1.png" />
 */
const About = ({ uploadedSrc = "/mnt/data/1.png" }) => {
  return (
    <section id="about" className="pt-20 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            {/* decorative dot pattern (optional) */}
            <div className="hidden sm:block absolute -right-6 top-20 w-40 h-40 bg-[radial-gradient(circle,_#e5e7eb_1.5px,_transparent_2px)] [background-size:12px_12px] opacity-60" />

            {/* main container to position children */}
            <div className="relative h-[420px] sm:h-[460px] lg:h-[520px]">
              {/* Top-left image */}
              <div className="absolute left-0 top-0">
                <img
                  src={
                    "https://i.pinimg.com/1200x/81/ee/08/81ee0887a23dc52654c40b655c776e4c.jpg"
                  }
                  alt="Project preview"
                  className="w-72 sm:w-80 h-52 sm:h-56 object-cover rounded-lg shadow-xl"
                />
              </div>

              {/* Bottom-right image */}
              <div className="absolute right-0 bottom-0">
                <img
                  src={
                    "https://i.pinimg.com/736x/98/b2/bd/98b2bdc0f1adb18a66fb125fbe4c1d86.jpg"
                  }
                  alt="Project detail"
                  className="w-80 sm:w-[22rem] h-60 sm:h-64 object-cover rounded-lg shadow-xl"
                />
              </div>

              {/* Years Experience badge */}
              <div className="absolute left-10 sm:left-16 top-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* white border plate */}
                  <div className="absolute -inset-2 rounded-lg bg-white shadow-lg" />
                  <a
                    href="#"
                    className="
  relative inline-flex items-center justify-center
  px-6 py-3 sm:px-7 sm:py-4 rounded-lg
  bg-gradient-to-r from-yellow-300 via-[#FFD700] to-[#B8860B]
  text-amber-900 font-semibold
  shadow-[0_15px_30px_rgba(255,215,0,0.35)]
  hover:from-yellow-400 hover:via-[#FFD700] hover:to-[#996515]
  active:scale-95 transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300
"
                  >
                    <div className="text-left leading-tight">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">
                        27
                      </div>
                      <div className="text-xs sm:text-sm font-semibold tracking-wide text-white uppercase">
                        Years Experience
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="lg:pl-4">
            <h4 className="text-rose-600 text-base sm:text-lg font-semibold mb-2">
              About Us
            </h4>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Reasons to Choose
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>

            <p className="text-gray-600 leading-relaxed mt-5">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>

            <a
              href="#"
              className="inline-block mt-6 bg-[#005561] hover:bg-[#004B55] text-white px-8 py-4  transition-colors font-medium ]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
