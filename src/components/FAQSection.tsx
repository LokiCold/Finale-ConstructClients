import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "I've tried agencies before and got burned. How are you different?",
    answer: "Most agencies run low-budget, ineffective ads, fearing clients won't invest more—leading to weak results. We optimise for profitable growth, not just cheap leads. With AI-powered appointment setting, elite UGC content, and a multi-channel ad strategy, we consistently deliver qualified, eager-to-buy leads that convert."
  },
  {
    question: "Can I just do this myself?",
    answer: "Sure, but do you have the time to master high-level ad strategies, AI automation, SEO, tracking systems, and UGC content—while running your business? We bring industry-specific expertise, allowing you to skip years of trial & error and get straight to measurable growth."
  },
  {
    question: "Is this worth the investment?",
    answer: (
      <div>
        <p className="mb-4">Clients typically see:</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-[#ec9611]">✅</span> 5.8x ROI on ad spend 📈
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ec9611]">✅</span> 30% fewer no-shows with AI-powered follow-ups 📅
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ec9611]">✅</span> 312% more organic traffic through SEO & content marketing 🚀
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ec9611]">✅</span> 76.2% lower cost per Google Ads conversion 💰
          </li>
        </ul>
        <p className="mt-4">If you're serious about scaling, the numbers speak for themselves.</p>
      </div>
    )
  },
  {
    question: "What kind of support do I get?",
    answer: "You'll have direct access via Slack and a client portal in ClickUp to track progress. We provide weekly reports and a clear roadmap during onboarding, so you'll always know what's next. No guesswork, no confusion."
  },
  {
    question: "Do you continue optimizing after launch?",
    answer: "Yes, for Facebook & Google Ads, AI appointment setting, and tracking systems. We refine and scale your campaigns to keep booking high-value clients on autopilot."
  },
  {
    question: "How long until I see results?",
    answer: "For paid ads, expect leads around the 25 day mark from onboarding, AI appointment setting starts converting immediately, and SEO gains momentum within 3-6 months—leading to long-term dominance in your local market."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#38071e]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions <span className="text-[#ec9611]">🤔</span>
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Get answers to common questions about our services and process
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#2a0517] rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#ec9611] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#ec9611] flex-shrink-0" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] pb-6' : 'max-h-0'
                }`}
              >
                <div className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 