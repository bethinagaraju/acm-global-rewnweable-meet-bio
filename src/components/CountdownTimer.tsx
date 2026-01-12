// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Calendar } from 'lucide-react';

// // // // // const CountdownTimer: React.FC = () => {
// // // // //   const [daysLeft, setDaysLeft] = useState<number>(0);

// // // // //   useEffect(() => {
// // // // //     const calculateDaysLeft = () => {
// // // // //       const conferenceDate = new Date('2026-07-28'); // July 28, 2026
// // // // //       const today = new Date();
// // // // //       const timeDifference = conferenceDate.getTime() - today.getTime();
// // // // //       const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
// // // // //       setDaysLeft(daysDifference > 0 ? daysDifference : 0);
// // // // //     };

// // // // //     calculateDaysLeft();
// // // // //     // Update every day
// // // // //     const interval = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);
// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="py-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
// // // // //       <div className="container mx-auto px-6 text-center">
// // // // //         <div className="flex items-center justify-center gap-3 mb-2">
// // // // //           <Calendar className="w-6 h-6" />
// // // // //           <span className="text-lg font-semibold">Conference Begins In:</span>
// // // // //         </div>
// // // // //         <div className="text-4xl md:text-5xl font-bold">
// // // // //           {daysLeft} Days
// // // // //         </div>
// // // // //         <p className="text-blue-100 mt-2 text-sm">
// // // // //           July 28–30, 2026 • Crowne Plaza – St. Peter’s Rome, Italy
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CountdownTimer;


// // // // import React, { useState, useEffect } from 'react';
// // // // import { Timer } from 'lucide-react';

// // // // interface TimeLeft {
// // // //   days: number;
// // // //   hours: number;
// // // //   minutes: number;
// // // //   seconds: number;
// // // // }

// // // // const CountdownTimer: React.FC = () => {
// // // //   const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

// // // //   useEffect(() => {
// // // //     const calculateTimeLeft = () => {
// // // //       const conferenceDate = new Date('2026-07-28T00:00:00'); // Set specific time if needed
// // // //       const now = new Date();
// // // //       const difference = conferenceDate.getTime() - now.getTime();

// // // //       if (difference > 0) {
// // // //         setTimeLeft({
// // // //           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// // // //           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
// // // //           minutes: Math.floor((difference / 1000 / 60) % 60),
// // // //           seconds: Math.floor((difference / 1000) % 60),
// // // //         });
// // // //       } else {
// // // //         // Stop timer if date passed
// // // //         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
// // // //       }
// // // //     };

// // // //     // Initial call
// // // //     calculateTimeLeft();

// // // //     // Update every second
// // // //     const timer = setInterval(calculateTimeLeft, 1000);

// // // //     return () => clearInterval(timer);
// // // //   }, []);

// // // //   // Helper to add leading zero (e.g., 5 -> 05)
// // // //   const formatNumber = (num: number) => num.toString().padStart(2, '0');

// // // //   return (
// // // //     <div className="w-full py-8">
// // // //       <div className="container mx-auto px-6">
// // // //         <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-slate-800">
          
// // // //           {/* Header Section */}
// // // //           <div className="text-center md:text-left">
// // // //             <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-indigo-600 font-semibold uppercase tracking-wider text-sm">
// // // //               <Timer className="w-5 h-5" />
// // // //               <span>Event Countdown</span>
// // // //             </div>
// // // //             <h2 className="text-2xl font-bold leading-tight">
// // // //               Crowne Plaza, Rome<br />
// // // //               <span className="text-slate-500 font-normal">July 28–30, 2026</span>
// // // //             </h2>
// // // //           </div>

// // // //           {/* Timer Grid */}
// // // //           <div className="flex items-start gap-4 md:gap-6">
// // // //             <TimeUnit value={timeLeft.days} label="Days" />
// // // //             <div className="text-3xl font-light text-slate-300 mt-2">:</div>
// // // //             <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
// // // //             <div className="text-3xl font-light text-slate-300 mt-2">:</div>
// // // //             <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
// // // //             <div className="text-3xl font-light text-slate-300 mt-2">:</div>
// // // //             <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" isActive={true} />
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Sub-component for individual time blocks
// // // // const TimeUnit = ({ value, label, isActive = false }: { value: string | number, label: string, isActive?: boolean }) => (
// // // //   <div className="flex flex-col items-center">
// // // //     <div className={`text-4xl md:text-5xl font-extrabold tabular-nums ${isActive ? 'text-indigo-600' : 'text-slate-900'}`}>
// // // //       {value}
// // // //     </div>
// // // //     <span className="text-xs uppercase tracking-widest text-slate-500 mt-1 font-medium">
// // // //       {label}
// // // //     </span>
// // // //   </div>
// // // // );

