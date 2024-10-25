"use client";
import React, { useState } from "react";

interface Step8Props {
  payoutFormat: string;
  setPayoutFormat: (format: string) => void;
  nextStep: () => void;
}

const CreateContestStep8: React.FC<Step8Props> = ({
  payoutFormat,
  setPayoutFormat,
  nextStep,
}) => {
  const payoutOptions = [
    "Winner Takes All",
    "Pays Top 3",
    "Pays Top 5",
    "Pays Top 10",
    "Pays Top 25",
    "Pays Top 50",
  ];

  const handlePayoutSelection = (format: string) => {
    setPayoutFormat(format);
  };

  return (
    <>
      <h2 className="text-2xl text-center font-semibold mb-4">
        Create a Contest
      </h2>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-[95%]"></div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Payout Format</h3>
      <p className="text-gray-500 mb-6">
        Select the number of winners. If your private contest doesn’t fill and
        you have more payouts than entries, your contest will run as a free
        contest and entry fees will be returned, as described in these
        guidelines.
      </p>

      {/* Payout Format Options */}
      <div className="grid grid-cols-3 gap-10 mb-6">
        {payoutOptions.map((option) => (
          <button
            key={option}
            className={`border-2 rounded-md p-4 flex items-center justify-center ${
              payoutFormat === option ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => handlePayoutSelection(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg ${
          payoutFormat ? "hover:bg-red-300" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!payoutFormat} // Disable button if no option is selected
        onClick={nextStep}
      >
        Next
      </button>
    </>
  );
};

export default CreateContestStep8;
