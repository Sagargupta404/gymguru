"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Trainers", href: "/trainers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className={`text-3xl font-black ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          FIT<span className="text-orange-500">ZONE</span>
        </Link>

        <nav className="hidden lg:flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition hover:text-orange-500 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
          Book Trial
        </button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden text-3xl ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white p-6 shadow-xl">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-full">
            Book Trial
          </button>
        </div>
      )}
    </header>
  );
}