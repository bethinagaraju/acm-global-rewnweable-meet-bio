

// // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // // // import QuickLinksSection from './QuickLinksSection';

// // // // // // // // // // // // const HeroSection: React.FC = () => {
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <section className="relative text-white overflow-hidden">

// // // // // // // // // // // //       {/* Background Video */}
// // // // // // // // // // // //       <video
// // // // // // // // // // // //         className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // // // //         src="/ICBME-banner-video.mp4"
// // // // // // // // // // // //         autoPlay
// // // // // // // // // // // //         loop
// // // // // // // // // // // //         muted
// // // // // // // // // // // //         playsInline
// // // // // // // // // // // //       ></video>

// // // // // // // // // // // //       {/* Content Container */}
// // // // // // // // // // // //       <div className="relative min-h-[430px] flex items-center justify-center px-4 sm:px-6 md:px-10">
// // // // // // // // // // // //         <div className="container mx-auto flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-4 pt-20 pb-10 justify-center items-center">

// // // // // // // // // // // //           {/* LEFT CONTENT */}
// // // // // // // // // // // //           <div className="max-w-3xl w-full bg-white bg-opacity-40 backdrop-blur-sm py-5 sm:py-6 px-4 sm:px-6 text-center lg:text-left">
// // // // // // // // // // // //             <h1
// // // // // // // // // // // //               className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 text-black uppercase leading-snug"
// // // // // // // // // // // //               style={{ fontFamily: 'Manrope, sans-serif' }}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {/* Artificial Intelligence, Machine Learning and Robotics Conference */}
// // // // // // // // // // // //               3rd Global Conference on AI, ML & Robotics – July 2026, Rome, Italy.
// // // // // // // // // // // //             </h1>

// // // // // // // // // // // //             <p className="text-lg sm:text-xl md:text-2xl font-medium mb-5 text-gray-800">
// // // // // // // // // // // //               July 28–30, 2026 | Crowne Plaza – St. Peter's Rome, Italy
// // // // // // // // // // // //             </p>

// // // // // // // // // // // //             <div className="flex flex-row items-center lg:items-start justify-center lg:justify-center gap-3 sm:gap-4 w-full">


// // // // // // // // // // // //               <Link to="/register" title="Register for ICBME 2026 Conference" aria-label="Register for ICBME 2026 Conference">
// // // // // // // // // // // //                 <button
// // // // // // // // // // // //                   className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition hover:opacity-90"
// // // // // // // // // // // //                   style={{
// // // // // // // // // // // //                     backgroundImage:
// // // // // // // // // // // //                       'linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)',
// // // // // // // // // // // //                   }}
// // // // // // // // // // // //                   title="Register for ICBME 2026 Conference"
// // // // // // // // // // // //                   aria-label="Register for ICBME 2026 Conference"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   REGISTER
// // // // // // // // // // // //                 </button>
// // // // // // // // // // // //               </Link>

// // // // // // // // // // // //               <Link to="/register" title="Submit Abstract for ICBME 2026 Conference" aria-label="Submit Abstract for ICBME 2026 Conference">
// // // // // // // // // // // //                 <button
// // // // // // // // // // // //                   className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition hover:opacity-90"
// // // // // // // // // // // //                   style={{
// // // // // // // // // // // //                     backgroundImage:
// // // // // // // // // // // //                       'linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)',
// // // // // // // // // // // //                   }}
// // // // // // // // // // // //                   title="Submit Abstract for ICBME 2026 Conference"
// // // // // // // // // // // //                   aria-label="Submit Abstract for ICBME 2026 Conference"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   SUBMISSION
// // // // // // // // // // // //                 </button>
// // // // // // // // // // // //               </Link>
// // // // // // // // // // // //             </div>



// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* RIGHT SIDE QUICK LINKS */}
// // // // // // // // // // // //           <div className="w-full lg:w-auto lg:ml-3">
// // // // // // // // // // // //             <QuickLinksSection />
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </section>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default HeroSection;



// // // // // // // // // // // import React from "react";
// // // // // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // // // // import QuickLinksSection from "./QuickLinksSection";

// // // // // // // // // // // const stats = [
// // // // // // // // // // //   { value: 35, label: "EXPECTED SPEAKERS" },
// // // // // // // // // // //   { value: 20, label: "COUNTRIES REPRESENTED" },
// // // // // // // // // // //   { value: 150, label: "PARTICIPANTS" },
// // // // // // // // // // //   { value: 25, label: "SESSIONS & ACTIVITIES" },
// // // // // // // // // // // ];

// // // // // // // // // // // const HeroSection: React.FC = () => {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section className="relative w-full min-h-[520px] text-white overflow-hidden">
      
// // // // // // // // // // //       {/* Background Video */}
// // // // // // // // // // //       <video
// // // // // // // // // // //         className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // // //         src="/ICBME-banner-video.mp4"
// // // // // // // // // // //         autoPlay
// // // // // // // // // // //         loop
// // // // // // // // // // //         muted
// // // // // // // // // // //         playsInline
// // // // // // // // // // //       />

// // // // // // // // // // //       {/* Dark Blue Overlay */}
// // // // // // // // // // //       <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/90 via-[#0b1f3a]/80 to-[#0b1f3a]/60" />

// // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // //       <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 pb-16">
// // // // // // // // // // //         <div className="grid lg:grid-cols-2 gap-10 items-center">

// // // // // // // // // // //           {/* LEFT CONTENT */}
// // // // // // // // // // //           <div className="max-w-3xl">
// // // // // // // // // // //             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-wide">
// // // // // // // // // // //               Energising Growth.<br />
// // // // // // // // // // //               Securing Economies.<br />
// // // // // // // // // // //               Enriching Lives.
// // // // // // // // // // //             </h1>

// // // // // // // // // // //             <p className="mt-6 text-lg sm:text-xl text-white/90 font-medium">
// // // // // // // // // // //               3rd Global Conference on AI, ML & Robotics
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <p className="mt-2 text-base sm:text-lg text-white/80">
// // // // // // // // // // //               July 28–30, 2026 | Rome, Italy
// // // // // // // // // // //             </p>

// // // // // // // // // // //             {/* CTA Buttons */}
// // // // // // // // // // //             <div className="mt-8 flex flex-wrap gap-4">
// // // // // // // // // // //               <Link to="/register">
// // // // // // // // // // //                 <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold uppercase text-sm hover:opacity-90 transition">
// // // // // // // // // // //                   Register
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </Link>

