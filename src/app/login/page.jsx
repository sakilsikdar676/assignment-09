"use client";

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { authClient } from "@/src/lib/auth-client";
import { errorToast, successToast } from "../utils-toast/toast";
import { redirect } from "next/navigation";

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      
    });
    console.log(data , error);
    
    if (data) {
      console.log(data);
      successToast("Account created successfully");
      redirect("/");
    }
    if (error) {
      console.log(error);
      errorToast("Something went wrong");
    }
  };

   const handleGoogleSignIn = async () => {
      try {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: "/",
        });
      } catch (err) {
        console.error("Google sign in error:", err);
        errorToast("Google sign in failed");
      }
    };



  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center overflow-x-hidden">
      <div className="absolute inset-0  backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-md bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
        <div className="w-full h-44 relative overflow-hidden">
          <img
            src={`https://cdn.pixabay.com/photo/2024/08/19/10/15/ai-generated-8980377_1280.jpg`} // এখানে ওপরের ছোট গাড়ির ইমেজ পাথ দিবে
            alt="Featured Car"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Email Address
            </label>
            <div className="flex items-center gap-3 bg-slate-950/60 border border-gray-800 rounded-2xl px-4 py-3.5 focus-within:border-emerald-500 transition">
              <Mail className="text-gray-500 shrink-0" size={18} />
              <input
                name="email"
                type="email"
                placeholder="davidjonson@gmail.com"
                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-600 focus:ring-0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Password
            </label>
            <div className="flex items-center gap-3 bg-slate-950/60 border border-gray-800 rounded-2xl px-4 py-3.5 focus-within:border-emerald-500 transition">
              <Lock className="text-gray-500 shrink-0" size={18} />
              <input
                name="password"
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-600 focus:ring-0"
              />
            </div>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center gap-2.5 pt-1">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded bg-slate-950 border-gray-800 text-emerald-500 focus:ring-0 focus:ring-offset-0 transition cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-xs text-gray-400 select-none cursor-pointer"
            >
              I agree to all Terms & Conditions and Privacy Policy
            </label>
          </div>

          {/* Main Sign Up Button (Brilliant Emerald Gradient) */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-slate-950 font-bold rounded-2xl transition duration-200 active:scale-[0.98] shadow-[0_0_25px_rgba(52,211,153,0.2)]"
          >
            LogIn
          </button>

          {/* Divider line */}
          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800/60"></div>
            </div>
            <span className="relative px-3 bg-transparent text-xs text-gray-500 uppercase tracking-wider">
              or continue with
            </span>
          </div>

          {/* Social Buttons (Google & Facebook) */}
          <div className="">
            {/* Google */}
            <button onClick={handleGoogleSignIn} type="button" className="w-full flex items-center justify-center gap-2.5 py-3 bg-slate-950/40 hover:bg-slate-950/80 border border-gray-800 rounded-xl text-sm font-medium text-white transition active:scale-95">
              <FcGoogle className="text-3xl" />
              <span className="text-xl">Google</span>
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-xs text-gray-500 pt-2">
            Dont have an account?{" "}
            <Link
              href="/register"
              className="text-emerald-400 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
