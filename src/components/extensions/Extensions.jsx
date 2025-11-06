import Search from "./Search";
import Cards from "./Cards";

import { useState, useEffect } from "react";

const Extensions = ({ darkMode }) => {
  const [initialData, setInitialData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
        setInitialData(jsonData);
      } catch (err) {
        console.log(`Network response was not ok:\n ${err}`);
      }
    };

    fetchCards();
  }, []);

  // setting states...
  const activeCards = initialData.filter((item) => item.isActive);
  const inactiveCards = initialData.filter((item) => !item.isActive);

  // changing states...

  const handleClick = (button, e) => {
    const selectedBtn = document.querySelector(".selected-button");

    //remove the pervious selected button..
    if (selectedBtn) selectedBtn.classList.remove("selected-button");

    // adding it to the new selected button...
    const btn = e.target;
    btn.classList.add("selected-button");

    setData((prev) => {
      if (button === "all") {
        return initialData;
      } else if (button === "active") {
        return activeCards;
      } else if (button === "inactive") {
        return inactiveCards;
      }
    });
  };

  // filter based on the searched term
  const filteredExtensions = data.filter((ext) =>
    ext.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // styling the button...
  const btnStyle = `${
    darkMode
      ? "bg-Neutral-700 text-Neutral-0 border-Neutral-600 shadow-black"
      : "bg-white shadow-Neutral-200 border-Neutral-200"
  } state-button`;

  return (
    <article className="text-Neutral-900 flex flex-col gap-5 mt-8 items-center">
      <section
        className={`w-full flex max-md:flex-col gap-5 items-center text-lg justify-between container mx-auto`}
      >
        <h1
          className={`${darkMode ? "text-Neutral-0" : ""} font-bold text-3xl`}
        >
          Extensions List
        </h1>
        <div className="state-btns flex gap-4 items-center justify-between">
          <button
            className={`${btnStyle} selected-button`}
            onClick={(e) => handleClick("all", e)}
          >
            All
          </button>
          <button
            className={btnStyle}
            onClick={(e) => handleClick("active", e)}
          >
            Active
          </button>
          <button
            className={btnStyle}
            onClick={(e) => handleClick("inactive", e)}
          >
            Inactive
          </button>
        </div>
      </section>

      <div className="flex flex-col w-full  items-center gap-5 lg:container mx-auto">
        <Search darkMode={darkMode} setSearchTerm={setSearchTerm} />
        <Cards
          darkMode={darkMode}
          setInitialData={setInitialData}
          initialData={initialData}
          data={filteredExtensions}
          setData={setData}
        />
      </div>
    </article>
  );
};

export default Extensions;
