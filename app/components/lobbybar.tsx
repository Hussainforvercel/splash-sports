"use client";
import React, { useState } from "react";
import { FaFootballBall, FaChevronDown } from "react-icons/fa";
import { IoGolfOutline } from "react-icons/io5";

const LobbyBar: React.FC = () => {
  const [showPayoutDropdown, setShowPayoutDropdown] = useState<boolean>(false);
  const [showEntryTypesDropdown, setShowEntryTypesDropdown] =
    useState<boolean>(false);
  const [showEntryFeeDropdown, setShowEntryFeeDropdown] =
    useState<boolean>(false);

  return (
    <div className="min-h-44 bg-gray-100 p-6 flex flex-col items-start">
      {/* Top Row with Icons */}
      <div className="flex justify-start space-x-8 mb-6 w-full">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-black text-white">
            <FaFootballBall size={24} />
          </div>
          <span className="text-sm text-gray-700">NFL</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-center items-center w-12 h-12 rounded-full text-gray-700">
            <IoGolfOutline size={30} />
          </div>
          <span className="text-sm text-gray-700">PGA</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-center items-center w-12 h-12 rounded-full text-gray-700">
            <FaFootballBall size={24} />
          </div>
          <span className="text-sm text-gray-700">NCAAF</span>
        </div>
      </div>

      {/* Middle Tab Navigation */}
      <div className="flex justify-between w-full max-w-8xl bg-white rounded-xl p-2 mb-6">
        <button className="px-4 py-2 text-red-500 font-semibold">All</button>
        <button className="px-4 py-2 text-gray-700">Survivor</button>
        <button className="px-4 py-2 text-gray-700">Pick'Em</button>
        <button className="px-4 py-2 text-gray-700">O&D</button>
        <button className="px-4 py-2 text-gray-700">Tiers</button>
      </div>

      {/* Bottom Filters (Fixed to display in one row and aligned left) */}
      <div className="flex justify-start space-x-4 w-full">
        <div className="relative">
          <button
            className="flex items-center bg-gray-200 text-gray-700 py-2 px-4 rounded-full"
            onClick={() => setShowPayoutDropdown(!showPayoutDropdown)}
          >
            All Payout Formats
            <FaChevronDown className="ml-2 text-gray-700" />
          </button>
          {showPayoutDropdown && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-48">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200">Payout Format 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">Payout Format 2</li>
                <li className="px-4 py-2 hover:bg-gray-200">Payout Format 3</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="flex items-center bg-gray-200 text-gray-700 py-2 px-4 rounded-full"
            onClick={() => setShowEntryTypesDropdown(!showEntryTypesDropdown)}
          >
            All Entry Types
            <FaChevronDown className="ml-2 text-gray-700" />
          </button>
          {showEntryTypesDropdown && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-48">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200">Entry Type 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">Entry Type 2</li>
                <li className="px-4 py-2 hover:bg-gray-200">Entry Type 3</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="flex items-center bg-gray-200 text-gray-700 py-2 px-4 rounded-full"
            onClick={() => setShowEntryFeeDropdown(!showEntryFeeDropdown)}
          >
            All Entry Fee
            <FaChevronDown className="ml-2 text-gray-700" />
          </button>
          {showEntryFeeDropdown && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-48">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200">Entry Fee 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">Entry Fee 2</li>
                <li className="px-4 py-2 hover:bg-gray-200">Entry Fee 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LobbyBar;
