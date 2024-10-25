"use client";
import React, { useState } from "react";

interface Step10Props {
  contestTitle: string;
  setContestTitle: (title: string) => void;
  contestDescription: string;
  setContestDescription: (description: string) => void;
  nextStep: () => void;
}

const CreateContestStep10: React.FC<Step10Props> = ({
  contestTitle,
  setContestTitle,
  contestDescription,
  setContestDescription,
  nextStep,
}) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContestTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContestDescription(e.target.value);
  };

  return (
    <>
      <h2 className="text-2xl text-center font-semibold mb-4">
        Finalize your Contest
      </h2>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-full"></div>
      </div>

      {/* Contest Title */}
      <label className="block text-left text-lg font-semibold mb-2">
        Contest title <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={contestTitle}
        onChange={handleTitleChange}
        className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md"
        placeholder="Enter contest title"
        required
      />

      {/* Contest Description */}
      <label className="block text-left text-lg font-semibold mb-2">
        Contest Description
      </label>
      <textarea
        value={contestDescription}
        onChange={handleDescriptionChange}
        className="w-full p-3 mb-6 border-2 border-gray-300 rounded-md"
        placeholder="Enter contest description"
        rows={4}
      />

      {/* Next Button */}
      <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg ${
          contestTitle ? "hover:bg-red-300" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!contestTitle} // Disable the button if no contest title
        onClick={nextStep}
      >
        Next
      </button>
    </>
  );
};

export default CreateContestStep10;
