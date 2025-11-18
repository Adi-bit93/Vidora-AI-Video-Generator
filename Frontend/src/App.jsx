import React, { useState, useEffect } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css'
import Gallery from './pages/Gallery';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Player from './pages/Player';
import PageTransition from './components/PageTransiton';

function App() {

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
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch { }
  }, [theme]);

  return (
    <BrowserRouter>

      <div className="flex flex-col min-h-screen antialiased">

        <div id="__grain" aria-hidden="true"></div>

        {/* NOW inside Router → useNavigate works */}
        <PageTransition>
        <Navbar theme={theme} setTheme={setTheme} />
        </PageTransition>

        <main className="grow">
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
              } />

            <Route path='/login' element={
              <PageTransition>
                <Login />
              </PageTransition>

            } />

            <Route path="/signup" element={
              <PageTransition>
                <Signup />
              </PageTransition>
            } />

            <Route path="/gallery" element={
              <PageTransition>
                <Gallery />
              </PageTransition>
            } />

            <Route path='/player' element={
              <PageTransition>
                <Player />
              </PageTransition>
            } />
            <Route path='/about' element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App
