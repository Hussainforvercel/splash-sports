"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoInformationCircleOutline } from "react-icons/io5";

export function Hero() {
  const [activeIndex, setActiveIndex] = React.useState(0); // State to track active slide
  const totalSlides = 3; // Total number of slides

  // Array of background gradients for each slide
  const backgrounds = [
    "linear-gradient(90deg, #5DAFED 0%, #356487 100%)", // First slide
    "linear-gradient(90deg, #2C3E50 0%, #3B5998 100%)", // Second slide
    "linear-gradient(90deg, #333333 0%, #4f4f4f 100%)", // Third slide
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center w-full p-6 md:p-10">
      <Carousel
        className="w-full max-w-none rounded-3xl overflow-hidden p-4 md:p-6 relative"
        // Dynamically set background based on activeIndex
        style={{
          background: backgrounds[activeIndex],
        }}
      >
        <CarouselContent>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-wrap items-center justify-between">
                {/* Left side content */}
                <div className="text-white space-y-4 max-w-full md:max-w-md md:pl-10">
                  <h2 className="text-xl md:text-4xl lg:text-4xl font-bold whitespace-nowrap">
                    KELLY & MURRAY $50K CFB SURVIVOR <br /> BY KELLYINVEGAS
                  </h2>
                  <div className="flex flex-wrap space-x-6">
                    <div className="border-r pr-6">
                      <p className="text-base md:text-lg font-semibold">
                        318/556
                      </p>
                      <p className="text-xs md:text-sm opacity-80">
                        Entries (0/16)
                      </p>
                    </div>
                    <div className="border-r pr-6">
                      <p className="text-base md:text-lg font-semibold">$100</p>
                      <p className="text-xs md:text-sm opacity-80">Entry</p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold">
                        $50,040
                      </p>
                      <p className="text-xs md:text-sm opacity-80">Prizes</p>
                    </div>
                  </div>

                  {/* Flex container for icon and button text */}
                  <div className="flex items-center space-x-2 mt-6 md:mt-10">
                    <button className="bg-red-500 text-white px-3 md:px-8 py-2 md:py-4 rounded-lg">
                      Play for $100
                    </button>

                    {/* Flex container for icon and button text */}
                    <div className="flex items-center space-x-2 ml-4">
                      <div className="flex items-center space-x-2">
                        <IoInformationCircleOutline className="w-6 h-6 md:w-8 md:h-8 text-red-500 cursor-pointer" />
                        <span className="text-red-500 text-sm md:text-lg font-semibold">
                          Visit contest detail
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <p className="mt-4 text-xs md:text-sm bg-[#FF4747] px-10 opacity-80">
                    1d 6h
                  </p> */}
                  <button className="mt-4 text-xs md:text-sm  bg-[#FF4747]  opacity-60 md:px-5 md:py-1 md:rounded-2xl">
                    1d 6h
                  </button>
                </div>
                {/* Right side image */}
                <div className="flex-shrink-0 mt-6 md:mt-0 md:mr-16 w-full md:w-auto text-center md:text-right">
                  <img
                    src="/hero/heero.png"
                    alt="Kelly & Murray Survivor"
                    className="w-full max-w-2xl md:max-w-xl lg:max-w-2xl h-auto mx-auto md:mx-0"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black"
        />
        <CarouselNext
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black"
        />
        {/* Pagination indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === activeIndex ? "bg-white" : "bg-gray-400"
              } cursor-pointer`}
              onClick={() => setActiveIndex(idx)} // Allow clicking on indicators to change the active slide
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