// // // // export default CountdownTimer;


// // // import React, { useState, useEffect } from 'react';
// // // import { Timer } from 'lucide-react';

// // // interface TimeLeft {
// // //   days: number;
// // //   hours: number;
// // //   minutes: number;
// // //   seconds: number;
// // // }

// // // const CountdownTimer: React.FC = () => {
// // //   const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

// // //   useEffect(() => {
// // //     const calculateTimeLeft = () => {
// // //       const conferenceDate = new Date('2026-05-28T00:00:00'); 
// // //       const now = new Date();
// // //       const difference = conferenceDate.getTime() - now.getTime();

// // //       if (difference > 0) {
// // //         setTimeLeft({
// // //           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// // //           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
// // //           minutes: Math.floor((difference / 1000 / 60) % 60),
// // //           seconds: Math.floor((difference / 1000) % 60),
// // //         });
// // //       } else {
// // //         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
// // //       }
// // //     };

// // //     calculateTimeLeft();
// // //     const timer = setInterval(calculateTimeLeft, 1000);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   const formatNumber = (num: number) => num.toString().padStart(2, '0');

// // //   return (
// // //     <div className="w-full py-12">
// // //       <div className="container mx-auto px-6">
// // //         <div className="flex flex-col items-center justify-center text-slate-800">
          
// // //           {/* Single Heading */}
// // //           <div className="flex items-center justify-center gap-2 mb-8">
// // //             <Timer className="w-10 h-10 text-red-600" />
// // //             <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
// // //               Time Remaining Until Conference Begins
// // //             </h2>
// // //           </div>

// // //           {/* Timer Grid */}
// // //           <div className="flex items-start gap-4 md:gap-8">
// // //             <TimeUnit value={timeLeft.days} label="Days" />
// // //             <div className="text-3xl md:text-5xl font-light text-slate-300 mt-1">:</div>
// // //             <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
// // //             <div className="text-3xl md:text-5xl font-light text-slate-300 mt-1">:</div>
// // //             <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
// // //             <div className="text-3xl md:text-5xl font-light text-slate-300 mt-1">:</div>
// // //             <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" isActive={true} />
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Sub-component for individual time blocks
// // // const TimeUnit = ({ value, label, isActive = false }: { value: string | number, label: string, isActive?: boolean }) => (
// // //   <div className="flex flex-col items-center">
// // //     <div className={`text-4xl md:text-6xl font-extrabold tabular-nums ${isActive ? 'text-indigo-600' : 'text-slate-900'}`}>
// // //       {value}
// // //     </div>
// // //     <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 mt-2 font-medium">
// // //       {label}
// // //     </span>
// // //   </div>
// // // );

// // // export default CountdownTimer;




// // import React, { useState, useEffect } from "react";
// // import { Timer } from "lucide-react";

// // interface TimeLeft {
// //   days: number;
// //   hours: number;
// //   minutes: number;
// //   seconds: number;
// // }

// // const CountdownTimer: React.FC = () => {
// //   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
// //     days: 0,
// //     hours: 0,
// //     minutes: 0,
// //     seconds: 0,
// //   });

// //   useEffect(() => {
// //     const calculateTimeLeft = () => {
// //       const conferenceDate = new Date("2026-05-28T00:00:00");
// //       const now = new Date();
// //       const difference = conferenceDate.getTime() - now.getTime();

// //       if (difference > 0) {
// //         setTimeLeft({
// //           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// //           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
// //           minutes: Math.floor((difference / 1000 / 60) % 60),
// //           seconds: Math.floor((difference / 1000) % 60),
// //         });
// //       } else {
// //         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
// //       }
// //     };

// //     calculateTimeLeft();
// //     const timer = setInterval(calculateTimeLeft, 1000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const formatNumber = (num: number) => num.toString().padStart(2, "0");

// //   return (
// //     <section className="w-full py-16 bg-gradient-to-b from-[#ECFDF5] to-white">
// //       <div className="max-w-6xl mx-auto px-6">
// //         <div className="flex flex-col items-center justify-center">

// //           {/* Heading */}
// //           <div className="flex items-center gap-3 mb-10">
// //             <div className="w-12 h-12 rounded-full bg-[#D1FAE5] flex items-center justify-center text-[#047857]">
// //               <Timer className="w-6 h-6" />
// //             </div>
// //             <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1E293B]">
// //               Time Remaining Until Conference Begins
// //             </h2>
// //           </div>

