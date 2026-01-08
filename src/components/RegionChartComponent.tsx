
// // // // // // import React from "react";


// // // // // // const RegionChart = () => (
// // // // // //   <div className="w-full h-full overflow-hidden flex min-h-[200px] sm:min-h-[280px] md:min-h-[340px]">
// // // // // //     {/* Middle East */}
// // // // // //     <div className="w-1/4 bg-[#0B5ED7] text-white flex flex-col">
// // // // // //       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">30%</h2>
// // // // // //       <p className="text-sm md:text-lg ml-4">Europe</p>
// // // // // //     </div>
// // // // // //     {/* Asia */}
// // // // // //     <div className="w-1/4 bg-[#0B5ED7]/80 text-white flex flex-col">
// // // // // //       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">28%</h2>
// // // // // //       <p className="text-sm md:text-lg ml-4">Asia</p>
// // // // // //     </div>
// // // // // //     {/* Europe + USA + Canada */}
// // // // // //     {/* <div className="w-1/2 relative bg-[#FF9D2E] bg-[repeating-linear-gradient(135deg,#3b4f86,#ffffff_2px,#3b4f86_2px,#3c5087_20px)] text-white flex flex-col justify-center items-center"> */}
// // // // // //     <div className="
// // // // // //   w-1/2 relative
// // // // // //   bg-[#0B5ED7]
// // // // // //   bg-[repeating-linear-gradient(
// // // // // //     135deg,
// // // // // //     rgba(11,94,215,0.7),
// // // // // //     rgba(11,94,215,0.7)_2px,
// // // // // //     #ffffff_2px,
// // // // // //     #ffffff_6px
// // // // // //   )]
// // // // // //   text-white
// // // // // //   flex flex-col justify-center items-center
// // // // // // ">

// // // // // //       {/* Europe text with transparent black backdrop for visibility */}
// // // // // //       <div className="absolute top-4 left-4 z-10 px-3 py-1">
// // // // // //         <h2 className="text-xl md:text-4xl font-bold text-white">22%</h2>
// // // // // //         <p className="text-sm md:text-lg text-white">Middle East</p>
// // // // // //       </div>
// // // // // //       {/* USA block */}
// // // // // //       <div className="absolute bottom-0 right-0 w-[68%] h-[68%] bg-[#3e548b] flex flex-col rounded-b-xl pl-4 pt-4 z-0">
// // // // // //         <h2 className="text-md md:text-2xl font-bold text-white drop-shadow">17%</h2>
// // // // // //         <p className="text-xs md:text-sm text-white drop-shadow">USA</p>
// // // // // //         {/* Canada block */}
// // // // // //         <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#46629b] flex flex-col rounded-br-xl pl-4 pt-4">
// // // // // //           <h2 className="text-xs md:text-md font-bold text-white drop-shadow">3%</h2>
// // // // // //           <p className="text-[10px] md:text-xs text-white drop-shadow">Canada</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   </div>
// // // // // // );

// // // // // // // export default RegionChart;


// // // // // // // --- JobLevelChart Component ---
// // // // // // const JobLevelChart = () => (
// // // // // //   <div className="w-full overflow-hidden shadow bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
// // // // // //     <div className="bg-[#59c1ac] px-3 md:px-6 pt-6 pb-3 w-full">
// // // // // //       <div className="font-semibold text-base md:text-lg mb-2 text-black">By Job Level</div>
// // // // // //       <div className="flex items-end gap-3">
// // // // // //         <span className="text-4xl md:text-[56px] font-semibold leading-tight text-black">72%</span>
// // // // // //         <div className="flex flex-col pb-2">
// // // // // //           <div className="text-xs md:text-base text-black">Professor / PhD /Doctor / Academic</div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //     <div className="bg-[#71D6C3] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
// // // // // //       <div className="font-semibold text-lg md:text-xl text-black">10.0%</div>
// // // // // //       <div className="text-xs md:text-base text-black">Heads / Manager</div>
// // // // // //     </div>
// // // // // //     <div className="bg-[#b1ece0] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
// // // // // //       <div className="font-semibold text-lg md:text-xl text-black">10.0%</div>
// // // // // //       <div className="text-xs md:text-base text-black">Senior Data Scientists & Engineers</div>
// // // // // //     </div>
// // // // // //     <div className="bg-[#e2f7f2] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
// // // // // //       <div className="font-semibold text-lg md:text-xl text-black">4.0%</div>
// // // // // //       <div className="text-xs md:text-base text-black">C-Level / Director / VP / Founder</div>
// // // // // //     </div>
// // // // // //     <div className="bg-[#fafefd] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
// // // // // //       <div className="font-semibold text-lg md:text-xl text-black">4.0%</div>
// // // // // //       <div className="text-xs md:text-base text-black">Developers</div>
// // // // // //     </div>
// // // // // //   </div>
// // // // // // );

// // // // // // // --- CompanySizeChart Component ---
// // // // // // const CompanySizeChart = () => (
// // // // // //   <div className="w-full flex overflow-hidden bg-white shadow min-h-[250px] md:min-h-[350px] lg:min-h-[400px]" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
// // // // // //     {/* Left side (Up to 1000) */}
// // // // // //     <div className="w-1/2 flex flex-col justify-between bg-[#f4f4f4] p-3 md:p-6">
// // // // // //       <div className="font-semibold text-base md:text-lg text-black mb-2">By Company Size</div>
// // // // // //       <div className="mt-auto">
// // // // // //         <div className="text-3xl md:text-[48px] font-semibold text-black leading-none mb-2">34%</div>
// // // // // //         <div className="text-xs md:text-lg text-black">up to 1000</div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //     {/* Right side (split top/bottom) */}
// // // // // //     <div className="w-1/2 flex flex-col">
// // // // // //       {/* Top: 1,000-10,000 */}
// // // // // //       <div className="flex-1 flex flex-col items-end justify-start bg-[#929292] p-3 md:p-6">
// // // // // //         <div className="text-xl md:text-[32px] font-semibold text-white leading-none mb-2">13%</div>
// // // // // //         <div className="text-xs md:text-lg text-white">1,000-10,000</div>
// // // // // //       </div>
// // // // // //       {/* Bottom: 10,000 & over */}
// // // // // //       <div className="flex-1 flex flex-col items-end justify-end bg-[#d1d1d1] p-3 md:p-6">
// // // // // //         <div className="text-xl md:text-[32px] font-semibold text-white leading-none mb-2">13%</div>
// // // // // //         <div className="text-xs md:text-lg text-white">10,000 & over</div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   </div>
// // // // // // );

// // // // // // // --- SectorChart Component ---Academics
// // // // // // const sectors = [
// // // // // //   { label: "Academics", percent: 70 },
// // // // // //   { label: "Technology", percent: 15 },
// // // // // //   { label: "Startups", percent: 8},
// // // // // //   { label: "Government & Public sector", percent: 6 },
// // // // // //   { label: "Investors, Advisory & Consulting", percent: 5 },
// // // // // //   { label: "Enterprises/Corporates", percent: 4 },
// // // // // //   { label: "Others (Associations, Media, Independent Developers)", percent: 2 }
// // // // // // ];