// // // // // // // // // // //               <Link to="/register">
// // // // // // // // // // //                 <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 font-semibold uppercase text-sm hover:opacity-90 transition">
// // // // // // // // // // //                   Submission
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </Link>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>


// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* STATS BAR */}
// // // // // // // // // // //       <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20">
// // // // // // // // // // //         <div className="container mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
// // // // // // // // // // //           {stats.map((item, index) => (
// // // // // // // // // // //             <div key={index}>
// // // // // // // // // // //               <p className="text-3xl font-extrabold">
// // // // // // // // // // //                 {item.value}
// // // // // // // // // // //                 <span className="text-blue-400">+</span>
// // // // // // // // // // //               </p>
// // // // // // // // // // //               <p className="mt-1 text-xs sm:text-sm uppercase tracking-wide text-white/80">
// // // // // // // // // // //                 {item.label}
// // // // // // // // // // //               </p>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default HeroSection;



// // // // // // // // // // import React from "react";

// // // // // // // // // // const stats = [
// // // // // // // // // //   { value: "35+", label: "Expected Speakers" },
// // // // // // // // // //   { value: "20+", label: "Countries Represented" },
// // // // // // // // // //   { value: "150+", label: "Participants" },
// // // // // // // // // //   { value: "25+", label: "Sessions & Activities" },
// // // // // // // // // // ];

// // // // // // // // // // const HeroSection: React.FC = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <section className="relative w-full h-[470px] text-white overflow-hidden">

// // // // // // // // // //       {/* Background Video */}
// // // // // // // // // //       <video
// // // // // // // // // //         className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // //         src="/ICBME-banner-video.mp4"
// // // // // // // // // //         autoPlay
// // // // // // // // // //         loop
// // // // // // // // // //         muted
// // // // // // // // // //         playsInline
// // // // // // // // // //       />

// // // // // // // // // //       {/* Blue Overlay (MATCH IMAGE) */}
// // // // // // // // // //       <div className="absolute inset-0 bg-gradient-to-r from-[#1c2e57]/90 via-[#243a6b]/80 to-[#1c2e57]/70" />

// // // // // // // // // //       {/* Content */}
// // // // // // // // // //       <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-20">

// // // // // // // // // //         {/* Heading */}
// // // // // // // // // //         <div className="max-w-4xl">
// // // // // // // // // //           <h1 className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
// // // // // // // // // //             Energising Growth.<br />
// // // // // // // // // //             Securing Economies.<br />
// // // // // // // // // //             Enriching Lives.
// // // // // // // // // //           </h1>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Stats (ON IMAGE) */}
// // // // // // // // // //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl">
// // // // // // // // // //           {stats.map((stat, index) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={index}
// // // // // // // // // //               className={`pl-4 ${
// // // // // // // // // //                 index !== 0 ? "border-l border-white/30" : ""
// // // // // // // // // //               }`}
// // // // // // // // // //             >
// // // // // // // // // //               <p className="text-3xl lg:text-4xl font-bold">
// // // // // // // // // //                 {stat.value}
// // // // // // // // // //               </p>
// // // // // // // // // //               <p className="mt-1 text-sm text-white/80 leading-tight">
// // // // // // // // // //                 {stat.label}
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default HeroSection;






// // // // // // // // // import React from "react";
// // // // // // // // // import { Link } from "react-router-dom";

// // // // // // // // // const stats = [
// // // // // // // // //   { value: "35+", label: "Expected Speakers" },
// // // // // // // // //   { value: "20+", label: "Countries Represented" },
// // // // // // // // //   { value: "150+", label: "Participants" },
// // // // // // // // //   { value: "25+", label: "Sessions & Activities" },
// // // // // // // // // ];

// // // // // // // // // const HeroSection: React.FC = () => {
// // // // // // // // //   return (
// // // // // // // // //     <section className="relative w-full h-[470px] text-white overflow-hidden">

// // // // // // // // //       {/* Background Video */}
// // // // // // // // //       <video
// // // // // // // // //         className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // //         src="/ICBME-banner-video.mp4"
// // // // // // // // //         autoPlay
// // // // // // // // //         loop
// // // // // // // // //         muted
// // // // // // // // //         playsInline
// // // // // // // // //       />

// // // // // // // // //       {/* Blue Overlay */}
// // // // // // // // //       <div className="absolute inset-0 bg-gradient-to-r from-[#1c2e57]/90 via-[#243a6b]/80 to-[#1c2e57]/70" />

// // // // // // // // //       {/* Content */}
// // // // // // // // //       <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-16">

// // // // // // // // //         {/* Heading + Buttons */}
// // // // // // // // //         <div className="max-w-4xl">
// // // // // // // // //           <h1 className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
// // // // // // // // //             Energising Growth.<br />
// // // // // // // // //             Securing Economies.<br />
// // // // // // // // //             Enriching Lives.
// // // // // // // // //           </h1>

// // // // // // // // //           {/* Buttons */}
// // // // // // // // //           <div className="mt-6 flex flex-wrap gap-4">
// // // // // // // // //             <Link to="/abstract-submission">
// // // // // // // // //               <button
// // // // // // // // //                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
// // // // // // // // //                 bg-gradient-to-r from-[#0f5bdc] to-[#1e88e5]
// // // // // // // // //                 hover:opacity-90 transition"
// // // // // // // // //               >
// // // // // // // // //                 Abstract Submission
// // // // // // // // //               </button>
// // // // // // // // //             </Link>

// // // // // // // // //             <Link to="/register">
// // // // // // // // //               <button
// // // // // // // // //                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
// // // // // // // // //                 bg-gradient-to-r from-[#243a6b] to-[#3f5fa3]
// // // // // // // // //                 hover:opacity-90 transition border border-white/30"
// // // // // // // // //               >
// // // // // // // // //                 Register
// // // // // // // // //               </button>
// // // // // // // // //             </Link>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Stats */}
// // // // // // // // //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl">
// // // // // // // // //           {stats.map((stat, index) => (
// // // // // // // // //             <div
// // // // // // // // //               key={index}
// // // // // // // // //               className={`pl-4 ${
// // // // // // // // //                 index !== 0 ? "border-l border-white/30" : ""
// // // // // // // // //               }`}
// // // // // // // // //             >
// // // // // // // // //               <p className="text-3xl lg:text-4xl font-bold">
// // // // // // // // //                 {stat.value}
// // // // // // // // //               </p>
// // // // // // // // //               <p className="mt-1 text-sm text-white/80 leading-tight">
// // // // // // // // //                 {stat.label}
// // // // // // // // //               </p>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default HeroSection;



