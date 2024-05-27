// src/components/layout/Header.tsx
"use client"; // 클라이언트 컴포넌트로 설정

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

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
    <header className="py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/project">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/fabric0de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
