import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, ArrowRight, Cpu, Eye, Users, Zap } from 'lucide-react';

const CFPHomeSection: React.FC = () => {
  const topics = [
    { name: 'Machine Learning', icon: Cpu },
    { name: 'Computer Vision', icon: Eye },
    { name: 'Human-Robot Interaction', icon: Users },
    { name: 'Autonomous Systems', icon: Zap }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-32 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-indigo-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
              <FileText className="w-8 h-8 text-indigo-600" />
            </div>
            <h2
              style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Call for Papers — 2026 Conference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We invite innovative research submissions in AI, Robotics, and Machine Learning.
              Be part of the global dialogue shaping intelligent systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <div key={index} className="bg-indigo-50 rounded-lg p-4 text-center hover:bg-indigo-100 transition-colors">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{topic.name}</span>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6 mb-8 border-l-4 border-orange-400">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <div>
                <strong className="text-gray-800 font-semibold">Next Deadline:</strong>
                <span className="text-gray-700 ml-2">March 15, 2026 (Abstract Submission)</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/call-for-papers">
              <button
                style={{ backgroundImage: "linear-gradient(90deg, rgba(49,46,129,1) 0%, rgba(67,56,202,1) 100%)" }}
                className="inline-flex items-center gap-2 text-white px-8 py-3 font-semibold text-lg rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View Full Details
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFPHomeSection;