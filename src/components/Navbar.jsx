import React from "react"
import { NavLink } from "react-router-dom"

import { ImHome3 } from "react-icons/im"
import { LuLogIn } from "react-icons/lu"
import { GiArchiveRegister } from "react-icons/gi"
import { GoProjectSymlink } from "react-icons/go"

function Navbar() {
  return (
    <header className="flex justify-around gap-5 items-center my-5 text-lg sm:text-4xl">
      <NavLink
        to="/"
        className="flex text-lg sm:text-4xl font-medium  text-teal-600 hover:text-lime-800 transition-transform duration-500 transform hover:-translate-y-1"
      >
        <ImHome3 className="" />
      </NavLink>
      <NavLink
        to="/login"
        className="flex font-medium  text-fuchsia-500 hover:text-fuchsia-800 transition-transform duration-500 transform hover:-translate-y-1"
      >
        <LuLogIn className="" />
      </NavLink>
      <NavLink
        to="/register"
        className="flex font-medium  text-fuchsia-500 hover:text-fuchsia-800 transition-transform duration-500 transform hover:-translate-y-1"
      >
        <GiArchiveRegister className="" />
      </NavLink>
      <NavLink
        to="/projects"
        className="flex font-medium  text-fuchsia-500 hover:text-fuchsia-800 transition-transform duration-500 transform hover:-translate-y-1"
      >
        <GoProjectSymlink className="" />
      </NavLink>
    </header>
  )
}

export default Navbar

{
  /* <header className="header">
      <NavLink
        to="/"
        className="flex text-lg sm:text-2xl font-medium transition-transform duration-500 transform hover:-translate-y-1"
        // className="w-16 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text hover:text-pink-300">HOME</p>
      </NavLink>
      <nav className="flex text-lg sm:text-2xl sm:gap-4 gap-6 font-medium ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-pink-300"
              : "blue-gradient_text hover:text-pink-300 transition-transform duration-500 transform hover:-translate-y-1"
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive
              ? "text-pink-300"
              : "blue-gradient_text hover:text-pink-300 transition-transform duration-500 transform hover:-translate-y-1"
          }
        >
          WORKS
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-pink-300"
              : "blue-gradient_text hover:text-pink-300 transition-transform duration-500 transform hover:-translate-y-1"
          }
        >
          CONTACT
        </NavLink>
      </nav>
    </header> */
}
