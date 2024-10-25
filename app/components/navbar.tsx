"use client";

import Image from "next/image";
import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import nprogress CSS

// Configure NProgress
NProgress.configure({ showSpinner: false });

const Navbar: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  useEffect(() => {
    // Start nprogress on route change
    NProgress.start();
    // Stop nprogress when route change is complete
    NProgress.done();

    // Clean-up if route change is interrupted
    return () => {
      NProgress.done();
    };
  }, [pathname]); // Track `pathname` changes instead of `router.events`

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prevState) => !prevState);
  const toggleSearchBar = () => setIsSearchBarVisible(!isSearchBarVisible);

  return (
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
                pathname === "/entries" ? "text-red-500" : "hover:text-gray-300"
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
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div
                  className="bg-red-500 w-10 h-10 flex cursor-pointer items-center justify-center rounded-full text-white font-bold"
                  onClick={toggleProfileMenu}
                >
                  B
                </div>
                {isProfileMenuOpen && (
                  <div className="absolute left-1/5 transform -translate-x-1/2 mt-2 w-96 bg-white text-black rounded-lg shadow-lg z-10 md:right-0 md:left-auto md:transform-none">
                    <div className="p-4 border-b flex items-center">
                      <Link href="/profile" passHref>
                        <div
                          className="bg-red-500 w-10 h-10 flex mr-3 cursor-pointer items-center justify-center rounded-full text-white font-bold"
                          onClick={() => {
                            NProgress.start(); // Start loading indicator
                          }}
                        >
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
              <div className="border-l px-4 hidden md:block">
                <p className="text-red-500 text-sm text-right font-semibold">
                  $100
                </p>
                <p className="text-sm">Deposit</p>
              </div>
            </div>
            <button
              onClick={() => {
                NProgress.start();
                router.push("/deposit");
              }}
              className="bg-red-500 px-9 py-3 rounded-sm hover:bg-red-600 transition text-white font-semibold hidden md:block"
            >
              Deposit
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              NProgress.start();
              router.push("/login");
            }}
            className="hidden md:flex items-center bg-red-500 px-9 py-3 rounded-sm hover:bg-red-600 transition text-white font-semibold"
          >
            Login
          </button>
        )}
        {/* <button onClick={toggleMobileMenu} className="md:hidden text-white">
          {isMobileMenuOpen ? (
            <IoMdClose className="w-8 h-8" />
          ) : (
            <IoMdMenu className="w-8 h-8" />
          )}
        </button> */}
        <button
          onClick={toggleMobileMenu}
          className="text-white md:hidden  z-50 p-2"
        >
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

      {/* {isLoggedIn && isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#2D2D2D] p-4 z-10 space-y-4">
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
      )} */}
      {!isLoggedIn && isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-[#2D2D2D] p-4 z-10 space-y-4">
          <button
            onClick={() => {
              NProgress.start();
              router.push("/login");
            }}
            className="bg-red-500 px-9 py-3 rounded-sm hover:bg-red-600 transition text-white font-semibold"
          >
            Login
          </button>
        </div>
      )}

      {isLoggedIn && isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#2D2D2D] p-4 z-10 space-y-4">
          <span
            onClick={() => {
              NProgress.start();
              router.push("/");
              setIsMobileMenuOpen(false); // Close menu after navigating
            }}
            className="block text-red-500 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => {
              NProgress.start();
              router.push("/contest_Lobby");
              setIsMobileMenuOpen(false); // Close menu after navigating
            }}
            className="block hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            Contest Lobby
          </span>
          <span
            onClick={() => {
              NProgress.start();
              router.push("/entries_active");
              setIsMobileMenuOpen(false); // Close menu after navigating
            }}
            className="block hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            Entries
          </span>
          <span
            onClick={() => {
              NProgress.start();
              router.push("/mychannel");
              setIsMobileMenuOpen(false); // Close menu after navigating
            }}
            className="block hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            My Channel
          </span>
          <button
            onClick={() => {
              NProgress.start();
              router.push("/deposit");
              setIsMobileMenuOpen(false); // Close menu after navigating
            }}
            className="bg-red-500 w-full py-3 rounded-md text-lg mt-4"
          >
            Deposit
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
