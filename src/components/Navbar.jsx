import React from "react";
import { Link, useLocation } from "react-router-dom";

const navbarData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          <Link to="/">🎓 British Academy</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-white font-medium">
          {navbarData.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`hover:text-gray-100 transition duration-200 border-b-2 pb-1 ${
                  location.pathname === item.path
                    ? "border-white"
                    : "border-transparent"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
