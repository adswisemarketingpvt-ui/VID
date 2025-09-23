import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, FileText, Briefcase, Image } from 'lucide-react';
import BlogManager from '../components/admin/BlogManager';
import ServiceManager from '../components/admin/ServiceManager';
import ProjectManager from '../components/admin/ProjectManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('blog');

  const tabs = [
    { id: 'blog', label: 'Blog Posts', icon: FileText },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Image },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'blog':
        return <BlogManager />;
      case 'services':
        return <ServiceManager />;
      case 'projects':
        return <ProjectManager />;
      default:
        return <BlogManager />;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your content, services, and projects</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;