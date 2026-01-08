
// // // // import React from "react";

// // // // function Mixcomponents() {


// // // // const speakers = [

// // // //   {
// // // //     image: "yanda-li.jpg",
// // // //     alt: "Prof. Yanda Li – Keynote Speaker at ICBME 2026 | Tsinghua University, China",
// // // //     name: "Prof. Yanda Li",
// // // //     title: "Tsinghua University, China",
// // // //     company: "",
// // // //     type: "Keynote",
// // // //   },

// // // //       {
// // // //     image: "Felisa-Baynes-Ross.jpeg",
// // // //     alt: "Prof. Felisa Baynes-Ross – Speaker at ICBME 2026 | Yale University, USA",
// // // //     name: "Prof. Felisa Baynes-Ross",
// // // //     title: "Yale University, USA",
// // // //     company: "",
// // // //     type: "Keynote",
// // // //   },
// // // //   {
// // // //     image: "Athanasios-Paschalis.jpeg",
// // // //     alt: "Prof. Athanasios Paschalis – Speaker at ICBME 2026 | Imperial College London, UK",
// // // //     name: "Prof. Athanasios Paschalis",
// // // //     title: "Professor, Imperial College London, UK",
// // // //     company: "",
// // // //     type: "Keynote",
// // // //   },

// // // //   {
// // // //     image: "michael-cafarella.webp",
// // // //     alt: "Dr. Michael Cafarella – Speaker at ICBME 2026 | Massachusetts Institute of Technology, USA",
// // // //     name: "Dr. Michael Cafarella",
// // // //     title: "Massachusetts Institute of Technology, USA",
// // // //     company: "",
// // // //     type: "Speaker",
// // // //   },


// // // //   {
// // // //     image: "liu-yurong.jpeg",
// // // //     alt: "Yurong Liu – Speaker at ICBME 2026 | Southeast University, China",
// // // //     name: "LIU, Yurong",
// // // //     title: "Southeast University, China",
// // // //     company: "",
// // // //     type: "Speaker",
// // // //   },


// // // //   {
// // // //     image: "charles-romain.jpeg",
// // // //     alt: "Dr. Charles Romain – Speaker at ICBME 2026 | Imperial College London, UK",
// // // //     name: "Dr. Charles Romain",
// // // //     title: "Imperial College London, UK",
// // // //     company: "",
// // // //     type: "Speaker",
// // // //   },



// // // //   {
// // // //     image: "James-Berger.jpeg",
// // // //     alt: "Dr. James Berger – Keynote Speaker at ICBME 2026 | Yale University, USA",
// // // //     name: "Dr. James Berger",
// // // //     title: "Yale University, USA",
// // // //     company: "",
// // // //     type: "Speaker",
// // // //   },



// // // // ];



// // // //   return (
// // // //     <section
// // // //       id="speakers-section"
// // // //       className="container mx-auto px-4 md:px-6 py-10"
// // // //     >
// // // //       {/* Heading */}
// // // //       <h2 className="text-2xl md:text-3xl font-bold text-[#00488B] mb-8 text-center">
// // // //         ICBME 2026 SPEAKERS
// // // //       </h2>

// // // //       {/* Speakers Grid */}
// // // //       <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
// // // //         {speakers.slice(0, 6).map((speaker, idx) => (
// // // //           <div key={idx} className="text-center">
// // // //             <img
// // // //               src={speaker.image}
// // // //               alt={speaker.alt}
// // // //               className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-3"
// // // //             />

// // // //             <h3 className="font-semibold text-sm md:text-base">
// // // //               {speaker.name}
// // // //             </h3>

// // // //             <p className="text-xs md:text-sm text-gray-600 leading-snug">
// // // //               {speaker.title}
// // // //             </p>

// // // //             <p className="text-xs md:text-sm text-[#292e63] font-semibold mt-1">
// // // //               {speaker.type}
// // // //             </p>
// // // //           </div>
// // // //         ))}

// // // //         {speakers.slice(6).map((speaker, idx) => (
// // // //           <div key={`desktop-${idx}`} className="hidden md:block text-center">
// // // //             <img
// // // //               src={speaker.image}
// // // //               alt={speaker.alt}
// // // //               className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
// // // //             />

// // // //             <h3 className="font-semibold">{speaker.name}</h3>

