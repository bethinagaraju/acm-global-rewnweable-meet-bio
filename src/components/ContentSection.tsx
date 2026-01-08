
// // // // // // // // import React from "react";
// // // // // // // // import { Link } from "react-router-dom";

// // // // // // // // const ContentSection: React.FC = () => {
// // // // // // // //   return (
// // // // // // // //     <section
// // // // // // // //       id="about-section"
// // // // // // // //       className="py-8 px-4 sm:px-8 lg:px-28 scroll-mt-36 bg-white pt-6"
// // // // // // // //     >
// // // // // // // //       <div className="max-w-7xl mx-auto">

// // // // // // // //         {/* --- VIDEO CONTAINER (Floated Right) --- */}
// // // // // // // //         <div className="w-full md:w-1/2 lg:w-[45%] mb-6 md:mb-4 md:ml-10 md:float-right mt-2">
// // // // // // // //           <div className="overflow-hidden bg-black relative">
// // // // // // // //             <video
// // // // // // // //               className="w-full h-full object-cover"
// // // // // // // //               src="/ICBME-2026-video.mp4"
// // // // // // // //               controls
// // // // // // // //               autoPlay
// // // // // // // //               muted
// // // // // // // //               loop
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* --- TEXT CONTENT --- */}
// // // // // // // //         <div
// // // // // // // //           className="
// // // // // // // //             text-gray-700
// // // // // // // //             leading-relaxed
// // // // // // // //             text-[16px]
// // // // // // // //             text-left
// // // // // // // //             whitespace-normal
// // // // // // // //           "
// // // // // // // //         >
// // // // // // // //           <h2 className="text-3xl font-bold text-[#00488B] mb-6">
// // // // // // // //             ABOUT ICBME 2026  HYBRID EVENT
// // // // // // // //           </h2>

// // // // // // // //           <p className="mb-3">
// // // // // // // //             The International Conference on Biomedical Engineering, Machine
// // // // // // // //             Learning & Robotics (ICBME 2026) is a global academic forum bringing
// // // // // // // //             together researchers, faculty members, students, and industry
// // // // // // // //             professionals to exchange knowledge and present recent advances in
// // // // // // // //             intelligent systems.
// // // // // // // //           </p>

// // // // // // // //           <p className="mb-3">
// // // // // // // //             Scheduled for July 28–30, 2026, in Rome, Italy, ICBME 2026 will be
// // // // // // // //             conducted in a hybrid format, enabling participation through both
// // // // // // // //             in-person and virtual presentations.
// // // // // // // //           </p>

// // // // // // // //           <p className="mb-3">
// // // // // // // //             The conference focuses on fostering academic discussion,
// // // // // // // //             interdisciplinary collaboration, and responsible innovation across
// // // // // // // //             AI, machine learning, and robotics. Participants are invited to
// // // // // // // //             share original research, case studies, and emerging ideas through
// // // // // // // //             oral and poster sessions.
// // // // // // // //           </p>

// // // // // // // //           <p className="mb-3">
// // // // // // // //             ICBME 2026 aims to support meaningful knowledge exchange,
// // // // // // // //             professional networking, and collaboration within the global
// // // // // // // //             research community.<Link to="/about" className="text-[#0091b5] hover:text-[#00488B] hover:underline ml-1" title="About ICBME 2026 Conference" aria-label="About ICBME 2026 Conference">Know more</Link>
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* --- BUTTON GROUP --- */}
// // // // // // // //         <div className="clear-both pt-8 mt-4 border-t border-gray-100">
// // // // // // // //           <div className="flex gap-4">
// // // // // // // //             <Link to="/register" title="Register for ICBME 2026 Conference" aria-label="Register for ICBME 2026 Conference">
// // // // // // // //               <button className="bg-[#00488B] hover:bg-[#0E64C4] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5" title="Register for ICBME 2026 Conference" aria-label="Register for ICBME 2026 Conference">
// // // // // // // //                 REGISTER NOW
// // // // // // // //               </button>
// // // // // // // //             </Link>

// // // // // // // //             <Link to="/AbstractSubmission" title="Submit Abstract for ICBME 2026 Conference" aria-label="Submit Abstract for ICBME 2026 Conference">
// // // // // // // //               <button className="bg-[#232357] hover:bg-[#36368C] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5" title="Submit Abstract for ICBME 2026 Conference" aria-label="Submit Abstract for ICBME 2026 Conference">
// // // // // // // //                 SUBMIT ABSTRACT
// // // // // // // //               </button>
// // // // // // // //             </Link>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* --- QUICK LINKS STRIP --- */}
// // // // // // // //         <div className="mt-8 pt-4 pb-2 text-[15px] leading-7 border-t border-dashed border-gray-300">
// // // // // // // //           <span className="text-black font-semibold mr-1">Quick Links:</span>

// // // // // // // //           <Link to="/AbstractSubmission" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Abstract Submission for ICBME 2026 Conference" aria-label="Abstract Submission for ICBME 2026 Conference">
// // // // // // // //             Abstract Submission
// // // // // // // //           </Link>
// // // // // // // //           <span className="mx-2 text-gray-400">|</span>

// // // // // // // //           <Link to="/register" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Registration for ICBME 2026 Conference" aria-label="Registration for ICBME 2026 Conference">
// // // // // // // //             Registration
// // // // // // // //           </Link>
// // // // // // // //           <span className="mx-2 text-gray-400">|</span>

// // // // // // // //           <Link to="/speakers" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Speaker Registration for ICBME 2026 Conference" aria-label="Speaker Registration for ICBME 2026 Conference">
// // // // // // // //             Speaker Registration
// // // // // // // //           </Link>

// // // // // // // //           <span className="mx-2 text-gray-400">|</span>

// // // // // // // //           <Link to="/schedule" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Program Schedule for ICBME 2026 Conference" aria-label="Program Schedule for ICBME 2026 Conference">
// // // // // // // //             Program Schedule
// // // // // // // //           </Link>
// // // // // // // //         </div>

// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ContentSection;













// // // // // // // import React from "react";
// // // // // // // import { Link } from "react-router-dom";

