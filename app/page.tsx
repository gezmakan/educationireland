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
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
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
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative text-white" style={{ backgroundImage: "url('/dublin.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-3 py-6 md:px-6 md:py-24">
          {/* Logo */}
          <div className="flex justify-center mb-4 md:mb-12">
            <Image src="/educationstatelogo.png" alt="Education State" width={352} height={106} />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Your Master&apos;s Journey in Ireland Starts Here
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-emerald-500 px-4 py-2 rounded-full font-semibold">✓ 100% Free Service</span>
              <span className="bg-amber-400 text-black px-4 py-2 rounded-full font-semibold">✓ 14+ Years Experience</span>
              <span className="bg-purple-500 px-4 py-2 rounded-full font-semibold">✓ On-Ground Support in Ireland</span>
            </div>
            <p className="mt-6 text-lg opacity-80">
              We guide you through universities, tuition fees, applications, visas, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ============ HERO FORM ============ */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Get Free Consultation</h2>
            <LeadForm />
            <p className="text-center text-sm text-gray-500 mt-4">
              Join 4,782+ students who started their Ireland journey with us
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHY IRELAND ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            Why <span className="text-[#00B2CC]">20,000 Students</span> Choose Ireland Every Year
          </h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
            World-class education, career opportunities, and a path to working at global tech giants
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎓", title: "Top 100 Universities", desc: "Study at globally ranked institutions with world-class faculty and facilities" },
              { icon: "📋", title: "Easy Visa Process", desc: "Student visas processed in just 3-4 weeks. Zero refusals for our Master's students" },
              { icon: "💼", title: "Work While Studying", desc: "Earn €14.15/hour minimum wage working 20 hours/week during your studies" },
              { icon: "🚀", title: "2-Year Work Visa", desc: "Stay and work full-time for 2 years after graduation at top companies" },
              { icon: "🗣️", title: "English Speaking", desc: "No need to learn a new language. Irish English is clear and easy to understand" },
              { icon: "🤝", title: "Friendly Culture", desc: "Irish people are known worldwide for their warmth and welcoming nature" },
              { icon: "✈️", title: "Gateway to Europe", desc: "Easy access to all of Europe with affordable flights from Dublin" },
              { icon: "🏞️", title: "Beautiful Country", desc: "Green landscapes, dramatic cliffs, historic castles - explore while you study" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-[#F7A906]/10 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SPECIAL OFFER ============ */}
      <section className="py-20 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🎁</div>
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Special Offer for <span className="text-[#F7A906]">September 2026</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left mb-10">
            {[
              "Special Scholarships for Successful Students",
              "Admission with Duolingo ($49 vs €200 IELTS)",
              "Flexible Installment Payment Options",
              "Free Health Insurance (€100 value)",
              "Free Accommodation Arrangement (€100 value)",
              "Ongoing Support from Our Dublin Office",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-lg">
                <span className="text-[#F7A906] text-2xl">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="inline-block bg-[#F7A906] text-black px-8 py-4 rounded-xl">
            <div className="text-sm uppercase tracking-wider">Total Savings</div>
            <div className="text-4xl font-black">€200+</div>
          </div>
        </div>
      </section>

      {/* ============ SUCCESS STORIES ============ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            Our Students Now Work At
          </h2>
          <p className="text-xl text-gray-500 text-center mb-16">
            From classroom to career at the world&apos;s best companies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Erel Ozturk", company: "Druid Software", role: "Software Engineer", school: "National College of Ireland" },
              { name: "Ebubekir Ayhan", company: "Microsoft", role: "Solution Engineer", school: "National College of Ireland" },
              { name: "Bilge Tuna", company: "Covalen", role: "Energy Engineer", school: "TU Dublin" },
              { name: "Cemre Er", company: "TikTok", role: "Legal Consultant", school: "Dublin City University" },
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F7A906] to-[#E09800] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="font-bold text-lg">{p.name}</div>
                <div className="text-[#F7A906] font-semibold">{p.company}</div>
                <div className="text-gray-500 text-sm">{p.role}</div>
                <div className="text-gray-400 text-sm mt-2">{p.school}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-center mb-6">Ireland is Home to Global Giants</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm text-gray-600">
              <div>9 of Top 10<br/><strong>Software Companies</strong></div>
              <div>9 of Top 10<br/><strong>US Tech Companies</strong></div>
              <div>8 of Top 10<br/><strong>Game Companies</strong></div>
              <div>18 of Top 25<br/><strong>Financial Services</strong></div>
              <div>All Top 10<br/><strong>Pharma Companies</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT EDUCATION STATE ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Why <span className="text-[#F7A906]">Education State</span>?
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>Founded in 2010, we are the <strong className="text-gray-900">only consultancy focused exclusively on Ireland</strong> with an office in Dublin.</p>
                <p><strong className="text-gray-900">All services are 100% FREE.</strong> We get paid by universities, not you.</p>
                <p>Our team are former international students who&apos;ve been through the journey themselves.</p>
                <p>We support you <strong className="text-gray-900">before AND after</strong> you arrive in Ireland.</p>
              </div>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-[#F7A906] font-bold text-2xl">4.9</span>
                  <span className="text-[#F7A906]">★★★★★</span>
                </div>
                <div className="text-gray-500">
                  <strong className="text-[#2D6A4F]">1,000+</strong> Reviews on Google & Facebook
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "3", label: "Offices Worldwide" },
                { value: "34", label: "Expert Consultants" },
                { value: "14+", label: "Years Experience" },
                { value: "4,782", label: "Students Helped" },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl text-center">
                  <div className="text-4xl md:text-5xl font-black text-[#F7A906]">{s.value}</div>
                  <div className="text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
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
              { name: "Ercan Bebe", quote: "Knowing they have an office in Ireland and that I can always knock on their door gives me a sense of security." },
              { name: "Mehmet Taspinar", quote: "Their care, patience, and clear answers helped me manage the visa process very smoothly." },
              { name: "Tolga Solak", quote: "My consultant supported me throughout my entire journey—from sharing her knowledge to being there whenever I had questions." },
              { name: "Hilola Husanbaeva", quote: "A consultancy I can confidently recommend to anyone who wants to study abroad." },
              { name: "Ayse Kicali", quote: "It's been two years and I want to thank Mr. Sinan for making my dream of a Master's in Ireland come true." },
              { name: "Atakan Keles", quote: "Their warm, sincere attitude makes you feel like you're in a friendly environment. So glad I chose Education Ireland!" },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-4xl text-[#F7A906] mb-4">&ldquo;</div>
                <p className="text-gray-600 mb-4">{t.quote}</p>
                <div className="font-bold">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              { q: "When is the application deadline?", a: "For September 2026 intake, the deadline is April 30, 2026. Some universities may be more flexible." },
              { q: "Do I need IELTS?", a: "No! Ireland accepts Duolingo English Test ($49) instead of IELTS (€200). Much cheaper and easier." },
              { q: "Can I work while studying?", a: "Yes! You can work 20 hours/week during term and full-time during holidays. Minimum wage is €14.15/hour." },
              { q: "What happens after graduation?", a: "You get a 2-year work visa to stay in Ireland and work full-time at any company." },
              { q: "What GPA do I need?", a: "Most universities require 2.2-2.6 out of 4.0. We'll help you find the right fit for your profile." },
              { q: "Are there scholarships?", a: "Yes! NCI offers €2,000-€4,000, Griffith offers €2,500-€3,500, and DBS offers €1,000 for early deposits." },
              { q: "What's the visa refusal rate?", a: "Zero. None of our Master's students have ever been refused a visa." },
              { q: "Is the consultation really free?", a: "100% free. We're paid by universities, not students. You pay nothing for our services." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-[#00B2CC] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Your Future in Ireland Starts Now
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Don&apos;t wait. September 2026 spots are filling up fast.
          </p>

          <div className="bg-white/10 rounded-2xl p-8 md:p-12 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Get Your FREE Consultation</h3>
            <LeadForm dark />
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
            September 2026 Intake Closing Soon
          </h2>
          <p className="text-xl text-gray-300 mb-10">Application deadline: April 30, 2026</p>
          <Countdown />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-black text-gray-500 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-xl font-bold text-white mb-2">🍀 EDUCATION STATE</div>
          <p>© {new Date().getFullYear()} Education State. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
