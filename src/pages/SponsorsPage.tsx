// import React from 'react';
// import Header from '../components/Header';
// import { ExternalLink, Award, Building, Users, Newspaper } from 'lucide-react';

// function SponsorsPage() {
//   const sponsors = [
//     {
//       src: "WhatsApp Image 2025-10-11 at 13.06.55_c7ee6430.jpg",
//       alt: "Platinum Tabreed",
//       link: "https://www.tabreed.ae/",
//       type: "Platinum Sponsor",
//     },
//     {
//       src: "ABB_logo.svg.png",
//       alt: "Hydropower",
//       link: "https://www.hydropower.energy/",
//       type: "Platinum Sponsor",
//     },
//     {
//       src: "Rockwell_Automation_logo_(2019).svg.png",
//       alt: "Gold Hitachi",
//       link: "https://www.hitachienergy.com/me/en",
//       type: "Gold Sponsor",
//     },
//     {
//       src: "Real-sense-logo-rgb.png",
//       alt: "Gold IGC",
//       link: "https://intelligent-globe.com/",
//       type: "Gold Sponsor",
//     },
//     {
//       src: "Yaskawa_logo.svg.png",
//       alt: "Gold Siemens",
//       link: "https://www.siemens-energy.com",
//       type: "Silver Sponsor",
//     },
//     {
//       src: "Figure-ai-logo.svg.png",
//       alt: "Silver Minsait",
//       link: "https://www.minsait.com/en",
//       type: "Bronze Sponsor",
//     },
//     {
//       src: "images.png",
//       alt: "Abbnew 1",
//       link: "javascript:void(0);",
//       type: "Bronze Sponsor",
//     },
//     {
//       src: "Untitled.png",
//       alt: "Bronze PWC",
//       link: "https://www.pwc.com/gx/en.html",
//       type: "Bronze Sponsor",
//     },
//     {
//       src: "Black_Full_Logo.webp",
//       alt: "SUEZ",
//       link: "javascript:void(0);",
//       type: "Bronze Sponsor",
//     },
//   ];

//   const universityLogos = [
//     { src: 'uni01.png', alt: 'University 1' },
//     { src: 'uni2.png', alt: 'University 2' },
//     { src: 'uni3.png', alt: 'University 3' },
//     { src: 'uni4.png', alt: 'University 4' },
//     { src: 'uni5.png', alt: 'University 5' },
//     { src: 'uni6.png', alt: 'University 6' },
//     { src: 'uni7.png', alt: 'University 7' },
//   ];

//   const partners = [
//     {
//       label: 'Supported by',
//       logo: 'gcea.png',
//       alt: 'GCEA - Global Center for Energy Analysis',
//     },
//     {
//       label: 'Official English News Partner',
//       logo: 'the-national.png',
//       alt: 'The National News',
//     },
//     {
//       label: 'Host City',
//       logo: 'Emblem_of_Italy.svg.webp',
//       alt: 'Abu Dhabi Host City',
//     },
//     {
//       label: 'Destination Partner',
//       logo: 'Roma-Stemma-2.svg.png',
//       alt: 'Abu Dhabi Convention & Exhibition Bureau',
//     },
//     {
//       label: 'Venue Partner',
//       logo: 'Crowne_Plaza_by_IHG_logo.svg.png',
//       alt: 'ADNEC Centre Abu Dhabi',
//     },
//   ];