// // // // // // // // import React from "react";
// // // // // // // // import { Link } from "react-router-dom";

// // // // // // // // const stats = [
// // // // // // // //   { value: "35+", label: "Expected Speakers" },
// // // // // // // //   { value: "20+", label: "Countries Represented" },
// // // // // // // //   { value: "150+", label: "Participants" },
// // // // // // // //   { value: "25+", label: "Sessions & Activities" },
// // // // // // // // ];

// // // // // // // // const HeroSection: React.FC = () => {
// // // // // // // //   return (
// // // // // // // //     <section className="relative w-full h-[470px] text-white overflow-hidden">

// // // // // // // //       {/* Background Video */}
// // // // // // // //       <video
// // // // // // // //         className="absolute inset-0 w-full h-full object-cover"
// // // // // // // //         src="/AdobeStock_1249345095_Video_HD_Preview.mp4"
// // // // // // // //         autoPlay
// // // // // // // //         loop
// // // // // // // //         muted
// // // // // // // //         playsInline
// // // // // // // //       />

// // // // // // // //       {/* Blue Overlay */}
// // // // // // // //       <div
// // // // // // // //         className="absolute inset-0"
// // // // // // // //         style={{
// // // // // // // //           background: "linear-gradient(90deg, rgba(11, 94, 215, 0.45) 0%, rgba(11, 94, 215, 0.32) 50%, rgba(11, 94, 215, 0.18) 100%)"
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //       <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-16">

// // // // // // // //         {/* Heading + Buttons */}
// // // // // // // //         <div className="max-w-4xl">
// // // // // // // //           <h1 className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
// // // // // // // //             3rd Global Conference on <br />
// // // // // // // //             Biomedical Technology – <br />
// // // // // // // //             July 2026, Rome, Italy.
// // // // // // // //           </h1>

// // // // // // // //           {/* Buttons */}
// // // // // // // //           <div className="mt-6 flex flex-wrap gap-4">
// // // // // // // //             <Link to="/abstract-submission">
// // // // // // // //               <button
// // // // // // // //                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
// // // // // // // //                 bg-gradient-to-r from-[#0f5bdc] to-[#1e88e5]
// // // // // // // //                 hover:opacity-90 transition"
// // // // // // // //               >
// // // // // // // //                 Abstract Submission
// // // // // // // //               </button>
// // // // // // // //             </Link>

// // // // // // // //             <Link to="/register">
// // // // // // // //               <button
// // // // // // // //                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
// // // // // // // //                 bg-gradient-to-r from-[#243a6b] to-[#3f5fa3]
// // // // // // // //                 hover:opacity-90 transition border border-white/30"
// // // // // // // //               >
// // // // // // // //                 Register
// // // // // // // //               </button>
// // // // // // // //             </Link>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Stats */}
// // // // // // // //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl">
// // // // // // // //           {stats.map((stat, index) => (
// // // // // // // //             <div
// // // // // // // //               key={index}
// // // // // // // //               className={`pl-4 ${
// // // // // // // //                 index !== 0 ? "border-l border-white/30" : ""
// // // // // // // //               }`}
// // // // // // // //             >
// // // // // // // //               <p className="text-3xl lg:text-4xl font-bold">
// // // // // // // //                 {stat.value}
// // // // // // // //               </p>
// // // // // // // //               <p className="mt-1 text-sm text-white/80 leading-tight">
// // // // // // // //                 {stat.label}
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default HeroSection;



// // // // // // // import React from "react";
// // // // // // // import { Link } from "react-router-dom";

// // // // // // // const stats = [
// // // // // // //   { value: "35+", label: "Expected Speakers" },
// // // // // // //   { value: "20+", label: "Countries Represented" },
// // // // // // //   { value: "150+", label: "Participants" },
// // // // // // //   { value: "25+", label: "Sessions & Activities" },
// // // // // // // ];

// // // // // // // const HeroSection: React.FC = () => {
// // // // // // //   return (
// // // // // // //     <section className="relative w-full h-[470px] text-white overflow-hidden">

// // // // // // //       {/* Background Video */}
// // // // // // //       <video
// // // // // // //         className="absolute inset-0 w-full h-full object-cover"
// // // // // // //         src="/AdobeStock_1249345095_Video_HD_Preview.mp4"
// // // // // // //         autoPlay
// // // // // // //         loop
// // // // // // //         muted
// // // // // // //         playsInline
// // // // // // //       />

// // // // // // //       {/* Emerald Overlay (NO BLUE) */}
// // // // // // //       <div
// // // // // // //         className="absolute inset-0"
// // // // // // //         style={{
// // // // // // //           background:
// // // // // // //             "linear-gradient(90deg, rgba(4,120,87,0.55) 0%, rgba(4,120,87,0.42) 50%, rgba(4,120,87,0.28) 100%)",
// // // // // // //         }}
// // // // // // //       />

// // // // // // //       <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-16">

// // // // // // //         {/* Heading + Buttons */}
// // // // // // //         <div className="max-w-4xl">
// // // // // // //           <h1 className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
// // // // // // //             3rd Global Conference on <br />
// // // // // // //             Biomedical Technology – <br />
// // // // // // //             July 2026, Rome, Italy.
// // // // // // //           </h1>

// // // // // // //           {/* Buttons */}
// // // // // // //           <div className="mt-6 flex flex-wrap gap-4">
// // // // // // //             <Link to="/abstract-submission">
// // // // // // //               <button
// // // // // // //                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
// // // // // // //                 bg-[#047857] text-white
// // // // // // //                 hover:bg-[#065f46] transition shadow-md"
// // // // // // //               >
// // // // // // //                 Abstract Submission
// // // // // // //               </button>
// // // // // // //             </Link>

