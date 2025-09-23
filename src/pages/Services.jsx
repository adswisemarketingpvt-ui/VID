import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Interior Design',
      description: 'Transform your home into a beautiful, functional space that reflects your personality.',
      price: 'Starting at $2,500',
      features: [
        'Space Planning & Layout',
        'Color & Material Selection',
        '3D Visualization',
        'Furniture Selection',
        'Lighting Design',
        'Project Management',
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      id: 2,
      title: 'Commercial Design',
      description: 'Create inspiring work environments that boost productivity and reflect your brand.',
      price: 'Starting at $5,000',
      features: [
        'Office Space Planning',
        'Brand Integration',
        'Ergonomic Solutions',
        'Acoustic Design',
        'Technology Integration',
        'Sustainability Focus',
      ],
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false,
    },
    {
      id: 3,
      title: 'Design Consultation',
      description: 'Expert advice and guidance for your DIY projects or existing spaces.',
      price: 'Starting at $150/hour',
      features: [
        'Design Assessment',
        'Color Consultation',
        'Furniture Recommendations',
        'Layout Optimization',
        'Style Direction',
        'Budget Planning',
      ],
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false,
    },
    {
      id: 4,
      title: 'Kitchen & Bath Design',
      description: 'Specialized design services for kitchens and bathrooms with focus on functionality.',
      price: 'Starting at $3,500',
      features: [
        'Custom Cabinetry Design',
        'Appliance Selection',
        'Plumbing & Electrical Planning',
        'Storage Solutions',
        'Material Selection',
        'Installation Coordination',
      ],
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false,
    },
    {
      id: 5,
      title: 'Sustainable Design',
      description: 'Eco-friendly design solutions that are beautiful and environmentally responsible.',
      price: 'Starting at $3,000',
      features: [
        'Sustainable Material Selection',
        'Energy Efficient Solutions',
        'Indoor Air Quality',
        'Waste Reduction',
        'Local Sourcing',
        'Green Certifications',
      ],
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false,
    },
    {
      id: 6,
      title: 'Virtual Design Service',
      description: 'Complete design service delivered remotely with detailed plans and shopping lists.',
      price: 'Starting at $1,200',
      features: [
        'Virtual Consultation',
        'Detailed Floor Plans',
        'Shopping Lists',
        'Installation Guides',
        'Ongoing Support',
        'Revision Rounds',
      ],
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive interior design services 
              tailored to your unique needs and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full btn btn-primary justify-center group"
                  >
                    Get Started
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We learn about your needs, style, and budget' },
              { step: '02', title: 'Design', description: 'Create detailed plans and 3D visualizations' },
              { step: '03', title: 'Development', description: 'Source materials and coordinate with contractors' },
              { step: '04', title: 'Delivery', description: 'Install and style your completed space' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a space that exceeds your expectations.
            </p>
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;