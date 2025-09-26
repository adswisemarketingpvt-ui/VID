import React from 'react';
import { PaintBucket, Briefcase, Home, Users, Handshake, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: PaintBucket,
      title: "Interior Design",
      description: "Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.",
      delay: "0.4s"
    },
    {
      icon: Briefcase,
      title: "Design Consultancy",
      description: "Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.",
      delay: "0.8s"
    },
    {
      icon: Home,
      title: "Residential Design",
      description: "Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.",
      delay: "1.2s"
    },
    {
      icon: Briefcase,
      title: "Commercial Design",
      description: "Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.",
      delay: "0.4s"
    },
    {
      icon: Handshake,
      title: "Hospitality Design",
      description: "Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.",
      delay: "0.8s"
    },
    {
      icon: TrendingUp,
      title: "Co-working Space Design",
      description: "Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.",
      delay: "1.2s"
    }
  ];

  return (
    <section id="service" className="pt-32 pb-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-1/2 w-full">
            <div className="text-center pb-5">
              <h5 className="text-blue-600 text-lg font-medium mb-4">Our Services</h5>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">What We Do?</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((service, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 sm:w-2/3 w-full px-4">
              <div className="text-center mt-8 bg-white p-8  shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;