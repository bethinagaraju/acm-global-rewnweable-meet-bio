// import React from 'react';
// import {
//   Cpu,
//   Navigation,
//   Sparkles,
//   Bot,
//   HeartPulse,
//   ShieldCheck,
//   Activity,
//   Leaf,
//   BrainCircuit,
//   Zap,
//   Database,
//   Globe,
//   Code,
//   Microscope,
//   TrendingUp,
//   Lock
// } from 'lucide-react';

// function AboutKeyTopics() {
//   return (
//     <div className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">Key Topics of Discussion</h2>
        
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <TopicCard icon={<Cpu />} title="Deep Learning" color="blue" />
//           <TopicCard icon={<Navigation />} title="Autonomous Systems" color="indigo" />
//           <TopicCard icon={<Sparkles />} title="Generative AI" color="purple" />
//           <TopicCard icon={<Bot />} title="Human-Robot Collaboration" color="green" />
//           <TopicCard icon={<HeartPulse />} title="Robotics in Healthcare" color="red" />
//           <TopicCard icon={<ShieldCheck />} title="Ethical AI Frameworks" color="orange" />
//           <TopicCard icon={<Activity />} title="Adaptive Systems" color="teal" />
//           <TopicCard icon={<Leaf />} title="Sustainable Tech" color="emerald" />
//           <TopicCard icon={<BrainCircuit />} title="Neural Networks" color="cyan" />
//           <TopicCard icon={<Zap />} title="Edge Computing" color="yellow" />
//           <TopicCard icon={<Database />} title="Big Data Analytics" color="pink" />
//           <TopicCard icon={<Globe />} title="IoT Integration" color="violet" />
//           <TopicCard icon={<Code />} title="Algorithm Optimization" color="lime" />
//           <TopicCard icon={<Microscope />} title="AI in Research" color="rose" />
//           <TopicCard icon={<TrendingUp />} title="Predictive Modeling" color="amber" />
//           <TopicCard icon={<Lock />} title="Cybersecurity AI" color="blue" />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Helper Component for the Topics Grid
// function TopicCard({ icon, title, color = 'gray' }) {
//   const colorClasses = {
//     blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700',
//     indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700',
//     purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200 hover:text-purple-700',
//     green: 'bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700',
//     red: 'bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700',
//     orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200 hover:text-orange-700',
//     teal: 'bg-teal-100 text-teal-600 hover:bg-teal-200 hover:text-teal-700',
//     emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200 hover:text-emerald-700',
//     cyan: 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200 hover:text-cyan-700',
//     yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200 hover:text-yellow-700',
//     pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200 hover:text-pink-700',
//     violet: 'bg-violet-100 text-violet-600 hover:bg-violet-200 hover:text-violet-700',
//     lime: 'bg-lime-100 text-lime-600 hover:bg-lime-200 hover:text-lime-700',
//     rose: 'bg-rose-100 text-rose-600 hover:bg-rose-200 hover:text-rose-700',
//     amber: 'bg-amber-100 text-amber-600 hover:bg-amber-200 hover:text-amber-700',
//     slate: 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-700',
//     gray: 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700'
//   };

//   return (
//     <div className={`flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors duration-200 group cursor-default ${colorClasses[color]}`}>
//       <div className="transition-colors">
//         {icon}
//       </div>
//       <span className="font-semibold transition-colors">{title}</span>
//     </div>
//   );
// }

// export default AboutKeyTopics;


import React from 'react';

