"use client";
import WeekSelector from "@/app/components/pickbar";
import React, { useState } from "react";

// Define types for Match and Team
type Team = {
  name: string;
  winProb: string;
  imageUrl: string;
};

type Match = {
  date: string;
  time: string;
  teams: Team[];
};

export default function MatchCard() {
  const [selectedPicks, setSelectedPicks] = useState<
    {
      matchIndex: number;
      name: string;
      winProb: string;
      imageUrl: string;
    }[]
  >([]); // State to store selected picks
  const maxPicks = 2; // Limit of picks

  const matches: Match[] = [
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    {
      date: "Sat, Sep 28",
      time: "5:00 PM",
      teams: [
        { name: "Kentucky", winProb: "12.2%", imageUrl: "/shirt.png" },
        { name: "Ole Miss", winProb: "87.8%", imageUrl: "/shirt.png" },
      ],
    },
    // Add more match data as necessary...
  ];

  // Handler for selecting a pick
  const handlePick = (matchIndex: number, team: Team) => {
    if (selectedPicks.length >= maxPicks) return;
    setSelectedPicks((prevPicks) => [...prevPicks, { matchIndex, ...team }]);
  };

  return (
    <div className="relative bg-gray-300">
      <WeekSelector />

      {/* Progress bar and picks container (absolute positioning for overlap) */}
      {selectedPicks.length > 0 && (
        <div className="absolute inset-x-0 top-0 z-10 mt-[450px] flex flex-col sm:flex-row sm:items-center bg-white p-4 space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Progress Bar on the left */}
          <div className="w-full sm:w-1/4">
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-[#FF4747] rounded-full"
                style={{
                  width: `${(selectedPicks.length / maxPicks) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Circles (representing picks) in the center */}
          <div className="flex-grow flex justify-center space-x-4">
            {selectedPicks.map((pick, index) => (
              <div
                key={index}
                className="w-10 h-10 border-2 border-dashed border-black rounded-full md:ml-36 flex justify-center items-center"
              >
                <img src={pick.imageUrl} alt="Shirt" className="w-6 h-6" />
              </div>
            ))}
            {Array.from({ length: maxPicks - selectedPicks.length }).map(
              (_, index) => (
                <div
                  key={index}
                  className="w-10 h-10 border-2 border-dashed rounded-full flex justify-center items-center"
                ></div>
              )
            )}
          </div>

          {/* "Sign Up" Button on the right */}
          {selectedPicks.length === maxPicks && (
            <div className="flex-grow flex justify-end">
              <button className="bg-[#FF4747] text-white md:px-6 md:py-2 px-20 py-2 rounded-md">
                Sign Up to make entries
              </button>
            </div>
          )}
        </div>
      )}

      {/* Matches (cards) */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 m-6">
        {matches.map((match, matchIndex) => (
          <div key={matchIndex} className="bg-white rounded-lg shadow-md p-4">
            {/* Header - Date and Preview */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 text-sm">
                {match.date} • {match.time}
              </p>
              <a href="#" className="text-red-500 text-sm hover:underline">
                Preview
              </a>
            </div>

            {/* Teams */}
            {match.teams.map((team, teamIndex) => (
              <div
                key={teamIndex}
                className="flex justify-between items-center border border-gray-300 rounded-lg p-3 mb-3"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={team.imageUrl}
                    alt={`${team.name} jersey`}
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="font-semibold">{team.name}</p>
                    <p className="text-sm text-gray-500">
                      Win Prob: {team.winProb}
                    </p>
                  </div>
                </div>

                {/* Radio Button */}
                <div>
                  <input
                    type="radio"
                    name={`match-${matchIndex}`}
                    className="form-radio h-5 w-5 text-red-500"
                    onChange={() => handlePick(matchIndex, team)}
                    disabled={
                      !!selectedPicks.find(
                        (pick) => pick.matchIndex === matchIndex
                      ) || selectedPicks.length >= maxPicks
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
