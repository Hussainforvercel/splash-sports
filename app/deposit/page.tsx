"use client";
import { useState } from "react";
import { RiPaypalLine } from "react-icons/ri";

type PaymentMethod = "paypal" | "skrill" | null;

export default function Deposit() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
  const [isConfirmed, setIsConfirmed] = useState(false); // New state to handle conditional rendering

  const selectMethod = (method: PaymentMethod) => {
    setSelectedMethod(method);
  };

  const handleContinue = () => {
    if (selectedMethod) {
      setIsConfirmed(true); // Change state to show the confirmation page
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#E6E6E6]">
      {isConfirmed ? (
        // Render the Deposit Confirmation View
        <div className="bg-[#E6E6E6] rounded-lg space-y-10 mt-44 p-6 w-full max-w-8xl ">
          {/* Current Balance */}
          <div className="flex justify-between items-center bg-gray-100 p-4 w-full max-w-8xl rounded-lg mb-4">
            <span className="text-gray-600">Current Balance</span>
            <span className="text-2xl font-semibold">$100.00</span>
          </div>

          {/* Deposit Input */}
          <input
            type="text"
            value="$50.00"
            readOnly
            className="w-full bg-gray-100 p-4 text-2xl text-center rounded-lg mb-4 border border-gray-300"
          />

          {/* Information Text */}
          <p className="text-center text-gray-600 mb-4">
            You will be redirected to {selectedMethod} to complete your deposit
          </p>

          {/* Deposit Button */}
          <button className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
            Deposit $50
          </button>
        </div>
      ) : (
        // Render the Payment Method Selection View
        <div className=" rounded-lg p-8 w-full max-w-8xl">
          <h1 className="text-2xl font-semibold mb-2 text-center">Deposit</h1>
          <p className="text-gray-600 text-center mb-6">
            Select your Deposit method
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Paypal Button */}
            <div
              onClick={() => selectMethod("paypal")}
              className={`flex flex-col items-center justify-center px-6 py-3 border rounded-lg cursor-pointer ${
                selectedMethod === "paypal"
                  ? "border-red-300 bg-red-300"
                  : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              <RiPaypalLine className="text-2xl mb-2" />
              <span className="font-medium text-gray-700">Paypal</span>
            </div>

            {/* Skrill Button */}
            <div
              onClick={() => selectMethod("skrill")}
              className={`flex flex-col items-center justify-center px-6 py-3 border rounded-lg cursor-pointer ${
                selectedMethod === "skrill"
                  ? "border-red-300 bg-red-300"
                  : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              <img
                src="/icons/arcticons_skrill.png"
                alt="Skrill"
                className="w-8 h-8 mb-3"
              />
              <span className="font-medium text-gray-700">Skrill</span>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className={`w-full py-3 text-white font-semibold rounded-lg transition ${
              selectedMethod
                ? "bg-red-400 hover:bg-red-400"
                : "bg-red-300 cursor-not-allowed"
            }`}
            disabled={!selectedMethod}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
