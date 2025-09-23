import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block px-3 py-1 bg-blue-500 rounded-full text-sm font-medium mb-2">
              {project.category}
            </span>
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
          <div className="absolute top-4 right-4">
            <ExternalLink size={20} className="text-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
          {project.category}
        </span>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600">
          A stunning example of modern interior design that combines functionality with aesthetic appeal.
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;