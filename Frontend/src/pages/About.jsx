import React from "react";

function About() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12  ">
            <h1 className="text-4xl sm:text-5xl nostalgic font-bold text-center mb-12 " >About Vidora</h1>
            <p className="text-slate-300 text-center max-w-2xl mx-auto mb-12" >
                Vidora is a nostalgic, lightweight AI video generator built entirely
                on open-source tools.
                Type a prompt → get a short clip.
                Simple. Fast. Beautiful.
            </p>
            <div className="glass p-8 rounded-xl shadow-soft-lg mb-12">
                <h2 className="text-2xl font-semibold nostalgic mb-4">Why Vidora?</h2>
                <p className="text-slate-300 leading-relaxed"> We want to give anyone the power to create AI videos without expensive GPUs,
                    paid APIs or complicated setups. This project uses open-source models,
                    community-powered APIs, and highly optimized code so that anyone can generate clips
                    even from a normal laptop.</p>
            </div>
            <h2 className="text-3xl nostalgic font-bold text-center mb-8">How it Works</h2>
            <div className="space-y-8">
                <div className="glass p-6 rounded-xl shadow-soft-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">1. User enters a prompt</h3>
                    <p className="text-slate-300">
                        You type something like <span className="font-mono">"A cyberpunk cat riding a bike"</span>.
                        We clean, format, and prepare it for the video model.
                    </p>
                </div>
                <div className="glass p-6 rounded-xl shadow-soft-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">2. Backend sends prompt to open-source model</h3>
                    <p className="text-slate-300 ">
                        Instead of expensive commercial APIs, Vidora uses open-source
                        text-to-video models hosted on community free-tiers.
                    </p>
                </div>
                <div className="glass p-6 rounded-xl shadow-soft-lg">
                    <h3 className="text-xl text-white font-semibold mb-2">3. Model generates a small (256px) video</h3>
                    <p className="text-slate-300">We start with small resolutions to keep things free and accessible.
                        You’ll later be able to upscale if needed.</p>
                </div>
                <div className="glass p-6 rounded-xl shadow-soft-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">4. Video appears instantly on your screen</h3>
                    <p className="text-slate-300">
                        The generated clip is shown in your preview panel and also added to your gallery
                        for later viewing.
                    </p>
                </div>
            </div>
            <div className="text-center mt-12 text-slate-400 text-sm">
                Made for creators, developers, dreamers - <span className="text-indigo-400">with nostalgic in every frame</span>
            </div>
        </section>
    )
}

export default About