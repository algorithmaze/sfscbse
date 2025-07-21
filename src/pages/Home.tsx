import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  UserCheck, 
  Bus, 
  Building, 
  Beaker, 
  Award,
  ChevronRight,
  Star,
  Target,
  Heart,
  Zap
} from 'lucide-react';

export function Home() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [counters, setCounters] = useState({
    students: 0,
    staff: 0,
    buses: 0,
    classrooms: 0,
    labs: 0,
    years: 0
  });

  const finalCounts = {
    students: 2500,
    staff: 150,
    buses: 25,
    classrooms: 85,
    labs: 12,
    years: 25
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;

      Object.keys(finalCounts).forEach(key => {
        const increment = finalCounts[key as keyof typeof finalCounts] / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= finalCounts[key as keyof typeof finalCounts]) {
            current = finalCounts[key as keyof typeof finalCounts];
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, interval);
      });
    }
  }, [inView]);

  const features = [
    {
      icon: Star,
      title: "World Class Trainers",
      description: "Experienced educators with proven track records"
    },
    {
      icon: Target,
      title: "Flexible Learning",
      description: "Adaptive teaching methods for every student"
    },
    {
      icon: Heart,
      title: "Affordable Fee",
      description: "Quality education accessible to all families"
    },
    {
      icon: Zap,
      title: "Easy Learning",
      description: "Simplified concepts with practical applications"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Prof. Michael Chen",
      role: "Vice Principal",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Ms. Emily Davis",
      role: "Academic Coordinator",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Dr. James Wilson",
      role: "Research Head",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Shaping
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {" "}Future Leaders
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Excellence in education through innovative teaching, comprehensive development, 
              and nurturing environment for every student.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/admissions"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Apply Now</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-700 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats */}
      <section ref={ref} className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Users, label: "Students", value: counters.students },
              { icon: UserCheck, label: "Staff", value: counters.staff },
              { icon: Bus, label: "Buses", value: counters.buses },
              { icon: Building, label: "Classrooms", value: counters.classrooms },
              { icon: Beaker, label: "Labs", value: counters.labs },
              { icon: Award, label: "Years", value: counters.years }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-200 mb-2">{stat.value}+</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Principal"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Principal's Message</h3>
                  <p className="text-blue-200 font-medium">Dr. Sarah Johnson</p>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  "Welcome to SFS CBSE School, where we believe every child has the potential to achieve 
                  greatness. Our commitment to excellence in education, combined with our nurturing 
                  environment, ensures that each student develops not just academically, but also as 
                  a responsible global citizen."
                </p>
                <p className="text-gray-200 leading-relaxed">
                  "We foster creativity, critical thinking, and character development through our 
                  innovative curriculum and dedicated faculty."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Mini-Summary */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">About Our School</h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Established with a vision to provide world-class education, SFS CBSE School has been 
              nurturing young minds for over 25 years. We combine traditional values with modern 
              teaching methodologies to create well-rounded individuals.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-blue-200 mb-4">Our Mission</h3>
                <p className="text-gray-200 leading-relaxed">
                  To provide quality education that empowers students to become lifelong learners, 
                  critical thinkers, and responsible citizens who contribute positively to society.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-blue-200 mb-4">Our Vision</h3>
                <p className="text-gray-200 leading-relaxed">
                  To be a leading educational institution that nurtures excellence, creativity, and 
                  character, preparing students for success in an ever-changing global landscape.
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mt-8"
            >
              <span>Read More</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover what makes SFS CBSE School the preferred choice for quality education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl mx-auto w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Dedicated professionals committed to your child's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-200 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Join CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our School Family?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards your child's bright future. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-300"
              >
                Start Application
              </Link>
              <Link
                to="/contact"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Schedule Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}