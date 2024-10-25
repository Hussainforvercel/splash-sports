"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { IoKeyOutline } from "react-icons/io5";
import { RiGameLine } from "react-icons/ri";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";

// Define the type for the props
interface SettingItemProps {
  title: string;
  description: string;
  Icon: React.ElementType; // Type for the Icon component
}

const SettingItem: React.FC<SettingItemProps> = ({
  title,
  description,
  Icon,
}) => {
  // Set the initial state type as boolean
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-t border-[#2D2D2D]">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <Icon className="text-3xl text-gray-600" />{" "}
          {/* Icon size increased */}
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
        </div>
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          {/* Content inside accordion goes here */}
          <p>Settings content for {title}</p>
        </div>
      )}
    </div>
  );
};

const SettingsAccordion: React.FC = () => {
  return (
    <div className="border border-[#2D2D2D] rounded-md my-4">
      <SettingItem
        title="User Avatar"
        description="Update your user avatar"
        Icon={CgProfile} // Icon for User Avatar
      />
      <SettingItem
        title="Transaction History"
        description="View and Manage your transaction History"
        Icon={GoHistory} // Icon for Transaction History
      />
      <SettingItem
        title="Login and Account Settings"
        description="Manage your account settings"
        Icon={IoKeyOutline} // Icon for Login and Account Settings
      />
      <SettingItem
        title="Responsible Gaming"
        description="Set your limits and learn about responsible gaming"
        Icon={RiGameLine} // Icon for Responsible Gaming
      />
      <SettingItem
        title="Tax Information"
        description="Information about your taxes"
        Icon={HiOutlineReceiptPercent} // Icon for Tax Information
      />
      <SettingItem
        title="Communication Settings"
        description="Manage your communication settings"
        Icon={CiMail} // Icon for Communication Settings
      />
      <SettingItem
        title="FAQs and Support"
        description="Get more information about Splash Sports"
        Icon={FaHeadset} // Icon for FAQs and Support
      />
    </div>
  );
};

export default SettingsAccordion;
