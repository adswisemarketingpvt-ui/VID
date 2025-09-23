import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, X, Upload, Plus, Trash2 } from 'lucide-react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  client: yup.string().required('Client is required'),
  budget: yup.string().required('Budget is required'),
  category: yup.string().required('Category is required'),
  completionDate: yup.string().required('Completion date is required'),
  tags: yup.string().required('Tags are required'),
});

const ProjectEditor = ({ project, onSave, onCancel }) => {
  const [imagePreviews, setImagePreviews] = useState(project?.images || []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      client: project?.client || '',
      budget: project?.budget || '',
      category: project?.category || '',
      completionDate: project?.completionDate || '',
      status: project?.status || 'planning',
      tags: project?.tags?.join(', ') || '',
    },
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews(prev => [...prev, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data) => {
    const projectData = {
      ...data,
      tags: data.tags.split(',').map(tag => tag.trim()),
      images: imagePreviews,
    };
    onSave(projectData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold">
          {project ? 'Edit Project' : 'Create New Project'}
        </h2>
        <button onClick={onCancel} className="btn btn-outline">
          <X size={20} />
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="form-group">
            <label className="form-label">Project Title</label>
            <input
              {...register('title')}
              className="form-input"
              placeholder="Enter project title"
            />
            {errors.title && (
              <p className="form-error">{errors.title.message}</p>
            )}
          </div>

          {/* Client */}
          <div className="form-group">
            <label className="form-label">Client</label>
            <input
              {...register('client')}
              className="form-input"
              placeholder="Client name"
            />
            {errors.client && (
              <p className="form-error">{errors.client.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Category */}
          <div className="form-group">
            <label className="form-label">Category</label>
            <select {...register('category')} className="form-input">
              <option value="">Select category</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Retail">Retail</option>
            </select>
            {errors.category && (
              <p className="form-error">{errors.category.message}</p>
            )}
          </div>

          {/* Budget */}
          <div className="form-group">
            <label className="form-label">Budget</label>
            <input
              {...register('budget')}
              className="form-input"
              placeholder="e.g., $15,000"
            />
            {errors.budget && (
              <p className="form-error">{errors.budget.message}</p>
            )}
          </div>

          {/* Status */}
          <div className="form-group">
            <label className="form-label">Status</label>
            <select {...register('status')} className="form-input">
              <option value="planning">Planning</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>
        </div>

        {/* Completion Date */}
        <div className="form-group">
          <label className="form-label">Completion Date</label>
          <input
            {...register('completionDate')}
            type="date"
            className="form-input max-w-xs"
          />
          {errors.completionDate && (
            <p className="form-error">{errors.completionDate.message}</p>
          )}
        </div>

        {/* Project Images */}
        <div className="form-group">
          <label className="form-label">Project Images</label>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="project-images-upload"
              />
              <label
                htmlFor="project-images-upload"
                className="btn btn-outline cursor-pointer"
              >
                <Upload size={20} />
                Upload Images
              </label>
            </div>
            
            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {imagePreviews.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            {...register('description')}
            className="form-input form-textarea"
            placeholder="Detailed description of the project"
            rows={4}
          />
          {errors.description && (
            <p className="form-error">{errors.description.message}</p>
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
            Separate tags with commas (e.g., modern, residential, luxury)
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
            {isSubmitting ? 'Saving...' : 'Save Project'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ProjectManager;