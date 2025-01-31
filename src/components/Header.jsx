import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoHeader from "../assets/images/logoheader.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 px-6 py-6 lg:px-35 md:px-25">
      {/* Logo and Hamburger Menu */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <NavLink to="/">
            <img src={logoHeader} alt="Logo" className="w-45 h-15 cursor-pointer" />
          </NavLink>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 text-xl">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "How it Works?", path: "/how-it-works" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold hover:underline underline" 
                  : "text-gray-700 hover:text-blue-500 transition-colors" 
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Dropdown Navigation for Mobile */}
      {isMenuOpen && (
        <div className="absolute top-26 left-0 w-full bg-white shadow-md rounded-b-lg border-t border-gray-300 md:hidden z-10">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "How it Works?", path: "/how-it-works" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-medium bg-gray-100 px-4 py-2 rounded-lg" // Active link style
                    : "text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all" // Inactive link style
                }
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
