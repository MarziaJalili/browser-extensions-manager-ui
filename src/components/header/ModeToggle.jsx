import { useState } from "react";

const ModeToggle = ({ darkMode, setDarkMode }) => {
  // toggle the dark mood on and off...
  const iconPath = darkMode
    ? "./images/icon-sun.svg"
    : "./images/icon-moon.svg";

  const changeMode = () => {
    setDarkMode((prev) => !prev);
    const bodyClasses = document.body.classList;

    if (bodyClasses.contains("dark")) bodyClasses.add("bright");
    bodyClasses.toggle("dark");
  };
  return (
    <button
      className={`${
        darkMode ? "bg-Neutral-700" : "bg-Neutral-100"
      } p-3 rounded-xl cursor-pointer`}
      onClick={changeMode}
      aria-label="Toggles the Dark Mode"
    >
      <img src={iconPath} alt="Toggle Icon" />
    </button>
  );
};

export default ModeToggle;
