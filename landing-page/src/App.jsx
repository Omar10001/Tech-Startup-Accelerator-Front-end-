import NavBar from "./components/navbar";
import SearchBar from "./components/search/search";
import 'animate.css';

function App() {
  return (
    <div className="App flex flex-col px-1 w-full md:min-h-screen min-h-[100%] bg-[#f8f8f8] dark:bg-[#17161B] transition-all duration-300 ">
      <NavBar />
      <span className="animate__animated animate__fadeInDown text-4xl w-[313px] mx-auto md:w-full md:text-7xl text-black dark:text-white font text-center mt-28 font-medium">Find your ideal home</span>
      <div className="animate__animated animate__fadeIn w-[292px] h-[170px] md:w-[825px] md:h-[76px] mx-auto mt-6">
        <p className=" text-center font-medium text-[#616161] dark:text-white text-2xl leading-10">Search from more than 19 million of inspected appartments,  houses, cottages, villas, manors and mansions</p>
      </div>

      <SearchBar />

      <footer className="sticky h-fit md:h-[50px] bg-transparent md:bg-white dark:bg-[#17161B] top-[1100px] flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center w-full overflow-clip px-20 transition-colors duration-300">
        <span className="text-[#A8A8A8] text-sm  font-medium">Housen © 2020</span>
        <div className="flex flex-col md:flex-row gap-5 text-[#A8A8A8] text-sm font-medium text-center pb-6 md:pb-0">
          <a href="">About</a>
          <a href="">FAQ</a>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
