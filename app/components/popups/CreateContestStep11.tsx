"use client";
import React, { useState } from "react";

interface Step11Props {
  handleSubmit: () => void;
}

const CreateContestStep11: React.FC<Step11Props> = ({ handleSubmit }) => {
  const [discoverability, setDiscoverability] = useState("Invite Only");
  const [chat, setChat] = useState("On");
  const [weightedScore, setWeightedScore] = useState("On");
  const [bestPick, setBestPick] = useState("On");
  const [bestPickWeek, setBestPickWeek] = useState("Week 4");
  const [againstSpread, setAgainstSpread] = useState("Off");
  const [pickDeadline, setPickDeadline] = useState("Start of Each Game");
  const [individualGames, setIndividualGames] = useState("Exclude");
  const [picksPerGame, setPicksPerGame] = useState("All Games");

  return (
    <>
      <h2 className="text-2xl text-center font-semibold mb-4">
        Advance Settings
      </h2>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-full"></div>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Discoverability */}
        <div>
          <label className="block text-left text-lg font-semibold mb-2">
            Discoverability
          </label>
          <select
            value={discoverability}
            onChange={(e) => setDiscoverability(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md"
          >
            <option>Invite Only</option>
            <option>Public</option>
          </select>
        </div>

        {/* Chat */}
        <div>
          <label className="block text-left text-lg font-semibold mb-2">
            Chat
          </label>
          <select
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md"
          >
            <option>On</option>
            <option>Off</option>
          </select>
        </div>

        {/* Weighted Score */}
        <div>
          <label className="block text-left text-lg font-semibold mb-2">
            Weighted Score
          </label>
          <select
            value={weightedScore}
            onChange={(e) => setWeightedScore(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md"
          >
            <option>On</option>
            <option>Off</option>
          </select>
        </div>

        {/* Best Pick */}
        <div>
          <label className="block text-left text-lg font-semibold mb-2">
            Best Pick
          </label>
          <select
            value={bestPick}
            onChange={(e) => setBestPick(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md"
          >
            <option>On</option>
            <option>Off</option>
          </select>
        </div>

        {/* Best Pick Week */}
        <div>
          <label className="block text-left text-lg font-semibold mb-2">
            Best Pick Week
          </label>
          <select
            value={bestPickWeek}
            onChange={(e) => setBestPickWeek(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md"
          >
            <option>Week 4</option>
            <option>Week 5</option>
            <option>Week 6</option>
            {/* Add more weeks as necessary */}
          </select>
        </div>

        {/* Against the Spread */}
        <div>
          <label className="block text-left text-lg font-semibold mb-2">
            Against the Spread
          </label>
          <select
            value={againstSpread}
            onChange={(e) => setAgainstSpread(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md"
          >
            <option>On</option>
            <option>Off</option>
          </select>
        </div>

        {/* Pick Deadline */}
        <div>
          <label className="block text-left text-lg font-semibold mb-2">
            Pick Deadline
          </label>
          <select
            value={pickDeadline}
            onChange={(e) => setPickDeadline(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md"
          >
            <option>Start of Each Game</option>
            <option>End of Each Game</option>
          </select>
        </div>

        {/* Individual Games */}
        <div>
          <label className="block text-left text-lg font-semibold mb-2">
            Individual Games
          </label>
          <select
            value={individualGames}
            onChange={(e) => setIndividualGames(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md"
          >
            <option>Include</option>
            <option>Exclude</option>
          </select>
        </div>

        {/* Picks per Game */}
        <div>
          <label className="block text-left text-lg font-semibold mb-2">
            Picks per Games
          </label>
          <select
            value={picksPerGame}
            onChange={(e) => setPicksPerGame(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md"
          >
            <option>All Games</option>
            <option>Selected Games</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="w-full py-3 bg-[#FF4747] text-black rounded-lg hover:bg-red-300"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
};

export default CreateContestStep11;
