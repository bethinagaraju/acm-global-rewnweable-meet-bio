
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSection: React.FC = () => {
  return (
    <section id='about-section' className="py-12 px-4 sm:px-6 lg:px-32 scroll-mt-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 md:gap-12 items-center">
          <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <p style={{ fontFamily: "'Manrope', sans-serif" }} className="text-base text-gray-700 mb-4 sm:mb-6">
              AIMLR 2026 is a premier international gathering bringing together researchers, scientists, technologists, and industry leaders to explore innovations in artificial intelligence, machine learning, and robotics. Held in the historic city of Rome from July 28–30, 2026, this conference offers unparalleled opportunities for knowledge exchange and collaboration.
            </p>

            <p style={{ fontFamily: "'Manrope', sans-serif" }} className="text-base text-gray-700 mb-4 sm:mb-6">
              The conference provides a global platform for technical presentations, workshops, keynote sessions, and academic networking. Attendees will engage with cutting-edge research, participate in interactive sessions, and build lasting professional relationships in the vibrant atmosphere of one of the world's most iconic cities. <a href="/about" className="text-indigo-600 hover:text-indigo-800 font-semibold">Know more</a>
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-4">
              
              <Link to="/register">
                <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)" }} className="text-white px-6 py-2 font-semibold text-sm transition-colors">
                  REGISTER
                </button>
              </Link>
              <a href="/#contact-form">
                <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,47,48,1) 0%, rgba(0,0,48,1) 100%)" }} className="text-white px-6 py-2 font-semibold text-sm transition-colors">
                  SPONSORSHIP ENQUIRY
                </button>
              </a>

              <Link to="/AbstractSubmission">
                <button style={{ backgroundImage: "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)" }} className="text-white px-6 py-2 font-semibold text-sm transition-colors">
                  ABSTRACT SUBMISSION
                </button>
              </Link>
              
            </div>

          </div>

          <div className="w-full">


              <div className="relative pb-[52.5%] h-90 overflow-hidden shadow-lg">
  <video
    // className="absolute top-0 left-0 w-full h-full object-cover bg-white border-4 border-green-600"
    className="absolute top-0 left-0 w-full h-full object-cover"
    // src="/94be53a887684f6ead6a2a2fe9323a3f.mp4"
    src="/video-output-final.mp4"
    controls
    autoPlay={true}
    muted={true}
    loop={true}
  >
    Your browser does not support the video.
  </video>

</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
