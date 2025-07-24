// import React, { useEffect, useState, useRef } from "react";
// import { FiSearch } from "react-icons/fi";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import {
//   FaUser,
//   FaHome,
//   FaKey,
//   FaReceipt,
//   FaClipboardList,
//   FaCoins,
//   FaChartLine,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const Navbar = ({ onBonusClick }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     if (query.get("login") === "true") {
//       setIsLoggedIn(true);
//     }
//   }, [location]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLoginClick = () => {
//     navigate("/?login=true");
//   };

//   const handleBonusRule = () => {
//     if (onBonusClick) {
//       onBonusClick();
//     }
//     setDropdownOpen(false);
//   };

//   // Close dropdown when clicking on any list item
//   const handleListItemClick = () => {
//     setDropdownOpen(false);
//   };

//   return (
//     <header className="w-full px-4 md:px-10 py-4 bg-white shadow-sm relative z-50">
//       <div className="max-w-7xl mx-auto px-20 flex flex-col md:flex-row items-center justify-between">
//         {/* Left: Logo, Search, Rules */}
//         <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
//           <Link to={"/"}>
//             <div className="flex items-center space-x-1">
//               <span className="text-2xl font-extrabold text-[#8B0000]">REDDY</span>
//               <span className="text-xs border-2 border-[#8B0000] rounded-full px-1.5 py-0.5 text-[#8B0000] font-bold">
//                 BOOK
//               </span>
//               <span className="text-xs font-medium text-[#8B0000] mt-3 ml-1">.CLUB</span>
//             </div>
//           </Link>

//           <div className="w-full md:w-96 relative">
//             <input
//               type="text"
//               placeholder="Search Events"
//               className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
//             />
//             <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8B0000]" />
//           </div>

//           <button className="bg-[#B1002E] hover:bg-[#900026] cursor-pointer text-white px-5 py-2 rounded-md text-sm font-semibold shadow whitespace-nowrap">
//             RULES
//           </button>
//         </div>

//         {/* Right: Auth or Dropdown */}
//         <div className="flex items-center space-x-6 mt-4 md:mt-0 relative">
//           {isLoggedIn ? (
//             <>
//               {/* BAL / EXP */}
//               {[
//                 { label: "BAL", value: "0" },
//                 { label: "EXP", value: "0" },
//               ].map(({ label, value }) => (
//                 <div key={label} className="flex flex-col items-center">
//                   <div className="bg-[#B1002E] text-white text-[10px] font-bold px-3 py-1 rounded-b-full rounded-t-md w-14 text-center">
//                     {label}
//                   </div>
//                   <div className="text-black font-bold text-sm mt-1">{value}</div>
//                 </div>
//               ))}

//               {/* User Toggle */}
//               <div
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex items-center space-x-2 text-black font-semibold cursor-pointer select-none"
//               >
//                 <FaUser className="text-sm" />
//                 <span className="text-sm">DEMO123</span>
//               </div>

//               {/* Dropdown */}
//               {dropdownOpen && (
//                 <div
//                   ref={dropdownRef}
//                   className="absolute right-0 top-16 w-60 bg-white border border-gray-300 shadow-lg rounded-md z-50"
//                 >
//                   <div className="bg-[#B1002E] text-white text-center py-2 text-sm font-bold rounded-t-md">
//                     HI, DEMO123
//                   </div>
//                   <div className="p-4 text-xs space-y-1 border-b text-gray-700">
//                     <div className="flex justify-between font-semibold">
//                       <span>Wallet Amount</span>
//                       <span>0.00</span>
//                     </div>
//                     <p className="text-[10px] text-gray-500">(Inclusive bonus)</p>
//                     <div className="flex justify-between font-semibold">
//                       <span>Net Exposure</span>
//                       <span>0.00</span>
//                     </div>
//                     <div className="flex justify-between font-semibold">
//                       <span>Bonus</span>
//                       <span>0.00</span>
//                     </div>
//                     <div className="flex justify-between font-semibold">
//                       <span>Available</span>
//                       <span>0.00</span>
//                     </div>
//                     <p className="font-semibold">Withdrawal</p>
//                   </div>
//                   <div className="p-3 flex flex-col items-center space-y-2">
//                     <Link to={"/bonus-list"} onClick={handleListItemClick}>
//                       <button className="border cursor-pointer border-[#B1002E] text-[#B1002E] text-xs px-3 py-1 rounded-full">
//                         AWAITING BONUS 0
//                       </button>
//                     </Link>

