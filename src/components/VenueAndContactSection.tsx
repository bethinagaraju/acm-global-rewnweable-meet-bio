


// // // // import React from "react";
// // // // import { MapPin, ArrowRight } from "lucide-react";
// // // // import { Link } from "react-router-dom";

// // // // const VenueAndContactSection = () => {
// // // //   return (
// // // //     <div className="py-20 px-6 md:px-16 bg-gray-50">
// // // //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

// // // //         {/* LEFT — Venue Section */}
// // // //         <div
// // // //           className="bg-white p-10 border border-gray-100 text-center transition-all duration-300 hover:shadow-2xl"
// // // //         >
// // // //           <MapPin size={40} className="text-indigo-600 mb-5 mx-auto" />
// // // //           <h3 className="text-3xl font-semibold text-gray-900 mb-3">
// // // //             Conference Venue
// // // //           </h3>
// // // //           <p className="text-gray-600 text-lg font-medium mb-4">
// // // //             Crowne Plaza — St. Peter's Rome
// // // //           </p>
          
// // // //           {/* <p className="text-gray-500 text-sm leading-relaxed mb-8">
// // // //             Nestled near Vatican City, this 4-star superior hotel features
// // // //             advanced conference facilities, modern accommodations, and quick
// // // //             access to Rome’s most iconic cultural and historical landmarks.
// // // //           </p> */}

// // // //           <Link
// // // //             to="/venue-travel"
// // // //             className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3 hover:bg-indigo-700 transition duration-300 font-semibold"
// // // //             title="View detailed venue and travel information for ICBME 2026 Conference in Rome"
// // // //             aria-label="View detailed venue and travel information for ICBME 2026 Conference in Rome"
// // // //           >
// // // //             View Venue Details
// // // //             <ArrowRight size={18}/>
// // // //           </Link>
// // // //         </div>

// // // //         {/* RIGHT — Contact Section */}
// // // //         <div className="p-8 md:p-10 bg-gradient-to-r from-[#333f66] to-[#525f92] text-white shadow-xl">
// // // //           <div className="flex items-center gap-4 mb-6">
// // // //             <div className="w-14 h-14 border-2 border-white p-3 rounded-lg flex justify-center items-center">
// // // //               <svg
// // // //                 xmlns="http://www.w3.org/2000/svg"
// // // //                 fill="none"
// // // //                 viewBox="0 0 24 24"
// // // //                 stroke="currentColor"
// // // //                 className="w-full h-full"
// // // //               >
// // // //                 <path
// // // //                   strokeLinecap="round"
// // // //                   strokeLinejoin="round"
// // // //                   strokeWidth={2}
// // // //                   d="M16 12H8m8 4H8m-4 4h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
// // // //                 />
// // // //               </svg>
// // // //             </div>
// // // //             <h2 className="text-3xl font-semibold">Let's Connect</h2>
// // // //           </div>

// // // //           <p className="text-lg text-gray-200 leading-relaxed mb-8">
// // // //             Have questions about registration, sponsorship, or speaking
// // // //             opportunities? Visit our contact page and our team will get back to
// // // //             you shortly.
// // // //           </p>

// // // //           <Link to="/contact" title="Contact ICBME 2026 Conference Organizers" aria-label="Contact ICBME 2026 Conference Organizers">
// // // //             <button className="bg-white text-[#344278] font-bold py-3 px-10 transition duration-300 hover:bg-gray-200" title="Contact ICBME 2026 Conference Organizers" aria-label="Contact ICBME 2026 Conference Organizers">
// // // //               Contact Us
// // // //             </button>
// // // //           </Link>
// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default VenueAndContactSection;








// // // import React from "react";
// // // import { MapPin, ArrowRight, Mail } from "lucide-react";
// // // import { Link } from "react-router-dom";

// // // const VenueAndContactSection: React.FC = () => {
// // //   return (
// // //     <section className="bg-white py-20 px-4">
// // //       <div className="max-w-7xl mx-auto">

// // //         {/* Section Header */}
// // //         <div className="mb-14 text-center">
// // //           <h2 className="text-3xl md:text-4xl font-bold text-[#0B5ED7] mb-4">
// // //             Venue & Contact Information
// // //           </h2>
// // //           <p className="text-[#1F2937]/70 max-w-2xl mx-auto text-lg">
// // //             Conference venue details and direct communication with the ICBME 2026 organizing committee.
// // //           </p>
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

// // //           {/* Venue Info — wide panel */}
// // //           <div className="lg:col-span-2 bg-[#EAF2FF]/60 border border-[#0B5ED7]/10 p-10 flex flex-col justify-between">
// // //             <div>
// // //               <div className="flex items-center gap-4 mb-6">
// // //                 <div className="w-12 h-12 rounded-full bg-[#0B5ED7]/10 flex items-center justify-center text-[#0B5ED7]">
// // //                   <MapPin size={22} />
// // //                 </div>
// // //                 <h3 className="text-2xl font-semibold text-[#1F2937]">
// // //                   Conference Venue
// // //                 </h3>
// // //               </div>

