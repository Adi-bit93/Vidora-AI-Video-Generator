import React, { useState } from 'react'

function Navbar({ theme, setTheme }) {
    const [open, setOpen] = useState(false);

    return (
        <header className='sticky top-0 z-40  bg-transparent backdrop-blur-sm'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <nav className='flex items-center justify-between py-3'>
                    <a href="/" className='flex items-center gap-3'>
                        <Logo />
                    </a>
                    <div className='hidden md:flex items-center gap-6'>
                        <a href="#" className='text-sm text-slate-200 hover:text-white'>Home</a>
                        <a href="#gallery" className='text-sm text-slate-200 hover:text-white'>Gallery</a>
                        <a href="#about" className='text-sm text-slate-200 hover:text-white'>About</a>
                        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label='Toggle theme'
                            className='ml-2 inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-slate-800/40 hover:bg-slate-800/60 text-sm'>
                            {theme === "dark" ? "☾ Dark" : "☼ Light"}
                        </button>
                        <a href="#login" className='text-sm bg-indigo-500 hover:bg-indigo-700 px-3 py-2 rounded-lg text-white'>Login</a>
                    </div>
                    {/* Mobile menu button */}
                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label='Toggle menu'
                            aria-expanded={open}
                            className='p-2 rounded-md bg-slate-800/40 hover:bg-slate-800/60'
                        >
                            <svg className="w-6 h-6 text-slate-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {open ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />)}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile menu panel */}
                {open && (
                    <div className="md:hidden mt-2 mb-4 bg-slate-900/70 glass rounded-lg p-4">
                        <a href="#" className="block py-2 text-base text-slate-200">Home</a>
                        <a href="#gallery" className="block py-2 text-base text-slate-200">Gallery</a>
                        <a href="#about" className="block py-2 text-base text-slate-200">About</a>
                        <div className="mt-3 flex items-center gap-2">
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="flex-1 text-left px-3 py-2 rounded-lg bg-slate-800/30"
                            >
                                {theme === "dark" ? "☾ Dark" : "☼ Light"}
                            </button>
                            <a href="#login" className="px-3 py-2 rounded-lg bg-indigo-600 text-white">Login</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar