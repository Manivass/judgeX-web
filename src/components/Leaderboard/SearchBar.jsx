import { FiSearch } from "react-icons/fi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-5 my-10">
      {/* Search */}

      <label className="input input-bordered bg-slate-900 border-slate-700 rounded-2xl flex items-center gap-3 w-full lg:w-[450px]">
        <FiSearch className="text-xl text-slate-400" />

        <input
          type="text"
          className="grow text-white"
          placeholder="Search developers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      {/* Filters */}

      <div className="flex gap-3">
        <button className="btn btn-primary rounded-xl">All Time</button>

        <button className="btn btn-outline rounded-xl">Monthly</button>

        <button className="btn btn-outline rounded-xl">Weekly</button>

        <button className="btn btn-outline rounded-xl">
          <HiAdjustmentsHorizontal className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
