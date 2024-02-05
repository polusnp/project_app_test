function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:texyt-base rounded-md bg-amber-800 text-stone-400 hover:bg-amber-700 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
