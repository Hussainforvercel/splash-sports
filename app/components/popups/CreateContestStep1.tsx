"use client";
import React from "react";

interface Step1Props {
  selectedLeague: string;
  setSelectedLeague: (league: string) => void;
  nextStep: () => void;
}

const CreateContestStep1: React.FC<Step1Props> = ({
  selectedLeague,
  setSelectedLeague,
  nextStep,
}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Create a Contest</h2>

      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-1/4"></div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Select a league</h3>
      <p className="text-gray-500 mb-6">Select a league for your contest.</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start ${
            selectedLeague === "NFL" ? "border-red-500" : "border-gray-300"
          }`}
          onClick={() => setSelectedLeague("NFL")}
        >
          <span className="mr-2">🏈</span> NFL
        </button>
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start ${
            selectedLeague === "NBA" ? "border-red-500" : "border-gray-300"
          }`}
          onClick={() => setSelectedLeague("NBA")}
        >
          <span className="mr-2">🏀</span> NBA
        </button>
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start col-span-2 ${
            selectedLeague === "Other" ? "border-red-500" : "border-gray-300"
          }`}
          onClick={() => setSelectedLeague("Other")}
        >
          <span className="mr-2">⚽</span> Other
        </button>
      </div>

      <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg ${
          selectedLeague ? "hover:bg-red-300" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!selectedLeague}
        onClick={nextStep}
      >
        Next
      </button>
    </>
  );
};

export default CreateContestStep1;
