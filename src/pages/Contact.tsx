import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    message: ''
  });

  const [showContactModal, setShowContactModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowContactModal(true);
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2000);
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowEnquiryModal(true);
      setEnquiryForm({ name: '', email: '', phone: '', class: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Education Street", "Academic City, State - 123456", "Near Central Library"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us", 
      details: ["+91 98765 43210", "+91 98765 43211", "Toll Free: 1800-123-4567"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["sfscbsetry@gmail.com", "admissions@sfscbse.edu", "info@sfscbse.edu"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with us for admissions, enquiries, or any information about our school
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're here to help with any questions or information you need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${info.color} p-4 rounded-2xl mx-auto w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-200 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Find Us</h2>
            <p className="text-xl text-gray-200">
              Conveniently located in the heart of the academic district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 overflow-hidden"
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                <p className="text-lg opacity-90">SFS CBSE School Location</p>
                <p className="text-sm opacity-75 mt-2">123 Education Street, Academic City</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* General Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-8 w-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Send Message</h3>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Subject *</label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    >
                      <option value="">Select Subject</option>
                      <option value="admissions">Admissions Enquiry</option>
                      <option value="academics">Academic Information</option>
                      <option value="facilities">Facilities Tour</option>
                      <option value="fees">Fee Structure</option>
                      <option value="transport">Transportation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-blue-900/30 border-t-blue-900 rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Quick Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center space-x-3 mb-6">
                <User className="h-8 w-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Quick Enquiry</h3>
              </div>

              <form onSubmit={handleEnquirySubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Student Name *</label>
                  <input
                    type="text"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder="Student's full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Parent Email *</label>
                    <input
                      type="email"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({...enquiryForm, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder="Parent's email"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder="Contact number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Class Seeking Admission *</label>
                  <select
                    value={enquiryForm.class}
                    onChange={(e) => setEnquiryForm({...enquiryForm, class: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  >
                    <option value="">Select Class</option>
                    <option value="pre-kg">Pre-KG</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={`class-${i + 1}`}>Class {i + 1}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Additional Message</label>
                  <textarea
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({...enquiryForm, message: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 bg-blue-900/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-200">
                    <p className="font-medium mb-1">Quick Response Guarantee</p>
                    <p>We'll get back to you within 24 hours with detailed information about admission procedures and next steps.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md w-full text-center"
          >
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
            <p className="text-gray-200 mb-6">
              Thank you for contacting us. We'll respond to your message within 24 hours.
            </p>
            <button
              onClick={() => setShowContactModal(false)}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md w-full text-center"
          >
            <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Enquiry Submitted!</h3>
            <p className="text-gray-200 mb-6">
              We've received your admission enquiry. Our admissions team will contact you soon with detailed information.
            </p>
            <button
              onClick={() => setShowEnquiryModal(false)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}