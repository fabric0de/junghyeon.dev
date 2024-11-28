"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsSun, BsMoon, BsGear } from "react-icons/bs";
import { SiGitbook } from "react-icons/si";

const Header = () => {
  const [darkMode, setDarkMode] = useState("system");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      if (darkMode === "system") {
        if (prefersDarkScheme.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else if (darkMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    updateTheme();
    prefersDarkScheme.addEventListener("change", updateTheme);

    return () => {
      prefersDarkScheme.removeEventListener("change", updateTheme);
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setShowOptions(!showOptions);
  };

  const handleDarkModeChange = (mode: string) => {
    setDarkMode(mode);
    setShowOptions(false);
  };

  const getIcon = () => {
    if (darkMode === "system") {
      return <BsGear />;
    } else if (darkMode === "dark") {
      return <BsMoon />;
    } else {
      return <BsSun />;
    }
  };

  return (
    <header className="py-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li>
              <a href="https://www.rallit.com/resumes/1136443@solee3013/%EA%B9%80%EC%A0%95%ED%98%84">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/fabric0de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://fabric0de.gitbook.io/fabric0des-wiki/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGitbook className="text-2xl" />
          </a>
          <div className="relative">
            <button onClick={toggleDarkMode} className="text-2xl">
              {getIcon()}
            </button>
            {showOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20">
                <button
                  onClick={() => handleDarkModeChange("system")}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  System
                </button>
                <button
                  onClick={() => handleDarkModeChange("light")}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  Light
                </button>
                <button
                  onClick={() => handleDarkModeChange("dark")}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  Dark
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
