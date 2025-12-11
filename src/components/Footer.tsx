


import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <section
    id='contact-form'
      className="relative bg-cover bg-center text-white scroll-mt-48"
      style={{
        backgroundImage: "url('Gemini_Generated_Image_szvxggszvxggszvx(1).png')",
        backdropFilter: "blur(80px)",
      }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
      <div className="bg-black bg-opacity-70 py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 border-2 border-white p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12H8m8 4H8m-4 4h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Let's keep in touch</h2>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed">
              For inquiries related to participation, sponsorship, speaking opportunities, or general information, please visit our contact page. Our team will respond as soon as possible.
            </p>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center">
            <Link to="/contact">
              <button className="bg-[#344278] hover:bg-[#46629a] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Footer;
