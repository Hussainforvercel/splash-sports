import React from "react";
import ProfileHeader from "./profile_header";
import SettingsAccordion from "./SettingsAccordion";

const AccountSettingsPage = () => {
  return (
    <div className="max-w-8xl mx-auto p-4 bg-[#E6E6E6]">
      {/* Profile Header */}
      <ProfileHeader />

      {/* Accordion Settings */}
      <SettingsAccordion />
    </div>
  );
};

export default AccountSettingsPage;