// // // // // // //             <Link to="/register">
// // // // // // //               <button
// // // // // // //                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
// // // // // // //                 bg-[#84CC16] text-[#1E293B]
// // // // // // //                 hover:bg-[#65a30d] transition shadow-md"
// // // // // // //               >
// // // // // // //                 Register
// // // // // // //               </button>
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Stats */}
// // // // // // //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl">
// // // // // // //           {stats.map((stat, index) => (
// // // // // // //             <div
// // // // // // //               key={index}
// // // // // // //               className={`pl-4 ${
// // // // // // //                 index !== 0 ? "border-l border-white/30" : ""
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               <p className="text-3xl lg:text-4xl font-bold text-white">
// // // // // // //                 {stat.value}
// // // // // // //               </p>
// // // // // // //               <p className="mt-1 text-sm text-white/80 leading-tight">
// // // // // // //                 {stat.label}
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default HeroSection;






// // // // // // import React from "react";
// // // // // // import { Calendar, MapPin, Globe } from "lucide-react";
// // // // // // import { Link } from "react-router-dom";

// // // // // // const HeroSection: React.FC = () => {
// // // // // //   return (
// // // // // //     <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white">
      
// // // // // //       {/* Background Overlay */}
// // // // // //       <div className="absolute inset-0 bg-black/40"></div>

// // // // // //       {/* Optional Background Image */}
// // // // // //       <img
// // // // // //         src="/renewable-hero.jpg"
// // // // // //         alt="Global Renewable Energy Meet Conference"
// // // // // //         className="absolute inset-0 w-full h-full object-cover"
// // // // // //       />

// // // // // //       {/* Content */}
// // // // // //       <div className="relative container mx-auto px-6 py-24 lg:py-32">
// // // // // //         <div className="max-w-4xl">

// // // // // //           {/* Badge */}
// // // // // //           <span className="inline-block mb-4 rounded-full bg-white/15 px-5 py-1 text-sm tracking-wide backdrop-blur">
// // // // // //             International Conference 2026
// // // // // //           </span>

// // // // // //           {/* Heading */}
// // // // // //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
// // // // // //             Global Renewable <br />
// // // // // //             <span className="text-green-300">Energy Meet 2026</span>
// // // // // //           </h1>

// // // // // //           {/* Subheading */}
// // // // // //           <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
// // // // // //             Accelerating the global transition to sustainable, clean, and
// // // // // //             renewable energy through innovation, policy, and collaboration.
// // // // // //           </p>

// // // // // //           {/* Event Info */}
// // // // // //           <div className="mt-8 flex flex-wrap gap-6 text-sm md:text-base">
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <Calendar className="w-5 h-5 text-green-300" />
// // // // // //               <span>15–17 September 2026</span>
// // // // // //             </div>
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <MapPin className="w-5 h-5 text-green-300" />
// // // // // //               <span>Hybrid · Singapore</span>
// // // // // //             </div>
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <Globe className="w-5 h-5 text-green-300" />
// // // // // //               <span>Global Participation</span>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* CTAs */}
// // // // // //           <div className="mt-10 flex flex-col sm:flex-row gap-4">
// // // // // //             <Link
// // // // // //               to="/register"
// // // // // //               className="inline-flex items-center justify-center rounded-xl bg-green-400 px-8 py-3 font-semibold text-green-900 hover:bg-green-300 transition"
// // // // // //             >
// // // // // //               Register Now
// // // // // //             </Link>

// // // // // //             <Link
// // // // // //               to="/abstract-submission"
// // // // // //               className="inline-flex items-center justify-center rounded-xl border border-white/40 px-8 py-3 font-semibold text-white hover:bg-white/10 transition"
// // // // // //             >
// // // // // //               Submit Abstract
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default HeroSection;



// // // // // import { motion } from "framer-motion";
// // // // // import { useEffect, useRef, useState } from "react";

// // // // // const HeroSection = () => {
// // // // //   return (
// // // // //     <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
// // // // //       <div>
// // // // //         <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
// // // // //           Better every day
// // // // //         </span>
// // // // //         <h3 className="text-4xl md:text-6xl font-semibold">
// // // // //           Let's change it up a bit
// // // // //         </h3>
// // // // //         <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
// // // // //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
// // // // //           error repellat voluptatibus ad.
// // // // //         </p>
// // // // //         <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
// // // // //           Find a class
// // // // //         </button>
// // // // //       </div>
// // // // //       <ShuffleGrid />
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // const shuffle = (array) => {
// // // // //   let currentIndex = array.length,
// // // // //     randomIndex;

// // // // //   while (currentIndex != 0) {
// // // // //     randomIndex = Math.floor(Math.random() * currentIndex);
// // // // //     currentIndex--;

// // // // //     [array[currentIndex], array[randomIndex]] = [
// // // // //       array[randomIndex],
// // // // //       array[currentIndex],
// // // // //     ];
// // // // //   }

// // // // //   return array;
// // // // // };

// // // // // const squareData = [
// // // // //   {
// // // // //     id: 1,
// // // // //     src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 5,
// // // // //     src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 6,
// // // // //     src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 7,
// // // // //     src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 8,
// // // // //     src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 9,
// // // // //     src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 10,
// // // // //     src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 11,
// // // // //     src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 12,
// // // // //     src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 13,
// // // // //     src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 14,
// // // // //     src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 15,
// // // // //     src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
// // // // //   },
// // // // //   {
// // // // //     id: 16,
// // // // //     src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
// // // // //   },
// // // // // ];

// // // // // const generateSquares = () => {
// // // // //   return shuffle(squareData).map((sq) => (
// // // // //     <motion.div
// // // // //       key={sq.id}
// // // // //       layout
// // // // //       transition={{ duration: 1.5, type: "spring" }}
// // // // //       className="w-full h-full"
// // // // //       style={{
// // // // //         backgroundImage: `url(${sq.src})`,
// // // // //         backgroundSize: "cover",
// // // // //       }}
// // // // //     ></motion.div>
// // // // //   ));
// // // // // };

// // // // // const ShuffleGrid = () => {
// // // // //   const timeoutRef = useRef(null);
// // // // //   const [squares, setSquares] = useState(generateSquares());

// // // // //   useEffect(() => {
// // // // //     shuffleSquares();

// // // // //     return () => clearTimeout(timeoutRef.current);
// // // // //   }, []);

// // // // //   const shuffleSquares = () => {
// // // // //     setSquares(generateSquares());

