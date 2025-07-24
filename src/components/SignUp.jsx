import React from "react";
import { FaChevronDown } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#73021c] px-4">
      <div className="bg-[#1e1e1e] text-white w-full max-w-sm p-8 rounded-lg border-2 border-white">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl font-bold text-center text-[#FFCC00] leading-tight">
            REDDY
            <span className="text-xs align-super border border-[#FFCC00] rounded-full px-2 mx-1 text-[#FFCC00] font-extrabold">
              BOOK
            </span>
            <div className="text-right text-sm font-medium tracking-widest -mt-3">.CLUB</div>
          </h1>
        </div>

        {/* Phone input */}
        <div className="flex items-center border-b border-gray-400 mb-6 pb-1">
          <div className="bg-[#2d2d2d] px-3 py-2 flex items-center space-x-2 text-sm rounded-sm">
            <span role="img" aria-label="India Flag">🇮🇳</span>
            <span>+91</span>
            <FaChevronDown className="text-xs" />
          </div>
          <input
            type="text"
            placeholder="Mobile no"
            className="ml-4 w-full bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Password input */}
        <div className="mb-1 border-b border-gray-400">
          <input
            type="password"
            placeholder="Choose your password"
            className="w-full bg-transparent py-2 text-sm focus:outline-none"
          />
        </div>
        <p className="text-xs text-red-500 mt-1 mb-4">
          (Must be alphanumeric and more than 6 letters)
        </p>

        {/* Referral input */}
        <div className="mb-6 border-b border-gray-400">
          <input
            type="text"
            placeholder="Referral Code (Optional)"
            className="w-full bg-transparent py-2 text-sm focus:outline-none"
          />
        </div>

        {/* Info */}
        <p className="text-xs text-gray-300 mb-6">
          By continuing you will receive a one-time verification code to your phone number by SMS.
        </p>

        {/* Get OTP Button */}
        <button className="w-full bg-[#B1002E] hover:bg-[#900026] text-white py-3 rounded text-sm font-semibold transition">
          GET OTP
        </button>

        {/* Login link */}
        <p className="text-sm text-center mt-6">
          Already have account?{" "}
          <span className="text-[#B1002E] font-semibold cursor-pointer">LOG IN</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