// // // // // // // const ContentSection: React.FC = () => {
// // // // // // //   return (
// // // // // // //     <section
// // // // // // //       id="about-section"
// // // // // // //       className="py-8 px-4 sm:px-8 lg:px-28 scroll-mt-36 bg-white pt-6"
// // // // // // //     >
// // // // // // //       <div className="max-w-7xl mx-auto">

// // // // // // //         {/* VIDEO + CONTENT WRAPPER */}
// // // // // // //         <div className="flex flex-col md:flex-row gap-8 items-start">

// // // // // // //           {/* --- VIDEO (LEFT) --- */}
// // // // // // //           <div className="w-full md:w-1/2 lg:w-[45%]">
// // // // // // //             <div className="overflow-hidden bg-black relative">
// // // // // // //               <video
// // // // // // //                 className="w-full h-full object-cover"
// // // // // // //                 src="/ICBME-2026-video.mp4"
// // // // // // //                 controls
// // // // // // //                 autoPlay
// // // // // // //                 muted
// // // // // // //                 loop
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* --- TEXT CONTENT (RIGHT) --- */}
// // // // // // //           <div
// // // // // // //             className="
// // // // // // //               w-full md:w-1/2 lg:w-[55%]
// // // // // // //               text-gray-700
// // // // // // //               leading-relaxed
// // // // // // //               text-[16px]
// // // // // // //               text-left
// // // // // // //               whitespace-normal
// // // // // // //             "
// // // // // // //           >
// // // // // // //             <h2 className="text-3xl font-bold text-[#00488B] mb-6">
// // // // // // //               ABOUT ICBME 2026 HYBRID EVENT
// // // // // // //             </h2>

// // // // // // //             <p className="mb-3">
// // // // // // //               The International Conference on Biomedical Engineering, Machine
// // // // // // //               Learning & Robotics (ICBME 2026) is a global academic forum bringing
// // // // // // //               together researchers, faculty members, students, and industry
// // // // // // //               professionals to exchange knowledge and present recent advances in
// // // // // // //               intelligent systems.
// // // // // // //             </p>

// // // // // // //             <p className="mb-3">
// // // // // // //               Scheduled for July 28–30, 2026, in Rome, Italy, ICBME 2026 will be
// // // // // // //               conducted in a hybrid format, enabling participation through both
// // // // // // //               in-person and virtual presentations.
// // // // // // //             </p>

// // // // // // //             <p className="mb-3">
// // // // // // //               The conference focuses on fostering academic discussion,
// // // // // // //               interdisciplinary collaboration, and responsible innovation across
// // // // // // //               AI, machine learning, and robotics. Participants are invited to
// // // // // // //               share original research, case studies, and emerging ideas through
// // // // // // //               oral and poster sessions.
// // // // // // //             </p>

// // // // // // //             <p className="mb-3">
// // // // // // //               ICBME 2026 aims to support meaningful knowledge exchange,
// // // // // // //               professional networking, and collaboration within the global
// // // // // // //               research community.
// // // // // // //               <Link
// // // // // // //                 to="/about"
// // // // // // //                 className="text-[#0091b5] hover:text-[#00488B] hover:underline ml-1"
// // // // // // //                 title="About ICBME 2026 Conference"
// // // // // // //                 aria-label="About ICBME 2026 Conference"
// // // // // // //               >
// // // // // // //                 Know more
// // // // // // //               </Link>
// // // // // // //             </p>

// // // // // // //             {/* --- BUTTON GROUP --- */}
// // // // // // //             <div className="pt-6 mt-4 border-t border-gray-100">
// // // // // // //               <div className="flex gap-4 flex-wrap">
// // // // // // //                 <Link to="/register">
// // // // // // //                   <button className="bg-[#00488B] hover:bg-[#0E64C4] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
// // // // // // //                     REGISTER NOW
// // // // // // //                   </button>
// // // // // // //                 </Link>

// // // // // // //                 <Link to="/AbstractSubmission">
// // // // // // //                   <button className="bg-[#232357] hover:bg-[#36368C] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
// // // // // // //                     SUBMIT ABSTRACT
// // // // // // //                   </button>
// // // // // // //                 </Link>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* --- QUICK LINKS STRIP --- */}
// // // // // // //         <div className="mt-8 pt-4 pb-2 text-[15px] leading-7 border-t border-dashed border-gray-300">
// // // // // // //           <span className="text-black font-semibold mr-1">Quick Links:</span>

// // // // // // //           <Link to="/AbstractSubmission" className="text-[#0091b5] hover:text-[#00488B] hover:underline">
// // // // // // //             Abstract Submission
// // // // // // //           </Link>
// // // // // // //           <span className="mx-2 text-gray-400">|</span>

// // // // // // //           <Link to="/register" className="text-[#0091b5] hover:text-[#00488B] hover:underline">
// // // // // // //             Registration
// // // // // // //           </Link>
// // // // // // //           <span className="mx-2 text-gray-400">|</span>

// // // // // // //           <Link to="/speakers" className="text-[#0091b5] hover:text-[#00488B] hover:underline">
// // // // // // //             Speaker Registration
// // // // // // //           </Link>
// // // // // // //           <span className="mx-2 text-gray-400">|</span>

// // // // // // //           <Link to="/schedule" className="text-[#0091b5] hover:text-[#00488B] hover:underline">
// // // // // // //             Program Schedule
// // // // // // //           </Link>
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ContentSection;



// // // // // // import React from "react";
// // // // // // import { Link } from "react-router-dom";

// // // // // // const ContentSection: React.FC = () => {
// // // // // //   return (
// // // // // //     <section
// // // // // //       id="about-section"
// // // // // //       className="bg-gradient-to-b from-[#f7f9fc] to-white py-14 px-4 sm:px-8 lg:px-24 scroll-mt-32"
// // // // // //     >
// // // // // //       <div className="max-w-7xl mx-auto">

// // // // // //         {/* SECTION HEADER */}
// // // // // //         <div className="mb-12 max-w-3xl flex justify-end">
// // // // // //           <h2 className="text-4xl font-extrabold text-[#0b3a6f] leading-tight">
// // // // // //             About ICBME 2026
// // // // // //           </h2>
// // // // // //           {/* <p className="mt-3 text-lg text-gray-600">
// // // // // //             A premier global conference advancing research and innovation in
// // // // // //             Artificial Intelligence, Machine Learning, and Robotics.
// // // // // //           </p> */}
// // // // // //         </div>

