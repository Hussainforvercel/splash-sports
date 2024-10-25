import React from "react";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#E6E6E6] p-4 border-b border-gray-300 space-y-4 md:space-y-0">
      {/* Left Section: User Info */}
      <div className="flex items-center space-x-4">
        <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl">
          B
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold">bidemirazzaq</h3>
          <p className="text-gray-500">abdurrazzaqabdulmuhsin7@gmail.com</p>
        </div>
      </div>

      {/* Right Section: Balance and Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-bold text-black">Withdrawable Balance</p>
          <p className="text-lg font-bold text-black">$100</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-bold text-black">Credits</p>
          <p className="text-lg font-bold text-black">$0</p>
        </div>
        <div className="flex space-x-2 md:space-x-4">
          <button className="bg-red-500 text-white py-2 px-4 rounded-sm hover:bg-red-600 transition w-full md:w-auto">
            Withdraw
          </button>
          <button className="bg-red-500 text-white py-2 px-5 rounded-sm hover:bg-red-600 transition w-full md:w-auto">
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
