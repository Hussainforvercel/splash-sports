"use client";
import React, { useState } from "react";
import { RiBankLine, RiPaypalLine } from "react-icons/ri";
import { IoLogoVenmo } from "react-icons/io5";
import { TbCreditCard } from "react-icons/tb";
import { FaRegFileAlt } from "react-icons/fa";
import Navbar from "../components/navbar";

const WithdrawOptions: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>(""); // Store selected method
  const [showWithdrawPage, setShowWithdrawPage] = useState<boolean>(false); // Store whether to show withdraw page
  const [inputValue, setInputValue] = useState("$50.00");

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update state as the input changes
  };
  const handleContinue = () => {
    if (selectedMethod) {
      setShowWithdrawPage(true); // Show the withdraw summary page
    }
  };

  // Conditionally render either the withdrawal options or the withdraw page
  if (showWithdrawPage) {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="flex items-center justify-center min-h-screen bg-[#E6E6E6] p-4">
          <div className=" rounded-lg p-8 w-full max-w-8xl ">
            <h1 className="text-2xl font-semibold mb-2 text-center">
              Withdraw
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Withdrawal method: {selectedMethod}
            </p>

            {/* Withdrawable Balance */}
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
              <input
                type="text"
                value="Withdrawable Balance"
                readOnly
                className="text-gray-600 bg-transparent border-none focus:outline-none w-auto"
              />
              <input
                type="text"
                value="$1080.00"
                readOnly
                className="text-2xl font-semibold text-right bg-transparent border-none focus:outline-none w-full md:w-auto"
              />
            </div>

            {/* Withdrawal Input */}
            <input
              type="text"
              value={inputValue} // Bind state to the value
              onChange={handleChange} // Update state on every keystroke
              className="w-full bg-gray-100 p-4 text-2xl text-center rounded-lg mb-6 border border-gray-300"
            />

            {/* Summary Section */}
            <div className="border-2 border-black  p-4 rounded-lg mb-6 w-full max-w-8xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Withdrawal amount</span>
                <span className="text-lg text-left">$50.00</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Service fee</span>
                <span className="text-lg">-$0.00</span>
              </div>
              <div className="flex justify-between items-center mb-2 font-semibold">
                <span className="text-gray-900">Transfer amount</span>
                <span className="text-lg">$50.00</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Remaining balance</span>
                <span>-$0.00</span>
              </div>
            </div>

            {/* Continue Button */}
            <button className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-[#E6E6E6] flex justify-center items-center p-6">
        <div className=" rounded-lg p-8 w-full max-w-8xl">
          <h2 className="text-2xl text-center font-semibold mb-2">Withdraw</h2>
          <p className="text-center text-gray-600 mb-6">
            Select your withdrawal method
          </p>

          {/* Withdrawal Method Options */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {/* Online Banking */}
            <button
              className={`p-6 bg-white rounded-lg flex flex-col items-center justify-center text-center border-2 ${
                selectedMethod === "Online Banking"
                  ? "bg-red-400 hover:bg-red-400"
                  : "bg-red-300 cursor-not-allowed"
              }`}
              onClick={() => handleSelectMethod("Online Banking")}
            >
              <div className="flex flex-col items-center">
                <RiBankLine className="text-2xl mb-2" />
                <p className="text-sm">Online Banking</p>
              </div>
            </button>

            {/* Paypal */}
            <button
              className={`p-6 bg-white rounded-lg  flex flex-col items-center justify-center text-center border-2 ${
                selectedMethod === "Paypal"
                  ? "border-red-500"
                  : "border-transparent"
              }`}
              onClick={() => handleSelectMethod("Paypal")}
            >
              <div className="flex flex-col items-center">
                <RiPaypalLine className="text-2xl mb-2" />
                <p className="text-sm">Paypal</p>
              </div>
            </button>

            {/* Venmo */}
            <button
              className={`p-6 bg-white rounded-lg  flex flex-col items-center justify-center text-center border-2 ${
                selectedMethod === "Venmo"
                  ? "border-red-500"
                  : "border-transparent"
              }`}
              onClick={() => handleSelectMethod("Venmo")}
            >
              <div className="flex flex-col items-center">
                <IoLogoVenmo className="text-2xl mb-2" />
                <p className="text-sm">Venmo</p>
              </div>
            </button>

            {/* Skrill */}
            <button
              className={`p-6 bg-white rounded-lg  flex flex-col items-center justify-center text-center border-2 ${
                selectedMethod === "Skrill"
                  ? "border-red-500"
                  : "border-transparent"
              }`}
              onClick={() => handleSelectMethod("Skrill")}
            >
              <div className="flex flex-col items-center">
                <RiPaypalLine className="text-2xl mb-2" />
                <p className="text-sm">Skrill</p>
              </div>
            </button>
          </div>

          {/* Other Options */}
          <h3 className="text-xl text-center font-semibold mb-4">
            Other Options
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Check */}
            <button
              className={`p-6 bg-white rounded-lg  flex flex-col items-center justify-center text-center border-2 ${
                selectedMethod === "Check"
                  ? "border-red-500"
                  : "border-transparent"
              }`}
              onClick={() => handleSelectMethod("Check")}
            >
              <div className="flex flex-col items-center">
                <FaRegFileAlt className="text-2xl mb-2" />
                <p className="text-sm">Check</p>
              </div>
            </button>

            {/* Debit Card */}
            <button
              className={`p-6 bg-white rounded-lg flex flex-col items-center justify-center text-center border-2 ${
                selectedMethod === "Debit Card"
                  ? "border-red-500"
                  : "border-transparent"
              }`}
              onClick={() => handleSelectMethod("Debit Card")}
            >
              <div className="flex flex-col items-center">
                <TbCreditCard className="text-2xl mb-2" />
                <p className="text-sm">Debit card</p>
              </div>
            </button>
          </div>

          {/* Terms and Fees */}
          <div className="text-sm text-gray-500 mb-6">
            <p>1. Withdrawal via checks are subject to a $3 service fee</p>
            <p>
              2. Withdrawals via debit card will include a 2.8% service fee.
              This service fee will be deducted from the withdrawal amount you
              enter
            </p>
          </div>

          {/* Continue Button */}
          <button
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              selectedMethod
                ? "bg-red-500 hover:bg-red-400"
                : "bg-red-400 cursor-not-allowed"
            }`}
            disabled={!selectedMethod}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawOptions;