// // // // // // const SectorChart = () => (
// // // // // //   <div className="w-full overflow-hidden bg-white py-0 md:py-4 pr-3 md:pr-6 pl-3 md:pl-8" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
// // // // // //     <div className="font-semibold text-base md:text-lg text-black mb-4 md:mb-6 mt-0 md:mt-2">By Sector</div>
// // // // // //     <div className="space-y-4 md:space-y-6">
// // // // // //       {sectors.map((item, idx) => (
// // // // // //         <div key={idx} className="flex items-center gap-2 md:gap-4">
// // // // // //           <div className="flex-grow">
// // // // // //             <div className="text-xs md:text-[15px] font-medium text-black mb-1">{item.label}</div>
// // // // // //             <div className="w-full bg-[#f4f4f4] h-[10px] md:h-[16px] rounded overflow-hidden relative">
// // // // // //               <div
// // // // // //                 className="h-full"
// // // // // //                 style={{
// // // // // //                   width: `${item.percent}%`,
// // // // // //                   background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
// // // // // //                 }}
// // // // // //               ></div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           {/* <div className="w-9 md:w-14 text-right text-xs md:text-[18px] text-black font-medium">{item.percent}%</div> */}
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   </div>
// // // // // // );

// // // // // // // --- Dashboard Layout ---
// // // // // // function Dashboard() {
// // // // // //   return (
// // // // // //     <section className="max-w-7xl mx-auto py-4 md:py-6 px-2 md:px-5 space-y-5 md:space-y-9" aria-label="Participant Demographics">
    
// // // // // //             {/* <h1
// // // // // //         style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
// // // // // //         className="text-center text-2xl md:text-3xl font-bold mb-4"
// // // // // //       >
        
// // // // // //         WHO'S PARTICIPATING THE CONFERENCE, 2026
// // // // // //       </h1> */}

// // // // // //       <h2 className="text-3xl font-bold text-[#0B5ED7] mb-6 text-center">
// // // // // //             WHO'S PARTICIPATING IN ICBME 2026 CONFERENCE
// // // // // //       </h2>
      
// // // // // //       {/* Top Row */}
// // // // // //       <div className="flex flex-col md:flex-row gap-5 md:gap-8">
// // // // // //         <div className="md:flex-[2] w-full min-w-0">
// // // // // //           <RegionChart />
// // // // // //         </div>
// // // // // //         <div className="md:flex-1 w-full min-w-0 mt-4 md:mt-0">
// // // // // //           <JobLevelChart />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       {/* Bottom Row */}
// // // // // //       <div className="flex flex-col md:flex-row gap-5 md:gap-8">
// // // // // //         <div className="w-full md:flex-1 min-w-0">
// // // // // //           <CompanySizeChart />
// // // // // //         </div>
// // // // // //         <div className="w-full md:flex-[2] min-w-0 mt-4 md:mt-0">
// // // // // //           <SectorChart />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // export default Dashboard;



// // // // // import React from "react";

// // // // // /* =========================
// // // // //    REGION CHART
// // // // // ========================= */
// // // // // const RegionChart = () => (
// // // // //   <div className="w-full h-full overflow-hidden flex min-h-[220px] sm:min-h-[280px] md:min-h-[340px] rounded-lg">

// // // // //     {/* Europe – 30% */}
// // // // //     <div className="w-1/4 bg-[#0B5ED7] text-white flex flex-col">
// // // // //       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">30%</h2>
// // // // //       <p className="text-sm md:text-lg ml-4">Europe</p>
// // // // //     </div>

// // // // //     {/* Asia – 28% */}
// // // // //     <div className="w-1/4 bg-[#0B5ED7]/80 text-white flex flex-col">
// // // // //       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">28%</h2>
// // // // //       <p className="text-sm md:text-lg ml-4">Asia</p>
// // // // //     </div>

// // // // //     {/* Middle East + USA + Canada */}
// // // // //     <div
// // // // //       className="
// // // // //         w-1/2 relative
// // // // //         bg-[#0B5ED7]/70
// // // // //         bg-[repeating-linear-gradient(
// // // // //           135deg,
// // // // //           rgba(11,94,215,0.7),
// // // // //           rgba(11,94,215,0.7)_2px,
// // // // //           rgba(255,255,255,0.3)_2px,
// // // // //           rgba(255,255,255,0.3)_6px
// // // // //         )]
// // // // //         text-white
// // // // //       "
// // // // //     >
// // // // //       {/* Middle East – 22% */}
// // // // //       <div className="absolute top-4 left-4">
// // // // //         <h2 className="text-xl md:text-4xl font-bold">22%</h2>
// // // // //         <p className="text-sm md:text-lg">Middle East</p>
// // // // //       </div>

// // // // //       {/* USA – 17% */}
// // // // //       <div className="absolute bottom-0 right-0 w-[68%] h-[68%] bg-[#0B5ED7]/55 rounded-b-xl p-4">
// // // // //         <h2 className="text-md md:text-2xl font-bold">17%</h2>
// // // // //         <p className="text-xs md:text-sm">USA</p>

// // // // //         {/* Canada – 3% */}
// // // // //         <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#0B5ED7]/35 rounded-br-xl p-3">
// // // // //           <h2 className="text-xs md:text-md font-bold">3%</h2>
// // // // //           <p className="text-[10px] md:text-xs">Canada</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // /* =========================
// // // // //    JOB LEVEL CHART
// // // // // ========================= */
// // // // // const JobLevelChart = () => (
// // // // //   <div className="w-full overflow-hidden shadow bg-white rounded-lg">
// // // // //     <div className="bg-[#EAF2FF] px-6 pt-6 pb-4">
// // // // //       <div className="font-semibold text-lg text-[#1F2937] mb-2">
// // // // //         By Job Level
// // // // //       </div>
// // // // //       <div className="flex items-end gap-3">
// // // // //         <span className="text-4xl md:text-[56px] font-semibold text-[#0B5ED7]">
// // // // //           72%
// // // // //         </span>
// // // // //         <div className="text-sm md:text-base text-[#1F2937] pb-2">
// // // // //           Professor / PhD / Doctor / Academic
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>

// // // // //     {[
// // // // //       { label: "Heads / Manager", value: "10%" },
// // // // //       { label: "Senior Data Scientists & Engineers", value: "10%" },
// // // // //       { label: "C-Level / Director / VP / Founder", value: "4%" },
// // // // //       { label: "Developers", value: "4%" },
// // // // //     ].map((item, idx) => (
// // // // //       <div
// // // // //         key={idx}
// // // // //         className="px-6 py-4 border-t border-gray-200 bg-white"
// // // // //       >
// // // // //         <div className="font-semibold text-lg text-[#0B5ED7]">
// // // // //           {item.value}
// // // // //         </div>
// // // // //         <div className="text-sm text-[#1F2937]">{item.label}</div>
// // // // //       </div>
// // // // //     ))}
// // // // //   </div>
// // // // // );

// // // // // /* =========================
// // // // //    COMPANY SIZE CHART
// // // // // ========================= */
// // // // // const CompanySizeChart = () => (
// // // // //   <div className="w-full flex overflow-hidden bg-white shadow rounded-lg min-h-[260px]">
// // // // //     <div className="w-1/2 flex flex-col justify-between bg-[#EAF2FF] p-6">
// // // // //       <div className="font-semibold text-lg text-[#1F2937]">
// // // // //         By Company Size
// // // // //       </div>
// // // // //       <div>
// // // // //         <div className="text-4xl md:text-[48px] font-semibold text-[#0B5ED7]">
// // // // //           34%
// // // // //         </div>
// // // // //         <div className="text-sm text-[#1F2937]">Up to 1,000</div>
// // // // //       </div>
// // // // //     </div>

