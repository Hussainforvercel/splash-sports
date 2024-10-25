"use client";
import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 md:p-10 w-full max-w-2xl">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
          Create an Account
        </h1>

        {/* Handle Input */}
        <div className="mb-4">
          <input
            id="handle"
            type="text"
            placeholder="Handle"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring focus:ring-red-300 focus:outline-none"
          />
        </div>

        {/* Full Name Input */}
        <div className="mb-4">
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring focus:ring-red-300 focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring focus:ring-red-300 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring focus:ring-red-300 focus:outline-none"
          />
          <div
            className="absolute top-3 right-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <IoEyeOutline className="w-5 h-5 text-gray-500" />
            ) : (
              <IoEyeOffOutline className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>

        {/* Referral Code Input (Optional) */}
        <div className="mb-4">
          <input
            id="referral"
            type="text"
            placeholder="Referral Code (optional)"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring focus:ring-red-300 focus:outline-none"
          />
        </div>

        {/* Information Text */}
        <p className="text-xs text-gray-500 mb-4 text-center">
          You and your referrer will receive rewards after you enter a $10+
          contest and it starts.
        </p>

        {/* Play Now Button */}
        <button className="w-full bg-red-500 text-white py-3 rounded-md text-lg hover:bg-red-600 transition-colors duration-300">
          Play Now
        </button>

        {/* Terms Text */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          Clicking "Play Now" confirms you are age 18+ (19+ in AL & 21+ in MA,
          IA, LA, AZ) and agree to our
          <a href="#" className="text-red-500 underline">
            {" "}
            Terms & Privacy Policy
          </a>
          . You'll also get offers and messages from the Splash Sports
          companies. Find out where Splash Sports is currently available.
        </p>
      </div>
    </div>
  );
}
