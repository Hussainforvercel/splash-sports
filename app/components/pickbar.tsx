"use client";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const weeks = [
  { week: "Week 5", dateRange: "Today Sep 28-29", isActive: true },
  { week: "Week 6", dateRange: "Oct 5-6", isActive: false },
  { week: "Week 7", dateRange: "Oct 12-13", isActive: false },
  { week: "Week 8", dateRange: "Oct 18-20", isActive: false },
  { week: "Week 9", dateRange: "Oct 25-27", isActive: false },
  { week: "Week 10", dateRange: "Nov 2-3", isActive: false },
  { week: "Week 11", dateRange: "Nov 9-10", isActive: false },
];

export default function WeekSelector() {
  return (
    <div className="bg-[#444444] ">
      <div className="flex items-center space-x-4 mb-4 bg-[#2D2D2D] p-6 rounded-lg">
        <button className="text-white">
          <Link href="/game_details">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
        </button>
        <h2 className="text-white text-lg font-bold">Make Picks</h2>
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent className="flex w-full pl-2 md:pl-5">
            {weeks.map((week, index) => (
              <CarouselItem
                key={index}
                className="flex-none  w-1/2 md:w-1/6 lg:w-1/7 p-2 md:px-7"
              >
                <div
                  className={`flex-shrink-0 w-full h-20 rounded-lg p-3 mb-2 text-center hover:border-2 hover:border-red-500 transition-all duration-300 ${
                    week.isActive
                      ? "bg-[#2D2D2D] border-2 border-red-500 text-white"
                      : "bg-[#2D2D2D]  text-white"
                  }`}
                >
                  <p className="font-bold">{week.week}</p>
                  <p className="text-sm md:pl-5 pl-3 pt-2">{week.dateRange}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
