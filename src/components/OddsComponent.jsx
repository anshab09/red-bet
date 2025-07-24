



import React from 'react';
import { Link, useParams } from "react-router-dom";


import matchData from '../matches.json'; // adjust path as needed
import CasinoDashboard from './CasinoDashboard';
import FootballOddsComponent from './FootballOddsComponent';

const OddsComponent = () => {
  const { category } = useParams();

  if (category === 'home' || category === 'inplay') {
    // Map through all sports inside 'inplay'
    return (
      <div className="bg-white">

        {matchData.inplay.map((sportObj, idx) => {
          const sportName = Object.keys(sportObj)[0];
          const matches = sportObj[sportName];

          return (
            <div key={sportName + idx} className="mb-8">
              {/* <div className="bg-red-700 text-white px-4 py-3 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">🏏 {sportName?.toUpperCase()}</span>
                  <button className="border border-white px-3 py-1 rounded-full text-xs hover:bg-white hover:text-red-700 transition">+ LIVE</button>
                  <button className="border border-white px-3 py-1 rounded-full text-xs hover:bg-white hover:text-red-700 transition">+ VIRTUAL</button>
                </div>
                <div className="text-sm font-bold hidden sm:block">1 &nbsp;&nbsp; X &nbsp;&nbsp; 2</div>
              </div>       */}

                 <div className="bg-[#6e0023] text-white text-sm">
        {/* Marquee Section */}
        <div className="w-full overflow-hidden whitespace-nowrap py-1 px-2">
          <marquee behavior="scroll" direction="left" scrollamount="4">
            🏆 INDIAN PREMIER LEAGUE(IPL) 🏆 CUP WINNER MARKET BETS STARTED IN OUR PLATFORM
          </marquee>
        </div>

        {/* Tabs Section */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#e9f0ff] text-black">
          {/* Left Tabs */}
          <div className="flex items-center space-x-3">


            <div className="relative">
              <div className="bg-[#C10930] text-white text-sm font-bold py-2 pl-4 pr-8 clip-bottom-diagonal flex items-center gap-2">
                <span>🏏</span>
                 {sportName?.toUpperCase()}
              </div>
            </div>
            <button className="border border-[#cc1f3c] text-[#cc1f3c] text-xs px-3 py-1 rounded-full font-semibold">
              + LIVE
            </button>
            <button className="border border-[#cc1f3c] text-[#cc1f3c] text-xs px-3 py-1 rounded-full font-semibold">
              + VIRTUAL
            </button>
          </div>

          {/* Odds Header */}
          <div className="flex space-x-6 text-xs font-bold pr-4">
            <span>1</span>
            <span>X</span>
            <span>2</span>
          </div>
        </div>
      </div>
                      {matches.map((match, i) => (
                <Link
                  // to={`/matchdetails/${sportName}/${i}`}
                  to={`/matchdetails/${i}`}

                  key={i}
                  className="block hover:no-underline text-inherit border-b border-gray-200"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center px-4 py-4 text-xs sm:text-sm hover:bg-gray-100 transition gap-2">
                    {/* Info */}
                    <div className="w-full flex flex-wrap md:flex-nowrap md:items-center md:gap-4 gap-2">
                      <div className="min-w-[140px] flex-1">
                        <div className="font-semibold truncate">{match.match}</div>
                        <div className="text-gray-500 text-xs truncate">({match.tournament})</div>
                      </div>

                      <div className="text-green-600 font-bold min-w-[50px] text-xs">{match.status}</div>

                      <div className="text-gray-500 text-xs text-center min-w-[70px]">
                        {match.date}<br />{match.time}
                      </div>

                      <div className="flex space-x-1 min-w-[50px]">
                        {match.icons.map((icon, i) => (
                          <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full text-center">{icon}</span>
                        ))}
                      </div>
                    </div>

                    {/* Odds */}
                    <div className="flex flex-wrap md:flex-nowrap gap-2 md:ml-auto">
                      {['1', 'X', '2'].map(type => (
                        <div key={type} className="flex w-28 gap-1">
                          <div className="bg-blue-400 text-white px-2 py-2 rounded text-center w-1/2 text-xs truncate">
                            {match.odds[type].back}
                          </div>
                          <div className="bg-pink-400 text-white px-2 py-2 rounded text-center w-1/2 text-xs truncate">
                            {match.odds[type].lay}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  else if (category === 'casino') return <CasinoDashboard />


  // If category is not 'inplay', find matches normally:
  const categoryObj = matchData.inplay.find(item => Object.keys(item)[0] === category);

  const matches = categoryObj ? categoryObj[category] : [];

  return (
    <div className="bg-white">
      {/* Header */}
      {/* <div className="bg-red-700 text-white px-4 py-3 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">🏏 {category?.toUpperCase()}</span>
          <button className="border border-white px-3 py-1 rounded-full text-xs hover:bg-white hover:text-red-700 transition">+ LIVE</button>
          <button className="border border-white px-3 py-1 rounded-full text-xs hover:bg-white hover:text-red-700 transition">+ VIRTUAL</button>
        </div>
        <div className="text-sm font-bold hidden sm:block">1 &nbsp;&nbsp; X &nbsp;&nbsp; 2</div>
      </div> */}
      <div className="bg-[#6e0023] text-white text-sm">
        {/* Marquee Section */}
        <div className="w-full overflow-hidden whitespace-nowrap py-1 px-2">
          <marquee behavior="scroll" direction="left" scrollamount="4">
            🏆 INDIAN PREMIER LEAGUE(IPL) 🏆 CUP WINNER MARKET BETS STARTED IN OUR PLATFORM
          </marquee>
        </div>

        {/* Tabs Section */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#e9f0ff] text-black">
          {/* Left Tabs */}
          <div className="flex items-center space-x-3">


            <div className="relative">
              <div className="bg-[#C10930] text-white text-sm font-bold py-2 pl-4 pr-8 clip-bottom-diagonal flex items-center gap-2">
                <span>🏏</span>
                {category?.toUpperCase()}
              </div>
            </div>
            <button className="border border-[#cc1f3c] text-[#cc1f3c] text-xs px-3 py-1 rounded-full font-semibold">
              + LIVE
            </button>
            <button className="border border-[#cc1f3c] text-[#cc1f3c] text-xs px-3 py-1 rounded-full font-semibold">
              + VIRTUAL
            </button>
          </div>

          {/* Odds Header */}
          <div className="flex space-x-6 text-xs font-bold pr-4">
            <span>1</span>
            <span>X</span>
            <span>2</span>
          </div>
        </div>
      </div>
      {/* Match List */}
      <div>
        {matches.map((match, index) => (
          <Link
            to={`/matchdetails/${index}`}
            key={index}
            className="block hover:no-underline text-inherit border-b border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center px-4 py-4 text-xs sm:text-sm hover:bg-gray-100 transition gap-2">
              {/* Info */}
              <div className="w-full flex flex-wrap md:flex-nowrap md:items-center md:gap-4 gap-2">
                <div className="min-w-[140px] flex-1">
                  <div className="font-semibold truncate">{match.match}</div>
                  <div className="text-gray-500 text-xs truncate">({match.tournament})</div>
                </div>

                <div className="text-green-600 font-bold min-w-[50px] text-xs">{match.status}</div>

                <div className="text-gray-500 text-xs text-center min-w-[70px]">
                  {match.date}<br />{match.time}
                </div>

                <div className="flex space-x-1 min-w-[50px]">
                  {match.icons.map((icon, i) => (
                    <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full text-center">{icon}</span>
                  ))}
                </div>
              </div>

              {/* Odds */}
              <div className="flex flex-wrap md:flex-nowrap gap-2 md:ml-auto">
                {['1', 'X', '2'].map(type => (
                  <div key={type} className="flex w-28 gap-1">
                    <div className="bg-blue-400 text-white px-2 py-2 rounded text-center w-1/2 text-xs truncate">
                      {match.odds[type].back}
                    </div>
                    <div className="bg-pink-400 text-white px-2 py-2 rounded text-center w-1/2 text-xs truncate">
                      {match.odds[type].lay}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OddsComponent;





