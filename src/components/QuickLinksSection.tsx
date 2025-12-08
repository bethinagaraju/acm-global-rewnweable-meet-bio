import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

export default function QuickLinksSection() {
  return (
    <div className="w-full max-w-sm p-6 bg-[#063858] text-white rounded-lg">

      {/* Top Info Items */}
      <div className="space-y-6">
        {/* Item 1 */}
        <div className="flex items-start gap-3">
          <div className="text-2xl mt-1">
            <FiArrowUpRight />
          </div>
          <p className="text-lg leading-snug">
            <span className="font-semibold">Abstracts Open –</span><br />
            Your Work Deserves the Spotlight!
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-3">
          <div className="text-2xl mt-1">
            <FiArrowUpRight />
          </div>
          <p className="text-lg leading-snug">
            <span className="font-semibold">Early Bird Registration is Live –</span><br />
            Don’t Miss Out!
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-xl font-semibold mt-10 mb-4 tracking-wide">
        - QUICK LINKS -
      </h2>

      {/* Quick Link Buttons */}
      <div className="space-y-4">
        <button className="w-full bg-white text-black flex justify-between items-center px-6 py-4 rounded-md shadow-[0_4px_0_0_#b9c3cc] hover:bg-gray-100">
          <span className="text-lg">Venue Details</span>
          <FiArrowRight size={22} />
        </button>

        <button className="w-full bg-white text-black flex justify-between items-center px-6 py-4 rounded-md shadow-[0_4px_0_0_#b9c3cc] hover:bg-gray-100">
          <span className="text-lg">Register Now</span>
          <FiArrowRight size={22} />
        </button>

        <button className="w-full bg-white text-black flex justify-between items-center px-6 py-4 rounded-md shadow-[0_4px_0_0_#b9c3cc] hover:bg-gray-100">
          <span className="text-lg">Our Speakers</span>
          <FiArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