//                     <Link to={"/reffer-and-earn"} onClick={handleListItemClick}>
//                       <button className="bg-[#B1002E] cursor-pointer text-white text-xs font-semibold px-5 py-1.5 rounded-full">
//                         REFER AND EARN
//                       </button>
//                     </Link>
//                   </div>

//                   <hr className="border-t border-black" />

//                   <ul className="text-xs divide-y divide-gray-100">
//                     <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleListItemClick}>
//                       <FaHome className="mr-3 text-xs" /> Home
//                     </li>
//                     <Link to={"/profile"} onClick={handleListItemClick}>
//                       <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                         <FaUser className="mr-3 text-xs" /> My Profile
//                       </li>
//                     </Link>

//                     <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleListItemClick}>
//                       <FaReceipt className="mr-3 text-xs" /> Account Statement
//                     </li>
//                     <li onClick={handleBonusRule} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                       <FaClipboardList className="mr-3 text-xs" /> Bonus Rules
//                     </li>
//                     <Link to={"/profile/stack"} onClick={handleListItemClick}>
//                       <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                         <FaCoins className="mr-3 text-xs" /> Stake Settings
//                       </li>
//                     </Link>

//                     <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleListItemClick}>
//                       <FaChartLine className="mr-3 text-xs" /> Profit & Loss
//                     </li>
//                     <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleListItemClick}>
//                       <FaClipboardList className="mr-3 text-xs" /> Unsettled Bets
//                     </li>
//                     <Link to={"/profile/password"} onClick={handleListItemClick}>
//                       <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                         <FaKey className="mr-3 text-xs" /> Change Password
//                       </li>
//                     </Link>
//                   </ul>
//                   <div
//                     className="bg-orange-500 text-white text-center py-2 font-bold cursor-pointer rounded-b-md hover:bg-orange-600 flex items-center justify-center space-x-2 select-none"
//                     onClick={handleListItemClick}
//                   >
//                     <FaSignOutAlt />
//                     <span>SIGN OUT</span>
//                   </div>
//                 </div>
//               )}
//             </>
//           ) : (
//             <>
//               <Link to="/signup">
//                 <button className="bg-black cursor-pointer text-white border border-[#B1002E] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#1a1a1a]">
//                   SIGNUP
//                 </button>
//               </Link>
//               <button
//                 onClick={handleLoginClick}
//                 className="bg-black cursor-pointer text-white border border-[#B1002E] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#1a1a1a]"
//               >
//                 LOGIN
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import React, { useEffect, useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaKey,
  FaReceipt,
  FaClipboardList,
  FaCoins,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = ({ onBonusClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.get("login") === "true") {
      setIsLoggedIn(true);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/?login=true");
  };

  const handleBonusRule = () => {
    if (onBonusClick) {
      onBonusClick();
    }
    setDropdownOpen(false);
  };

  const handleListItemClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="w-full px-4 md:px-10 py-4 bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo, Search, Rules */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <Link to={"/"}>
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-extrabold text-[#8B0000]">REDDY</span>
              <span className="text-xs border-2 border-[#8B0000] rounded-full px-1.5 py-0.5 text-[#8B0000] font-bold">
                BOOK
              </span>
              <span className="text-xs font-medium text-[#8B0000] mt-3 ml-1">.CLUB</span>
            </div>
          </Link>

          <div className="w-full md:w-96 relative">
            <input
              type="text"
              placeholder="Search Events"
              className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8B0000]" />
          </div>

          <button className="bg-[#B1002E] hover:bg-[#900026] cursor-pointer text-white px-5 py-2 rounded-md text-sm font-semibold shadow whitespace-nowrap">
            RULES
          </button>
        </div>

        {/* Right: Auth or Dropdown */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0 relative">
          {isLoggedIn ? (
            <div className="relative">
              <div className="flex items-center space-x-6">
                {/* BAL / EXP */}
                {[{ label: "BAL", value: "0" }, { label: "EXP", value: "0" }].map(({ label, value }) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="bg-[#B1002E] text-white text-[10px] font-bold px-3 py-1 rounded-b-full rounded-t-md w-14 text-center">
                      {label}
                    </div>
                    <div className="text-black font-bold text-sm mt-1">{value}</div>
                  </div>
                ))}

                {/* User Toggle */}
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 text-black font-semibold cursor-pointer select-none"
                >
                  <FaUser className="text-sm" />
                  <span className="text-sm">DEMO123</span>
                </div>
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-60 bg-white border border-gray-300 shadow-lg rounded-md z-50"
                >
                  <div className="bg-[#B1002E] text-white text-center py-2 text-sm font-bold rounded-t-md">
                    HI, DEMO123
                  </div>
                  <div className="p-4 text-xs space-y-1 border-b text-gray-700">
                    <div className="flex justify-between font-semibold">
                      <span>Wallet Amount</span>
                      <span>0.00</span>
                    </div>
                    <p className="text-[10px] text-gray-500">(Inclusive bonus)</p>
                    <div className="flex justify-between font-semibold">
                      <span>Net Exposure</span>
                      <span>0.00</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Bonus</span>
                      <span>0.00</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Available</span>
                      <span>0.00</span>
                    </div>
                    <p className="font-semibold">Withdrawal</p>
                  </div>
                  <div className="p-3 flex flex-col items-center space-y-2">
                    <Link to={"/bonus-list"} onClick={handleListItemClick}>
                      <button className="border cursor-pointer border-[#B1002E] text-[#B1002E] text-xs px-3 py-1 rounded-full">
                        AWAITING BONUS 0
                      </button>
                    </Link>

                    <Link to={"/reffer-and-earn"} onClick={handleListItemClick}>
                      <button className="bg-[#B1002E] cursor-pointer text-white text-xs font-semibold px-5 py-1.5 rounded-full">
                        REFER AND EARN
                      </button>
                    </Link>
                  </div>

                  <hr className="border-t border-black" />

                  <ul className="text-xs divide-y divide-gray-100">
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleListItemClick}>
                      <FaHome className="mr-3 text-xs" /> Home
                    </li>
                    <Link to={"/profile"} onClick={handleListItemClick}>
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaUser className="mr-3 text-xs" /> My Profile
                      </li>
                    </Link>

                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleListItemClick}>
                      <FaReceipt className="mr-3 text-xs" /> Account Statement
                    </li>
                    <li onClick={handleBonusRule} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <FaClipboardList className="mr-3 text-xs" /> Bonus Rules
                    </li>
                    <Link to={"/profile/stack"} onClick={handleListItemClick}>
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaCoins className="mr-3 text-xs" /> Stake Settings
                      </li>
                    </Link>

                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleListItemClick}>
                      <FaChartLine className="mr-3 text-xs" /> Profit & Loss
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleListItemClick}>
                      <FaClipboardList className="mr-3 text-xs" /> Unsettled Bets
                    </li>
                    <Link to={"/profile/password"} onClick={handleListItemClick}>
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaKey className="mr-3 text-xs" /> Change Password
                      </li>
                    </Link>
                  </ul>
                  <div
                    className="bg-orange-500 text-white text-center py-2 font-bold cursor-pointer rounded-b-md hover:bg-orange-600 flex items-center justify-center space-x-2 select-none"
                    onClick={handleListItemClick}
                  >
                    <FaSignOutAlt />
                    <span>SIGN OUT</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signup">
                <button className="bg-black cursor-pointer text-white border border-[#B1002E] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#1a1a1a]">
                  SIGNUP
                </button>
              </Link>
              <button
                onClick={handleLoginClick}
                className="bg-black cursor-pointer text-white border border-[#B1002E] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#1a1a1a]"
              >
                LOGIN
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
