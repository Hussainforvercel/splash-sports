import React from "react";

// Define the type for each card's data
interface GameCardData {
  imageSrc: string;
  eventTitle: string;
  username: string;
  lockTime: string;
  survivorTag: string;
  mySurvivor: string;
  enteredAmount: number;
  survivors: string;
}

const GameCardList: React.FC = () => {
  // Array of card data with type definition
  const gameCardsData: GameCardData[] = [
    {
      imageSrc: "/260304_RG_BadgeAvatar_2024.png",
      eventTitle: "Splash X RotoGrinders $10K NFL Survivor Review ...",
      username: "DB730",
      lockTime: "Locks: Sun 6:00 PM",
      survivorTag: "Survivor",
      mySurvivor: "0/1",
      enteredAmount: 100,
      survivors: "728/1111",
    },
    {
      imageSrc: "/260304_RG_BadgeAvatar_2024.png",
      eventTitle: "Splash X RotoGrinders $10K NFL Survivor Review ...",
      username: "User123",
      lockTime: "Locks: Mon 8:00 PM",
      survivorTag: "Survivor",
      mySurvivor: "1/1",
      enteredAmount: 200,
      survivors: "500/1000",
    },
    // Add more card data as needed
  ];

  // The GameCard component with props typing
  const GameCard: React.FC<GameCardData> = ({
    imageSrc,
    eventTitle,
    username,
    lockTime,
    survivorTag,
    mySurvivor,
    enteredAmount,
    survivors,
  }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Left section with image */}
          <div className="flex items-center mb-4  md:mb-0 md:mr-4">
            <img
              src={imageSrc}
              alt="Event logo"
              className="h-12 w-12 -mt-16 md:mt-0 rounded-full mr-4"
            />

            {/* Middle section with title, user details, time, and tag */}
            <div className="flex-grow">
              <h3 className="font-semibold text-lg text-gray-800">
                {eventTitle}
              </h3>
              <div className="text-sm text-gray-600 flex items-center flex-wrap">
                <span>@{username}</span>
                <span className="mx-2">•</span>
                <span>{lockTime}</span>
                <span className="bg-gray-900 text-white text-xs md:ml-5 font-semibold py-1 px-2 rounded mt-2 inline-block">
                  {survivorTag}
                </span>
              </div>
            </div>
          </div>

          {/* Right section with stats */}
          <div className="flex justify-between w-full md:w-auto flex-wrap text-left md:text-right">
            {/* My Survivor */}
            <div className="text-center md:text-right ml-0 md:ml-4 w-1/2 md:w-auto mb-2 md:mb-0">
              <div className="text-sm md:text-lg font-bold text-black">
                {mySurvivor}
              </div>
              <div className="text-sm md:text-lg font-bold text-black">
                My Survivor
              </div>
            </div>

            {/* Entered Amount */}
            <div className="text-left md:text-right ml-0 md:ml-4 w-1/2 md:w-auto mb-2 md:mb-0">
              <div className="text-sm  md:text-lg font-bold text-black">
                ${enteredAmount}
              </div>
              <div className="text-sm md:text-lg font-bold text-black">
                Entered
              </div>
            </div>

            {/* Survivors */}
            <div className="text-center md:text-right ml-0 md:ml-4 w-1/2 md:w-auto">
              <div className="text-sm md:text-lg font-bold text-black">
                {survivors}
              </div>
              <div className="text-sm md:text-lg font-bold text-black">
                Survivors
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {gameCardsData.map((card, index) => (
        <GameCard
          key={index}
          imageSrc={card.imageSrc}
          eventTitle={card.eventTitle}
          username={card.username}
          lockTime={card.lockTime}
          survivorTag={card.survivorTag}
          mySurvivor={card.mySurvivor}
          enteredAmount={card.enteredAmount}
          survivors={card.survivors}
        />
      ))}
    </div>
  );
};

export default GameCardList;
