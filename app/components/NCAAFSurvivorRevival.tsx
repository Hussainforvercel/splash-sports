import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function NCAAFSurvivorRevival() {
  const items = [
    {
      id: 1,
      title: "Splash X RotoGrinders $10K NFL Survivor Revival",
      entries: "511 / 556",
      entryFee: "$20",
      prizes: "$10,008",
      daysLeft: "2d 6h",
      imageUrl: "/359FDS.png",
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
      username: "@DB730",
      lockTime: "Locks: Sun 6:00 PM",
      status: "Survivor",
    },
    {
      id: 1,
      title: "Splash X RotoGrinders $10K NFL Survivor Revival",
      entries: "511 / 556",
      entryFee: "$20",
      prizes: "$10,008",
      daysLeft: "2d 6h",
      imageUrl: "/359FDS.png",
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
      username: "@DB730",
      lockTime: "Locks: Sun 6:00 PM",
      status: "Survivor",
    },
    {
      id: 1,
      title: "Splash X RotoGrinders $10K NFL Survivor Revival",
      entries: "511 / 556",
      entryFee: "$20",
      prizes: "$10,008",
      daysLeft: "2d 6h",
      imageUrl: "/359FDS.png",
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
      username: "@DB730",
      lockTime: "Locks: Sun 6:00 PM",
      status: "Survivor",
    },
    {
      id: 1,
      title: "Splash X RotoGrinders $10K NFL Survivor Revival",
      entries: "511 / 556",
      entryFee: "$20",
      prizes: "$10,008",
      daysLeft: "2d 6h",
      imageUrl: "/359FDS.png",
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
      username: "@DB730",
      lockTime: "Locks: Sun 6:00 PM",
      status: "Survivor",
    },
    // Add more items as needed
  ];

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center px-6 md:px-10 mb-4">
        <h2 className="md:text-2xl text-md font-bold text-center md:text-left">
          NCAAF Survivor Revival
        </h2>
        <button className="text-sm md:text-base  text-[#5299D0] ">
          View All
        </button>
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent className="flex w-full pl-2 md:pl-5">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="flex-none w-full md:w-1/2 lg:w-1/3 p-2"
              >
                <div className="p-2">
                  {/* Wrap the Card in a Link */}
                  <Link href={"/game_details"}>
                    <Card className="shadow-lg rounded-lg overflow-hidden cursor-pointer">
                      <div className="relative">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-28 sm:h-40 object-cover rounded-t-lg" // Decreased height
                        />
                        <div className="absolute md:-mt-2 -mt-8 sm:top-32 left-3 bg-gray-800 text-white text-sm md:px-4 px-2 py-1 rounded-full">
                          {item.daysLeft}
                        </div>
                        <div className="absolute top-3 right-3 text-white">
                          <button className="text-white">
                            <HiOutlineDotsVertical className="text-white" />
                          </button>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="flex items-center mb-3">
                          <img
                            src={item.logoUrl}
                            alt="Logo"
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3"
                          />
                          <div className="whitespace-nowrap overflow-hidden truncate">
                            <h3 className="text-md sm:text-lg font-bold">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 flex items-center">
                              {item.username} • {item.lockTime} •{" "}
                              <span className="bg-gray-800 text-white text-xs sm:text-sm px-4  ml-2 rounded-full">
                                {item.status}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
                          <div
                            className="h-2 bg-red-600 rounded-full"
                            style={{ width: `${(511 / 556) * 100}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-sm sm:text-base mt-4">
                          <div className="text-center">
                            <span className="font-bold">{item.entries}</span>
                            <p className="text-gray-500 text-xs sm:text-md">
                              Entries
                            </p>
                          </div>
                          <div className="text-center">
                            <span className="font-bold">{item.entryFee}</span>
                            <p className="text-gray-500 text-xs sm:text-md">
                              Entry
                            </p>
                          </div>
                          <div className="text-center">
                            <span className="font-bold">{item.prizes}</span>
                            <p className="text-gray-500 text-xs sm:text-md flex items-center">
                              <img
                                src="/icons/google.png"
                                alt="prizes icon"
                                className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                              />
                              Prizes
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
