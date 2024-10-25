// "use client";
// import React from "react";
// import { usePathname } from "next/navigation";
// import Navbar from "./navbar";

// export default function NavbarLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname(); // Get the current route

//   return (
//     <>
//       {/* Conditionally render Navbar based on pathname */}
//       {pathname !== "/game_detail_pick" && <Navbar />}
//       {children}
//     </>
//   );
// }
