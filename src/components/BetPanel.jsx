

import React, { useState, useEffect } from 'react';

const BetPanel = ({ selectedOdd }) => {
  const [odds, setOdds] = useState(selectedOdd?.value || 0);
  const [stake, setStake] = useState(0);
  const [betType, setBetType] = useState(selectedOdd?.type || 'back'); // back, lay, yes, no
  const [market, setMarket] = useState(selectedOdd?.market || '');

  useEffect(() => {
    if (selectedOdd) {
      setOdds(selectedOdd.value);
      setBetType(selectedOdd.type);
      setMarket(selectedOdd.market || '');
    }
  }, [selectedOdd]);

  const changeStake = (amount) => setStake((prev) => prev + amount);
  const clearStake = () => setStake(0);
  const minStake = 100;
  const maxStake = 5000;

  const betColor =
    betType === 'back' || betType === 'yes'
      ? 'bg-blue-200'
      : betType === 'lay' || betType === 'no'
      ? 'bg-pink-200'
      : 'bg-gray-100';

  const handlePlaceBet = () => {
    alert(`Placed ${betType.toUpperCase()} bet on ${market} @ ${odds} for ₹${stake}`);
  };

  return (
    <div className={`w-full max-w-xs border rounded shadow ${betColor} text-sm mx-auto`}>
      <div className="bg-gray-800 text-white px-3 py-1 font-semibold">PLACE BET</div>

      {market && (
        <div className="text-center text-xs font-bold text-gray-700 py-1">
          {market} ({betType.toUpperCase()})
        </div>
      )}

      <div className="flex justify-between items-center px-2 py-2 space-x-2">
        <button
          className="bg-blue-900 text-white w-8 h-8 rounded text-lg font-bold"
          onClick={() => setOdds(Math.max(1.01, odds - 0.01))}
        >
          -
        </button>

        <div className="flex-1 text-center bg-white rounded py-1 border">
          {odds.toFixed(2)}
        </div>

        <button
          className="bg-blue-900 text-white w-8 h-8 rounded text-lg font-bold"
          onClick={() => setOdds(odds + 0.01)}
        >
          +
        </button>

        <input
          type="number"
          className="w-16 text-center bg-white rounded border py-1"
          value={stake}
          onChange={(e) => setStake(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className="grid grid-cols-4 gap-1 px-2 mb-2 text-white text-xs font-medium">
        {[100, 200, 500, 1000, 2000, 5000, 10000, 25000].map((amt) => (
          <button
            key={amt}
            className="bg-white text-black rounded py-1"
            onClick={() => changeStake(amt)}
          >
            + {amt}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-1 px-2 mb-2 text-xs font-bold">
        <button
          className="bg-[#C10930] text-white rounded py-1 col-span-1"
          onClick={() => setStake(minStake)}
        >
          MIN STAKE
        </button>
        <button
          className="bg-[#6D081D] text-white rounded py-1 col-span-1"
          onClick={() => setStake(maxStake)}
        >
          MAX STAKE
        </button>
        <button
          className="bg-green-700 text-white rounded py-1 col-span-1"
          onClick={() => alert('Edit Stake')}
        >
          EDIT STAKE
        </button>
        <button
          className="bg-red-600 text-white rounded py-1 col-span-1"
          onClick={clearStake}
        >
          CLEAR
        </button>
      </div>

      <div className="px-2 text-xs text-[#C10930] mb-1">
        Min Bet: ₹{minStake.toFixed(2)} Max Bet: ₹{maxStake.toFixed(2)}
      </div>

      <div className="grid grid-cols-2 gap-1 px-2 pb-2 text-white text-sm font-bold">
        <button className="bg-red-400 py-1 rounded">CANCEL</button>
        <button
          className="bg-green-600 py-1 rounded"
          onClick={handlePlaceBet}
        >
          PLACE BET
        </button>
      </div>
    </div>
  );
};

export default BetPanel;
