// import React from 'react';
// import { CheckCircle } from 'lucide-react';

// const ComplianceBadges: React.FC = () => {
//   const badges = [
//     'Double-Blind Peer Review',
//     'Global Academic Committee',
//     'Ethical Review Standards',
//     'Professional Plagiarism Screening',
//     'International Participation'
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Compliance & Quality Assurance
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
//           {badges.map((badge, index) => (
//             <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
//               <span className="text-gray-700 font-medium">{badge}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComplianceBadges;


import React from 'react';
import { 
  Globe, 
  Scale, 
  ScanSearch, 
  Users, 
  FileCheck, 
  CheckCircle2 
} from 'lucide-react';

const ComplianceBadges: React.FC = () => {
  const badges = [
    { 
      label: 'Double-Blind Peer Review', 
      icon: FileCheck, 
      description: 'Unbiased evaluation process'
    },
    { 
      label: 'Global Academic Committee', 
      icon: Globe, 
      description: 'Expert oversight from 30+ countries'
    },
    { 
      label: 'Ethical Review Standards', 
      icon: Scale, 
      description: 'Strict adherence to COPE guidelines'
    },
    { 
      label: 'Prof. Plagiarism Screening', 
      icon: ScanSearch, 
      description: 'Zero-tolerance verification'
    },
    { 
      label: 'International Participation', 
      icon: Users, 
      description: 'Diverse global contributors'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Verified Standards
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Compliance & Quality Assurance
          </h2>
          <p className="text-slate-600">
            We adhere to rigorous scientific standards to ensure the integrity and impact of every published work.
          </p>
        </div>

        {/* Badges Grid - Using Flex for better centering of odd numbers */}
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)] min-w-[200px]"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <badge.icon size={24} />
              </div>
              
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                {badge.label}
              </h3>
              
              <p className="text-xs text-slate-500 font-medium">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComplianceBadges;