

// // // import React from "react";
// // // import { Mic2, FileText, Zap, Wrench, Users, Trophy } from "lucide-react";

// // // const SessionTypesSection: React.FC = () => {
// // //   const sessionTypes = [
// // //     {
// // //       name: "Keynote Talks",
// // //       desc: "Inspirational talks by globally recognized leaders in AI, Robotics, Ethics, and Innovation, showcasing research breakthroughs and future directions.",
// // //       icon: Mic2,
// // //     },
// // //     {
// // //       name: "Technical Papers",
// // //       desc: "Peer-reviewed research contributions demonstrating methodologies, experimental validation, and frameworks that advance theoretical and applied AI and robotics.",
// // //       icon: FileText,
// // //     },
// // //     {
// // //       name: "Poster Sessions",
// // //       desc: "A platform to present emerging ideas, ongoing experiments, and innovative prototypes in a visually interactive format.",
// // //       icon: Zap,
// // //     },
// // //     {
// // //       name: "Hands-on Workshops",
// // //       desc: "Practical workshops focused on tools, datasets, robotic platforms, and AI development workflows led by experts.",
// // //       icon: Wrench,
// // //     },
// // //     {
// // //       name: "Panel Discussions",
// // //       desc: "Moderated conversations addressing ethics, policies, research challenges, and the evolving human-AI ecosystem.",
// // //       icon: Users,
// // //     },
// // //     {
// // //       name: "Student Challenges",
// // //       desc: "Competitive events encouraging young researchers to innovate, collaborate, and showcase pioneering ideas.",
// // //       icon: Trophy,
// // //     },
// // //   ];

// // //   return (
// // //     <section className="py-16 px-6 lg:px-20 bg-white">
// // //       {/* Heading */}
// // //       <div className="text-center mb-12">
// // //         <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
// // //           Explore <span className="text-indigo-600">Session Types</span>
// // //         </h2>
// // //         <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
// // //           Each session is designed to poster learning, exchange perspectives, encourage networking, and create a high-value experience for researchers, industry professionals, and students.
// // //         </p>
// // //       </div>

// // //       {/* Bulleted List */}
// // //       <ul className="space-y-6 max-w-4xl text-slate-800">
// // //         {sessionTypes.map((item, index) => {
// // //           const Icon = item.icon;
// // //           return (
            
// // //               <div className="flex items-start gap-3">
// // //                 <Icon className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
// // //                 <div>
// // //                   <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
// // //                   {/* <p className="text-slate-700">{item.desc}</p> */}
// // //                 </div>
// // //               </div>
            
// // //           );
// // //         })}
// // //       </ul>
// // //     </section>
// // //   );
// // // };

// // // export default SessionTypesSection;



// // import React from "react";
// // import { Mic2, FileText, Zap, Wrench, Users, Trophy } from "lucide-react";

// // const SessionTypesSection: React.FC = () => {
// //   const sessionTypes = [
// //     { name: "Keynote Talks", icon: Mic2 },
// //     { name: "Technical Papers", icon: FileText },
// //     { name: "Poster Sessions", icon: Zap },
// //     { name: "Hands-on Workshops", icon: Wrench },
// //     { name: "Panel Discussions", icon: Users },
// //     { name: "Student Challenges", icon: Trophy },
// //   ];

// //   return (
// //     <section className="py-16 px-6 lg:px-20 bg-white">
// //       {/* Heading */}
// //       <div className="text-center mb-12">
// //         <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
// //           Explore <span className="text-indigo-600">Session Types</span>
// //         </h2>
// //         <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
// //           Each session is designed to foster learning, exchange perspectives,
// //           and create a high-value conference experience.
// //         </p>
// //       </div>

// //       {/* Cards */}
// //       <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {sessionTypes.map((item, index) => {
// //           const Icon = item.icon;
// //           return (
// //             <div
// //               key={index}
// //               className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 shadow-sm"
// //             >
// //               <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600">
// //                 <Icon className="w-5 h-5" />
// //               </div>
// //               <h3 className="text-base font-semibold text-slate-900">
// //                 {item.name}
// //               </h3>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // };

