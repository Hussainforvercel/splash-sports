"use client";
import React, { useState } from "react";
import CreateContestStep1 from "../components/popups/CreateContestStep1";
import CreateContestStep2 from "../components/popups/CreateContestStep2";
import CreateContestStep3 from "../components/popups/CreateContestStep3";
import CreateContestStep4 from "../components/popups/CreateContestStep4";
import CreateContestStep5 from "../components/popups/CreateContestStep5";
import CreateContestStep6 from "../components/popups/CreateContestStep6";
import CreateContestStep7 from "../components/popups/CreateContestStep7";
import CreateContestStep8 from "../components/popups/CreateContestStep8";
import CreateContestStep9 from "../components/popups/CreateContestStep9";
import CreateContestStep10 from "../components/popups/CreateContestStep10";
import CreateContestStep11 from "../components/popups/CreateContestStep11";

const MyChannel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Track the current step
  const [selectedLeague, setSelectedLeague] = useState(""); // Track selected league
  const [selectedContestType, setSelectedContestType] = useState(""); // Track selected contest type
  const [selectedWeeks, setSelectedWeeks] = useState<string[]>([]); // Track selected weeks
  const [gamesGroups, setGamesGroups] = useState(""); // Track games groups
  const [entryFee, setEntryFee] = useState("");
  const [anticipatedEntries, setAnticipatedEntries] = useState(""); // Track anticipated entries
  const [maxEntries, setMaxEntries] = useState(""); // Track maximum entries per user
  const [payoutFormat, setPayoutFormat] = useState(""); // Track the payout format selection
  const [contestTitle, setContestTitle] = useState(""); // Contest title state
  const [contestDescription, setContestDescription] = useState("");

  const handleSubmit = () => {
    // Handle form submission or API call here
    console.log("Settings submitted!");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1); // Reset step when closing the modal
    setSelectedLeague(""); // Reset selected league
    setSelectedContestType(""); // Reset selected contest type
    setSelectedWeeks([]); // Reset selected weeks
    setGamesGroups(""); // Reset games group
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1); // Go to the next step
  };

  const toggleWeekSelection = (week: string) => {
    if (selectedWeeks.includes(week)) {
      setSelectedWeeks((prev) => prev.filter((w) => w !== week));
    } else {
      setSelectedWeeks((prev) => [...prev, week]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Section - Profile Card */}
        <div className="bg-white rounded-xl md:h-1/3 md:mt-5 shadow-md w-full md:w-1/3 flex flex-col items-center">
          {/* Profile Background Image */}
          <div className="w-full rounded-lg  overflow-hidden bg-white">
            <div
              className="h-40 w-full bg-cover bg-center"
              style={{ backgroundImage: 'url("/ground.png")' }}
            />
            {/* Avatar, User Info, and Stats Row */}
            <div className="px-6 py-4 flex items-center justify-between w-full">
              {/* Avatar and User Info */}
              <div className="flex items-center">
                <div className="relative inline-block mr-4">
                  <div className="bg-red-500 text-white text-2xl font-bold rounded-full h-14 w-14 flex items-center justify-center border-4 border-white">
                    B
                  </div>
                  <div className="mt-5">
                    <h2 className="font-semibold text-lg text-center md:text-left">
                      Bidemi Abdurrazzaq
                    </h2>
                    <p className="text-gray-500 text-sm text-center md:text-left">
                      @Bidemiabdurrazzaq
                    </p>
                  </div>
                </div>
              </div>
              {/* Stats */}
              <div className="flex flex-col sm:flex-row space-x-6 text-sm text-gray-600 text-center md:text-left">
                <div className="text-right">
                  <p className="font-bold">0</p>
                  <p>Entrants</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">0</p>
                  <p>Followers</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">1</p>
                  <p>Following</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between px-5  md:space-x-2 py-4 w-full">
              <button className="bg-gray-200 text-gray-700 py-2 px-4 sm:px-8 md:px-24 md:py-4 rounded-sm font-semibold hover:bg-gray-300 whitespace-nowrap">
                Edit
              </button>
              <button className="bg-gray-200 text-gray-700 py-2 px-4 sm:px-8 md:px-20 md:py-4 rounded-sm font-semibold hover:bg-gray-300 whitespace-nowrap">
                Copy Link
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Contest Content */}
        <div className="w-full md:w-2/3 rounded-xl p-6">
          <button
            className="w-full px-8 py-4 bg-black text-white rounded-lg mb-4 md:mb-2"
            onClick={openModal}
          >
            Create Contest
          </button>
          <div className="w-full rounded-xl p-6">
            <div className="flex justify-start items-center space-x-4 border-b md:p-5 border-black mb-6">
              <h3 className="text-xl font-semibold">Created</h3>
              <h3 className="text-xl font-semibold">Entered</h3>
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 text-white bg-black rounded-full font-semibold">
                Upcoming
              </button>
              <button className="px-4 py-2 text-black border border-gray-300 rounded-full">
                Live
              </button>
              <button className="px-4 py-2 text-black border border-gray-300 rounded-full">
                Recent
              </button>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
                <img
                  src="/260304_RG_BadgeAvatar_2024.png"
                  alt="Contest Logo"
                  className="w-12 h-12 mb-3 rounded-full"
                />
                <div className="flex flex-col">
                  <h4 className="font-semibold text-center sm:text-left">
                    Splash X RotoGrinders $10K NFL Survivor Revive
                  </h4>
                  <p className="text-sm text-gray-500 text-center sm:text-left">
                    @DB730 • Locks: 23:16:38 • Survivor
                  </p>
                </div>
                <button className="ml-auto text-gray-500">...</button>
              </div>

              <div className="mt-4">
                <div className="relative w-full bg-gray-200 rounded-full h-2">
                  <div className="absolute top-0 left-0 h-2 bg-red-500 rounded-full w-[85%]"></div>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  {/* Entries Section */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold">511 / 556</p>
                    <p className="text-gray-500">Entries</p>
                  </div>

                  {/* Entry Fee Section */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold">$20</p>
                    <p className="text-gray-500">Entry</p>
                  </div>

                  {/* Prizes Section with Google Icon */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">
                      <p className="font-bold text-black">$10,008</p>
                    </div>
                    <div className="flex">
                      <img
                        src="/icons/google-2.png"
                        alt="Google Icon"
                        className="h-4 w-4 mr-2"
                      />
                      <p className="text-gray-500">Prizes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Popup */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl relative">
                <button
                  className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  &times;
                </button>

                {step === 1 && (
                  <CreateContestStep1
                    selectedLeague={selectedLeague}
                    setSelectedLeague={setSelectedLeague}
                    nextStep={nextStep}
                  />
                )}

                {step === 2 && (
                  <CreateContestStep2
                    selectedContestType={selectedContestType}
                    setSelectedContestType={setSelectedContestType}
                    nextStep={nextStep}
                  />
                )}

                {step === 3 && (
                  <CreateContestStep3
                    selectedWeeks={selectedWeeks}
                    toggleWeekSelection={toggleWeekSelection}
                    nextStep={nextStep}
                  />
                )}

                {step === 4 && (
                  <CreateContestStep4
                    gamesGroups={gamesGroups}
                    setGamesGroups={setGamesGroups}
                    nextStep={nextStep}
                  />
                )}
                {step === 5 && (
                  <CreateContestStep5
                    entryFee={entryFee}
                    setEntryFee={setEntryFee}
                    nextStep={nextStep}
                  />
                )}
                {step === 6 && (
                  <CreateContestStep6
                    anticipatedEntries={anticipatedEntries}
                    setAnticipatedEntries={setAnticipatedEntries}
                    nextStep={nextStep}
                  />
                )}
                {step === 7 && (
                  <CreateContestStep7
                    maxEntries={maxEntries}
                    setMaxEntries={setMaxEntries}
                    nextStep={nextStep}
                  />
                )}

                {step === 8 && (
                  <CreateContestStep8
                    payoutFormat={payoutFormat}
                    setPayoutFormat={setPayoutFormat}
                    nextStep={nextStep}
                  />
                )}
                {step === 9 && <CreateContestStep9 nextStep={nextStep} />}
                {step === 10 && (
                  <CreateContestStep10
                    contestTitle={contestTitle}
                    setContestTitle={setContestTitle}
                    contestDescription={contestDescription}
                    setContestDescription={setContestDescription}
                    nextStep={nextStep}
                  />
                )}
                {step === 11 && (
                  <CreateContestStep11 handleSubmit={handleSubmit} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyChannel;
