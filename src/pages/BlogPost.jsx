import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const samplePost = {
        id: parseInt(id),
        title: '10 Interior Design Trends for 2024',
        content: `
          <p>Interior design is constantly evolving, and 2024 brings exciting new trends that blend functionality with aesthetic appeal. Here are the top 10 trends that will define interior spaces this year.</p>
          
          <h2>1. Sustainable Materials</h2>
          <p>Eco-friendly materials are taking center stage. From reclaimed wood to recycled metals, sustainability is no longer just a buzzword—it's a design imperative.</p>
          
          <h2>2. Warm Earth Tones</h2>
          <p>Rich, warm colors like terracotta, ochre, and deep browns are replacing the cool grays of previous years. These colors create cozy, inviting spaces that feel grounded and natural.</p>
          
          <h2>3. Curved Furniture</h2>
          <p>Soft, curved lines are dominating furniture design. From rounded sofas to circular dining tables, curves add a sense of flow and organic beauty to interiors.</p>
          
          <h2>4. Maximalist Wallpapers</h2>
          <p>Bold, patterned wallpapers are making a comeback. Think tropical prints, geometric patterns, and artistic murals that serve as statement pieces.</p>
          
          <h2>5. Multi-Functional Spaces</h2>
          <p>With remote work becoming permanent for many, spaces need to serve multiple purposes. Furniture that transforms and rooms that adapt are essential.</p>
        `,
        author: 'Sarah Johnson',
        date: '2024-01-15',
        category: 'Trends',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: '5 min read',
        tags: ['trends', 'design', '2024', 'sustainability'],
      };
      setPost(samplePost);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link to="/blog" className="btn btn-primary">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors mb-4"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart size={20} />
                  <span>24</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle size={20} />
                  <span>8</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 p-6 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-xl font-bold">{post.author}</h4>
                <p className="text-gray-600">Interior Design Expert</p>
                <p className="text-sm text-gray-500 mt-2">
                  Passionate about creating beautiful, functional spaces that enhance daily life.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* This would typically show related posts */}
            <div className="text-center text-gray-500">
              <p>Related articles would appear here based on tags and categories.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;