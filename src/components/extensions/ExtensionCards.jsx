import ToggleButton from "./ToggleButton";
import { useEffect, useState } from "react";

const ExtensionCards = ({ darkMode }) => {
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
      className={`${
        darkMode
          ? "bg-Neutral-700 border-Neutral-600"
          : "bg-white border-Neutral-200"
      }  h-full p-5 rounded-3xl border  shadow-lg`}
    >
      <div className="flex flex-col h-full">
        {/* Ensure the flex direction is column */}
        <div className="flex flex-1 gap-4 items-start">
          {/* Main content area */}
          <img src={logo} alt={`${name} Icon`} />
          <div className="flex flex-col gap-1">
            <h2
              className={`${
                darkMode ? "text-Neutral-100" : ""
              } font-bold text-xl`}
            >
              {name}
            </h2>
            <p
              className={`${
                darkMode ? "text-Neutral-300 font-light" : "text-Neutral-600 "
              }  text-lg`}
            >
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          {/* Footer area */}
          <button
            className={`${
              darkMode
                ? "text-Neutral-100 border-Neutral-600 "
                : "border-Neutral-300 "
            } border cursor-pointer text-lg drop-shadow rounded-full py-2 px-5 font-medium`}
          >
            Remove
          </button>
          <ToggleButton isActive={isActive} darkMode={darkMode} />
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
