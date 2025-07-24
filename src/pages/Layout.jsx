// import { useEffect, useState } from 'react'
// import HeroSection from '../components/HeroSection'
// import SidebarDropdown from '../components/SidebarDropdown'
// import OddsComponent from '../components/OddsComponent'
// import { Outlet, useLocation, useNavigate } from 'react-router-dom'

// import React from 'react'
// import Navbar from '../components/Navbar'
// import Login from '../Modal/Login'
// import BonusRule from '../Modal/BonusRule'

// const Layout = () => {
//     const [selectedSport, setSelectedSport] = useState('CRICKET');


//     //MOhit code 
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [showLogin, setShowLogin] = useState(false);
//     const [showBonusModal, setShowBonusModal] = useState(false);

//     const handleBonusOpen = () => setShowBonusModal(true);
//     const handleBonusClose = () => setShowBonusModal(false)

//     useEffect(() => {
//         const params = new URLSearchParams(location.search);
//         const shouldShowLogin = params.get("login") === "true";

//         if (shouldShowLogin) {
//             setShowLogin(true);

//             // Clean the URL after showing the modal
//             params.delete("login");
//             navigate({ pathname: "/", search: params.toString() }, { replace: true });
//         }
//     }, [location.search, navigate]);

//     return (
//         <>
//             <Navbar />


//             {showLogin &&
//                 (
//                     <>
//                         <div className="fixed inset-0 bg-black opacity-50 z-50"></div>{" "}
//                         <Login onClose={() => setShowLogin(false)} />
//                     </>
//                 )


//             }

//             {showBonusModal && (
//                 <>
//                     <div className="fixed inset-0 bg-black opacity-50 z-50"></div>{" "}
//                     <BonusRule closeModal={handleBonusClose} />
//                 </>
//             )}


//             <div className="flex flex-col relative">
//                 <HeroSection setSelectedSport={setSelectedSport} />

//                 <SidebarDropdown />
//                 <div className="odds-container lg:ml-72">
//                     {/* <OddsComponent />
//                     <OddsComponent /> */}
//                     <Outlet context={{ selectedSport }} />
//                 </div>
//             </div>
//         </>)
// }

// export default Layout



import { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import SidebarDropdown from '../components/SidebarDropdown'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../Modal/Login'
import BonusRule from '../Modal/BonusRule'

const Layout = () => {
  const [selectedSport, setSelectedSport] = useState('CRICKET');
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showBonusModal, setShowBonusModal] = useState(false);

  const handleBonusOpen = () => setShowBonusModal(true);
  const handleBonusClose = () => setShowBonusModal(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const shouldShowLogin = params.get("login") === "true";

    if (shouldShowLogin) {
      setShowLogin(true);
      params.delete("login");
      navigate({ pathname: "/", search: params.toString() }, { replace: true });
    }
  }, [location.search, navigate]);

  return (
    <>
      <div className="flex flex-col h-screen relative overflow-hidden">
        {/* Fixed Navbar at the very top */}
        <div className="hidden sm:block fixed top-0 left-0 right-0 z-40">
          <Navbar onBonusClick={handleBonusOpen} />
        </div>

        {/* Hero Section below navbar - full width */}
        <div className="w-full pt-0 sm:pt-16 "> {/* pt-16 to account for fixed navbar height */}
          <HeroSection setSelectedSport={setSelectedSport} />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden mt-0"> {/* mt-0 to remove any default margin */}
          {/* Fixed Sidebar */}
          <div className="hidden lg:block fixed top-28 h-[calc(100vh-7rem)] w-72 flex-shrink-0 z-30">
            <SidebarDropdown />
          </div>

          {/* Scrollable Content - offset for sidebar */}
          <div className="flex-1  overflow-y-auto lg:ml-72 mt-0  ">
            <Outlet context={{ selectedSport }} />
          </div>
        </div>
      </div>

      {/* Modals */}
      {showLogin && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
          <Login onClose={() => setShowLogin(false)} />
        </>
      )}

      {showBonusModal && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
          <BonusRule closeModal={handleBonusClose} />
        </>
      )}
    </>
  );
};

export default Layout;