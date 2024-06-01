import React, { useState } from "react";
import Data from "./components/Data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
const data = Data();
console.log(data);
export default function App() {
  const [songData, setSongData] = useState(data);
  const handleClick = (itemIndex) =>
    setSongData(
      songData.map((item, index) =>
        index === itemIndex ? { ...item, added: !item.added } : item
      )
    );
  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={songData}/>
      <div className="flex flex-wrap justify-center">
        {songData.map((item, index) => (
          <Card
            key={index}
            index={index}
            value={item}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
