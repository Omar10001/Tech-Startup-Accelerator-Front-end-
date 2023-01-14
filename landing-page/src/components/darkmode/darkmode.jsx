import { useState, useEffect } from "react";
import { useLocalStorage } from 'react-use';

export default function DarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

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
      theme === "dark" ||
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
        break;
      case "light":
        element.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <div>
      {options?.map((opt) => (
        <button
          key={opt.text}
          onClick={() => setTheme(opt.text)}
          className={`text-black  dark:text-white text-2xl md:mt-2 md:text-4xl   ${
            theme === opt.text ? "hidden transition-all duration-300" : ''
          }`}
        >
          <ion-icon name={opt.icon}></ion-icon>
        </button>
      ))}
    </div>
  );
}