// // // // // //         {/* MAIN CONTENT GRID */}
// // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

// // // // // //           {/* VIDEO CARD */}
// // // // // //           <div className="relative overflow-hidden shadow-xl bg-black">
// // // // // //             <span className="absolute top-4 left-4 z-10 bg-[#00488B] text-white text-xs font-semibold px-3 py-1 tracking-wide">
// // // // // //               HYBRID EVENT • JULY 2026
// // // // // //             </span>

// // // // // //             <video
// // // // // //               className="w-full h-[300px] sm:h-[320px] lg:h-[350px] object-cover"
// // // // // //               src="/ICBME-2026-video.mp4"
// // // // // //               controls
// // // // // //               muted
// // // // // //               loop
// // // // // //               playsInline
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* TEXT CONTENT */}
// // // // // //           <div className="text-gray-700 text-[16.5px] leading-relaxed">

// // // // // //             <p className="mb-4">
// // // // // //               The <strong>ICBME 2026 Conference</strong> is an international
// // // // // //               academic forum bringing together researchers, faculty members,
// // // // // //               students, and industry professionals to present and discuss recent
// // // // // //               advances in intelligent systems.
// // // // // //             </p>

// // // // // //             <p className="mb-4">
// // // // // //               Scheduled for <strong>July 28–30, 2026</strong>, in
// // // // // //               <strong> Rome, Italy</strong>, the conference will be conducted in a
// // // // // //               <strong> hybrid format</strong>, enabling both in-person and
// // // // // //               virtual participation.
// // // // // //             </p>

// // // // // //             <p className="mb-4">
// // // // // //               ICBME 2026 emphasizes interdisciplinary collaboration, responsible
// // // // // //               innovation, and the exchange of original research through keynote
// // // // // //               talks, oral presentations, poster sessions, and technical
// // // // // //               discussions.
// // // // // //             </p>

// // // // // //             <p className="mb-6">
// // // // // //               The conference aims to foster long-term collaboration, professional
// // // // // //               networking, and meaningful knowledge exchange within the global
// // // // // //               research community.
// // // // // //               <Link
// // // // // //                 to="/about"
// // // // // //                 className="ml-2 text-[#0077b6] font-medium hover:underline"
// // // // // //               >
// // // // // //                 Learn more →
// // // // // //               </Link>
// // // // // //             </p>

// // // // // //             {/* CTA BUTTONS */}
// // // // // //             <div className="flex flex-wrap gap-4 mt-8">
// // // // // //               <Link to="/register">
// // // // // //                 <button className="bg-[#00488B] hover:bg-[#0E64C4] text-white px-7 py-3 text-sm font-bold tracking-wide shadow-lg transition-all">
// // // // // //                   REGISTER NOW
// // // // // //                 </button>
// // // // // //               </Link>

// // // // // //               <Link to="/AbstractSubmission">
// // // // // //                 <button className="bg-white border-2 border-[#00488B] text-[#00488B]
// // // // // //                   hover:bg-[#00488B] hover:text-white px-7 py-3 text-sm font-bold
// // // // // //                   tracking-wide transition-all">
// // // // // //                   SUBMIT ABSTRACT
// // // // // //                 </button>
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* QUICK LINKS */}
// // // // // //         <div className="mt-6 pt-8 border-t border-dashed border-gray-300">
// // // // // //           <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
// // // // // //             Quick Access
// // // // // //           </h4>

// // // // // //           <div className="flex flex-wrap gap-3">
// // // // // //             {[
// // // // // //               { to: "/AbstractSubmission", label: "Abstract Submission" },
// // // // // //               { to: "/register", label: "Registration" },
// // // // // //               { to: "/speakers", label: "Speaker Registration" },
// // // // // //               { to: "/schedule", label: "Program Schedule" },
// // // // // //             ].map((item, i) => (
// // // // // //               <Link
// // // // // //                 key={i}
// // // // // //                 to={item.to}
// // // // // //                 className="px-4 py-2 text-sm rounded-full border border-gray-300
// // // // // //                 text-gray-700 hover:border-[#00488B] hover:text-[#00488B]
// // // // // //                 transition-all"
// // // // // //               >
// // // // // //                 {item.label}
// // // // // //               </Link>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default ContentSection;











// // // // // import React from "react";
// // // // // import { Link } from "react-router-dom";

// // // // // const ContentSection: React.FC = () => {
// // // // //   return (
// // // // //     <section
// // // // //       id="about-section"
// // // // //       className="bg-gradient-to-b from-[#EAF2FF] to-white py-14 px-4 sm:px-8 lg:px-24 scroll-mt-32"
// // // // //     >
// // // // //       <div className="max-w-7xl mx-auto">

// // // // //         {/* SECTION HEADER */}
// // // // //         <div className="mb-12 max-w-3xl">
// // // // //           <h2 className="text-4xl font-extrabold text-[#111827] leading-tight">
// // // // //             About ICBME 2026
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* MAIN CONTENT GRID */}
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

// // // // //           {/* VIDEO CARD */}
// // // // //           <div className="relative overflow-hidden shadow-xl rounded-xl bg-black">
// // // // //             <span className="absolute top-4 left-4 z-10 bg-[#0B5ED7] text-white text-xs font-semibold px-3 py-1 tracking-wide rounded">
// // // // //               HYBRID EVENT • JULY 2026
// // // // //             </span>

// // // // //             <video
// // // // //               className="w-full h-[300px] sm:h-[320px] lg:h-[350px] object-cover"
// // // // //               src="/ICBME-2026-video.mp4"
// // // // //               controls
// // // // //               muted
// // // // //               loop
// // // // //               playsInline
// // // // //             />
// // // // //           </div>

// // // // //           {/* TEXT CONTENT */}
// // // // //           <div className="text-[#1F2937] text-[16.5px] leading-relaxed">

// // // // //             <p className="mb-4">
// // // // //               The <strong>ICBME 2026 Conference</strong> is an international
// // // // //               academic forum bringing together researchers, faculty members,
// // // // //               students, and industry professionals to present and discuss recent
// // // // //               advances in intelligent systems.
// // // // //             </p>