// // // // //     timeoutRef.current = setTimeout(shuffleSquares, 3000);
// // // // //   };

// // // // //   return (
// // // // //     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
// // // // //       {squares.map((sq) => sq)}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;







// // // // import { ReactLenis } from "lenis/react";

// // // // import {
// // // //   motion,
// // // //   useMotionTemplate,
// // // //   useScroll,
// // // //   useTransform,
// // // // } from "framer-motion";
// // // // import { FiArrowRight, FiMapPin } from "react-icons/fi";
// // // // import { useRef } from "react";
// // // // import { Leaf } from "lucide-react";

// // // // /* ================= HERO SECTION ROOT ================= */

// // // // export const HeroSection = () => {
// // // //   return (
// // // //     <div className="bg-zinc-950">
// // // //       <ReactLenis
// // // //         root
// // // //         options={{
// // // //           lerp: 0.05,
// // // //         }}
// // // //       >
// // // //         <Nav />
// // // //         <Hero />
// // // //         {/* <Agenda /> */}
// // // //       </ReactLenis>
// // // //     </div>
// // // //   );
// // // // };

// // // // /* ================= NAV ================= */

// // // // const Nav = () => {
// // // //   return (
// // // //     <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 text-white">
// // // //       <div className="flex items-center gap-2">
// // // //         <Leaf className="text-2xl text-green-400" />
// // // //         <span className="font-semibold tracking-wide">
// // // //           Global Renewable Meet
// // // //         </span>
// // // //       </div>

// // // //       <button
// // // //         onClick={() =>
// // // //           document
// // // //             .getElementById("conference-agenda")
// // // //             ?.scrollIntoView({ behavior: "smooth" })
// // // //         }
// // // //         className="flex items-center gap-1 text-xs uppercase text-zinc-400 hover:text-white transition"
// // // //       >
// // // //         Conference Agenda <FiArrowRight />
// // // //       </button>
// // // //     </nav>
// // // //   );
// // // // };

// // // // /* ================= HERO ================= */

// // // // const SECTION_HEIGHT = 1500;

// // // // const Hero = () => {
// // // //   return (
// // // //     <div
// // // //       style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
// // // //       className="relative w-full"
// // // //     >
// // // //       <CenterImage />
// // // //       <ParallaxImages />

// // // //       {/* Bottom Fade */}
// // // //       <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
// // // //     </div>
// // // //   );
// // // // };

// // // // /* ================= CENTER IMAGE ================= */

// // // // const CenterImage = () => {
// // // //   const { scrollY } = useScroll();

// // // //   const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
// // // //   const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

// // // //   const clipPath = useMotionTemplate`
// // // //     polygon(
// // // //       ${clip1}% ${clip1}%,
// // // //       ${clip2}% ${clip1}%,
// // // //       ${clip2}% ${clip2}%,
// // // //       ${clip1}% ${clip2}%
// // // //     )
// // // //   `;

// // // //   const backgroundSize = useTransform(
// // // //     scrollY,
// // // //     [0, SECTION_HEIGHT + 500],
// // // //     ["170%", "100%"]
// // // //   );

// // // //   const opacity = useTransform(
// // // //     scrollY,
// // // //     [SECTION_HEIGHT, SECTION_HEIGHT + 500],
// // // //     [1, 0]
// // // //   );

// // // //   return (
// // // //     <motion.div
// // // //       className="sticky top-0 h-screen w-full"
// // // //       style={{
// // // //         clipPath,
// // // //         backgroundSize,
// // // //         opacity,
// // // //         backgroundImage:
// // // //           "url(Gemini_Generated_Image_11oqjx11oqjx11oq.png)",
// // // //         backgroundPosition: "center",
// // // //         backgroundRepeat: "no-repeat",
// // // //       }}
// // // //     />
// // // //   );
// // // // };

// // // // /* ================= PARALLAX IMAGES ================= */

// // // // const ParallaxImages = () => {
// // // //   return (
// // // //     <div className="mx-auto max-w-5xl px-4 pt-[200px]">
// // // //       <ParallaxImg
// // // //         src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
// // // //         alt="Wind Energy"
// // // //         start={-200}
// // // //         end={200}
// // // //         className="w-1/3"
// // // //       />
// // // //       <ParallaxImg
// // // //         src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9"
// // // //         alt="Solar Power"
// // // //         start={200}
// // // //         end={-250}
// // // //         className="mx-auto w-2/3"
// // // //       />
// // // //       <ParallaxImg
// // // //         src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
// // // //         alt="Hydro Energy"
// // // //         start={-200}
// // // //         end={200}
// // // //         className="ml-auto w-1/3"
// // // //       />
// // // //       <ParallaxImg
// // // //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdx79YxrvjYD-Psb9np7J3CaFM1Eqsk6ys2Q&s"
// // // //         alt="Green Energy City"
// // // //         start={0}
// // // //         end={-500}
// // // //         className="ml-24 w-5/12"
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // const ParallaxImg = ({ className, alt, src, start, end }) => {
// // // //   const ref = useRef(null);

// // // //   const { scrollYProgress } = useScroll({
// // // //     target: ref,
// // // //     offset: [`${start}px end`, `end ${end * -1}px`],
// // // //   });

// // // //   const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
// // // //   const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
// // // //   const y = useTransform(scrollYProgress, [0, 1], [start, end]);

// // // //   const transform = useMotionTemplate`
// // // //     translateY(${y}px) scale(${scale})
// // // //   `;

// // // //   return (
// // // //     <motion.img
// // // //       ref={ref}
// // // //       src={src}
// // // //       alt={alt}
// // // //       className={className}
// // // //       style={{ transform, opacity }}
// // // //     />
// // // //   );
// // // // };

// // // // /* ================= AGENDA ================= */

// // // // const Agenda = () => {
// // // //   return (
// // // //     <section
// // // //       id="conference-agenda"
// // // //       className="mx-auto max-w-5xl px-4 py-48 text-white"
// // // //     >
// // // //       <motion.h1
// // // //         initial={{ y: 48, opacity: 0 }}
// // // //         whileInView={{ y: 0, opacity: 1 }}
// // // //         transition={{ duration: 0.75 }}
// // // //         className="mb-20 text-4xl font-black uppercase"
// // // //       >
// // // //         Conference Agenda
// // // //       </motion.h1>

