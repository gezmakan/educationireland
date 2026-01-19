"use client";

import { useState } from "react";

const faqs = [
  {
    question: "When is the application deadline?",
    answer:
      "For September 2026 intakes, the application deadline is April 30. Note: Some universities may be more flexible with deadlines.",
  },
  {
    question: "Do I have to take the IELTS exam?",
    answer:
      "No! The Irish government now accepts the Duolingo English Test for all programs. The Duolingo exam costs only $49, compared to approximately €200 for IELTS.",
  },
  {
    question: "Can I apply without an English proficiency score?",
    answer:
      "Yes, you can apply. If your academic background is considered sufficient, the university may issue a Conditional Offer. This means your offer will become unconditional once you submit proof of English proficiency.",
  },
  {
    question: "What is the minimum GPA required?",
    answer:
      "Some universities require a minimum GPA of 2.2 out of 4, while others require at least 2.6. We can help you find programs that match your academic profile.",
  },
  {
    question: "Do universities offer scholarships?",
    answer:
      "Yes! NCI offers €2,000-€4,000 scholarships based on GPA. Griffith College offers €2,500-€3,500 depending on GPA and English proficiency. DBS provides €1,000 for early deposit payment.",
  },
  {
    question: "Can I work while studying?",
    answer:
      "Yes! During summer and Christmas holidays, you can work full-time, and part-time (20 hours/week) during the rest of the year. The minimum wage is €14.15 per hour—one of the highest in the world.",
  },
  {
    question: "Do I have the right to work after graduation?",
    answer:
      "Absolutely! Graduates of master's programs in Ireland are granted a 2-year work and residence permit. You can work full-time at top companies and build your international career.",
  },
  {
    question: "Do I need to pay an application fee?",
    answer:
      "Yes, a €250 deposit is required to start the process. If accepted, this is deducted from your tuition. If not accepted, the deposit is fully refunded.",
  },
  {
    question: "Have any students been refused a visa?",
    answer:
      "So far, none of our master's students have received a visa refusal. If a visa is refused, only €250 processing fee is deducted—the rest is fully refunded.",
  },
  {
    question: "Which companies can I work for after graduation?",
    answer:
      "Ireland hosts 9 of the top 10 global software companies, 9 of the top 10 US tech companies, all top 10 pharmaceutical companies, and 18 of the top 25 global financial services companies.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:text-[#F7A906] transition-colors"
      >
        <span className="font-medium text-[#1a1a1a] pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-[#F7A906] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[#6b7280]">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            Frequently Asked <span className="text-[#F7A906]">Questions</span>
          </h2>
          <p className="text-lg text-[#6b7280]">
            Everything you need to know about studying in Ireland
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-10">
          <p className="text-[#6b7280] mb-4">Still have questions?</p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 text-[#F7A906] font-semibold hover:underline"
          >
            Get in touch with our team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