// // // //             <p className="text-sm text-gray-600 leading-snug">
// // // //               {speaker.title}
// // // //             </p>

// // // //             <p className="text-sm text-[#292e63] font-semibold mt-1">
// // // //               {speaker.type}
// // // //             </p>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* View All Button (especially useful on mobile) */}
// // // //       <div className="text-center">
// // // //         <a
// // // //           href="/speakers"
// // // //           className="inline-block bg-[#2e376c] hover:bg-[#1f254b] text-white font-bold py-3 px-8 transition-colors duration-300 rounded"
// // // //           title="View all speakers at ICBME 2026 Conference"
// // // //           aria-label="View all speakers at ICBME 2026 Conference"
// // // //         >
// // // //           View All Speakers
// // // //         </a>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // export default Mixcomponents;





// // // import React from "react";

// // // function Mixcomponents() {
// // //   const speakers = [
// // //     {
// // //       image: "yanda-li.jpg",
// // //       alt: "Prof. Yanda Li – Keynote Speaker at ICBME 2026 | Tsinghua University, China",
// // //       name: "Prof. Yanda Li",
// // //       title: "Tsinghua University, China",
// // //       type: "Keynote",
// // //     },
// // //     {
// // //       image: "Felisa-Baynes-Ross.jpeg",
// // //       alt: "Prof. Felisa Baynes-Ross – Speaker at ICBME 2026 | Yale University, USA",
// // //       name: "Prof. Felisa Baynes-Ross",
// // //       title: "Yale University, USA",
// // //       type: "Keynote",
// // //     },
// // //     {
// // //       image: "Athanasios-Paschalis.jpeg",
// // //       alt: "Prof. Athanasios Paschalis – Speaker at ICBME 2026 | Imperial College London, UK",
// // //       name: "Prof. Athanasios Paschalis",
// // //       title: "Imperial College London, UK",
// // //       type: "Keynote",
// // //     },
// // //     {
// // //       image: "michael-cafarella.webp",
// // //       alt: "Dr. Michael Cafarella – Speaker at ICBME 2026 | MIT, USA",
// // //       name: "Dr. Michael Cafarella",
// // //       title: "Massachusetts Institute of Technology, USA",
// // //       type: "Speaker",
// // //     },
// // //     {
// // //       image: "liu-yurong.jpeg",
// // //       alt: "Yurong Liu – Speaker at ICBME 2026 | Southeast University, China",
// // //       name: "Yurong Liu",
// // //       title: "Southeast University, China",
// // //       type: "Speaker",
// // //     },
// // //     {
// // //       image: "charles-romain.jpeg",
// // //       alt: "Dr. Charles Romain – Speaker at ICBME 2026 | Imperial College London, UK",
// // //       name: "Dr. Charles Romain",
// // //       title: "Imperial College London, UK",
// // //       type: "Speaker",
// // //     },
// // //   ];

// // //   return (
// // //     <section
// // //       id="speakers-section"
// // //       className="bg-[#F8FBFF] py-14 px-4 md:px-10"
// // //     >
// // //       {/* Heading */}
// // //       <div className="max-w-6xl mx-auto text-center mb-10">
// // //         <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B5ED7]">
// // //           ICBME 2026 Speakers
// // //         </h2>
// // //         <p className="mt-2 text-gray-600">
// // //           Distinguished keynote and invited speakers from leading global institutions
// // //         </p>
// // //       </div>

// // //       {/* Speaker Cards */}
// // //       <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// // //         {speakers.map((speaker, idx) => (
// // //           <div
// // //             key={idx}
// // //             className="flex gap-4 p-5 bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
// // //           >
// // //             {/* Image */}
// // //             <img
// // //               src={speaker.image}
// // //               alt={speaker.alt}
// // //               className="w-28 h-28 object-cover"
// // //             />

// // //             {/* Content */}
// // //             <div className="flex flex-col justify-center">
// // //               <h3 className="font-semibold text-[#1F2937] text-sm md:text-base">
// // //                 {speaker.name}
// // //               </h3>

// // //               <p className="text-xs md:text-sm text-gray-600 leading-snug">
// // //                 {speaker.title}
// // //               </p>

