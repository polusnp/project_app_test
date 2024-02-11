import { useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

import "./index.css"

function App() {
  const [user, setUser] = useState(null)

  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
