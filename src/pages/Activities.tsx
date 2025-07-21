import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Music, Palette, BookOpen, Camera, Mic, Users, Target, FolderRoot as Football, Dumbbell, Medal, Crown, Shield, Star } from 'lucide-react';

export function Activities() {
  const coCurricularActivities = [
    {
      icon: Music,
      title: "Music & Dance",
      description: "Classical and contemporary music, choreography, and cultural performances",
      activities: ["Vocal Training", "Instrumental Music", "Classical Dance", "Folk Dance", "Band Practice"]
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Creative expression through various artistic mediums and techniques",
      activities: ["Painting", "Sculpture", "Pottery", "Digital Art", "Craft Making"]
    },
    {
      icon: BookOpen,
      title: "Literary Club",
      description: "Developing communication skills and literary appreciation",
      activities: ["Creative Writing", "Debate", "Poetry", "Storytelling", "Drama"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and developing visual storytelling skills",
      activities: ["Digital Photography", "Photo Editing", "Event Coverage", "Nature Photography"]
    },
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Building confidence and communication excellence",
      activities: ["Debate Competitions", "Elocution", "Anchoring", "Presentation Skills"]
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Developing social responsibility and empathy",
      activities: ["Environmental Drives", "Charity Events", "Elder Care", "Teaching Assistance"]
    }
  ];

  const sportsActivities = [
    {
      name: "Cricket",
      image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Professional coaching and inter-school competitions"
    },
    {
      name: "Basketball",
      image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Court training and tournament participation"
    },
    {
      name: "Football",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Field training and competitive matches"
    },
    {
      name: "Swimming",
      image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Professional swimming instruction and water safety"
    },
    {
      name: "Athletics",
      image: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Track and field events preparation"
    },
    {
      name: "Table Tennis",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Indoor sports and quick reflexes training"
    }
  ];

  const clubs = [
    {
      name: "Science Club",
      icon: Target,
      description: "Hands-on experiments and scientific exploration",
      activities: "Weekly experiments, Science fair participation, Innovation projects"
    },
    {
      name: "Eco Club",
      icon: Shield,
      description: "Environmental awareness and sustainability projects",
      activities: "Tree plantation, Waste management, Solar energy projects"
    },
    {
      name: "Math Club",
      icon: Medal,
      description: "Mathematical problem solving and competitions",
      activities: "Olympiad preparation, Puzzle solving, Math competitions"
    },
    {
      name: "IT Club",
      icon: Star,
      description: "Technology and programming skills development",
      activities: "Coding competitions, App development, Robotics"
    }
  ];

  const studentCouncil = [
    {
      position: "Head Boy/Girl",
      responsibilities: "Overall leadership and school representation",
      selection: "School-wide voting and leadership assessment"
    },
    {
      position: "Vice Head Boy/Girl",
      responsibilities: "Supporting head students and event coordination",
      selection: "Peer nomination and teacher evaluation"
    },
    {
      position: "House Captains",
      responsibilities: "Leading house activities and competitions",
      selection: "House-based elections and leadership tasks"
    },
    {
      position: "Prefects",
      responsibilities: "Maintaining discipline and assisting juniors",
      selection: "Teacher recommendation and behavior assessment"
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
            backgroundImage: 'url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white">Activities & Sports</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive programs for holistic development beyond academics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Co-Curricular Activities</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Diverse programs to nurture creativity, leadership, and personal growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coCurricularActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 group hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl mx-auto w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <activity.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                <p className="text-gray-200 mb-4">{activity.description}</p>
                <div className="space-y-2">
                  <h4 className="text-yellow-300 font-semibold text-sm">Activities Include:</h4>
                  <ul className="space-y-1">
                    {activity.activities.map((item) => (
                      <li key={item} className="text-gray-300 text-sm flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Sports & Athletics</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional coaching and state-of-the-art facilities for athletic excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsActivities.map((sport, index) => (
              <motion.div
                key={sport.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{sport.name}</h3>
                  <p className="text-gray-200">{sport.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sports Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Trophy, label: "Championships Won", value: "25+" },
              { icon: Medal, label: "State Level Awards", value: "50+" },
              { icon: Football, label: "Sports Offered", value: "15+" },
              { icon: Dumbbell, label: "Professional Coaches", value: "20+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-2xl mx-auto w-fit mb-4">
                  <stat.icon className="h-6 w-6 text-blue-900" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Academic Clubs</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Subject-specific clubs for deeper exploration and competitive excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {clubs.map((club, index) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 group hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <club.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{club.name}</h3>
                    <p className="text-gray-200 mb-4">{club.description}</p>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="text-yellow-300 font-semibold text-sm mb-2">Key Activities:</h4>
                      <p className="text-gray-300 text-sm">{club.activities}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Council */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Student Council</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Leadership opportunities to develop responsibility and governance skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {studentCouncil.map((position, index) => (
              <motion.div
                key={position.position}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Crown className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">{position.position}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-yellow-300 font-semibold mb-2">Responsibilities:</h4>
                    <p className="text-gray-200">{position.responsibilities}</p>
                  </div>
                  <div>
                    <h4 className="text-yellow-300 font-semibold mb-2">Selection Process:</h4>
                    <p className="text-gray-200">{position.selection}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-blue-900 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Lead?</h3>
            <p className="text-lg mb-6">
              Student council elections are held annually. Develop your leadership skills and make a difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300">
                Learn More
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300">
                Join Activities
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}