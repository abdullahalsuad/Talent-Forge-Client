import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-indigo-600 tracking-tight"
            >
              CareerCode
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition"
            >
              Home
            </a>
            <a
              href="/jobs"
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition"
            >
              All Jobs
            </a>
            <a
              href="/my-applications"
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition"
            >
              My Applications
            </a>
            <a
              href="/my-jobs"
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition"
            >
              My Jobs
            </a>

            {/* User Avatar with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-3 focus:outline-none"
              >
                <img
                  src="https://i.imgur.com/6QbX6yA.png "
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
                />
                <span className="text-base font-medium text-gray-800">
                  Jane Doe
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 overflow-hidden border border-gray-200">
                  <a
                    href="/profile"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    Settings
                  </a>
                  <hr className="border-t border-gray-200 my-1" />
                  <button className="block w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 pb-3">
          <div className="flex flex-col space-y-3 px-4 pt-3">
            <a
              href="/"
              className="py-3 text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/jobs"
              className="py-3 text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              All Jobs
            </a>
            <a
              href="/my-applications"
              className="py-3 text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              My Applications
            </a>
            <a
              href="/my-jobs"
              className="py-3 text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              My Jobs
            </a>
            <div className="pt-3 border-t border-gray-200">
              <a
                href="/profile"
                className="block py-3 text-base font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </a>
              <a
                href="/settings"
                className="block py-3 text-base font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Settings
              </a>
              <button
                className="block w-full text-left py-3 text-base font-medium text-red-600 hover:text-red-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
