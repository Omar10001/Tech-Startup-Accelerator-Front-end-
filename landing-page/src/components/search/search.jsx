import "./search.css";
import { useState, useEffect } from "react";
import Results from "../result/result";

export default function SearchBar() {
  const [location, setLocation] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchLoc = async (title) => {
    const response = await fetch(
      `http://localhost:3000/locations?title_like=${title}`
    );
    const data = await response.json();

    setLocation(data);
  };
  useEffect(() => {
    searchLoc("null");
  }, []);

  return (
    <div className="z-10 flex flex-col justify-center items-center">
      <div className="animate__animated animate__fadeInUp w-full flex justify-center mt-24 px-8 md:mt-10 md:ml-1 transition-colors duration-300">
        <div className="relative w-[750px]">
          <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className="w-full h-[68px] ">
            <input
              type="text"
              className="h-[68px] block w-full pl-14 text-gray-900 customshadow border dark:border-gray-600 text-base rounded bg-gray-50 dark:bg-transparent placeholder:text-base dark:placeholder-[#A8A8A8] dark:text-white focus:outline-none"
              placeholder="Search for address"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button
              type="submit"
              onClick={() => searchLoc(searchTerm)}
              className="text-white absolute md:right-3 mt-3 md:mt-0 w-full md:w-48  md:bottom-3 bg-[#6935FD] hover:bg-[#6935FD]/70 focus:outline-none font-medium rounded-sm text-lg px-14 py-2  dark:hover:bg-[#6935FD]/70"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {location?.length > 0 ? (
        <div className="mt-16 md:mt-3">
          {location.map((loc) => (
            <Results key={loc.id} data={loc} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
