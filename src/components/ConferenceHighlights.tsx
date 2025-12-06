import React from 'react';
import { Calendar, Layers, Wrench, Presentation, Users, Lightbulb, Trophy, MapPin } from 'lucide-react';

const ConferenceHighlights: React.FC = () => {
  const highlights = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "3 Days of Keynotes & Technical Sessions",
      description: "Immerse yourself in inspiring keynotes and in-depth technical sessions over three full days.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "8+ Technical Tracks",
      description: "Explore diverse tracks covering the latest advancements in AI, ML, and Robotics.",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hands-on Industry Workshops",
      description: "Participate in practical workshops led by industry experts and practitioners.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "International Paper Presentations",
      description: "Witness cutting-edge research presentations from global contributors.",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Networking Sessions",
      description: "Connect with peers, mentors, and industry leaders in structured networking events.",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Research Showcase",
      description: "Discover groundbreaking innovations and research projects from leading institutions.",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Awards for Best Paper / Best Presentation",
      description: "Celebrate excellence with awards recognizing outstanding contributions.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Exhibition & Demonstration Area",
      description: "Experience live demos and exhibitions showcasing the latest technologies.",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Highlights</h2>
          <p className="text-gray-600 text-lg">
            Discover what makes AIMLR 2026 an unparalleled experience in AI, Machine Learning, and Robotics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className={`w-16 h-16 ${highlight.bgColor} ${highlight.textColor} rounded-xl flex items-center justify-center mb-6`}>
                {highlight.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferenceHighlights;