import React, { useState } from 'react';
import { FaCopy } from "react-icons/fa"
const Referral = () => {
  const referralLink = 'https://reddybook.live';
  const referralCode = 'cw2D5v';
  const [copied, setCopied] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="bg-[#e7ebf0] min-h-screen font-sans">

{/* Angled Referral Header */}
 <div className="bg-[#dde5e8]">
      <div className="relative h-[48px] my-2">
        <div className="absolute  top-0 left-0 h-full w-[220px] bg-[#c8102e] clip-ribbon text-white font-bold text-sm flex items-center pl-4">
          REFERRAL
        </div>
      </div>
    </div>

      {/* Referral Banner */}
      <div className="bg-[#C8102E] text-white text-center py-6">
        <h1 className="text-3xl font-bold mb-2">REFER AND EARN!</h1>
        <div className="flex justify-center mb-2">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-2xl mx-1">🌍</span>
          ))}
        </div>
        <p className="max-w-3xl mx-auto text-sm px-4">
          Keep your friends close and referral friends closer! Invite your friends and family to sign up using your personal referral code (mentioned below) and get 20% of each and every one of their deposits made thereafter!
        </p>
      </div>

      {/* Link Card */}
      <div className="bg-black text-white rounded-md max-w-3xl mx-auto mt-6 p-4 text-center">
        <p className="text-sm mb-2">
          Don’t wait, start making <span className="font-bold">HUGE PROFITS NOW!</span> Use my special code <span className="text-[#C8102E] font-bold">{referralCode}</span> to Sign-Up & Get a 20% Referral Bonus!
        </p>
        <p className="text-[#C8102E] text-lg font-semibold">{referralLink}</p>
      </div>

      {/* Copy Button for Link */}
      <div className="flex justify-center mt-3">
        <button
          onClick={() => handleCopy(referralLink)}
          className="bg-[#C8102E] cursor-pointer text-white rounded-full px-6 py-2 text-sm font-semibold flex items-center gap-2"
        >
         COPY <FaCopy size={24} />
        </button>
      </div>

      {/* Referral Code Display */}
      <div className="bg-black text-white rounded-md max-w-3xl mx-auto mt-6 p-4 text-center text-xl font-semibold">
        {referralCode}
      </div>

      {/* Copy Button for Code */}
      <div className="flex justify-center mt-3 mb-6">
        <button
          onClick={() => handleCopy(referralCode)}
          className="bg-[#C8102E] cursor-pointer text-white rounded-full px-6 py-2 text-sm font-semibold flex items-center gap-2"
        >
       COPY  <FaCopy size={24}  />
        </button>
      </div>

     
    </div>
  );
};

export default Referral
