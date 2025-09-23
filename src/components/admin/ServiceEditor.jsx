import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, X, Upload, Plus, Trash2 } from 'lucide-react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  price: yup.string().required('Price is required'),
  category: yup.string().required('Category is required'),
  features: yup.array().of(
    yup.object({
      name: yup.string().required('Feature name is required'),
    })
  ).min(1, 'At least one feature is required'),
});

const ServiceEditor = ({ service, onSave, onCancel }) => {
  const [imagePreview, setImagePreview] = useState(service?.image || '');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: service?.title || '',
      description: service?.description || '',
      price: service?.price || '',
      category: service?.category || '',
      status: service?.status || 'active',
      features: service?.features?.map(feature => ({ name: feature })) || [{ name: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'features',
  });

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
    const serviceData = {
      ...data,
      features: data.features.map(feature => feature.name).filter(name => name.trim()),
      image: imagePreview,
    };
    onSave(serviceData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold">
          {service ? 'Edit Service' : 'Create New Service'}
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
            <label className="form-label">Service Title</label>
            <input
              {...register('title')}
              className="form-input"
              placeholder="Enter service title"
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
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Consultation">Consultation</option>
              <option value="Planning">Planning</option>
            </select>
            {errors.category && (
              <p className="form-error">{errors.category.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Price */}
          <div className="form-group">
            <label className="form-label">Price</label>
            <input
              {...register('price')}
              className="form-input"
              placeholder="e.g., Starting at $2,500"
            />
            {errors.price && (
              <p className="form-error">{errors.price.message}</p>
            )}
          </div>

          {/* Status */}
          <div className="form-group">
            <label className="form-label">Status</label>
            <select {...register('status')} className="form-input">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Service Image */}
        <div className="form-group">
          <label className="form-label">Service Image</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="service-image-upload"
            />
            <label
              htmlFor="service-image-upload"
              className="btn btn-outline cursor-pointer"
            >
              <Upload size={20} />
              Upload Image
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-24 object-cover rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Description */}
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            {...register('description')}
            className="form-input form-textarea"
            placeholder="Detailed description of the service"
            rows={4}
          />
          {errors.description && (
            <p className="form-error">{errors.description.message}</p>
          )}
        </div>

        {/* Features */}
        <div className="form-group">
          <div className="flex items-center justify-between mb-4">
            <label className="form-label mb-0">Features</label>
            <button
              type="button"
              onClick={() => append({ name: '' })}
              className="btn btn-outline text-sm"
            >
              <Plus size={16} />
              Add Feature
            </button>
          </div>
          
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-3">
                <input
                  {...register(`features.${index}.name`)}
                  className="form-input"
                  placeholder="Feature name"
                />
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
          {errors.features && (
            <p className="form-error">{errors.features.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
          >
            <Save size={20} />
            {isSubmitting ? 'Saving...' : 'Save Service'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ServiceManager;