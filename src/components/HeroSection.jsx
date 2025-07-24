


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import SidebarDropdown from './SidebarDropdown'; 

const menuItems = [
  { label: 'HOME', icon: '🏠' },
  { label: 'IN PLAY', icon: '▶️' },
  { label: 'CRICKET', icon: '🏏' },
  { label: 'FOOTBALL', icon: '⚽' },
  { label: 'TENNIS', icon: '🎾' },
  { label: 'POLITICS', icon: '🎂' },
  { label: 'CASINO', icon: '🎰', dark: true },
  { label: 'SPORTS BOOK', icon: '📒' },
  { label: 'HORSE RACING', icon: '🐎' },
  { label: 'GREYHOUND RACING', icon: '🐕' },
  { label: 'BINARY', icon: '🧮' },
  { label: 'KABADDI', icon: '🤼' },
  { label: 'BASKETBALL', icon: '🏀' },
  { label: 'Hockey', icon: '🏑' },
  { label: 'Cycling', icon: '🚴' },
  { label: 'DARTS', icon: '🎯' },
  { label: 'FUTSAL', icon: '⚽' },
];

const HeroSection = () => {
  const [selected, setSelected] = useState('HOME');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (label) => {
    setSelected(label);
    setSidebarOpen(false);

    // Convert label to lowercase and remove spaces for routing
    const routeCategory = label.toLowerCase().replace(/\s+/g, '');
    navigate(`/landing/${routeCategory}`);
  };

  return (
    <>
      <nav className="bg-gray-800 text-white w-full">
        <div className="max-w-screen-xl mx-auto flex items-center px-4 py-2 relative">
          <div className="flex overflow-x-auto scrollbar-hide w-full">
            {menuItems.map((item, index) => {
              const isActive = selected === item.label;
              return (
                <div
                  key={index}
                  onClick={() => handleSelect(item.label)}
                  className={`flex flex-col items-center px-2 py-2 mx-1 rounded-md cursor-pointer text-xs whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? 'bg-red-600'
                      : item.dark
                      ? 'bg-red-900 hover:bg-red-700'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <div className="text-lg">{item.icon}</div>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Menu Icon (Mobile Only) */}
          <div
            onClick={() => setSidebarOpen(true)}
            className="flex flex-col items-center px-3 py-2 mx-1 rounded-md cursor-pointer text-xs whitespace-nowrap hover:bg-gray-700 lg:hidden"
          >
            <div className="text-lg">
              <FaBars />
            </div>
            <span>Menu</span>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR DROPDOWN */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 lg:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <FaTimes
            className="cursor-pointer text-gray-600"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
        <SidebarDropdown mobile={true} />
      </div>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default HeroSection;
