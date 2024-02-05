import Button from "./Button"

function Sidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-700 text-stone-400 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        Projects
      </h2>
      <div>
        <Button>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  )
}

export default Sidebar
