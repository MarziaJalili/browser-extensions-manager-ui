import ToggleButton from "./ToggleButton";
import { useEffect, useState } from "react";

const Cards = ({ darkMode, data, setInitialData, initialData }) => {
  // generating cards...
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
                ? "text-Neutral-100 border-Neutral-600 drop-shadow"
                : "border-Neutral-300 "
            } border cursor-pointer text-lg  rounded-full py-2 px-5 font-medium`}
          >
            Remove
          </button>

          {/* toggle active button */}
          <ToggleButton
            isActive={isActive}
            id={name}
            darkMode={darkMode}
            initialData={initialData}
            setInitialData={setInitialData}
          />
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

export default Cards;
