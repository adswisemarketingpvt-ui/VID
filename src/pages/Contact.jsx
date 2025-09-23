import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@interior.com', 'support@interior.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Design Street', 'New York, NY 10001'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    },
  ];

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
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to transform your space? Let's discuss your project and bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We'd love to hear about your project. Whether you're looking for a complete 
                  redesign or just need some design advice, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center"
              >
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Design Street, New York, NY</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      {...register('name')}
                      className="form-input"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="form-error">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      {...register('phone')}
                      className="form-input"
                      placeholder="Your phone number"
                    />
                    {errors.phone && (
                      <p className="form-error">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select {...register('subject')} className="form-input">
                      <option value="">Select a subject</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="residential">Residential Project</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="form-error">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    {...register('message')}
                    className="form-input form-textarea"
                    placeholder="Tell us about your project..."
                    rows={6}
                  />
                  {errors.message && (
                    <p className="form-error">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary justify-center"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our design process and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope, but most residential projects take 6-12 weeks from concept to completion.',
              },
              {
                question: 'Do you work with existing furniture?',
                answer: 'Absolutely! We can incorporate your existing pieces into the new design or recommend updates as needed.',
              },
              {
                question: 'What is included in your design fee?',
                answer: 'Our design fee includes consultation, space planning, 3D renderings, material selection, and project management.',
              },
              {
                question: 'Do you handle construction and installation?',
                answer: 'We coordinate with trusted contractors and oversee installation to ensure your design vision is perfectly executed.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;