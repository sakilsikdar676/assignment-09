import React from 'react';
import Link from 'next/link';
import { Home, CarFront } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      
      {/* বডির গ্লোয়িং ইফেক্টটি ধরে রাখার জন্য ব্যাকগ্রাউন্ড ওভারলে */}
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm -z-10" />

      {/* Main Glassmorphic Container */}
      <div className="relative z-10 w-full max-w-lg bg-slate-900/30 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl space-y-8 flex flex-col items-center">
        
        {/* Animated Icon / Visual Section */}
        <div className="relative flex items-center justify-center">
          {/* গ্লোয়িং সার্কেল অ্যানিমেশন */}
          <div className="absolute w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative p-6 bg-slate-950/60 border border-gray-800 rounded-2xl text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.1)]">
            <CarFront size={64} className="animate-bounce" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-[#88EF21]">
            404
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
            Lost Your Way?
          </h2>
          <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
            Oops! The ride you are looking for has taken a wrong turn or doesnt exist anymore. Let's get you back on track.
          </p>
        </div>

        {/* Action Button using Next.js Link properly */}
        <Link 
          href="/" 
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-slate-950 font-extrabold rounded-xl transition duration-200 active:scale-[0.98] shadow-[0_0_25px_rgba(52,211,153,0.25)] uppercase tracking-wider text-sm"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </Link>

      </div>

      {/* Decorative background grids or circles */}
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
    </div>
  );
};

export default NotFound;