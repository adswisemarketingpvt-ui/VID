import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      name: "Fajar",
      position: "Random Customer",
      text: "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.",
    },
    {
      image:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      name: "Alina",
      position: "Tesla Motors",
      text: "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.",
    },
    {
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      name: "Celina",
      position: "CEO, Alo",
      text: "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1
    );
  };

  return (
    <section id="testimonial" className="pt-10 pb-32 relative">
      {/* Background Shapes */}
      <div className="text-center pb-10">
              <h5 className="text-blue-600 text-lg font-medium mb-4">Meet The Team</h5>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Expert Designers</h2>
            </div>
      <div className="container mx-auto px-4">
        <div className="relative bg-cover bg-center py-20 px-8  overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  >
    <source src="https://vishwaswamiinteriors.com/bg-v.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>


          <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
          <div className="relative z-10">
            <div className="flex justify-end">
              <div className="xl:w-1/3 xl:ml-auto lg:w-5/12 lg:ml-auto md:w-2/3 md:mx-auto sm:w-5/6 sm:mx-auto w-full">
                <div className="relative">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="flex-none w-full text-center"
                        >
                          <div className="relative mb-5">
                            <img
                              src={testimonial.image}
                              alt="Testimonial"
                              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white"
                            />
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-2 rounded-full">
                              <Quote className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="mt-5">
                            <p className="text-white leading-relaxed mb-4">
                              {testimonial.text}
                            </p>
                            <h5 className="text-white text-lg font-semibold mt-4">
                              {testimonial.name}
                            </h5>
                            <span className="text-gray-300">
                              {testimonial.position}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-center space-x-4 mt-8">
                    <button
                      onClick={prevSlide}
                      className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
