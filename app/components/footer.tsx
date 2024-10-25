"use client";
import React from "react";
import Link from "next/link";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import nprogress CSS

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold md:pl-10">LOGO</h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
              <div>
                <h3 className="font-bold text-sm mb-6">RESPONSIBLE GAMING</h3>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Responsible Gaming Commitment
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Responsible Gaming Limits
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Responsible Gaming Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Self-Exclusion
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:pl-20">
                <h3 className="font-bold text-sm mb-6">SPLASH APPS</h3>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      iOS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Android
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-6">WHAT'S NEW</h3>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Brand Guidelines
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Commissioner Rewards
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Where Can I Play?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Game Rules
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-6">MY ACCOUNT</h3>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Deposit
                    </a>
                  </li>
                  <Link href="/withdraw" passHref>
                    <div
                      onClick={() => {
                        NProgress.start(); // Start loading indicator
                      }}
                    >
                      <li className="mb-4">Withdrawal</li>
                    </div>
                  </Link>

                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Transaction History
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Account Settings
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-6">COMPANY</h3>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Terms of Use
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-left text-white pl-10 text-sm mb-12">
            If you or someone you know has a gambling problem, help <br />
            is available. Call 1-800-GAMBLER
          </div>
        </div>
      </footer>

      <div className="text-left pl-10 pt-8 text-white bg-black h-24 text-lg">
        2024 Splash All Rights Reserved
      </div>
    </div>
  );
}
