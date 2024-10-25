"use client";
import React from "react";
import { IoLinkOutline } from "react-icons/io5";
import Link from "next/link";

export default function GameDetails() {
  return (
    <div className="bg-white w-full mb-5">
      {/* Banner Image */}
      <div className="relative">
        <img
          src="/banner.png"
          alt="Banner Background"
          className="w-full object-cover h-56"
        />
        <div className="absolute top-16 mt-20 left-4 flex items-center">
          {/* Logo */}
          <img
            src="/roto.png"
            alt="RotoGrinders Logo"
            className="w-38 h-38 rounded-full"
          />
        </div>
      </div>

      {/* Contest Details */}
      <div className="mt-36 pl-6 flex flex-col md:flex-row md:items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">
          Splash X RotoGrinders $10K NFL Survivor Revival
        </h1>
      </div>

      {/* Details and Buttons */}
      <div className="mt-4 pl-6 flex flex-wrap items-center space-x-2 md:space-x-4">
        {/* Creator */}
        <div className="text-red-500 font-bold">DB730</div>
        <div className="text-gray-500">Creator</div>

        {/* Prizes */}
        <div className=" flex items-center space-x-2">
          <div className="text-red-500 font-bold">$10,008</div>
          <div className="text-gray-500 flex items-center">
            Prizes
            <img
              src="/icons/google.png"
              alt="G icon"
              className="ml-1 w-4 h-4"
            />
          </div>
        </div>

        {/* Entry Fee */}
        <div className="text-gray-700 font-bold">$20</div>
        <div className="text-gray-500">Entry</div>

        {/* Entries */}
        <div className="text-gray-700 font-bold">543 / 556</div>
        <div className="text-gray-500">Entries</div>

        {/* Date */}
        <div className="text-gray-700 font-bold">
          September 29, 2024 @ 06:00 PM
        </div>
        <div className="text-gray-500">Entries</div>
      </div>

      {/* Buttons */}
      <div className="mt-6 pl-6 flex space-x-4">
        <Link href="/game_detail_pick">
          <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition">
            Make Picks
          </button>
        </Link>
        <button className="border border-red-500 text-red-500 font-bold py-2 px-6 rounded-lg flex items-center space-x-2 hover:bg-red-50 transition">
          <IoLinkOutline className="w-5 h-5" />
          <span>Copy link</span>
        </button>
      </div>
    </div>
  );
}
