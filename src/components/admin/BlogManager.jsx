import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react';
import BlogEditor from './BlogEditor';
import toast from 'react-hot-toast';

const BlogManager = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '10 Interior Design Trends for 2024',
      excerpt: 'Discover the latest trends that will shape interior design this year...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Trends',
      status: 'published',
      views: 1250,
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Color Palette',
      excerpt: 'Learn the psychology behind colors and how to create harmonious...',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Tips',
      status: 'draft',
      views: 0,
    },
  ]);

  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreatePost = () => {
    setEditingPost(null);
    setShowEditor(true);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== postId));
      toast.success('Post deleted successfully');
    }
  };

  const handleSavePost = (postData) => {
    if (editingPost) {
      // Update existing post
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...postData, id: editingPost.id }
          : post
      ));
      toast.success('Post updated successfully');
    } else {
      // Create new post
      const newPost = {
        ...postData,
        id: Math.max(...posts.map(p => p.id)) + 1,
        views: 0,
      };
      setPosts([newPost, ...posts]);
      toast.success('Post created successfully');
    }
    setShowEditor(false);
    setEditingPost(null);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showEditor) {
    return (
      <BlogEditor
        post={editingPost}
        onSave={handleSavePost}
        onCancel={() => {
          setShowEditor(false);
          setEditingPost(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">Blog Posts</h2>
          <p className="text-gray-600">Manage your blog content</p>
        </div>
        <button
          onClick={handleCreatePost}
          className="btn btn-primary"
        >
          <Plus size={20} />
          New Post
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-input pl-10"
        />
      </div>

      {/* Posts List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Title</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Category</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Views</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Date</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPosts.map((post, index) => (
                <motion.tr
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="py-4 px-6">
                    <div>
                      <h3 className="font-medium text-gray-900">{post.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                      {post.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{post.views}</td>
                  <td className="py-4 px-6 text-gray-600">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                        className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                        title="View"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEditPost(post)}
                        className="p-2 text-gray-600 hover:text-green-500 transition-colors"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;