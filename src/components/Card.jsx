import React from "react";

export default function Card({ value, index, handleClick }) {
  const { image, name, artist, added } = value;
  console.log(name);
  return (
    <div className="w-72 h-52 m-5 p-4 relative rounded-md shadow-xl gap-4 flex bg-orange-100">
      <div className="w-32 h-32 rounded-md">
        <img
          src={image}
          alt="image"
          className="object-cover w-full h-full rounded-md overflow-hidden"
        />
      </div>
      <div className="p-3">
        <h1 className="font-bold">{name}</h1>
        <h3 className="font-light">{artist}</h3>
      </div>
      <div>
        <button
          className={`absolute bottom-0 ${
            added ? "bg-teal-700" : "bg-orange-400"
          } text-white font-bold left-1/2 -translate-x-[50%] translate-y-[50%] p-2 rounded-full`}
          onClick={() => handleClick(index)}
        >
          {added ? "Added" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
}
