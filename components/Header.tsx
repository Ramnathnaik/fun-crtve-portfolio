"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

const menuItems = [
  { name: "ಶಿಕ್ಷಣ ಪ್ರಯಾಣ", href: "/education-journey" }, // Education Journey
  { name: "ಚಿತ್ರ ಗ್ಯಾಲರಿ", href: "/gallery" }, // Gallery
  { name: "ಗುರಿಗಳು", href: "/goals" }, // Goals
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  // Removed auto-redirect - /gallery is now a protected authenticated page

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    if (href === "/gallery") {
      // Smooth scroll to #photo-gallery on home page
      if (window.location.pathname === "/") {
        const el = document.getElementById("photo-gallery");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "/#photo-gallery";
      }
    } else if (href === "/goals") {
      // Smooth scroll to #goals on home page
      if (window.location.pathname === "/") {
        const el = document.getElementById("goals");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "/#goals";
      }
    } else if (href === "/education-journey") {
      // Direct navigation to education journey page
      router.push(href);
    } else {
      router.push(href);
    }
  };

  return (
    <header className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 shadow-md w-full md:px-16 transition-colors duration-300">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">ಸಹನಾ❤️</h1>
        </Link>
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform duration-300 hover:rotate-12" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300 hover:rotate-12" />
            )}
          </button>

          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex gap-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.href)}
                className="hover:underline bg-transparent border-none cursor-pointer text-inherit transition-colors duration-200"
                type="button"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.href)}
              className="block py-2 border-b border-white bg-transparent border-none w-full text-left cursor-pointer text-inherit"
              type="button"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
