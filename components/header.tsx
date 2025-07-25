"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FiMenu, FiX } from "react-icons/fi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
]

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 h-[4.5rem] w-full sm:w-[36rem] border border-gray-100 dark:border-white bg-gradient-to-br from-dark-blue-600 to-white-100 shadow-lg shadow-black/[0.25] dark:shadow-white/[0.15] backdrop-blur-md sm:top-4 sm:h-[4rem] rounded-full sm:rounded-full dark:from-indigo-100 dark:text-white-600 dark:border-white/30 p-4"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Mobile Menu Button */}
      <div className="fixed top-6 left-6 sm:hidden z-[1000]">
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-2 rounded-full bg-white dark:bg-dark-blue-600 shadow-md"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={clsx(
          "fixed left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",
          {
            "top-[0.15rem] h-12": !isMenuOpen,
            "top-0 left-0 w-full h-screen bg-white dark:bg-dark-blue-600 flex items-center justify-center sm:static sm:w-auto sm:h-auto sm:bg-transparent":
              isMenuOpen,
          }
        )}
      >
        <ul
          className={clsx(
            "flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",
            {
              "flex-col gap-8 text-xl": isMenuOpen,
              "w-[22rem] sm:gap-5": !isMenuOpen,
            }
          )}
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-900 transition dark:text-gray-500 dark:hover:text-gray-200",
                  {
                    "text-gray-900 dark:text-white":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsMenuOpen(false); // Close menu on mobile after click
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-blue-300/40 via-purple-400/30 to-pink-300/40 dark:from-blue-700/40 dark:via-purple-700/40 dark:to-pink-700/30 shadow-md dark:shadow-white/20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}