import ToggleButton from "./ToggleButton";
import { useEffect, useState } from "react";

const ExtensionCards = () => {
  const [data, setData] = useState([]);

  // fetching the data...
  useEffect(() => {
    const fetchCards = async () => {
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

    fetchCards();
  }, []);

  const cards = data.map(({ logo, name, description, isActive }) => (
    <li
      key={name}
      className="bg-white h-full p-5 rounded-3xl border border-Neutral-200 shadow-lg"
    >
      <div className="flex flex-col h-full">
        {" "}
        {/* Ensure the flex direction is column */}
        <div className="flex flex-1 gap-4 items-start">
          {" "}
          {/* Main content area */}
          <img src={logo} alt={`${name} Icon`} />
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-xl">{name}</h2>
            <p className="text-Neutral-600 text-lg">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          {" "}
          {/* Footer area */}
          <button className="border border-Neutral-300 cursor-pointer text-lg rounded-full py-2 px-5 font-medium">
            Remove
          </button>
          <ToggleButton isActive={isActive} />
        </div>
      </div>
    </li>
  ));

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 w-full items-center">
      {cards}
    </ul>
  );
};

export default ExtensionCards;
