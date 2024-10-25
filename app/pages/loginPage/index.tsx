"use client";
import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

// Define the type for the props, especially for the onLogin function
interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
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
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-red-300 focus:outline-none"
          />
          <p className="text-xs text-black mt-4">
            Please use your account email. For security purposes, you can no
            longer use your username to <br /> log in.
          </p>
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

        <div className="text-right mb-6">
          <a href="#" className="text-sm text-red-500 hover:text-red-600">
            Forget Password?
          </a>
        </div>

        <button
          onClick={onLogin}
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
