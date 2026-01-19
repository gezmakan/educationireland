"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}
import Image from "next/image";

// Countdown Timer Component
function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date("2026-04-30T23:59:59").getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        setTime({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          mins: Math.floor((diff % 3600000) / 60000),
          secs: Math.floor((diff % 60000) / 1000),
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {[
        { v: time.days, l: "Days" },
        { v: time.hours, l: "Hours" },
        { v: time.mins, l: "Minutes" },
        { v: time.secs, l: "Seconds" },
      ].map((t, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl md:text-6xl font-black text-[#F7A906]">{String(t.v).padStart(2, "0")}</div>
          <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">{t.l}</div>
        </div>
      ))}
    </div>
  );
}

// Custom HubSpot Form (no watermark)
function ConsultationForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const subjects = [
    "Masters in International Business",
    "Masters in Computer Science",
    "Masters in Data Analytics",
    "Masters in Finance",
    "Masters in Marketing",
    "Masters in Engineering",
    "Bachelors Degree",
    "English Language Course",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/5190509/29945ab3-c7b9-4574-a5b8-dc3716bbf6b3",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: form.firstname },
              { name: "lastname", value: form.lastname },
              { name: "phone", value: form.phone },
              { name: "email", value: form.email },
              { name: "programme_choice_1", value: form.subject },
              { name: "message", value: form.message },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      const data = await response.json();
      console.log("HubSpot response:", response.status, data);

      if (response.ok) {
        setStatus("success");
      } else {
        console.error("HubSpot error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
        <p className="text-gray-600">We&apos;ll contact you within 24 hours.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F7A906] focus:ring-2 focus:ring-[#F7A906]/20 outline-none transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
          <input
            type="text"
            required
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
          <input
            type="text"
            required
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Which subject do you want to study?</label>
        <select
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={inputClass}
        >
          <option value="">Select a subject...</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass + " resize-none"}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 text-lg font-bold text-white rounded-lg gradient-orange hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/dublin.jpg"
          alt="Dublin cityscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-12 md:px-6 md:py-24">
          {/* Logo */}
          <div className="flex justify-center mb-4 md:mb-12">
            <Image src="/educationstatelogo.png" alt="Education State" width={400} height={121} className="w-[200px] md:w-[400px] h-auto" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1
              className="text-4xl md:text-6xl font-black leading-tight mb-8 text-white"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.45)" }}
            >
              Start your Master&apos;s Degree Journey in Ireland
            </h1>
            <div className="flex flex-wrap justify-center gap-3 text-lg">
              {[
                "100% Free Consultation",
                "15+ Years Ireland-Only Expertise",
                "Dublin Office Support",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-5 py-2.5 text-base font-semibold text-gray-900 shadow-sm"
                >
                  <svg className="h-4 w-4 text-[#F7A906]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-lg text-white/90">
              Trusted by students worldwide. Now open for Malaysia consultations.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CONSULTATION SECTION ============ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/consultimage.png"
                alt="Students in Ireland"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <p className="text-[#F7A906] font-semibold mb-3">Take a Step Forward for Your Career...</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Imagine Yourself in Ireland!</h2>
              <ul className="space-y-3 text-gray-700 mb-8">
                {[
                  "Study for a Master’s Degree at the World’s Prestigious Universities",
                  "Take Your English to the Highest Level",
                  "Stand Out from Your Competitors",
                  "Strengthen Your CV",
                  "Work in Ireland after graduation and build real international experience.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-[#2D6A4F] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Get in Touch for Free Consulting!
            </button>
            <p className="text-base text-gray-600 mt-3">
              We&apos;ll guide you through universities, fees, visas, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHY IRELAND ============ */}
      <section className="py-20 bg-[#F0F7F4] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-[#1a1a1a]">
            Why Study in <span className="text-[#2D6A4F]">Ireland</span>?
          </h2>
          <p className="text-xl text-gray-500 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Join <span className="font-bold text-[#2D6A4F]">20,000+</span> international students choosing Ireland every year
          </p>

          {/* Mobile: Horizontal scroll carousel */}
          <div className="md:hidden -mx-6 px-6">
            <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
              {[
                {
                  title: "Top 100 Universities",
                  desc: "Study at globally ranked institutions with world-class faculty and facilities",
                  iconColor: "text-emerald-600 bg-emerald-100",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                },
                {
                  title: "Fast Visa Process",
                  desc: "Student visas processed in 3-4 weeks with high approval rates",
                  iconColor: "text-blue-600 bg-blue-100",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                },
                {
                  title: "Work 20 Hrs/Week",
                  desc: "Part-time work rights during studies with competitive hourly wages",
                  iconColor: "text-amber-600 bg-amber-100",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                },
                {
                  title: "2-Year Post-Study Visa",
                  desc: "Stay and work full-time for 2 years after graduation at top companies",
                  iconColor: "text-purple-600 bg-purple-100",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                },
                {
                  title: "English Speaking",
                  desc: "English-taught programs with IELTS or Duolingo options",
                  iconColor: "text-rose-600 bg-rose-100",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                },
                {
                  title: "Welcoming Culture",
                  desc: "Irish people are known worldwide for their warmth and friendly nature",
                  iconColor: "text-green-600 bg-green-100",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                },
                {
                  title: "Gateway to Europe",
                  desc: "Travel across 27 EU countries while you study",
                  iconColor: "text-indigo-600 bg-indigo-100",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                },
                {
                  title: "Stunning Landscapes",
                  desc: "Green hills, dramatic cliffs, historic castles - explore while you study",
                  iconColor: "text-teal-600 bg-teal-100",
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 20h18" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20l6-10 4 6 4-7 2 11" /></>
                },
                {
                  title: "Global Tech Hub",
                  desc: "Home to Google, Meta, Apple & 1000+ tech companies",
                  iconColor: "text-violet-600 bg-violet-100",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                },
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-[280px] snap-center">
                  <div className="h-full bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                    <div className={`w-14 h-14 rounded-xl ${item.iconColor} flex items-center justify-center mb-4`}>
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">Swipe for more →</p>
          </div>

          {/* Desktop: Clean grid with subtle hover */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Top 100 Universities",
                desc: "Study at globally ranked institutions with world-class faculty and facilities",
                iconColor: "text-emerald-600 bg-emerald-100 group-hover:bg-emerald-200",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              },
              {
                title: "Fast Visa Process",
                desc: "Student visas processed in 3-4 weeks with high approval rates",
                iconColor: "text-blue-600 bg-blue-100 group-hover:bg-blue-200",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              },
              {
                title: "Work 20 Hrs/Week",
                desc: "Part-time work rights during studies with competitive hourly wages",
                iconColor: "text-amber-600 bg-amber-100 group-hover:bg-amber-200",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              },
              {
                title: "2-Year Post-Study Visa",
                desc: "Stay and work full-time for 2 years after graduation at top companies",
                iconColor: "text-purple-600 bg-purple-100 group-hover:bg-purple-200",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              },
              {
                title: "English Speaking",
                desc: "English-taught programs with IELTS or Duolingo options",
                iconColor: "text-rose-600 bg-rose-100 group-hover:bg-rose-200",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              },
              {
                title: "Welcoming Culture",
                desc: "Irish people are known worldwide for their warmth and friendly nature",
                iconColor: "text-green-600 bg-green-100 group-hover:bg-green-200",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              },
              {
                title: "Gateway to Europe",
                desc: "Travel across 27 EU countries while you study",
                iconColor: "text-indigo-600 bg-indigo-100 group-hover:bg-indigo-200",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              },
              {
                title: "Stunning Landscapes",
                desc: "Green hills, dramatic cliffs, historic castles - explore while you study",
                iconColor: "text-teal-600 bg-teal-100 group-hover:bg-teal-200",
                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 20h18" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20l6-10 4 6 4-7 2 11" /></>
              },
              {
                title: "Global Tech Hub",
                desc: "Home to Google, Meta, Apple & 1000+ tech companies",
                iconColor: "text-violet-600 bg-violet-100 group-hover:bg-violet-200",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${item.iconColor} flex items-center justify-center mb-5 transition-colors duration-300`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Start Your Ireland Journey
            </button>
          </div>
        </div>

        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
      </section>

      {/* ============ SUCCESS STORIES ============ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[1.5rem] md:text-[2.75rem] font-black text-center mb-4">
            Students Who Took This Journey With Us
          </h2>
          <p className="text-xl text-gray-500 text-center mb-16">
            They are building careers at global tech companies in Ireland
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { src: "/professionals/erelozturk.png", alt: "Erel Ozturk" },
              { src: "/professionals/ebubekirayhan.png", alt: "Ebubekir Ayhan" },
              { src: "/professionals/bilgetuna.png", alt: "Bilge Tuna" },
              { src: "/professionals/cemreer.png", alt: "Cemre Er" },
            ].map((p) => (
              <div key={p.src} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-black mb-8 text-[#1a1a1a] text-center">Ireland is Home to Global Giants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  label: "US Tech Companies",
                  companies: ["Google", "Meta", "Apple"],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Game Companies",
                  companies: ["EA", "Ubisoft", "Activision Blizzard"],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  label: "Financial Services",
                  companies: ["JPMorgan", "Citi", "Bank of America"],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                },
                {
                  label: "Pharma Companies",
                  companies: ["Pfizer", "Johnson & Johnson", "Abbott"],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F7A906]/20 text-[#F7A906] mb-4">
                    {item.icon}
                  </div>
                  <div className="text-lg font-bold text-[#1a1a1a]">{item.label}</div>
                  <div className="mt-2 text-base text-gray-600">
                    {item.companies.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Get Free Consultation
            </button>
            <p className="mt-3 text-sm text-gray-600">
              Talk to someone who has worked at a global tech company in Ireland
            </p>
          </div>
        </div>
      </section>

      {/* ============ ABOUT EDUCATION STATE ============ */}
      <section className="py-20 bg-[#F0F7F4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-[#F7A906]">Why</span> Education State?
            </h2>
            <p className="text-lg text-gray-700">
              Founded in 2010, we are Ireland-only specialists with an office in Dublin.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-4 text-lg text-gray-600">
                <p><strong className="text-gray-900">All services are 100% FREE.</strong> We get paid by universities, not you.</p>
                <p>Our team are former international students who&apos;ve been through the journey themselves.</p>
                <p>We support you <strong className="text-gray-900">before AND after</strong> you arrive in Ireland.</p>
                <p>Malaysia is our newest focus, and consultations are now open.</p>
              </div>

            </div>

            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image
                src="/educationstateteam.png"
                alt="Education State team"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { value: "3", label: "Offices Worldwide" },
              { value: "34", label: "Expert Consultants" },
              { value: "14+", label: "Years Experience" },
              { value: "4,782", label: "Students Helped" },
            ].map((s) => (
              <div key={s.label} className="bg-white/70 px-6 py-4 rounded-2xl text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-black text-[#F7A906]">{s.value}</div>
                <div className="text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 text-lg text-gray-700">
              <span className="font-semibold text-[#1a1a1a]">Education Ireland</span>
              <span className="hidden md:inline text-gray-300">•</span>
              <span className="text-[#F7A906] font-extrabold text-xl">4.9</span>
              <span className="flex items-center gap-1 text-[#F7A906]" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span className="text-gray-500">(427 Google reviews)</span>
            </div>
            <div className="mt-3 text-gray-600">
              <a
                href="https://maps.app.goo.gl/MTH73Jve4EhA2Zwy8"
                className="text-[#00B2CC] font-semibold hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                23 Marlborough St, North City, Dublin, D01 R2V3, Ireland
              </a>
            </div>
            <div className="mt-1 text-gray-600">Malaysia contact: +60 11-2502 4336</div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 gradient-orange text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
            What Our Students Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Bebe E.",
                quote:
                  "Knowing that they have an office in Ireland and that I can always knock on their door gives me a sense of security.",
                image: "/Bebe E..png",
              },
              {
                name: "Hilola H.",
                quote:
                  "A good consultancy company that I can confidently recommend to anyone who wants to study abroad.",
                image: "/Hilola H..png",
              },
              {
                name: "Nisa Nur S.",
                quote: "Don't be afraid to write your own story...",
                image: "/Nisa Nur S..png",
              },
              {
                name: "Elif O.",
                quote:
                  "Knowing that they have an office in Ireland and that I can always knock on their door gives me a sense of security.",
                image: "/Elif O. .png",
              },
              {
                name: "Muhammad T.",
                quote:
                  "I owe getting my visa to Education Ireland. Their care, interest, patience, and clear answers to all my questions helped me manage this process very smoothly.",
                image: "/Muhammad T..png",
              },
              {
                name: "Tolga S.",
                quote:
                  "I am truly grateful to my consultant Seda, who supported me throughout my entire journey in Ireland from sharing her knowledge with me to being there whenever I had questions.",
                image: "/Tolga S..png",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-center mb-5">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-sm">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="96px" />
                  </div>
                </div>
                <div className="font-bold text-center">{t.name}</div>
                <p className="text-gray-600 mt-3 text-center italic">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
            FAQ About Master&apos;s Degrees in Ireland
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                q: "When is the application deadline?",
                a: "For September 2026 intakes, the application deadline is April 30. Note: Some universities may be more flexible.",
              },
              {
                q: "Do I have to take the IELTS exam?",
                a: "The Irish government now accepts the Duolingo English Test for all programs. The Duolingo exam costs about RM230, while the IELTS exam costs about RM1,000.",
              },
              {
                q: "Can I apply without an English proficiency score?",
                a: "Yes, you can apply. If your academic background is considered sufficient, the university may issue a Conditional Offer. This means your offer will become unconditional once you submit proof of English proficiency.",
              },
              {
                q: "What is the minimum GPA required?",
                a: "Some universities require a minimum GPA of 2.2 out of 4, while others require at least 2.6.",
              },
              {
                q: "Do universities offer scholarships?",
                a: "NCI offers about RM10,000 scholarships to students with a GPA above 2.60, and about RM20,000 scholarships to students with a GPA above 3.00.\n\nGriffith College offers scholarships between about RM13,000 and RM18,000, depending on both GPA and English proficiency.\n\nDBS provides about RM5,000 to students who pay their deposit after receiving the offer letter and complete the remaining payment before the course start date.",
              },
              {
                q: "Can I work while studying?",
                a: "Yes. During summer and Christmas holidays, you are allowed to work full-time, and part-time during the rest of the year. As of January 1, 2025, the minimum wage in Ireland is about RM70 per hour, making Ireland one of the countries with the highest minimum wages in the world.",
              },
              {
                q: "Do I have the right to work in Ireland after graduation?",
                a: "Graduates of master's programs in Ireland are granted a 2-year work and residence permit. With this permit, you can work full-time in Ireland after graduation.",
              },
              {
                q: "Do I need to pay an application fee?",
                a: "Yes. To start the process, a about RM1,300 deposit is required. If you are accepted, this amount will be deducted from your tuition fee. If you are not accepted, the deposit will be fully refunded.",
              },
              {
                q: "Have any of your students ever been refused a visa?",
                a: "So far, none of our master's students have received a visa refusal.",
              },
              {
                q: "If my visa is refused, how much will be deducted?",
                a: "Only about RM1,300 will be deducted. The remaining tuition fee will be fully refunded to you.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-[#00B2CC] mb-2">{faq.q}</h3>
                <p className="text-gray-600 whitespace-pre-line">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 bg-[#0F2E28] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12">
            Special Offer for September 2026
          </h2>

          <div className="bg-white/10 rounded-2xl p-8 md:p-12 max-w-xl mx-auto">
            <div className="grid gap-3 text-left mb-6">
              {[
                "Special Scholarships for Successful Students",
                "Admission with the Duolingo Exam",
                "Flexible Installment Payment Options",
                "Free Health Insurance (about RM500)",
                "Free Accommodation Arrangement (about RM500)",
                "Ongoing Support from Our Dublin Office",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-lg">
                  <span className="text-[#F7A906] text-2xl">✓</span>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-sm uppercase tracking-wider text-gray-300">Total Discount</span>
              <span className="text-3xl font-black text-[#F7A906]">RM1,000</span>
            </div>
            <div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Get Your FREE Consultation
              </button>
              <p className="mt-4 text-sm text-gray-300">
                Join 4,782+ students who started their Ireland journey with us
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Based in Putrajaya, supporting students across Malaysia
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
            <span>✓ 100% Free Consultation</span>
            <span>✓ Local Dublin Office Support</span>
            <span>✓ 14+ Years Experience</span>
          </div>
        </div>
      </section>

      {/* ============ SEPTEMBER 2026 URGENCY ============ */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
            LIMITED TIME
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Don&apos;t Miss the September 2026 Intake
          </h2>
          <p className="text-xl text-[#F7A906] font-semibold mb-10">Application deadline: April 30, 2026</p>
          <Countdown />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-black text-gray-500 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-xl font-bold text-white mb-2">EDUCATION STATE</div>
          <p>© {new Date().getFullYear()} Education State. All rights reserved.</p>
        </div>
      </footer>

      {/* ============ CONSULTATION MODAL ============ */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:text-gray-800"
              aria-label="Close consultation form"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center">Get Free Consultation</h3>
            <ConsultationForm />
          </div>
        </div>
      )}

      {/* ============ WHATSAPP BUTTON ============ */}
      <a
        href="https://wa.me/60112502436?text=Hi%2C%20I%27m%20interested%20in%20studying%20in%20Ireland"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}
