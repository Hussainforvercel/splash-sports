"use client";
import React from "react";

interface Step2Props {
  selectedContestType: string;
  setSelectedContestType: (contestType: string) => void;
  nextStep: () => void;
}

const CreateContestStep2: React.FC<Step2Props> = ({
  selectedContestType,
  setSelectedContestType,
  nextStep,
}) => {
  return (
    <>
      <h2 className="text-2xl text-center font-semibold mb-4">
        Create a Contest
      </h2>

      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-2/4"></div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Select a Contest Type</h3>
      <p className="text-gray-500 mb-6">
        Select a contest type for your contest.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start ${
            selectedContestType === "PickEm"
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedContestType("PickEm")}
        >
          Pick'Em
        </button>
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start ${
            selectedContestType === "PickEmConfidence"
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedContestType("PickEmConfidence")}
        >
          Pick'Em: Confidence
        </button>
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start ${
            selectedContestType === "TiersFantasyPoints"
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedContestType("TiersFantasyPoints")}
        >
          Tiers: Fantasy Points
        </button>
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start ${
            selectedContestType === "OneAndDoneFantasyPoints"
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedContestType("OneAndDoneFantasyPoints")}
        >
          One & Done: Fantasy Points
        </button>
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start ${
            selectedContestType === "Survivor"
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedContestType("Survivor")}
        >
          Survivor
        </button>
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start ${
            selectedContestType === "OneAndDoneTouchdowns"
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedContestType("OneAndDoneTouchdowns")}
        >
          One & Done: Touchdowns
        </button>
      </div>

      <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg ${
          selectedContestType
            ? "hover:bg-red-300"
            : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!selectedContestType}
        onClick={nextStep}
      >
        Next
      </button>
    </>
  );
};

export default CreateContestStep2;
