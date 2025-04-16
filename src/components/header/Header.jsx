import { useState } from "react";
import ModeToggle from "./ModeToggle";

const Header = ({ darkMode, setDarkMode }) => {
  const imgPath = darkMode ? "./images/logo-dark.svg" : "./images/logo.svg";

  return (
    <header
      className={`flex  px-3 py-2 rounded-xl shadow-lg shadow-Neutral-200 gap-5 justify-between items-center ${
        darkMode ? "bg-Neutral-800 shadow-black" : "bg-white"
      }`}
    >
      <img className="max-md:w-38" src={imgPath} alt="Logo Image" />
      <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
};

export default Header;
