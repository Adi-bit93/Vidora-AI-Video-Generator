import React from 'react'
import { useParams, Link, useLocation } from "react-router-dom";


function Player() {
    const {id} = useParams();
    const location = useLocation();
    const videoUrl = location.state?.videoUrl;

    // const videoURL = `/videos/sample${id}.mp4`
  return (
    <div
        className='min-h-screen  px-4 py-10 flex flex-col items-center bg-background'
    >
       <Link to='/gallery'
            className='mb-6 text-purple-400 hover:text-purple-300 font-semibold'
       >
        ⬅ Back to Gallery
       </Link>
       <div className='w-full  max-w-5xl apsect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl'>
        <video src={videoUrl} 
            controls
            autoPlay
            className='w-full h-auto object-cover'
        ></video>
       </div>
       <h2>Watching Clip</h2>
    </div>
  )
}

export default Player