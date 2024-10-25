"use client";
import React from "react";

interface Step9Props {
  nextStep: () => void;
}

const CreateContestStep9: React.FC<Step9Props> = ({ nextStep }) => {
  // Example data for prize distribution
  const prizeDistribution = [
    { position: "1st", percentage: "55%", payout: "$495" },
    { position: "2nd", percentage: "20%", payout: "$180" },
    { position: "3rd", percentage: "12.5%", payout: "$112.50" },
    { position: "4-5th", percentage: "8.75%", payout: "$56.25" },
  ];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Create a Contest</h2>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-full"></div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Payout Format</h3>

      {/* Prize Distribution Table */}
      <div className="overflow-x-auto">
        <table className="table-auto mx-auto w-full mb-6 border-collapse border-t border-gray-300">
          <thead>
            <tr>
              <th className="text-left  pl-4 py-2">Prize Position</th>
              <th className="text-center py-2 pr-5 md:pr-28">Percentage</th>
              <th className="text-right pr-4 py-2">Payout</th>
            </tr>
          </thead>
          <tbody>
            {prizeDistribution.map((prize, index) => (
              <tr key={index}>
                <td className="py-2  pl-10 border-t border-gray-300 text-left">
                  {prize.position}
                </td>
                <td className="py-2 border-t pr-8 md:pr-28 border-gray-300 text-center">
                  {prize.percentage}
                </td>
                <td className="py-2 border-t pr-5 border-gray-300 text-right">
                  {prize.payout}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Next Button */}
      <button
        className="w-full py-3 bg-[#FF4747] text-black rounded-lg hover:bg-red-300"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  );
};

export default CreateContestStep9;
