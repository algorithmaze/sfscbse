import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Microscope, 
  Music, 
  Heart, 
  Brain, 
  Bus, 
  Shield, 
  Wifi,
  Monitor,
  Users,
  Trophy,
  Utensils,
  Camera,
  Building
} from 'lucide-react';

export function Facilities() {
  const facilities = [
    {
      icon: BookOpen,
      title: "State-of-the-Art Library",
      description: "Comprehensive collection with digital resources and quiet study areas",
      features: ["25,000+ Books", "Digital Catalog", "Research Databases", "Reading Rooms", "Multimedia Section"],
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Microscope,
      title: "Advanced Laboratories",
      description: "Fully equipped science labs for hands-on experimentation and learning",
      features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab", "Language Lab"],
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Music,
      title: "Multipurpose Auditorium",
      description: "Modern venue for cultural events, assemblies, and performances",
      features: ["500 Seating Capacity", "Stage Lighting", "Sound System", "Projection Facilities", "Green Rooms"],
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Heart,
      title: "Medical & Wellness Center",
      description: "Comprehensive healthcare and counseling services for students",
      features: ["Qualified Nurse", "First Aid", "Health Checkups", "Counseling Services", "Emergency Care"],
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Bus,
      title: "Safe Transportation",
      description: "Reliable and secure bus service covering extensive routes",
      features: ["GPS Tracking", "CCTV Monitoring", "Trained Drivers", "Route Optimization", "Emergency Contacts"],
      image: "https://images.pexels.com/photos/159740/school-bus-vehicle-yellow-transport-159740.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description: "24/7 security with modern surveillance and safety protocols",
      features: ["CCTV Surveillance", "Security Guards", "Access Control", "Emergency Protocols", "Visitor Management"],
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const additionalFacilities = [
    {
      icon: Monitor,
      title: "Smart Classrooms",
      count: "50+",
      description: "Interactive whiteboards and digital learning tools"
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      count: "15+",
      description: "Indoor and outdoor sports facilities"
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      count: "1",
      description: "Hygienic dining facility with nutritious meals"
    },
    {
      icon: Wifi,
      title: "Wi-Fi Campus",
      count: "100%",
      description: "High-speed internet throughout the campus"
    },
    {
      icon: Users,
      title: "Activity Rooms",
      count: "10+",
      description: "Dedicated spaces for clubs and activities"
    },
    {
      icon: Building,
      title: "Playgrounds",
      count: "5",
      description: "Age-appropriate play areas for different grades"
    }
  ];

  const infrastructureData = [
    { facility: "Total Built-up Area", capacity: "5,00,000 sq ft", type: "Campus" },
    { facility: "Classrooms", capacity: "85 Rooms", type: "Academic" },
    { facility: "Science Laboratories", capacity: "12 Labs", type: "Academic" },
    { facility: "Computer Labs", capacity: "5 Labs", type: "Technology" },
    { facility: "Library Seating", capacity: "200 Students", type: "Academic" },
    { facility: "Auditorium", capacity: "500 Seats", type: "Cultural" },
    { facility: "Sports Facilities", capacity: "15 Sports", type: "Athletic" },
    { facility: "Bus Fleet", capacity: "25 Buses", type: "Transport" },
    { facility: "Cafeteria", capacity: "300 Students", type: "Dining" },
    { facility: "Medical Room", capacity: "24/7 Service", type: "Healthcare" },
    { facility: "Parking", capacity: "200 Vehicles", type: "Utility" },
    { facility: "Green Spaces", capacity: "30% Campus", type: "Environment" }
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
            <h1 className="text-4xl sm:text-6xl font-bold text-white">World-Class Facilities</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Modern infrastructure designed to enhance learning and provide a safe, nurturing environment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Infrastructure Highlights</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive facilities supporting academic excellence and holistic development
            </p>
          </motion.div>

          <div className="space-y-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
                      <facility.icon className="h-8 w-8 text-blue-900" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{facility.title}</h3>
                  </div>
                  
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {facility.description}
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <h4 className="text-yellow-300 font-semibold mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {facility.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                          <span className="text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities Grid */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Additional Amenities</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive support facilities for a complete educational experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFacilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-4 rounded-2xl mx-auto w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <facility.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">{facility.count}</div>
                <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                <p className="text-gray-200">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Data Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Infrastructure Overview</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Detailed breakdown of our campus facilities and capacity
            </p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Facility</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Capacity/Details</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {infrastructureData.map((item, index) => (
                    <motion.tr
                      key={item.facility}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                    >
                      <td className="px-6 py-4 text-white font-medium">{item.facility}</td>
                      <td className="px-6 py-4 text-gray-200">{item.capacity}</td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                          {item.type}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security Features */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Safety & Security</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive security measures ensuring a safe learning environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "CCTV Surveillance",
                description: "360° campus monitoring with 24/7 recording"
              },
              {
                icon: Shield,
                title: "Trained Security",
                description: "Professional security personnel at all entry points"
              },
              {
                icon: Heart,
                title: "Medical Support",
                description: "On-campus nurse and emergency medical facilities"
              },
              {
                icon: Bus,
                title: "Safe Transport",
                description: "GPS-tracked buses with trained drivers and attendants"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-red-400 to-pink-500 p-3 rounded-xl mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-200 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-12 text-blue-900"
          >
            <h2 className="text-4xl font-bold mb-6">Experience Our Campus</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a visit to see our world-class facilities in person and meet our dedicated team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition-colors duration-300">
                Schedule Campus Tour
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 hover:text-white transition-all duration-300">
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}