// // // // //             <p className="mb-4">
// // // // //               Scheduled for <strong>July 28–30, 2026</strong>, in
// // // // //               <strong> Rome, Italy</strong>, the conference will be conducted in a
// // // // //               <strong> hybrid format</strong>, enabling both in-person and
// // // // //               virtual participation.
// // // // //             </p>

// // // // //             <p className="mb-4">
// // // // //               ICBME 2026 emphasizes interdisciplinary collaboration, responsible
// // // // //               innovation, and the exchange of original research through keynote
// // // // //               talks, oral presentations, poster sessions, and technical
// // // // //               discussions.
// // // // //             </p>

// // // // //             <p className="mb-6">
// // // // //               The conference aims to foster long-term collaboration, professional
// // // // //               networking, and meaningful knowledge exchange within the global
// // // // //               research community.
// // // // //               <Link
// // // // //                 to="/about"
// // // // //                 className="ml-2 text-[#00B4D8] font-medium hover:underline"
// // // // //               >
// // // // //                 Learn more →
// // // // //               </Link>
// // // // //             </p>

// // // // //             {/* CTA BUTTONS */}
// // // // //             <div className="flex flex-wrap gap-4 mt-8">
// // // // //               <Link to="/register">
// // // // //                 <button className="bg-[#0B5ED7] hover:bg-[#084298] text-white px-7 py-3 text-sm font-bold tracking-wide shadow-lg transition-all rounded-md">
// // // // //                   REGISTER NOW
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <Link to="/AbstractSubmission">
// // // // //                 <button
// // // // //                   className="bg-white border-2 border-[#0B5ED7] text-[#0B5ED7]
// // // // //                   hover:bg-[#0B5ED7] hover:text-white px-7 py-3 text-sm font-bold
// // // // //                   tracking-wide transition-all rounded-md"
// // // // //                 >
// // // // //                   SUBMIT ABSTRACT
// // // // //                 </button>
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* QUICK LINKS */}
// // // // //         <div className="mt-10 pt-8 border-t border-dashed border-gray-300">
// // // // //           <h4 className="text-sm font-semibold text-[#1F2937] mb-4 uppercase tracking-wider">
// // // // //             Quick Access
// // // // //           </h4>

// // // // //           <div className="flex flex-wrap gap-3">
// // // // //             {[
// // // // //               { to: "/AbstractSubmission", label: "Abstract Submission" },
// // // // //               { to: "/register", label: "Registration" },
// // // // //               { to: "/speakers", label: "Speaker Registration" },
// // // // //               { to: "/schedule", label: "Program Schedule" },
// // // // //             ].map((item, i) => (
// // // // //               <Link
// // // // //                 key={i}
// // // // //                 to={item.to}
// // // // //                 className="px-4 py-2 text-sm rounded-full border border-gray-300
// // // // //                 text-[#1F2937] hover:border-[#00B4D8] hover:text-[#00B4D8]
// // // // //                 transition-all"
// // // // //               >
// // // // //                 {item.label}
// // // // //               </Link>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ContentSection;





// // // // import React from "react";
// // // // import { Link } from "react-router-dom";

// // // // const ContentSection: React.FC = () => {
// // // //   return (
// // // //     <section
// // // //       id="about-section"
// // // //       className="bg-gradient-to-b from-[#ECFDF5] to-white py-14 px-4 sm:px-8 lg:px-24 scroll-mt-32"
// // // //     >
// // // //       <div className="max-w-7xl mx-auto">

// // // //         {/* SECTION HEADER */}
// // // //         <div className="mb-12 max-w-3xl">
// // // //           <h2 className="text-4xl font-extrabold text-[#1E293B] leading-tight">
// // // //             About ICBME 2026
// // // //           </h2>
// // // //         </div>

// // // //         {/* MAIN CONTENT GRID */}
// // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

// // // //           {/* VIDEO CARD */}
// // // //           <div className="relative overflow-hidden shadow-xl rounded-xl bg-black">
// // // //             <span className="absolute top-4 left-4 z-10 bg-[#047857] text-white text-xs font-semibold px-3 py-1 tracking-wide rounded">
// // // //               HYBRID EVENT • JULY 2026
// // // //             </span>

// // // //             <video
// // // //               className="w-full h-[300px] sm:h-[320px] lg:h-[350px] object-cover"
// // // //               src="/ICBME-2026-video.mp4"
// // // //               controls
// // // //               muted
// // // //               loop
// // // //               playsInline
// // // //             />
// // // //           </div>

// // // //           {/* TEXT CONTENT */}
// // // //           <div className="text-[#1E293B] text-[16.5px] leading-relaxed">

// // // //             <p className="mb-4">
// // // //               The <strong>ICBME 2026 Conference</strong> is an international
// // // //               academic forum bringing together researchers, faculty members,
// // // //               students, and industry professionals to present and discuss recent
// // // //               advances in intelligent systems.
// // // //             </p>

// // // //             <p className="mb-4">
// // // //               Scheduled for <strong>July 28–30, 2026</strong>, in
// // // //               <strong> Rome, Italy</strong>, the conference will be conducted in a
// // // //               <strong> hybrid format</strong>, enabling both in-person and
// // // //               virtual participation.
// // // //             </p>

// // // //             <p className="mb-4">
// // // //               ICBME 2026 emphasizes interdisciplinary collaboration, responsible
// // // //               innovation, and the exchange of original research through keynote
// // // //               talks, oral presentations, poster sessions, and technical
// // // //               discussions.
// // // //             </p>

// // // //             <p className="mb-6">
// // // //               The conference aims to foster long-term collaboration, professional
// // // //               networking, and meaningful knowledge exchange within the global
// // // //               research community.
// // // //               <Link
// // // //                 to="/about"
// // // //                 className="ml-2 text-[#047857] font-semibold hover:underline"
// // // //               >
// // // //                 Learn more →
// // // //               </Link>
// // // //             </p>

// // // //             {/* CTA BUTTONS */}
// // // //             <div className="flex flex-wrap gap-4 mt-8">
// // // //               <Link to="/register">
// // // //                 <button className="bg-[#84CC16] hover:bg-[#65A30D] text-[#1E293B] px-7 py-3 text-sm font-bold tracking-wide shadow-lg transition-all rounded-md">
// // // //                   REGISTER NOW
// // // //                 </button>
// // // //               </Link>

