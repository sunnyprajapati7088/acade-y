import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navbarData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-400 via-pink-500 to-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide font-sans">
          <Link to="/" className="hover:text-yellow-100 transition">
            🎓 British Kidz
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-white text-lg font-medium font-sans">
          {navbarData.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`transition duration-200 border-b-2 pb-1 ${
                  location.pathname === item.path
                    ? "border-white"
                    : "border-transparent hover:border-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 bg-gradient-to-r from-pink-400 via-pink-500 to-blue-500 text-white text-lg font-medium space-y-2">
          {navbarData.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block w-full transition duration-200 border-b-2 pb-1 ${
                  location.pathname === item.path
                    ? "border-white"
                    : "border-transparent hover:border-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
