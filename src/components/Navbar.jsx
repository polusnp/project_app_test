import React from "react"
import { NavLink } from "react-router-dom"

import { ImHome3 } from "react-icons/im"

function Navbar() {
  return (
    <header>
      <NavLink
        to="/"
        className="flex text-lg sm:text-2xl font-medium transition-transform duration-500 transform hover:-translate-y-1"
      >
        <ImHome3 className="text-red-500" />
      </NavLink>
    </header>
  )
}

export default Navbar
