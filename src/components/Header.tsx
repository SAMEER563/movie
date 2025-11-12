"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/80 via-gray-900/70 to-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={44}
              height={44}
              className="rounded-lg border border-gray-700 shadow-md"
            />
            <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-yellow-500/30 to-red-500/30 opacity-0"></span>
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent tracking-wide">
            StoryBit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-yellow-400 font-medium">
          {["Home", "Movies", "Series", "My List"].map((item) => (
            <Link
              key={item}
              href="/"
              className="relative hover:text-white transition-colors duration-200 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 text-gray-300 bg-black/90 px-6 py-4 border-t border-gray-800">
          {["Home", "Movies", "Series", "My List"].map((item) => (
            <Link
              key={item}
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
