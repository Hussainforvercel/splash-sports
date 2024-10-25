"use client";

import Image from "next/image";
import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";

// Navbar component
const Navbar: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearchBar = () => setIsSearchBarVisible(!isSearchBarVisible);

  return (
    <>
      <nav className="bg-[#2D2D2D] text-white px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center space-x-16">
          {/* Logo */}
          <a
            className="md:text-3xl font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            Splash Sports
          </a>

          {/* Navigation Links (Visible on Desktop) */}
          {isLoggedIn && (
            <div className="hidden md:flex md:text-xl space-x-8">
              <span
                onClick={() => router.push("/")}
                className={`${
                  pathname === "/" ? "text-red-500" : "hover:text-gray-300"
                } transition-colors duration-200 cursor-pointer`}
              >
                Home
              </span>
              <span
                onClick={() => router.push("/contest_Lobby")}
                className={`${
                  pathname === "/contest_Lobby"
                    ? "text-red-500"
                    : "hover:text-gray-300"
                } transition-colors duration-200 cursor-pointer`}
              >
                Contest Lobby
              </span>
              <span
                onClick={() => router.push("/entries_active")}
                className={`${
                  pathname === "/entries"
                    ? "text-red-500"
                    : "hover:text-gray-300"
                } transition-colors duration-200 cursor-pointer`}
              >
                Entries
              </span>
              <span
                onClick={() => router.push("/mychannel")}
                className={`${
                  pathname === "/mychannel"
                    ? "text-red-500"
                    : "hover:text-gray-300"
                } transition-colors duration-200 cursor-pointer`}
              >
                My Channel
              </span>
            </div>
          )}
        </div>

        {/* Right Section - Icons, Profile, and Deposit Button */}
        <div className="flex items-center space-x-4 md:space-x-8">
          {isLoggedIn && (
            <>
              <button className="text-white" onClick={toggleSearchBar}>
                <Image
                  src="/icons/Vector_(43).png"
                  alt="Search Icon"
                  width={24}
                  height={24}
                />
              </button>
              <button className="text-white">
                <Image
                  src="/icons/carbon_notification.png"
                  alt="Notification Icon"
                  width={30}
                  height={30}
                />
              </button>
            </>
          )}

          {isLoggedIn ? (
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div
                    className="bg-red-500 w-10 h-10 flex mr-5 cursor-pointer items-center justify-center rounded-full text-white font-bold"
                    onClick={toggleProfileMenu}
                  >
                    B
                  </div>
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-96 bg-white text-black rounded-lg shadow-lg z-10">
                      <div className="p-4 border-b flex items-center">
                        <Link href="/profile">
                          <div className="bg-red-500 w-10 h-10 flex mr-3 cursor-pointer items-center justify-center rounded-full text-white font-bold">
                            B
                          </div>
                        </Link>
                        <div>
                          <p className="font-semibold">bidemirazzaq</p>
                          <p className="text-sm text-gray-600">
                            abdurrazzaqabdulmuhsin7@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="p-2 px-8">
                        <a
                          href="#"
                          className="block py-2 text-gray-800 font-semibold hover:bg-gray-200"
                        >
                          Create a Contest
                        </a>
                        <a
                          href="#"
                          className="block py-2 border-b font-semibold text-gray-800 hover:bg-gray-200"
                        >
                          My Channel
                        </a>
                        <a
                          href="#"
                          className="block py-2 text-gray-800 font-semibold hover:bg-gray-200"
                        >
                          Deposit
                        </a>
                        <a
                          href="#"
                          className="block py-2 text-gray-800 font-semibold hover:bg-gray-200"
                        >
                          Withdraw
                        </a>
                        <a
                          href="#"
                          className="block py-2 border-b font-semibold text-gray-800 hover:bg-gray-200"
                        >
                          Refer a Friend
                        </a>
                        <a
                          href="#"
                          className="block py-2 text-gray-800 font-semibold hover:bg-gray-200"
                        >
                          My Splash Account
                        </a>
                        <a
                          href="#"
                          className="block py-2 text-gray-800 font-semibold hover:bg-gray-200"
                        >
                          Sign Out
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="border-l px-4">
                  <p className="text-red-500 text-sm text-right font-semibold">
                    $100
                  </p>
                  <p className="text-sm">Deposit</p>
                </div>
              </div>
              <button
                onClick={() => router.push("/deposit")}
                className="bg-red-500 px-9 py-3 rounded-sm hover:bg-red-600 transition text-white font-semibold"
              >
                Deposit
              </button>
            </div>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="hidden md:flex items-center bg-red-500 px-9 py-3 rounded-sm hover:bg-red-600 transition text-white font-semibold"
            >
              Login
            </button>
          )}
          <button onClick={toggleMobileMenu} className="md:hidden text-white">
            {isMobileMenuOpen ? (
              <IoMdClose className="w-8 h-8" />
            ) : (
              <IoMdMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        {isSearchBarVisible && (
          <div className="absolute top-full left-0 w-full bg-white p-4 z-20 flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full md:w-1/2 p-2 rounded-md bg-[#2D2D2D] text-white outline-none"
            />
          </div>
        )}

        {isLoggedIn && isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full h-screen bg-[#2D2D2D] p-4 z-10 space-y-4">
            <span
              onClick={() => router.push("/")}
              className="block text-red-500 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={() => router.push("/contest_Lobby")}
              className="block hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              Contest Lobby
            </span>
            <span
              onClick={() => router.push("/entries_active")}
              className="block hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              Entries
            </span>
            <span
              onClick={() => router.push("/mychannel")}
              className="block hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              My Channel
            </span>
            <button
              onClick={() => router.push("/deposit")}
              className="bg-red-500 w-full py-3 rounded-md text-lg mt-4"
            >
              Deposit
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;