// // // // //     <div className="w-1/2 flex flex-col">
// // // // //       <div className="flex-1 bg-[#0B5ED7]/60 text-white p-6 text-right">
// // // // //         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
// // // // //         <div className="text-sm">1,000 – 10,000</div>
// // // // //       </div>
// // // // //       <div className="flex-1 bg-[#0B5ED7]/40 text-white p-6 text-right">
// // // // //         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
// // // // //         <div className="text-sm">10,000 & Over</div>
// // // // //       </div>
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // /* =========================
// // // // //    SECTOR CHART
// // // // // ========================= */
// // // // // const sectors = [
// // // // //   { label: "Academics", percent: 70 },
// // // // //   { label: "Technology", percent: 15 },
// // // // //   { label: "Startups", percent: 8 },
// // // // //   { label: "Government & Public Sector", percent: 6 },
// // // // //   { label: "Consulting & Advisory", percent: 5 },
// // // // //   { label: "Enterprises / Corporates", percent: 4 },
// // // // //   { label: "Others", percent: 2 },
// // // // // ];

// // // // // const SectorChart = () => (
// // // // //   <div className="w-full bg-white shadow rounded-lg p-6">
// // // // //     <div className="font-semibold text-lg text-[#1F2937] mb-6">
// // // // //       By Sector
// // // // //     </div>

// // // // //     <div className="space-y-5">
// // // // //       {sectors.map((item, idx) => (
// // // // //         <div key={idx}>
// // // // //           <div className="text-sm font-medium text-[#1F2937] mb-1">
// // // // //             {item.label}
// // // // //           </div>
// // // // //           <div className="w-full h-[14px] bg-gray-200 rounded overflow-hidden">
// // // // //             <div
// // // // //               className="h-full"
// // // // //               style={{
// // // // //                 width: `${item.percent}%`,
// // // // //                 background: "linear-gradient(90deg, #0B5ED7 0%, #00B4D8 100%)",
// // // // //               }}
// // // // //             ></div>
// // // // //           </div>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // /* =========================
// // // // //    DASHBOARD LAYOUT
// // // // // ========================= */
// // // // // function Dashboard() {
// // // // //   return (
// // // // //     <section className="max-w-7xl mx-auto py-6 px-3 space-y-10">

// // // // //       <h2 className="text-3xl font-bold text-[#0B5ED7] text-center">
// // // // //         WHO'S PARTICIPATING IN ICBME 2026 CONFERENCE
// // // // //       </h2>

// // // // //       {/* Top Row */}
// // // // //       <div className="flex flex-col md:flex-row gap-8">
// // // // //         <div className="md:flex-[2]">
// // // // //           <RegionChart />
// // // // //         </div>
// // // // //         <div className="md:flex-1">
// // // // //           <JobLevelChart />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Bottom Row */}
// // // // //       <div className="flex flex-col md:flex-row gap-8">
// // // // //         <div className="md:flex-1">
// // // // //           <CompanySizeChart />
// // // // //         </div>
// // // // //         <div className="md:flex-[2]">
// // // // //           <SectorChart />
// // // // //         </div>
// // // // //       </div>

// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // export default Dashboard;




// // // // import React from "react";

// // // // /* =========================
// // // //    REGION CHART
// // // // ========================= */
// // // // const RegionChart = () => (
// // // //   <div className="w-full h-full overflow-hidden flex min-h-[220px] sm:min-h-[280px] md:min-h-[340px] rounded-lg">

// // // //     {/* Europe – 30% */}
// // // //     <div className="w-1/4 bg-[#047857] text-white flex flex-col">
// // // //       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">30%</h2>
// // // //       <p className="text-sm md:text-lg ml-4">Europe</p>
// // // //     </div>

// // // //     {/* Asia – 28% */}
// // // //     <div className="w-1/4 bg-[#047857]/80 text-white flex flex-col">
// // // //       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">28%</h2>
// // // //       <p className="text-sm md:text-lg ml-4">Asia</p>
// // // //     </div>

// // // //     {/* Middle East + USA + Canada */}
// // // //     <div
// // // //       className="
// // // //         w-1/2 relative
// // // //         bg-[#047857]/70
// // // //         bg-[repeating-linear-gradient(
// // // //           135deg,
// // // //           rgba(4,120,87,0.7),
// // // //           rgba(4,120,87,0.7)_2px,
// // // //           rgba(255,255,255,0.35)_2px,
// // // //           rgba(255,255,255,0.35)_6px
// // // //         )]
// // // //         text-white
// // // //       "
// // // //     >
// // // //       {/* Middle East – 22% */}
// // // //       <div className="absolute top-4 left-4">
// // // //         <h2 className="text-xl md:text-4xl font-bold">22%</h2>
// // // //         <p className="text-sm md:text-lg">Middle East</p>
// // // //       </div>

// // // //       {/* USA – 17% */}
// // // //       <div className="absolute bottom-0 right-0 w-[68%] h-[68%] bg-[#047857]/55 rounded-b-xl p-4">
// // // //         <h2 className="text-md md:text-2xl font-bold">17%</h2>
// // // //         <p className="text-xs md:text-sm">USA</p>

// // // //         {/* Canada – 3% */}
// // // //         <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#047857]/35 rounded-br-xl p-3">
// // // //           <h2 className="text-xs md:text-md font-bold">3%</h2>
// // // //           <p className="text-[10px] md:text-xs">Canada</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // /* =========================
// // // //    JOB LEVEL CHART
// // // // ========================= */
// // // // const JobLevelChart = () => (
// // // //   <div className="w-full overflow-hidden shadow bg-white rounded-lg">
// // // //     <div className="bg-[#ECFDF5] px-6 pt-6 pb-4">
// // // //       <div className="font-semibold text-lg text-[#1E293B] mb-2">
// // // //         By Job Level
// // // //       </div>
// // // //       <div className="flex items-end gap-3">
// // // //         <span className="text-4xl md:text-[56px] font-semibold text-[#047857]">
// // // //           72%
// // // //         </span>
// // // //         <div className="text-sm md:text-base text-[#64748B] pb-2">
// // // //           Professor / PhD / Doctor / Academic
// // // //         </div>
// // // //       </div>
// // // //     </div>

// // // //     {[
// // // //       { label: "Heads / Manager", value: "10%" },
// // // //       { label: "Senior Data Scientists & Engineers", value: "10%" },
// // // //       { label: "C-Level / Director / VP / Founder", value: "4%" },
// // // //       { label: "Developers", value: "4%" },
// // // //     ].map((item, idx) => (
// // // //       <div
// // // //         key={idx}
// // // //         className="px-6 py-4 border-t border-[#D1FAE5] bg-white"
// // // //       >
// // // //         <div className="font-semibold text-lg text-[#047857]">
// // // //           {item.value}
// // // //         </div>
// // // //         <div className="text-sm text-[#1E293B]">{item.label}</div>
// // // //       </div>
// // // //     ))}
// // // //   </div>
// // // // );

// // // // /* =========================
// // // //    COMPANY SIZE CHART
// // // // ========================= */
// // // // const CompanySizeChart = () => (
// // // //   <div className="w-full flex overflow-hidden bg-white shadow rounded-lg min-h-[260px]">
// // // //     <div className="w-1/2 flex flex-col justify-between bg-[#ECFDF5] p-6">
// // // //       <div className="font-semibold text-lg text-[#1E293B]">
// // // //         By Company Size
// // // //       </div>
// // // //       <div>
// // // //         <div className="text-4xl md:text-[48px] font-semibold text-[#047857]">
// // // //           34%
// // // //         </div>
// // // //         <div className="text-sm text-[#64748B]">Up to 1,000</div>
// // // //       </div>
// // // //     </div>

