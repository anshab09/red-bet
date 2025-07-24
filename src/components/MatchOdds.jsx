


import React from 'react';

const MatchOdds = ({ onSelectOdd }) => {
  const odds = [
    {
      team: 'England',
      back: [
        { price: '0', volume: '0' },
        { price: '0', volume: '0' },
        { price: '1.01', volume: '83202.17' }
      ],
      lay: [
        { price: '1.02', volume: '182598.6' },
        { price: '1.03', volume: '26377.7' },
        { price: '1.04', volume: '32369.55' }
      ]
    },
    {
      team: 'Zimbabwe',
      back: [
        { price: '430', volume: '4.75' },
        { price: '450', volume: '1.98' },
        { price: '660', volume: '28' }
      ],
      lay: [
        { price: '670', volume: '1.4' },
        { price: '790', volume: '1.92' },
        { price: '900', volume: '2.74' }
      ]
    },
    {
      team: 'The Draw',
      back: [
        { price: '70', volume: '22.66' },
        { price: '85', volume: '374.9' },
        { price: '90', volume: '69.84' }
      ],
      lay: [
        { price: '100', volume: '22.56' },
        { price: '110', volume: '11.84' },
        { price: '120', volume: '16.4' }
      ]
    }
  ];

  return (
    <div className="">
      <div className="flex items-center justify-between bg-[#e8edf5] text-[#a20d1c] px-2 py-1 text-xs font-semibold border-b border-gray-300">
        <div className="flex items-center gap-2">
          <div className="bg-[#a20d1c] text-white px-2 py-1 rounded-tr-md text-xs font-bold tracking-wide">
            MATCH ODDS
          </div>
          <span className="text-[#a20d1c]">🔖</span>
        </div>
        <div className="text-right text-[11px] text-gray-800">
          Min: 100 | Max: 5k
        </div>
      </div>

      <div className="grid grid-cols-3 text-center text-xs bg-white py-1 text-gray-600 font-semibold border-t border-b border-gray-300">
        <div></div>
        <div>BACK</div>
        <div>LAY</div>
      </div>

      <div className="space-y-2 py-1 bg-white">
        {odds.map((entry, i) => (
          <div key={i} className="flex items-center text-sm">
            <div className="w-1/4 font-medium pl-2">{entry.team}</div>
            <div className="flex justify-around w-3/4 gap-1 px-1">
              {entry.back.map((b, j) => (
                <div
                  key={j}
                  className="bg-blue-200 text-center rounded w-16 py-1 text-[12px] leading-tight cursor-pointer hover:bg-blue-300"
                  onClick={() => onSelectOdd({ value: parseFloat(b.price), type: 'back' })}
                >
                  <div className="font-semibold">{b.price}</div>
                  <div className="text-[10px] text-gray-700">{b.volume}</div>
                </div>
              ))}
              {entry.lay.map((l, j) => (
                <div
                  key={j}
                  className="bg-pink-200 text-center rounded w-16 py-1 text-[12px] leading-tight cursor-pointer hover:bg-pink-300"
                  onClick={() => onSelectOdd({ value: parseFloat(l.price), type: 'lay' })}
                >
                  <div className="font-semibold">{l.price}</div>
                  <div className="text-[10px] text-gray-700">{l.volume}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchOdds;
