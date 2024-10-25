"use client";
import React from "react";

interface Step3Props {
  selectedWeeks: string[];
  toggleWeekSelection: (week: string) => void;
  nextStep: () => void;
}

const CreateContestStep3: React.FC<Step3Props> = ({
  selectedWeeks,
  toggleWeekSelection,
  nextStep,
}) => {
  return (
    <>
      <h2 className="text-2xl text-center font-semibold mb-4">
        Create a Contest
      </h2>

      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="bg-red-500 h-full rounded-full w-3/4"></div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Set your Schedule</h3>
      <p className="text-gray-500 mb-6">
        Select the weeks to include in your contest.
      </p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <button
          className={`border-2 rounded-md p-4 flex items-center justify-start ${
            selectedWeeks.includes("All Weeks")
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onClick={() => toggleWeekSelection("All Weeks")}
        >
          All Weeks
        </button>

        {[
          { week: "Week 4", date: "Oct 1, 2024" },
          { week: "Week 5", date: "Oct 8, 2024" },
          { week: "Week 6", date: "Oct 16, 2024" },
          { week: "Week 7", date: "Oct 22, 2024" },
          { week: "Week 8", date: "Oct 29, 2024" },
          { week: "Week 9", date: "Nov 5, 2024" },
          { week: "Week 10", date: "Nov 12, 2024" },
          { week: "Week 11", date: "Nov 19, 2024" },
          { week: "Week 12", date: "Nov 26, 2024" },
          { week: "Week 13", date: "Dec 3, 2024" },
          { week: "Week 14", date: "Dec 10, 2024" },
          { week: "Week 15", date: "Dec 17, 2024" },
          { week: "Week 16", date: "Dec 24, 2024" },
          { week: "Week 17", date: "Dec 29, 2024" },
        ].map((weekItem) => (
          <button
            key={weekItem.week}
            className={`border-2 rounded-md p-4 flex flex-col items-center justify-start ${
              selectedWeeks.includes(weekItem.week)
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onClick={() => toggleWeekSelection(weekItem.week)}
          >
            <span>{weekItem.week}</span>
            <span className="text-sm text-gray-500">{weekItem.date}</span>
          </button>
        ))}
      </div>

      {/* <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg ${
          selectedWeeks.length > 0
            ? "hover:bg-red-300"
            : "opacity-50 cursor-not-allowed"
        }`}
        disabled={selectedWeeks.length === 0}
      >
        Next
      </button> */}

      <button
        className={`w-full py-3 bg-[#FF4747] text-black rounded-lg ${
          selectedWeeks.length > 0
            ? "hover:bg-red-300"
            : "opacity-50 cursor-not-allowed"
        }`}
        disabled={selectedWeeks.length === 0}
        onClick={nextStep} // This will work now
      >
        Next
      </button>
    </>
  );
};

export default CreateContestStep3;