// // //               <span
// // //                 className={`mt-2 inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full
// // //                 ${
// // //                   speaker.type === "Keynote"
// // //                     ? "bg-[#EAF2FF] text-[#0B5ED7]"
// // //                     : "bg-[#E0F7FA] text-[#0077B6]"
// // //                 }`}
// // //               >
// // //                 {speaker.type}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* CTA */}
// // //       <div className="text-center mt-10">
// // //         <a
// // //           href="/speakers"
// // //           className="inline-block bg-[#0B5ED7] hover:bg-[#084298] text-white font-bold py-3 px-10 transition"
// // //           title="View all speakers at ICBME 2026 Conference"
// // //           aria-label="View all speakers at ICBME 2026 Conference"
// // //         >
// // //           View All Speakers
// // //         </a>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Mixcomponents;






// // import React from "react";

// // function Mixcomponents() {
// //   const speakers = [
// //     {
// //       image: "yanda-li.jpg",
// //       alt: "Prof. Yanda Li – Keynote Speaker at ICBME 2026 | Tsinghua University, China",
// //       name: "Prof. Yanda Li",
// //       title: "Tsinghua University, China",
// //       type: "Keynote",
// //     },
// //     {
// //       image: "Felisa-Baynes-Ross.jpeg",
// //       alt: "Prof. Felisa Baynes-Ross – Speaker at ICBME 2026 | Yale University, USA",
// //       name: "Prof. Felisa Baynes-Ross",
// //       title: "Yale University, USA",
// //       type: "Keynote",
// //     },
// //     {
// //       image: "Athanasios-Paschalis.jpeg",
// //       alt: "Prof. Athanasios Paschalis – Speaker at ICBME 2026 | Imperial College London, UK",
// //       name: "Prof. Athanasios Paschalis",
// //       title: "Imperial College London, UK",
// //       type: "Keynote",
// //     },
// //     {
// //       image: "michael-cafarella.webp",
// //       alt: "Dr. Michael Cafarella – Speaker at ICBME 2026 | MIT, USA",
// //       name: "Dr. Michael Cafarella",
// //       title: "Massachusetts Institute of Technology, USA",
// //       type: "Speaker",
// //     },
// //     {
// //       image: "liu-yurong.jpeg",
// //       alt: "Yurong Liu – Speaker at ICBME 2026 | Southeast University, China",
// //       name: "Yurong Liu",
// //       title: "Southeast University, China",
// //       type: "Speaker",
// //     },
// //     {
// //       image: "charles-romain.jpeg",
// //       alt: "Dr. Charles Romain – Speaker at ICBME 2026 | Imperial College London, UK",
// //       name: "Dr. Charles Romain",
// //       title: "Imperial College London, UK",
// //       type: "Speaker",
// //     },
// //   ];

// //   return (
// //     <section
// //       id="speakers-section"
// //       className="bg-gradient-to-b from-[#ECFDF5] to-white py-14 px-4 md:px-10"
// //     >
// //       {/* Heading */}
// //       <div className="max-w-6xl mx-auto text-center mb-10">
// //         <h2 className="text-3xl md:text-4xl font-extrabold text-[#047857]">
// //           ICBME 2026 Speakers
// //         </h2>
// //         <p className="mt-2 text-[#64748B]">
// //           Distinguished keynote and invited speakers from leading global institutions
// //         </p>
// //       </div>

// //       {/* Speaker Cards */}
// //       <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //         {speakers.map((speaker, idx) => (
// //           <div
// //             key={idx}
// //             className="flex gap-4 p-5 bg-white border border-[#E5E7EB]
// //             shadow-sm hover:shadow-lg transition rounded-xl"
// //           >
// //             {/* Image */}
// //             <img
// //               src={speaker.image}
// //               alt={speaker.alt}
// //               className="w-28 h-28 object-cover rounded-lg"
// //             />

// //             {/* Content */}
// //             <div className="flex flex-col justify-center">
// //               <h3 className="font-semibold text-[#1E293B] text-sm md:text-base">
// //                 {speaker.name}
// //               </h3>

// //               <p className="text-xs md:text-sm text-[#64748B] leading-snug">
// //                 {speaker.title}
// //               </p>

