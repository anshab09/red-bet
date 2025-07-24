


// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./pages/Layout.jsx";
// import BettingDashboard from "./components/BettingDashboard.jsx";
// import OddsComponent from "./components/OddsComponent.jsx";

// import Navbar from './components/Navbar';
// import SignUp from './components/SignUp';
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Referral from "./pages/Referral";
// import Bonus from "./pages/Bonus";
// import FootballOddsComponent from "./components/FootballOddsComponent.jsx";
// const App = () => {
//   const [selectedSport, setSelectedSport] = useState('CRICKET'); // default


//   return (
//     <>
//       <Routes>


//         <Route path="/" element={<Layout />} >

//           <Route path="/landing/:category" element={<OddsComponent />} />

//           <Route path="/matchdetails/:id" element={<BettingDashboard />} />
//           <Route path="/profile/:tab?" element={<Profile />} />
//           <Route path="/reffer-and-earn" element={<Referral />} />
//           <Route path="/bonus-list" element={<Bonus />} />


//         </Route>

//         {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
//         <Route path="/home" element={<Home />} />
//         <Route path="/signup" element={<SignUp />} />
//         {/* <Route path="/profile/:tab?" element={<Profile />} />
//         <Route path="/reffer-and-earn" element={<Referral />} />
//         <Route path="/bonus-list" element={<Bonus />} /> */}

//       </Routes>
//     </>
//   )
// };

// export default App;



import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import BettingDashboard from "./components/BettingDashboard.jsx";
import OddsComponent from "./components/OddsComponent.jsx";

import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Referral from "./pages/Referral";
import Bonus from "./pages/Bonus";
import FootballOddsComponent from "./components/FootballOddsComponent.jsx";

const App = () => {
  const [selectedSport, setSelectedSport] = useState('CRICKET'); // default

  return (
    <>
      <Routes>
        {/* Redirect root to /landing/home */}
        <Route path="/" element={<Navigate to="/landing/home" replace />} />

        <Route path="/" element={<Layout />}>
          <Route path="/landing/:category" element={<OddsComponent />} />
          <Route path="/matchdetails/:id" element={<BettingDashboard />} />
          <Route path="/profile/:tab?" element={<Profile />} />
          <Route path="/reffer-and-earn" element={<Referral />} />
          <Route path="/bonus-list" element={<Bonus />} />
        </Route>

        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
