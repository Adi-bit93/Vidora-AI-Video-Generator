import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Vidora — Crafted with nostalgia.
        </div>
        <div className="flex items-center gap-4">
          <a className="text-xs text-slate-300 hover:text-white" href="#terms">Terms</a>
          <a className="text-xs text-slate-300 hover:text-white" href="#privacy">Privacy</a>
          <a className="text-xs text-slate-300 hover:text-white" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
