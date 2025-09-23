import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import ServiceEditor from './ServiceEditor';
import toast from 'react-hot-toast';

const ServiceManager = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Interior Design',
      description: 'Complete interior design services for residential and commercial spaces.',
      price: 'Starting at $2,500',
      features: ['Space Planning', 'Color Consultation', '3D Visualization', 'Project Management'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Residential',
      status: 'active',
    },
    {
      id: 2,
      title: 'Commercial Design',
      description: 'Professional office and retail space design solutions.',
      price: 'Starting at $5,000',
      features: ['Office Layout', 'Brand Integration', 'Ergonomic Solutions', 'Lighting Design'],
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Commercial',
      status: 'active',
    },
  ]);

  const [showEditor, setShowEditor] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateService = () => {
    setEditingService(null);
    setShowEditor(true);
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setShowEditor(true);
  };

  const handleDeleteService = (serviceId) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(service => service.id !== serviceId));
      toast.success('Service deleted successfully');
    }
  };

  const handleSaveService = (serviceData) => {
    if (editingService) {
      setServices(services.map(service => 
        service.id === editingService.id 
          ? { ...service, ...serviceData, id: editingService.id }
          : service
      ));
      toast.success('Service updated successfully');
    } else {
      const newService = {
        ...serviceData,
        id: Math.max(...services.map(s => s.id)) + 1,
      };
      setServices([newService, ...services]);
      toast.success('Service created successfully');
    }
    setShowEditor(false);
    setEditingService(null);
  };

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showEditor) {
    return (
      <ServiceEditor
        service={editingService}
        onSave={handleSaveService}
        onCancel={() => {
          setShowEditor(false);
          setEditingService(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">Services</h2>
          <p className="text-gray-600">Manage your service offerings</p>
        </div>
        <button
          onClick={handleCreateService}
          className="btn btn-primary"
        >
          <Plus size={20} />
          New Service
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-input pl-10"
        />
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                  {service.category}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  service.status === 'active'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {service.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <p className="text-lg font-bold text-blue-600 mb-4">{service.price}</p>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEditService(service)}
                  className="flex-1 btn btn-outline text-sm"
                >
                  <Edit size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceManager;