const offers = [
  {
    icon: "🎓",
    text: "Special Scholarships for Successful Students",
  },
  {
    icon: "📝",
    text: "Admission with Duolingo Exam ($49 vs €200 for IELTS)",
  },
  {
    icon: "💳",
    text: "Special Installment Payment Options",
  },
  {
    icon: "🏥",
    text: "Free Health Insurance (€100 Value)",
  },
  {
    icon: "🏠",
    text: "Free Accommodation Arrangement (€100 Value)",
  },
  {
    icon: "🇮🇪",
    text: "Ongoing Support from Dublin Office",
  },
];

export function SpecialOffer() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7A906]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2D6A4F]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <span className="inline-block px-4 py-1 bg-[#F7A906] text-white text-sm font-semibold rounded-full mb-4">
            Limited Time Offer
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            It&apos;s Not Too Late for{" "}
            <span className="text-[#F7A906]">September 2026!</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Application deadline: April 30, 2026. Don&apos;t miss your chance to start this
            September.
          </p>
        </div>

        {/* Offers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#F7A906]/50 transition-colors"
            >
              <span className="text-3xl">{offer.icon}</span>
              <span className="text-white font-medium">{offer.text}</span>
            </div>
          ))}
        </div>

        {/* Total savings highlight */}
        <div className="text-center">
          <div className="inline-block bg-[#F7A906] text-white px-8 py-4 rounded-2xl">
            <p className="text-sm uppercase tracking-wide mb-1">Total Savings</p>
            <p className="text-4xl font-bold">€200+</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a1a] font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Claim Your Offer
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
    </section>
  );
}
