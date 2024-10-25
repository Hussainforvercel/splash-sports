"use client";
import React from "react";

interface Step4Props {
  gamesGroups: string;
  setGamesGroups: (gameGroup: string) => void;
  nextStep: () => void;
}

const CreateContestStep4: React.FC<Step4Props> = ({
  gamesGroups,
  setGamesGroups,
  nextStep,
}) => {
  return (
    <>
      <h2 className="text-2xl text-center font-semibold mb-4">
        Create a Contest
      </h2>

      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full max-w-xl"></div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Select games</h3>
      <p className="text-gray-500 mb-6">
        Select the games or groups of games you want to include in your contest.
        You'll be able to make additional customizations on the final step, such
        as the number of picks made each week, the exclusion of individual
        games, and the pick deadline.
      </p>

      <div className="flex flex-col space-y-4 mb-6">
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start w-full ${
            gamesGroups === "Exclude early games"
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => setGamesGroups("Exclude early games")}
        >
          Exclude early games
        </button>
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start w-full ${
            gamesGroups === "Include early games"
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => setGamesGroups("Include early games")}
        >
          Include early games
        </button>
      </div>

      <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg ${
          gamesGroups ? "hover:bg-red-300" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!gamesGroups}
        onClick={nextStep}
      >
        Next
      </button>
    </>
  );
};

export default CreateContestStep4;
