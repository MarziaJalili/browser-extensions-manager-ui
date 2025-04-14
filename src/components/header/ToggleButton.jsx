const ToggleButton = ({ darkMood, setDarkMood }) => {
  // toggle the dark mood on and off...
  const iconPath = darkMood
    ? "./images/icon-sun.svg"
    : "./images/icon-moon.svg";

  function changeMood() {
    setDarkMood((prev) => !prev);
    const bodyClasses = document.body.classList;

    if (bodyClasses.contains("dark")) bodyClasses.add("bright");
    bodyClasses.toggle("dark");
  }
  return (
    <button
      className="bg-Neutral-100 p-3 rounded-xl cursor-pointer"
      onClick={changeMood}
      aria-label="Toggles the Dark Mode"
    >
      <img src={iconPath} alt="Toggle Icon" />
    </button>
  );
};

export default ToggleButton;