// // // //       <AgendaItem title="Solar & Wind Innovations" date="Day 1" location="Main Hall" />
// // // //       <AgendaItem title="Green Hydrogen & EVs" date="Day 2" location="Conference Room A" />
// // // //       <AgendaItem title="Policy & Sustainability" date="Day 3" location="Global Forum" />
// // // //     </section>
// // // //   );
// // // // };

// // // // const AgendaItem = ({ title, date, location }) => {
// // // //   return (
// // // //     <motion.div
// // // //       initial={{ y: 48, opacity: 0 }}
// // // //       whileInView={{ y: 0, opacity: 1 }}
// // // //       transition={{ duration: 0.75 }}
// // // //       className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
// // // //     >
// // // //       <div>
// // // //         <p className="mb-1.5 text-xl">{title}</p>
// // // //         <p className="text-sm uppercase text-zinc-500">{date}</p>
// // // //       </div>
// // // //       <div className="flex items-center gap-1.5 text-sm uppercase text-zinc-500">
// // // //         {location}
// // // //         <FiMapPin />
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // };


// // // // export default HeroSection;





// // // import { ReactLenis } from "lenis/react";
// // // import {
// // //   motion,
// // //   useMotionTemplate,
// // //   useScroll,
// // //   useTransform,
// // // } from "framer-motion";
// // // import { FiArrowRight, FiMapPin } from "react-icons/fi";
// // // import { useRef } from "react";
// // // import { Leaf } from "lucide-react";

// // // /* ================= HERO SECTION ROOT ================= */

// // // export const HeroSection = () => {
// // //   return (
// // //     <div className="bg-zinc-950">
// // //       <ReactLenis
// // //         root
// // //         options={{
// // //           lerp: 0.05,
// // //         }}
// // //       >
// // //         {/* <Nav /> */}
// // //         <Hero />
// // //         {/* <Agenda /> */}
// // //       </ReactLenis>
// // //     </div>
// // //   );
// // // };

// // // /* ================= NAV ================= */

// // // const Nav = () => {
// // //   return (
// // //     <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 text-white">
// // //       <div className="flex items-center gap-2">
// // //         <Leaf className="text-2xl text-green-400" />
// // //         <span className="font-semibold tracking-wide">
// // //           Global Renewable Meet
// // //         </span>
// // //       </div>

// // //       <button
// // //         onClick={() =>
// // //           document
// // //             .getElementById("conference-agenda")
// // //             ?.scrollIntoView({ behavior: "smooth" })
// // //         }
// // //         className="flex items-center gap-1 text-xs uppercase text-zinc-400 hover:text-white transition"
// // //       >
// // //         Conference Agenda <FiArrowRight />
// // //       </button>
// // //     </nav>
// // //   );
// // // };

// // // /* ================= HERO ================= */

// // // const SECTION_HEIGHT = 1500;

// // // const Hero = () => {
// // //   return (
// // //     <div
// // //       style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
// // //       className="relative w-full"
// // //     >
// // //       <CenterImage />
// // //       <ParallaxImages />

// // //       {/* Bottom Fade to smooth transition to next section */}
// // //       <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
// // //     </div>
// // //   );
// // // };

// // // /* ================= CENTER IMAGE & HERO CONTENT ================= */

// // // const CenterImage = () => {
// // //   const { scrollY } = useScroll();

// // //   // The clipping effect that shrinks the image from the corners
// // //   const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
// // //   const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

// // //   const clipPath = useMotionTemplate`
// // //     polygon(
// // //       ${clip1}% ${clip1}%,
// // //       ${clip2}% ${clip1}%,
// // //       ${clip2}% ${clip2}%,
// // //       ${clip1}% ${clip2}%
// // //     )
// // //   `;

// // //   // Slight zoom out effect on scroll
// // //   const backgroundSize = useTransform(
// // //     scrollY,
// // //     [0, SECTION_HEIGHT + 500],
// // //     ["170%", "100%"]
// // //   );

// // //   // Fades out as it scrolls past the viewport
// // //   const opacity = useTransform(
// // //     scrollY,
// // //     [SECTION_HEIGHT, SECTION_HEIGHT + 500],
// // //     [1, 0]
// // //   );

// // //   return (
// // //     <motion.div
// // //       className="sticky top-0 h-screen w-full overflow-hidden"
// // //       style={{
// // //         clipPath,
// // //         backgroundSize,
// // //         opacity,
// // //         // Ensure you have the correct path to your image asset
   
// // //       }}
// // //     >
// // //       {/* Dark Overlay for better text contrast */}
// // //       <div className="absolute inset-0 bg-black/40" />

// // //       {/* Hero Text Content */}
// // //       <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
// // //         <motion.div
// // //           initial={{ y: 30, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ duration: 0.8, delay: 0.2 }}
// // //         >
// // //           <h1 className="mb-4 text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl drop-shadow-lg">
// // //             The World's Premier <br /> Renewable Energy Conference
// // //           </h1>
// // //         </motion.div>

// // //         <motion.div
// // //           initial={{ y: 30, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ duration: 0.8, delay: 0.4 }}
// // //         >
// // //           <p className="mb-6 max-w-2xl text-lg text-zinc-100 sm:text-xl drop-shadow-md">
// // //             Be Part of the Future in Tokyo. Connect with global leaders and
// // //             shape the sustainable energy landscape.
// // //           </p>
// // //         </motion.div>

// // //         <motion.div
// // //           initial={{ y: 30, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ duration: 0.8, delay: 0.5 }}
// // //           className="mb-8 flex items-center gap-2 text-zinc-200"
// // //         >
// // //           <FiMapPin className="text-green-400" />
// // //           <span className="font-medium">
// // //             DoubleTree by Hilton Tokyo Ariake, Japan
// // //           </span>
// // //         </motion.div>

// // //         <motion.div
// // //           initial={{ y: 30, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ duration: 0.8, delay: 0.6 }}
// // //           className="flex flex-wrap justify-center gap-4"
// // //         >
// // //           <button className="rounded-full bg-blue-600 px-8 py-3 text-lg font-bold text-white transition hover:bg-blue-500 hover:scale-105 active:scale-95">
// // //             Register Now
// // //           </button>
// // //           <button className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-bold text-white transition hover:bg-white/10 hover:scale-105 active:scale-95">
// // //             Abstract Submission
// // //           </button>
// // //         </motion.div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // /* ================= PARALLAX IMAGES ================= */

