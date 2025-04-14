import React from "react";
import { useEffect, useState } from "react";

const ExtensionCards = () => {
  const [data, setData] = useState([]);

  // fetching the data...
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("./data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.log(`Network response was not ok:\n ${err}`);
      }
    };

    fetchPosts();
  }, []);

  const cards = data.map(({ logo, name, description, isActive }) => (
    <li
      key={name}
      className="bg-white p-5 rounded-3xl border-1 border-Neutral-200 shadow-lg shadow-Neutral-200 max-w-sm"
    >
      <div className="flex gap-4 items-start">
        <img src={logo} alt={`${name} Icon`} />
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="text-Neutral-600 text-lg">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <button className="border-1 border-Neutral-300 cursor-pointer text-lg rounded-full py-2 px-5 font-medium">
          Remove
        </button>
        <button>toggle</button>
      </div>
    </li>
  ));

  return (
    <ul className=" flex flex-wrap max-sm:flex-col gap-4 items-center">
      {cards}
    </ul>
  );
};

export default ExtensionCards;
