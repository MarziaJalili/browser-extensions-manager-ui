import { useState } from "react";

const ToggleButton = ({ isActive }) => {
  const [isActiveState, setIsActiveState] = useState(isActive);
  const [toggleActive, setToggleActive] = useState(isActive);

  const handleClick = () => {
    setToggleActive((prev) => !prev);
    setIsActiveState((prev) => !prev);
    console.log(toggleActive, isActiveState);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isActiveState || toggleActive ? "bg-Red-700" : "bg-Neutral-300"
      } cursor-pointer relative w-13 h-7 toggled.hidden rounded-full p-1 transition-colors ease duration-500`}
    >
      <div
        className={`${
          isActiveState || toggleActive ? "translate-x-[52%]" : ""
        } absolute  left-3.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[23px] w-[23px] rounded-full shadow bg-white transition-transform duration-500 ease`}
      ></div>
    </button>
  );
};

export default ToggleButton;
