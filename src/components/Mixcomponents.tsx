
import React from "react";

function Mixcomponents() {
  // const speakers = [
  //   {
  //     image: "thomas-gartner.jpeg",
  //     name: "Prof. Thomas Gartner",
  //     title: "Technical University of Vienna, Austria",
  //     company: "",
  //     type: "Keynote",
  //   },
  //   {
  //     image: "yanda-li.jpg",
  //     name: "Prof. Yanda Li",
  //     title: "Tsinghua University, China",
  //     company: "",
  //     type: "Keynote",
  //   },

    
  //                               {
  //   image: "jeannette-bohg.png",
  //   name: "Jeannette Bohg",
  //   title: "Stanford University, USA",
  //   company: "",
  //   type:"Speaker"
  // },


  //                           {
  //   image: "michael-cafarella.webp",
  //   name: "Michael Cafarella",
  //   title: "Massachusetts Institute of Technology, USA",
  //   company: "",
  //   type:"Speaker"
  // },
  //   {
  //     image: "katja-hose.jpeg",
  //     name: "Katja Hose",
  //     title: "Technical University of Vienna, Austria",
  //     company: "",
  //     type: "Speaker",
  //   },
  //   {
  //     image: "petia-radeva.jpeg",
  //     name: "Prof. Petia Radeva",
  //     title: "Universitat de Barcelona, Spain",
  //     company: "",
  //     type: "Speaker",
  //   },
  //   {
  //     image: "syed-kamrul-Islam.jpg",
  //     name: "Prof. Syed Kamrul Islam",
  //     title: "University of Missouri, USA",
  //     company: "",
  //     type: "Speaker",
  //   },
  //   {
  //     image: "alvarado.jpeg",
  //     name: "Alvarado, Noe",
  //     title: "Universitat Politècnica de Catalunya, Spain",
  //     company: "",
  //     type: "Speaker",
  //   },
  //   {
  //     image: "jan-rosell.jpeg",
  //     name: "Prof. Jan Rosell",
  //     title: "Shanghai Jiao Tong University, China",
  //     company: "",
  //     type: "Speaker",
  //   },
  //   {
  //     image: "rohit-chadha.jpeg",
  //     name: "Prof. Rohit Chadha",
  //     title: "University of Missouri, USA",
  //     company: "",
  //     type: "Speaker",
  //   },

  // ];

  const speakers = [
  {
    image: "thomas-gartner.jpeg",
    alt: "Prof. Thomas Gartner – Keynote Speaker at AIMLR 2026 | Technical University of Vienna, Austria",
    name: "Prof. Thomas Gartner",
    title: "Technical University of Vienna, Austria",
    company: "",
    type: "Keynote",
  },
  {
    image: "yanda-li.jpg",
    alt: "Prof. Yanda Li – Keynote Speaker at AIMLR 2026 | Tsinghua University, China",
    name: "Prof. Yanda Li",
    title: "Tsinghua University, China",
    company: "",
    type: "Keynote",
  },
  {
    image: "jeannette-bohg.png",
    alt: "Jeannette Bohg – Speaker at AIMLR 2026 | Stanford University, USA",
    name: "Jeannette Bohg",
    title: "Stanford University, USA",
    company: "",
    type: "Speaker",
  },
  {
    image: "michael-cafarella.webp",
    alt: "Michael Cafarella – Speaker at AIMLR 2026 | Massachusetts Institute of Technology, USA",
    name: "Michael Cafarella",
    title: "Massachusetts Institute of Technology, USA",
    company: "",
    type: "Speaker",
  },
  {
    image: "katja-hose.jpeg",
    alt: "Katja Hose – Speaker at AIMLR 2026 | Technical University of Vienna, Austria",
    name: "Katja Hose",
    title: "Technical University of Vienna, Austria",
    company: "",
    type: "Speaker",
  },
  {
    image: "petia-radeva.jpeg",
    alt: "Prof. Petia Radeva – Speaker at AIMLR 2026 | Universitat de Barcelona, Spain",
    name: "Prof. Petia Radeva",
    title: "Universitat de Barcelona, Spain",
    company: "",
    type: "Speaker",
  },
  {
    image: "syed-kamrul-Islam.jpg",
    alt: "Prof. Syed Kamrul Islam – Speaker at AIMLR 2026 | University of Missouri, USA",
    name: "Prof. Syed Kamrul Islam",
    title: "University of Missouri, USA",
    company: "",
    type: "Speaker",
  },
  {
    image: "alvarado.jpeg",
    alt: "Noe Alvarado – Speaker at AIMLR 2026 | Universitat Politècnica de Catalunya, Spain",
    name: "Alvarado, Noe",
    title: "Universitat Politècnica de Catalunya, Spain",
    company: "",
    type: "Speaker",
  },
  {
    image: "jan-rosell.jpeg",
    alt: "Prof. Jan Rosell – Speaker at AIMLR 2026 | Shanghai Jiao Tong University, China",
    name: "Prof. Jan Rosell",
    title: "Shanghai Jiao Tong University, China",
    company: "",
    type: "Speaker",
  },
  {
    image: "rohit-chadha.jpeg",
    alt: "Prof. Rohit Chadha – Speaker at AIMLR 2026 | University of Missouri, USA",
    name: "Prof. Rohit Chadha",
    title: "University of Missouri, USA",
    company: "",
    type: "Speaker",
  },
];



  return (
    <section
      id="speakers-section"
      className="container mx-auto px-4 md:px-6 py-10"
    >
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#00488B] mb-8 text-center">
        AIMLR 2026 SPEAKERS
      </h2>

      {/* Speakers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        {speakers.slice(0, 6).map((speaker, idx) => (
          <div key={idx} className="text-center">
            <img
              src={speaker.image}
              alt={speaker.alt}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-3"
            />

            <h3 className="font-semibold text-sm md:text-base">
              {speaker.name}
            </h3>

            <p className="text-xs md:text-sm text-gray-600 leading-snug">
              {speaker.title}
            </p>

            <p className="text-xs md:text-sm text-[#292e63] font-semibold mt-1">
              {speaker.type}
            </p>
          </div>
        ))}

        {speakers.slice(6).map((speaker, idx) => (
          <div key={`desktop-${idx}`} className="hidden md:block text-center">
            <img
              src={speaker.image}
              alt={speaker.alt}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
            />

            <h3 className="font-semibold">{speaker.name}</h3>

            <p className="text-sm text-gray-600 leading-snug">
              {speaker.title}
            </p>

            <p className="text-sm text-[#292e63] font-semibold mt-1">
              {speaker.type}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button (especially useful on mobile) */}
      <div className="text-center">
        <a
          href="/speakers"
          className="inline-block bg-[#2e376c] hover:bg-[#1f254b] text-white font-bold py-3 px-8 transition-colors duration-300 rounded"
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
