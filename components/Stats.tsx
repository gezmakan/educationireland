const stats = [
  { value: "3", label: "Offices", description: "Global presence" },
  { value: "34", label: "Consultants", description: "Expert team" },
  { value: "14+", label: "Years", description: "Of experience" },
  { value: "4,782", label: "Students", description: "Helped so far" },
];

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
              Who Is <span className="text-[#F7A906]">Education State</span>?
            </h2>

            <div className="space-y-4 text-[#6b7280]">
              <p>
                Education State was founded in 2010 and is the only overseas education consultancy
                that focuses <strong className="text-[#1a1a1a]">exclusively on Ireland</strong>,
                with an office in Dublin.
              </p>

              <p>
                <strong className="text-[#1a1a1a]">All of our consultancy services are completely free of charge.</strong>
              </p>

              <p>
                Our team consists of former international students who understand the study-abroad
                journey firsthand.
              </p>

              <p>
                With 15 years of experience, we have helped more students study in Ireland than any
                other consultancy.
              </p>

              <p>
                We support our students at every stage, both{" "}
                <strong className="text-[#1a1a1a]">before and after arrival</strong> in Ireland.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FFF9EB] rounded-full">
                <span className="text-[#F7A906] font-bold">4.9</span>
                <div className="flex text-[#F7A906]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#6b7280]">Google (426 reviews)</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-[#FFF9EB] rounded-full">
                <span className="text-[#2D6A4F] font-bold">1,000+</span>
                <span className="text-sm text-[#6b7280]">Positive Reviews</span>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FFF9EB] to-white p-6 rounded-2xl text-center border border-[#F7A906]/10"
              >
                <p className="text-4xl sm:text-5xl font-bold text-[#F7A906] mb-1">{stat.value}</p>
                <p className="text-lg font-semibold text-[#1a1a1a]">{stat.label}</p>
                <p className="text-sm text-[#6b7280]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