// // //               <p className="text-xl font-medium text-[#1F2937] mb-3">
// // //                 Crowne Plaza — St. Peter&apos;s Rome
// // //               </p>

// // //               <p className="text-[#1F2937]/70 leading-relaxed max-w-xl">
// // //                 Located near Vatican City, the venue offers modern conference
// // //                 facilities, comfortable accommodation, and convenient access to
// // //                 Rome’s cultural and historical landmarks.
// // //               </p>
// // //             </div>

// // //             <div className="mt-8">
// // //               <Link
// // //                 to="/venue-travel"
// // //                 className="inline-flex items-center gap-2 text-[#0B5ED7] font-semibold hover:text-[#084298] transition"
// // //                 title="View detailed venue and travel information for ICBME 2026"
// // //                 aria-label="View detailed venue and travel information for ICBME 2026"
// // //               >
// // //                 View Venue & Travel Details
// // //                 <ArrowRight size={18} />
// // //               </Link>
// // //             </div>
// // //           </div>

// // //           {/* Contact CTA — vertical card */}
// // //           <div className="bg-[#0B5ED7] p-10 text-white flex flex-col justify-between">
// // //             <div>
// // //               <div className="flex items-center gap-4 mb-6">
// // //                 <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
// // //                   <Mail size={22} />
// // //                 </div>
// // //                 <h3 className="text-2xl font-semibold">
// // //                   Contact the Organizers
// // //                 </h3>
// // //               </div>

// // //               <p className="text-white/90 leading-relaxed mb-8">
// // //                 For inquiries related to registration, submissions, sponsorship,
// // //                 or participation, please reach out to the ICBME 2026 organizing team.
// // //               </p>
// // //             </div>

// // //             <Link
// // //               to="/contact"
// // //               className="inline-flex items-center justify-center bg-white text-[#0B5ED7]
// // //               font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition"
// // //               title="Contact ICBME 2026 Conference Organizers"
// // //               aria-label="Contact ICBME 2026 Conference Organizers"
// // //             >
// // //               Contact Us
// // //             </Link>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default VenueAndContactSection;






// // import React from "react";
// // import { MapPin, ArrowRight, Mail } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const VenueAndContactSection: React.FC = () => {
// //   return (
// //     <section className="bg-white py-20 px-4">
// //       <div className="max-w-7xl mx-auto">

// //         {/* Section Header */}
// //         <div className="mb-14 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold text-[#047857] mb-4">
// //             Venue & Contact Information
// //           </h2>
// //           <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
// //             Conference venue details and direct communication with the ICBME 2026 organizing committee.
// //           </p>
// //         </div>

// //         {/* Main Content */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

// //           {/* Venue Info — wide panel */}
// //           <div className="lg:col-span-2 bg-[#ECFDF5] border border-[#D1FAE5] p-10 flex flex-col justify-between rounded-xl">
// //             <div>
// //               <div className="flex items-center gap-4 mb-6">
// //                 <div className="w-12 h-12 rounded-full bg-[#D1FAE5] flex items-center justify-center text-[#047857]">
// //                   <MapPin size={22} />
// //                 </div>
// //                 <h3 className="text-2xl font-semibold text-[#1E293B]">
// //                   Conference Venue
// //                 </h3>
// //               </div>

// //               <p className="text-xl font-medium text-[#1E293B] mb-3">
// //                 Crowne Plaza — St. Peter&apos;s Rome
// //               </p>

// //               <p className="text-[#64748B] leading-relaxed max-w-xl">
// //                 Located near Vatican City, the venue offers modern conference
// //                 facilities, comfortable accommodation, and convenient access to
// //                 Rome’s cultural and historical landmarks.
// //               </p>
// //             </div>

// //             <div className="mt-8">
// //               <Link
// //                 to="/venue-travel"
// //                 className="inline-flex items-center gap-2 text-[#047857] font-semibold hover:text-[#065F46] transition"
// //                 title="View detailed venue and travel information for ICBME 2026"
// //                 aria-label="View detailed venue and travel information for ICBME 2026"
// //               >
// //                 View Venue & Travel Details
// //                 <ArrowRight size={18} />
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Contact CTA — vertical card */}
// //           <div className="bg-[#047857] p-10 text-white flex flex-col justify-between rounded-xl shadow-lg">
// //             <div>
// //               <div className="flex items-center gap-4 mb-6">
// //                 <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
// //                   <Mail size={22} />
// //                 </div>
// //                 <h3 className="text-2xl font-semibold">
// //                   Contact the Organizers
// //                 </h3>
// //               </div>

// //               <p className="text-white/90 leading-relaxed mb-8">
// //                 For inquiries related to registration, submissions, sponsorship,
// //                 or participation, please reach out to the ICBME 2026 organizing team.
// //               </p>
// //             </div>

