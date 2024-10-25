"use client";
import Login from "../pages/loginPage";
import React from "react";

function Page() {
  const handleLogin = () => {
    console.log("User logged in");
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default Page;
