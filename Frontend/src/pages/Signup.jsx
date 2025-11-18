import React from 'react'
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-b from-background to-background/60">
            <div className='className="w-full max-w-md backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl bg-white/5 dark:bg-black/20"'>
                <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
                    Create Account
                </h1>
                <form className='space-y-4'>
                
                    <div>
                        <label className='text-sm font-medium'>Name</label>
                        <input type="text"
                            className='w-full rounded-xl p-3 bg-white/10 dark:bg-black/30 border border-white/10'
                        />
                    </div>
                    <div>
                        <label className='text-sm font-medium'>Email</label>
                        <input type="text"
                            className='w-full rounded-xl p-3 bg-white/10 dark:bg-black/30 border border-white/10'
                        />
                    </div>
                    <div>
                        <label className='text-sm font-medium'>Password</label>
                        <input type="text"
                            className='w-full rounded-xl p-3 bg-white/10 dark:bg-black/30 border border-white/10'
                        />
                    </div>

                    <button className='w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-bold shadow-lg my-4'>
                        Sign Up
                    </button>
                </form>
                <p className='text-center text-sm mt-6 opacity-80 '>
                    Already have an account?{" "}
                    <Link to="/login" className='text-purple-700 hover:text-purple-500'>Login</Link>
                </p>
            </div>

        </div>
    )
}

export default Signup