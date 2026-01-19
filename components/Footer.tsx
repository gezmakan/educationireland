"use client";

import { useEffect, useState } from "react";
import { LogoIcon } from "./Logo";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: April 30, 2026
    const targetDate = new Date("2026-04-30T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 sm:gap-6">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
            <span className="text-2xl sm:text-4xl font-bold text-white">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-gray-400">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a]">
      {/* Countdown section */}
      <div className="py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Hurry to Catch the <span className="text-[#F7A906]">September 2026</span> Opportunity!
          </h2>
          <p className="text-gray-400 mb-8">Application deadline: April 30, 2026</p>

          <CountdownTimer />

          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 mt-10 gradient-orange text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Act Now - Get Free Consulting
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <LogoIcon size={32} />
              <span className="text-white font-semibold">Education State</span>
            </div>

            <p className="text-gray-400 text-sm text-center sm:text-right">
              &copy; {new Date().getFullYear()} Education State. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