// // // //     <div className="w-1/2 flex flex-col">
// // // //       <div className="flex-1 bg-[#047857]/60 text-white p-6 text-right">
// // // //         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
// // // //         <div className="text-sm">1,000 – 10,000</div>
// // // //       </div>
// // // //       <div className="flex-1 bg-[#047857]/40 text-white p-6 text-right">
// // // //         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
// // // //         <div className="text-sm">10,000 & Over</div>
// // // //       </div>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // /* =========================
// // // //    SECTOR CHART
// // // // ========================= */
// // // // const sectors = [
// // // //   { label: "Academics", percent: 70 },
// // // //   { label: "Technology", percent: 15 },
// // // //   { label: "Startups", percent: 8 },
// // // //   { label: "Government & Public Sector", percent: 6 },
// // // //   { label: "Consulting & Advisory", percent: 5 },
// // // //   { label: "Enterprises / Corporates", percent: 4 },
// // // //   { label: "Others", percent: 2 },
// // // // ];

// // // // const SectorChart = () => (
// // // //   <div className="w-full bg-white shadow rounded-lg p-6">
// // // //     <div className="font-semibold text-lg text-[#1E293B] mb-6">
// // // //       By Sector
// // // //     </div>

// // // //     <div className="space-y-5">
// // // //       {sectors.map((item, idx) => (
// // // //         <div key={idx}>
// // // //           <div className="text-sm font-medium text-[#1E293B] mb-1">
// // // //             {item.label}
// // // //           </div>
// // // //           <div className="w-full h-[14px] bg-[#ECFDF5] rounded overflow-hidden">
// // // //             <div
// // // //               className="h-full"
// // // //               style={{
// // // //                 width: `${item.percent}%`,
// // // //                 background: "linear-gradient(90deg, #047857 0%, #84CC16 100%)",
// // // //               }}
// // // //             ></div>
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   </div>
// // // // );

// // // // /* =========================
// // // //    DASHBOARD LAYOUT
// // // // ========================= */
// // // // function Dashboard() {
// // // //   return (
// // // //     <section className="max-w-7xl mx-auto py-6 px-3 space-y-10">

// // // //       <h2 className="text-3xl font-bold text-[#047857] text-center">
// // // //         WHO’S PARTICIPATING IN ICBME 2026 CONFERENCE
// // // //       </h2>

// // // //       {/* Top Row */}
// // // //       <div className="flex flex-col md:flex-row gap-8">
// // // //         <div className="md:flex-[2]">
// // // //           <RegionChart />
// // // //         </div>
// // // //         <div className="md:flex-1">
// // // //           <JobLevelChart />
// // // //         </div>
// // // //       </div>

// // // //       {/* Bottom Row */}
// // // //       <div className="flex flex-col md:flex-row gap-8">
// // // //         <div className="md:flex-1">
// // // //           <CompanySizeChart />
// // // //         </div>
// // // //         <div className="md:flex-[2]">
// // // //           <SectorChart />
// // // //         </div>
// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }

// // // // export default Dashboard;





// // // import React from "react";
// // // import { AgCharts } from "ag-charts-react";
// // // import {
// // //   AnimationModule,
// // //   ContextMenuModule,
// // //   LegendModule,
// // //   ModuleRegistry,
// // //   PyramidSeriesModule,
// // // } from "ag-charts-enterprise";

// // // /* Register AG Charts Enterprise modules */
// // // ModuleRegistry.registerModules([
// // //   AnimationModule,
// // //   LegendModule,
// // //   PyramidSeriesModule,
// // //   ContextMenuModule,
// // // ]);

// // // /* =========================
// // //    REGION CHART (PYRAMID)
// // // ========================= */
// // // // const RegionChart = () => {
// // // //   const options = {
// // // //     data: [
// // // //       { group: "Europe", value: 30 },
// // // //       { group: "Asia", value: 28 },
// // // //       { group: "Middle East", value: 22 },
// // // //       { group: "USA", value: 17 },
// // // //       { group: "Canada", value: 3 },
// // // //     ],
// // // //     title: {
// // // //       text: "Participants by Region",
// // // //     },
// // // //     series: [
// // // //       {
// // // //         type: "pyramid",
// // // //         stageKey: "group",
// // // //         valueKey: "value",
// // // //         label: {
// // // //           enabled: true,
// // // //         },
// // // //       },
// // // //     ],
// // // //     legend: {
// // // //       position: "right",
// // // //     },
// // // //   };

// // // //   return (
// // // //     <div className="w-full bg-white shadow rounded-lg p-4 min-h-[320px]">
// // // //       <AgCharts options={options} />
// // // //     </div>
// // // //   );
// // // // };


// // // const RegionChart = () => {
// // //   const options = {
// // //     autoSize: false,
// // //     height: 420,

// // //     data: [
// // //       { group: "Europe", value: 30 },
// // //       { group: "Asia", value: 28 },
// // //       { group: "Middle East", value: 22 },
// // //       { group: "USA", value: 17 },
// // //       { group: "Canada", value: 3 },
// // //     ],

// // //     title: {
// // //       text: "Participants by Region",
// // //       fontSize: 16,
// // //       spacing: 12,
// // //     },

// // //     padding: {
// // //       top: 20,
// // //       right: 120,
// // //       bottom: 20,
// // //       left: 120,
// // //     },

// // //     series: [
// // //       {
// // //         type: "pyramid",
// // //         stageKey: "group",
// // //         valueKey: "value",

// // //         fills: [
// // //           "#3B82F6", // Europe
// // //           "#FB923C", // Asia
// // //           "#22C55E", // Middle East
// // //           "#38BDF8", // USA
// // //           "#FACC15", // Canada
// // //         ],

// // //         strokes: ["#ffffff"],
// // //         strokeWidth: 1,

// // //         label: {
// // //           enabled: true,
// // //           fontSize: 13,
// // //           color: "#ffffff",
// // //           formatter: ({ datum }: any) => `${datum.value}%`,
// // //         },

// // //         stageLabel: {
// // //           enabled: true,
// // //           fontSize: 13,
// // //           color: "#1E293B",
// // //         },

// // //         spacing: 2,
// // //       },
// // //     ],

// // //     legend: {
// // //       position: "right",
// // //       item: {
// // //         label: {
// // //           fontSize: 13,
// // //         },
// // //         marker: {
// // //           size: 12,
// // //         },
// // //       },
// // //     },
// // //   };

// // //   return (
// // //     <div className="w-full bg-white shadow rounded-lg p-4">
// // //       <AgCharts options={options} />
// // //     </div>
// // //   );
// // // };



// // // /* =========================
// // //    JOB LEVEL CHART
// // // ========================= */
// // // const JobLevelChart = () => (
// // //   <div className="w-full overflow-hidden shadow bg-white rounded-lg">
// // //     <div className="bg-[#ECFDF5] px-6 pt-6 pb-4">
// // //       <div className="font-semibold text-lg text-[#1E293B] mb-2">
// // //         By Job Level
// // //       </div>
// // //       <div className="flex items-end gap-3">
// // //         <span className="text-4xl md:text-[56px] font-semibold text-[#047857]">
// // //           72%
// // //         </span>
// // //         <div className="text-sm md:text-base text-[#64748B] pb-2">
// // //           Professor / PhD / Doctor / Academic
// // //         </div>
// // //       </div>
// // //     </div>

