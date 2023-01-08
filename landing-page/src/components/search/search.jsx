import "./search.css";
export default function SearchBar() {
  return (
    <div className="animate__animated animate__fadeInUp w-full flex justify-center mt-24 px-8 md:mt-10 md:ml-1">
      <div class="relative w-[750px]">
        <div class="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div  className="w-full h-[68px] ">
          <input
            type="text"
            class="h-[68px] block w-full pl-14 text-gray-900 customshadow border dark:border-gray-600 text-base rounded bg-gray-50 dark:bg-transparent placeholder:text-base dark:placeholder-[#A8A8A8] dark:text-white focus:outline-none"
            placeholder="Search for address"
            required
          />
          <button
            type="submit"
            class="text-white absolute md:right-3 mt-3 md:mt-0 w-full md:w-48  md:bottom-3 bg-[#6935FD] hover:bg-[#6935FD]/70 focus:outline-none font-medium rounded-sm text-lg px-14 py-2  dark:hover:bg-[#6935FD]/70"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
