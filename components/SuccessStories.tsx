const successStories = [
  {
    name: "Erel Ozturk",
    role: "Software Verification Engineer",
    company: "Druid Software",
    education: "MSc Cloud Computing, National College of Ireland",
    credentials: "Certified AWS Developer",
  },
  {
    name: "Ebubekir Ayhan",
    role: "Solution Engineer",
    company: "Microsoft",
    education: "National College of Ireland",
    credentials: "AI Business Solutions | Dynamics 365 ERP",
  },
  {
    name: "Bilge Tuna",
    role: "Energy & Process Engineer",
    company: "Covalen",
    education: "Stamp1G MSc Energy Management",
    credentials: "Technological University Dublin",
  },
  {
    name: "Cemre Er",
    role: "Law Enforcement Response Specialist",
    company: "TikTok",
    education: "MA Data Protection and Privacy, Dublin City University",
    credentials: "Trust & Safety | Legal Consultant",
  },
];

const techCompanies = [
  { name: "9 of top 10 global software companies", icon: "💻" },
  { name: "9 of top 10 US technology companies", icon: "🚀" },
  { name: "8 of world's largest game companies", icon: "🎮" },
  { name: "18 of top 25 financial services companies", icon: "💰" },
  { name: "All top 10 pharmaceutical companies", icon: "💊" },
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-[#FFF9EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            Students Who&apos;ve <span className="text-[#F7A906]">Made It</span>
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Our graduates are now working at the world&apos;s leading companies
          </p>
        </div>

        {/* Success stories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#F7A906] to-[#E09800] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                {story.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <h3 className="font-semibold text-[#1a1a1a] text-lg">{story.name}</h3>
              <p className="text-[#F7A906] font-medium text-sm mb-2">{story.role}</p>
              <p className="text-[#2D6A4F] font-semibold text-sm mb-3">{story.company}</p>

              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-[#6b7280]">{story.education}</p>
                <p className="text-xs text-[#6b7280] mt-1">{story.credentials}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech companies section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-[#1a1a1a] text-center mb-8">
            Which Tech Company Would You Like to Work For?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {techCompanies.map((company, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-[#FFF9EB] hover:bg-[#F7A906]/10 transition-colors"
              >
                <span className="text-3xl mb-2 block">{company.icon}</span>
                <p className="text-sm text-[#6b7280]">{company.name}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#6b7280] mt-6 text-sm">
            Ireland is home to the European headquarters of these global giants
          </p>
        </div>
      </div>
    </section>
  );
}