// // //     {[
// // //       { label: "Heads / Manager", value: "10%" },
// // //       { label: "Senior Data Scientists & Engineers", value: "10%" },
// // //       { label: "C-Level / Director / VP / Founder", value: "4%" },
// // //       { label: "Developers", value: "4%" },
// // //     ].map((item, idx) => (
// // //       <div
// // //         key={idx}
// // //         className="px-6 py-4 border-t border-[#D1FAE5] bg-white"
// // //       >
// // //         <div className="font-semibold text-lg text-[#047857]">
// // //           {item.value}
// // //         </div>
// // //         <div className="text-sm text-[#1E293B]">{item.label}</div>
// // //       </div>
// // //     ))}
// // //   </div>
// // // );

// // // /* =========================
// // //    COMPANY SIZE CHART
// // // ========================= */
// // // const CompanySizeChart = () => (
// // //   <div className="w-full flex overflow-hidden bg-white shadow rounded-lg min-h-[260px]">
// // //     <div className="w-1/2 flex flex-col justify-between bg-[#ECFDF5] p-6">
// // //       <div className="font-semibold text-lg text-[#1E293B]">
// // //         By Company Size
// // //       </div>
// // //       <div>
// // //         <div className="text-4xl md:text-[48px] font-semibold text-[#047857]">
// // //           34%
// // //         </div>
// // //         <div className="text-sm text-[#64748B]">Up to 1,000</div>
// // //       </div>
// // //     </div>

// // //     <div className="w-1/2 flex flex-col">
// // //       <div className="flex-1 bg-[#047857]/60 text-white p-6 text-right">
// // //         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
// // //         <div className="text-sm">1,000 – 10,000</div>
// // //       </div>
// // //       <div className="flex-1 bg-[#047857]/40 text-white p-6 text-right">
// // //         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
// // //         <div className="text-sm">10,000 & Over</div>
// // //       </div>
// // //     </div>
// // //   </div>
// // // );

// // // /* =========================
// // //    SECTOR CHART
// // // ========================= */
// // // const sectors = [
// // //   { label: "Academics", percent: 70 },
// // //   { label: "Technology", percent: 15 },
// // //   { label: "Startups", percent: 8 },
// // //   { label: "Government & Public Sector", percent: 6 },
// // //   { label: "Consulting & Advisory", percent: 5 },
// // //   { label: "Enterprises / Corporates", percent: 4 },
// // //   { label: "Others", percent: 2 },
// // // ];

// // // // const SectorChart = () => (
// // // //   <div className="w-full bg-white shadow rounded-lg p-6">
// // // //     <div className="font-semibold text-lg text-[#1E293B] mb-6">
// // // //       By Sector
// // // //     </div>

// // // //     <div className="space-y-5">
// // // //       {sectors.map((item, idx) => (
// // // //         <div key={idx}>
// // // //           <div className="text-sm font-medium text-[#1E293B] mb-1">
// // // //             {item.label}
// // // //           </div>
// // // //           <div className="w-full h-[14px] bg-[#ECFDF5] rounded overflow-hidden">
// // // //             <div
// // // //               className="h-full"
// // // //               style={{
// // // //                 width: `${item.percent}%`,
// // // //                 background:
// // // //                   "linear-gradient(90deg, #047857 0%, #84CC16 100%)",
// // // //               }}
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   </div>
// // // // );

// // // const SectorChart = () => (
// // //   <div className="w-full bg-white shadow rounded-lg p-6">
// // //     <div className="font-semibold text-lg text-[#1E293B] mb-8">
// // //       By Sector
// // //     </div>

// // //     <div className="flex items-end justify-between gap-4 h-[220px]">
// // //       {sectors.map((item, idx) => (
// // //         <div
// // //           key={idx}
// // //           className="flex flex-col items-center flex-1"
// // //         >
// // //           {/* Percentage */}
// // //           <div className="mb-2 text-sm font-semibold text-[#047857]">
// // //             {item.percent}%
// // //           </div>

// // //           {/* Bar */}
// // //           <div className="w-full bg-[#ECFDF5] rounded-md flex items-end h-full">
// // //             <div
// // //               className="w-full rounded-md"
// // //               style={{
// // //                 height: `${item.percent}%`,
// // //                 background:
// // //                   "linear-gradient(180deg, #047857 0%, #84CC16 100%)",
// // //               }}
// // //             />
// // //           </div>

// // //           {/* Label */}
// // //           <div className="mt-3 text-xs sm:text-sm text-center text-[#1E293B] leading-tight">
// // //             {item.label}
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </div>
// // // );

// // // /* =========================
// // //    DASHBOARD LAYOUT
// // // ========================= */
// // // function Dashboard() {
// // //   return (
// // //     <section className="max-w-7xl mx-auto py-6 px-3 space-y-10">

// // //       <h2 className="text-3xl font-bold text-[#047857] text-center">
// // //         WHO’S PARTICIPATING IN ICBME 2026 CONFERENCE
// // //       </h2>

// // //       {/* Top Row */}
// // //       <div className="flex flex-col md:flex-row gap-8">
// // //         <div className="md:flex-[2]">
// // //           <RegionChart />
// // //         </div>
// // //         <div className="md:flex-1">
// // //           <JobLevelChart />
// // //         </div>
// // //       </div>

// // //       {/* Bottom Row */}
// // //       <div className="flex flex-col md:flex-row gap-8">
// // //         <div className="md:flex-1">
// // //           <CompanySizeChart />
// // //         </div>
// // //         <div className="md:flex-[2]">
// // //           <SectorChart />
// // //         </div>
// // //       </div>

// // //     </section>
// // //   );
// // // }

// // // export default Dashboard;





// // import React from "react";
// // import { AgCharts } from "ag-charts-react";
// // import {
// //   AnimationModule,
// //   ContextMenuModule,
// //   LegendModule,
// //   ModuleRegistry,
// //   PyramidSeriesModule,
// // } from "ag-charts-enterprise";

// // /* =========================
// //    AG CHARTS MODULE REGISTER
// // ========================= */
// // ModuleRegistry.registerModules([
// //   AnimationModule,
// //   LegendModule,
// //   PyramidSeriesModule,
// //   ContextMenuModule,
// // ]);

// // /* =========================
// //    REGION CHART (PYRAMID)
// // ========================= */
// // const RegionChart = () => {
// //   const options = {
// //     autoSize: false,
// //     height: 420,

// //     data: [
// //       { group: "Europe", value: 30 },
// //       { group: "Asia", value: 28 },
// //       { group: "Middle East", value: 22 },
// //       { group: "USA", value: 17 },
// //       { group: "Canada", value: 3 },
// //     ],

// //     title: {
// //       text: "Participants by Region",
// //       fontSize: 16,
// //       spacing: 12,
// //     },

// //     padding: {
// //       top: 20,
// //       right: 120,
// //       bottom: 20,
// //       left: 120,
// //     },

// //     series: [
// //       {
// //         type: "pyramid",
// //         stageKey: "group",
// //         valueKey: "value",

// //         fills: ["#3B82F6", "#FB923C", "#22C55E", "#38BDF8", "#FACC15"],
// //         strokes: ["#ffffff"],
// //         strokeWidth: 1,

// //         label: {
// //           enabled: true,
// //           color: "#ffffff",
// //           fontSize: 13,
// //           formatter: ({ datum }: any) => `${datum.value}%`,
// //         },

// //         stageLabel: {
// //           enabled: true,
// //           fontSize: 13,
// //           color: "#1E293B",
// //         },

// //         spacing: 2,
// //       },
// //     ],

// //     legend: {
// //       position: "right",
// //     },
// //   };

