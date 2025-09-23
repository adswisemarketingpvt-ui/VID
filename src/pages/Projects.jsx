import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Home',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A clean, minimalist approach to modern living with emphasis on natural light and open spaces.',
      client: 'Private Residence',
      year: '2024',
      area: '2,500 sq ft',
    },
    {
      id: 2,
      title: 'Luxury Penthouse Suite',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sophisticated penthouse design featuring custom furniture and premium finishes.',
      client: 'Private Client',
      year: '2024',
      area: '4,000 sq ft',
    },
    {
      id: 3,
      title: 'Tech Startup Office',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dynamic workspace design promoting collaboration and creativity for a growing tech company.',
      client: 'TechCorp Inc.',
      year: '2023',
      area: '8,000 sq ft',
    },
    {
      id: 4,
      title: 'Boutique Hotel Lobby',
      category: 'Hospitality',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant hotel lobby design creating a memorable first impression for guests.',
      client: 'Boutique Hotel Group',
      year: '2023',
      area: '1,200 sq ft',
    },
    {
      id: 5,
      title: 'Sustainable Family Home',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Eco-friendly home design using sustainable materials and energy-efficient solutions.',
      client: 'Green Family',
      year: '2023',
      area: '3,200 sq ft',
    },
    {
      id: 6,
      title: 'Retail Flagship Store',
      category: 'Retail',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Brand-focused retail space design that enhances customer experience and drives sales.',
      client: 'Fashion Brand',
      year: '2023',
      area: '2,800 sq ft',
    },
  ];

  const categories = ['all', 'Residential', 'Commercial', 'Hospitality', 'Retail'];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

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
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our portfolio of completed projects showcasing our expertise 
              across residential, commercial, and hospitality spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter size={20} className="text-gray-600" />
              <span className="font-medium text-gray-900">Filter by category:</span>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-blue-500 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div>
                      <strong className="text-gray-900">Client:</strong>
                      <br />
                      {project.client}
                    </div>
                    <div>
                      <strong className="text-gray-900">Area:</strong>
                      <br />
                      {project.area}
                    </div>
                  </div>
                  
                  <button className="w-full btn btn-outline group">
                    View Project Details
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
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
            <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary together.
            </p>
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;