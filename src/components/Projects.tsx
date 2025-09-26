import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      title: "Home Interior Design"
    },
    {
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      title: "Home Interior Design"
    },
    {
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      title: "Home Interior Design"
    },
    {
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      title: "Home Interior Design"
    },
    {
      image: "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      title: "Home Interior Design"
    },
    {
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      title: "Home Interior Design"
    },
    {
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      title: "Home Interior Design"
    }
  ];

  const projectsPerView = 3;
  const maxSlide = Math.ceil(projects.length / projectsPerView) - 1;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === maxSlide ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? maxSlide : currentSlide - 1);
  };

  return (
    <section id="project" className="pt-32 pb-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-1/2 w-full">
            <div className="text-center pb-12">
              <h5 className="text-blue-600 text-lg font-medium mb-4">Featured Works</h5>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Projects You May Love</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / projectsPerView)}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="flex-none w-1/3 px-2">
                <div className="group relative overflow-hidden  shadow-lg">
                  <img 
                    src={project.image} 
                    alt="Project" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <a href="#" className="text-white text-xl font-semibold hover:text-blue-300 transition-colors">
                        {project.title}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Projects;