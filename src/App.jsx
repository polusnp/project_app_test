import { useState } from "react"
import Sidebar from "./components/Sidebar"
import WithoutProject from "./components/WithoutProject"
import "./index.css"

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: null,
    projects: [],
    tasks: [],
  })

  return (
    <div className="h-screen my-8 flex gap-8">
      <Sidebar />
      {projectState.projects && <WithoutProject />}
    </div>
  )
}

export default App
