// import React from 'react';
// import { Users, Bot, BrainCircuit, ShieldCheck, HeartPulse, TrendingUp } from 'lucide-react';

// const WhoShouldAttendSection: React.FC = () => {
//   return (
//     <div className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend?</h2>
//           <p className="text-gray-600">This conference brings together professionals from diverse backgrounds united by their passion for AI and robotics innovation.</p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Attendee Type 1 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
//             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
//               <Users className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-gray-900">Researchers & Academics</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Professors, research scientists, and PhD candidates working on cutting-edge AI and robotics research projects.
//             </p>
//           </div>

//           {/* Attendee Type 2 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
//             <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
//               <Bot className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-gray-900">Industry Professionals</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Engineers, developers, product managers, and executives from tech companies driving AI and robotics innovation.
//             </p>
//           </div>

//           {/* Attendee Type 3 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
//             <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
//               <BrainCircuit className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-gray-900">Students & Startups</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Undergraduate and graduate students, as well as entrepreneurs building the next generation of AI startups.
//             </p>
//           </div>

//           {/* Attendee Type 4 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
//             <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
//               <ShieldCheck className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-gray-900">Policy Makers & Regulators</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Government officials, policy advisors, and regulatory experts shaping the future of AI governance and ethics.
//             </p>
//           </div>

//           {/* Attendee Type 5 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
//             <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
//               <HeartPulse className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-gray-900">Healthcare Innovators</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Medical professionals, healthcare administrators, and biotech entrepreneurs exploring AI applications in healthcare.
//             </p>
//           </div>

//           {/* Attendee Type 6 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
//             <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
//               <TrendingUp className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-gray-900">Investors & Venture Capitalists</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Angel investors, VCs, and financial experts seeking the next breakthrough opportunities in AI and robotics.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhoShouldAttendSection;


import React from 'react';
import { 
  GraduationCap, 
  School, 
  Bot, 
  BrainCircuit, 
  Briefcase, 
  Rocket 
} from 'lucide-react';

const WhoShouldAttendSection = () => {
  const attendees = [
    {
      title: "Faculty & Professors",
      description: "Academic leaders and educators shaping the curriculum and guiding future research in intelligence systems.",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "PhD, Master’s & Bachelor’s",
      description: "Scholars and students at all levels looking to present their work, network, and learn from global experts.",
      icon: School,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Robotics Engineers",
      description: "Hardware and software engineers building the physical infrastructure of the next generation of automation.",
      icon: Bot,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "AI Researchers & Data Scientists",
      description: "Innovators working on algorithms, machine learning models, and data-driven decision systems.",
      icon: BrainCircuit,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "CTOs & CIOs",
      description: "Technical executives responsible for high-level strategy and implementing AI solutions in enterprise.",
      icon: Briefcase,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Founders & Practitioners",
      description: "Startup founders and industry professionals applying AI and robotics to solve real-world problems.",
      icon: Rocket,
      color: "bg-teal-100 text-teal-600"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend?</h2>
          <p className="text-gray-600">
            Whether you are in academia, industry, or leadership, this conference offers value for every stage of your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attendees.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoShouldAttendSection;