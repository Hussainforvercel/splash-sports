"use client";
import React, { useState } from "react";

interface Step5Props {
  entryFee: string;
  setEntryFee: (fee: string) => void;
  nextStep: () => void;
}

const CreateContestStep5: React.FC<Step5Props> = ({
  entryFee,
  setEntryFee,
  nextStep,
}) => {
  const [customFee, setCustomFee] = useState(entryFee);

  const predefinedFees = ["5", "10", "25", "50", "100"];

  const handleFeeSelection = (fee: string) => {
    setEntryFee(fee);
    setCustomFee(fee); // Sync custom fee with selected fee
  };

  const handleCustomFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomFee(value);
    setEntryFee(value); // Update the custom fee value as the selected entry fee
  };

  return (
    <>
      <h2 className="text-2xl text-center font-semibold mb-4">
        Create a Contest
      </h2>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-3/4"></div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Set the entry fee</h3>
      <p className="text-gray-500 mb-6">
        Set the cost per entry for your contest.
      </p>

      {/* Predefined Entry Fee Buttons */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {predefinedFees.map((fee) => (
          <button
            key={fee}
            className={`border-2 rounded-md p-4 flex items-center justify-center ${
              customFee === fee ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => handleFeeSelection(fee)}
          >
            ${fee}
          </button>
        ))}
      </div>

      {/* Custom Entry Fee Input */}
      <h3 className="text-lg font-semibold mb-2">Set a Custom Entry Fee</h3>
      <input
        type="text"
        placeholder="5$"
        value={customFee}
        onChange={handleCustomFeeChange}
        className="border-2 rounded-md p-4 w-full mb-6"
      />

      {/* Next Button */}
      <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg ${
          customFee ? "hover:bg-red-300" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!customFee} // Disable button if no fee is set
        onClick={nextStep}
      >
        Next
      </button>
    </>
  );
};

export default CreateContestStep5;
