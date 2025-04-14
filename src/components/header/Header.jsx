import React from "react";
import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <header className="flex bg-white px-3 py-2 rounded-xl shadow-lg shadow-Neutral-200 gap-5 justify-between items-center">
      <img className="max-md:w-38" src="./images/logo.svg" alt="Logo Image" />
      <ToggleButton />
    </header>
  );
};

export default Header;
