import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts - in a real app, this would come from an API
  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        title: '10 Interior Design Trends for 2024',
        excerpt: 'Discover the latest trends that will shape interior design this year, from sustainable materials to bold color palettes.',
        content: 'Full article content here...',
        author: 'Sarah Johnson',
        date: '2024-01-15',
        category: 'Trends',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '5 min read',
        tags: ['trends', 'design', '2024'],
      },
      {
        id: 2,
        title: 'How to Choose the Perfect Color Palette',
        excerpt: 'Learn the psychology behind colors and how to create harmonious color schemes for your home.',
        content: 'Full article content here...',
        author: 'Michael Chen',
        date: '2024-01-10',
        category: 'Tips',
        image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '7 min read',
        tags: ['colors', 'tips', 'psychology'],
      },
      {
        id: 3,
        title: 'Small Space, Big Impact: Maximizing Tiny Homes',
        excerpt: 'Creative solutions and clever design tricks to make small spaces feel larger and more functional.',
        content: 'Full article content here...',
        author: 'Emma Davis',
        date: '2024-01-05',
        category: 'Small Spaces',
        image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '6 min read',
        tags: ['small-spaces', 'tips', 'functionality'],
      },
      {
        id: 4,
        title: 'Sustainable Design: Eco-Friendly Interior Solutions',
        excerpt: 'Explore sustainable materials and practices that create beautiful interiors while protecting the environment.',
        content: 'Full article content here...',
        author: 'David Wilson',
        date: '2024-01-01',
        category: 'Sustainability',
        image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '8 min read',
        tags: ['sustainability', 'eco-friendly', 'materials'],
      },
    ];
    setPosts(samplePosts);
  }, []);

  const categories = ['all', 'Trends', 'Tips', 'Small Spaces', 'Sustainability'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-5xl font-bold mb-6">Design Insights & Ideas</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and inspiration in interior design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
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
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest design tips and trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;