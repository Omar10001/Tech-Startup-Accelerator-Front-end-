import { useState, useEffect } from "react";
import "./navbar.css";

export default function NavBar() {
  localStorage.setItem("theme", "dark");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const [navbar, setNavbar] = useState(false);

  const options = [
    {
      icon: "sunny-outline",
      text: "light",
    },
    {
      icon: "moon-outline",
      text: "dark",
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  // useEffect(() => {
  //   const themeFromLocalStorage = localStorage.getItem("theme");
  //   setTheme(themeFromLocalStorage);
  // }, []);

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
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`text-dark text-center  dark:text-white text-2xl md:mt-2 md:text-4xl   ${
                theme === opt.text && "hidden transition-all duration-300"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
