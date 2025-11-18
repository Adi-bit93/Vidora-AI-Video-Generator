import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
    const navigate = useNavigate()

    const demoClips = [
        "/videos/blog-1.mp4",
        "/videos/blog-2.mp4",
        "/videos/blog-7.mp4",
        "/videos/blog-4.mp4",
        "/videos/blog-5.mp4",
        "/videos/blog-6.mp4",
    ];

    return (
        <section className='max-w-7xl mx-auto px-4 py-12 text-center'>
            <h1 className='text-4xl sm:text-5xl nostalgic font-bold text-center mb-10'>
                Explore Generated Clips
            </h1>
            <p className='text-slate-300 text-center max-w-2xl mx-auto mb-12'>
                A nostalgic collection of AI-generated videos.
                These are demo placeholders — Week 2 will show real user-generated clips.
            </p>
            <div className='columns-1 sm:columns-2  lg:columns-3 gap-6 space-y-6'>
                {demoClips.map((clip, index) => (
                    <div
                        key={index}
                        className='relative glow-hover break-inside-avoid glass rounded-xl overflow-hidden group shadow-soft-lg'
                    >
                        <video
                            className='w-full rounded-lg group-hover:scale-[1.03]'
                            src={clip}
                            autoPlay
                            loop
                            muted
                        />
                        <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center'>
                            <button 
                                onClick={() => navigate("/player")}
                                className='px-4 py-2 text-sm font-semibold text-white bg-indigo-600/80  rounded-lg hover:bg-indigo-700 transition'>
                             View Clip
                            </button>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}
