// import React from 'react';
// import Header from '../components/Header';

// function CommitteePage() {
//   return (
//     <div>
//       <Header />
//       <div className="text-white py-16" style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-dot.png")' }}>
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl font-bold mb-4">Organizing Committee</h1>
//           <p className="text-xl">Meet the dedicated team behind the conference</p>
//         </div>
//       </div>
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold text-center mb-8">Conference Chairs</h2>
//             <div className="grid md:grid-cols-2 gap-8 mb-12">
//               <div className="text-center">
//                 <img src="https://via.placeholder.com/150" alt="Chair 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold">Dr. John Smith</h3>
//                 <p className="text-gray-600">Professor, MIT</p>
//               </div>
//               <div className="text-center">
//                 <img src="https://via.placeholder.com/150" alt="Chair 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold">Dr. Jane Doe</h3>
//                 <p className="text-gray-600">Director, Stanford University</p>
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold text-center mb-8">Program Committee</h2>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <h4 className="font-semibold">Dr. Alan Turing</h4>
//                 <p className="text-sm text-gray-600">Oxford University</p>
//               </div>
//               <div className="text-center">
//                 <h4 className="font-semibold">Dr. Ada Lovelace</h4>
//                 <p className="text-sm text-gray-600">Cambridge University</p>
//               </div>
//               <div className="text-center">
//                 <h4 className="font-semibold">Dr. Grace Hopper</h4>
//                 <p className="text-sm text-gray-600">Harvard University</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CommitteePage;




import React from 'react';
import Header from '../components/Header';
import { 
  Award, 
  Building2, 
  Mail, 
  Linkedin, 
  Users, 
  Globe, 
  CheckCircle2 
} from 'lucide-react';
import EndFooter from '../components/EndFooter';

// Data for Chairs (Leaders)
const chairs = [
  {
    name: "Dr. John Smith",
    role: "General Chair",
    affiliation: "Professor, MIT CSAIL",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Leading researcher in autonomous robotics with over 20 years of experience in AI ethics."
  },
  {
    name: "Dr. Jane Doe",
    role: "Program Chair",
    affiliation: "Director, Stanford HAI",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Pioneer in computer vision and deep learning applications for healthcare diagnostics."
  }
];

// Data for Committee Members
const programCommittee = [
  { name: "Dr. Alan Turing", affiliation: "Oxford University, UK" },
  { name: "Dr. Ada Lovelace", affiliation: "Cambridge University, UK" },
  { name: "Dr. Grace Hopper", affiliation: "Yale University, USA" },
  { name: "Dr. Claude Shannon", affiliation: "MIT, USA" },
  { name: "Dr. Geoffrey Hinton", affiliation: "University of Toronto, Canada" },
  { name: "Dr. Fei-Fei Li", affiliation: "Stanford University, USA" },
];

function CommitteePage() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Header />
      
      {/* --- HERO SECTION --- */}
      <div className="relative text-white py-12 overflow-hidden" style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-dot.png")' }}>
        {/* Background Pattern */}
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-700/50 rounded-full px-4 py-1 mb-6 border border-blue-400/30 backdrop-blur-md">
            <Users className="w-4 h-4 text-blue-200" />
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-100">Leadership Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Organizing Committee</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Meet the distinguished scientists and researchers dedicated to curating a world-class technical program.
          </p>
        </div>
      </div>

      {/* --- CHAIRS SECTION (Featured) --- */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              Conference Chairs
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {chairs.map((chair, index) => (
              <ChairCard key={index} data={chair} />
            ))}
          </div>
        </div>
      </div>

      {/* --- PROGRAM COMMITTEE SECTION (Grid) --- */}
      <div className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Program Committee</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse committee ensures the highest standards of peer review and content selection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programCommittee.map((member, index) => (
              <CommitteeMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA / JOIN US --- */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-indigo-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Interested in Joining the Committee?</h3>
              <p className="text-indigo-200">We are always looking for reviewers and session chairs.</p>
            </div>
            <button className="bg-white text-indigo-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Secretariat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: Featured Chair Card ---
function ChairCard({ data }) {
  return (
    <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="md:w-2/5 h-64 md:h-auto relative">
        <img 
          src={data.image} 
          alt={data.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent md:hidden"></div>
      </div>
      <div className="p-6 md:w-3/5 flex flex-col justify-center">
        <span className="text-blue-600 font-bold text-sm tracking-wide uppercase mb-1">{data.role}</span>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.name}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-4 font-medium">
          <Building2 className="w-4 h-4" />
          {data.affiliation}
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {data.bio}
        </p>
        <div className="flex gap-3 mt-auto">
           <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
           <SocialIcon icon={<Globe className="w-4 h-4" />} />
        </div>
      </div>
      <EndFooter />
    </div>
  );
}

// --- SUB-COMPONENT: Simple Member Card ---
function CommitteeMemberCard({ member }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-start gap-4">
        <div className="bg-blue-50 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{member.name}</h4>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
            <Building2 className="w-3 h-3" />
            {member.affiliation}
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper for social icons
function SocialIcon({ icon }) {
  return (
    <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
      {icon}
    </button>
  );
}

export default CommitteePage;