// // export default SessionTypesSection;



// import React from "react";
// import { Mic2, FileText, Zap, Wrench, Users, Trophy } from "lucide-react";

// const SessionTypesSection: React.FC = () => {
//   const sessionTypes = [
//     { name: "Keynote Talks", icon: Mic2 },
//     { name: "Technical Papers", icon: FileText },
//     { name: "Poster Sessions", icon: Zap },
//     { name: "Hands-on Workshops", icon: Wrench },
//     { name: "Panel Discussions", icon: Users },
//     { name: "Student Challenges", icon: Trophy },
//   ];

//   return (
//     <section className="py-16 px-6 lg:px-20 bg-[#ECFDF5]">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
//           Explore <span className="text-[#047857]">Session Types</span>
//         </h2>
//         <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
//           Each session is designed to foster learning, exchange perspectives,
//           and create a high-value conference experience.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {sessionTypes.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <div
//               key={index}
//               className="
//                 group relative
//                 flex items-center gap-4
//                 p-5
//                 bg-white
//                 border border-[#D1FAE5]
//                 rounded-xl
//                 shadow-sm
//                 transition-all duration-300
//                 hover:shadow-lg
//                 overflow-hidden
//               "
//             >
//               {/* Left Hover Accent */}
//               <div
//                 className="
//                   absolute left-0 top-0 h-full w-1
//                   bg-[#047857]
//                   scale-y-0
//                   group-hover:scale-y-100
//                   transition-transform duration-300
//                   origin-top
//                 "
//               />

//               {/* Icon */}
//               <div
//                 className="
//                   flex items-center justify-center
//                   w-11 h-11
//                   rounded-lg
//                   bg-[#ECFDF5]
//                   text-[#047857]
//                   flex-shrink-0
//                 "
//               >
//                 <Icon className="w-5 h-5" />
//               </div>

//               {/* Text */}
//               <h3 className="text-[15px] font-semibold text-[#1E293B]">
//                 {item.name}
//               </h3>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default SessionTypesSection;







import React from "react";
import { Mic2, FileText, Zap, Wrench, Users, Trophy } from "lucide-react";

const SessionTypesSection: React.FC = () => {
  const sessionTypes = [
    { name: "Keynote Talks", icon: Mic2 },
    { name: "Technical Papers", icon: FileText },
    { name: "Poster Sessions", icon: Zap },
    { name: "Hands-on Workshops", icon: Wrench },
    { name: "Panel Discussions", icon: Users },
    { name: "Student Challenges", icon: Trophy },
  ];

  return (
    <section className="py-20 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2F3E3B]">
          Session Types at ICBME 2026
        </h2>
        <p className="mt-4 text-[17px] text-[#6B7C78] max-w-3xl mx-auto leading-relaxed">
          A diverse set of sessions designed to encourage knowledge sharing,
          collaboration, and meaningful academic exchange.
        </p>
        <div className="mt-6 h-[2px] bg-[#E8E1D6] max-w-xl mx-auto" />
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessionTypes.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="
                group
                bg-[#FDFBF7]
                border border-[#E6DED2]
                p-4
                flex flex-col items-center text-center
                transition-all duration-300
                hover:shadow-lg
              "
              style={{
      background:
        "linear-gradient(90deg, rgb(238, 244, 242) 0%, rgba(238, 244, 242, 0.54) 39%, rgb(238, 244, 242) 100%, rgba(238, 244, 242, 0.55) 65%)",
    }}
            >
              {/* Icon */}
              <div
                className="
                  mb-4
                  flex items-center justify-center
                  w-14 h-14
                  rounded-xl
                  bg-[#EEF4F2]
                  text-[#3B6F6A]
                  transition-colors duration-300
                  group-hover:bg-[#3B6F6A]
                  group-hover:text-white
                "
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-semibold text-[#2F3E3B]">
                {item.name}
              </h3>

              {/* Subtle Divider */}
              <div className="mt-3 w-10 h-[2px] bg-[#DCE7E3] group-hover:bg-[#3B6F6A] transition-colors duration-300" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SessionTypesSection;
