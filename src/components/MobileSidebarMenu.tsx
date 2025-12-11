// import { useState } from "react";
// import { ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function MobileSidebarMenu() {
//   const [openSections, setOpenSections] = useState({
//     program: false,
//     information: false,
//     about: false,
//   });

//   const toggle = (section: keyof typeof openSections) => {
//     setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   return (
//     <div className="w-full bg-white p-5 space-y-5 text-[#1a1a1a] text-[16px] leading-relaxed">

//       <Link to="/" className="block font-semibold">Home</Link>

//       <Link to="/committee" className="block font-semibold">Scientific Committee</Link>

//       <Link to="/speakers" className="block font-semibold">Speakers</Link>

//       {/* Program */}
//       <div>
//         <button
//           onClick={() => toggle("program")}
//           className="flex items-center gap-2 font-semibold w-full text-left"
//         >
//           <ChevronRight
//             className={`transition-transform ${openSections.program ? "rotate-90" : ""}`}
//             size={18}
//           />
//           Program
//         </button>

//         {openSections.program && (
//           <div className="ml-7 mt-2 space-y-2 text-[15px]">
//             <Link to="/scientific-sessions" className="block">
//               Scientific Sessions
//             </Link>
//           </div>
//         )}
//       </div>

//       {/* Information */}
//       <div>
//         <button
//           onClick={() => toggle("information")}
//           className="flex items-center gap-2 font-semibold w-full text-left"
//         >
//           <ChevronRight
//             className={`transition-transform ${openSections.information ? "rotate-90" : ""}`}
//             size={18}
//           />
//           Information
//         </button>

//         {openSections.information && (
//           <div className="ml-7 mt-2 space-y-2 text-[15px]">
//             <Link to="/venue" className="block">Venue</Link>
//             <Link to="/accommodation" className="block">Accommodation</Link>
//             <Link to="/guidelines" className="block">Guidelines</Link>
//             <Link to="/faq" className="block">FAQ</Link>
//             <Link to="/important-dates" className="block">Important Dates</Link>
//           </div>
//         )}
//       </div>

//       {/* About */}
//       <div>
//         <button
//           onClick={() => toggle("about")}
//           className="flex items-center gap-2 font-semibold w-full text-left"
//         >
//           <ChevronRight
//             className={`transition-transform ${openSections.about ? "rotate-90" : ""}`}
//             size={18}
//           />
//           About
//         </button>

//         {openSections.about && (
//           <div className="ml-7 mt-2 space-y-2 text-[15px]">
//             <Link to="/past-events" className="block">Past Events</Link>
//             <Link to="/about-organizer" className="block">About Organizer</Link>
//             <Link to="/testimonials" className="block">Testimonials / Reviews</Link>
//           </div>
//         )}
//       </div>

//       <Link to="/contact" className="block font-semibold">Contact</Link>

//       <Link to="/submit-abstract" className="block font-semibold">Submit Abstract</Link>

//       <Link to="/register" className="block font-semibold">Register</Link>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function MobileSidebarMenu() {
  return (
    <div className="w-full bg-white p-5 space-y-5 text-[#1a1a1a] text-[16px] leading-relaxed">

      {/* Main Menu */}
      <Link to="/" className="block font-semibold">Home</Link>
      <Link to="/commitee" className="block font-semibold">Scientific Committee</Link>
      <Link to="/speakers" className="block font-semibold">Speakers</Link>

      {/* ---- Program ---- */}
      <div>
        <p className="font-semibold">Program</p>
        <div className="ml-6 mt-2 space-y-2 text-[15px]">
          <Link to="/sessions" className="block">Scientific Sessions</Link>
        </div>
      </div>

      {/* ---- Information ---- */}
      <div>
        <p className="font-semibold">Information</p>
        <div className="ml-6 mt-2 space-y-2 text-[15px]">
          <Link to="/venue" className="block">Venue</Link>
          <Link to="/accommodation" className="block">Accommodation</Link>
          <Link to="/guidelines" className="block">Guidelines</Link>
          <Link to="/faq" className="block">FAQ</Link>
          {/* <Link to="/important-dates" className="block">Important Dates</Link> */}
        </div>
      </div>

      {/* ---- About ---- */}
      <div>
        <p className="font-semibold">About</p>
        <div className="ml-6 mt-2 space-y-2 text-[15px]">
          <Link to="/past-events" className="block">Past Events</Link>
          <Link to="/commitee" className="block">About Organizer</Link>
          <Link to="/testimonials" className="block">Testimonials / Reviews</Link>
        </div>
      </div>

      {/* Footer Links */}
      <Link to="/contact" className="block font-semibold">Contact</Link>
      <Link to="/submit-abstract" className="block font-semibold">Submit Abstract</Link>
      <Link to="/register" className="block font-semibold">Register</Link>
    </div>
  );
}