// // // //               <Link to="/AbstractSubmission">
// // // //                 <button
// // // //                   className="bg-white border-2 border-[#047857] text-[#047857]
// // // //                   hover:bg-[#047857] hover:text-white px-7 py-3 text-sm font-bold
// // // //                   tracking-wide transition-all rounded-md"
// // // //                 >
// // // //                   SUBMIT ABSTRACT
// // // //                 </button>
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* QUICK LINKS */}
// // // //         <div className="mt-10 pt-8 border-t border-dashed border-[#D1FAE5]">
// // // //           <h4 className="text-sm font-semibold text-[#1E293B] mb-4 uppercase tracking-wider">
// // // //             Quick Access
// // // //           </h4>

// // // //           <div className="flex flex-wrap gap-3">
// // // //             {[
// // // //               { to: "/AbstractSubmission", label: "Abstract Submission" },
// // // //               { to: "/register", label: "Registration" },
// // // //               { to: "/speakers", label: "Speaker Registration" },
// // // //               { to: "/schedule", label: "Program Schedule" },
// // // //             ].map((item, i) => (
// // // //               <Link
// // // //                 key={i}
// // // //                 to={item.to}
// // // //                 className="px-4 py-2 text-sm rounded-full border border-[#A7F3D0]
// // // //                 text-[#1E293B] hover:border-[#047857] hover:text-[#047857]
// // // //                 transition-all"
// // // //               >
// // // //                 {item.label}
// // // //               </Link>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ContentSection;





// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import { twMerge } from "tailwind-merge";
// // // import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
// // // import { Microscope, Activity, Cpu } from "lucide-react";

// // // /* ================= CONTENT SECTION ================= */

// // // const ContentSection: React.FC = () => {
// // //   return (
// // //     <section
// // //       id="about-section"
// // //       className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white px-4 py-16 text-[#1E293B] scroll-mt-32"
// // //     >
// // //       <SectionHeader />

// // //       <motion.div
// // //         initial="initial"
// // //         whileInView="animate"
// // //         viewport={{ once: true }}
// // //         transition={{ staggerChildren: 0.08 }}
// // //         className="mx-auto grid max-w-6xl grid-cols-12 gap-4"
// // //       >
// // //         <IntroBlock />
// // //         <FocusBlock />
// // //         <TopicsBlock />
// // //         {/* <LocationBlock />
// // //         <UpdatesBlock /> */}
// // //       </motion.div>

// // //       {/* <Footer /> */}
// // //     </section>
// // //   );
// // // };

// // // /* ================= BASE BLOCK ================= */

// // // const Block = ({ className, ...rest }) => {
// // //   return (
// // //     <motion.div
// // //       variants={{
// // //         initial: { opacity: 0, y: 40, scale: 0.95 },
// // //         animate: { opacity: 1, y: 0, scale: 1 },
// // //       }}
// // //       transition={{
// // //         type: "spring",
// // //         stiffness: 300,
// // //         damping: 30,
// // //       }}
// // //       className={twMerge(
// // //         "col-span-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm",
// // //         className
// // //       )}
// // //       {...rest}
// // //     />
// // //   );
// // // };

// // // /* ================= HEADER ================= */

// // // const SectionHeader = () => (
// // //   <div className="mx-auto mb-14 max-w-3xl text-center">
// // //     <h2 className="text-4xl font-extrabold leading-tight">
// // //       About <span className="text-emerald-700">Biomedical Engineering</span>
// // //     </h2>
// // //     <p className="mt-4 text-slate-600">
// // //       Exploring the intersection of engineering, medicine, and biological
// // //       sciences to advance healthcare technologies.
// // //     </p>
// // //   </div>
// // // );

// // // /* ================= INTRO ================= */

// // // const IntroBlock = () => (
// // //   <Block className="col-span-12 md:col-span-6">
// // //     <Microscope className="mb-4 text-emerald-600" size={32} />
// // //     <h3 className="mb-4 text-2xl font-semibold">
// // //       Advancing Healthcare Through Engineering
// // //     </h3>
// // //     <p className="text-slate-600 leading-relaxed">
// // //       Biomedical Engineering integrates engineering principles with medical and
// // //       biological sciences to design innovative solutions for diagnostics,
// // //       treatment, and healthcare delivery. The field plays a crucial role in
// // //       improving patient outcomes and quality of life.
// // //     </p>
// // //     <a
// // //       href="/about"
// // //       className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:underline"
// // //     >
// // //       Learn more <FiArrowRight />
// // //     </a>
// // //   </Block>
// // // );

// // // /* ================= FOCUS AREAS ================= */

// // // const FocusBlock = () => (
// // //   <Block className="col-span-12 md:col-span-6 bg-emerald-50 border-emerald-100">
// // //     <Activity className="mb-4 text-emerald-700" size={32} />
// // //     <h3 className="mb-4 text-2xl font-semibold">Conference Focus</h3>
// // //     <ul className="space-y-2 text-slate-700">
// // //       <li>• Medical Imaging & Diagnostics</li>
// // //       <li>• Biomedical Signal Processing</li>
// // //       <li>• Wearable & Implantable Devices</li>
// // //       <li>• AI in Healthcare & Medicine</li>
// // //     </ul>
// // //   </Block>
// // // );

// // // /* ================= KEY TOPICS ================= */

// // // const TopicsBlock = () => (
// // //   <Block className="col-span-12">
// // //     <Cpu className="mb-4 text-emerald-600" size={32} />
// // //     <p className="text-xl leading-snug">
// // //       The conference emphasizes interdisciplinary research, encouraging
// // //       collaboration between engineers, clinicians, researchers, and industry
// // //       professionals to address real-world healthcare challenges using
// // //       cutting-edge biomedical technologies.
// // //     </p>
// // //   </Block>
// // // );

// // // /* ================= LOCATION ================= */

// // // const LocationBlock = () => (
// // //   <Block className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center">
// // //     <FiMapPin className="text-3xl text-emerald-600" />
// // //     <p className="mt-2 text-lg text-slate-600">
// // //       Hybrid Conference <br />
// // //       Rome, Italy • July 2026
// // //     </p>
// // //   </Block>
// // // );

// // // /* ================= EMAIL UPDATES ================= */