// //   return (
// //     <div className="w-full bg-white shadow rounded-lg p-4">
// //       <AgCharts options={options} />
// //     </div>
// //   );
// // };

// // /* =========================
// //    JOB LEVEL CHART
// // ========================= */
// // const JobLevelChart = () => (
// //   <div className="w-full overflow-hidden shadow bg-white rounded-lg">
// //     <div className="bg-[#ECFDF5] px-6 pt-6 pb-4">
// //       <div className="font-semibold text-lg text-[#1E293B] mb-2">
// //         By Job Level
// //       </div>
// //       <div className="flex items-end gap-3">
// //         <span className="text-4xl md:text-[56px] font-semibold text-[#047857]">
// //           72%
// //         </span>
// //         <div className="text-sm md:text-base text-[#64748B] pb-2">
// //           Professor / PhD / Doctor / Academic
// //         </div>
// //       </div>
// //     </div>

// //     {[
// //       { label: "Heads / Manager", value: "10%" },
// //       { label: "Senior Data Scientists & Engineers", value: "10%" },
// //       { label: "C-Level / Director / VP / Founder", value: "4%" },
// //       { label: "Developers", value: "4%" },
// //     ].map((item, idx) => (
// //       <div
// //         key={idx}
// //         className="px-6 py-4 border-t border-[#D1FAE5]"
// //       >
// //         <div className="font-semibold text-lg text-[#047857]">
// //           {item.value}
// //         </div>
// //         <div className="text-sm text-[#1E293B]">{item.label}</div>
// //       </div>
// //     ))}
// //   </div>
// // );

// // /* =========================
// //    COMPANY SIZE CHART
// // ========================= */
// // const CompanySizeChart = () => (
// //   <div className="w-full flex overflow-hidden bg-white shadow rounded-lg min-h-[260px]">
// //     <div className="w-1/2 flex flex-col justify-between bg-[#ECFDF5] p-6">
// //       <div className="font-semibold text-lg text-[#1E293B]">
// //         By Company Size
// //       </div>
// //       <div>
// //         <div className="text-4xl md:text-[48px] font-semibold text-[#047857]">
// //           34%
// //         </div>
// //         <div className="text-sm text-[#64748B]">Up to 1,000</div>
// //       </div>
// //     </div>

// //     <div className="w-1/2 flex flex-col">
// //       <div className="flex-1 bg-[#047857]/60 text-white p-6 text-right">
// //         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
// //         <div className="text-sm">1,000 – 10,000</div>
// //       </div>
// //       <div className="flex-1 bg-[#047857]/40 text-white p-6 text-right">
// //         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
// //         <div className="text-sm">10,000 & Over</div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // /* =========================
// //    SECTOR DATA
// // ========================= */
// // const sectors = [
// //   { label: "Academics", percent: 70 },
// //   { label: "Technology", percent: 15 },
// //   { label: "Startups", percent: 8 },
// //   { label: "Government & Public Sector", percent: 6 },
// //   { label: "Consulting & Advisory", percent: 5 },
// //   { label: "Enterprises / Corporates", percent: 4 },
// //   { label: "Others", percent: 2 },
// // ];

// // /* =========================
// //    SECTOR CHART (VERTICAL)
// // ========================= */
// // // const SectorChart = () => {
// // //   const maxValue = Math.max(...sectors.map(s => s.percent));

// // //   return (
// // //     <div className="w-full bg-white shadow rounded-lg p-6">
// // //       <div className="font-semibold text-lg text-[#1E293B] mb-10">
// // //         By Sector
// // //       </div>

// // //       <div className="flex items-end justify-between gap-6 h-[260px] px-2">
// // //         {sectors.map((item, idx) => {
// // //           const heightPercent = (item.percent / maxValue) * 100;

// // //           return (
// // //             <div key={idx} className="flex flex-col items-center flex-1">
// // //               <div className="mb-2 text-sm font-semibold text-[#047857]">
// // //                 {item.percent}%
// // //               </div>

// // //               <div className="w-full h-full bg-[#ECFDF5] rounded-md flex items-end">
// // //                 <div
// // //                   className="w-full rounded-md transition-all"
// // //                   style={{
// // //                     height: `${heightPercent}%`,
// // //                     minHeight: "8px",
// // //                     background:
// // //                       "linear-gradient(180deg, #047857 0%, #84CC16 100%)",
// // //                   }}
// // //                 />
// // //               </div>

// // //               <div className="mt-3 text-xs sm:text-sm text-center text-[#1E293B] leading-tight">
// // //                 {item.label}
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // const SectorChart = () => {
// //   const maxValue = Math.max(...sectors.map(s => s.percent));

// //   return (
// //     <div className="w-full bg-white shadow rounded-lg p-6">
// //       <div className="font-semibold text-lg text-[#1E293B] mb-10">
// //         By Sector
// //       </div>

// //       {/* Chart Area */}
// //       <div className="flex items-end justify-between gap-8 h-[260px] px-4">
// //         {sectors.map((item, idx) => {
// //           const heightPercent = (item.percent / maxValue) * 100;

// //           return (
// //             <div key={idx} className="flex flex-col items-center w-[80px]">
// //               {/* Percentage */}
// //               <span className="mb-2 text-sm font-semibold text-[#047857]">
// //                 {item.percent}%
// //               </span>

// //               {/* Bar Container */}
// //               <div className="relative w-full h-full bg-[#ECFDF5] rounded-md flex items-end">
// //                 <div
// //                   className="w-full rounded-md transition-all duration-300"
// //                   style={{
// //                     height: `${heightPercent}%`,
// //                     background:
// //                       "linear-gradient(180deg, #047857 0%, #84CC16 100%)",
// //                     minHeight: "6px",
// //                   }}
// //                 />
// //               </div>

// //               {/* Label */}
// //               <p className="mt-3 text-xs text-center text-[#1E293B] leading-tight">
// //                 {item.label}
// //               </p>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // /* =========================
// //    DASHBOARD LAYOUT
// // ========================= */
// // function Dashboard() {
// //   return (
// //     <section className="max-w-7xl mx-auto py-6 px-3 space-y-10">

// //       <h2 className="text-3xl font-bold text-[#047857] text-center">
// //         WHO’S PARTICIPATING IN ICBME 2026 CONFERENCE
// //       </h2>

// //       {/* Top Row */}
// //       <div className="flex flex-col md:flex-row gap-8">
// //         <div className="md:flex-[2]">
// //           <RegionChart />
// //         </div>
// //         <div className="md:flex-1">
// //           <JobLevelChart />
// //         </div>
// //       </div>

// //       {/* Bottom Row */}
// //       <div className="flex flex-col md:flex-row gap-8">
// //         <div className="md:flex-1">
// //           <CompanySizeChart />
// //         </div>
// //         <div className="md:flex-[2]">
// //           <SectorChart />
// //         </div>
// //       </div>

// //     </section>
// //   );
// // }

// // export default Dashboard;






// import React from "react";
// import { AgCharts } from "ag-charts-react";
// import {
//   AnimationModule,
//   ContextMenuModule,
//   LegendModule,
//   ModuleRegistry,
//   PyramidSeriesModule,
// } from "ag-charts-enterprise";
// import { FiArrowRight, FiMapPin } from "react-icons/fi"; // Assuming these are used elsewhere based on previous context, but not needed for charts

// /* =========================
//    AG CHARTS MODULE REGISTER
// ========================= */
// ModuleRegistry.registerModules([
//   AnimationModule,
//   LegendModule,
//   PyramidSeriesModule,
//   ContextMenuModule,
// ]);

