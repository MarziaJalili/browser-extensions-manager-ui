import { FiSearch } from "react-icons/fi";
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div
      id="search"
      className="flex bg-white px-3 w-full self-start  py-3.5
    rounded-xl shadow-lg shadow-Neutral-200 gap-2 justify-between items-center mt-2 lg:w-xl"
    >
      <FiSearch className="text-Red-500 text-2xl" />

      <input
        type="text"
        placeholder="Search extensions without hassle "
        className="text-lg flex-1 outline-none"
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
