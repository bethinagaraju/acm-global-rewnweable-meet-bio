import React from 'react';
import Header from '../components/Header';
import Agenda from '../components/Agenda';
import { Calendar, Clock, MapPin } from 'lucide-react';
import EndFooter from '../components/EndFooter';

function ProgramSchedulePage() {
  return (
    <div>
      <Header />
      <div className="bg-[#312e81] bg-[url('https://www.transparenttextures.com/patterns/fake-brick.png')] py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Program Schedule</h1>
          <p className="text-xl mb-8 text-white">Explore the comprehensive agenda for ICAMLR 2026</p>
          <div className="flex text-white flex-col sm:flex-row justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>July 28-30, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Crowne Plaza - St. Peter's Rome, Italy</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>3 Days of Innovation</span>
            </div>
          </div>
        </div>
      </div>
      <Agenda />
      <EndFooter />
    </div>
  );
}

export default ProgramSchedulePage;