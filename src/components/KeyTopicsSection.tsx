// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Brain, Cpu, Sparkles, Heart, Shield, Zap, ArrowRight, FileText, Calendar } from 'lucide-react';

// // const KeyTopicsSection: React.FC = () => {
// //   const topics = [
// //     { name: 'Deep Learning', icon: Brain },
// //     { name: 'Autonomous Systems', icon: Cpu },
// //     { name: 'Generative AI', icon: Sparkles },
// //     { name: 'Neural Networks', icon: Brain },
// //     { name: 'Robotics in Healthcare', icon: Heart },
// //     { name: 'Ethical AI Frameworks', icon: Shield },
// //     { name: 'Adaptive Systems', icon: Zap }
// //   ];

// //   return (
// //     <section className="py-12 px-4 sm:px-6 lg:px-32">
// //       <div className="container mx-auto">
// //         <h2
// //           style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
// //           className="text-center text-2xl md:text-3xl font-bold mb-8"
// //         >
// //           Key Topics of Discussion
// //         </h2>

// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //           {topics.map((topic, index) => {
// //             const IconComponent = topic.icon;
// //             return (
// //               <div key={index} className="bg-gray-50 p-3 hover:shadow-md transition-shadow">
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                     <IconComponent className="w-4 h-4 text-indigo-600" />
// //                   </div>
// //                   <h3 className="font-semibold text-gray-800 text-base">{topic.name}</h3>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //           <div className="bg-indigo-600 p-3 hover:bg-indigo-700 transition-colors">
// //             <Link to="/call-for-papers" className="block">
// //               <div className="flex items-center gap-3">
// //                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
// //                   <ArrowRight className="w-4 h-4 text-white" />
// //                 </div>
// //                 <h3 className="font-semibold text-white text-sm">View More</h3>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Call for Papers Section */}
// //         <div className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 border border-indigo-100">
// //           <div className="text-center mb-6">
// //             <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
// //               <FileText className="w-6 h-6 text-indigo-600" />
// //             </div>
// //             <h3
// //               style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
// //               className="text-2xl md:text-3xl font-bold mb-4"
// //             >
// //               Call for Papers - 2026 Conference
// //             </h3>
// //             <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
// //               We invite innovative research submissions in AI, Robotics, and Machine Learning. Be part of the global dialogue shaping intelligent systems.
// //             </p>
// //           </div>

// //           {/* <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 mb-6 border-l-4 border-orange-400 inline-block">
// //             <div className="flex items-center gap-3">
// //               <Calendar className="w-5 h-5 text-orange-600 flex-shrink-0" />
// //               <div>
// //                 <strong className="text-gray-800 font-semibold">Next Deadline:</strong>
// //                 <span className="text-gray-700 ml-2">March 15, 2026 (Abstract Submission)</span>
// //               </div>
// //             </div>
// //           </div> */}

// //           <div className="text-center">
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
// //               <Link to="/call-for-papers">
// //                 <button
// //                   style={{ backgroundImage: "linear-gradient(90deg, rgba(49,46,129,1) 0%, rgba(67,56,202,1) 100%)" }}
// //                   className="inline-flex items-center gap-2 text-white px-6 py-2 font-semibold hover:shadow-lg transition-all duration-300"
// //                 >
// //                   View Full Details
// //                   <ArrowRight className="w-4 h-4" />
// //                 </button>
// //               </Link>

// //               <Link to="/review-process">
// //                 <button
// //                   style={{ backgroundImage: "linear-gradient(90deg, rgba(0,47,48,1) 0%, rgba(0,0,48,1) 100%)" }}
// //                   className="inline-flex items-center gap-2 text-white px-6 py-2 font-semibold hover:shadow-lg transition-all duration-300"
// //                 >
// //                   Review Process
// //                   <ArrowRight className="w-4 h-4" />
// //                 </button>
// //               </Link>

// //               <Link to="/publication-indexing">
// //                 <button
// //                   style={{ backgroundImage: "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)" }}
// //                   className="inline-flex items-center gap-2 text-white px-6 py-2 font-semibold hover:shadow-lg transition-all duration-300"
// //                 >
// //                   Publication & Indexing
// //                   <ArrowRight className="w-4 h-4" />
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };export default KeyTopicsSection;




// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const KeyTopicsSection: React.FC = () => {
//   const topics = [
//     {
//       name: "Deep Learning",
//       tags: ["Neural", "AI", "Models"],
//       desc: "Advanced deep neural networks and real-world applications.",
//       img: "https://img.icons8.com/color/96/brain.png",
//     },
//     {
//       name: "Autonomous Systems",
//       tags: ["Robotics", "Control", "AI"],
//       desc: "Self-driving systems, robotics control, and automation.",
//       img: "https://img.icons8.com/color/96/artificial-intelligence.png",
//     },
//     {
//       name: "Generative AI",
//       tags: ["GANs", "LLMs", "Creative AI"],
//       desc: "Text, image, and video generation using deep learning.",
//       img: "https://img.icons8.com/color/96/sparkling.png",
//     },
//     {
//       name: "Neural Networks",
//       tags: ["Deep", "ML", "Patterns"],
//       desc: "Artificial neural systems and pattern recognition models.",
//       img: "https://img.icons8.com/color/96/network.png",
//     },
//     {
//       name: "Robotics in Healthcare",
//       tags: ["Medical", "AI Robotics", "Assistive"],
//       desc: "AI-powered surgical robots and medical automation.",
//       img: "https://img.icons8.com/color/96/heart-health.png",
//     },
//     {
//       name: "Ethical AI",
//       tags: ["Policy", "Safety", "Regulation"],
//       desc: "AI fairness, transparency, and safety frameworks.",
//       img: "https://img.icons8.com/color/96/security-checked.png",
//     },
//     {
//       name: "Adaptive Systems",
//       tags: ["Learning", "Automation", "Smart"],
//       desc: "Self-improving intelligent learning systems.",
//       img: "https://img.icons8.com/color/96/lightning-bolt.png",
//     },
//   ];

//   return (
//     <section className="py-16 px-6 lg:px-32">
//       <div className="container mx-auto text-center max-w-6xl">
        
//         <h2
//           className="text-3xl md:text-4xl font-bold mb-10"
//           style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
//         >
//           Key Topics of Discussion
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {topics.map((topic, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-xl px-6 py-6 hover:shadow-lg transition-all border border-gray-200"
//             >
//               {/* Icon */}
//               <div className="flex justify-center mb-4">
//                 <img src={topic.img} alt={topic.name} className="w-14 h-14" />
//               </div>

//               {/* Title */}
//               <h3 className="font-semibold text-lg text-gray-800 mb-2">
//                 {topic.name}
//               </h3>

//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 justify-center mb-3">
//                 {topic.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Description */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {topic.desc}
//               </p>
//             </div>
//           ))}

//           {/* View More Card */}
//           <Link
//             to="/call-for-papers"
//             className="flex items-center justify-center bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition p-6"
//           >
//             <div className="flex items-center gap-2">
//               <span className="text-lg font-semibold">View More</span>
//               <ArrowRight />
//             </div>
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default KeyTopicsSection;


import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const KeyTopicsSection: React.FC = () => {
  const topics = [
    {
      name: "Deep Learning",
      tags: ["Neural", "AI", "Models"],
      desc: "Advanced deep neural networks and real-world applications.",
      img: "https://img.icons8.com/color/96/brain.png",
    },
    {
      name: "Autonomous Systems",
      tags: ["Robotics", "Control", "AI"],
      desc: "Self-driving systems, robotics control, and automation.",
      img: "https://img.icons8.com/color/96/artificial-intelligence.png",
    },
    {
      name: "Generative AI",
      tags: ["GANs", "LLMs", "Creative AI"],
      desc: "Text, image, and video generation using deep learning.",
      img: "https://img.icons8.com/color/96/sparkling.png",
    },
    {
      name: "Neural Networks",
      tags: ["Deep", "ML", "Patterns"],
      desc: "Artificial neural systems and pattern recognition models.",
      img: "https://img.icons8.com/color/96/network.png",
    },
    {
      name: "Robotics in Healthcare",
      tags: ["Medical", "AI Robotics", "Assistive"],
      desc: "AI-powered surgical robots and medical automation.",
      img: "https://img.icons8.com/color/96/heart-health.png",
    },
    {
      name: "Ethical AI",
      tags: ["Policy", "Safety", "Regulation"],
      desc: "AI fairness, transparency, and safety frameworks.",
      img: "https://img.icons8.com/color/96/security-checked.png",
    },
    {
      name: "Adaptive Systems",
      tags: ["Learning", "Automation", "Smart"],
      desc: "Self-improving intelligent learning systems.",
      img: "https://img.icons8.com/color/96/lightning-bolt.png",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-32">
      <div className="container mx-auto text-center max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}>
          Key Topics of Discussion
        </h2>

        {/* 4×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl px-6 py-6 hover:shadow-lg transition-all border border-gray-200">
              
              <div className="flex justify-center mb-4">
                <img src={topic.img} alt={topic.name} className="w-14 h-14" />
              </div>

              <h3 className="font-semibold text-lg text-gray-800 mb-2">{topic.name}</h3>

              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {topic.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{topic.desc}</p>
            </div>
          ))}

          {/* 8th Item */}
          <Link
            to="/call-for-papers"
            className="flex items-center justify-center  text-indigo-600 rounded-xl  transition p-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">View More</span>
              <ArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeyTopicsSection;
