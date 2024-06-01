import React from "react";
export default function Navbar({ data }) {
  return (
    <div className="flex justify-between items-center bg-orange-500 p-4 shadow-md w-full">
      <h1 className="text-white text-2xl font-bold">Orange</h1>
      <div className="flex items-center space-x-4">
        <span className="text-white text-lg">Favorites</span>
        <span className="bg-white text-orange-500 font-bold rounded-full w-6 h-6 flex items-center justify-center">
          {data.filter((item) => item.added).length}
        </span>
      </div>
    </div>
  );
}
