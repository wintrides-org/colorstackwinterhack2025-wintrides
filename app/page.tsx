/**
 * Home Page - Landing page
 * 
 * This is the landing page where users start.
 * Presents the WintRides brand and value proposition 
 * Provides a clear CTA to the users to sign up or sign in
 */

"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf7f1] px-6 py-12 text-[#1f2b37]">
      {/* Centered card container to mimic the screenshot style */}
      <div className="mx-auto max-w-xl rounded-3xl bg-[#fdfaf5] px-8 py-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        <div className="text-center">
          {/* Brand wordmark */}
          <p className="text-4xl tracking-wide text-[#b28762]">
            WintRides
          </p>

          {/* Main headline */}
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-[#2a3b4c]">
            Drive when you can. 
            <br />
            Ride when you want.
          </h1>

          {/* Supporting message */}
          <p className="mt-6 text-lg text-[#5b6670]">
            Your campus, your community
          </p>

          {/* Primary call-to-action */}
          <div className="mt-10">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-[#e6c07a] px-10 py-3 text-lg font-medium text-white shadow-[0_8px_20px_rgba(230,192,122,0.35)] transition hover:translate-y-[-1px] hover:bg-[#ddb76d]"
            >
              Sign Up
            </Link>
          </div>

          {/* Secondary link for existing users */}
          <p className="mt-8 text-sm text-[#6a7680]">
            Already signed up?{" "}
            <Link
              href="/signin"
              className="font-medium text-[#2f6db3] underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}