// //               <span
// //                 className={`mt-2 inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full
// //                 ${
// //                   speaker.type === "Keynote"
// //                     ? "bg-[#D1FAE5] text-[#047857]"
// //                     : "bg-[#ECFDF5] text-[#1E293B]"
// //                 }`}
// //               >
// //                 {speaker.type}
// //               </span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* CTA */}
// //       <div className="text-center mt-10">
// //         <a
// //           href="/speakers"
// //           className="inline-block bg-[#84CC16] hover:bg-[#65A30D]
// //           text-[#1E293B] font-bold py-3 px-10 transition rounded-md shadow-md"
// //           title="View all speakers at ICBME 2026 Conference"
// //           aria-label="View all speakers at ICBME 2026 Conference"
// //         >
// //           View All Speakers
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Mixcomponents;






// import React from "react";

// function Mixcomponents() {
//   const speakers = [
//     {
//       image: "yanda-li.jpg",
//       alt: "Prof. Yanda Li – Keynote Speaker at ICBME 2026 | Tsinghua University, China",
//       name: "Prof. Yanda Li",
//       title: "Tsinghua University, China",
//       type: "Keynote",
//     },
//     {
//       image: "Felisa-Baynes-Ross.jpeg",
//       alt: "Prof. Felisa Baynes-Ross – Speaker at ICBME 2026 | Yale University, USA",
//       name: "Prof. Felisa Baynes-Ross",
//       title: "Yale University, USA",
//       type: "Keynote",
//     },
//     {
//       image: "Athanasios-Paschalis.jpeg",
//       alt: "Prof. Athanasios Paschalis – Speaker at ICBME 2026 | Imperial College London, UK",
//       name: "Prof. Athanasios Paschalis",
//       title: "Imperial College London, UK",
//       type: "Keynote",
//     },
//     {
//       image: "michael-cafarella.webp",
//       alt: "Dr. Michael Cafarella – Speaker at ICBME 2026 | MIT, USA",
//       name: "Dr. Michael Cafarella",
//       title: "Massachusetts Institute of Technology, USA",
//       type: "Speaker",
//     },
//     {
//       image: "liu-yurong.jpeg",
//       alt: "Yurong Liu – Speaker at ICBME 2026 | Southeast University, China",
//       name: "Yurong Liu",
//       title: "Southeast University, China",
//       type: "Speaker",
//     },
//     {
//       image: "charles-romain.jpeg",
//       alt: "Dr. Charles Romain – Speaker at ICBME 2026 | Imperial College London, UK",
//       name: "Dr. Charles Romain",
//       title: "Imperial College London, UK",
//       type: "Speaker",
//     },
//   ];

