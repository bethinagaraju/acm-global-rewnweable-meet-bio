// // import React from 'react';
// // import Header from '../components/Header';
// // import SpeakersSection from '../components/SpeakersSection';
// // import SpeakersBanner from '../components/SpeakersBanner';
// // import SpeakersBottomSection from '../components/SpeakersBottomSection';
// // import { Link } from 'react-router-dom';

// // const plenarySpeakers = [
// //   {
// //     image: 'speakerone.png',
// //     name: 'Michael Cafarella',
// //     title: 'Massachusetts Institute of Technology, USA',
// //     company: 'EDF Renewables'
// //   },
// //   {
// //     image: 'speakertwo.png',
// //     name: 'Chris Atkenson',
// //     title: 'Carnegie Mellon University, USA',
// //     company: 'McKinsey'
// //   },
// //   {
// //     image: 'speaker3.png',
// //     name: 'Yanda Li',
// //     title: 'Tsinghua University, China',
// //     company: 'McKinsey'
// //   }
// // ];

// // const keynoteSpeakers = [
// //   {
// //     image: 'speaker04.png',
// //     name: 'Samuel Coogan',
// //     title: 'Georgia institute of Technology, USA',
// //     company: 'Deloitte'
// //   },
// //   {
// //     image: 'Gemini_Generated_Image_v41z06v41z06v41z.png',
// //     name: 'Leonidas Guibas',
// //     title: 'Stanford University, USA',
// //     company: 'KPMG'
// //   },
// //   {
// //     image: 'Gemini_Generated_Image_19cov119cov119co.png',
// //     name: 'Jeannette Bohg',
// //     title: 'Stanford University, USA',
// //     company: 'KPMG, UK'
// //   }
// // ];

// // const invitedSpeakers = [
// //   {
// //     image: 'Gemini_Generated_Image_n1hse1n1hse1n1hs.png',
// //     name: 'Gustavo Alonso',
// //     title: 'ETH Zurich, Switzerland',
// //     company: 'Ministry of Energy & Infrastructure, UAE'
// //   },
// //   {
// //     image: 'Gemini_Generated_Image_cksm8zcksm8zcksm.png',
// //     name: 'Weidong Chen',
// //     title: 'Shanghai Jiao Tong University, China',
// //     company: 'Shanghai Jiao Tong University, China'
// //   }
// // ];

// // function SpeakersPage() {
// //   return (
// //     <div>
// //       <Header />
// //       <SpeakersBanner />
// //       <SpeakersSection speakers={plenarySpeakers} title="Plenary Speakers" />
// //       <SpeakersSection speakers={keynoteSpeakers} title="Keynote Speakers" />
// //       <SpeakersSection speakers={invitedSpeakers} title="Invited Speakers" />
// //       <SpeakersBottomSection />
// //     </div>
// //   );
// // }

// // export default SpeakersPage;


// import React from "react";
// import Header from "../components/Header";
// import { Link } from "react-router-dom";
// import SpeakersBanner from "../components/SpeakersBanner";
// import SpeakersBottomSection from "../components/SpeakersBottomSection";

// const speakers = [
//   {
//     image: "speakerone.png",
//     name: "Michael Cafarella",
//     title: "Massachusetts Institute of Technology, USA",
//     company: "EDF Renewables",
//   },
//   {
//     image: "speakertwo.png",
//     name: "Chris Atkenson",
//     title: "Carnegie Mellon University, USA",
//     company: "McKinsey",
//   },
//   {
//     image: "speaker3.png",
//     name: "Yanda Li",
//     title: "Tsinghua University, China",
//     company: "McKinsey",
//   },
//   {
//     image: "speaker04.png",
//     name: "Samuel Coogan",
//     title: "Georgia institute of Technology, USA",
//     company: "Deloitte",
//   },
//   {
//     image: "Gemini_Generated_Image_v41z06v41z06v41z.png",
//     name: "Leonidas Guibas",
//     title: "Stanford University, USA",
//     company: "KPMG",
//   },
//   {
//     image: "Gemini_Generated_Image_19cov119cov119co.png",
//     name: "Jeannette Bohg",
//     title: "Stanford University, USA",
//     company: "KPMG, UK",
//   },
//   {
//     image: "Gemini_Generated_Image_n1hse1n1hse1n1hs.png",
//     name: "Gustavo Alonso",
//     title: "ETH Zurich, Switzerland",
//     company: "Ministry of Energy & Infrastructure, UAE",
//   },
//   {
//     image: "Gemini_Generated_Image_cksm8zcksm8zcksm.png",
//     name: "Weidong Chen",
//     title: "Shanghai Jiao Tong University, China",
//     company: "Shanghai Jiao Tong University, China",
//   },
// ];

