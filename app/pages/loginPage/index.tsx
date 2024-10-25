"use client";

import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation"; // Import useRouter

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const router = useRouter(); // Initialize router
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
      router.push("/"); // Redirect to home page after login
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 md:p-10 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
          Log in
        </h1>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-red-300 focus:outline-none"
          />
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-red-300 focus:outline-none"
          />
          <div
            className="absolute top-10 right-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <IoEyeOutline className="w-5 h-5 text-gray-500" />
            ) : (
              <IoEyeOffOutline className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-red-500 text-white py-2 rounded-md text-lg hover:bg-red-600 transition-colors duration-300"
        >
          Log in
        </button>
        <div className="mt-6 text-center">
          <p className="text-lg text-black font-bold">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-red-500 font-bold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
