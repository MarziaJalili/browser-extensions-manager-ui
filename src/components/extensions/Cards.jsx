import ToggleButton from "./ToggleButton";
import RemoveButton from "./RemoveButton";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

// ScrollTrigger Plugin
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// SplitText Plugin
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const Cards = ({ darkMode, data, setInitialData, initialData, setData }) => {
  // add some animations
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".card");

    console.log(cards);
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: index * 0.1, // 👈 stagger effect
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, [data]);

  // generating cards...
  const cards = data.map(({ logo, name, description, isActive }) => (
    <li
      key={name}
      className={`${
        darkMode
          ? "bg-Neutral-700 border-Neutral-600"
          : "bg-white border-Neutral-200"
      }  h-full p-5 rounded-3xl border shadow-lg card`}
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
          <RemoveButton
            id={name}
            darkMode={darkMode}
            initialData={initialData}
            setInitialData={setInitialData}
            setData={setData}
          />

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
    <ul
      ref={containerRef}
      className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 w-full items-center"
    >
      {cards}
    </ul>
  );
};

export default Cards;
