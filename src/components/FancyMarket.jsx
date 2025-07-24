

import React, { useState } from 'react';

const tabs = ['ALL', 'SESSIONS', 'W/P MARKET', 'ODD/EVEN', 'XTRA MARKET'];

const allMarkets = [
  {
    id: 1,
    tab: 'SESSIONS',
    title: '15 Over Runs ZIM (2)',
    no: { value: 46, stake: 100 },
    yes: { value: 48, stake: 100 },
    maxBet: 100,
    maxMarket: 25000
  },
  {
    id: 2,
    tab: 'SESSIONS',
    title: '2nd Innings Runs ZIM',
    no: { value: 190, stake: 100 },
    yes: { value: 195, stake: 100 },
    maxBet: 100,
    maxMarket: 25000
  },
  {
    id: 3,
    tab: 'SESSIONS',
    title: 'Fall Of 3rd Wkt Runs ZIM (2)',
    no: { value: 48, stake: 110 },
    yes: { value: 48, stake: 90 },
    maxBet: 100,
    maxMarket: 25000
  },
  {
    id: 4,
    tab: 'W/P MARKET',
    title: 'B Curran Runs (2)',
    no: { value: 20, stake: 110 },
    yes: { value: 20, stake: 90 },
    maxBet: 100,
    maxMarket: 25000
  },
  {
    id: 5,
    tab: 'W/P MARKET',
    title: 'S Williams Runs (2)',
    no: { value: 42, stake: 110 },
    yes: { value: 42, stake: 90 },
    maxBet: 100,
    maxMarket: 25000
  },
  {
    id: 6,
    tab: 'ODD/EVEN',
    title: 'B Curran Boundaries (2)',
    no: { value: 2, stake: 100 },
    yes: { value: 3, stake: 100 },
    maxBet: 100,
    maxMarket: 10000
  },
  {
    id: 7,
    tab: 'ODD/EVEN',
    title: 'S Williams Boundaries (2)',
    no: { value: 7, stake: 100 },
    yes: { value: 8, stake: 90 },
    maxBet: 100,
    maxMarket: 10000
  },
  {
    id: 8,
    tab: 'XTRA MARKET',
    title: '3rd Wkt Pship Boundaries ZIM (2)',
    no: { value: 7, stake: 115 },
    yes: { value: 7, stake: 85 },
    maxBet: 100,
    maxMarket: 10000
  }
];

const FancyMarket = ({ onSelectOdd }) => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selections, setSelections] = useState({});

  const filteredMarkets =
    activeTab === 'ALL'
      ? allMarkets
      : allMarkets.filter((m) => m.tab === activeTab);

  const handleSelect = (market, choice) => {
    setSelections((prev) => ({
      ...prev,
      [market.id]: choice
    }));

    const value = choice === 'YES' ? market.yes.value : market.no.value;

    onSelectOdd({
      value,
      type: choice.toLowerCase(), // 'yes' or 'no'
      market: market.title
    });
  };

  return (
    <div className="max-w-5xl  text-sm font-medium text-gray-800"> {/** mx-auto remvoe */}
      <div className="bg-gradient-to-b from-[#c3381b] to-[#f2591c] text-white text-center py-2 rounded-t-md font-bold tracking-wide">
        FANCY
      </div>

      <div className="flex border border-[#c3381b] border-t-0">
        {tabs.map((label) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex-1 py-1 text-xs font-semibold border-r border-[#c3381b] ${
              activeTab === label
                ? 'bg-[#c3381b] text-white'
                : 'text-[#c3381b] hover:bg-[#fbeaea]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between px-2 py-1 text-xs font-semibold bg-gray-100 border-x border-t border-gray-300 text-gray-700">
        <div className="w-[50%]"></div>
        <div className="flex w-[30%] justify-center gap-1">
          <div className="w-14 text-center">NO</div>
          <div className="w-14 text-center">YES</div>
        </div>
        <div className="w-[20%] text-right pr-2"></div>
      </div>

      <div className="divide-y border-x border-b border-gray-300 bg-white">
        {filteredMarkets.map((item) => {
          const selected = selections[item.id];

          return (
            <div
              key={item.id}
              className="flex items-center justify-between px-2 py-3 gap-2"
            >
              <div className="flex items-center gap-2 w-[50%]">
                <span className="text-red-500">🔖</span>
                <span>{item.title}</span>
              </div>

              <div className="flex gap-1 w-[30%] justify-center">
                <div
                  className={`w-14 text-center rounded-sm cursor-pointer ${
                    selected === 'NO'
                      ? 'bg-[#ff9c9c] border border-red-500 text-red-700'
                      : 'bg-[#f9d3d3] text-[#b40000]'
                  }`}
                  onClick={() => handleSelect(item, 'NO')}
                >
                  <div className="font-bold text-sm">{item.no.value}</div>
                  <div className="text-[10px] pb-[2px]">{item.no.stake}</div>
                </div>
                <div
                  className={`w-14 text-center rounded-sm cursor-pointer ${
                    selected === 'YES'
                      ? 'bg-[#7bc0f8] border border-blue-600 text-blue-900'
                      : 'bg-[#c1e4f9] text-[#004e9f]'
                  }`}
                  onClick={() => handleSelect(item, 'YES')}
                >
                  <div className="font-bold text-sm">{item.yes.value}</div>
                  <div className="text-[10px] pb-[2px]">{item.yes.stake}</div>
                </div>
              </div>

              <div className="text-[10px] text-right w-[20%] leading-tight text-gray-600">
                <div>Max Bet: {item.maxBet}</div>
                <div>
                  Max Market:{' '}
                  {item.maxMarket >= 1000
                    ? `${item.maxMarket / 1000}k`
                    : item.maxMarket}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FancyMarket;