// // // const UpdatesBlock = () => (
// // //   <Block className="col-span-12 md:col-span-8">
// // //     <p className="mb-3 text-lg font-semibold">
// // //       Get Biomedical Conference Updates
// // //     </p>
// // //     <form
// // //       onSubmit={(e) => e.preventDefault()}
// // //       className="flex flex-col sm:flex-row gap-3"
// // //     >
// // //       <input
// // //         type="email"
// // //         placeholder="Enter your email"
// // //         className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 focus:border-emerald-500 focus:outline-none"
// // //       />
// // //       <button
// // //         type="submit"
// // //         className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-700 transition"
// // //       >
// // //         <FiMail /> Subscribe
// // //       </button>
// // //     </form>
// // //   </Block>
// // // );

// // // /* ================= FOOTER ================= */

// // // const Footer = () => (
// // //   <footer className="mt-16 text-center text-sm text-slate-500">
// // //     © 2026 Biomedical Engineering Conference. All rights reserved.
// // //   </footer>
// // // );

// // // export default ContentSection;




// // import React from "react";
// // import { motion } from "framer-motion";
// // import { twMerge } from "tailwind-merge";
// // import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
// // import { Microscope, Activity, Cpu } from "lucide-react";

// // /* ================= CONTENT SECTION ================= */

// // const ContentSection: React.FC = () => {
// //   return (
// //     <section
// //       id="about-section"
// //       // CHANGED: Background gradient from emerald-tinted to blue-tinted
// //       className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-20 text-slate-800 scroll-mt-32"
// //     >
// //       <SectionHeader />

// //       <motion.div
// //         initial="initial"
// //         whileInView="animate"
// //         viewport={{ once: true }}
// //         transition={{ staggerChildren: 0.08 }}
// //         className="mx-auto grid max-w-6xl grid-cols-12 gap-6"
// //       >
// //         <IntroBlock />
// //         <FocusBlock />
// //         <TopicsBlock />
// //         {/* <LocationBlock />
// //         <UpdatesBlock /> */}
// //       </motion.div>

// //       {/* <Footer /> */}
// //     </section>
// //   );
// // };

// // /* ================= BASE BLOCK ================= */

// // const Block = ({ className, ...rest }: any) => {
// //   return (
// //     <motion.div
// //       variants={{
// //         initial: { opacity: 0, y: 40, scale: 0.95 },
// //         animate: { opacity: 1, y: 0, scale: 1 },
// //       }}
// //       transition={{
// //         type: "spring",
// //         stiffness: 300,
// //         damping: 30,
// //       }}
// //       className={twMerge(
// //         // CHANGED: Border color from slate-200 to blue-100 for a cooler tone
// //         "col-span-4 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md",
// //         className
// //       )}
// //       {...rest}
// //     />
// //   );
// // };

// // /* ================= HEADER ================= */

// // const SectionHeader = () => (
// //   <div className="mx-auto mb-16 max-w-3xl text-center">
// //     {/* CHANGED: Main text color to darker slate, highlight color to blue-700 */}
// //     <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
// //       About <span className="text-blue-700">Biomedical Engineering</span>
// //     </h2>
// //     {/* CHANGED: Subtitle text color to slate-600 */}
// //     <p className="mt-5 text-lg text-slate-600 leading-relaxed">
// //       Exploring the intersection of engineering, medicine, and biological
// //       sciences to advance healthcare technologies.
// //     </p>
// //   </div>
// // );

// // /* ================= INTRO ================= */

// // const IntroBlock = () => (
// //   <Block className="col-span-12 md:col-span-6">
// //     {/* CHANGED: Icon color to blue-600 */}
// //     <Microscope className="mb-6 text-blue-600" size={36} />
// //     <h3 className="mb-4 text-2xl font-bold text-slate-900">
// //       Advancing Healthcare Through Engineering
// //     </h3>
// //     <p className="text-slate-600 leading-relaxed">
// //       Biomedical Engineering integrates engineering principles with medical and
// //       biological sciences to design innovative solutions for diagnostics,
// //       treatment, and healthcare delivery. The field plays a crucial role in
// //       improving patient outcomes and quality of life.
// //     </p>
// //     <a
// //       href="/about"
// //       // CHANGED: Link color to blue-700 and hover state
// //       className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-900"
// //     >
// //       Learn more <FiArrowRight />
// //     </a>
// //   </Block>
// // );

// // /* ================= FOCUS AREAS ================= */

// // const FocusBlock = () => (
// //   // CHANGED: Background to blue-50 and border to blue-100
// //   <Block className="col-span-12 md:col-span-6 bg-blue-50 border-blue-100">
// //     {/* CHANGED: Icon color to blue-700 */}
// //     <Activity className="mb-6 text-blue-700" size={36} />
// //     <h3 className="mb-4 text-2xl font-bold text-blue-900">Conference Focus</h3>
// //     {/* CHANGED: List text color to blue-800 */}
// //     <ul className="space-y-3 text-blue-800 font-medium">
// //       <li>• Medical Imaging & Diagnostics</li>
// //       <li>• Biomedical Signal Processing</li>
// //       <li>• Wearable & Implantable Devices</li>
// //       <li>• AI in Healthcare & Medicine</li>
// //     </ul>
// //   </Block>
// // );

// // /* ================= KEY TOPICS ================= */

// // const TopicsBlock = () => (
// //   <Block className="col-span-12">
// //     {/* CHANGED: Icon color to blue-600 */}
// //     <Cpu className="mb-6 text-blue-600" size={36} />
// //     {/* CHANGED: Text color to slate-700 */}
// //     <p className="text-xl leading-relaxed text-slate-700 font-medium">
// //       The conference emphasizes interdisciplinary research, encouraging
// //       collaboration between engineers, clinicians, researchers, and industry
// //       professionals to address real-world healthcare challenges using
// //       cutting-edge biomedical technologies.
// //     </p>
// //   </Block>
// // );

// // /* ================= LOCATION (Commented out, but updated colors) ================= */

// // const LocationBlock = () => (
// //   <Block className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center">
// //     {/* CHANGED: Icon color to blue-600 */}
// //     <FiMapPin className="text-4xl text-blue-600" />
// //     <p className="mt-4 text-lg font-medium text-slate-700">
// //       Hybrid Conference <br />
// //       <span className="text-slate-500 font-normal">Rome, Italy • July 2026</span>
// //     </p>
// //   </Block>
// // );

