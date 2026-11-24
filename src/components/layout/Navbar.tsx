
"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Shop",
    "Collections",
    "About",
    "Contact",
  ];

  return (
    <nav className="bg-soft-pink px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold text-black">
          Farié
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 min-[801px]:flex">
          {navLinks.map((link) => (
            <li key={link}>
              
            <a
              href="#"
              className={`relative pb-3 transition-colors hover:text-purple ${
                link === "Home" ? "text-purple" : "text-dark"
              }`}
            >
              {link}

              {link === "Home" && (
                <svg
                  className="absolute -bottom-1 left-0 h-[7px] w-full"
                  viewBox="0 0 100 7"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M1 2 C3 2 4 5 8 5 L92 5 C96 5 97 2 99 2"
                    stroke="#493747"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>

            </li>
          ))}
        </ul>

        {/* Action Icons */}
        <div className="flex items-center gap-4 text-purple min-[801px]:gap-6">
          <button
            aria-label="Search"
            className="flex h-5 w-5 items-center justify-center transition-colors hover:text-dark"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>

          <button
            aria-label="Account"
            className="flex h-5 w-5 items-center justify-center transition-colors hover:text-dark"
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>

          <button
            aria-label="Shopping bag"
            className="flex h-5 w-5 items-center justify-center transition-colors hover:text-dark"
          >
            <FontAwesomeIcon icon={faBagShopping} size="lg" />
          </button>

          {/* Mobile Menu Button */}
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-6 w-6 items-center justify-center text-purple min-[801px]:hidden"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              size="lg"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="mt-5 flex flex-col gap-4 border-t border-lavender pt-5 min-[801px]:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-1 transition-colors hover:text-purple ${
                  link === "Home"
                    ? "font-semibold text-purple"
                    : "text-dark"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
