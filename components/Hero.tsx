import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#FFF9EB] to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F7A906]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2D6A4F]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4">
            Your Path to a World-Class
            <span className="block text-gradient mt-2">Master&apos;s Degree in Ireland</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-[#6b7280] mb-8 max-w-3xl mx-auto">
            FREE Consulting for Malaysian Students
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Top 100 Universities",
              "2-Year Work Visa",
              "Affordable Tuition",
              "English-Speaking",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#F7A906]/20"
              >
                <svg className="w-5 h-5 text-[#2D6A4F]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-[#1a1a1a]">{item}</span>
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Get Free Consulting
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          {/* Trust indicator */}
          <p className="mt-6 text-sm text-[#6b7280]">
            Join <span className="font-semibold text-[#F7A906]">4,782+ students</span> who started
            their Ireland journey with us
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#6b7280]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