//   return (
//     <section
//       id="speakers-section"
//       className="bg-gradient-to-b from-[#ECFDF5] to-white py-16 px-4 md:px-10"
//     >
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-[#047857]">
//           ICBME 2026 Speakers
//         </h2>
//         <p className="mt-3 text-[#64748B] max-w-2xl mx-auto">
//           Distinguished keynote and invited speakers from leading global
//           institutions
//         </p>
//       </div>

//       {/* Speaker Cards */}
//       <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         {speakers.map((speaker, idx) => (
//           <div
//             key={idx}
//             className="relative bg-white border border-[#E5E7EB]
//             rounded-2xl shadow-sm hover:shadow-xl transition-all
//             text-center px-6 pt-10 pb-8"
//           >
//             {/* Badge */}
//             <span
//               className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full
//               ${
//                 speaker.type === "Keynote"
//                   ? "bg-[#D1FAE5] text-[#047857]"
//                   : "bg-[#ECFDF5] text-[#1E293B]"
//               }`}
//             >
//               {speaker.type}
//             </span>

//             {/* Image */}
//             <div className="flex justify-center mb-5">
//               <img
//                 src={speaker.image}
//                 alt={speaker.alt}
//                 className="w-28 h-28 object-cover rounded-full border-4 border-[#ECFDF5]"
//               />
//             </div>

//             {/* Content */}
//             <h3 className="text-lg font-semibold text-[#1E293B]">
//               {speaker.name}
//             </h3>

//             <p className="mt-1 text-sm text-[#64748B] leading-snug">
//               {speaker.title}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-14">
//         <a
//           href="/speakers"
//           className="inline-block bg-[#84CC16] hover:bg-[#65A30D]
//           text-[#1E293B] font-bold py-3 px-10 transition
//           rounded-md shadow-md"
//           title="View all speakers at ICBME 2026 Conference"
//           aria-label="View all speakers at ICBME 2026 Conference"
//         >
//           View All Speakers
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Mixcomponents;





import React from "react";

function Mixcomponents() {
const speakers = [


  {
    image: "Leonard White.jpeg",
    alt: "Prof. Leonard White – Speaker at ICBME 2026 | Duke Institute for Brain Sciences, USA",
    name: "Prof. Leonard White",
    title: "Duke Institute for Brain Sciences, USA",
    type: "Keynote",
  },

  {
    image: "Stephen Craig.jpeg",
    alt: "Prof. Stephen Craig – Speaker at ICBME 2026 | Duke Institute for Brain Sciences, USA",
    name: "Prof. Stephen Craig",
    title: "Duke Institute for Brain Sciences, USA",
    type: "Keynote",
  },


  {
    image: "Alisha Ali.jpeg",
    alt: "Dr. Alisha Ali – Keynote Speaker at ICBME 2026 | New York University, USA",
    name: "Dr. Alisha Ali",
    title: "New York University, USA",
    type: "Speaker",
  },
  {
    image: "Magdalena Fuentes.jpeg",
    alt: "Dr. Magdalena Fuentes – Speaker at ICBME 2026 | Yale University, USA",
    name: "Dr. Magdalena Fuentes",
    title: "New York University, USA",
    type: "Speaker",
  },
  {
    image: "Klint Kanopka.jpeg",
    alt: "Dr. Klint Kanopka Paschalis – Speaker at ICBME 2026 | Imperial College London, UK",
    name: "Dr. Klint Kanopka",
    title: "New York University, USA",
    type: "Speaker",
  },

    

  {
    image: "Denise Comer.jpeg",
    alt: "Dr. Denise Comer – Speaker at ICBME 2026 | Duke Institute for Brain Sciences, USA",
    name: "Dr. Denise Comer",
    title: " Duke Institute for Brain Sciences, USA",
    type: "Speaker",  
  },
  {
    image: "Alan B. Cantor.jpeg",
    alt: "Dr. Alan B. Cantor – Speaker at ICBME 2026 | Harvard Medical School, USA",
    name: "Dr. Alan B. Cantor",
    title: "Harvard Medical School, USA",
    type: "Speaker",
  },
  {
    image: "Andrew Aguirre.jpeg",
    alt: "Dr. Andrew Aguirre – Speaker at ICBME 2026 | Harvard Medical School, USA",
    name: "Dr. Andrew Aguirre",
    title: "Harvard Medical School, USA",
    type: "Speaker",
  },


];

  return (
    <section
      id="speakers-section"
      className="bg-[#FAF7F2] py-16 px-4 md:px-10"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2F3E3B]">
          ICBME 2026 Speakers
        </h2>
        <p className="mt-3 text-[#6B7C78] max-w-2xl mx-auto">
          Distinguished keynote and invited speakers from leading global
          institutions
        </p>
      </div>

      {/* Speaker Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {speakers.map((speaker, idx) => (
          <div
            key={idx}
            className="
              relative
              bg-[#FDFBF7]
              border border-[#E6DED2]
              
              shadow-sm hover:shadow-md transition-all
              text-center px-6 pt-10 pb-8
            "
          >
            {/* Badge */}
            <span
              className="
                absolute top-4 right-4
                text-xs font-semibold px-3 py-1 rounded-full
                border border-[#DCE7E3]
                bg-[#EEF4F2]
                text-[#3B6F6A]
              "
            >
              {speaker.type}
            </span>

            {/* Image */}
            <div className="flex justify-center mb-5">
              <img
                src={speaker.image}
                alt={speaker.alt}
                className="w-28 h-28 object-cover rounded-full border-4 border-[#EEF4F2]"
              />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-[#2F3E3B]">
              {speaker.name}
            </h3>

            <p className="mt-1 text-sm text-[#5F6F6C] leading-snug">
              {speaker.title}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <a
          href="/speakers"
          className="
            inline-block
            bg-[#3B6F6A] hover:bg-[#335F5B]
            text-white
            font-semibold py-3 px-10
            transition
            
          "
          title="View all speakers at ICBME 2026 Conference"
          aria-label="View all speakers at ICBME 2026 Conference"
        >
          View All Speakers
        </a>
      </div>
    </section>
  );
}

export default Mixcomponents;
