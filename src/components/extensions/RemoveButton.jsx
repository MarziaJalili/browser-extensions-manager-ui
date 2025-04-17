import React from "react";

const RemoveButton = ({
  darkMode,
  id,
  initialData,
  setInitialData,
  setData,
}) => {
  // Removing cards and updating the data
  const handleClick = () => {
    const updatedData = initialData.filter((item) => item.name !== id);
    setInitialData(updatedData);
    setData(updatedData);
  };

  return (
    <button
      className={`${
        darkMode
          ? "text-Neutral-100 border-Neutral-600 drop-shadow"
          : "border-Neutral-300"
      } border cursor-pointer text-lg rounded-full py-2 px-5 font-medium`}
      onClick={handleClick}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
