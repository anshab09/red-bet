import React from 'react';

const bookmakerData = [
  { name: 'England', back: '-', lay: 'SUSPENDED' },
  { name: 'Zimbabwe', back: '-', lay: 'SUSPENDED' },
  { name: 'The Draw', back: '-', lay: 'SUSPENDED' },
];

const BookMakerOdds = () => {
  return (
    <div className="w-full max-w-3xl mx-auto text-sm font-medium">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#e8edf5] text-[#a20d1c] px-2 py-1 text-xs font-semibold border-b border-gray-300">
        <div className="flex items-center gap-2">
          <div className="bg-[#a20d1c] text-white px-2 py-1 rounded-tr-md text-xs font-bold tracking-wide">
            BOOKMAKER
          </div>
          <span className="text-[#a20d1c]">🔖</span>
        </div>
        <div className="text-right text-[11px] text-gray-800">
          Min: 100 | Max: 50k
        </div>
      </div>

      {/* Column Titles */}
      <div className="grid grid-cols-3 text-center text-xs bg-white py-1 text-gray-600 font-semibold border-t border-b border-gray-300">
        <div></div>
        <div>BACK</div>
        <div>LAY</div>
      </div>

      {/* Rows */}
      {bookmakerData.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-3 items-center text-center py-2 border-b border-gray-200 bg-white text-sm"
        >
          <div className="text-left pl-3 text-gray-700 font-medium">
            {item.name}
          </div>
          <div className="text-gray-400">-</div>
          <div className="text-[#d10000] font-semibold text-sm">SUSPENDED</div>
        </div>
      ))}

      {/* Change footer */}
      <div className="text-left text-[10px] text-gray-500 bg-white px-2 py-1 border-t border-gray-200">
        *CHANGE
      </div>
    </div>
  );
};

export default BookMakerOdds;
