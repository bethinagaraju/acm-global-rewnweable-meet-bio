
import React from "react";
import { Link } from "react-router-dom";

const ContentSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="py-8 px-4 sm:px-8 lg:px-28 scroll-mt-36 bg-white pt-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* --- VIDEO CONTAINER (Floated Right) --- */}
        <div className="w-full md:w-1/2 lg:w-[45%] mb-6 md:mb-4 md:ml-10 md:float-right mt-2">
          <div className="overflow-hidden bg-black relative">
            <video
              className="w-full h-full object-cover"
              src="/aimlr-2026-video.mp4"
              controls
              autoPlay
              muted
              loop
            />
          </div>
        </div>

        {/* --- TEXT CONTENT --- */}
        <div
          className="
            text-gray-700
            leading-relaxed
            text-[16px]
            text-left
            whitespace-normal
          "
        >
          <h2 className="text-3xl font-bold text-[#00488B] mb-6">
            ABOUT AIMLR 2026  HYBRID EVENT
          </h2>

          <p className="mb-3">
            The International Conference on Artificial Intelligence, Machine
            Learning & Robotics (AIMLR 2026) is a global academic forum bringing
            together researchers, faculty members, students, and industry
            professionals to exchange knowledge and present recent advances in
            intelligent systems.
          </p>

          <p className="mb-3">
            Scheduled for July 28–30, 2026, in Rome, Italy, AIMLR 2026 will be
            conducted in a hybrid format, enabling participation through both
            in-person and virtual presentations.
          </p>

          <p className="mb-3">
            The conference focuses on fostering academic discussion,
            interdisciplinary collaboration, and responsible innovation across
            AI, machine learning, and robotics. Participants are invited to
            share original research, case studies, and emerging ideas through
            oral and poster sessions.
          </p>

          <p className="mb-3">
            AIMLR 2026 aims to support meaningful knowledge exchange,
            professional networking, and collaboration within the global
            research community.<Link to="/about" className="text-[#0091b5] hover:text-[#00488B] hover:underline ml-1" title="About AIMLR 2026 Conference" aria-label="About AIMLR 2026 Conference">Know more</Link>
          </p>
        </div>

        {/* --- BUTTON GROUP --- */}
        <div className="clear-both pt-8 mt-4 border-t border-gray-100">
          <div className="flex gap-4">
            <Link to="/register" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference">
              <button className="bg-[#00488B] hover:bg-[#0E64C4] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference">
                REGISTER NOW
              </button>
            </Link>

            <Link to="/AbstractSubmission" title="Submit Abstract for AIMLR 2026 Conference" aria-label="Submit Abstract for AIMLR 2026 Conference">
              <button className="bg-[#232357] hover:bg-[#36368C] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5" title="Submit Abstract for AIMLR 2026 Conference" aria-label="Submit Abstract for AIMLR 2026 Conference">
                SUBMIT ABSTRACT
              </button>
            </Link>
          </div>
        </div>

        {/* --- QUICK LINKS STRIP --- */}
        <div className="mt-8 pt-4 pb-2 text-[15px] leading-7 border-t border-dashed border-gray-300">
          <span className="text-black font-semibold mr-1">Quick Links:</span>

          <Link to="/AbstractSubmission" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Abstract Submission for AIMLR 2026 Conference" aria-label="Abstract Submission for AIMLR 2026 Conference">
            Abstract Submission
          </Link>
          <span className="mx-2 text-gray-400">|</span>

          <Link to="/register" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Registration for AIMLR 2026 Conference" aria-label="Registration for AIMLR 2026 Conference">
            Registration
          </Link>
          <span className="mx-2 text-gray-400">|</span>

          <Link to="/speakers" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Speaker Registration for AIMLR 2026 Conference" aria-label="Speaker Registration for AIMLR 2026 Conference">
            Speaker Registration
          </Link>

          <span className="mx-2 text-gray-400">|</span>

          <Link to="/schedule" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Program Schedule for AIMLR 2026 Conference" aria-label="Program Schedule for AIMLR 2026 Conference">
            Program Schedule
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ContentSection;
