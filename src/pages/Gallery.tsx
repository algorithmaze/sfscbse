import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Award, Camera } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Science Fair 2024",
      category: "events",
      year: "2024",
      description: "Students showcasing innovative science projects"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Sports Day Champions",
      category: "sports",
      year: "2024",
      description: "Annual sports day celebration and awards"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Campus Building",
      category: "infrastructure",
      year: "2024",
      description: "Our state-of-the-art academic building"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Graduation Ceremony",
      category: "events",
      year: "2024",
      description: "Class of 2024 graduation celebration"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Smart Classroom",
      category: "infrastructure",
      year: "2024",
      description: "Interactive digital learning environment"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cricket Tournament",
      category: "sports",
      year: "2024",
      description: "Inter-school cricket championship"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Library Reading Session",
      category: "academic",
      year: "2024",
      description: "Students in the well-equipped library"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Art Exhibition",
      category: "events",
      year: "2024",
      description: "Annual student art and craft exhibition"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Science Laboratory",
      category: "infrastructure",
      year: "2024",
      description: "Advanced science lab for experiments"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Basketball Championship",
      category: "sports",
      year: "2024",
      description: "School basketball team in action"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cultural Performance",
      category: "events",
      year: "2023",
      description: "Annual cultural fest performance"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Medical Checkup",
      category: "academic",
      year: "2024",
      description: "Annual health checkup program"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Photos', icon: Camera },
    { key: 'events', label: 'Events', icon: Calendar },
    { key: 'sports', label: 'Sports', icon: Award },
    { key: 'infrastructure', label: 'Infrastructure', icon: Users },
    { key: 'academic', label: 'Academic', icon: Users }
  ];

  const years = ['2024', '2023', '2022'];

  const filteredImages = galleryImages.filter(image => {
    if (selectedFilter === 'all') return true;
    return image.category === selectedFilter;
  });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white">Photo Gallery</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Capturing moments of learning, growth, and achievement at SFS CBSE School
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter.key
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <filter.icon className="h-5 w-5" />
                <span>{filter.label}</span>
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-200">
              {filteredImages.length} photos {selectedFilter !== 'all' && `in ${filters.find(f => f.key === selectedFilter)?.label}`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded text-xs font-medium">
                        {image.category}
                      </span>
                      <span className="text-gray-300 text-xs">{image.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200 mb-4">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-300">{selectedImage.year}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Moments Captured</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Every picture tells a story of growth, achievement, and memorable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Photos", value: "500+" },
              { label: "Events Covered", value: "50+" },
              { label: "Academic Years", value: "5+" },
              { label: "Happy Moments", value: "1000+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white">Browse by Year</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {years.map((year) => (
                <button
                  key={year}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  {year} Gallery
                </button>
              ))}
            </div>
            <p className="text-gray-200">
              Explore our photo collections from different academic years
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}