// //           {/* Timer */}
// //           <div className="flex items-start gap-4 md:gap-8">
// //             <TimeUnit value={timeLeft.days} label="Days" />
// //             <Separator />
// //             <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
// //             <Separator />
// //             <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
// //             <Separator />
// //             <TimeUnit
// //               value={formatNumber(timeLeft.seconds)}
// //               label="Seconds"
// //               isActive
// //             />
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // /* ------------------ Sub Components ------------------ */

// // const Separator = () => (
// //   <div className="text-3xl md:text-5xl font-light text-[#A7F3D0] mt-1">
// //     :
// //   </div>
// // );

// // const TimeUnit = ({
// //   value,
// //   label,
// //   isActive = false,
// // }: {
// //   value: string | number;
// //   label: string;
// //   isActive?: boolean;
// // }) => (
// //   <div className="flex flex-col items-center min-w-[70px]">
// //     <div
// //       className={`text-4xl md:text-6xl font-extrabold tabular-nums
// //         ${isActive ? "text-[#84CC16]" : "text-[#047857]"}`}
// //     >
// //       {value}
// //     </div>
// //     <span className="text-xs md:text-sm uppercase tracking-widest text-[#64748B] mt-2 font-medium">
// //       {label}
// //     </span>
// //   </div>
// // );

// // export default CountdownTimer;






// import React, { useEffect, useState } from "react";
// import { Timer } from "lucide-react";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const CountdownTimer: React.FC = () => {
//   const [time, setTime] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const target = new Date("2026-05-28T00:00:00").getTime();

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const diff = target - now;

//       if (diff <= 0) {
//         setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }

//       setTime({
//         days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((diff / (1000 * 60)) % 60),
//         seconds: Math.floor((diff / 1000) % 60),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-24 bg-[#FAF7F2] border-t border-[#E6DED2]">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         {/* Header */}
//         <div className="flex items-center justify-center gap-4 mb-12">
//           <div className="w-14 h-14 rounded-full bg-[#EEF4F2] flex items-center justify-center text-[#3B6F6A]">
//             <Timer size={26} />
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E3B] tracking-tight">
//             Conference Countdown
//           </h2>
//         </div>

//         {/* Countdown Cards */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
//           <TimeCard value={time.days} label="Days" />
//           <TimeCard value={time.hours} label="Hours" />
//           <TimeCard value={time.minutes} label="Minutes" />
//           <TimeCard value={time.seconds} label="Seconds" highlight />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CountdownTimer;

// /* ------------------ Card Component ------------------ */

// const TimeCard = ({
//   value,
//   label,
//   highlight = false,
// }: {
//   value: number;
//   label: string;
//   highlight?: boolean;
// }) => (
//   <div
//     className={`rounded-2xl border p-6 md:p-8 bg-[#FDFBF7] transition-all
//       ${highlight ? "border-[#3B6F6A] shadow-md" : "border-[#E6DED2]"}`}
//   >
//     <div
//       className={`text-4xl md:text-6xl font-extrabold tabular-nums mb-2
//         ${highlight ? "text-[#3B6F6A]" : "text-[#2F3E3B]"}`}
//     >
//       {value.toString().padStart(2, "0")}
//     </div>
//     <div className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#6B7C78]">
//       {label}
//     </div>
//   </div>
// );



import React, { useEffect, useState } from "react";
import { Timer } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-05-28T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 ">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#F1F3F5] flex items-center justify-center text-[#334155]">
            <Timer size={18} />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#1F2933] tracking-tight">
            Conference Countdown
          </h2>
        </div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <TimeCard value={time.days} label="Days" />
          <TimeCard value={time.hours} label="Hours" />
          <TimeCard value={time.minutes} label="Minutes" />
          <TimeCard value={time.seconds} label="Seconds" highlight />
        </div>

      </div>
    </section>
  );
};

export default CountdownTimer;

/* ------------------ Compact Card ------------------ */

const TimeCard = ({
  value,
  label,
  highlight = false,
}: {
  value: number;
  label: string;
  highlight?: boolean;
}) => (
  <div
    className={`rounded-xl border bg-[#eef4f2] px-4 py-3 transition-all
      ${highlight ? "border-[#334155] shadow-sm" : "border-[#E6DED2]"}`}
  >
    <div
      className={`text-2xl md:text-3xl font-bold tabular-nums mb-1
        ${highlight ? "text-[#111827]" : "text-[#1F2933]"}`}
    >
      {value.toString().padStart(2, "0")}
    </div>
    <div className="text-[10px] uppercase tracking-wider font-medium text-[#6B7280]">
      {label}
    </div>

  </div>
);
