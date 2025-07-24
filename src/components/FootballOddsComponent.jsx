// import React from 'react';
// import { useParams } from "react-router-dom";
// import matchData from '../matches.json'; // adjust as needed

// const FootballOddsComponent = () => {
//   const { id } = useParams();

//   // For simplicity, get first football match
//   const footballCategory = matchData.inplay.find(item => Object.keys(item)[0] === 'football');
//   const matches = footballCategory ? footballCategory.football : [];
//   const match = matches[id] || null;

//   if (!match) return <div className="p-4 text-red-600">Match not found.</div>;

//   const renderOddsRow = (label, oddsData) => (
//     <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 py-2 border-b">
//       <div className="col-span-2 font-semibold">{label}</div>
//       <div className="flex gap-1">
//         <div className="bg-blue-200 text-center w-full rounded py-1">{oddsData?.back}</div>
//       </div>
//       <div className="flex gap-1">
//         <div className="bg-pink-200 text-center w-full rounded py-1">{oddsData?.lay}</div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-white p-4 space-y-6">
//       {/* Match Header */}
//       <div className="bg-red-700 text-white px-4 py-3 flex justify-between items-center sticky top-0 z-10">
//         <div className="flex items-center space-x-2">
//           <span className="font-semibold">⚽ {match.match}</span>
//         </div>
//         <div className="text-sm font-bold">Min: ₹100 | Max: ₹25k</div>
//       </div>

//       {/* Market: Match Odds */}
//       <div className="border border-gray-200 rounded shadow-sm">
//         <div className="bg-gray-100 text-sm font-bold px-3 py-2 border-b">MATCH ODDS</div>
//         {renderOddsRow(match.team1, match.odds?.['1'])}
//         {renderOddsRow(match.team2, match.odds?.['2'])}
//         {renderOddsRow('The Draw', match.odds?.['X'])}
//       </div>

//       {/* Over/Under Markets */}
//       {match.markets?.map((market, i) => (
//         <div key={i} className="border border-gray-200 rounded shadow-sm">
//           <div className="bg-gray-100 text-sm font-bold px-3 py-2 border-b">
//             {market.title}
//           </div>
//           {market.options.map((opt, idx) => (
//             renderOddsRow(opt.label, opt.odds)
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FootballOddsComponent;


import React from 'react';

const FootballOddsComponent = () => {
  const match = {
    match: "Binh Duong vs Cong An Nhan Dan",
    tournament: "Vietnam League",
    team1: "Binh Duong",
    team2: "Cong An Nhan Dan",
    odds: {
      "1": { back: 5.4, lay: 5.7 },
      "2": { back: 1.83, lay: 1.86 },
      "X": { back: 3.55, lay: 3.6 }
    },
    markets: [
      {
        title: "OVER/UNDER 0.5 GOALS",
        options: [
          { label: "Under 0.5 Goals", odds: { back: 13.5, lay: 14 } },
          { label: "Over 0.5 Goals", odds: { back: 1.07, lay: 1.08 } }
        ]
      },
      {
        title: "OVER/UNDER 1.5 GOALS",
        options: [
          { label: "Under 1.5 Goals", odds: { back: 3.55, lay: 3.8 } },
          { label: "Over 1.5 Goals", odds: { back: 1.36, lay: 1.39 } }
        ]
      },
      {
        title: "OVER/UNDER 2.5 GOALS",
        options: [
          { label: "Under 2.5 Goals", odds: { back: 1.86, lay: 1.9 } },
          { label: "Over 2.5 Goals", odds: { back: 2.05, lay: 2.1 } }
        ]
      }
    ]
  };

  const renderOddsRow = (label, oddsData) => (
    <div className="grid grid-cols-3 sm:grid-cols-5 items-center gap-2 py-2 border-b px-3">
      <div className="col-span-2 font-medium text-gray-700">{label}</div>
      <div className="flex justify-center">
        <div className="bg-blue-100 text-blue-800 text-sm rounded px-2 py-1 w-full text-center">{oddsData?.back}</div>
      </div>
      <div className="flex justify-center">
        <div className="bg-pink-100 text-pink-800 text-sm rounded px-2 py-1 w-full text-center">{oddsData?.lay}</div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 space-y-6 border rounded shadow-md max-w-3xl mx-auto my-4">
      {/* Match Header */}
      <div className="bg-red-700 text-white px-4 py-3 flex justify-between items-center rounded">
        <div className="text-base font-semibold">⚽ {match.match}</div>
        <div className="text-sm font-bold">Min: ₹100 | Max: ₹25k</div>
      </div>

      {/* Match Odds */}
      <div className="border border-gray-200 rounded shadow-sm">
        <div className="bg-gray-100 text-sm font-bold px-3 py-2 border-b">MATCH ODDS</div>
        {renderOddsRow(match.team1, match.odds["1"])}
        {renderOddsRow(match.team2, match.odds["2"])}
        {renderOddsRow("The Draw", match.odds["X"])}
      </div>

      {/* Markets */}
      {match.markets.map((market, i) => (
        <div key={i} className="border border-gray-200 rounded shadow-sm">
          <div className="bg-gray-100 text-sm font-bold px-3 py-2 border-b">
            {market.title}
          </div>
          {market.options.map((opt, idx) => (
            <React.Fragment key={idx}>
              {renderOddsRow(opt.label, opt.odds)}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FootballOddsComponent;