// // /* ================= EMAIL UPDATES (Commented out, but updated colors) ================= */

// // const UpdatesBlock = () => (
// //   <Block className="col-span-12 md:col-span-8 flex flex-col justify-center">
// //     <p className="mb-4 text-xl font-bold text-slate-900">
// //       Get Biomedical Conference Updates
// //     </p>
// //     <form
// //       onSubmit={(e) => e.preventDefault()}
// //       className="flex flex-col sm:flex-row gap-3 w-full"
// //     >
// //       <input
// //         type="email"
// //         placeholder="Enter your email"
// //         // CHANGED: Border focus color to blue-500
// //         className="w-full flex-grow rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
// //       />
// //       <button
// //         type="submit"
// //         // CHANGED: Button bg to blue-600 and hover to blue-700
// //         className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-95 whitespace-nowrap"
// //       >
// //         <FiMail /> Subscribe
// //       </button>
// //     </form>
// //   </Block>
// // );

// // /* ================= FOOTER (Commented out) ================= */

// // const Footer = () => (
// //   <footer className="mt-20 text-center text-sm text-slate-500">
// //     © 2026 Biomedical Engineering Conference. All rights reserved.
// //   </footer>
// // );

// // export default ContentSection;




// import React from "react";
// import { motion } from "framer-motion";
// import { twMerge } from "tailwind-merge";
// import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
// import { Microscope, Activity, Cpu } from "lucide-react";

// /* ================= CONTENT SECTION ================= */

// const ContentSection: React.FC = () => {
//   return (
//     <section
//       id="about-section"
//       // Main background: Soft cream
//       className="min-h-screen bg-[#FFFFFF] px-4 py-20 text-[#5F6F6C] scroll-mt-32"
//     >
//       <SectionHeader />

//       <motion.div
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: true }}
//         transition={{ staggerChildren: 0.08 }}
//         className="mx-auto grid max-w-6xl grid-cols-12 gap-6"
//       >
//         <IntroBlock />
//         <FocusBlock />
//         <TopicsBlock />
//         {/* <LocationBlock /> */}
//         {/* <UpdatesBlock /> */}
//       </motion.div>
//     </section>
//   );
// };

// /* ================= BASE BLOCK ================= */

// const Block = ({ className, ...rest }: any) => {
//   return (
//     <motion.div
//       variants={{
//         initial: { opacity: 0, y: 40, scale: 0.95 },
//         animate: { opacity: 1, y: 0, scale: 1 },
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//       }}
//       className={twMerge(
//         // Card bg: Premium Ivory | Border: Card Border color
//         "col-span-4 rounded-2xl border border-[#E6DED2] bg-[#FDFBF7] p-8 shadow-sm transition-shadow hover:shadow-md",
//         className
//       )}
//       {...rest}
//     />
//   );
// };



// const SectionHeader = () => (
//   <div className="mx-auto mb-16 max-w-3xl text-center">
//     {/* Primary Heading Text */}
//     <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#2F3E3B]">
//       About <span className="text-[#3B6F6A]">Biomedical Engineering</span>
//     </h2>
//     {/* Body Text */}
//     <p className="mt-5 text-lg text-[#5F6F6C] leading-relaxed">
//       Exploring the intersection of engineering, medicine, and biological
//       sciences to advance healthcare technologies.
//     </p>
//   </div>
// );

// /* ================= INTRO ================= */

// const IntroBlock = () => (
//   <Block className="col-span-12 md:col-span-6">
//     {/* Icon: Medical Teal */}
//     <Microscope className="mb-6 text-[#3B6F6A]" size={36} />
    
//     <h3 className="mb-4 text-2xl font-bold text-[#2F3E3B]">
//       Advancing Healthcare Through Engineering
//     </h3>
    
//     <p className="text-[#5F6F6C] leading-relaxed">
//       Biomedical Engineering integrates engineering principles with medical and
//       biological sciences to design innovative solutions for diagnostics,
//       treatment, and healthcare delivery. The field plays a crucial role in
//       improving patient outcomes and quality of life.
//     </p>
    
//     <a
//       href="/about"
//       // Link: Medical Teal with darker hover
//       className="mt-8 inline-flex items-center gap-2 font-semibold text-[#3B6F6A] transition-colors hover:text-[#335F5B]"
//     >
//       Learn more <FiArrowRight />
//     </a>
//   </Block>
// );

// /* ================= FOCUS AREAS ================= */

// const FocusBlock = () => (
//   // Alternate Panel Background + Card Border
//   <Block className="col-span-12 md:col-span-6 bg-[#F6F1E9] border-[#E6DED2]">
//     {/* Icon: Medical Teal */}
//     <Activity className="mb-6 text-[#3B6F6A]" size={36} />
    
//     <h3 className="mb-4 text-2xl font-bold text-[#2F3E3B]">Conference Focus</h3>
    
//     {/* List Text: Slightly darker than body for readability */}
//     <ul className="space-y-3 text-[#2F3E3B] font-medium">
//       <li>• Medical Imaging & Diagnostics</li>
//       <li>• Biomedical Signal Processing</li>
//       <li>• Wearable & Implantable Devices</li>
//       <li>• AI in Healthcare & Medicine</li>
//     </ul>
//   </Block>
// );

// /* ================= KEY TOPICS ================= */

// const TopicsBlock = () => (
//   <Block className="col-span-12">
//     {/* Icon: Medical Teal */}
//     <Cpu className="mb-6 text-[#3B6F6A]" size={36} />
    
//     <p className="text-xl leading-relaxed text-[#5F6F6C] font-medium">
//       The conference emphasizes interdisciplinary research, encouraging
//       collaboration between engineers, clinicians, researchers, and industry
//       professionals to address real-world healthcare challenges using
//       cutting-edge biomedical technologies.
//     </p>
//   </Block>
// );

// /* ================= LOCATION (Updating colors just in case) ================= */

