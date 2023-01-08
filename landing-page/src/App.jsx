import NavBar from "./components/navbar";
import SearchBar from "./components/search/search";
import 'animate.css';

function App() {
  return (
    <div className="App fixed flex flex-col w-full min-h-screen bg-[#f8f8f8] dark:bg-[#17161B] transition-all duration-300 ">
      <NavBar />
      <span className="animate__animated animate__fadeInDown text-7xl text-black dark:text-white font text-center mt-28 font-medium">Find your ideal home</span>
      <div className="animate__animated animate__fadeIn w-[825px] h-[76px] mx-auto mt-6">
        <p className=" text-center font-medium text-[#616161] dark:text-white text-2xl leading-10">Search from more than 19 million of inspected appartments,  houses, cottages, villas, manors and mansions</p>
      </div>

      <SearchBar />
    </div>
  );
}

export default App;
