import { BiDotsVerticalRounded } from "react-icons/bi";
import LobbyBar from "../components/lobbybar";

const ContestTable = () => {
  const data = [
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 50,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },

    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 50,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },

    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 50,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },

    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 50,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },

    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 50,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },

    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 75,
      logoUrl: "/260304_RG_BadgeAvatar_2024.png",
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor  Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
    {
      contest: "Splash NFL $50K Survivor Revival (Week 5)",
      entries: "1954/5556",
      totalPrizes: "$250,020",
      entryDeadline: "Sun 6:00 PM",
      entryFee: "$50",
      progress: 35, // You can calculate this based on entries
      logoUrl: "/260304_RG_BadgeAvatar_2024.png", // Logo for each contest
    },
  ];

  return (
    <div>
      <LobbyBar />

      <div className="container md:px-5 mb-20">
        <table className="table-auto min-w-full  border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-100">
              <th className="text-left px-4 py-3 border border-gray-300">
                Contest
              </th>
              <th className="text-left px-4 py-3 border border-gray-300">
                Entries
              </th>
              <th className="text-left px-4 py-3 border border-gray-300">
                Details
              </th>
              <th className="text-left px-4 py-3 border border-gray-300">
                Total Prizes
              </th>
              <th className="text-left px-4 py-3 border border-gray-300">
                Entry Deadline
              </th>
              <th className="text-left px-4 py-3 border border-gray-300">
                Entry Fee
              </th>
              <th className="px-4 py-3 border border-gray-300"> Action</th>
              <th className="px-4 py-3 border border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border border-gray-300">
                {/* Contest with logo */}
                <td className="py-2 px-4 text-left  border-gray-300 flex items-center">
                  <img
                    src={item.logoUrl}
                    alt="Contest Logo"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{item.contest}</span>
                </td>

                {/* Entries with progress bar */}
                <td className="py-2 px-4 text-left border border-gray-300">
                  <div className="flex flex-col items-center">
                    <span className="mr-2">{item.entries}</span>
                    <div className="relative w-full h-2 bg-gray-300 rounded">
                      <div
                        className="absolute top-0 left-0 h-full bg-red-500 rounded"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>

                {/* Details (Football Icon) */}
                <td className="py-2 px-4 text-center border border-gray-300">
                  <img src="/icons/vector.png" className="md:pl-7" alt="" />
                </td>

                {/* Total Prizes with Dollar Icon */}
                <td className="py-2 px-4 text-left  border-gray-300 flex items-center justify-center">
                  <span>{item.totalPrizes}</span>
                  <img src="/icons/google.png" className="pl-2" alt="" />
                </td>

                {/* Entry Deadline */}
                <td className="py-2 px-4 text-center border border-gray-300">
                  {item.entryDeadline}
                </td>

                {/* Entry Fee */}
                <td className="py-2 px-4 text-center border border-gray-300">
                  {item.entryFee}
                </td>

                {/* Action (View Button and Dots Menu) */}
                <td className="py-2 px-4 text-left border border-gray-300">
                  <div className="flex justify-center items-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-8 rounded">
                      View
                    </button>
                  </div>
                </td>

                <td className="py-2 px-4 text-left border border-gray-300">
                  <div className="flex justify-center items-center">
                    <button className="ml-2 text-black">
                      <BiDotsVerticalRounded />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContestTable;
