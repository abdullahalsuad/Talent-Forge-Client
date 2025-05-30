import { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, signOutUser, setUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  let handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/");
      toast.success("Logout successful.");
    } catch (error) {
      console.log(error);
    }
    setUser(null);
  };

  return (
    <nav className=" fixed top-0 left-0 w-full bg-white shadow-lg z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold text-teal-700 tracking-tight"
            >
              Talent Forge
            </NavLink>
          </div>

          {/* Centered Nav Links */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-teal-700"
                  : "text-base font-medium text-gray-700 hover:text-teal-700 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-teal-700"
                  : "text-base font-medium text-gray-700 hover:text-teal-700 transition"
              }
            >
              All Jobs
            </NavLink>
            <NavLink
              to="/my-applications"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-teal-700"
                  : "text-base font-medium text-gray-700 hover:text-teal-700 transition"
              }
            >
              My Applications
            </NavLink>
            <NavLink
              to="/my-jobs"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-teal-700"
                  : "text-base font-medium text-gray-700 hover:text-teal-700 transition"
              }
            >
              My Jobs
            </NavLink>
          </div>

          {/* User Avatar / Right Section */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              {user ? (
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 focus:outline-none cursor-pointer"
                >
                  <img
                    src={user?.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover border-2 border-teal-700"
                  />
                  <span className="text-base font-medium text-gray-800">
                    {user?.displayName}
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
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-5 py-2.5 text-sm font-medium text-black bg-white border border-gray-700 rounded-md hover:bg-teal-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition mr-4 cursor-pointer"
                  >
                    Login
                  </Link>

                  {/* Register Button */}
                  <Link
                    to="/register"
                    className="px-5 py-2.5 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition cursor-pointer"
                  >
                    Register
                  </Link>
                </>
              )}

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 overflow-hidden border border-gray-200">
                  {user && (
                    <>
                      <NavLink
                        to="/add-job"
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-3 text-sm font-medium text-teal-700 hover:bg-teal-70"
                            : "block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-70 hover:text-teal-700"
                        }
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Post A Job
                      </NavLink>
                      <NavLink
                        to="/my-applications"
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-3 text-sm font-medium text-teal-700 hover:bg-teal-70"
                            : "block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-70 hover:text-teal-700"
                        }
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        My Applications
                      </NavLink>
                      <hr className="border-t border-gray-200 my-1" />
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 cursor-pointer"
                      >
                        Logout
                      </button>
                    </>
                  )}
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
        <div className="md:hidden bg-white border-t border-gray-200 pb-3 ">
          <div className="flex flex-col space-y-3 px-4 pt-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "py-3 text-base font-medium text-teal-700"
                  : "py-3 text-base font-medium text-gray-700 hover:text-teal-700"
              }
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive
                  ? "py-3 text-base font-medium text-teal-700"
                  : "py-3 text-base font-medium text-gray-700 hover:text-teal-700"
              }
              onClick={handleLinkClick}
            >
              All Jobs
            </NavLink>
            <NavLink
              to="/my-applications"
              className={({ isActive }) =>
                isActive
                  ? "py-3 text-base font-medium text-teal-700"
                  : "py-3 text-base font-medium text-gray-700 hover:text-teal-700"
              }
              onClick={handleLinkClick}
            >
              My Applications
            </NavLink>
            <NavLink
              to="/my-jobs"
              className={({ isActive }) =>
                isActive
                  ? "py-3 text-base font-medium text-teal-700"
                  : "py-3 text-base font-medium text-gray-700 hover:text-teal-700"
              }
              onClick={handleLinkClick}
            >
              My Jobs
            </NavLink>
            <div className="pt-3 border-t border-gray-200">
              {user ? (
                <>
                  <NavLink
                    to="/add-job"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-3 text-base font-medium text-teal-700"
                        : "block py-3 text-base font-medium text-gray-700 hover:text-teal-700"
                    }
                    onClick={handleLinkClick}
                  >
                    Post A Job
                  </NavLink>
                  <NavLink
                    to="/my-applications"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-3 text-base font-medium text-teal-700"
                        : "block py-3 text-base font-medium text-gray-700 hover:text-teal-700"
                    }
                    onClick={handleLinkClick}
                  >
                    My Applications
                  </NavLink>
                  <button
                    className="block w-full text-left py-3 text-base font-medium text-red-600 hover:text-red-800 cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>{" "}
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-5 py-2.5 text-sm font-medium text-black bg-white border border-gray-700 rounded-md hover:bg-teal-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition mr-4"
                  >
                    Login
                  </Link>

                  {/* Register Button */}
                  <Link
                    to="/register"
                    className="px-5 py-2.5 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
