"use client";
import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CiFootball } from "react-icons/ci";
import { HiOutlineDatabase } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { IoMdCalendar } from "react-icons/io";
import { PiCalendarLight } from "react-icons/pi";
import { IoShieldOutline } from "react-icons/io5";

export default function ContestDetails() {
  // State for login status (default is false, meaning not logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Prize Payouts and About */}
        <div className="col-span-2 space-y-6">
          {/* My Entries Section - Visible only if logged in */}
          {isLoggedIn && (
            <div className="bg-white rounded-lg p-4 w-full max-w-3xl">
              <h2 className="text-lg font-bold">My Entries 0/0</h2>
              <div className="bg-gray-100 rounded-lg mt-4 p-4">
                <p className="text-gray-600">You don't have any entries</p>
              </div>
              <button className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600">
                Add Entries
              </button>
            </div>
          )}

          {/* Prize Payouts Section - Always Visible */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Prize Payouts</h2>
              <IoInformationCircleOutline className="w-6 h-6 text-gray-500 cursor-pointer" />
            </div>

            {/* Payout Details */}
            <div className="border-b border-[#2D2D2D] p-4 mb-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">1st</p>
                <p className="text-2xl font-bold">$10,008.00</p>
              </div>
            </div>

            {/* Guaranteed Info */}
            <div className="flex items-center space-x-2 mb-4">
              <p className="text-gray-500 text-sm font-semibold">Guaranteed</p>
              <div className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                G
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              This is a guaranteed contest. The payout amounts will not change
              if the contest does not fill.
            </p>

            {/* View Payout Details */}
            <div className="text-center">
              <p className="text-red-500 font-semibold cursor-pointer hover:underline">
                View payout details
              </p>
            </div>
          </div>

          {/* About this Contest Section - Card */}
          <div className="bg-white rounded-lg max-w-3xl shadow-lg p-6">
            <h2 className="text-lg font-bold">About this Contest</h2>
            {/* Description */}
            <p className="text-sm text-gray-500 mt-4">
              Entrants attempt to select the winner for 1 game per week.
              Entrants that select only winners will advance to the next slate.
              The entrant that makes it the furthest takes home the whole prize.
              If all remaining entrants are eliminated in the same slate, they
              will all be considered winners and will all split the prize.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Entrants are required to select 1 team per slate. Entrants will be
              prevented from selecting a team more than one time throughout the
              duration of the contest. If an entrant runs out of teams to pick,
              they will be unable to advance to the next slate.
            </p>

            {/* Contest Details */}
            <div className="mt-6 space-y-4 text-sm">
              {/* Sport */}
              <div className="flex justify-between items-center border-b border-black pb-2">
                <div className="flex items-center space-x-2">
                  <CiFootball className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Sport</span>
                </div>
                <span className="text-gray-500">Football</span>
              </div>

              {/* Contest Type */}
              <div className="flex justify-between items-center border-b border-black pb-2">
                <div className="flex items-center space-x-2">
                  <IoShieldOutline className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Contest Type</span>
                </div>
                <span className="text-gray-500">Survivor</span>
              </div>

              {/* Multi-Entry */}
              <div className="flex justify-between items-center border-b border-black pb-2">
                <div className="flex items-center space-x-2">
                  <HiOutlineDatabase className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Multi-Entry</span>
                </div>
                <span className="text-gray-500">Yes (16)</span>
              </div>

              {/* Creator */}
              <div className="flex justify-between items-center border-b border-black pb-2">
                <div className="flex items-center space-x-2">
                  <CgProfile className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Creator</span>
                </div>
                <span className="text-red-500">DB730</span>
              </div>

              {/* Slate */}
              <div className="flex justify-between items-center border-b border-black pb-2">
                <div className="flex items-center space-x-2">
                  <IoMdCalendar className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Slate</span>
                </div>
                <span className="text-gray-500">Week 4 - Week 18</span>
              </div>

              {/* Entry Deadline */}
              <div className="flex justify-between items-center border-b border-black pb-2">
                <div className="flex items-center space-x-2">
                  <PiCalendarLight className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Entry Deadline</span>
                </div>
                <span className="text-gray-500">Sun 9/29 @ 6:00 PM</span>
              </div>

              {/* Pick Deadline */}
              <div className="flex justify-between items-center border-b border-black pb-2">
                <div className="flex items-center space-x-2">
                  <PiCalendarLight className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Pick Deadline</span>
                </div>
                <span className="text-gray-500">Sun @ 6:00 PM for Week 4</span>
              </div>
            </div>

            {/* View All Games Link */}
            <p className="mt-6 text-red-500 text-sm cursor-pointer hover:underline">
              View all games
            </p>
          </div>

          {/* Rules Section */}
          <div className="bg-white rounded-lg max-w-3xl shadow-lg p-6">
            <h2 className="text-lg font-bold">Rules</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 list-none">
              <li className="border-b border-black py-2">
                Select only winning teams to advance to the next week.
              </li>
              <li className="border-b border-black py-2">
                Losses, ties, and mixed picks result in elimination from the
                contest.
              </li>
              <li className="border-b border-black py-2">
                If all remaining entries are eliminated in the same week, they
                will all split the prize.
              </li>
              <li className="border-b border-black py-2">
                If you run out of teams, you will be unable to advance.
              </li>
              <li className="border-b border-black py-2">
                If you miss any week by being unable to make a correct
                selection, you are eliminated.
              </li>
              <li className="border-b border-black py-2">
                If all remaining entries are unable to make a correct selection,
                all remaining entries will split the prize.
              </li>
              <li className="border-b border-black py-2">
                If all remaining entries run out of teams, the contest will
                conclude at the end of the slate, and the remaining entries will
                split the prize.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Signup Section */}
        <div className="space-y-6">
          {/* Signup Section - Hidden if logged in */}
          {!isLoggedIn && (
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-bold">New to Splash?</h2>
              <div className="mt-4">
                <button className="bg-red-500 text-white font-bold py-4 px-6 rounded-md mb-4 w-full hover:bg-red-600 transition">
                  Sign Up
                </button>
                <button className="border border-red-500 mb-4 text-red-500 font-bold py-4 px-6 rounded-md w-full mt-4 hover:bg-red-50 transition">
                  Log In
                </button>
                <p className="text-xs text-black mt-4 text-center">
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy, including Cookie Use.
                </p>
                <p className="text-xs text-black mt-4 text-center">
                  Click here to see which contest types are available in each
                  state.
                </p>
              </div>
            </div>
          )}

          {/* Entrants Section - Visible only if logged in */}
          {isLoggedIn && (
            <div className=" p-4 rounded-lg w-full max-w-3xl">
              <h2 className="text-lg font-bold">
                Entrants <span className="text-gray-500">(6)</span>
              </h2>

              <div className="mt-4 space-y-4">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {/* Avatar Circle */}
                    <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold">
                      B
                    </div>
                    {/* Entrant Name */}
                    <p className="font-semibold">Bidemi Abdurrazzaq</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