// //             <Link
// //               to="/contact"
// //               className="inline-flex items-center justify-center bg-[#84CC16]
// //               text-[#1E293B] font-bold py-3 px-8 rounded-md
// //               hover:bg-[#65A30D] transition"
// //               title="Contact ICBME 2026 Conference Organizers"
// //               aria-label="Contact ICBME 2026 Conference Organizers"
// //             >
// //               Contact Us
// //             </Link>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default VenueAndContactSection;















// import React from "react";
// import { MapPin, ArrowRight, Mail } from "lucide-react";
// import { Link } from "react-router-dom";

// const VenueAndContactSection: React.FC = () => {
//   return (
//     <section className="bg-white py-24 px-6 border-t border-slate-100">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
//             Venue & Contact
//           </h2>
//           <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
//             Essential details for your attendance at ICBME 2026.
//           </p>
//         </div>

//         {/* Main Content - Balanced Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
//           {/* Venue Card */}
//           <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm">
//                   <MapPin size={20} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-slate-900">
//                   Conference Venue
//                 </h3>
//               </div>

//               <div className="space-y-4">
//                 <p className="text-2xl font-medium text-slate-800">
//                   Crowne Plaza — St. Peter&apos;s Rome
//                 </p>
//                 <p className="text-slate-600 leading-relaxed">
//                   Located near Vatican City, the venue offers modern conference
//                   facilities, comfortable accommodation, and convenient access to
//                   Rome’s cultural landmarks.
//                 </p>
//               </div>
//             </div>
            
//             <div className="mt-8 pt-8 border-t border-slate-200/60">
//              <Link
//                 to="/venue-travel"
//                 className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-slate-600 transition-colors group-hover:translate-x-1 duration-300"
//                 title="View detailed venue and travel information"
//               >
//                 View Venue & Travel Details
//                 <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>

//           {/* Contact Card */}
//           <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
//                   <Mail size={20} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-slate-900">
//                   Contact Us
//                 </h3>
//               </div>

//               <div className="space-y-4">
//                  <p className="text-2xl font-medium text-slate-800">
//                   Get in Touch
//                 </p>
//                 <p className="text-slate-600 leading-relaxed">
//                   For inquiries related to registration, submissions, sponsorship,
//                   or participation, please reach out to the ICBME 2026 organizing team.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8 pt-8 border-t border-slate-100">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center w-full sm:w-auto bg-slate-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
//                 title="Contact ICBME 2026 Conference Organizers"
//               >
//                 Contact Organizers
//               </Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default VenueAndContactSection;


import React from "react";
import { MapPin, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const VenueAndContactSection: React.FC = () => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E3B] mb-4 tracking-tight">
            Venue & Contact
          </h2>
          <p className="text-[#6B7C78] max-w-2xl mx-auto text-lg leading-relaxed">
            Essential details for your attendance at ICBME 2026.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Venue Card */}
          <div className="group rounded-2xl p-8 border border-[#E6DED2] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#EEF4F2] border border-[#DCE7E3] flex items-center justify-center text-[#3B6F6A]">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-semibold text-[#2F3E3B]">
                  Conference Venue
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-medium text-[#2F3E3B]">
                  Crowne Plaza — St. Peter&apos;s Rome
                </p>
                <p className="text-[#5F6F6C] leading-relaxed">
                  Located near Vatican City, the venue offers modern conference
                  facilities, comfortable accommodation, and convenient access to
                  Rome’s cultural landmarks.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#E6DED2]">
              <Link
                to="/venue-travel"
                className="inline-flex items-center gap-2 text-[#2F3E3B] font-semibold hover:text-[#3B6F6A] transition-all group-hover:translate-x-1"
                title="View detailed venue and travel information"
              >
                View Venue & Travel Details
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Contact Card */}
          <div style={{
      background:
        "linear-gradient(90deg, rgb(238, 244, 242) 0%, rgba(238, 244, 242, 0.54) 39%, rgb(238, 244, 242) 100%, rgba(238, 244, 242, 0.55) 65%)",
    }} className="group p-8 border border-[#E6DED2] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#EEF4F2] flex items-center justify-center text-[#3B6F6A]">
                  <Mail size={20} />
                </div>
                <h3 className="text-xl font-semibold text-[#2F3E3B]">
                  Contact Us
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-medium text-[#2F3E3B]">
                  Get in Touch
                </p>
                <p className="text-[#5F6F6C] leading-relaxed">
                  For inquiries related to registration, submissions, sponsorship,
                  or participation, please reach out to the ICBME 2026 organizing team.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#FFFFFF]">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#3B6F6A] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#335F5B] transition-all shadow-sm hover:shadow-md"
                title="Contact ICBME 2026 Conference Organizers"
              >
                Contact Organizers
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VenueAndContactSection;
