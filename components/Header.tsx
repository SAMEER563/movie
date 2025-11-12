"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
          /> 
          <span className="text-xl font-bold">StoryBit</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/" className="hover:text-white">Movies</Link>
          <Link href="/" className="hover:text-white">Series</Link>
          <Link href="/" className="hover:text-white">My List</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4">
          <nav className="flex flex-col gap-3 text-gray-300">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>Movies</Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>Series</Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>My List</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
