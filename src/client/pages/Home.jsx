import { Login } from "../pages"

function Home() {
  return (
    <div className="flex flex-col text-2xl text-slate-900  items-center justify-center mt-10 h-full">
      <h2 className="flex justify-center items-center">
        Welcome to the Project Manager App
      </h2>
      <div className="flex flex-col items-center justify-center flex-grow">
        <Login />
      </div>
      <p className="mt-auto text-sm text-center absolute bottom-0 mb-4">
        P.Nahurnyi 2024
      </p>
    </div>
  )
}

export default Home
