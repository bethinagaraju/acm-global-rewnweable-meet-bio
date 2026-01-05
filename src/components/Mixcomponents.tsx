
// // import React from "react";

// // function Mixcomponents() {


// // const speakers = [

// //   {
// //     image: "yanda-li.jpg",
// //     alt: "Prof. Yanda Li – Keynote Speaker at AIMLR 2026 | Tsinghua University, China",
// //     name: "Prof. Yanda Li",
// //     title: "Tsinghua University, China",
// //     company: "",
// //     type: "Keynote",
// //   },

// //       {
// //     image: "Felisa-Baynes-Ross.jpeg",
// //     alt: "Prof. Felisa Baynes-Ross – Speaker at AIMLR 2026 | Yale University, USA",
// //     name: "Prof. Felisa Baynes-Ross",
// //     title: "Yale University, USA",
// //     company: "",
// //     type: "Keynote",
// //   },
// //   {
// //     image: "Athanasios-Paschalis.jpeg",
// //     alt: "Prof. Athanasios Paschalis – Speaker at AIMLR 2026 | Imperial College London, UK",
// //     name: "Prof. Athanasios Paschalis",
// //     title: "Professor, Imperial College London, UK",
// //     company: "",
// //     type: "Keynote",
// //   },

// //   {
// //     image: "michael-cafarella.webp",
// //     alt: "Dr. Michael Cafarella – Speaker at AIMLR 2026 | Massachusetts Institute of Technology, USA",
// //     name: "Dr. Michael Cafarella",
// //     title: "Massachusetts Institute of Technology, USA",
// //     company: "",
// //     type: "Speaker",
// //   },


// //   {
// //     image: "liu-yurong.jpeg",
// //     alt: "Yurong Liu – Speaker at AIMLR 2026 | Southeast University, China",
// //     name: "LIU, Yurong",
// //     title: "Southeast University, China",
// //     company: "",
// //     type: "Speaker",
// //   },


// //   {
// //     image: "charles-romain.jpeg",
// //     alt: "Dr. Charles Romain – Speaker at AIMLR 2026 | Imperial College London, UK",
// //     name: "Dr. Charles Romain",
// //     title: "Imperial College London, UK",
// //     company: "",
// //     type: "Speaker",
// //   },



// //   {
// //     image: "James-Berger.jpeg",
// //     alt: "Dr. James Berger – Keynote Speaker at AIMLR 2026 | Yale University, USA",
// //     name: "Dr. James Berger",
// //     title: "Yale University, USA",
// //     company: "",
// //     type: "Speaker",
// //   },



// // ];



// //   return (
// //     <section
// //       id="speakers-section"
// //       className="container mx-auto px-4 md:px-6 py-10"
// //     >
// //       {/* Heading */}
// //       <h2 className="text-2xl md:text-3xl font-bold text-[#00488B] mb-8 text-center">
// //         AIMLR 2026 SPEAKERS
// //       </h2>

// //       {/* Speakers Grid */}
// //       <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
// //         {speakers.slice(0, 6).map((speaker, idx) => (
// //           <div key={idx} className="text-center">
// //             <img
// //               src={speaker.image}
// //               alt={speaker.alt}
// //               className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-3"
// //             />

// //             <h3 className="font-semibold text-sm md:text-base">
// //               {speaker.name}
// //             </h3>

// //             <p className="text-xs md:text-sm text-gray-600 leading-snug">
// //               {speaker.title}
// //             </p>

// //             <p className="text-xs md:text-sm text-[#292e63] font-semibold mt-1">
// //               {speaker.type}
// //             </p>
// //           </div>
// //         ))}

// //         {speakers.slice(6).map((speaker, idx) => (
// //           <div key={`desktop-${idx}`} className="hidden md:block text-center">
// //             <img
// //               src={speaker.image}
// //               alt={speaker.alt}
// //               className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
// //             />

// //             <h3 className="font-semibold">{speaker.name}</h3>

// //             <p className="text-sm text-gray-600 leading-snug">
// //               {speaker.title}
// //             </p>

// //             <p className="text-sm text-[#292e63] font-semibold mt-1">
// //               {speaker.type}
// //             </p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* View All Button (especially useful on mobile) */}
// //       <div className="text-center">
// //         <a
// //           href="/speakers"
// //           className="inline-block bg-[#2e376c] hover:bg-[#1f254b] text-white font-bold py-3 px-8 transition-colors duration-300 rounded"
// //           title="View all speakers at AIMLR 2026 Conference"
// //           aria-label="View all speakers at AIMLR 2026 Conference"
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
//       alt: "Prof. Yanda Li – Keynote Speaker at AIMLR 2026 | Tsinghua University, China",
//       name: "Prof. Yanda Li",
//       title: "Tsinghua University, China",
//       type: "Keynote",
//     },
//     {
//       image: "Felisa-Baynes-Ross.jpeg",
//       alt: "Prof. Felisa Baynes-Ross – Speaker at AIMLR 2026 | Yale University, USA",
//       name: "Prof. Felisa Baynes-Ross",
//       title: "Yale University, USA",
//       type: "Keynote",
//     },
//     {
//       image: "Athanasios-Paschalis.jpeg",
//       alt: "Prof. Athanasios Paschalis – Speaker at AIMLR 2026 | Imperial College London, UK",
//       name: "Prof. Athanasios Paschalis",
//       title: "Imperial College London, UK",
//       type: "Keynote",
//     },
//     {
//       image: "michael-cafarella.webp",
//       alt: "Dr. Michael Cafarella – Speaker at AIMLR 2026 | MIT, USA",
//       name: "Dr. Michael Cafarella",
//       title: "Massachusetts Institute of Technology, USA",
//       type: "Speaker",
//     },
//     {
//       image: "liu-yurong.jpeg",
//       alt: "Yurong Liu – Speaker at AIMLR 2026 | Southeast University, China",
//       name: "Yurong Liu",
//       title: "Southeast University, China",
//       type: "Speaker",
//     },
//     {
//       image: "charles-romain.jpeg",
//       alt: "Dr. Charles Romain – Speaker at AIMLR 2026 | Imperial College London, UK",
//       name: "Dr. Charles Romain",
//       title: "Imperial College London, UK",
//       type: "Speaker",
//     },
//   ];

