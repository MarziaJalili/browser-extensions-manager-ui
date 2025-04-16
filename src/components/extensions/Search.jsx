import { FiSearch } from "react-icons/fi";
const Search = ({ searchTerm, setSearchTerm, darkMode }) => {
  return (
    <label
      id="search"
      className={` ${
        darkMode ? "bg-Neutral-700 shadow-black" : "bg-white shadow-Neutral-200"
      } flex  px-3 w-full self-start  py-3.5
    rounded-xl shadow-lg gap-2 justify-between items-center mt-2 lg:w-xl`}
    >
      <FiSearch className="text-Red-500 text-2xl" />

      <input
        type="text"
        placeholder="Search extensions without hassle "
        className={`${
          darkMode
            ? "text-Neutral-100 placeholder:text-Neutral-300 placeholder:font-extralight"
            : "placeholder:font-light"
        } text-lg flex-1 outline-none `}
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
    </label>
  );
};

export default Search;
