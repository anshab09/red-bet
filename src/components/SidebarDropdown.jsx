

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

const sidebarItems = [
  {
    label: 'IPL 2025',
    icon: '🏏',
    subItems: [
      {
        label: 'Indian Premier League',
        subItems: ['MI v DC', 'RCB v CSK', 'GT v SRH'],
      },
      {
        label: 'Kerala T20 Trophy',
        subItems: ['Kochi v Trivandrum'],
      },
    ],
  },
  {
    label: 'Cricket',
    icon: '🏏',
    subItems: [
      {
        label: 'Live',
        subItems: ['Match 1', 'Match 2'],
      },
      {
        label: 'Upcoming',
        subItems: ['Match 3', 'Match 4'],
      },
      {
        label: 'ODI',
        subItems: ['India v Australia', 'England v SA'],
      },
    ],
  },
  {
    label: 'Football',
    icon: '⚽',
    subItems: [
      {
        label: 'Live',
        subItems: ['Manchester United v Chelsea'],
      },
      {
        label: 'Tournaments',
        subItems: ['UEFA Champions League', 'Premier League'],
      },
    ],
  },
  {
    label: 'Tennis',
    icon: '🎾',
    subItems: [
      {
        label: 'Grand Slams',
        subItems: ['Wimbledon', 'US Open', 'French Open'],
      },
    ],
  },
  {
    label: 'Politics',
    icon: '🎂',
    subItems: [
      {
        label: 'UK',
        subItems: ['General Election', 'Parliament'],
      },
      {
        label: 'US',
        subItems: ['Presidential', 'Senate'],
      },
    ],
  },
  {
    label: 'Casino',
    icon: '🎰',
    subItems: [
      {
        label: 'Games',
        subItems: ['Roulette', 'Blackjack', 'Slots'],
      },
    ],
  },
  {
    label: 'Sports Book',
    icon: '📒',
    subItems: [
      {
        label: 'Categories',
        subItems: ['Top Bets', 'Live Now'],
      },
    ],
  },
  {
    label: 'Horse Racing',
    icon: '🐎',
    subItems: [
      {
        label: 'UK',
        subItems: ['Cheltenham', 'Ascot'],
      },
      {
        label: 'India',
        subItems: ['Mumbai', 'Hyderabad'],
      },
    ],
  },
  {
    label: 'Greyhound Racing',
    icon: '🐕',
    subItems: [
      {
        label: 'Tracks',
        subItems: ['Track A', 'Track B'],
      },
    ],
  },
  {
    label: 'Binary',
    icon: '🧮',
    subItems: [
      {
        label: 'Options',
        subItems: ['Up/Down', 'Touch/No Touch'],
      },
    ],
  },
  {
    label: 'Kabaddi',
    icon: '🤼',
    subItems: [
      {
        label: 'Pro Kabaddi',
        subItems: ['UP Yoddhas v Bengal Warriors'],
      },
    ],
  },
  {
    label: 'Basketball',
    icon: '🏀',
    subItems: [
      {
        label: 'NBA',
        subItems: ['Lakers v Warriors', 'Celtics v Heat'],
      },
    ],
  },
  {
    label: 'Baseball',
    icon: '⚾',
    subItems: [
      {
        label: 'MLB',
        subItems: ['Yankees v Red Sox', 'Dodgers v Mets'],
      },
    ],
  },
];

const SidebarItem = ({ item, depth = 0 }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // 👈 navigation hook

  const hasSubItems = Array.isArray(item.subItems) && item.subItems.length > 0;

  const toggle = () => {
    if (hasSubItems) setOpen(!open);
  };

  return (
    <div className={`pl-${depth * 4} pr-3`}>
      <div
        onClick={toggle}
        className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 transition-all"
      >
        <div className="flex items-center gap-3">
          {item.icon && <span className="text-lg">{item.icon}</span>}
          <span className="text-sm font-medium">{item.label}</span>
        </div>
        {hasSubItems && (
          <span className="text-xs text-gray-500">
            {open ? <FaAngleDown /> : <FaAngleRight />}
          </span>
        )}
      </div>

      {open && hasSubItems && (
        <div className="ml-5">
          {item.subItems.map((sub, idx) =>
            typeof sub === 'string' ? (
              <div
                key={idx}
                className="pl-4 py-1 text-sm text-gray-700 hover:text-red-500 cursor-pointer"
                onClick={() => navigate(`/landing/${idx}`)} // 🔁 Navigate to landing on click
              >
                {sub}
              </div>
            ) : (
              <SidebarItem key={idx} item={sub} depth={depth + 1} />
            )
          )}
        </div>
      )}
    </div>
  );
};

const SidebarDropdown = ({ mobile = false }) => {
  return (
    <div className={`absolute left-0 top-5 z-20 bg-white shadow-md w-60 lg:w-72 text-sm overflow-y-auto h-[calc(100vh-48px)] ${mobile ? "" : "hidden"} lg:block`}>
      {sidebarItems.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default SidebarDropdown;