//   return (
//     <section
//       id="speakers-section"
//       className="bg-[#F8FBFF] py-14 px-4 md:px-10"
//     >
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B5ED7]">
//           AIMLR 2026 Speakers
//         </h2>
//         <p className="mt-2 text-gray-600">
//           Distinguished keynote and invited speakers from leading global institutions
//         </p>
//       </div>

//       {/* Speaker Cards */}
//       <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {speakers.map((speaker, idx) => (
//           <div
//             key={idx}
//             className="flex gap-4 p-5 bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
//           >
//             {/* Image */}
//             <img
//               src={speaker.image}
//               alt={speaker.alt}
//               className="w-28 h-28 object-cover"
//             />

//             {/* Content */}
//             <div className="flex flex-col justify-center">
//               <h3 className="font-semibold text-[#1F2937] text-sm md:text-base">
//                 {speaker.name}
//               </h3>

//               <p className="text-xs md:text-sm text-gray-600 leading-snug">
//                 {speaker.title}
//               </p>

//               <span
//                 className={`mt-2 inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full
//                 ${
//                   speaker.type === "Keynote"
//                     ? "bg-[#EAF2FF] text-[#0B5ED7]"
//                     : "bg-[#E0F7FA] text-[#0077B6]"
//                 }`}
//               >
//                 {speaker.type}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-10">
//         <a
//           href="/speakers"
//           className="inline-block bg-[#0B5ED7] hover:bg-[#084298] text-white font-bold py-3 px-10 transition"
//           title="View all speakers at AIMLR 2026 Conference"
//           aria-label="View all speakers at AIMLR 2026 Conference"
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
      image: "yanda-li.jpg",
      alt: "Prof. Yanda Li – Keynote Speaker at AIMLR 2026 | Tsinghua University, China",
      name: "Prof. Yanda Li",
      title: "Tsinghua University, China",
      type: "Keynote",
    },
    {
      image: "Felisa-Baynes-Ross.jpeg",
      alt: "Prof. Felisa Baynes-Ross – Speaker at AIMLR 2026 | Yale University, USA",
      name: "Prof. Felisa Baynes-Ross",
      title: "Yale University, USA",
      type: "Keynote",
    },
    {
      image: "Athanasios-Paschalis.jpeg",
      alt: "Prof. Athanasios Paschalis – Speaker at AIMLR 2026 | Imperial College London, UK",
      name: "Prof. Athanasios Paschalis",
      title: "Imperial College London, UK",
      type: "Keynote",
    },
    {
      image: "michael-cafarella.webp",
      alt: "Dr. Michael Cafarella – Speaker at AIMLR 2026 | MIT, USA",
      name: "Dr. Michael Cafarella",
      title: "Massachusetts Institute of Technology, USA",
      type: "Speaker",
    },
    {
      image: "liu-yurong.jpeg",
      alt: "Yurong Liu – Speaker at AIMLR 2026 | Southeast University, China",
      name: "Yurong Liu",
      title: "Southeast University, China",
      type: "Speaker",
    },
    {
      image: "charles-romain.jpeg",
      alt: "Dr. Charles Romain – Speaker at AIMLR 2026 | Imperial College London, UK",
      name: "Dr. Charles Romain",
      title: "Imperial College London, UK",
      type: "Speaker",
    },
  ];

  return (
    <section
      id="speakers-section"
      className="bg-gradient-to-b from-[#ECFDF5] to-white py-14 px-4 md:px-10"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#047857]">
          AIMLR 2026 Speakers
        </h2>
        <p className="mt-2 text-[#64748B]">
          Distinguished keynote and invited speakers from leading global institutions
        </p>
      </div>

      {/* Speaker Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, idx) => (
          <div
            key={idx}
            className="flex gap-4 p-5 bg-white border border-[#E5E7EB]
            shadow-sm hover:shadow-lg transition rounded-xl"
          >
            {/* Image */}
            <img
              src={speaker.image}
              alt={speaker.alt}
              className="w-28 h-28 object-cover rounded-lg"
            />

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h3 className="font-semibold text-[#1E293B] text-sm md:text-base">
                {speaker.name}
              </h3>

              <p className="text-xs md:text-sm text-[#64748B] leading-snug">
                {speaker.title}
              </p>

              <span
                className={`mt-2 inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full
                ${
                  speaker.type === "Keynote"
                    ? "bg-[#D1FAE5] text-[#047857]"
                    : "bg-[#ECFDF5] text-[#1E293B]"
                }`}
              >
                {speaker.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href="/speakers"
          className="inline-block bg-[#84CC16] hover:bg-[#65A30D]
          text-[#1E293B] font-bold py-3 px-10 transition rounded-md shadow-md"
          title="View all speakers at AIMLR 2026 Conference"
          aria-label="View all speakers at AIMLR 2026 Conference"
        >
          View All Speakers
        </a>
      </div>
    </section>
  );
}

export default Mixcomponents;