// /* =========================
//    REGION CHART (PYRAMID) - FIXED COLORS
// ========================= */
// const RegionChart = () => {
//   // Define data with explicit colors to ensure mapping matches size/order
//   const chartData = [
//     { group: "Europe", value: 30, color: "#3B82F6" },
//     { group: "Asia", value: 28, color: "#FB923C" },
//     { group: "Middle East", value: 22, color: "#22C55E" },
//     { group: "USA", value: 17, color: "#38BDF8" },
//     { group: "Canada", value: 3, color: "#FACC15" },
//   ];

//   const options = {
//     autoSize: false,
//     height: 420,
//     data: chartData, // Use the updated data structure

//     title: {
//       text: "Participants by Region",
//       fontSize: 16,
//       spacing: 12,
//     },

//     padding: {
//       top: 20,
//       right: 120,
//       bottom: 20,
//       left: 120,
//     },

//     series: [
//       {
//         type: "pyramid",
//         stageKey: "group",
//         valueKey: "value",
//         fillKey: "color", // <-- Tells the chart to use the 'color' property from data
//         // fills: [...] // Removed fills array as we are using fillKey

//         strokes: ["#ffffff"],
//         strokeWidth: 1,

//         label: {
//           enabled: true,
//           color: "#ffffff",
//           fontSize: 13,
//           formatter: ({ datum }: any) => `${datum.value}%`,
//         },

//         stageLabel: {
//           enabled: true,
//           fontSize: 13,
//           color: "#1E293B",
//         },

//         spacing: 2,
//       },
//     ],

//     legend: {
//       position: "right",
//     },
//   };

//   return (
//     <div className="w-full bg-white shadow rounded-lg p-4">
//       <AgCharts options={options} />
//     </div>
//   );
// };

// /* =========================
//    JOB LEVEL CHART
// ========================= */
// const JobLevelChart = () => (
//   <div className="w-full overflow-hidden shadow bg-white rounded-lg">
//     <div className="bg-[#ECFDF5] px-6 pt-6 pb-4">
//       <div className="font-semibold text-lg text-[#1E293B] mb-2">
//         By Job Level
//       </div>
//       <div className="flex items-end gap-3">
//         <span className="text-4xl md:text-[56px] font-semibold text-[#047857]">
//           72%
//         </span>
//         <div className="text-sm md:text-base text-[#64748B] pb-2">
//           Professor / PhD / Doctor / Academic
//         </div>
//       </div>
//     </div>

//     {[
//       { label: "Heads / Manager", value: "10%" },
//       { label: "Senior Data Scientists & Engineers", value: "10%" },
//       { label: "C-Level / Director / VP / Founder", value: "4%" },
//       { label: "Developers", value: "4%" },
//     ].map((item, idx) => (
//       <div
//         key={idx}
//         className="px-6 py-4 border-t border-[#D1FAE5]"
//       >
//         <div className="font-semibold text-lg text-[#047857]">
//           {item.value}
//         </div>
//         <div className="text-sm text-[#1E293B]">{item.label}</div>
//       </div>
//     ))}
//   </div>
// );

// /* =========================
//    COMPANY SIZE CHART
// ========================= */
// const CompanySizeChart = () => (
//   <div className="w-full flex overflow-hidden bg-white shadow rounded-lg min-h-[260px]">
//     <div className="w-1/2 flex flex-col justify-between bg-[#ECFDF5] p-6">
//       <div className="font-semibold text-lg text-[#1E293B]">
//         By Company Size
//       </div>
//       <div>
//         <div className="text-4xl md:text-[48px] font-semibold text-[#047857]">
//           34%
//         </div>
//         <div className="text-sm text-[#64748B]">Up to 1,000</div>
//       </div>
//     </div>

//     <div className="w-1/2 flex flex-col">
//       <div className="flex-1 bg-[#047857]/60 text-white p-6 text-right">
//         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
//         <div className="text-sm">1,000 – 10,000</div>
//       </div>
//       <div className="flex-1 bg-[#047857]/40 text-white p-6 text-right">
//         <div className="text-2xl md:text-[32px] font-semibold">13%</div>
//         <div className="text-sm">10,000 & Over</div>
//       </div>
//     </div>
//   </div>
// );

// /* =========================
//    SECTOR DATA
// ========================= */
// const sectors = [
//   { label: "Academics", percent: 70 },
//   { label: "Technology", percent: 15 },
//   { label: "Startups", percent: 8 },
//   { label: "Government & Public Sector", percent: 6 },
//   { label: "Consulting & Advisory", percent: 5 },
//   { label: "Enterprises / Corporates", percent: 4 },
//   { label: "Others", percent: 2 },
// ];

// /* =========================
//    SECTOR CHART (VERTICAL)
// ========================= */
// const SectorChart = () => {
//   const maxValue = Math.max(...sectors.map(s => s.percent));

//   return (
//     <div className="w-full bg-white shadow rounded-lg p-6">
//       <div className="font-semibold text-lg text-[#1E293B] mb-10">
//         By Sector
//       </div>

//       {/* Chart Area */}
//       <div className="flex items-end justify-between gap-8 h-[260px] px-4 overflow-x-auto">
//         {sectors.map((item, idx) => {
//           const heightPercent = (item.percent / maxValue) * 100;

//           return (
//             <div key={idx} className="flex flex-col items-center w-[80px] flex-shrink-0">
//               {/* Percentage */}
//               <span className="mb-2 text-sm font-semibold text-[#047857]">
//                 {item.percent}%
//               </span>

//               {/* Bar Container */}
//               <div className="relative w-full h-full bg-[#ECFDF5] rounded-md flex items-end">
//                 <div
//                   className="w-full rounded-md transition-all duration-300"
//                   style={{
//                     height: `${heightPercent}%`,
//                     background:
//                       "linear-gradient(180deg, #047857 0%, #84CC16 100%)",
//                     minHeight: "6px",
//                   }}
//                 />
//               </div>

//               {/* Label */}
//               <p className="mt-3 text-xs text-center text-[#1E293B] leading-tight">
//                 {item.label}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// /* =========================
//    DASHBOARD LAYOUT
// ========================= */
// function Dashboard() {
//   return (
//     <section className="max-w-7xl mx-auto py-6 px-3 space-y-10 bg-slate-50">

//       <h2 className="text-3xl font-bold text-[#047857] text-center">
//         WHO’S PARTICIPATING IN ICBME 2026 CONFERENCE
//       </h2>

//       {/* Top Row */}
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="md:flex-[2]">
//           <RegionChart />
//         </div>
//         <div className="md:flex-1">
//           <JobLevelChart />
//         </div>
//       </div>

//       {/* Bottom Row */}
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="md:flex-1">
//           <CompanySizeChart />
//         </div>
//         <div className="md:flex-[2]">
//           <SectorChart />
//         </div>
//       </div>

//     </section>
//   );
// }

// export default Dashboard;





import React from "react";
import { AgCharts } from "ag-charts-react";
import {
  AnimationModule,
  ContextMenuModule,
  LegendModule,
  ModuleRegistry,
  PyramidSeriesModule,
} from "ag-charts-enterprise";

/* =========================
   AG CHARTS MODULE REGISTER
========================= */
ModuleRegistry.registerModules([
  AnimationModule,
  LegendModule,
  PyramidSeriesModule,
  ContextMenuModule,
]);

