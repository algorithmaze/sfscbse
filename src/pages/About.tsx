import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  BookOpen 
} from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
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
            <h1 className="text-4xl sm:text-6xl font-bold text-white">About SFS CBSE School</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              25 years of excellence in education, shaping minds and building futures
            </p>
          </motion.div>
        </div>
      </section>

      {/* School Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white">Our Story</h2>
              <p className="text-gray-200 leading-relaxed text-lg">
                Founded in 1999, SFS CBSE School began with a simple yet powerful vision: 
                to provide quality education that prepares students for the challenges of 
                the 21st century. Over the years, we have grown from a small institution 
                to one of the most respected schools in the region.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Our commitment to academic excellence, character development, and holistic 
                education has helped thousands of students achieve their dreams and make 
                meaningful contributions to society.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="School Building"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Mission & Vision</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our guiding principles that drive everything we do
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                  <Target className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg">
                To provide quality education that empowers students to become lifelong learners, 
                critical thinkers, and responsible citizens who contribute positively to society. 
                We strive to create an inclusive environment where every student can discover 
                their potential and achieve excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg">
                To be a leading educational institution that nurtures excellence, creativity, 
                and character, preparing students for success in an ever-changing global landscape. 
                We envision a future where our graduates become leaders who make a positive 
                impact on the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Founder</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Visionary leadership that established our educational legacy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Dr. Robert Foundation</h3>
                  <p className="text-yellow-300 font-medium text-lg">Founder & Chairman</p>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  "Education is the most powerful weapon which you can use to change the world. 
                  When I founded SFS CBSE School in 1999, my vision was to create an institution 
                  that would not just impart knowledge, but also build character and nurture 
                  the leaders of tomorrow."
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Dr. Foundation's 40+ years in education have shaped our school's philosophy 
                  of combining academic rigor with values-based learning, creating graduates 
                  who excel both professionally and personally.
                </p>
                
                {/* Timeline */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-200">1999 - Founded SFS CBSE School</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-200">2005 - Introduced Digital Learning</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-200">2015 - Established Research Center</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-200">2025 - 25 Years of Excellence</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Founder"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The principles that guide our educational approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We foster empathy, kindness, and understanding in all our interactions"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in academics and character development"
              },
              {
                icon: Users,
                title: "Community",
                description: "We build strong relationships and create a supportive learning environment"
              },
              {
                icon: BookOpen,
                title: "Learning",
                description: "We promote curiosity, critical thinking, and lifelong learning"
              },
              {
                icon: Target,
                title: "Integrity",
                description: "We uphold honesty, transparency, and ethical behavior in all we do"
              },
              {
                icon: Eye,
                title: "Innovation",
                description: "We embrace creativity and new approaches to enhance education"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl mx-auto w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}