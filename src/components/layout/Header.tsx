"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { SiGitbook } from "react-icons/si";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex justify-between items-center  py-4 mx-32 mb-4 text-sm border-b">
      <div className="flex justify-start ">
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            {/* <li>
              <Link href="/about">About</Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
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
        <button onClick={toggleDarkMode} className="text-2xl">
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
