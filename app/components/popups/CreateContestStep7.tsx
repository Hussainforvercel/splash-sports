"use client";
import React, { useState } from "react";

interface Step7Props {
  maxEntries: string;
  setMaxEntries: (entry: string) => void;
  nextStep: () => void;
}

const CreateContestStep7: React.FC<Step7Props> = ({
  maxEntries,
  setMaxEntries,
  nextStep,
}) => {
  const options = ["Single Entry", "2 Entry Max", "3 Entry Max"];

  const handleEntrySelection = (entry: string) => {
    setMaxEntries(entry);
  };

  return (
    <div className="overflow-y-auto h-screen md:h-auto p-4">
      <h2 className="text-2xl text-center font-semibold mb-4">
        Create a Contest
      </h2>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-[90%]"></div>
      </div>

      <h3 className="text-lg  mb-2 text-center md:text-left">
        Set the maximum entries per user
      </h3>
      <p className="text-gray-500 mb-6 text-center md:text-left">
        Select how many entries each user can make.
      </p>

      {/* Entry Selection Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-36">
        {options.map((option) => (
          <button
            key={option}
            className={`border-2 rounded-md p-4 flex items-center justify-center text-lg  ${
              maxEntries === option ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => handleEntrySelection(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg text-lg  ${
          maxEntries ? "hover:bg-red-300" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!maxEntries} // Disable the button if no option is selected
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  );
};

export default CreateContestStep7;
