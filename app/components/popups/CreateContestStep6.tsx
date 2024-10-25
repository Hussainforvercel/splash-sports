"use client";
import React, { useState } from "react";

interface Step6Props {
  anticipatedEntries: string;
  setAnticipatedEntries: (entries: string) => void;
  nextStep: () => void;
}

const CreateContestStep6: React.FC<Step6Props> = ({
  anticipatedEntries,
  setAnticipatedEntries,
  nextStep,
}) => {
  const [customEntries, setCustomEntries] = useState(anticipatedEntries);

  const predefinedEntries = [
    "H2H",
    "Up to 10",
    "Up to 25",
    "Up to 50",
    "Up to 100",
  ];

  const handleEntrySelection = (entries: string) => {
    setAnticipatedEntries(entries);
    setCustomEntries(""); // Reset custom input if predefined value is selected
  };

  const handleCustomEntryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomEntries(value);
    setAnticipatedEntries(value); // Update the anticipated entries with custom value
  };

  return (
    <div className="overflow-y-auto h-screen md:h-auto p-4">
      <h2 className="text-2xl text-center font-semibold mb-4">
        Create a Contest
      </h2>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-5/6"></div>
      </div>

      <h3 className="text-lg  mb-2 text-center md:text-left">
        Set the maximum amount of anticipated entries
      </h3>
      <p className="text-gray-500 mb-6 text-center md:text-left">
        This will determine the prize pot for your contest. We recommend
        estimating on the higher end. If you end up selecting an amount that is
        too high, your contest will just resize down based on the contest
        resizing guidelines.
      </p>

      {/* Predefined Entry Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {predefinedEntries.map((entry) => (
          <button
            key={entry}
            className={`border-2 rounded-md p-4 flex items-center justify-center text-lg ${
              anticipatedEntries === entry
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onClick={() => handleEntrySelection(entry)}
          >
            {entry}
          </button>
        ))}
        {/* Custom Entry Button */}
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-center text-lg  ${
            anticipatedEntries === customEntries
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => handleEntrySelection(customEntries || "Custom")}
        >
          Custom
        </button>
      </div>

      {/* Custom Entry Input */}
      {anticipatedEntries === "Custom" && (
        <input
          type="number"
          value={customEntries}
          onChange={handleCustomEntryChange}
          placeholder="Enter custom number"
          className="border-2 rounded-md p-4 w-full mb-6 text-lg"
        />
      )}

      {/* Next Button */}
      <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg text-lg  ${
          anticipatedEntries
            ? "hover:bg-red-300"
            : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!anticipatedEntries} // Disable the button if no entries are selected
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  );
};

export default CreateContestStep6;
