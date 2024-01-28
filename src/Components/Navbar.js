import React, { useState, useEffect, useRef } from "react";
import useClickOutside from "./useClickOutside";
import { NavLink, useNavigate } from "react-router-dom";
import CaringhandsLogo from "../Assets/CaringhandsLogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrollpos, setScrollpos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  useClickOutside(navMenuRef, () => {
    setIsMenuOpen(false);
  });

  useEffect(() => {
    const handleScroll = () => {
      const newScrollpos = window.scrollY;

      if (newScrollpos > 10) {
        // Apply classes for slide-in bar when scroll position is greater than 10
        document.getElementById("header").classList.add("bg-white");
        document.getElementById("navAction").classList.remove("bg-white");
        document
          .getElementById("navAction")
          .classList.add("gradient", "text-gray-800");

        document.querySelectorAll(".toggleColour").forEach((item) => {
          item.classList.add("text-gray-800");
          item.classList.remove("text-white");
        });

        document.getElementById("header").classList.add("shadow");
        document.getElementById("nav-content").classList.remove("bg-gray-100");
        document.getElementById("nav-content").classList.add("bg-white");
      } else {
        // Apply classes for when scroll position is less than or equal to 10
        document.getElementById("header").classList.remove("bg-white");
        document.getElementById("navAction").classList.remove("gradient");
        document.getElementById("navAction").classList.add("text-gray-800");

        document.querySelectorAll(".toggleColour").forEach((item) => {
          item.classList.add("text-white");
          item.classList.remove("text-gray-800");
        });

        document.getElementById("header").classList.remove("shadow");
        document.getElementById("nav-content").classList.remove("bg-white");
        document.getElementById("nav-content").classList.add("bg-gray-100");
      }

      // Example: setting state based on scroll position
      setScrollpos(newScrollpos);
    };

    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Scroll to the top when a navigation link is clicked
    const handleNavigation = () => {
      window.scrollTo(0, 0);
    };

    // Attach the event listener to all navigation links
    document.querySelectorAll("#nav-content a").forEach((link) => {
      link.addEventListener("click", handleNavigation);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      document.querySelectorAll("#nav-content a").forEach((link) => {
        link.removeEventListener("click", handleNavigation);
      });
    };
  }, []);
  useEffect(() => {
    document.querySelectorAll("#nav-content a").forEach((item) => {
      item.addEventListener("click", () => {
        setIsMenuOpen(false);

        // Get the target element ID from the href attribute
        const targetId = item.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to the top of the target element
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <nav id="header" className="fixed w-full z-50 top-0 text-white ">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 ">
        <div className="flex items-center">
          <button onClick={handleHomeClick}>
            <img
              className="toggleColour w-auto max-w-[190px] ml-4 md:ml-0"
              src={CaringhandsLogo}
              alt="logo"
            />
          </button>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? "flex" : "hidden"
          }  bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 right-0`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-center flex-1 items-center">
            <li className="mr-3">
              <NavLink
                className="inline-block px-4 text-black no-underline"
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/about"
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/services"
                activeClassName="active"
              >
                Services
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/team"
                activeClassName="active"
              >
                Our Team
              </NavLink>
            </li>
            <li className="mr-3 mt-6 md:mt-0">
              <NavLink
                id="navAction"
                className="mx-auto lg:mx-0 hover:underline border-[white] bg-white text-gray-900 font-bold rounded-full lg:mt-0 py-4 px-8 shadow-2xl opacity-50 border p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                to="/contact"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
              {/* <button className="mr-3 mt-6 lg:mt-0">
            </button> */}
            </li>
          </ul>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </div>
    </nav>
  );
};

export default Navbar;