const AboutKeyTopics = () => {
  const topics = [
    {
      title: "Deep Learning",
      imageSrc: "https://img.icons8.com/fluency/96/brain.png",
      tags: ["Neural", "AI", "Models"],
      description: "Advanced deep neural networks and real-world applications.",
      color: "bg-blue-50 border-blue-100" // Optional: subtle card tint
    },
    {
      title: "Autonomous Systems",
      imageSrc: "https://static.vecteezy.com/system/resources/previews/026/544/809/non_2x/autonomous-robot-fill-outline-icon-design-illustration-smart-industries-symbol-on-white-background-eps-10-file-vector.jpg",
      tags: ["Robotics", "Control", "AI"],
      description: "Self-driving systems, robotics control, and automation."
    },
    {
      title: "Generative AI",
      imageSrc: "https://tse2.mm.bing.net/th/id/OIP.rM5kK_2whmi1fV90pkOiAAHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.5&o=7&rm=3",
      tags: ["GANs", "LLMs", "Creative"],
      description: "Text, image, and video generation using deep learning."
    },
    {
      title: "Neural Networks",
      imageSrc: "https://img.icons8.com/color/96/network.png",
      tags: ["Deep", "ML", "Patterns"],
      description: "Artificial neural systems and pattern recognition models."
    },
    {
      title: "Human-Robot Collab",
      imageSrc: "https://img.icons8.com/fluency/96/robot-2.png",
      tags: ["HRI", "Safety", "Work"],
      description: "Safe and effective interaction between humans and robots."
    },
    {
      title: "Robotics in Healthcare",
      imageSrc: "https://img.icons8.com/fluency/96/heart-with-pulse.png",
      tags: ["Medical", "Surgery", "Care"],
      description: "AI-driven diagnostics and robotic surgical assistance."
    },
    {
      title: "Ethical AI Frameworks",
      imageSrc: "https://img.icons8.com/color/96/security-checked.png",
      tags: ["Bias", "Fairness", "Policy"],
      description: "Frameworks for responsible and unbiased AI deployment."
    },
    {
      title: "Adaptive Systems",
      imageSrc: "https://img.icons8.com/fluency/96/flow-chart.png",
      tags: ["Dynamic", "Learning", "Flex"],
      description: "Systems that evolve and adjust to changing environments."
    },
    {
      title: "Sustainable Tech",
      imageSrc: "https://cdn.bap-software.net/2025/02/14235538/12p3.png",
      tags: ["Green", "Eco", "Future"],
      description: "Energy-efficient computing and eco-friendly robotics."
    },
    {
      title: "Edge Computing",
      imageSrc: "https://img.icons8.com/fluency/96/server.png",
      tags: ["IoT", "Speed", "Local"],
      description: "Processing data closer to the source for lower latency."
    },
    {
      title: "Big Data Analytics",
      imageSrc: "https://img.icons8.com/fluency/96/database.png",
      tags: ["Data", "Insights", "Scale"],
      description: "Extracting meaningful patterns from massive datasets."
    },
    {
      title: "IoT Integration",
      imageSrc: "https://img.icons8.com/fluency/96/internet-of-things.png",
      tags: ["Connect", "Smart", "Network"],
      description: "Seamless connectivity between physical devices and the web."
    },
    {
      title: "Algorithm Optimization",
      imageSrc: "https://img.icons8.com/fluency/96/console.png",
      tags: ["Code", "Speed", "Logic"],
      description: "Refining algorithms for maximum efficiency and performance."
    },
    {
      title: "AI in Research",
      imageSrc: "https://img.icons8.com/fluency/96/microscope.png",
      tags: ["Science", "Discovery", "Lab"],
      description: "Accelerating scientific breakthroughs with machine learning."
    },
    {
      title: "Predictive Modeling",
      imageSrc: "https://img.icons8.com/fluency/96/line-chart.png",
      tags: ["Future", "Trends", "Stats"],
      description: "Forecasting future outcomes based on historical data."
    },
    {
      title: "Cybersecurity AI",
      imageSrc: "https://img.icons8.com/fluency/96/lock.png",
      tags: ["Security", "Defense", "Safe"],
      description: "AI-driven threat detection and digital asset protection."
    }
  ];

  return (
    <div className="py-20 bg-gray-50 pt-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-900 tracking-tight">
          Key Topics of Discussion
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((item, index) => (
            <TopicCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
const TopicCard = ({ imageSrc, title, tags, description }) => {
  return (
    <div className="group flex flex-col items-center text-center p-8 bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Icon Image */}
      <div className="w-20 h-20 mb-6 relative">
        <div className="absolute inset-0 bg-indigo-50 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-contain relative z-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {title}
      </h3>

      {/* Tags / Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[11px] font-bold uppercase tracking-wider rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AboutKeyTopics;