import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  School, 
  Users, 
  Building, 
  Award,
  ChevronDown,
  CheckCircle
} from 'lucide-react';

export function CBSEDisclosure() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General Information', icon: School },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'results', label: 'Academic Results', icon: Award },
    { id: 'staff', label: 'Staff Information', icon: Users },
    { id: 'infrastructure', label: 'Infrastructure', icon: Building }
  ];

  const generalInfo = [
    { field: "School Name", value: "SFS CBSE School" },
    { field: "Affiliation Number", value: "1234567" },
    { field: "School Code", value: "12345" },
    { field: "Complete Address", value: "123 Education Street, Academic City, State - 123456" },
    { field: "Principal Name", value: "Dr. Sarah Johnson" },
    { field: "Principal Qualification", value: "Ph.D. in Education, M.Ed., B.Ed." },
    { field: "School Email ID", value: "sfscbsetry@gmail.com" },
    { field: "Contact Details", value: "+91 98765 43210" },
    { field: "Year of Establishment", value: "1999" },
    { field: "Website", value: "www.sfscbse.edu.in" },
    { field: "Working Days", value: "Monday to Saturday" },
    { field: "Academic Session", value: "April to March" },
    { field: "Admission Period", value: "January to March" },
    { field: "Mode of Payment", value: "Online/Offline" },
    { field: "Fee Structure", value: "Available on School Website" }
  ];

  const documents = [
    {
      category: "Trust/Society/Company Registration",
      files: [
        { name: "Trust Registration Certificate", type: "PDF", size: "2.1 MB" },
        { name: "Society Registration Document", type: "PDF", size: "1.8 MB" }
      ]
    },
    {
      category: "No Objection Certificate (NOC)",
      files: [
        { name: "State Government NOC", type: "PDF", size: "1.5 MB" },
        { name: "Fire Safety Certificate", type: "PDF", size: "2.3 MB" }
      ]
    },
    {
      category: "Recognition Certificate",
      files: [
        { name: "CBSE Recognition Certificate", type: "PDF", size: "3.2 MB" },
        { name: "State Board Recognition", type: "PDF", size: "2.7 MB" }
      ]
    },
    {
      category: "Building Safety Certificate",
      files: [
        { name: "Building Safety Certificate", type: "PDF", size: "2.9 MB" },
        { name: "Structural Safety Report", type: "PDF", size: "4.1 MB" }
      ]
    },
    {
      category: "Water, Health and Sanitation Certificates",
      files: [
        { name: "Water Quality Certificate", type: "PDF", size: "1.2 MB" },
        { name: "Health & Sanitation Certificate", type: "PDF", size: "1.7 MB" }
      ]
    },
    {
      category: "Academic Session Information",
      files: [
        { name: "Academic Calendar 2024-25", type: "PDF", size: "1.9 MB" },
        { name: "Fee Structure 2024-25", type: "PDF", size: "1.3 MB" }
      ]
    }
  ];

  const academicResults = [
    {
      year: "2023-24",
      classX: { appeared: 120, passed: 118, percentage: "98.33%" },
      classXII: { appeared: 95, passed: 94, percentage: "98.95%" }
    },
    {
      year: "2022-23", 
      classX: { appeared: 115, passed: 113, percentage: "98.26%" },
      classXII: { appeared: 89, passed: 88, percentage: "98.88%" }
    },
    {
      year: "2021-22",
      classX: { appeared: 108, passed: 106, percentage: "98.15%" },
      classXII: { appeared: 82, passed: 81, percentage: "98.78%" }
    }
  ];

  const staffInfo = [
    { category: "Principal", count: 1, qualification: "Ph.D./M.Ed." },
    { category: "Vice Principal", count: 2, qualification: "M.Ed./M.A." },
    { category: "PGT (Post Graduate Teachers)", count: 25, qualification: "Post Graduate + B.Ed." },
    { category: "TGT (Trained Graduate Teachers)", count: 35, qualification: "Graduate + B.Ed." },
    { category: "PRT (Primary Teachers)", count: 40, qualification: "Graduate + D.Ed./B.Ed." },
    { category: "Physical Education Teacher", count: 4, qualification: "B.P.Ed./M.P.Ed." },
    { category: "Art Teacher", count: 3, qualification: "BFA/MFA" },
    { category: "Music Teacher", count: 2, qualification: "Diploma/Degree in Music" },
    { category: "Librarian", count: 2, qualification: "B.Lib./M.Lib." },
    { category: "Computer Instructor", count: 5, qualification: "BCA/MCA/B.Tech" },
    { category: "Counselor", count: 2, qualification: "M.A. Psychology" },
    { category: "Administrative Staff", count: 15, qualification: "Graduate" },
    { category: "Support Staff", count: 20, qualification: "Various" }
  ];

  const infrastructure = [
    { facility: "Total Campus Area", details: "10 Acres", capacity: "Full Campus" },
    { facility: "Built-up Area", details: "5,00,000 sq ft", capacity: "Academic & Administrative" },
    { facility: "Number of Classrooms", details: "85", capacity: "40 students each" },
    { facility: "Laboratories", details: "12", capacity: "Physics, Chemistry, Biology, Computer" },
    { facility: "Library", details: "1", capacity: "25,000 books, 200 seating" },
    { facility: "Auditorium", details: "1", capacity: "500 seating" },
    { facility: "Playground", details: "5", capacity: "Various sports" },
    { facility: "Computer Labs", details: "5", capacity: "40 computers each" },
    { facility: "Language Lab", details: "2", capacity: "40 students each" },
    { facility: "Medical Room", details: "1", capacity: "First Aid & Health Check" },
    { facility: "Cafeteria", details: "1", capacity: "300 students" },
    { facility: "Transportation", details: "25 buses", capacity: "School routes coverage" },
    { facility: "Swimming Pool", details: "1", capacity: "Olympic size" },
    { facility: "Gymnasium", details: "1", capacity: "Indoor sports" }
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
            <h1 className="text-4xl sm:text-6xl font-bold text-white">CBSE Mandatory Disclosure</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Complete transparency in compliance with CBSE regulations and guidelines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* General Information */}
          {activeTab === 'general' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">General Information</h2>
                <p className="text-xl text-gray-200">Basic school details and administrative information</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-600 to-purple-600">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Information</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {generalInfo.map((info, index) => (
                        <motion.tr
                          key={info.field}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                        >
                          <td className="px-6 py-4 text-white font-medium">{info.field}</td>
                          <td className="px-6 py-4 text-gray-200">{info.value}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Documents */}
          {activeTab === 'documents' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Important Documents</h2>
                <p className="text-xl text-gray-200">All mandatory certificates and legal documents</p>
              </div>

              <div className="space-y-6">
                {documents.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                      <FileText className="h-6 w-6 text-yellow-400" />
                      <span>{category.category}</span>
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.files.map((file, fileIndex) => (
                        <div
                          key={fileIndex}
                          className="bg-white/5 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors duration-300"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="bg-red-500 p-2 rounded-lg">
                              <FileText className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-medium">{file.name}</p>
                              <p className="text-gray-300 text-sm">{file.type} • {file.size}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                              <Eye className="h-4 w-4 text-white" />
                            </button>
                            <button className="p-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-300">
                              <Download className="h-4 w-4 text-white" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Academic Results */}
          {activeTab === 'results' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Academic Results</h2>
                <p className="text-xl text-gray-200">Board examination results for the past three years</p>
              </div>

              <div className="space-y-8">
                {/* Class X Results */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <span>Class X Results</span>
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-green-600 to-blue-600">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Academic Year</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Students Appeared</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Students Passed</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Pass Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {academicResults.map((result, index) => (
                          <motion.tr
                            key={result.year}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                          >
                            <td className="px-6 py-4 text-white font-medium">{result.year}</td>
                            <td className="px-6 py-4 text-gray-200">{result.classX.appeared}</td>
                            <td className="px-6 py-4 text-gray-200">{result.classX.passed}</td>
                            <td className="px-6 py-4">
                              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                                {result.classX.percentage}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Class XII Results */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <span>Class XII Results</span>
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-purple-600 to-pink-600">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Academic Year</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Students Appeared</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Students Passed</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Pass Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {academicResults.map((result, index) => (
                          <motion.tr
                            key={result.year}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                          >
                            <td className="px-6 py-4 text-white font-medium">{result.year}</td>
                            <td className="px-6 py-4 text-gray-200">{result.classXII.appeared}</td>
                            <td className="px-6 py-4 text-gray-200">{result.classXII.passed}</td>
                            <td className="px-6 py-4">
                              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                                {result.classXII.percentage}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Staff Information */}
          {activeTab === 'staff' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Staff Information</h2>
                <p className="text-xl text-gray-200">Complete details of teaching and non-teaching staff</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-orange-600 to-red-600">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Staff Category</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Number</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Qualification Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffInfo.map((staff, index) => (
                        <motion.tr
                          key={staff.category}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                        >
                          <td className="px-6 py-4 text-white font-medium">{staff.category}</td>
                          <td className="px-6 py-4">
                            <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                              {staff.count}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-200">{staff.qualification}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">156</div>
                  <div className="text-white font-medium">Total Staff</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">119</div>
                  <div className="text-white font-medium">Teaching Staff</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">37</div>
                  <div className="text-white font-medium">Support Staff</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Infrastructure */}
          {activeTab === 'infrastructure' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Infrastructure Details</h2>
                <p className="text-xl text-gray-200">Complete information about school facilities and infrastructure</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-teal-600 to-cyan-600">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Facility</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Details</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Capacity/Usage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {infrastructure.map((item, index) => (
                        <motion.tr
                          key={item.facility}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                          className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                        >
                          <td className="px-6 py-4 text-white font-medium">{item.facility}</td>
                          <td className="px-6 py-4 text-gray-200">{item.details}</td>
                          <td className="px-6 py-4 text-gray-200">{item.capacity}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 text-white"
          >
            <CheckCircle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">CBSE Compliance Statement</h2>
            <p className="text-lg mb-6 opacity-90">
              SFS CBSE School is fully compliant with all CBSE regulations and guidelines. 
              All mandatory disclosures are updated regularly and made available for public viewing.
            </p>
            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-sm font-medium">
                Last Updated: January 2025 | Next Review: April 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}