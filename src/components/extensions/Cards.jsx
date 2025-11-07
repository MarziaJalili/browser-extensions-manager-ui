import ToggleButton from "./ToggleButton";
import RemoveButton from "./RemoveButton";
import ConfirmModal from "./ConfirmModal";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

// Plugins
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Cards = ({
  darkMode,
  data,
  setInitialData,
  initialData,
  setData,
  animData,
}) => {
  // add some animations
  const containerRef = useRef(null);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".card");

    const animations = [];

    cards.forEach((card, index) => {
      const anim = gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          yPercent: 20, // relative to card height
        },
        {
          autoAlpha: 1,
          yPercent: 0,

          duration: 0.6,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
      animations.push(anim);
    });

    const paragraphs = containerRef.current.querySelectorAll(".description");

    const triggers = [];

    paragraphs.forEach((paragraph) => {
      const split = new SplitText(paragraph, { type: "words, chars" });

      const trigger = gsap.from(split.chars, {
        scrollTrigger: {
          trigger: paragraph,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        duration: 0.4,
        opacity: 0,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });

      triggers.push(() => {
        split.revert();
        trigger.scrollTrigger?.kill();
      });
    });

    return () => {
      triggers.forEach((cleanup) => cleanup());
      animations.forEach((anim) => {
        if (anim.scrollTrigger) anim.scrollTrigger.kill();
        anim.kill();
      });
    };
  }, [animData, darkMode]);

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
              }  text-lg description`}
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
            setModalOpen={setModalOpen}
            setCardToDelete={setCardToDelete}
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
    <>
      <ConfirmModal
        data={data}
        darkMode={darkMode}
        initialData={initialData}
        setInitialData={setInitialData}
        setData={setData}
        setModalOpen={setModalOpen}
        id={cardToDelete}
        isOpen={modalOpen}
      />
      <ul
        ref={containerRef}
        className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 w-full items-center"
      >
        {cards}
      </ul>
    </>
  );
};

export default Cards;
