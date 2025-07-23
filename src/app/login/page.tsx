import React from 'react'

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-100 to-slate-300 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">Welcome Back</h2>
        <form action="/api/users/login" method="POST" className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default page