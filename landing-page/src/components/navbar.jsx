import { useState } from "react";
import DarkMode from "./darkmode/darkmode";

import "./navbar.css";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="z-10 fixed top-0 w-full bg-[#f8f8f8] dark:bg-[#17161b] shadow px-8 md:px-0 transition-all duration-300">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="" className="">
              <img
                src="https://i.ibb.co/V9ZKWv8/housen.png"
                alt=""
                className="w-32"
              />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-black rounded-md outline-none dark:text-white text-2xl mt-3"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <ion-icon name="close-outline"></ion-icon>
                ) : (
                  <ion-icon name="menu-outline"></ion-icon>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 mr-0 md:mr-20 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black dark:text-white hover:text-indigo-200">
                <a href="">Buy a house</a>
              </li>
              <li className="text-black dark:text-white hover:text-indigo-200">
                <a href="">Rent a house</a>
              </li>
              <li className="text-black dark:text-white hover:text-indigo-200">
                <a href="">Contact US</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`md:visible ${navbar ? "visible" : "invisible"}`}>
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}
