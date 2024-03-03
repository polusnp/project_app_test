// Login.js
import React from "react"
import { useForm } from "react-hook-form"

export default function Login({ onSubmit, onSuccess, onError }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleLogin = async (data) => {
    try {
      await onSubmit(data)
      onSuccess()
    } catch (error) {
      onError(error)
    }
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <form
        className="w-80 mt-4"
        noValidate
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.email ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.password ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
        >
          Sign In
        </button>
        <div className="flex justify-center mt-4">
          <a
            href="/register"
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            Don't have an account? Sign Up
          </a>
        </div>
      </form>
    </div>
  )
}
