"use client";
import GameCard from "@/app/components/GameCard";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import the icon

export default function AllEntries() {
  const [sortByOpen, setSortByOpen] = useState(false);
  const [gameTypeOpen, setGameTypeOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState(
    "Next slate starting soonest"
  );
  const [selectedGameType, setSelectedGameType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === "sortBy") {
      setSortByOpen(!sortByOpen);
      setGameTypeOpen(false);
      setStatusOpen(false);
    } else if (dropdown === "gameType") {
      setGameTypeOpen(!gameTypeOpen);
      setSortByOpen(false);
      setStatusOpen(false);
    } else if (dropdown === "status") {
      setStatusOpen(!statusOpen);
      setSortByOpen(false);
      setGameTypeOpen(false);
    }
  };

  const handleSortBySelection = (option: string) => {
    setSelectedSortBy(option);
    setSortByOpen(false);
  };

  const handleGameTypeSelection = (option: string) => {
    setSelectedGameType(option);
    setGameTypeOpen(false);
  };

  const handleStatusSelection = (option: string) => {
    setSelectedStatus(option);
    setStatusOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      {/* Sorting and Filtering */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-black py-4 lg:py-10 mb-4">
        <div className="flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto">
          {/* Sort By Dropdown */}
          <div className="relative w-full lg:w-auto">
            <button
              className="px-4 py-2 w-full lg:w-auto bg-gray-300 rounded-full focus:outline-none"
              onClick={() => toggleDropdown("sortBy")}
            >
              Sort By <FaChevronDown className="inline ml-2" />
            </button>
            {sortByOpen && (
              <div className="absolute left-0 mt-2 w-full lg:w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedSortBy === "Next slate starting soonest"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() =>
                    handleSortBySelection("Next slate starting soonest")
                  }
                >
                  Next slate starting soonest
                </a>
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedSortBy === "Recently entered"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleSortBySelection("Recently entered")}
                >
                  Recently entered
                </a>
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedSortBy === "Highest entry fee"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleSortBySelection("Highest entry fee")}
                >
                  Highest entry fee
                </a>
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedSortBy === "Lowest entry fee"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleSortBySelection("Lowest entry fee")}
                >
                  Lowest entry fee
                </a>
              </div>
            )}
          </div>

          {/* Game Type Dropdown */}
          <div className="relative w-full lg:w-auto">
            <button
              className="px-4 py-2 w-full lg:w-auto bg-gray-300 rounded-full focus:outline-none"
              onClick={() => toggleDropdown("gameType")}
            >
              Game Type <FaChevronDown className="inline ml-2" />
            </button>
            {gameTypeOpen && (
              <div className="absolute left-0 mt-2 w-full lg:w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedGameType === "All"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleGameTypeSelection("All")}
                >
                  All
                </a>
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedGameType === "Survivor"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleGameTypeSelection("Survivor")}
                >
                  Survivor
                </a>
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedGameType === "Pick'Em"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleGameTypeSelection("Pick'Em")}
                >
                  Pick'Em
                </a>
              </div>
            )}
          </div>

          {/* Status Dropdown */}
          <div className="relative w-full lg:w-auto">
            <button
              className="px-4 py-2 w-full lg:w-auto bg-gray-300 rounded-full focus:outline-none"
              onClick={() => toggleDropdown("status")}
            >
              Status <FaChevronDown className="inline ml-2" />
            </button>
            {statusOpen && (
              <div className="absolute left-0 mt-2 w-full lg:w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedStatus === "All"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleStatusSelection("All")}
                >
                  All
                </a>
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedStatus === "Missing Picks"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleStatusSelection("Missing Picks")}
                >
                  Missing Picks
                </a>
                <a
                  href="#"
                  className={`block px-4 py-2 ${
                    selectedStatus === "Not yet started"
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleStatusSelection("Not yet started")}
                >
                  Not yet started
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>
        <h2 className="font-bold text-lg mb-4">Sports</h2>
        <GameCard />
      </div>
    </div>
  );
}
