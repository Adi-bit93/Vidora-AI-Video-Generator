import React from 'react'
import { Link } from "react-router-dom"


function Login() {
  return (
    <div className='min-h-screen  flex items-center justify-center px-4 bg-linear-to-b from-background to-background/60'>
        <div className='w-full max-w-md glow-hover backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl bg-white/5 dark:bg-black/20'>
            <h1 className='font-bold text-3xl text-center mb-6 tracking-wide'>
                Welcome Back 
            </h1>
            <form className='space-y-3'>
                <div>
                    <label className='text-sm font-medium p-2' >Email :</label>
                    <input type="email" 
                        className='w-full p-3 rounded-xl bg-white/10 dark:bg-clack/30 border border-white/10 focus:outline-none'
                        placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label className='text-sm font-medium p-2' > Password :</label>
                    <input type="password" 
                        className='w-full p-3 rounded-xl bg-white/10 dark:bg-clack/30 border border-white/10 focus:outline-none'
                        placeholder='Enter your password'
                    />
                </div>
                <button 
                    className='w-full rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white shadow-lg font-bold my-4 p-2'
                >
                    Login
                </button>
            </form>
            <p>
                Don’t have an account?{" "}
                <Link to="/signup" className='text-purple-500 font-semibold'>Create one</Link>
            </p>
        </div>
        
    </div>
  )
}

export default Login