"use client";

import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/fabric0de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" />
          </a>
          <a
            href="mailto:junghyeonkim.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-2xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" />
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} KIM JUNGHYEON. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

