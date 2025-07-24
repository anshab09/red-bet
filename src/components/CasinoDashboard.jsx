

import React, { useEffect, useState } from 'react';
import gamesData from '../casinogames.json';

// Simulated API calls
const fetchTabs = () =>
  Promise.resolve([
    'ALL', 'MAC88', 'MAC-EXCITE', 'FUN GAMES', 'MAC88 VIRTUALS',
    'COLOR PREDICTION', 'CREED', 'SMARTSOFT', 'TURBOGAMES',
    'EVOLUTION', 'EZUGI GAMING'
  ]);

const fetchSubCategories = () =>
  Promise.resolve([
    { label: "Dragon Tiger", icon: "fas fa-dragon" },
    { label: "Baccarat", icon: "fas fa-chess-board" },
    { label: "Sicbo", icon: "fas fa-dice" },
    { label: "Roulette", icon: "fas fa-circle-notch" },
    { label: "Poker", icon: "fas fa-spade" },
    { label: "Lucky7", icon: "fas fa-7" },
    { label: "Andarbahar", icon: "fas fa-dice-six" },
    { label: "Teenpatti", icon: "fas fa-user-friends" },
    { label: "32cards", icon: "fas fa-layer-group" },
    { label: "Others", icon: "fas fa-ellipsis-h" },
    { label: "Lottery", icon: "fas fa-ticket-alt" },
    { label: "Cricketwar", icon: "fas fa-volleyball-ball" },
    { label: "Hi Low", icon: "fas fa-sort-amount-up" },
    { label: "Slots", icon: "fas fa-sliders-h" },
    { label: "Fun Games", icon: "fas fa-gamepad" }
  ]);



const CasinoDashboard = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('ALL');
  const [subCategories, setSubCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Dragon Tiger');
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');




  useEffect(() => {
    fetchTabs().then(setTabs);
    fetchSubCategories().then(setSubCategories);
    setGames(gamesData['ALL'] || []);
  }, []);


  useEffect(() => {
    let currentGames = [];

    if (activeTab === 'ALL') {
      // Combine all games from all tabs
      Object.values(gamesData).forEach(arr => currentGames.push(...arr));
    } else {
      currentGames = gamesData[activeTab] || [];
    }

    // Apply search and subcategory filters
    const filtered = currentGames.filter(game =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      game.subCategory === activeCategory
    );

    setGames(filtered);
  }, [activeTab, activeCategory, searchTerm]);


  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'ALL' || game.title.includes(activeTab))
  );

  return (
    <div className="bg-[#f0f3f7] min-h-screen font-sans">
      <div className="flex items-center justify-between bg-[#e8edf5]  py-2 relative border-t-2 border-[#790016]">
        {/* Casino Label with bottom-right diagonal */}
        <div className="relative">
          <div className="bg-[#C10930] text-white text-sm font-bold py-2 pl-4 pr-8 clip-bottom-diagonal flex items-center gap-2">
            <i className="fas fa-dice"></i>
            CASINO
          </div>
        </div>

        {/* Search Input with icon */}
        <div className="flex items-center border border-[#C10930] rounded overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search Games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 text-sm text-[#555] outline-none w-[150px] sm:w-[200px]"
          />
          <button className=" px-3 py-2 mr-4 text-white text-sm flex items-center justify-center bg-[#6D081D]">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffffff" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>          </button>
        </div>
      </div>

      {/* Top Tabs */}
      <div className="bg-[#333] text-white text-sm">
        <div className="flex overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`px-4 py-2 whitespace-nowrap cursor-pointer ${activeTab === tab ? 'bg-[#790016] font-bold' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sub Categories */}
        <div className="flex overflow-x-auto border-t border-[#790016] bg-white text-black text-xs">
          {subCategories.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center px-3 py-2 border-r border-gray-300 cursor-pointer ${activeCategory === item.label ? 'bg-[#333] text-white font-semibold' : ''}`}
              onClick={() => setActiveCategory(item.label)}
            >
              <i className={`${item.icon || 'fas fa-dice'} mb-1`}></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 p-2 bg-[#f0f3f7]">
        {filteredGames.map((card, i) => (
          <div key={i} className="bg-white border border-gray-300 rounded overflow-hidden text-center text-[11px] font-semibold">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[100px] object-cover"
            />
            <div className="p-1 bg-[#222] text-white">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoDashboard;

