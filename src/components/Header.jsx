import { useState } from "react";
import logoHeader from "../assets/images/logoheader.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 px-6 py-4 lg:px-35 md:px-25">
      {/* Logo and Hamburger Menu */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logoHeader} alt="Logo" className="w-35 h-12" />
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
        <nav className="hidden md:flex space-x-12">
          {["Home", "About Us", "How it works?", "Contact"].map(
            (item, index) => (
              <div
                key={index}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                {item}
              </div>
            )
          )}
        </nav>
      </div>

      {/* Dropdown Navigation for Mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-lg border-t border-gray-300 md:hidden">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            {["Home", "About Us", "How it works?", "Contact"].map(
              (item, index) => (
                <div
                  key={index}
                  className="cursor-pointer text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all"
                >
                  {item}
                </div>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
