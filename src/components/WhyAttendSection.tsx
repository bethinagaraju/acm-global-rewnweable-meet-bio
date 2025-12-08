// // import React from 'react';
// // import { Users, Globe, Presentation, Eye, Handshake, Wrench } from 'lucide-react';

// // const WhyAttendSection: React.FC = () => {
// //   const reasons = [
// //     {
// //       icon: <Users className="w-8 h-8" />,
// //       title: "Learn from Global Experts",
// //       description: "Immerse yourself in keynote speeches and sessions led by world-renowned experts who are shaping the future of AI, Machine Learning, and Robotics through groundbreaking research and real-world applications.",
// //       bgColor: "bg-blue-100",
// //       textColor: "text-blue-600"
// //     },
// //     {
// //       icon: <Globe className="w-8 h-8" />,
// //       title: "Network Internationally",
// //       description: "Connect with researchers, academics, and industry professionals from over 20 countries, fostering global collaborations and partnerships that extend beyond the conference.",
// //       bgColor: "bg-green-100",
// //       textColor: "text-green-600"
// //     },
// //     {
// //       icon: <Presentation className="w-8 h-8" />,
// //       title: "Present Your Research",
// //       description: "Showcase your innovative work on an international platform, receiving valuable feedback from peers and potentially influencing the direction of AI and robotics research worldwide.",
// //       bgColor: "bg-purple-100",
// //       textColor: "text-purple-600"
// //     },
// //     {
// //       icon: <Eye className="w-8 h-8" />,
// //       title: "Gain Visibility",
// //       description: "Elevate your professional profile by presenting at AIMLR 2026, increasing your visibility among key stakeholders, potential collaborators, and industry leaders in the field.",
// //       bgColor: "bg-orange-100",
// //       textColor: "text-orange-600"
// //     },
// //     {
// //       icon: <Handshake className="w-8 h-8" />,
// //       title: "Build Collaborations",
// //       description: "Forge meaningful partnerships with academics, researchers, and industry innovators, opening doors to joint projects, funding opportunities, and career advancements.",
// //       bgColor: "bg-red-100",
// //       textColor: "text-red-600"
// //     },
// //     {
// //       icon: <Wrench className="w-8 h-8" />,
// //       title: "Hands-On Workshops",
// //       description: "Participate in interactive workshops and engaging panel discussions that provide practical skills, cutting-edge insights, and opportunities for direct engagement with leading thinkers.",
// //       bgColor: "bg-teal-100",
// //       textColor: "text-teal-600"
// //     }
// //   ];

// //   return (
// //     <div className="py-20 bg-gray-50">
// //       <div className="container mx-auto px-6">
// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Attend AIMLR 2026?</h2>
// //           <p className="text-gray-600 text-lg">This is standard on all top conferences. Join us for an unparalleled experience in AI, Machine Learning, and Robotics.</p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {reasons.map((reason, index) => (
// //             <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
// //               <div className={`w-16 h-16 ${reason.bgColor} ${reason.textColor} rounded-xl flex items-center justify-center mb-6`}>
// //                 {reason.icon}
// //               </div>
// //               <h3 className="text-xl font-bold mb-3 text-gray-900">{reason.title}</h3>
// //               <p className="text-gray-500 leading-relaxed">
// //                 {reason.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default WhyAttendSection;


// import React from "react";
// import { Users, Globe, Presentation, Eye, Handshake, Wrench } from "lucide-react";

// const WhyAttendSection: React.FC = () => {
//   const reasons = [
//     {
//       icon: Users,
//       title: "Learn from Global Experts",
//       description:
//         "Attend keynote sessions led by world leaders in AI, ML, and Robotics bringing breakthrough insights and real-world impact."
//     },
//     {
//       icon: Globe,
//       title: "Network Internationally",
//       description:
//         "Connect with researchers, innovators, and organizations from across the globe and expand your professional network."
//     },
//     {
//       icon: Presentation,
//       title: "Present Your Research",
//       description:
//         "Showcase your contribution to the global AI community and collaborate on future-forward advancements."
//     },
//     {
//       icon: Eye,
//       title: "Gain Industry Visibility",
//       description:
//         "Increase recognition among industry leaders, startups, and academic institutions by being part of AIMLR 2026."
//     },
//     {
//       icon: Handshake,
//       title: "Build Strategic Collaborations",
//       description:
//         "Engage in meaningful conversations that spark partnerships, joint research, and funding opportunities."
//     },
//     {
//       icon: Wrench,
//       title: "Hands-On Technical Workshops",
//       description:
//         "Learn practical tools and frameworks directly from experts through immersive training sessions."
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6 max-w-5xl">
        
//         {/* Section Title */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-gray-900 mb-3">
//             Why Attend AIMLR 2026?
//           </h2>
//           <p className="text-lg text-gray-600">
//             Discover the value of being part of one of the most impactful AI, ML and Robotics conferences.
//           </p>
//         </div>

//         {/* Highlights List */}
//         <div className="space-y-10">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className="group flex gap-6 items-start transition-all cursor-pointer"
//             >
//               {/* Icon */}
//               <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-white shadow group-hover:scale-110 transition-all duration-300">
//                 <reason.icon className="w-7 h-7 text-indigo-600" />
//               </div>

//               {/* Text */}
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-all">
//                   {reason.title}
//                 </h3>
//                 <p className="text-gray-600 mt-1 leading-relaxed">
//                   {reason.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyAttendSection;


import React from "react";
import { Users, Globe, Presentation, Eye, Handshake, Wrench, Lightbulb } from "lucide-react";

const WhyAttendSection: React.FC = () => {
  const reasons = [
    {
      icon: Users,
      title: "Learn from Global Experts",
      description:
        "Gain insights from world-renowned AI, ML, and Robotics leaders through thought-provoking keynote talks and deep technical sessions designed to elevate your understanding of emerging technologies."
    },
    {
      icon: Globe,
      title: "Network Internationally",
      description:
        "Meet international researchers, innovators, and industry professionals, expanding your global network while building valuable relationships that can open doors to future collaborations."
    },
    {
      icon: Presentation,
      title: "Present Your Research",
      description:
        "Showcase your ideas, innovations, and research findings to a global audience and receive feedback from experts that can refine and accelerate your research career."
    },
    {
      icon: Eye,
      title: "Gain Industry Visibility",
      description:
        "Establish credibility in the global AI ecosystem, get noticed by leading companies, startups, and academic institutions, and build professional recognition in your field."
    },
    {
      icon: Handshake,
      title: "Build Strategic Collaborations",
      description:
        "Engage in meaningful discussions with mentors, companies, and researchers that may lead to joint projects, funded research, internships, or career opportunities."
    },
    {
      icon: Wrench,
      title: "Hands-On Technical Workshops",
      description:
        "Participate in practical, immersive workshops to learn the latest tools, frameworks, and methodologies through real-time examples and guided expert sessions."
    },
    {
      icon: Lightbulb,
      title: "Explore Innovation & Future Trends",
      description:
        "Witness breakthrough research, cutting-edge prototypes, and the latest innovations, helping you stay ahead of fast-evolving AI and Robotics trends."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Why Attend AIMLR 2026?
          </h2>
          <p className="text-lg text-gray-600">
            Be part of an influential global gathering shaping the future of AI, Machine Learning, and Robotics.
          </p>
        </div>

        {/* Highlights List */}
        <div className="space-y-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex gap-6 items-start transition-all cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-white shadow group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-indigo-600" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-all">
                  {reason.title}
                </h3>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyAttendSection;
