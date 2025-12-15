// import React from "react";

// const PricingCompont = () => {
//   const pricingData = [
//     {
//       type: "Speaker",
//       prices: ["€649.00", "€824.00", "€999.00", "€1174.00", "€1349.00"],
//     },
//     {
//       type: "Poster",
//       prices: ["€499.00", "€674.00", "€849.00", "€1024.00", "€1199.00"],
//     },
//     {
//       type: "Delegate",
//       prices: ["€749.00", "€924.00", "€1099.00", "€1274.00", "€1449.00"],
//     },
//     {
//       type: "Listener",
//       prices: ["€749.00", "€924.00", "€1099.00", "€1274.00", "€1449.00"],
//     },
//     {
//       type: "Student",
//       prices: ["€349.00", "€524.00", "€699.00", "€874.00", "€1049.00"],
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12">
//       {/* Title */}
//       <h2 className="text-3xl font-bold text-[#2e2b7a] mb-6">
//         Registration & Accommodation Pricing
//       </h2>

//       {/* Table Wrapper */}
//       <div className="overflow-x-auto rounded-xl shadow-lg">
//         <table className="w-full border-collapse">
//           {/* Table Header */}
//           <thead>
//             <tr className="bg-[#2e2b7a] text-white text-left">
//               <th className="p-4">Presentation Type</th>
//               <th className="p-4">Early Bird Registration</th>
//               <th className="p-4">Registration + 1 Night Accommodation</th>
//               <th className="p-4">Registration + 2 Nights Accommodation</th>
//               <th className="p-4">Registration + 3 Nights Accommodation</th>
//               <th className="p-4">Registration + 4 Nights Accommodation</th>
//             </tr>
//           </thead>

//           {/* Table Body */}
//           <tbody>
//             {pricingData.map((row, index) => (
//               <tr
//                 key={index}
//                 className={`border-b ${
//                   index % 2 === 0 ? "bg-white" : "bg-gray-50"
//                 }`}
//               >
//                 <td className="p-4 font-semibold text-gray-800">
//                   {row.type}
//                 </td>
//                 {row.prices.map((price, i) => (
//                   <td
//                     key={i}
//                     className="p-4 font-semibold text-[#2e2b7a]"
//                   >
//                     {price}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Note */}
//       <p className="text-sm text-gray-600 mt-4">
//         <span className="font-semibold">Note:</span> All prices are in Euros (€)
//         and exclude applicable taxes. Accommodation prices are per person and may
//         vary based on room availability.
//       </p>
//     </section>
//   );
// };

// export default PricingCompont;






import React from "react";

const PricingCompont = () => {
  const pricingData = [
    {
      type: "Speaker",
      prices: ["€649.00", "€824.00", "€999.00", "€1174.00", "€1349.00"],
    },
    {
      type: "Poster",
      prices: ["€499.00", "€674.00", "€849.00", "€1024.00", "€1199.00"],
    },
    {
      type: "Delegate",
      prices: ["€749.00", "€924.00", "€1099.00", "€1274.00", "€1449.00"],
    },
    {
      type: "Listener",
      prices: ["€749.00", "€924.00", "€1099.00", "€1274.00", "€1449.00"],
    },
    {
      type: "Student",
      prices: ["€349.00", "€524.00", "€699.00", "€874.00", "€1049.00"],
    },
  ];

  const virtualPricing = [
    { type: "Speaker", price: "€349.00" },
    { type: "Poster", price: "€199.00" },
    { type: "Delegate", price: "€449.00" },
    { type: "Listener", price: "€449.00" },
    { type: "Student", price: "€49.00" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#2e2b7a] mb-6">
        Registration & Accommodation Pricing
      </h2>

      {/* Physical Registration Table */}
      <div className="overflow-x-auto shadow-lg mb-12">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#2e2b7a] text-white text-left">
              <th className="p-4">Presentation Type</th>
              <th className="p-4">Early Bird Registration</th>
              <th className="p-4">+ 1 Night</th>
              <th className="p-4">+ 2 Nights</th>
              <th className="p-4">+ 3 Nights</th>
              <th className="p-4">+ 4 Nights</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-4 font-semibold text-gray-800">
                  {row.type}
                </td>
                {row.prices.map((price, i) => (
                  <td
                    key={i}
                    className="p-4 font-semibold text-[#2e2b7a]"
                  >
                    {price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Virtual Registration Section */}
      <h3 className="text-2xl font-bold text-[#2e2b7a] mb-4">
        Virtual Registration Pricing
      </h3>

      <div className="overflow-x-auto shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#2e2b7a] text-white text-left">
              <th className="p-4">Presentation Type</th>
              <th className="p-4">Virtual Registration Fee</th>
            </tr>
          </thead>
          <tbody>
            {virtualPricing.map((item, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-4 font-semibold text-gray-800">
                  {item.type}
                </td>
                <td className="p-4 font-semibold text-[#2e2b7a]">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note */}
      <p className="text-sm text-gray-600 mt-6">
        <span className="font-semibold">Note:</span> All prices are in Euros (€)
        and exclude applicable taxes. Accommodation prices are per person and may
        vary based on availability.
      </p>
    </section>
  );
};

export default PricingCompont;
