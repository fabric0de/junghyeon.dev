"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsSun, BsMoon, BsGear } from "react-icons/bs";
import { SiGitbook } from "react-icons/si";

const Header = () => {
  const [darkMode, setDarkMode] = useState<string>("system");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode") || "system";
    setDarkMode(storedMode);
    applyDarkMode(storedMode);

    const handleChange = (e: MediaQueryListEvent) => {
      if (darkMode === "system") {
        applyDarkMode(e.matches ? "dark" : "light");
      }
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleChange);
    };
  }, [darkMode]);

  const applyDarkMode = (mode: string) => {
    if (
      mode === "dark" ||
      (mode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleModeChange = (mode: string) => {
    setDarkMode(mode);
    localStorage.setItem("darkMode", mode);
    applyDarkMode(mode);
    setIsDropdownOpen(false); // 드롭다운 닫기
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getDarkModeIcon = () => {
    switch (darkMode) {
      case "light":
        return <BsSun />;
      case "dark":
        return <BsMoon />;
      default:
        return <BsGear />;
    }
  };

  return (
    <header className="flex justify-between items-center py-4 mx-32 mb-4 text-sm border-b">
      <div className="flex justify-start">
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center relative">
        <a
          href="https://github.com/fabric0de"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://fabric0de.gitbook.io/fabric0des-wiki/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <SiGitbook className="text-2xl" />
        </a>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-2xl">
            {getDarkModeIcon()}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded shadow-lg z-10">
              <button
                onClick={() => handleModeChange("system")}
                className={`w-full px-4 py-2 text-left ${
                  darkMode === "system" ? "bg-gray-200 dark:bg-gray-700" : ""
                }`}
              >
                시스템 설정
              </button>
              <button
                onClick={() => handleModeChange("light")}
                className={`w-full px-4 py-2 text-left ${
                  darkMode === "light" ? "bg-gray-200 dark:bg-gray-700" : ""
                }`}
              >
                라이트 모드
              </button>
              <button
                onClick={() => handleModeChange("dark")}
                className={`w-full px-4 py-2 text-left ${
                  darkMode === "dark" ? "bg-gray-200 dark:bg-gray-700" : ""
                }`}
              >
                다크 모드
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
