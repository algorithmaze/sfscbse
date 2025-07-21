import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  BookOpen, 
  Users, 
  Award, 
  Globe, 
  Microscope, 
  Calculator,
  Monitor,
  Trophy,
  Brain
} from 'lucide-react';

export function Academics() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const academicSections = [
    {
      title: "Learning Approach",
      icon: Brain,
      content: `Our student-centered learning approach emphasizes critical thinking, creativity, and collaborative problem-solving. We use innovative teaching methodologies including:
      
      • Interactive digital learning platforms
      • Project-based learning (PBL)
      • Inquiry-based instruction
      • Differentiated learning strategies
      • Cross-curricular integration
      • Real-world application of concepts`
    },
    {
      title: "Beyond the Classroom",
      icon: Globe,
      content: `Education extends far beyond textbooks. Our comprehensive programs include:
      
      • Field trips and educational excursions
      • Guest lectures by industry experts
      • Cultural exchange programs
      • Community service projects
      • Environmental awareness initiatives
      • Leadership development programs
      • Entrepreneurship workshops`
    },
    {
      title: "Coaching & Mentoring",
      icon: Users,
      content: `Personalized guidance for every student through:
      
      • Individual academic counseling
      • Career guidance and planning
      • Peer tutoring programs
      • Teacher-student mentorship
      • Parent-teacher collaboration
      • Learning support for special needs
      • Gifted student enrichment programs`
    },
    {
      title: "Language Laboratory",
      icon: Monitor,
      content: `State-of-the-art language learning facility featuring:
      
      • Digital language learning software
      • Audio-visual teaching aids
      • Interactive pronunciation training
      • Multi-language support (Hindi, English, French)
      • Communication skills development
      • Public speaking practice
      • Creative writing workshops`
    },
    {
      title: "Online Testing & Assessment",
      icon: Calculator,
      content: `Modern assessment methods for comprehensive evaluation:
      
      • Digital test platforms
      • Instant feedback systems
      • Adaptive testing mechanisms
      • Performance analytics
      • Progress tracking dashboards
      • Mock examinations for board preparation
      • Continuous assessment modules`
    },
    {
      title: "NEET/JEE Foundation",
      icon: Award,
      content: `Specialized coaching for competitive examinations:
      
      • Early foundation from Class 8
      • Experienced faculty with proven track records
      • Comprehensive study materials
      • Regular mock tests and analysis
      • Doubt clearing sessions
      • Performance monitoring
      • Career counseling for medical/engineering streams`
    },
    {
      title: "Know Your Ability (KYA)",
      icon: Microscope,
      content: `Assessment program to identify student strengths:
      
      • Aptitude testing and analysis
      • Multiple intelligence assessment
      • Learning style identification
      • Skill gap analysis
      • Personalized development plans
      • Regular progress reviews
      • Parent consultation sessions`
    },
    {
      title: "Know Your School (KYS)",
      icon: BookOpen,
      content: `Orientation program for new students and parents:
      
      • School culture and values introduction
      • Academic policies and procedures
      • Extra-curricular opportunities
      • Support services overview
      • Parent engagement programs
      • Student handbook guidance
      • Buddy system for new admissions`
    },
    {
      title: "Smart Classrooms",
      icon: Monitor,
      content: `Technology-enhanced learning environments:
      
      • Interactive whiteboards and projectors
      • High-speed internet connectivity
      • Digital content libraries
      • Virtual reality learning modules
      • Audio-visual presentations
      • Online collaboration tools
      • Recorded lecture accessibility`
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
            backgroundImage: 'url(https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white">Academic Excellence</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive curriculum designed to nurture critical thinking and creativity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Academic Framework</h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our curriculum follows CBSE guidelines while incorporating innovative teaching methods 
              and technology-enhanced learning to prepare students for the challenges of the 21st century.
            </p>
          </motion.div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: BookOpen, label: "Subjects Offered", value: "25+" },
              { icon: Users, label: "Teachers", value: "150+" },
              { icon: Trophy, label: "Board Result", value: "98%" },
              { icon: Award, label: "Awards Won", value: "50+" }
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

      {/* Academic Programs Accordion */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Academic Programs</h2>
            <p className="text-xl text-gray-200">
              Explore our comprehensive educational offerings
            </p>
          </motion.div>

          <div className="space-y-4">
            {academicSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                      <section.icon className="h-6 w-6 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-6 w-6 text-gray-300" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-white/10">
                        <div className="text-gray-200 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Streams */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Subject Streams</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose from diverse academic streams tailored to your interests and career goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Science Stream",
                subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
                description: "Ideal for students aspiring for engineering, medical, and research careers",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Commerce Stream",
                subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Informatics"],
                description: "Perfect for future business leaders, chartered accountants, and economists",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Humanities Stream",
                subjects: ["History", "Geography", "Political Science", "Psychology", "Sociology"],
                description: "Designed for students interested in social sciences, law, and liberal arts",
                color: "from-purple-500 to-pink-500"
              }
            ].map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 group hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${stream.color} rounded-full mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{stream.title}</h3>
                <p className="text-gray-200 mb-6">{stream.description}</p>
                <div className="space-y-2">
                  <h4 className="text-yellow-300 font-semibold mb-3">Core Subjects:</h4>
                  <ul className="space-y-1">
                    {stream.subjects.map((subject) => (
                      <li key={subject} className="text-gray-200 text-sm flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}