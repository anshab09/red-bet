


import React, { useState } from 'react';
import HeaderPanel from './HeaderPanel';
import MatchOdds from './MatchOdds';
import FancyMarket from './FancyMarket';
import BetPanel from './BetPanel';
import BookmakerOdds from './BookMakerOdds';

const BettingDashboard = () => {
  const [selectedOdd, setSelectedOdd] = useState({ value: 1.03, type: 'lay', market: '' });

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      
      {/* Left/Main Content */}
      <div className="flex-1 p-2 flex flex-col space-y-4 order-1 md:order-none">
        <HeaderPanel />
        <MatchOdds onSelectOdd={setSelectedOdd} />

        {/* BetPanel for mobile view here */}
        <div className="block md:hidden">
          <BetPanel selectedOdd={selectedOdd} />
        </div>

        <BookmakerOdds />
        <FancyMarket onSelectOdd={setSelectedOdd} />
      </div>

      {/* Right Sidebar (BetPanel for desktop view) */}
      <div className="hidden md:block w-full md:w-1/3 p-2">
        <BetPanel selectedOdd={selectedOdd} />
      </div>
    </div>
  );
};

export default BettingDashboard;
