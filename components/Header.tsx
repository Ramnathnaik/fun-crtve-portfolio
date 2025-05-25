"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { name: "ಚಿತ್ರ ಗ್ಯಾಲರಿ", href: "/gallery" }, // Gallery
  { name: "ಗುರಿಗಳು", href: "/goals" }, // Goals
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/gallery") {
      // Redirect to home and scroll to #photo-gallery
      router.replace("/#photo-gallery");
    }
  }, [pathname, router]);

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
    } else {
      router.push(href);
    }
  };

  return (
    <header className="text-black bg-white shadow-md w-full md:px-16">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">ಸಹಾನಾ</h1>
        </Link>
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <nav className="hidden md:flex gap-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.href)}
              className="hover:underline bg-transparent border-none cursor-pointer text-inherit"
              type="button"
            >
              {item.name}
            </button>
          ))}
        </nav>
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
