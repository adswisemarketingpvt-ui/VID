import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Team = () => {
  const team = [
    {
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      name: "Rob Hope",
      position: "CEO & Founder",
      delay: "0.4s"
    },
    {
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      name: "Patric Green",
      position: "Chief Designer",
      delay: "0.8s"
    },
    {
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      name: "Daryl Dixon",
      position: "Consultant",
      delay: "1.2s"
    },
    {
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      name: "Mark Parker",
      position: "Intern",
      delay: "1.6s"
    }
  ];

  return (
    <section id="team" className="pt-32 pb-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-1/2 w-full">
            <div className="text-center pb-5">
              <h5 className="text-blue-600 text-lg font-medium mb-4">Meet The Team</h5>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Expert Designers</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {team.map((member, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full px-4">
              <div className="text-center mt-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt="Team" 
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    <a href="#" className="hover:text-blue-600 transition-colors">{member.name}</a>
                  </h4>
                  <span className="text-gray-600">{member.position}</span>
                  <ul className="flex justify-center space-x-3 mt-6">
                    <li>
                      <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Facebook className="w-4 h-4" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;