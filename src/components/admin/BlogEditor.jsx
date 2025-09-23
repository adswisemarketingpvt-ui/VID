import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, X, Eye, Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  excerpt: yup.string().required('Excerpt is required'),
  content: yup.string().required('Content is required'),
  category: yup.string().required('Category is required'),
  author: yup.string().required('Author is required'),
  tags: yup.string().required('Tags are required'),
});

const BlogEditor = ({ post, onSave, onCancel }) => {
  const [imagePreview, setImagePreview] = useState(post?.image || '');
  const [isPreview, setIsPreview] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: post?.title || '',
      excerpt: post?.excerpt || '',
      content: post?.content || '',
      category: post?.category || '',
      author: post?.author || 'Admin',
      tags: post?.tags?.join(', ') || '',
      status: post?.status || 'draft',
    },
  });

  const watchedContent = watch();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const postData = {
      ...data,
      tags: data.tags.split(',').map(tag => tag.trim()),
      image: imagePreview,
      date: post?.date || new Date().toISOString().split('T')[0],
    };
    onSave(postData);
  };

  if (isPreview) {
    return (
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold">Preview</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setIsPreview(false)}
              className="btn btn-outline"
            >
              <Edit size={20} />
              Edit
            </button>
            <button onClick={onCancel} className="btn btn-outline">
              <X size={20} />
              Close
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            <h1 className="text-4xl font-bold mb-4">{watchedContent.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{watchedContent.excerpt}</p>
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: watchedContent.content.replace(/\n/g, '<br>') }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold">
          {post ? 'Edit Post' : 'Create New Post'}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setIsPreview(true)}
            className="btn btn-outline"
          >
            <Eye size={20} />
            Preview
          </button>
          <button onClick={onCancel} className="btn btn-outline">
            <X size={20} />
            Cancel
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              {...register('title')}
              className="form-input"
              placeholder="Enter post title"
            />
            {errors.title && (
              <p className="form-error">{errors.title.message}</p>
            )}
          </div>

          {/* Category */}
          <div className="form-group">
            <label className="form-label">Category</label>
            <select {...register('category')} className="form-input">
              <option value="">Select category</option>
              <option value="Trends">Trends</option>
              <option value="Tips">Tips</option>
              <option value="Small Spaces">Small Spaces</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Commercial">Commercial</option>
            </select>
            {errors.category && (
              <p className="form-error">{errors.category.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Author */}
          <div className="form-group">
            <label className="form-label">Author</label>
            <input
              {...register('author')}
              className="form-input"
              placeholder="Author name"
            />
            {errors.author && (
              <p className="form-error">{errors.author.message}</p>
            )}
          </div>

          {/* Status */}
          <div className="form-group">
            <label className="form-label">Status</label>
            <select {...register('status')} className="form-input">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        {/* Featured Image */}
        <div className="form-group">
          <label className="form-label">Featured Image</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="btn btn-outline cursor-pointer"
            >
              <Upload size={20} />
              Upload Image
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Excerpt */}
        <div className="form-group">
          <label className="form-label">Excerpt</label>
          <textarea
            {...register('excerpt')}
            className="form-input form-textarea"
            placeholder="Brief description of the post"
            rows={3}
          />
          {errors.excerpt && (
            <p className="form-error">{errors.excerpt.message}</p>
          )}
        </div>

        {/* Content */}
        <div className="form-group">
          <label className="form-label">Content</label>
          <textarea
            {...register('content')}
            className="form-input form-textarea"
            placeholder="Write your post content here..."
            rows={12}
          />
          {errors.content && (
            <p className="form-error">{errors.content.message}</p>
          )}
        </div>

        {/* Tags */}
        <div className="form-group">
          <label className="form-label">Tags</label>
          <input
            {...register('tags')}
            className="form-input"
            placeholder="Enter tags separated by commas"
          />
          {errors.tags && (
            <p className="form-error">{errors.tags.message}</p>
          )}
          <p className="text-sm text-gray-500 mt-1">
            Separate tags with commas (e.g., design, trends, tips)
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
          >
            <Save size={20} />
            {isSubmitting ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default BlogEditor;