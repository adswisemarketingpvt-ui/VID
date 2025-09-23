import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="card group cursor-pointer"
    >
      <div className="text-center">
        <div className="text-6xl mb-6">{service.icon}</div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        <div className="flex items-center justify-center text-blue-500 font-medium group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;