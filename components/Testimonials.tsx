const testimonials = [
  {
    name: "Ercan Bebe",
    quote:
      "Knowing that they have an office in Ireland and that I can always knock on their door gives me a sense of security.",
  },
  {
    name: "Hilola Husanbaeva",
    quote:
      "A good consultancy company that I can confidently recommend to anyone who wants to study abroad.",
  },
  {
    name: "Nisa Nur Sever",
    quote: "Don't be afraid to write your own story...",
  },
  {
    name: "Elif Olmez",
    quote:
      "Knowing that they have an office in Ireland and that I can always knock on their door gives me a sense of security.",
  },
  {
    name: "Mehmet Taspinar",
    quote:
      "I owe getting my visa to Education Ireland. Their care, interest, patience, and clear answers to all my questions helped me manage this process very smoothly.",
  },
  {
    name: "Tolga Solak",
    quote:
      "I am truly grateful to my consultant Seda, who supported me throughout my entire journey in Ireland—from sharing her knowledge with me to being there whenever I had questions.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-[#FFF9EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            What Our Students <span className="text-[#F7A906]">Say</span>
          </h2>
          <p className="text-lg text-[#6b7280]">
            Real stories from students who made their Ireland dream a reality
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#F7A906] rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-[#6b7280] italic mb-6 pt-4">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* Avatar */}
                <div className="w-10 h-10 bg-gradient-to-br from-[#2D6A4F] to-[#95D5B2] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">{testimonial.name}</p>
                  <p className="text-xs text-[#6b7280]">Education State Student</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Start Your Success Story
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