// // // const ParallaxImages = () => {
// // //   return (
// // //     <div className="mx-auto max-w-5xl px-4 pt-[200px]">
// // //       <ParallaxImg
// // //         src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop"
// // //         alt="Wind Energy"
// // //         start={-200}
// // //         end={200}
// // //         className="w-1/3 shadow-2xl"
// // //       />
// // //       <ParallaxImg
// // //         src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1000&auto=format&fit=crop"
// // //         alt="Solar Power"
// // //         start={200}
// // //         end={-250}
// // //         className="mx-auto w-2/3 shadow-2xl"
// // //       />
// // //       <ParallaxImg
// // //         src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop"
// // //         alt="Hydro Energy"
// // //         start={-200}
// // //         end={200}
// // //         className="ml-auto w-1/3 shadow-2xl"
// // //       />
// // //       <ParallaxImg
// // //         src="https://plus.unsplash.com/premium_photo-1679917152575-041589b90e14?q=80&w=1000&auto=format&fit=crop"
// // //         alt="Green Energy City"
// // //         start={0}
// // //         end={-500}
// // //         className="ml-24 w-5/12 shadow-2xl"
// // //       />
// // //     </div>
// // //   );
// // // };

// // // const ParallaxImg = ({ className, alt, src, start, end }) => {
// // //   const ref = useRef(null);

// // //   const { scrollYProgress } = useScroll({
// // //     target: ref,
// // //     offset: [`${start}px end`, `end ${end * -1}px`],
// // //   });

// // //   const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
// // //   const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
// // //   const y = useTransform(scrollYProgress, [0, 1], [start, end]);

// // //   const transform = useMotionTemplate`
// // //     translateY(${y}px) scale(${scale})
// // //   `;

// // //   return (
// // //     <motion.img
// // //       ref={ref}
// // //       src={src}
// // //       alt={alt}
// // //       className={`${className} rounded-xl object-cover`}
// // //       style={{ transform, opacity }}
// // //     />
// // //   );
// // // };

// // // /* ================= AGENDA ================= */

// // // const Agenda = () => {
// // //   return (
// // //     <section
// // //       id="conference-agenda"
// // //       className="relative z-10 mx-auto max-w-5xl px-4 py-48 text-white"
// // //     >
// // //       <motion.h1
// // //         initial={{ y: 48, opacity: 0 }}
// // //         whileInView={{ y: 0, opacity: 1 }}
// // //         transition={{ duration: 0.75 }}
// // //         viewport={{ once: true }}
// // //         className="mb-20 text-4xl font-black uppercase"
// // //       >
// // //         Conference Agenda
// // //       </motion.h1>

// // //       <AgendaItem
// // //         title="Solar & Wind Innovations"
// // //         date="Day 1"
// // //         location="Main Hall"
// // //       />
// // //       <AgendaItem
// // //         title="Green Hydrogen & EVs"
// // //         date="Day 2"
// // //         location="Conference Room A"
// // //       />
// // //       <AgendaItem
// // //         title="Policy & Sustainability"
// // //         date="Day 3"
// // //         location="Global Forum"
// // //       />
// // //     </section>
// // //   );
// // // };

// // // const AgendaItem = ({ title, date, location }) => {
// // //   return (
// // //     <motion.div
// // //       initial={{ y: 48, opacity: 0 }}
// // //       whileInView={{ y: 0, opacity: 1 }}
// // //       transition={{ duration: 0.75 }}
// // //       viewport={{ once: true }}
// // //       className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
// // //     >
// // //       <div>
// // //         <p className="mb-1.5 text-xl font-semibold">{title}</p>
// // //         <p className="text-sm uppercase text-zinc-500">{date}</p>
// // //       </div>
// // //       <div className="flex items-center gap-1.5 text-sm uppercase text-zinc-500">
// // //         {location}
// // //         <FiMapPin />
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // export default HeroSection;



// // import { motion } from "framer-motion";
// // import { useEffect, useRef, useState } from "react";
// // import { ArrowRight } from "lucide-react";

// // const HeroSection = () => {
// //   return (
// //     <section className="w-full px-8 py-20 bg-white grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto overflow-hidden">
// //       {/* Text Content */}
// //       <div className="relative z-10">
// //         <span className="block mb-4 text-sm md:text-base text-slate-500 font-semibold tracking-wider uppercase">
// //           ICBME 2026 • Rome, Italy
// //         </span>
// //         <h3 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1]">
// //           The Future of <br />
// //           <span className="text-slate-500">Intelligent Systems</span>
// //         </h3>
// //         <p className="text-base md:text-lg text-slate-600 my-6 md:my-8 leading-relaxed max-w-lg">
// //           Join the world's leading minds in Artificial Intelligence, Machine Learning, 
// //           and Robotics. Discover breakthrough research and build global connections.
// //         </p>
        
// //         <div className="flex flex-wrap gap-4">
// //           <button className="bg-slate-900 text-white font-medium py-3 px-6 rounded-lg transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95 flex items-center gap-2">
// //             Register Now
// //           </button>
// //           <button className="text-slate-700 font-medium py-3 px-6 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 flex items-center gap-2">
// //             View Agenda <ArrowRight size={18} />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Grid Animation */}
// //       <ShuffleGrid />
// //     </section>
// //   );
// // };

// // const shuffle = (array: typeof squareData) => {
// //   let currentIndex = array.length,
// //     randomIndex;

// //   while (currentIndex !== 0) {
// //     randomIndex = Math.floor(Math.random() * currentIndex);
// //     currentIndex--;

// //     [array[currentIndex], array[randomIndex]] = [
// //       array[randomIndex],
// //       array[currentIndex],
// //     ];
// //   }

// //   return array;
// // };

