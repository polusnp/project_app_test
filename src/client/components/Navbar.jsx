import React from "react"
import { NavLink } from "react-router-dom"

import { ImHome3 } from "react-icons/im"
import { LuLogIn } from "react-icons/lu"
import { GiArchiveRegister } from "react-icons/gi"
import { GoProjectSymlink } from "react-icons/go"

function Navbar() {
  return (
    <>
      <header className="flex text-lg sm:text-3xl justify-center gap-14 my-5">
        <NavLink
          to="/"
          className="flex font-medium text-slate-600 hover:text-slate-800 transition-transform duration-500 transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-center">
            <ImHome3 className="" />
            <p className="text-sm">HOME</p>
          </div>
        </NavLink>
        <NavLink
          to="/login"
          className="flex font-medium  text-slate-600 hover:text-slate-800 transition-transform duration-500 transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-center">
            <LuLogIn className="" />
            <p className="text-sm">SIGN IN</p>
          </div>
        </NavLink>
        <NavLink
          to="/register"
          className="flex font-medium  text-slate-600 hover:text-slate-800 transition-transform duration-500 transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-center">
            <GiArchiveRegister className="" />
            <p className="text-sm">SIGN UP</p>
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          className="flex font-medium  text-slate-600 hover:text-slate-800 transition-transform duration-500 transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-center">
            <GoProjectSymlink className="" />
            <p className="text-sm">My Projects</p>
          </div>
        </NavLink>
      </header>
    </>
  )
}

export default Navbar