//   return (
//     <div>
//       <Header />
//       <div className="relative text-white py-20 overflow-hidden" style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-dot.png")' }}>
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Sponsors & Partners</h1>
//           <p className="text-xl text-indigo-200 max-w-2xl mx-auto font-light">
//             Meet the organizations and institutions supporting ICAMLR 2026 and driving innovation in AI, ML, and Robotics.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-12">
//         {/* Sponsors Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Sponsors</h2>
//           <div className="space-y-8">
//             {['Platinum Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor'].map((type) => {
//               const typeSponsors = sponsors.filter(sponsor => sponsor.type === type);
//               if (typeSponsors.length === 0) return null;
//               return (
//                 <div key={type} className="bg-white rounded-lg shadow-md p-6">
//                   <h3 className="text-2xl font-semibold mb-4 text-center text-indigo-700">{type}</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {typeSponsors.map((sponsor, index) => (
//                       <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                         <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
//                           <img src={sponsor.src} alt={sponsor.alt} className="h-16 w-auto object-contain" />
//                           <ExternalLink className="h-5 w-5 text-gray-500" />
//                         </a>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* University Partners Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">University Partners</h2>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {universityLogos.map((logo, index) => (
//                 <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                   <img src={logo.src} alt={logo.alt} className="h-16 w-auto object-contain" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Partners Section */}
//         <section>
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Partners</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {partners.map((partner, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
//                 <p className="text-sm font-medium text-gray-600 mb-2">{partner.label}</p>
//                 <img src={partner.logo} alt={partner.alt} className="h-16 w-auto object-contain mx-auto" />
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default SponsorsPage;


import React from 'react';
import Header from '../components/Header';
import { ExternalLink } from 'lucide-react';
import EndFooter from '../components/EndFooter';

function SponsorsPage() {
  const sponsors = [
    { src: "WhatsApp Image 2025-10-11 at 13.06.55_c7ee6430.jpg", alt: "Platinum Tabreed", link: "https://www.tabreed.ae/", type: "Platinum Sponsor" },
    { src: "ABB_logo.svg.png", alt: "Hydropower", link: "https://www.hydropower.energy/", type: "Platinum Sponsor" },
    { src: "Rockwell_Automation_logo_(2019).svg.png", alt: "Gold Hitachi", link: "https://www.hitachienergy.com/me/en", type: "Gold Sponsor" },
    { src: "Real-sense-logo-rgb.png", alt: "Gold IGC", link: "https://intelligent-globe.com/", type: "Gold Sponsor" },
    { src: "Yaskawa_logo.svg.png", alt: "Gold Siemens", link: "https://www.siemens-energy.com", type: "Silver Sponsor" },
    { src: "Figure-ai-logo.svg.png", alt: "Silver Minsait", link: "https://www.minsait.com/en", type: "Bronze Sponsor" },
    { src: "images.png", alt: "Abbnew 1", link: "javascript:void(0);", type: "Bronze Sponsor" },
    { src: "Untitled.png", alt: "Bronze PWC", link: "https://www.pwc.com/gx/en.html", type: "Bronze Sponsor" },
    { src: "Black_Full_Logo.webp", alt: "SUEZ", link: "javascript:void(0);", type: "Bronze Sponsor" },
  ];

  const universityLogos = [
    { src: 'uni01.png', alt: 'University 1' },
    { src: 'uni2.png', alt: 'University 2' },
    { src: 'uni3.png', alt: 'University 3' },
    { src: 'uni4.png', alt: 'University 4' },
    { src: 'uni5.png', alt: 'University 5' },
    { src: 'uni6.png', alt: 'University 6' },
    { src: 'uni7.png', alt: 'University 7' },
  ];

  const partners = [
    { label: 'Supported by', logo: 'gcea.png', alt: 'GCEA - Global Center for Energy Analysis' },
    { label: 'Official English News Partner', logo: 'the-national.png', alt: 'The National News' },
    { label: 'Host City', logo: 'Emblem_of_Italy.svg.webp', alt: 'Italy City' },
    { label: 'Destination Partner', logo: 'Roma-Stemma-2.svg.png', alt: 'Rome Destination' },
    { label: 'Venue Partner', logo: 'Crowne_Plaza_by_IHG_logo.svg.png', alt: 'Venue Partner' },
  ];

  return (
    <div>
      <Header />

      {/* ---- BANNER (UNTOUCHED) ---- */}
      <div className="relative text-white py-20 overflow-hidden"
        style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-dot.png")' }}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Sponsors & Partners</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto font-light">
            Meet the organizations and institutions supporting ICAMLR 2026 and driving innovation in AI, ML, and Robotics.
          </p>
        </div>
      </div>

      {/* ---- CONTENT ---- */}
      <div className="container mx-auto px-6 py-16">

        {/* ---- SPONSORS ---- */}
        <section className="mb-20">
          {/* <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Sponsors</h2> */}

          <div className="space-y-16">
            {['Platinum Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor'].map(type => {
              const filtered = sponsors.filter(s => s.type === type);
              if (!filtered.length) return null;

              return (
                <div key={type}>
                  <h3 className="text-2xl font-semibold text-center uppercase tracking-wide text-indigo-700 mb-8">
                    {type}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center justify-center max-w-fit mx-auto">
                    {filtered.map((sponsor, index) => (
                      <a
                        key={index}
                        href={sponsor.link}
                        target="_blank"
                        className="group bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full flex justify-center items-center hover:shadow-xl hover:scale-105 transition-all"
                      >
                        <img src={sponsor.src} alt={sponsor.alt}
                          className="h-16 w-auto object-contain transition-all duration-300" />
                        <ExternalLink className="h-5 w-5 text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---- UNIVERSITIES ---- */}
        <section className="mb-20">
          {/* <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">University Partners</h2> */}
<h3 className="text-2xl font-semibold text-center uppercase tracking-wide text-indigo-700 mb-8">
                    University Partners
                  </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center justify-center max-w-fit mx-auto">
            {universityLogos.map((logo, index) => (
              <div key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all w-full flex justify-center">
                <img src={logo.src} alt={logo.alt}
                  className="h-14 transition-all duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* ---- PARTNERS ---- */}
        <section className="mb-28">
          {/* <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Partners</h2> */}
<h3 className="text-2xl font-semibold text-center uppercase tracking-wide text-indigo-700 mb-8">
                    Our Partners
                  </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center max-w-fit mx-auto">
            {partners.map((partner, index) => (
              <div key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center hover:shadow-xl hover:scale-105 transition-all">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">{partner.label}</p>
                <img src={partner.logo} alt={partner.alt}
                  className="h-14 mx-auto transition-all duration-300" />
              </div>
            ))}
          </div>
        </section>
      </div>
      <EndFooter />
    </div>
  );
}

export default SponsorsPage;