// // // Tech & AI Themed Images
// // const squareData = [
// //   {
// //     id: 1,
// //     src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", // Robot Face
// //   },
// //   {
// //     id: 2,
// //     src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80", // Code Screen
// //   },
// //   {
// //     id: 3,
// //     src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", // Microchip
// //   },
// //   {
// //     id: 4,
// //     src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80", // AI Abstract
// //   },
// //   {
// //     id: 5,
// //     src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80", // Robot Hand
// //   },
// //   {
// //     id: 6,
// //     src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", // Cyberpunk City
// //   },
// //   {
// //     id: 7,
// //     src: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=800&q=80", // Server Room
// //   },
// //   {
// //     id: 8,
// //     src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", // Matrix Code
// //   },
// //   {
// //     id: 9,
// //     src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", // Laptop Lab
// //   },
// //   {
// //     id: 10,
// //     src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // Network Globe
// //   },
// //   {
// //     id: 11,
// //     src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Team Working
// //   },
// //   {
// //     id: 12,
// //     src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80", // Neural Network
// //   },
// //   {
// //     id: 13,
// //     src: "https://images.unsplash.com/photo-1535378437327-b7128063da11?auto=format&fit=crop&w=800&q=80", // AI Eye
// //   },
// //   {
// //     id: 14,
// //     src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=80", // Data Visualization
// //   },
// //   {
// //     id: 15,
// //     src: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&w=800&q=80", // Abstract Tech
// //   },
// //   {
// //     id: 16,
// //     src: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80", // AI Particles
// //   },
// // ];

// // const generateSquares = () => {
// //   return shuffle([...squareData]).map((sq) => (
// //     <motion.div
// //       key={sq.id}
// //       layout
// //       transition={{ duration: 1.5, type: "spring" }}
// //       className="w-full h-full rounded-md shadow-sm"
// //       style={{
// //         backgroundImage: `url(${sq.src})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //       }}
// //     />
// //   ));
// // };

// // const ShuffleGrid = () => {
// //   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
// //   const [squares, setSquares] = useState(generateSquares());

// //   useEffect(() => {
// //     shuffleSquares();

// //     return () => {
// //       if (timeoutRef.current) clearTimeout(timeoutRef.current);
// //     };
// //   }, []);

// //   const shuffleSquares = () => {
// //     setSquares(generateSquares());
// //     timeoutRef.current = setTimeout(shuffleSquares, 3000);
// //   };

// //   return (
// //     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2">
// //       {squares.map((sq) => sq)}
// //     </div>
// //   );
// // };

// // export default HeroSection;



// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { ArrowRight } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="w-full px-8 py-20 bg-white grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto overflow-hidden">
//       {/* Text Content */}
//       <div className="relative z-10">
//         <span className="block mb-4 text-sm md:text-base text-slate-500 font-semibold tracking-wider uppercase">
//           ICBME 2026 • Seoul, South Korea
//         </span>
//         <h3 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1]">
//           Biomedical Engineering & <br />
//           <span className="text-slate-500">Healthcare Innovation Summit 
// 2026</span>
//         </h3>
//         <p className="text-base md:text-lg text-slate-600 my-6 md:my-8 leading-relaxed max-w-lg">
//           Join global pioneers at the International Conference on Biomedical Engineering. 
//           Explore the future of medical devices, tissue engineering, and healthcare technology.
//         </p>
        
//         <div className="flex flex-wrap gap-4">
//           <button className="bg-slate-900 text-white font-medium py-3 px-6 rounded-lg transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95 flex items-center gap-2">
//             Register Now
//           </button>
//           <button className="text-slate-700 font-medium py-3 px-6 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 flex items-center gap-2">
//             Abstarct Submission <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Grid Animation */}
//       <ShuffleGrid />
//     </section>
//   );
// };

// const shuffle = (array: typeof squareData) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// // Images (Kept unchanged as requested)
// const squareData = [
//   {
//     id: 1,
//     src: "biomedicalrobot.jpg", 
//   },
//   {
//     id: 2,
//     src: "health-sensor.jpg", 
//   },
//   {
//     id: 3,
//     src: "biomedical-analyzing.jpg", 
//   },
//   {
//     id: 4,
//     src: "biohand.jpg", 
//   },
//   {
//     id: 5,
//     src: "bionic-hand.jpg", 
//   },
//   {
//     id: 6,
//     src: "medical-imagine.jpg", 
//   },

//   {
//     id: 7,
//     src: "Tissue-Engineering-Lab.jpg", 
//   },
//   {
//     id: 8,
//     src: "Neural-Engineering.jpeg", 
//   },
//   {
//     id: 9,
//     src: "Biomedical-Research-Laboratory.jpg", 
//   },
//   {
//     id: 10,
//     src: "Implantable-Medical-Devices.jpg", 
//   },

//   {
//     id: 11,
//     src: "Digital-Healthcare-Data.png", 
//   },

//   {
//     id: 12,
//     src: "Biomechanics-&-Human-Motion.png", 
//   },


//   {
//     id: 13,
//     src: "Laboratory-Microscopy.jpg", 
//   },


//   {
//     id: 14,
//     src: "Smart-Hospital-echnology.png", 
//   },
//   {
//     id: 15,
//     src: "Bioinstrumentation.jpg", 
//   },
//   {
//     id: 16,
//     src: "Regenerative-Medicine-Concept.png", 
//   },
// ];

// const generateSquares = () => {
//   return shuffle([...squareData]).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full rounded-md shadow-sm"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     />
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();

//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());
//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

// export default HeroSection;









import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "35+", label: "Expected Speakers" },
  { value: "20+", label: "Countries Represented" },
  { value: "150+", label: "Participants" },
  { value: "25+", label: "Sessions & Activities" },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[470px] text-white overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/AdobeStock_1249345095_Video_HD_Preview.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Emerald Overlay (NO BLUE) */}
      <div
        className="absolute inset-0"
        // style={{
        //   background:
        //     "linear-gradient(90deg, rgba(4,120,87,0.55) 0%, rgba(4,120,87,0.42) 50%, rgba(4,120,87,0.28) 100%)",
        // }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-16">

        {/* Heading + Buttons */}
        <div className="max-w-4xl">
          <h1 className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            3rd Global Conference on <br />
            Biomedical Technology – <br />
            July 2026, Rome, Italy.
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/abstract-submission">
              <button
                className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
                bg-[#047857] text-white
                hover:bg-[#065f46] transition shadow-md"
              >
                Abstract Submission
              </button>
            </Link>

            <Link to="/register">
              <button
                className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
                bg-[#84CC16] text-[#1E293B]
                hover:bg-[#65a30d] transition shadow-md"
              >
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`pl-4 ${
                index !== 0 ? "border-l border-white/30" : ""
              }`}
            >
              <p className="text-3xl lg:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/80 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
