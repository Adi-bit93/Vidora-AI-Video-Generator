import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  })

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add("dark");
    }else {
      root.classList.remove("dark");
    }
    try { 
      localStorage.setItem("theme", theme);
    } catch{}
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <div id="__grain" aria-hidden="true" className=""></div>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
