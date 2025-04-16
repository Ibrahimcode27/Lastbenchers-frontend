"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";

export default function Navbar({ userName }) {
  const [theme, setTheme] = useState("light");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference for the sidebar
  const mobileMenuButtonRef = useRef(null); // Reference for the mobile menu button

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.classList.add(storedTheme + "-theme");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove(theme + "-theme");
    document.body.classList.add(newTheme + "-theme");
    localStorage.setItem("theme", newTheme);
    window.location.reload(); // Refresh the page after theme change
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the mobile menu if clicked outside
  const handleClickOutside = (e) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      !mobileMenuButtonRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside of sidebar
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full flex justify-between items-center p-4 shadow-lg z-50 ${
        theme === "dark" ? "bg-[#1b3856]" : "bg-white"
      }`}
    >
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="w-36 cursor-pointer"
        />
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/studenthome"
              className="text-lg text-[#1e4c9d] hover:text-[#fdc938]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="text-lg text-[#1e4c9d] hover:text-[#fdc938]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-lg text-[#1e4c9d] hover:text-[#fdc938]"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="text-lg text-[#1e4c9d] hover:text-[#fdc938]"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg text-[#1e4c9d] hover:text-[#fdc938]"
            >
              Contact
            </Link>
          </li>

          {userName ? (
            <li
              className="relative cursor-pointer text-white"
              onClick={toggleDropdown}
            >
              <HiAtSymbol
                className={theme === "dark" ? "text-white" : "text-black"}
              />{" "}
              <span className={theme === "dark" ? "text-white" : "text-black"}>
                {userName}
              </span>
              {dropdownVisible && (
                <ul className="absolute bg-white shadow-lg rounded-lg mt-2 right-0 w-40 text-left space-y-3">
                  <li>
                    <Link
                      href="/account"
                      className="block px-4 py-2 text-[#1e4c9d]"
                    >
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my_courses"
                      className="block px-4 py-2 text-[#1e4c9d]"
                    >
                      My Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/logout"
                      className="block px-4 py-2 text-[#1e4c9d]"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className="text-lg {theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#fdc938]"
              >
                <HiAtSymbol />
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* Theme Toggle */}

        <button
          className="px-4 py-2 text-2xl hover:bg-[#fdc93b] focus:outline-none"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <FaSun className="text-white" /> // White color in dark mode
          ) : (
            <FaMoon className="text-black" /> // Black color in light mode
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        ref={mobileMenuButtonRef}
        className="md:hidden p-2 text-xl text-white"
        onClick={toggleMobileMenu}
      >
        <FaBars className={theme === "dark" ? "text-white" : "text-black"} />
      </button>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div
            ref={sidebarRef}
            className="w-64 h-full bg-[#1b3856] text-white p-4 space-y-6"
          >
            <button className="text-2xl" onClick={toggleMobileMenu}>
              <i className="fas fa-times"></i>
            </button>
            <ul className="space-y-6">
              <li>
                <Link href="/studenthome" className="text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-lg">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-lg">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg">
                  Contact
                </Link>
              </li>

              {/* Dropdown in mobile view */}
              {userName ? (
                <li>
                  <button
                    className="text-lg w-full text-left"
                    onClick={toggleDropdown}
                  >
                    <HiAtSymbol />
                    {userName}
                  </button>
                  {dropdownVisible && (
                    <ul className="bg-blue text-white shadow-lg rounded-lg space-y-4">
                      <li>
                        <Link href="/account" className="block text-[#1e4c9d]">
                          My Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/my_courses"
                          className="block text-[#1e4c9d]"
                        >
                          My Courses
                        </Link>
                      </li>
                      <li>
                        <Link href="/logout" className="block text-[#1e4c9d]">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li>
                  <Link href="/login" className="text-lg">
                    Login
                  </Link>
                </li>
              )}
              {/* Theme Toggle in mobile view */}
              <li>
                <button
                  className="px-4 py-2 text-2xl text-white hover:bg-[#fdc93b] focus:outline-none"
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? <FaSun /> : <FaMoon />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