/* =========================
   REGION CHART
========================= */
const RegionChart = () => {
  const chartData = [
    { group: "Europe", value: 30, color: "#3B6F6A" },
    { group: "Asia", value: 28, color: "#5F6F6C" },
    { group: "Middle East", value: 22, color: "#6B7C78" },
    { group: "USA", value: 17, color: "#335F5B" },
    { group: "Canada", value: 3, color: "#DCE7E3" },
  ];

  const options = {
    autoSize: false,
    height: 420,
    data: chartData,

    title: {
      text: "Participants by Region",
      fontSize: 16,
      color: "#2F3E3B",
    },

    padding: {
      top: 20,
      right: 120,
      bottom: 20,
      left: 120,
    },

    series: [
      {
        type: "pyramid",
        stageKey: "group",
        valueKey: "value",
        fillKey: "color",
        strokes: ["#E6DED2"],
        strokeWidth: 1,

        label: {
          enabled: true,
          color: "#FFFFFF",
          fontSize: 13,
          formatter: ({ datum }: any) => `${datum.value}%`,
        },

        stageLabel: {
          enabled: true,
          fontSize: 13,
          color: "#2F3E3B",
        },

        spacing: 2,
      },
    ],

    legend: {
      position: "right",
      item: {
        label: { color: "#5F6F6C" },
      },
    },
  };

  return (
    <div className="w-full bg-[#FDFBF7] border border-[#E6DED2] shadow rounded-lg p-4">
      <AgCharts options={options} />
    </div>
  );
};

/* =========================
   JOB LEVEL CHART
========================= */
const JobLevelChart = () => (
  <div className="w-full overflow-hidden bg-[#FDFBF7] border border-[#E6DED2] shadow rounded-lg">
    <div className="bg-[#F6F1E9] px-6 pt-6 pb-4">
      <div className="font-semibold text-lg text-[#2F3E3B] mb-2">
        By Job Level
      </div>
      <div className="flex items-end gap-3">
        <span className="text-4xl md:text-[56px] font-semibold text-[#3B6F6A]">
          72%
        </span>
        <div className="text-sm md:text-base text-[#6B7C78] pb-2">
          Professor / PhD / Doctor / Academic
        </div>
      </div>
    </div>

    {[
      { label: "Heads / Manager", value: "10%" },
      { label: "Senior Researchers & Engineers", value: "10%" },
      { label: "C-Level / Director / VP", value: "4%" },
      { label: "Developers & Analysts", value: "4%" },
    ].map((item, idx) => (
      <div
        key={idx}
        className="px-6 py-4 border-t border-[#E8E1D6]"
      >
        <div className="font-semibold text-lg text-[#3B6F6A]">
          {item.value}
        </div>
        <div className="text-sm text-[#2F3E3B]">{item.label}</div>
      </div>
    ))}
  </div>
);

/* =========================
   COMPANY SIZE CHART
========================= */
const CompanySizeChart = () => (
  <div className="w-full flex overflow-hidden bg-[#FDFBF7] border border-[#E6DED2] shadow rounded-lg min-h-[260px]">
    <div className="w-1/2 flex flex-col justify-between bg-[#F6F1E9] p-6">
      <div className="font-semibold text-lg text-[#2F3E3B]">
        By Company Size
      </div>
      <div>
        <div className="text-4xl md:text-[48px] font-semibold text-[#3B6F6A]">
          34%
        </div>
        <div className="text-sm text-[#6B7C78]">Up to 1,000</div>
      </div>
    </div>

    <div className="w-1/2 flex flex-col">
      <div className="flex-1 bg-[#3B6F6A]/80 text-white p-6 text-right">
        <div className="text-2xl md:text-[32px] font-semibold">13%</div>
        <div className="text-sm">1,000 – 10,000</div>
      </div>
      <div className="flex-1 bg-[#3B6F6A]/60 text-white p-6 text-right">
        <div className="text-2xl md:text-[32px] font-semibold">13%</div>
        <div className="text-sm">10,000 & Over</div>
      </div>
    </div>
  </div>
);

/* =========================
   SECTOR DATA
========================= */
const sectors = [
  { label: "Academics", percent: 70 },
  { label: "Technology", percent: 15 },
  { label: "Startups", percent: 8 },
  { label: "Government & Public Sector", percent: 6 },
  { label: "Consulting & Advisory", percent: 5 },
  { label: "Enterprises / Corporates", percent: 4 },
  { label: "Others", percent: 2 },
];

/* =========================
   SECTOR CHART
========================= */
// const SectorChart = () => {
//   const maxValue = Math.max(...sectors.map(s => s.percent));

//   return (
//     <div className="w-full bg-[#FDFBF7] border border-[#E6DED2] shadow rounded-lg p-6">
//       <div className="font-semibold text-lg text-[#2F3E3B] mb-10">
//         By Sector
//       </div>

//       <div className="flex items-end justify-between gap-8 h-[260px] px-4 overflow-x-auto">
//         {sectors.map((item, idx) => {
//           const heightPercent = (item.percent / maxValue) * 100;

//           return (
//             <div key={idx} className="flex flex-col items-center w-[80px] flex-shrink-0">
//               <span className="mb-2 text-sm font-semibold text-[#3B6F6A]">
//                 {item.percent}%
//               </span>

//               <div className="relative w-full h-full bg-[#EEF4F2] rounded-md flex items-end">
//                 <div
//                   className="w-full rounded-md transition-all duration-300"
//                   style={{
//                     height: `${heightPercent}%`,
//                     background:
//                       "linear-gradient(180deg, #3B6F6A 0%, #DCE7E3 100%)",
//                     minHeight: "6px",
//                   }}
//                 />
//               </div>

//               <p className="mt-3 text-xs text-center text-[#2F3E3B] leading-tight">
//                 {item.label}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
const SectorChart = () => {
  const maxValue = Math.max(...sectors.map(s => s.percent));

  return (
    <div className="w-full bg-[#FDFBF7] border border-[#E6DED2] shadow rounded-lg p-6">
      <div className="font-semibold text-lg text-[#2F3E3B] mb-10">
        By Sector
      </div>

      {/* Chart Area */}
      <div className="flex items-end justify-between gap-8 px-4 overflow-x-auto">
        {sectors.map((item, idx) => {
          const heightPercent = (item.percent / maxValue) * 100;

          return (
            <div
              key={idx}
              className="flex flex-col items-center w-[80px] flex-shrink-0"
            >
              {/* Percentage */}
              <span className="mb-2 text-sm font-semibold text-[#3B6F6A]">
                {item.percent}%
              </span>

              {/* BAR CONTAINER — FIXED HEIGHT */}
              <div className="relative w-full h-[200px] bg-[#EEF4F2] rounded-md flex items-end">
                <div
                  className="w-full rounded-md transition-all duration-500 ease-out"
                  style={{
                    height: `${heightPercent}%`,
                    background:
                      "linear-gradient(180deg, #3B6F6A 0%, #DCE7E3 100%)",
                    minHeight: "6px",
                  }}
                />
              </div>

              {/* Label */}
              <p className="mt-3 text-xs text-center text-[#2F3E3B] leading-tight">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* =========================
   DASHBOARD
========================= */
function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto py-6 px-3 space-y-10 bg-[#FFFFFF]">

      <h2 className="text-3xl font-bold text-[#2F3E3B] text-center">
        WHO’S PARTICIPATING IN ICBME 2026 CONFERENCE
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:flex-[2]">
          <RegionChart />
        </div>
        <div className="md:flex-1">
          <JobLevelChart />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:flex-1">
          <CompanySizeChart />
        </div>
        <div className="md:flex-[2]">
          <SectorChart />
        </div>
      </div>

    </section>
  );
}

export default Dashboard;
