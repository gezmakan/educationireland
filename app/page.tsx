"use client";

import { useState, useEffect } from "react";
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

// Lead Form Component
function LeadForm({ dark = false }: { dark?: boolean }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">✓</div>
        <div className={`text-2xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>Thank You!</div>
        <div className={dark ? "text-gray-300" : "text-gray-600"}>We&apos;ll contact you within 24 hours.</div>
      </div>
    );
  }

  const inputClass = `w-full px-6 py-4 text-lg rounded-lg border-2 ${
    dark
      ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#F7A906]"
      : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#F7A906]"
  } outline-none transition-colors`;

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        type="text"
        required
        placeholder="Your Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClass}
      />
      <input
        type="email"
        required
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={inputClass}
      />
      <input
        type="tel"
        required
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputClass}
      />
      <input
        type="text"
        required
        placeholder="City"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
        className={inputClass}
      />
      <button
        type="submit"
        disabled={sending}
        className="w-full py-5 text-xl font-bold text-white rounded-lg gradient-orange hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {sending ? "Sending..." : "GET FREE CONSULTATION →"}
      </button>
    </form>
  );
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative text-white">
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
            <Image src="/educationstatelogo.png" alt="Education State" width={400} height={121} />
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
      <section className="py-20 bg-[#F0F7F4]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-[#1a1a1a]">
            Why Study in <span className="text-[#2D6A4F]">Ireland</span>?
          </h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
            Every year, due to its high education standards, approximately 20,000 international students come to Ireland!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                ),
                title: "Top 100 Universities",
                desc: "Study at globally ranked institutions with world-class faculty and facilities",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                title: "Easy Visa Process",
                desc: "Student visas processed in about 3-4 weeks. Zero refusals for our Master's students",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Work While Studying",
                desc: "Earn about RM70/hour minimum wage working 20 hours/week during your studies",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 6h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 18h20" />
                  </svg>
                ),
                title: "2-Year Work Visa",
                desc: "Stay and work full-time for 2 years after graduation at top companies",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                ),
                title: "English Speaking",
                desc: "English-taught programs with IELTS or Duolingo options",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Friendly Culture",
                desc: "Irish people are known worldwide for their warmth and welcoming nature",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 19V7a2 2 0 012-2h12a2 2 0 012 2v12"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 19V9h10v10"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 13h4" />
                  </svg>
                ),
                title: "Gateway to Europe",
                desc: "Easy Europe access with 1-stop routes from Malaysia",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 20h18"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 20l6-10 4 6 4-7 2 11"
                    />
                  </svg>
                ),
                title: "Beautiful Country",
                desc: "Green landscapes, dramatic cliffs, historic castles - explore while you study",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 3v6m0 0l3-3m-3 3L9 6m-3 9h12a2 2 0 012 2v4H4v-4a2 2 0 012-2z"
                    />
                  </svg>
                ),
                title: "Modern Tech Hub",
                desc: "Ireland is a European tech hub with innovation-focused campuses and startup energy.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 shadow-sm hover:bg-[#F7A906]/10 transition-colors">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00B2CC]/10 text-[#00B2CC]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
            <span>✓ 100% Free Service</span>
            <span>✓ Zero Visa Refusals</span>
            <span>✓ Dublin Office Support</span>
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
            <LeadForm />
          </div>
        </div>
      )}
    </main>
  );
}
