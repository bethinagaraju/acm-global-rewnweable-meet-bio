

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  HelpCircle,
  CreditCard,
  FileText,
  Users,
  Percent,
  ShieldX,
  Ticket,
  Calendar,
  AlertCircle,
  Check
} from "lucide-react";
import EndFooter from "./EndFooter";
import PricingCompont from "./PricingCompont";
import NEWRegister from "./NEWRegister";
import { Helmet } from "react-helmet-async";




function RegisterPasses() {
  const navigate = useNavigate();

  const handleBookNow = (pass) =>
    navigate("/checkout", { state: { registrationData: { planid: pass.planid } } });

  return (
    <>
    <Helmet>
        <meta name="robots" content="noindex, follow" />
    </Helmet>
    
      <Header />
      {/* <PricingCompont /> */}
      <NEWRegister />





      <EndFooter />
    </>
  );
}

// Updated Reusable Section Component
function Section({ title, icon, children }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800">
        {icon} {title}
      </h2>
      <div className="text-slate-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// Simple helper for FAQ items
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
                <h5 className="font-bold text-[#2b3267]">{question}</h5>
                <ArrowRight className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            {isOpen && (
                <div className="px-4 py-3 bg-white">
                    <p className="text-sm text-slate-600">{answer}</p>
                </div>
            )}
        </div>
    )
}

export default RegisterPasses;