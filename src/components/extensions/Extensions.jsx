import Search from "./Search";
import ExtensionCards from "./ExtensionCards";

const Extensions = ({ darkMode }) => {
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
        <div className="flex gap-4 items-center justify-between">
          <button
            className={`${
              darkMode
                ? "shadow-black text-Neutral-900 bg-Red-400"
                : "bg-Red-700 text-Neutral-0"
            } !border-transparent  rounded-full state-button`}
          >
            All
          </button>
          <button
            className={`${
              darkMode
                ? "bg-Neutral-700 text-Neutral-0 border-Neutral-600 shadow-black"
                : "bg-white shadow-Neutral-200 border-Neutral-200"
            } state-button`}
          >
            Active
          </button>
          <button
            className={`${
              darkMode
                ? "bg-Neutral-700 text-Neutral-0 border-Neutral-600 shadow-black"
                : "bg-white shadow-Neutral-200 border-Neutral-200"
            } state-button`}
          >
            Inactive
          </button>
        </div>
      </section>

      <div className="flex flex-col w-full  items-center gap-5 lg:container mx-auto">
        <Search darkMode={darkMode} />
        <ExtensionCards darkMode={darkMode} />
      </div>
    </article>
  );
};

export default Extensions;