// const LocationBlock = () => (
//   <Block className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center">
//     <FiMapPin className="text-4xl text-[#3B6F6A]" />
//     <p className="mt-4 text-lg font-medium text-[#2F3E3B]">
//       Hybrid Conference <br />
//       <span className="text-[#6B7C78] font-normal">Rome, Italy • July 2026</span>
//     </p>
//   </Block>
// );

// /* ================= EMAIL UPDATES (Updating colors just in case) ================= */

// const UpdatesBlock = () => (
//   <Block className="col-span-12 md:col-span-8 flex flex-col justify-center">
//     <p className="mb-4 text-xl font-bold text-[#2F3E3B]">
//       Get Biomedical Conference Updates
//     </p>
//     <form
//       onSubmit={(e) => e.preventDefault()}
//       className="flex flex-col sm:flex-row gap-3 w-full"
//     >
//       <input
//         type="email"
//         placeholder="Enter your email"
//         // Input: White bg, specific border, focus teal
//         className="w-full flex-grow rounded-lg border border-[#E6DED2] bg-white px-4 py-3 text-[#2F3E3B] shadow-sm transition-colors focus:border-[#3B6F6A] focus:outline-none focus:ring-1 focus:ring-[#3B6F6A]"
//       />
//       <button
//         type="submit"
//         // Button: Medical Teal bg, Hover Dark Teal
//         className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#3B6F6A] px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-[#335F5B] active:scale-95 whitespace-nowrap"
//       >
//         <FiMail /> Subscribe
//       </button>
//     </form>
//   </Block>
// );

// export default ContentSection;















import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { Microscope, Activity, Cpu } from "lucide-react";

/* ================= CONTENT SECTION ================= */

const ContentSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="min-h-screen bg-[#FFFFFF] px-4 py-20 text-[#5F6F6C] scroll-mt-32"
    >
      <SectionHeader />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08 }}
        className="mx-auto grid max-w-6xl grid-cols-12 gap-6"
      >
        <IntroBlock />
        <FocusBlock />
        <TopicsBlock />
        {/* <LocationBlock /> */}
        {/* <UpdatesBlock /> */}
      </motion.div>
    </section>
  );
};

/* ================= BASE BLOCK ================= */

const Block = ({ className, ...rest }: any) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 40, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={twMerge(
        "col-span-4  border border-[#E6DED2] bg-[#FDFBF7] p-8 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
      {...rest}
    />
  );
};

/* ================= SECTION HEADER ================= */

const SectionHeader = () => (
  <div className="mx-auto mb-16 max-w-3xl text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#2F3E3B]">
      About <span className="text-[#3B6F6A]">Biomedical Engineering</span>
    </h2>
    <p className="mt-5 text-lg text-[#5F6F6C] leading-relaxed">
      A global platform advancing research, innovation, and interdisciplinary
      collaboration in biomedical engineering and healthcare technologies.
    </p>
  </div>
);

/* ================= INTRO ================= */

const IntroBlock = () => (
  <Block className="col-span-12 md:col-span-6">
    <Microscope className="mb-6 text-[#3B6F6A]" size={36} />

    <h3 className="mb-4 text-2xl font-bold text-[#2F3E3B]">
      Biomedical Engineering & Healthcare Innovation Summit 2026
    </h3>

    <p className="text-[#5F6F6C] leading-relaxed">
      The Biomedical Engineering & Healthcare Innovation Summit 2026 is a premier
      global platform dedicated to advancing research, technology, and
      interdisciplinary collaboration across biomedical engineering, medical
      devices, AI-enabled healthcare systems, and life sciences innovation.
    </p>

    <a
      href="/about"
      className="mt-8 inline-flex items-center gap-2 font-semibold text-[#3B6F6A] transition-colors hover:text-[#335F5B]"
    >
      Learn more <FiArrowRight />
    </a>
  </Block>
);

/* ================= FOCUS AREAS ================= */

const FocusBlock = () => (
  <Block className="col-span-12 md:col-span-6 bg-[#F6F1E9] border-[#E6DED2]">
    <Activity className="mb-6 text-[#3B6F6A]" size={36} />

    <h3 className="mb-4 text-2xl font-bold text-[#2F3E3B]">
      Conference Focus Areas
    </h3>

    <ul className="space-y-3 text-[#2F3E3B] font-medium">
      <li>• Medical Imaging & Advanced Diagnostics</li>
      <li>• Biomedical Signal & Data Processing</li>
      <li>• Wearable, Implantable & Smart Medical Devices</li>
      <li>• AI-Enabled Healthcare & Digital Medicine</li>
      <li>• Translational Research & Clinical Innovation</li>
    </ul>
  </Block>
);

/* ================= KEY TOPICS ================= */

const TopicsBlock = () => (
  <Block className="col-span-12">
    <Cpu className="mb-6 text-[#3B6F6A]" size={36} />

    <p className="text-base leading-relaxed text-[#5F6F6C] font-medium">
      The summit brings together scientists, clinicians, engineers, researchers,
      academicians, and industry leaders to explore breakthroughs in healthcare
      technologies, translational research, and real-world clinical impact.
      Emphasizing interdisciplinary collaboration, the conference fosters
      innovation-driven solutions for next-generation healthcare systems.
    </p>
  </Block>
);

/* ================= LOCATION ================= */

const LocationBlock = () => (
  <Block className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center">
    <FiMapPin className="text-4xl text-[#3B6F6A]" />
    <p className="mt-4 text-lg font-medium text-[#2F3E3B]">
      Hybrid Conference <br />
      <span className="text-[#6B7C78] font-normal">
        Rome, Italy • July 2026
      </span>
    </p>
  </Block>
);

/* ================= EMAIL UPDATES ================= */

const UpdatesBlock = () => (
  <Block className="col-span-12 md:col-span-8 flex flex-col justify-center">
    <p className="mb-4 text-xl font-bold text-[#2F3E3B]">
      Get Summit Updates
    </p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3 w-full"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full flex-grow rounded-lg border border-[#E6DED2] bg-white px-4 py-3 text-[#2F3E3B] shadow-sm transition-colors focus:border-[#3B6F6A] focus:outline-none focus:ring-1 focus:ring-[#3B6F6A]"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#3B6F6A] px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-[#335F5B] active:scale-95 whitespace-nowrap"
      >
        <FiMail /> Subscribe
      </button>
    </form>
  </Block>
);

export default ContentSection;
