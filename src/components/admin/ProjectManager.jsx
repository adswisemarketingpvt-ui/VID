import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Search, ExternalLink } from 'lucide-react';
import ProjectEditor from './ProjectEditor';
import toast from 'react-hot-toast';

const ProjectManager = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Modern Living Room Redesign',
      description: 'Complete transformation of a 500 sq ft living space with contemporary furniture and lighting.',
      category: 'Residential',
      client: 'Johnson Family',
      completionDate: '2024-01-10',
      budget: '$15,000',
      status: 'completed',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
      ],
      tags: ['modern', 'living-room', 'residential'],
    },
    {
      id: 2,
      title: 'Corporate Office Space',
      description: 'Open-plan office design for a tech startup with collaborative spaces and private meeting rooms.',
      category: 'Commercial',
      client: 'TechCorp Inc.',
      completionDate: '2024-01-05',
      budget: '$45,000',
      status: 'completed',
      images: [
        'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400',
      ],
      tags: ['office', 'commercial', 'modern'],
    },
  ]);

  const [showEditor, setShowEditor] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateProject = () => {
    setEditingProject(null);
    setShowEditor(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowEditor(true);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== projectId));
      toast.success('Project deleted successfully');
    }
  };

  const handleSaveProject = (projectData) => {
    if (editingProject) {
      setProjects(projects.map(project => 
        project.id === editingProject.id 
          ? { ...project, ...projectData, id: editingProject.id }
          : project
      ));
      toast.success('Project updated successfully');
    } else {
      const newProject = {
        ...projectData,
        id: Math.max(...projects.map(p => p.id)) + 1,
      };
      setProjects([newProject, ...projects]);
      toast.success('Project created successfully');
    }
    setShowEditor(false);
    setEditingProject(null);
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showEditor) {
    return (
      <ProjectEditor
        project={editingProject}
        onSave={handleSaveProject}
        onCancel={() => {
          setShowEditor(false);
          setEditingProject(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-gray-600">Manage your project portfolio</p>
        </div>
        <button
          onClick={handleCreateProject}
          className="btn btn-primary"
        >
          <Plus size={20} />
          New Project
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-input pl-10"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === 'completed'
                    ? 'bg-green-100 text-green-600'
                    : project.status === 'in-progress'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div><strong>Client:</strong> {project.client}</div>
                <div><strong>Budget:</strong> {project.budget}</div>
                <div><strong>Completed:</strong> {new Date(project.completionDate).toLocaleDateString()}</div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEditProject(project)}
                  className="flex-1 btn btn-outline text-sm"
                >
                  <Edit size={16} />
                  Edit
                </button>
                <button
                  onClick={() => window.open(`/projects/${project.id}`, '_blank')}
                  className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                  title="View Project"
                >
                  <ExternalLink size={16} />
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
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

export default ProjectManager;