// const committee = [
//   { image: "commit1.png", name: "Dr. Alan Turing", university: "Oxford University, UK" },
//   { image: "commit2.png", name: "Dr. Ada Lovelace", university: "Cambridge University, UK" },
//   { image: "commit3.png", name: "Dr. Grace Hopper", university: "Yale University, USA" },
//   { image: "commit4.png", name: "Dr. Claude Shannon", university: "MIT, USA" },
// ];

// function SpeakersPage() {
//   return (
//     <div>
//       <Header />

//       {/* Hero Section */}
//       <SpeakersBanner />

//       {/* Speakers + Committee Grid */}
//       <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

//         {/* Left: Speakers (auto grid) */}
//         <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10">
//           {speakers.map((speaker, i) => (
//             <div key={i} className="text-center">
//               <img
//                 src={speaker.image}
//                 className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
//                 alt={speaker.name}
//               />
//               <h3 className="font-semibold">{speaker.name}</h3>
//               <p className="text-sm text-gray-600">{speaker.title}</p>
//               <p className="text-xs text-gray-500">{speaker.company}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right: Committee */}
//         <div className="grid grid-cols-2 gap-6 border-l pl-6">
//           {committee.map((member, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition text-center"
//             >
//               <img
//                 src={member.image}
//                 className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
//                 alt={member.name}
//               />
//               <h4 className="font-bold text-sm">{member.name}</h4>
//               <p className="text-xs text-gray-600">{member.university}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <SpeakersBottomSection />
//     </div>
//   );
// }

// export default SpeakersPage;



import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import SpeakersBanner from "../components/SpeakersBanner";
import SpeakersBottomSection from "../components/SpeakersBottomSection";
import { User } from "lucide-react";
import EndFooter from "../components/EndFooter";

const speakers = [
  {
    image: "speakerone.png",
    name: "Michael Cafarella",
    title: "Massachusetts Institute of Technology, USA",
    company: "EDF Renewables",
    type: "Plenary Speaker",
  },
  {
    image: "speakertwo.png",
    name: "Chris Atkenson",
    title: "Carnegie Mellon University, USA",
    company: "McKinsey",
    type: "Plenary Speaker",
  },
  {
    image: "speaker3.png",
    name: "Yanda Li",
    title: "Tsinghua University, China",
    company: "McKinsey",
    type: "Plenary Speaker",
  },
  {
    image: "speaker04.png",
    name: "Samuel Coogan",
    title: "Georgia Institute of Technology, USA",
    company: "Deloitte",
    type: "Keynote Speaker",
  },
  {
    image: "Gemini_Generated_Image_v41z06v41z06v41z.png",
    name: "Leonidas Guibas",
    title: "Stanford University, USA",
    company: "KPMG",
    type: "Keynote Speaker"
  },
  {
    image: "Gemini_Generated_Image_19cov119cov119co.png",
    name: "Jeannette Bohg",
    title: "Stanford University, USA",
    company: "KPMG, UK",
    type: "Keynote Speaker"
  },
  {
    image: "Gemini_Generated_Image_n1hse1n1hse1n1hs.png",
    name: "Gustavo Alonso",
    title: "ETH Zurich, Switzerland",
    company: "Ministry of Energy & Infrastructure, UAE",
    type: "Plenary Speaker"
  },
  {
    image: "Gemini_Generated_Image_cksm8zcksm8zcksm.png",
    name: "Weidong Chen",
    title: "Shanghai Jiao Tong University, China",
    company: "Shanghai Jiao Tong University, China",
    type:"Keynote Speaker"
  },
];

const committee = [
  { image: "commit1.png", name: "Dr. Alan Turing", university: "Oxford University, UK" },
  { image: "commit2.png", name: "Dr. Ada Lovelace", university: "Cambridge University, UK" },
  { image: "commit3.png", name: "Dr. Grace Hopper", university: "Yale University, USA" },
  { image: "commit4.png", name: "Dr. Claude Shannon", university: "MIT, USA" },
];

function SpeakersPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <SpeakersBanner />

      {/* Speakers + Committee */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* Left: Speakers */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10">
          {speakers.map((speaker, i) => (
            <div key={i} className="text-center">
              <img
                src={speaker.image}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
                alt={speaker.name}
              />
              <h3 className="font-semibold">{speaker.name}</h3>
              <p className="text-sm text-gray-600">{speaker.title}</p>
              {/* <p className="text-xs text-gray-500">{speaker.company}</p> */}
              <p className="text-sm text-gray-500 font-semibold">{speaker.type}</p>
            </div>
          ))}
        </div>

        {/* Right: Committee - FIXED LAYOUT */}
        <div className="border-l pl-6 flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-2">
            Scientific Committee
          </h2>

          {committee.map((member, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <User className="w-16 h-16 text-gray-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.university}</p>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* CTA Section */}
      <SpeakersBottomSection />
      <EndFooter />
    </div>
  );
}

export default SpeakersPage;
