import { useState, useEffect } from "react";
import "./navbar.css";
export default function NavBar() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const element = document.documentElement;

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

  return (
    <nav className="flex justify-between items-start w-full h-fit px-3 md:px-20 pt-7 ">
      <div className="md:w-36 w-20 ">
        <img src="https://i.ibb.co/V9ZKWv8/housen.png" alt="logo" />
      </div>

      <div className="respo mt-2.5 mr-28 flex gap-14 text-lg font-medium  dark:text-white transition-colors duration-300 ">
        <a href="">Buy a house</a>
        <a href="">Rent a house</a>
        <a href="">Mortgage</a>
      </div>
      <div className="flex gap-3">
        {options?.map((opt) => (
          <button
            key={opt.text}
            onClick={() => setTheme(opt.text)}
            className={`text-dark  dark:text-white text-2xl md:mt-2 md:text-4xl   ${
              theme === opt.text && "hidden transition-all duration-300"
            }`}
          >
            <ion-icon name={opt.icon}></ion-icon>
          </button>
        ))}

        <button
          className="md:hidden text-2xl dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <ion-icon name="menu"></ion-icon>
        </button>
      </div>

      <div
        className={` dark:text-white flex flex-col gap-4 ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <a
          href=""
          className="block px-1 py-1 text-base font-medium transition-all duration-150 ease-in-out"
        >
          Buy a house
        </a>
        <a
          href=""
          className="block px-1 py-1 text-base font-medium transition-all duration-150 ease-in-out"
        >
          Rent a house
        </a>
        <a
          href=""
          className="block px-1 py-2 mt-2 text-base font-medium transition-all duration-150 ease-in-out"
        >
          Mortgage
        </a>
      </div>
    </nav>
  );
}
